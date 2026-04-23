'use client';

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div>
            <h2 className="text-5xl md:text-6xl font-serif text-white mb-6 leading-tight">
              Your Dream Garden Awaits
            </h2>
            <p className="text-xl text-emerald-100 leading-relaxed max-w-2xl mx-auto">
              Join Denver's leading landscape design firm. Transform your outdoor space into a sanctuary of beauty and tranquility.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-emerald-700 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-xl hover:shadow-2xl flex-1 sm:flex-none"
            >
              Schedule Free Consultation
            </button>
            <button
              onClick={() => window.location.href = 'tel:+17205550123'}
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300 flex-1 sm:flex-none"
            >
              (720) 555-0123
            </button>
          </div>

          {/* Quick Info Box */}
          <div className="mt-8 bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-10 max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-emerald-100 font-semibold mb-1">Spring Cleanup Special</p>
                <p className="text-white text-sm leading-relaxed">
                  Book before April 30th for a complimentary irrigation audit + 15% off first service
                </p>
              </div>
              <div>
                <p className="text-emerald-100 font-semibold mb-1">Service Areas</p>
                <p className="text-white text-sm leading-relaxed">
                  Platt Park, Cherry Creek, Washington Park & all Denver neighborhoods
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
