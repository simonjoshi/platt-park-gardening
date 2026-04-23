'use client';

import { useState } from 'react';

interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Margaret Chen',
    location: 'Platt Park',
    text: 'Platt Park Gardening completely transformed our backyard. The team was professional, knowledgeable, and truly listened to our vision. Our property has never looked better.',
    rating: 5,
    image: 'MC',
  },
  {
    name: 'David Morrison',
    location: 'Cherry Creek',
    text: 'After 10 years of trying to manage our garden ourselves, we finally called these experts. The difference is night and day. They understand Denver\'s climate perfectly.',
    rating: 5,
    image: 'DM',
  },
  {
    name: 'Susan & Robert Wells',
    location: 'Platt Park',
    text: 'Outstanding service from start to finish. They designed a low-maintenance landscape that\'s still absolutely stunning. We couldn\'t be happier.',
    rating: 5,
    image: 'SW',
  },
  {
    name: 'James Patterson',
    location: 'Cherry Creek',
    text: 'The spring cleanup and new plantings were exactly what we needed. Professional, timely, and attention to detail is exceptional. Highly recommend.',
    rating: 5,
    image: 'JP',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-sm font-semibold text-emerald-700 tracking-wide uppercase">Client Stories</span>
          <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6 mt-4">Trusted by Denver's Best</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Hear from homeowners who have transformed their outdoor spaces
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="bg-gray-50 rounded-2xl p-12 md:p-16">
            <div className="max-w-2xl mx-auto">
              {/* Stars */}
              <div className="flex justify-center mb-8">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-emerald-600 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-center text-2xl md:text-3xl font-serif text-gray-900 mb-10 leading-relaxed italic">
                "{testimonials[current].text}"
              </p>

              {/* Author Info */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 shadow-lg">
                  {testimonials[current].image}
                </div>
                <p className="font-serif font-bold text-xl text-gray-900">{testimonials[current].name}</p>
                <p className="text-emerald-700 font-medium text-sm">{testimonials[current].location}</p>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex flex-col items-center gap-6 mt-10">
            {/* Dot Indicators */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`transition-all duration-300 ${
                    idx === current 
                      ? 'bg-emerald-700 w-10 h-2 rounded-full' 
                      : 'bg-gray-300 w-2 h-2 rounded-full hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrow Buttons */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="text-emerald-700 border-2 border-emerald-700 p-3 rounded-full hover:bg-emerald-50 transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={next}
                className="text-emerald-700 border-2 border-emerald-700 p-3 rounded-full hover:bg-emerald-50 transition-all duration-300"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
