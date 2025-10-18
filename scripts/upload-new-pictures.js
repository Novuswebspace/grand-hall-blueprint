import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Supabase configuration
const supabaseUrl = 'https://mdjddchxmborqtvygkso.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kamRkY2h4bWJvcnF0dnlna3NvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5MTg2NTksImV4cCI6MjA3NTQ5NDY1OX0.JxHFARc1ogSsWekgoaZTC49kDoQb-qtdA9mDnZ4cZuc'

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false
  }
})

// Function to categorize images based on filename patterns
function categorizeImage(filename) {
  const name = filename.toLowerCase()
  
  if (name.startsWith('dsc_')) {
    return 'performances'
  } else if (name.startsWith('ss-')) {
    return 'events'
  } else if (name.includes('audience')) {
    return 'audience'
  } else if (name.includes('cover') || name.includes('ward')) {
    return 'documentation'
  } else if (name.includes('rajendra') || name.match(/\d{1,2}-\d{1,2}-\d{2}/)) {
    return 'historical'
  } else if (name.startsWith('kba_')) {
    return 'portraits'
  } else {
    return 'general'
  }
}

// Function to generate a clean filename
function generateCleanFilename(originalFilename) {
  return originalFilename
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9.-]/g, '')
}

async function uploadNewPictures() {
  console.log('🚀 Starting upload of new picture assets to Supabase Storage...\n')
  
  const pictureDir = path.resolve(__dirname, '../Picture Assests')
  
  if (!fs.existsSync(pictureDir)) {
    console.log('❌ Picture Assests directory not found!')
    return
  }
  
  const files = fs.readdirSync(pictureDir)
  const imageFiles = files.filter(file => 
    /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
  )
  
  console.log(`📁 Found ${imageFiles.length} image files to upload\n`)
  
  const uploadResults = []
  
  for (const filename of imageFiles) {
    try {
      const filePath = path.join(pictureDir, filename)
      const fileBuffer = fs.readFileSync(filePath)
      const fileSize = (fileBuffer.length / 1024 / 1024).toFixed(2) // MB
      
      // Categorize and generate clean filename
      const category = categorizeImage(filename)
      const cleanFilename = generateCleanFilename(filename)
      const storagePath = `gallery/${category}/${cleanFilename}`
      
      console.log(`📤 Uploading: ${filename} (${fileSize} MB) → ${storagePath}`)
      
      // Upload to Supabase Storage
      const { data, error } = await supabase.storage
        .from('assets')
        .upload(storagePath, fileBuffer, {
          contentType: `image/${path.extname(filename).slice(1).toLowerCase()}`,
          upsert: true
        })
      
      if (error) {
        console.log(`❌ Error uploading ${filename}:`, error.message)
      } else {
        // Get public URL
        const { data: urlData } = supabase.storage
          .from('assets')
          .getPublicUrl(storagePath)
        
        uploadResults.push({
          originalName: filename,
          category,
          storagePath,
          publicUrl: urlData.publicUrl,
          size: fileSize
        })
        
        console.log(`✅ Successfully uploaded: ${filename}`)
      }
    } catch (err) {
      console.log(`❌ Error processing ${filename}:`, err.message)
    }
  }
  
  // Generate summary
  console.log('\n📊 Upload Summary:')
  console.log(`Total files processed: ${imageFiles.length}`)
  console.log(`Successfully uploaded: ${uploadResults.length}`)
  
  // Group by category
  const byCategory = uploadResults.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = []
    acc[item.category].push(item)
    return acc
  }, {})
  
  console.log('\n📂 Files by category:')
  Object.entries(byCategory).forEach(([category, files]) => {
    console.log(`  ${category}: ${files.length} files`)
  })
  
  // Save results to JSON for reference
  const resultsPath = path.join(__dirname, 'upload-results.json')
  fs.writeFileSync(resultsPath, JSON.stringify(uploadResults, null, 2))
  console.log(`\n💾 Upload results saved to: ${resultsPath}`)
  
  console.log('\n🎉 Picture upload completed!')
}

uploadNewPictures().catch(console.error)
