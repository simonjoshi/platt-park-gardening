'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  serviceInterest: string;
}

export default function LeadForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceInterest: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setLoading(false);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          serviceInterest: '',
        });
        setSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="lead-form" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-emerald-700 tracking-wide uppercase">Get Started</span>
          <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6 mt-4">Schedule Your Consultation</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Share your vision and let our design experts create a personalized landscape plan for your home
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200">
          {submitted ? (
            // Success Message
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600 mb-4">
                We've received your information and will contact you within 24 hours to schedule your free consultation.
              </p>
              <p className="text-sm text-gray-500">Redirecting you back to the page...</p>
            </div>
          ) : (
            // Form
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 focus:outline-none transition-all"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(720) 555-0123"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 focus:outline-none transition-all"
                  />
                </div>

                {/* Service Interest Dropdown */}
                <div>
                  <label htmlFor="serviceInterest" className="block text-sm font-semibold text-gray-800 mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="serviceInterest"
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 focus:outline-none transition-all"
                  >
                    <option value="">Select a service...</option>
                    <option value="spring-cleanup">Spring Cleanup & Renewal</option>
                    <option value="landscape-design">Landscape Design</option>
                    <option value="maintenance">Maintenance Plan</option>
                    <option value="irrigation">Irrigation System</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
              </div>

              {/* Address Field */}
              <div>
                <label htmlFor="address" className="block text-sm font-semibold text-gray-800 mb-2">
                  Property Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  placeholder="123 Main St, Denver, CO 80209"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 focus:outline-none transition-all"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-white text-lg transition-all ${
                    loading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-emerald-700 hover:bg-emerald-800 active:scale-95 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {loading ? 'Sending...' : 'Schedule Consultation'}
                </button>
              </div>

              {/* Privacy Notice */}
              <p className="text-xs text-gray-500 text-center">
                We respect your privacy. Your information will only be used to contact you about your garden project.
              </p>
            </form>
          )}
        </div>

        {/* Trust Badges */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white rounded-lg p-6 border border-gray-200 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-emerald-700" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="font-semibold text-gray-900">Free Consultation</p>
            <p className="text-gray-600 text-sm mt-1">No obligation, expert advice</p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-gray-200 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-emerald-700" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.5a1 1 0 002 0V7z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="font-semibold text-gray-900">24-Hour Response</p>
            <p className="text-gray-600 text-sm mt-1">We'll contact you promptly</p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-gray-200 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-emerald-700" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="font-semibold text-gray-900">100% Confidential</p>
            <p className="text-gray-600 text-sm mt-1">Your privacy matters</p>
          </div>
        </div>
      </div>
    </section>
  );
}
