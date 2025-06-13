"use client";

import React, { useState } from 'react';
import { FiMail, FiMapPin, FiClock, FiSend } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean | null;
    message: string;
  }>({ success: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: '' });

    try {
      const response = await fetch('https://formspree.io/f/xkgbrkke', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, _replyto: formData.email }),
      });

      if (response.ok) {
        setSubmitStatus({ success: true, message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({ success: false, message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-6 bg-gradient-to-br from-[#0f0f0f] via-[#141414] to-[#0c0c0c] text-white overflow-hidden font-sans">
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,_#00ffff33,_transparent_70%)] animate-pulse-slow"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,_#00ffff11,_transparent_70%)] animate-spin-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
          Let&apos;s Build the Future Together 🚀
        </h2>
        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
          I&apos;m ready to collaborate on innovative projects, cutting-edge technologies and ambitious challenges.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        
        {/* Contact Info */}
        <div className="backdrop-blur-md bg-white/5 p-10 rounded-3xl border border-white/20 shadow-lg hover:shadow-cyan-500/40 transition-all duration-300">
          <h3 className="text-3xl font-bold text-cyan-400 mb-8">Contact Info</h3>

          <div className="space-y-8">
            <ContactInfo icon={<FiMail />} label="Email" value="05harisshabbir@gmail.com" href="mailto:05harisshabbir@gmail.com" />
            <ContactInfo icon={<FiMapPin />} label="Location" value="Available for remote work" />
            <ContactInfo icon={<FiClock />} label="Response Time" value="Usually within 24 hours" />
          </div>

          <div className="mt-12">
            <h3 className="text-3xl font-bold text-cyan-400 mb-6">Why Me?</h3>
            <ul className="list-inside list-disc text-gray-300 text-lg space-y-3">
              <li>⚡ Modern, scalable development approach</li>
              <li>⚡ Strong foundation in MERN & Next.js</li>
              <li>⚡ Continuous learning & cutting-edge skills</li>
              <li>⚡ Crystal-clear communication</li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="backdrop-blur-md bg-white/5 p-10 rounded-3xl border border-white/20 shadow-lg hover:shadow-purple-500/40 transition-all duration-300">
          <h3 className="text-3xl font-bold text-purple-400 mb-8">Send a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField id="name" name="name" label="Name" value={formData.name} onChange={handleChange} />
              <InputField id="email" name="email" label="Email" type="email" value={formData.email} onChange={handleChange} />
            </div>

            <InputField id="subject" name="subject" label="Subject" value={formData.subject} onChange={handleChange} />

            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5}
                className="w-full px-5 py-3 bg-black/40 border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 text-white resize-none"
                placeholder="Tell me about your project..." required />
            </div>

            {submitStatus.message && (
              <div className={`p-4 rounded-lg ${submitStatus.success ? 'bg-green-600/20 text-green-400' : 'bg-red-600/20 text-red-400'}`}>
                {submitStatus.message}
              </div>
            )}

            <button type="submit" disabled={isSubmitting}
              className={`w-full py-4 rounded-lg text-xl font-semibold bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 hover:from-purple-600 hover:to-cyan-500 transition-all duration-300 shadow-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}>
              {isSubmitting ? (
                <span className="flex justify-center items-center">
                  <svg className="animate-spin h-6 w-6 mr-3 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4z" />
                  </svg>Sending...
                </span>
              ) : (
                <span className="flex justify-center items-center gap-2"><FiSend /> Send Message</span>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

// Contact Info Component with proper types
interface ContactInfoProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

const ContactInfo = ({ icon, label, value, href }: ContactInfoProps) => (
  <div className="flex items-center gap-4">
    <div className="p-3 bg-cyan-500/10 rounded-full text-cyan-300 text-2xl shadow-md">
      {icon}
    </div>
    <div>
      <h4 className="text-gray-400 text-sm mb-1">{label}</h4>
      {href ? (
        <a href={href} className="text-lg hover:text-cyan-400 transition">{value}</a>
      ) : (
        <p className="text-lg">{value}</p>
      )}
    </div>
  </div>
);

// Input Field Component with proper types
interface InputFieldProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({ id, name, label, type = 'text', value, onChange }: InputFieldProps) => (
  <div>
    <label htmlFor={id} className="block text-gray-300 mb-2">{label}</label>
    <input type={type} id={id} name={name} value={value} onChange={onChange}
      className="w-full px-5 py-3 bg-black/40 border border-white/20 rounded-lg focus:ring-2 focus:ring-cyan-400 text-white"
      placeholder={`Enter your ${label.toLowerCase()}`} required />
  </div>
);