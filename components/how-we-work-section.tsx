import { fetchSanityData } from "@/lib/fetchSanityData"
import { urlFor } from "@/sanity/lib/image"
import { HowWeWorkClient } from "./how-we-work-client"

interface ProcessStep {
  _id: string
  title: string
  description: string
  stepNumber: number
  icon?: string
}

interface HowWeWorkSectionData {
  sectionTitle: string
  mainHeading: string
  description: string
  image?: {
    asset: {
      _ref: string
      _type: string
    }
  }
}

const fallbackSectionData: HowWeWorkSectionData = {
  sectionTitle: "How We Work",
  mainHeading: "Intelligent Integration: From Insight to Impact",
  description: "We follow a rigorous, data-driven methodology to ensure that every drone deployment is backed by powerful AI intelligence.",
}

const fallbackSteps = [
  {
    _id: "1",
    stepNumber: 1,
    title: "Strategic Consultation",
    description: "We partner with you to identify specific operational challenges.",
  },
  {
    _id: "2",
    stepNumber: 2,
    title: "AI-Driven System Design",
    description: "Developing custom solutions with proprietary AI models.",
  },
  {
    _id: "3",
    stepNumber: 3,
    title: "Precision Deployment",
    description: "Execution led by DGCA-certified pilots.",
  },
  {
    _id: "4",
    stepNumber: 4,
    title: "Advanced Analytics & Reporting",
    description: "Processing raw data into actionable business results.",
  },
]

export async function HowWeWorkSection() {
  const sectionData = await fetchSanityData<HowWeWorkSectionData>(
    `*[_type == "howWeWorkSection" && isActive == true][0]{
      sectionTitle,
      mainHeading,
      description,
      image {
        asset
      }
    }`,
    {},
    fallbackSectionData,
    { tags: ['how-we-work'], revalidate: 300 }
  )

  const data = await fetchSanityData<ProcessStep[]>(
    '*[_type == "processStep" && isActive == true] | order(stepNumber asc)',
    {},
    fallbackSteps,
    { tags: ['process-steps'], revalidate: 300 }
  )

  const processSteps = (data && data.length > 0) ? data : fallbackSteps
  
  const imageSrc = sectionData?.image?.asset 
    ? urlFor(sectionData.image.asset).width(800).url()
    : "/new k logo with services.png"

  return (
    <HowWeWorkClient 
      sectionTitle={sectionData?.sectionTitle || "How We Work"}
      mainHeading={sectionData?.mainHeading || "Intelligent Integration: From Insight to Impact"}
      description={sectionData?.description || "We follow a rigorous, data-driven methodology to ensure that every drone deployment is backed by powerful AI intelligence."}
      imageSrc={imageSrc}
      processSteps={processSteps}
    />
  )
}
