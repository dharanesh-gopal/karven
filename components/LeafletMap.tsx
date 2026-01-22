"use client"

import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

// Fix for default marker icons missing in Next.js/Leaflet
const iconUrl = "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png"
const iconRetinaUrl = "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png"
const shadowUrl = "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"

const customIcon = L.icon({
    iconUrl: iconUrl,
    iconRetinaUrl: iconRetinaUrl,
    shadowUrl: shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41], // approximate
})

interface Location {
    name: string
    role: string
    address: string
    phone: string
    email: string
    lat: number
    lng: number
}

interface LeafletMapProps {
    locations: Location[]
}

export default function LeafletMap({ locations }: LeafletMapProps) {
    const [isClient, setIsClient] = useState(false)
    
    // Center roughly on India
    const position: [number, number] = [20.5937, 78.9629]
    const zoom = 5

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) {
        return <div className="h-full w-full min-h-[400px] bg-gray-100 rounded-2xl animate-pulse" />
    }

    return (
        <div className="h-full w-full min-h-[400px] relative z-0">
            <MapContainer
                key="leaflet-map"
                center={position}
                zoom={zoom}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%", borderRadius: "1rem" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {locations.map((location, index) => (
                    <Marker
                        key={index}
                        position={[location.lat, location.lng]}
                        icon={customIcon}
                    >
                        <Popup>
                            <div className="p-1 min-w-[200px]">
                                <h3 className="font-bold text-gray-900 text-base">{location.name}</h3>
                                <p className="text-xs text-red-500 font-bold uppercase mb-2">{location.role}</p>
                                <p className="text-sm text-gray-700 leading-relaxed">{location.address}</p>
                                <div className="mt-2 border-t pt-2">
                                    <p className="text-xs text-gray-500">Phone: {location.phone}</p>
                                    <p className="text-xs text-gray-500">Email: {location.email}</p>
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    )
}
