'use client';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-white text-3xl font-serif font-bold mb-2">Platt Park</h3>
              <h4 className="text-emerald-500 text-lg font-semibold">Gardening</h4>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed max-w-sm">
              Award-winning landscape design and meticulous maintenance for Denver's most distinguished homes.
            </p>
            <div className="flex gap-3">
              {/* Social Links */}
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-emerald-700 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-emerald-700 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20v-7.21H5.5V9.25h2.79V7.16c0-2.76 1.69-4.27 4.15-4.27 1.18 0 2.19.09 2.49.13v2.88h-1.71c-1.34 0-1.6.64-1.6 1.57v2.06h3.21l-.42 3.54h-2.79V20" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-emerald-700 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                  <circle cx="18" cy="6" r="1" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wide">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Spring Cleanup</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Maintenance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Irrigation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Seasonal Care</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Portfolio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wide">Get in Touch</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="tel:+17205550123" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>(720) 555-0123</span>
                </a>
              </li>
              <li>
                <a href="mailto:hello@plattpark.garden" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>hello@plattpark.garden</span>
                </a>
              </li>
              <li className="text-gray-400 flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Denver, CO</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 py-8 mt-8">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; 2024 Platt Park Gardening. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0 text-xs">
              <a href="#" className="hover:text-emerald-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
