'use client';

import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { getSEOConfig } from '@/lib/seo';

const ReCAPTCHAComponent = ReCAPTCHA as any;

export default function ContactForm() {
  const seo = getSEOConfig();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    offer: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [recaptchaError, setRecaptchaError] = useState<string>('');
  const [recaptchaCompleted, setRecaptchaCompleted] = useState<boolean>(false);
  const recaptchaRef = useRef<any>(null);
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string;
  
  // Check if form is valid (all required fields filled and reCAPTCHA completed)
  const isFormValid = () => {
    const requiredFieldsFilled = 
      formData.name.trim() !== '' && 
      formData.email.trim() !== '' && 
      formData.message.trim() !== '';
    return requiredFieldsFilled && recaptchaCompleted;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setRecaptchaError('');

    // Check if reCAPTCHA is completed
    const recaptchaValue = recaptchaRef.current?.getValue();
    if (!recaptchaValue) {
      setRecaptchaError('Please complete the reCAPTCHA verification');
      return;
    }

    setStatus('sending');

    // Get email configuration from env
    const emailService = process.env.NEXT_PUBLIC_EMAIL_SERVICE || 'formspree';
    const emailEndpoint: string = process.env.NEXT_PUBLIC_EMAIL_ENDPOINT as string;

    try {
      // Use custom email endpoint
      const response = await fetch(emailEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: `Domain Inquiry: ${seo.domainName}`,
          ...formData,
          recaptchaToken: recaptchaValue,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', offer: '', message: '' });
        setRecaptchaCompleted(false);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    } finally {
      // Reset reCAPTCHA after submission attempt
      recaptchaRef.current?.reset();
      setRecaptchaCompleted(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Get in Touch
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Interested in purchasing this domain? Send us a message!
        </p>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="offer" className="block text-sm font-medium text-gray-700 mb-2">
                Your Offer
              </label>
              <input
                type="text"
                id="offer"
                name="offer"
                value={formData.offer}
                onChange={handleChange}
                className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                placeholder="Best Offer"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition resize-none"
                placeholder="Tell us about your interest in this domain..."
              />
            </div>

            {status === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
              </div>
            )}

            {recaptchaError && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                {recaptchaError}
              </div>
            )}

            {status === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                Something went wrong. Please try again or contact us directly.
              </div>
            )}

            <div className="flex justify-center">
              <ReCAPTCHAComponent
                ref={recaptchaRef}
                sitekey={recaptchaSiteKey}
                onChange={(value: string | null) => {
                  setRecaptchaError('');
                  setRecaptchaCompleted(!!value);
                }}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending' || !isFormValid()}
              className="w-full bg-purple-600 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

