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

// Assets to upload
const assetsToUpload = [
  {
    localPath: '../src/assets/event-performance.jpg',
    storagePath: 'images/event-performance.jpg',
    contentType: 'image/jpeg'
  },
  {
    localPath: '../src/assets/hero-concert.jpg',
    storagePath: 'images/hero-concert.jpg',
    contentType: 'image/jpeg'
  },
  {
    localPath: '../src/assets/veena-detail.jpg',
    storagePath: 'images/veena-detail.jpg',
    contentType: 'image/jpeg'
  },
  {
    localPath: '../public/jss_mahavidyapeetha_logo-removebg-preview.png',
    storagePath: 'logos/jss_mahavidyapeetha_logo.png',
    contentType: 'image/png'
  },
  {
    localPath: '../public/mvp.png',
    storagePath: 'logos/mvp.png',
    contentType: 'image/png'
  },
  {
    localPath: '../public/placeholder.svg',
    storagePath: 'icons/placeholder.svg',
    contentType: 'image/svg+xml'
  },
  {
    localPath: '../public/favicon.ico',
    storagePath: 'icons/favicon.ico',
    contentType: 'application/octet-stream'
  }
]

async function uploadAssets() {
  console.log('🚀 Starting asset upload to Supabase Storage...\n')

  for (const asset of assetsToUpload) {
    try {
      const filePath = path.resolve(__dirname, asset.localPath)
      
      // Check if file exists
      if (!fs.existsSync(filePath)) {
        console.log(`❌ File not found: ${filePath}`)
        continue
      }

      // Read file
      const fileBuffer = fs.readFileSync(filePath)
      const fileSize = (fileBuffer.length / 1024).toFixed(2)

      console.log(`📤 Uploading: ${asset.storagePath} (${fileSize} KB)`)

      // Upload to Supabase Storage
      const { data, error } = await supabase.storage
        .from('assets')
        .upload(asset.storagePath, fileBuffer, {
          contentType: asset.contentType,
          upsert: true // Overwrite if exists
        })

      if (error) {
        console.log(`❌ Error uploading ${asset.storagePath}:`, error.message)
      } else {
        console.log(`✅ Successfully uploaded: ${asset.storagePath}`)
        
        // Get public URL
        const { data: urlData } = supabase.storage
          .from('assets')
          .getPublicUrl(asset.storagePath)
        
        console.log(`🔗 Public URL: ${urlData.publicUrl}\n`)
      }
    } catch (err) {
      console.log(`❌ Error processing ${asset.storagePath}:`, err.message)
    }
  }

  console.log('🎉 Asset upload completed!')
}

uploadAssets().catch(console.error)
