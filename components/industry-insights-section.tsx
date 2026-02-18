import { fetchSanityData } from "@/lib/fetchSanityData"
import { urlFor } from "@/sanity/lib/image"
import { IndustryInsightsClient } from "./industry-insights-client"

interface SectionSettings {
    badge: string
    isActive: boolean
}

interface InsightItem {
    _id: string
    tabTitle: string
    title: string
    description: string
    image: any
    icon: string
    order: number
}

const fallbackItems = [
    {
        id: 'training',
        tabTitle: 'Drone Training',
        icon: 'layout',
        title: 'Empower Your Future with Advanced Drone Education',
        description: "Unlock the full potential of aerial technology with Karvensen's specialized training programs. Our curriculum covers DGCA-certified operations, custom drone assembly, and advanced data processing for GIS and mapping. Whether you're entering the industry or scaling your team's expertise, we provide the technical foundation to lead in the sky.",
        image: '/train-1.jpeg'
    },
    {
        id: 'services',
        tabTitle: 'Drone Services',
        icon: 'users',
        title: 'Intelligent Drone Services Optimized for Performance',
        description: "Transform your operations with high-precision aerial intelligence. Our end-to-end drone services provide actionable insights for agriculture, infrastructure inspection, and defense monitoring. By combining expert pilot deployment with automated AI analysis, we deliver the data you need to drive efficiency and innovation in every mission.",
        image: '/agri img.jpeg'
    }
]

export async function IndustryInsightsSection() {
    const settings = await fetchSanityData<SectionSettings>(
        `*[_type == "industryInsightsSection" && isActive == true][0] {
            badge
        }`,
        {},
        { badge: "Transforming Industries" },
        { revalidate: 60, tags: ['industry-insights'] }
    )

    const itemsData = await fetchSanityData<InsightItem[]>(
        `*[_type == "industryInsightItem" && isActive == true] | order(order asc) {
            _id,
            tabTitle,
            title,
            description,
            image,
            icon,
            order
        }`,
        {},
        [],
        { revalidate: 60, tags: ['industry-insights'] }
    )

    const items = itemsData && itemsData.length > 0
        ? itemsData.map((item) => ({
            id: item._id,
            tabTitle: item.tabTitle,
            title: item.title,
            description: item.description,
            image: item.image?.asset ? urlFor(item.image).url() : fallbackItems[0].image,
            icon: item.icon || 'layout'
        }))
        : fallbackItems

    return (
        <IndustryInsightsClient
            badge={settings?.badge || "Transforming Industries"}
            items={items}
        />
    )
}
