// components/Contact.tsx
"use client"; // Add this directive since we'll be using client-side functionality

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
  const [submitStatus, setSubmitStatus] = useState<{success: boolean | null, message: string}>({success: null, message: ''});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({success: null, message: ''});

    try {
      const response = await fetch('https://formspree.io/f/xkgbrkke', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        }),
      });

      if (response.ok) {
        setSubmitStatus({success: true, message: 'Message sent successfully!'});
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({success: false, message: 'Failed to send message. Please try again.'});
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-gray-900 to-gray-900 z-0"></div>
      <div className="absolute inset-0 opacity-10 z-0" style={{
        backgroundImage: 'linear-gradient(to right, #1e40af 1px, transparent 1px), linear-gradient(to bottom, #1e40af 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas to life!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-blue-300">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm">Email</h4>
                    <a href="mailto:05harisshabbir@gmail.com" className="text-lg hover:text-blue-300 transition-colors">
                      05harisshabbir@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                    <FiMapPin className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm">Location</h4>
                    <p className="text-lg">Available for remote work</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                    <FiClock className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm">Response Time</h4>
                    <p className="text-lg">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Work With Me */}
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-blue-300">Why Work With Me?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Fresh perspective with modern development practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Dedicated to continuous learning and improvement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Strong foundation in MERN stack technologies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Excellent communication and problem-solving skills</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 text-blue-300">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                ></textarea>
              </div>

              {submitStatus.message && (
                <div className={`p-3 rounded-lg ${submitStatus.success ? 'bg-green-900/50 text-green-300' : 'bg-red-900/50 text-red-300'}`}>
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 hover:shadow-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}