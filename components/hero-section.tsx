import { fetchSanityData } from "@/lib/fetchSanityData"
import { HeroClient } from "./hero-client"

interface HeroData {
  title: string
  subtitle: string
  backgroundVideo?: {
    asset?: {
      url?: string
    }
  }
  buttonText?: string
  buttonLink?: string
}

const fallbackData: HeroData = {
  title: "From Fertile Fields to Secure Borders.",
  subtitle: "We deploy advanced AI and drone technology to revolutionize precision agriculture and fortify national defense.",
  buttonText: "Explore",
  buttonLink: "/services"
}

export async function HeroSection() {
  const data = await fetchSanityData<HeroData>(
    `*[_type == "heroSection" && isActive == true][0] {
      title,
      subtitle,
      backgroundVideo {
        asset->{
          _id,
          url
        }
      },
      buttonText,
      buttonLink
    }`,
    {},
    fallbackData,
    { tags: ['hero'], revalidate: 60 }
  )

  const content = data || fallbackData
  const videoUrl = content.backgroundVideo?.asset?.url || "/Drone_Cinematic_Video.mp4"

  return (
    <HeroClient 
      title={content.title}
      subtitle={content.subtitle}
      videoUrl={videoUrl}
      buttonText={content.buttonText || "Explore"}
      buttonLink={content.buttonLink || "/services"}
    />
  )
}
