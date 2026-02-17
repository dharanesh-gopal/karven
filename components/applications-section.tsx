import { fetchSanityData } from "@/lib/fetchSanityData"
import { urlFor } from "@/sanity/lib/image"
import { ApplicationsClient } from "./applications-client"

interface ApplicationItem {
    _id: string
    stat: string
    title: string
    description: string
    image: any
    order: number
}

interface SectionData {
    title: string
    isActive: boolean
}

const fallbackItems = [
    {
        stat: "50,000+",
        title: "Acres Scanned & Analyzed",
        description: "Executing large-scale aerial surveys with precision mapping technology to deliver high-resolution geospatial intelligence for agriculture and infrastructure.",
        image: "/dron in agri land.png",
        alt: "Acres Scanned and Analyzed Mapping"
    },
    {
        stat: "5TB+",
        title: "Aerial Data Processed",
        description: "Transforming massive volumes of raw aerial imagery into actionable insights through our proprietary AI-driven data processing pipelines.",
        image: "/edu drone.png",
        alt: "AI Data Processing Visualization"
    },
    {
        stat: "98%",
        title: "Accuracy in Defect Detection",
        description: "Achieving industry-leading precision in identifying structural anomalies and maintenance requirements using custom-trained vision models.",
        image: "/training-drone.png",
        alt: "Precision Inspection and Defect Detection"
    },
    {
        stat: "500+",
        title: "AI Models Deployed",
        description: "Scaling intelligence across diverse sectors with specialized neural networks optimized for real-time industrial monitoring and analysis.",
        image: "/drone-flying-over-farm-field-at-sunset.jpg",
        alt: "AI Model Deployment for Drones"
    }
]

export async function ApplicationsSection() {
    const sectionSettings = await fetchSanityData<SectionData>(
        `*[_type == "applicationsSection" && isActive == true][0] {
      title
    }`,
        {},
        { title: "Applications", isActive: true }
    )

    const itemsData = await fetchSanityData<ApplicationItem[]>(
        `*[_type == "applicationItem" && isActive == true] | order(order asc) {
      _id,
      stat,
      title,
      description,
      image,
      order
    }`,
        {},
        []
    )

    const items = itemsData && itemsData.length > 0
        ? itemsData.map((item, index) => {
            // Check if Sanity has an image
            const hasSanityImage = item.image?.asset?._ref || item.image?.asset

            // Try to find a matching image from the fallbackItems based on title
            // or use the one at the same index, or the first one as a final resort
            const localFallback = fallbackItems.find(f => f.title === item.title)?.image
                || fallbackItems[index]?.image
                || fallbackItems[0].image

            return {
                stat: item.stat,
                title: item.title,
                description: item.description,
                image: hasSanityImage ? urlFor(item.image).url() : localFallback,
                alt: item.title
            }
        })
        : fallbackItems

    return (
        <ApplicationsClient
            sectionTitle={sectionSettings?.title || "Applications"}
            items={items}
        />
    )
}
