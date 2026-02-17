import { fetchSanityData } from "@/lib/fetchSanityData"
import { urlFor } from "@/sanity/lib/image"
import { FeaturesClient } from "./features-client"

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
  title: "Indigenous Drone Technology.",
  subtitle: "Built in India. Powered by Innovation.",
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

  // Process images
  const images = galleryData?.images && galleryData.images.length > 0 && galleryData.images[0].asset?._ref
    ? galleryData.images.map((img) => ({
      src: urlFor(img.asset).url(),
      alt: img.alt || "Gallery image"
    }))
    : fallbackImages

  const autoplayInterval = (galleryData?.autoplayInterval || 3) * 1000

  return (
    <FeaturesClient
      title={galleryData?.title || "Built in India."}
      subtitle={galleryData?.subtitle || "Powered by Innovation."}
      images={images}
      autoplayInterval={autoplayInterval}
    />
  )
}
