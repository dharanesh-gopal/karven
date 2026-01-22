'use client';

import React from 'react';
import ContactForm from '@/components/contact-form';
import LeafletMap from '@/components/locations-map';

export default function ContactSection() {
  return (
    <section className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Form on the left */}
          <div className="flex flex-col">
            <ContactForm />
          </div>

          {/* Map on the right */}
          <div className="flex flex-col">
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 group h-full flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#8B0000] mb-2 flex items-center gap-2">
                  <span className="p-2 bg-red-50 rounded-lg">📍</span>
                  Operational Presence
                </h3>
                <p className="text-gray-500 text-sm">
                  Our strategic locations across India ensure rapid response and localized support.
                </p>
              </div>

              <div className="flex-1 min-h-[400px] rounded-xl overflow-hidden border border-gray-100 shadow-inner group-hover:shadow-md transition-shadow duration-300">
                <LeafletMap />
              </div>

              <div className="mt-6 grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-lg bg-gray-50 border border-gray-100">
                  <span className="block text-[10px] uppercase font-bold text-gray-400">Pune</span>
                  <span className="text-[10px] text-green-600 font-bold">HQ</span>
                </div>
                <div className="p-2 rounded-lg bg-gray-50 border border-gray-100">
                  <span className="block text-[10px] uppercase font-bold text-gray-400">Ropar</span>
                  <span className="text-[10px] text-blue-600 font-bold">RPTO</span>
                </div>
                <div className="p-2 rounded-lg bg-gray-50 border border-gray-100">
                  <span className="block text-[10px] uppercase font-bold text-gray-400">Jaipur</span>
                  <span className="text-[10px] text-orange-600 font-bold">RPTO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
