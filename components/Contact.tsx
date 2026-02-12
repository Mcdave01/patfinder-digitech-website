'use client';

import React from "react"

import { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your inquiry! We will get back to you soon.',
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try WhatsApp instead.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello! I would like to inquire about your services.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`
  );

  const whatsappLink = `https://wa.me/+2349048515646?text=${whatsappMessage}`;

  return (
    <section id="contact" className="section-spacing bg-[hsl(var(--muted))]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-white text-[hsl(var(--primary))] rounded-full text-sm font-semibold mb-4">
            GET IN TOUCH
          </div>
          <h2 className="heading-md">Contact Us Today</h2>
          <p className="subheading mt-4 mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Email */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[hsl(var(--muted))]">
                  <Mail className="text-[hsl(var(--primary))]" size={24} />
                </div>
                <div>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">Email</p>
                  <a
                    href="mailto:info@pathfinderdigitech.org"
                    className="font-semibold text-foreground hover:text-[hsl(var(--primary))] transition-colors"
                  >
                    info@pathfinderdigitech.org
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[hsl(var(--muted))]">
                  <Phone className="text-[hsl(var(--primary))]" size={24} />
                </div>
                <div>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">Phone</p>
                  <p className="font-semibold text-foreground">+234 904 851 5646</p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[hsl(var(--muted))] flex-shrink-0">
                  <MapPin className="text-[hsl(var(--primary))]" size={24} />
                </div>
                <div>
                  <p className="text-sm text-[hsl(var(--muted-foreground))] mb-2">Lagos Office</p>
                  <p className="font-semibold text-foreground text-sm leading-relaxed">
                    No 1 Otigba Street<br/>Computer Village off Awolowo Road<br/>Ikeja, Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>

            {/* Osogbo Office */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[hsl(var(--muted))] flex-shrink-0">
                  <MapPin className="text-[hsl(var(--primary))]" size={24} />
                </div>
                <div>
                  <p className="text-sm text-[hsl(var(--muted-foreground))] mb-2">Osogbo Office</p>
                  <p className="font-semibold text-foreground text-sm leading-relaxed">
                    Capital Hotel Junction<br/>Along Tinumola Way<br/>Behind Abraham Resource Centre<br/>Osogbo, Osun, Nigeria
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold"
            >
              <MessageCircle size={20} />
              Message on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Status Message */}
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.type === 'success'
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-[hsl(var(--border))] rounded-lg focus:border-[hsl(var(--primary))] focus:outline-none transition-colors"
                    placeholder="Enter Your Fullname"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-[hsl(var(--border))] rounded-lg focus:border-[hsl(var(--primary))] focus:outline-none transition-colors"
                    placeholder="Your Email Address Here"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[hsl(var(--border))] rounded-lg focus:border-[hsl(var(--primary))] focus:outline-none transition-colors"
                  placeholder="Phone Number Here"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-[hsl(var(--border))] rounded-lg focus:border-[hsl(var(--primary))] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </div>

              <p className="text-xs text-[hsl(var(--muted-foreground))] text-center">
                We'll get back to you within 24 hours. Your information is secure and will not be shared with third parties.
              </p>
            </form>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-16">
          <h3 className="heading-sm mb-6">Visit Our Office</h3>
          <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen={true}
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.2!2d3.3515!3d6.6018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzYnMDYuNSJOIDPCsDIxJzA1LjQiRQ!5e0!3m2!1sen!2sng!4v1234567890"
              title="Office Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
