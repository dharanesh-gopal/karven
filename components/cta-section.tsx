import { fetchSanityData } from "@/lib/fetchSanityData"
import { urlFor } from "@/sanity/lib/image"
import { getFileUrl } from "@/sanity/lib/file"
import { CTAClient } from "./cta-client"

interface CTASectionData {
  title: string
  description?: string
  buttonText: string
  buttonLink: string
  backgroundImage?: {
    asset: {
      _ref: string
      _type: string
    }
  }
  backgroundVideo?: {
    asset: {
      url?: string
    }
  }
}

const fallbackData: CTASectionData = {
  title: "Ready to Innovate with Karvensen?",
  description: "Let's discuss how our AI-driven solutions and drone technology can transform your operations. Join the future of intelligent automation.",
  buttonText: "Schedule a Consultation",
  buttonLink: "/contact",
}

export async function CTASection() {
  const ctaData = await fetchSanityData<CTASectionData>(
    `*[_type == "ctaSection" && isActive == true][0]{
      title,
      description,
      buttonText,
      buttonLink,
      backgroundImage {
        asset
      },
      backgroundVideo {
        asset-> {
          url
        }
      }
    }`,
    {},
    fallbackData,
    { tags: ['cta'], revalidate: 300 }
  )

  const videoUrl = ctaData?.backgroundVideo?.asset ? getFileUrl(ctaData.backgroundVideo.asset) : "/drone%20video%202.mp4"
  const imageUrl = ctaData?.backgroundImage?.asset ? urlFor(ctaData.backgroundImage.asset).width(1920).url() : undefined

  return (
    <CTAClient 
      title={ctaData?.title || "Ready to Innovate with Karvensen?"}
      description={ctaData?.description || "Let's discuss how our AI-driven solutions and drone technology can transform your operations. Join the future of intelligent automation."}
      buttonText={ctaData?.buttonText || "Schedule a Consultation"}
      videoUrl={videoUrl}
      imageUrl={imageUrl}
    />
  )
}
