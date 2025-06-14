"use client";

import React, { useState } from 'react';
import { FiMail, FiMapPin, FiClock, FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 0.5
      }
    }
  };

  // Intersection Observer hook
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px'
  });

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
    <section 
      id="contact" 
      ref={ref}
      className="relative py-24 px-6 bg-gradient-to-br from-[#0f0f0f] via-[#141414] to-[#0c0c0c] text-white overflow-hidden font-sans"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,_#00ffff33,_transparent_70%)] animate-pulse-slow"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,_#00ffff11,_transparent_70%)] animate-spin-slow"></div>
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Title Section */}
        <motion.div 
          className="text-center mb-20"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
            Let&apos;s Build the Future Together
          </h2>
          <motion.div
            className="mt-4 flex justify-center"
            animate={inView ? { 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <span className="text-4xl">🚀</span>
          </motion.div>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            I&apos;m ready to collaborate on innovative projects, cutting-edge technologies and ambitious challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info Card */}
          <motion.div 
            className="backdrop-blur-md bg-white/5 p-10 rounded-3xl border border-white/20 shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 group"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="absolute inset-0 rounded-3xl border border-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <h3 className="text-3xl font-bold text-cyan-400 mb-8">Contact Info</h3>

            <div className="space-y-8">
              <ContactInfo icon={<FiMail />} label="Email" value="05harisshabbir@gmail.com" href="mailto:05harisshabbir@gmail.com" />
              <ContactInfo icon={<FiMapPin />} label="Location" value="Available for remote work" />
              <ContactInfo icon={<FiClock />} label="Response Time" value="Usually within 24 hours" />
            </div>

            <div className="mt-12">
              <h3 className="text-3xl font-bold text-cyan-400 mb-6">Why Me?</h3>
              <ul className="space-y-3">
                {['Modern, scalable development approach', 'Strong foundation in MERN & Next.js', 'Continuous learning & cutting-edge skills', 'Crystal-clear communication'].map((item, index) => (
                  <motion.li
                    key={index}
                    className="text-gray-300 text-lg flex items-start gap-2 p-3 rounded-lg transition-all hover:bg-white/5 hover:shadow-md"
                    initial={{ x: -20, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.1 * index + 0.3 }}
                  >
                    <span className="inline-block text-cyan-400">⚡</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div 
            className="backdrop-blur-md bg-white/5 p-10 rounded-3xl border border-white/20 shadow-lg hover:shadow-purple-500/40 transition-all duration-300 group"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="absolute inset-0 rounded-3xl border border-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <h3 className="text-3xl font-bold text-purple-400 mb-8">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField id="name" name="name" label="Name" value={formData.name} onChange={handleChange} />
                <InputField id="email" name="email" label="Email" type="email" value={formData.email} onChange={handleChange} />
              </div>

              <InputField id="subject" name="subject" label="Subject" value={formData.subject} onChange={handleChange} />

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows={5}
                  className="w-full px-5 py-3 bg-black/40 border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 text-white resize-none transition-all duration-200 hover:border-purple-400/50 focus:border-purple-400/70"
                  placeholder="Tell me about your project..." 
                  required 
                />
              </div>

              {submitStatus.message && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg ${submitStatus.success ? 'bg-green-600/20 text-green-400' : 'bg-red-600/20 text-red-400'}`}
                >
                  {submitStatus.message}
                </motion.div>
              )}

              <motion.button 
                type="submit" 
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                className={`w-full py-4 rounded-lg text-xl font-semibold bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 hover:from-purple-600 hover:to-cyan-500 transition-all duration-300 shadow-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''} relative overflow-hidden group`}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
                {isSubmitting ? (
                  <span className="flex justify-center items-center relative z-10">
                    <svg className="animate-spin h-6 w-6 mr-3 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex justify-center items-center gap-2 relative z-10">
                    <FiSend className="transition-transform group-hover:translate-x-1" /> 
                    <span>Send Message</span>
                    <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                  </span>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating tech elements */}
      <motion.div 
        className="absolute top-20 left-10 w-4 h-4 rounded-full bg-cyan-400/30 opacity-70"
        animate={inView ? {
          y: [0, -15, 0],
          transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }
        } : {}}
      />
      <motion.div 
        className="absolute top-1/3 right-20 w-3 h-3 rounded-full bg-purple-400/30 opacity-70"
        animate={inView ? {
          y: [0, -20, 0],
          transition: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }
        } : {}}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/4 w-2 h-2 rounded-full bg-blue-400/30 opacity-70"
        animate={inView ? {
          y: [0, -10, 0],
          transition: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }
        } : {}}
      />
    </section>
  );
}

// Contact Info Component
interface ContactInfoProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

const ContactInfo = ({ icon, label, value, href }: ContactInfoProps) => (
  <motion.div 
    className="flex items-center gap-4"
    whileHover={{ x: 5 }}
  >
    <div className="p-3 bg-cyan-500/10 rounded-full text-cyan-300 text-2xl shadow-md hover:shadow-cyan-400/30 transition-all">
      {icon}
    </div>
    <div>
      <h4 className="text-gray-400 text-sm mb-1">{label}</h4>
      {href ? (
        <a href={href} className="text-lg hover:text-cyan-400 transition hover:underline underline-offset-4 decoration-cyan-400/50">
          {value}
        </a>
      ) : (
        <p className="text-lg">{value}</p>
      )}
    </div>
  </motion.div>
);

// Input Field Component
interface InputFieldProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({ id, name, label, type = 'text', value, onChange }: InputFieldProps) => (
  <motion.div
    whileHover={{ y: -2 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <label htmlFor={id} className="block text-gray-300 mb-2">{label}</label>
    <input 
      type={type} 
      id={id} 
      name={name} 
      value={value} 
      onChange={onChange}
      className="w-full px-5 py-3 bg-black/40 border border-white/20 rounded-lg focus:ring-2 focus:ring-cyan-400 text-white transition-all duration-200 hover:border-cyan-400/50 focus:border-cyan-400/70"
      placeholder={`Enter your ${label.toLowerCase()}`} 
      required 
    />
  </motion.div>
);