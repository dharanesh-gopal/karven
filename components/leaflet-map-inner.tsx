"use client";

import React, { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';

// Locations data
const locations = [
    { id: 1, name: "Pune (HQ)", lat: 18.5204, lng: 73.8567 },
    { id: 2, name: "IIT Ropar", lat: 30.6452, lng: 76.8044 },
    { id: 3, name: "Jaipur", lat: 26.9124, lng: 75.7873 },
];

export default function InnerLeafletMap() {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<any>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    }, []);

    useEffect(() => {
        if (!isMounted || !mapRef.current || mapInstanceRef.current) return;

        // Dynamic import Leaflet to avoid SSR issues and potential module evaluation errors
        import('leaflet').then((L) => {
            if (!mapRef.current || mapInstanceRef.current) return;

            try {
                // Fix for icon issues
                // @ts-ignore
                delete L.Icon.Default.prototype._getIconUrl;
                L.Icon.Default.mergeOptions({
                    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
                    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
                    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
                });

                // Initialize Map
                const map = L.map(mapRef.current).setView([22.5937, 78.9629], 4);
                mapInstanceRef.current = map;

                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);

                // Add Markers
                locations.forEach(loc => {
                    L.marker([loc.lat, loc.lng])
                        .addTo(map)
                        .bindPopup(`
                            <div style="font-family: var(--font-outfit); text-align: center;">
                                <strong style="color: #8B0000; display: block; margin-bottom: 2px;">${loc.name}</strong>
                                <span style="font-size: 10px; color: #666; text-transform: uppercase; letter-spacing: 1px;">Karvensen Hub</span>
                            </div>
                        `);
                });

                // Invalidate size to ensure it fills the container correctly
                setTimeout(() => {
                    map.invalidateSize();
                }, 100);

            } catch (error) {
                console.error("Error initializing Leaflet map:", error);
            }
        });

        // Cleanup function
        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        };
    }, [isMounted]);

    return (
        <div className="w-full h-full rounded-xl overflow-hidden shadow-inner z-0 relative bg-gray-100 min-h-[400px]">
            <div
                ref={mapRef}
                style={{ height: "100%", width: "100%" }}
                className="z-0"
            />
            {!isMounted && (
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-outfit bg-gray-100 z-10">
                    Preparing Satellite Link...
                </div>
            )}
        </div>
    );
}