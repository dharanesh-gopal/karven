"use client";

import React from 'react';
import dynamic from 'next/dynamic';

const InnerLeafletMap = dynamic(
  () => import('./leaflet-map-inner'),
  {
    ssr: false,
    loading: () => <div className="w-full h-[400px] bg-gray-100 rounded-xl flex items-center justify-center">Loading Map...</div>
  }
);

export default function LeafletMap() {
  return <InnerLeafletMap />;
}