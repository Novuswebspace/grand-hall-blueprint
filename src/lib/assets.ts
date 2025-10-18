import { supabase } from './supabase'

// Base URL for Supabase Storage
const STORAGE_URL = 'https://mdjddchxmborqtvygkso.supabase.co/storage/v1/object/public/assets'

// Asset URLs from Supabase Storage
export const ASSETS = {
  images: {
    eventPerformance: `${STORAGE_URL}/images/event-performance.jpg`,
    heroConcert: `${STORAGE_URL}/images/hero-concert.jpg`,
    veenaDetail: `${STORAGE_URL}/images/veena-detail.jpg`,
  },
  logos: {
    jssLogo: `${STORAGE_URL}/logos/jss_mahavidyapeetha_logo.png`,
    mvp: `${STORAGE_URL}/logos/mvp.png`,
  },
  icons: {
    placeholder: `${STORAGE_URL}/icons/placeholder.svg`,
    favicon: `${STORAGE_URL}/icons/favicon.ico`,
  },
  gallery: {
    events: {
      ss1001: `${STORAGE_URL}/gallery/events/ss-1001.jpg`,
      ss1101: `${STORAGE_URL}/gallery/events/ss-1101.jpg`,
      ss1201: `${STORAGE_URL}/gallery/events/ss-1201.jpg`,
      ss1301: `${STORAGE_URL}/gallery/events/ss-1301.jpg`,
      ss2101: `${STORAGE_URL}/gallery/events/ss-2101.jpg`,
      ss2201: `${STORAGE_URL}/gallery/events/ss-2201.jpg`,
      ss2202: `${STORAGE_URL}/gallery/events/ss-2202.jpg`,
      ss2203: `${STORAGE_URL}/gallery/events/ss-2203.jpg`,
      ss2204: `${STORAGE_URL}/gallery/events/ss-2204.jpg`,
      ss2205: `${STORAGE_URL}/gallery/events/ss-2205.jpg`,
      ss2206: `${STORAGE_URL}/gallery/events/ss-2206.jpg`,
      ss2207: `${STORAGE_URL}/gallery/events/ss-2207.jpg`,
      ss201: `${STORAGE_URL}/gallery/events/ss-201.jpg`,
      ss301: `${STORAGE_URL}/gallery/events/ss-301.jpg`,
      ss302: `${STORAGE_URL}/gallery/events/ss-302.jpg`,
      ss303: `${STORAGE_URL}/gallery/events/ss-303.jpg`,
      audience: `${STORAGE_URL}/gallery/events/ss-audience.jpg`,
    },
    performances: {
      dsc1548: `${STORAGE_URL}/gallery/performances/dsc1548.jpg`,
      dsc1567: `${STORAGE_URL}/gallery/performances/dsc1567.jpg`,
      dsc1585: `${STORAGE_URL}/gallery/performances/dsc1585.jpg`,
    },
    general: {
      img0389004: `${STORAGE_URL}/gallery/general/0389.004.jpg`,
      img0389006: `${STORAGE_URL}/gallery/general/0389.006.jpg`,
      img0421184: `${STORAGE_URL}/gallery/general/0421.184.jpg`,
      img0555003: `${STORAGE_URL}/gallery/general/0555.003.jpg`,
      img0555008: `${STORAGE_URL}/gallery/general/0555.008.jpg`,
      img0614007: `${STORAGE_URL}/gallery/general/0614.007.jpg`,
      img0614009: `${STORAGE_URL}/gallery/general/0614.009.jpg`,
      img0621029: `${STORAGE_URL}/gallery/general/0621.029.jpg`,
      img0646015: `${STORAGE_URL}/gallery/general/0646.015.jpg`,
      img0646068: `${STORAGE_URL}/gallery/general/0646.068.jpg`,
      img0675025: `${STORAGE_URL}/gallery/general/0675.025.jpg`,
      img0677019: `${STORAGE_URL}/gallery/general/0677.019.jpg`,
    },
    documentation: {
      coverPages: `${STORAGE_URL}/gallery/documentation/cover-pages.jpg`,
      ward0014: `${STORAGE_URL}/gallery/documentation/sangeethgarur--aurved-ward0014.jpg`,
      ward0018: `${STORAGE_URL}/gallery/documentation/sangeethgarur--aurved-ward0018.jpg`,
    },
    historical: {
      sriRajendra: `${STORAGE_URL}/gallery/historical/sri-rajendra-6-12-900017.jpg`,
    },
    portraits: {
      kba9647: `${STORAGE_URL}/gallery/portraits/kba9647.jpg`,
    }
  }
} as const

// Helper function to get asset URL
export const getAssetUrl = (path: string) => {
  return `${STORAGE_URL}/${path}`
}

// Helper function to upload new assets
export const uploadAsset = async (file: File, path: string) => {
  const { data, error } = await supabase.storage
    .from('assets')
    .upload(path, file, {
      upsert: true
    })

  if (error) {
    throw new Error(`Failed to upload asset: ${error.message}`)
  }

  return getAssetUrl(path)
}

// Helper function to delete assets
export const deleteAsset = async (path: string) => {
  const { error } = await supabase.storage
    .from('assets')
    .remove([path])

  if (error) {
    throw new Error(`Failed to delete asset: ${error.message}`)
  }

  return true
}
