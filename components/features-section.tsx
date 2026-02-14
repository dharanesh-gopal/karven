import { fetchSanityData } from "@/lib/fetchSanityData"
import { urlFor } from "@/sanity/lib/image"
import { FeaturesClient } from "./features-client"

interface StatData {
  _id: string
  label: string
  value: string
  order: number
}

interface GalleryImage {
  _key: string
  asset: {
    _ref: string
    _type: string
  }
  alt: string
}

interface GalleryData {
  title: string
  subtitle?: string
  images: GalleryImage[]
  autoplayInterval?: number
}

const fallbackData: GalleryData = {
  title: "Built in India.",
  subtitle: "Powered by Innovation.",
  images: [
    { _key: "1", asset: { _ref: "", _type: "reference" }, alt: "Educational drone" },
    { _key: "2", asset: { _ref: "", _type: "reference" }, alt: "Training program 1" },
    { _key: "3", asset: { _ref: "", _type: "reference" }, alt: "Training program 2" },
    { _key: "4", asset: { _ref: "", _type: "reference" }, alt: "Training program 3" },
  ],
  autoplayInterval: 3,
}

const fallbackImages = [
  { src: "/edu drone.png", alt: "Educational drone" },
  { src: "/train-1.jpeg", alt: "Training program 1" },
  { src: "/train-2.jpeg", alt: "Training program 2" },
  { src: "/train-3.jpeg", alt: "Training program 3" },
]

const fallbackStats = [
  { _id: "1", value: "50,000+", label: "Acres Scanned & Analyzed", order: 1 },
  { _id: "2", value: "5TB+", label: "Aerial Data Processed", order: 2 },
  { _id: "3", value: "98%", label: "Accuracy in Defect Detection", order: 3 },
  { _id: "4", value: "500+", label: "AI Models Deployed", order: 4 }
]

export async function FeaturesSection() {
  const galleryData = await fetchSanityData<GalleryData>(
    `*[_type == "gallerySection" && isActive == true][0]{
      title,
      subtitle,
      images[] {
        _key,
        asset,
        alt
      },
      autoplayInterval
    }`,
    {},
    fallbackData,
    { tags: ['gallery'], revalidate: 300 }
  )

  const statsData = await fetchSanityData<StatData[]>(
    `*[_type == "stats" && isActive == true] | order(order asc) {
      _id,
      label,
      value,
      order
    }`,
    {},
    fallbackStats,
    { tags: ['stats'], revalidate: 300 }
  )

  // Process images
  const images = galleryData?.images && galleryData.images.length > 0 && galleryData.images[0].asset?._ref
    ? galleryData.images.map((img) => ({
        src: urlFor(img.asset).url(),
        alt: img.alt || "Gallery image"
      }))
    : fallbackImages

  const autoplayInterval = (galleryData?.autoplayInterval || 3) * 1000
  const stats = statsData || fallbackStats

  return (
    <FeaturesClient 
      title={galleryData?.title || "Built in India."}
      subtitle={galleryData?.subtitle || "Powered by Innovation."}
      images={images}
      autoplayInterval={autoplayInterval}
      stats={stats}
    />
  )
}
