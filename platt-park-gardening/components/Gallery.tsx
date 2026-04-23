'use client';

import { useState } from 'react';

interface GalleryItem {
  title: string;
  before: string;
  after: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    title: 'Platt Park Spring Transformation',
    before: '📸 Before',
    after: '✨ After',
    description: 'Complete spring cleanup with new perennial plantings and mulch refresh',
  },
  {
    title: 'Cherry Creek Landscape Design',
    before: '📸 Before',
    after: '✨ After',
    description: 'Custom hardscaping and native plant installation for drought resistance',
  },
  {
    title: 'Backyard Oasis',
    before: '📸 Before',
    after: '✨ After',
    description: 'Water feature installation with low-maintenance xeriscape design',
  },
  {
    title: 'Spring Garden Revival',
    before: '📸 Before',
    after: '✨ After',
    description: 'Seasonal pruning, planting, and new mulch application',
  },
  {
    title: 'Residential Redesign',
    before: '📸 Before',
    after: '✨ After',
    description: 'Complete landscape overhaul with native plants and pathways',
  },
  {
    title: 'Front Entrance Enhancement',
    before: '📸 Before',
    after: '✨ After',
    description: 'Curb appeal project with architectural plantings and lighting',
  },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-sm font-semibold text-emerald-700 tracking-wide uppercase">Portfolio</span>
          <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6 mt-4">Transformation Gallery</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Award-winning landscape designs that elevate Denver homes
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              {/* Before/After Container */}
              <div className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="aspect-square flex overflow-hidden bg-gray-100">
                  {/* Before Side */}
                  <div className="w-1/2 bg-gradient-to-b from-gray-400 to-gray-600 flex items-center justify-center border-r border-white relative group/before">
                    <div className="text-center">
                      <svg className="w-12 h-12 text-gray-200 mx-auto mb-2 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-xs font-bold text-gray-200 tracking-widest">BEFORE</p>
                    </div>
                  </div>

                  {/* After Side */}
                  <div className="w-1/2 bg-gradient-to-b from-emerald-400 to-emerald-700 flex items-center justify-center relative group/after">
                    <div className="text-center">
                      <svg className="w-12 h-12 text-white mx-auto mb-2 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-xs font-bold text-white tracking-widest">AFTER</p>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay - Enhanced */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.343a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM16.364 15.364a1 1 0 00 1.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM11 15a1 1 0 110 2h-1a1 1 0 110-2h1zM5.343 15.657a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1-1V8a1 1 0 012 0v1a1 1 0 01-1 1zM5.343 5.343a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414-1.414l-.707-.707z" />
                  </svg>
                </div>
              </div>

              {/* Item Info */}
              <div className={`mt-6 overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-32' : 'max-h-16'}`}>
                <h3 className="font-serif font-bold text-gray-900 text-lg">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-700 font-medium mb-6">Ready to transform your outdoor space?</p>
          <button
            onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-emerald-700 text-white px-10 py-4 rounded-lg font-semibold hover:bg-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
          >
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
