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

    const recaptchaValue = recaptchaRef.current?.getValue();
    if (!recaptchaValue) {
      setRecaptchaError('Please complete the reCAPTCHA verification');
      return;
    }

    setStatus('sending');

    const emailService = process.env.NEXT_PUBLIC_EMAIL_SERVICE || 'formspree';
    const emailEndpoint: string = process.env.NEXT_PUBLIC_EMAIL_ENDPOINT as string;

    try {
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

  const inputClasses = "w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-slate-200 placeholder-slate-500 focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500/40 focus:bg-white/[0.06] outline-none transition-all duration-300";

  return (
    <section id="contact" className="py-24 px-4 bg-[#050510] relative">
      {/* Gradient divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="max-w-2xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">Get in Touch</span>
          </h2>
          <p className="text-lg text-slate-400">
            Interested in purchasing this domain? Send us a message!
          </p>
        </div>

        {/* Form card with gradient border */}
        <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20">
          <form onSubmit={handleSubmit} className="glass-strong rounded-2xl p-4 sm:p-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Full Name <span className="text-purple-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address <span className="text-purple-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="offer" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Offer
                </label>
                <input
                  type="text"
                  id="offer"
                  name="offer"
                  value={formData.offer}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Best Offer"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message <span className="text-purple-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`${inputClasses} resize-none`}
                  placeholder="Tell us about your interest in this domain..."
                />
              </div>

              {status === 'success' && (
                <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-3 rounded-xl text-sm">
                  ✓ Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                </div>
              )}

              {recaptchaError && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl text-sm">
                  {recaptchaError}
                </div>
              )}

              {status === 'error' && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl text-sm">
                  Something went wrong. Please try again or contact us directly.
                </div>
              )}

              <div className="flex justify-center overflow-hidden">
                <div className="transform scale-[0.85] sm:scale-100 origin-center">
                  <ReCAPTCHAComponent
                    ref={recaptchaRef}
                    sitekey={recaptchaSiteKey}
                    theme="dark"
                    onChange={(value: string | null) => {
                      setRecaptchaError('');
                      setRecaptchaCompleted(!!value);
                    }}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || !isFormValid()}
                className="w-full py-4 rounded-xl font-semibold text-lg text-white btn-gradient shadow-lg shadow-purple-500/20 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:transform-none disabled:hover:shadow-none transition-all duration-300"
              >
                {status === 'sending' ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
