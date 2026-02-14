import { fetchSanityData } from "@/lib/fetchSanityData"
import { StatsClient } from "./stats-client"

interface StatData {
  _id: string
  label: string
  value: string
  order: number
}

const fallbackStats = [
  { _id: "1", value: "150+", label: "Clients Worldwide", order: 1 },
  { _id: "2", value: "500+", label: "Projects Completed", order: 2 },
  { _id: "3", value: "25+", label: "Industry Awards", order: 3 },
  { _id: "4", value: "98%", label: "Client Satisfaction", order: 4 }
]

export async function StatsSection() {
  const data = await fetchSanityData<StatData[]>(
    '*[_type == "stats" && isActive == true] | order(order asc)',
    {},
    fallbackStats,
    { tags: ['stats'], revalidate: 300 }
  )

  const stats = data || fallbackStats

  return <StatsClient stats={stats} />
}
