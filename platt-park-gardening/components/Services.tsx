'use client';

import { ReactNode } from 'react';

interface Service {
  title: string;
  description: string;
  icon: ReactNode;
  benefits: string[];
}

const services: Service[] = [
  {
    title: 'Spring Cleanup & Renewal',
    description: 'Refresh your garden after winter with expert pruning, mulching, and seasonal plantings.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m0 0h6m0 0h6" />
      </svg>
    ),
    benefits: ['Pruning & trimming', 'Mulch refresh', 'Spring planting', 'Debris removal'],
  },
  {
    title: 'Landscape Design',
    description: 'Custom garden designs tailored to your home\'s architecture and your lifestyle preferences.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    benefits: ['Custom layouts', 'Hardscaping', 'Native plants', 'Sustainable design'],
  },
  {
    title: 'Maintenance Plans',
    description: 'Seasonal and year-round care packages to keep your garden looking pristine.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    benefits: ['Weekly service', 'Monthly inspections', 'Seasonal prep', 'Emergency response'],
  },
  {
    title: 'Irrigation Systems',
    description: 'Smart watering solutions designed for Denver\'s climate and water conservation.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    benefits: ['Drip irrigation', 'Smart controllers', 'Soil sensors', 'Water savings'],
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-sm font-semibold text-emerald-700 tracking-wide uppercase">Services & Solutions</span>
          <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6 mt-4">Expert Landscape Care</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Comprehensive design and maintenance solutions tailored to Denver's unique climate and your home's architectural vision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="space-y-4">
                <div className="flex-shrink-0 w-14 h-14 bg-emerald-100 text-emerald-700 p-3 rounded-lg group-hover:bg-emerald-700 group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>

              {/* Benefits List */}
              <div className="mt-8 pt-8 border-t border-gray-100 space-y-3">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-emerald-700 to-emerald-900 rounded-2xl p-12 text-center text-white shadow-xl">
          <h3 className="text-3xl font-serif font-bold mb-3">Spring Cleanup Special</h3>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            Book your spring renewal before April 30th and receive a complimentary professional irrigation audit.
          </p>
          <button
            onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Schedule Your Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
