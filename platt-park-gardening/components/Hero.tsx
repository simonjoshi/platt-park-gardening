'use client';

export default function Hero() {
  const scrollToForm = () => {
    const form = document.getElementById('lead-form');
    form?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-white pt-32 pb-20 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-emerald-100 rounded-full blur-3xl opacity-30" style={{ animation: 'float 20s ease-in-out infinite' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-10 max-w-2xl">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm font-semibold text-emerald-700 tracking-wide uppercase bg-emerald-50 px-4 py-2 rounded-full">
                  Luxury Denver Landscaping
                </span>
              </div>
              <h1 className="text-6xl md:text-7xl font-serif text-gray-900 leading-tight tracking-tight">
                Elevate your outdoor space
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed font-light max-w-lg">
                Transform your Denver home with expert landscape design and meticulous year-round care. Serving Platt Park, Cherry Creek, and the finest neighborhoods.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToForm}
                className="px-8 py-4 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
              >
                Schedule Consultation
              </button>
              <button
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-emerald-700 text-emerald-700 font-semibold rounded-lg hover:bg-emerald-50 transition-all duration-300 text-center"
              >
                See Our Work
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-200">
              <div>
                <div className="text-4xl font-serif font-bold text-emerald-700 mb-1">15+</div>
                <p className="text-sm text-gray-600 font-medium">Years of Excellence</p>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold text-emerald-700 mb-1">200+</div>
                <p className="text-sm text-gray-600 font-medium">Transformed Spaces</p>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold text-emerald-700 mb-1">4.9★</div>
                <p className="text-sm text-gray-600 font-medium">Client Rating</p>
              </div>
            </div>
          </div>

          {/* Right: Professional Hero Visual */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main visual container */}
              <div className="bg-gradient-to-b from-emerald-50 to-emerald-100 rounded-2xl overflow-hidden aspect-square shadow-2xl">
                {/* Decorative grid pattern */}
                <div className="absolute inset-0 opacity-5">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />
                  </svg>
                </div>

                {/* Content */}
                <div className="relative w-full h-full flex flex-col items-center justify-center p-12 text-center">
                  <div className="w-24 h-24 bg-emerald-700 rounded-2xl mb-8 opacity-20" />
                  <h3 className="text-2xl font-serif text-emerald-900 mb-3 font-semibold">Before & After Gallery</h3>
                  <p className="text-emerald-700 text-sm font-medium">Discover stunning transformations</p>
                  <div className="mt-12 flex gap-4">
                    <div className="w-16 h-16 bg-emerald-200 rounded-lg opacity-30" />
                    <div className="w-16 h-16 bg-emerald-300 rounded-lg opacity-30" />
                    <div className="w-16 h-16 bg-emerald-200 rounded-lg opacity-30" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(30px); }
        }
      `}</style>
    </section>
  );
}
