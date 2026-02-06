
import React, { useState } from 'react';
import { BUSINESS_ADDRESS, BUSINESS_EMAIL } from '../constants.tsx';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send data to server here
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-white min-h-screen">
      <header className="bg-slate-50 border-b border-slate-200 py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-top-4 duration-700">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-6">Let's Connect</h1>
          <p className="text-xl text-slate-600">
            Have a project in mind? We're ready to listen and help you reach your goals.
          </p>
        </div>
      </header>

      <section className="py-20 px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Information */}
        <div className="space-y-12 animate-in fade-in slide-in-from-left-8 duration-700">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Reach Out Directly</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mr-4 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Visit Our Studio</h4>
                  <p className="text-slate-600">{BUSINESS_ADDRESS}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mr-4 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Inquiries</h4>
                  <p className="text-slate-600">{BUSINESS_EMAIL}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-4">Office Hours</h4>
            <div className="space-y-2 text-slate-600 text-sm">
              <div className="flex justify-between"><span>Mon — Fri:</span><span>9:00 AM — 6:00 PM</span></div>
              <div className="flex justify-between"><span>Saturday:</span><span>10:00 AM — 2:00 PM</span></div>
              <div className="flex justify-between"><span>Sunday:</span><span>Closed</span></div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 animate-in fade-in slide-in-from-right-8 duration-700">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
              <p className="text-slate-600 mb-8">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-blue-600 font-bold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                <select
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                >
                  <option value="">Select a topic</option>
                  <option value="Inquiry">General Inquiry</option>
                  <option value="Support">Support</option>
                  <option value="Project">Project Collaboration</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:scale-[1.02] active:scale-95"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-slate-200 relative grayscale hover:grayscale-0 transition-all">
        <div className="absolute inset-0 flex items-center justify-center bg-slate-300">
           <div className="text-center p-8 bg-white/80 backdrop-blur rounded-2xl shadow-lg border border-white">
              <p className="text-slate-600 font-medium">Map View Integrated Here</p>
              <p className="text-xs text-slate-400 mt-1">{BUSINESS_ADDRESS}</p>
           </div>
        </div>
        <img src="https://picsum.photos/seed/map/1920/400" className="w-full h-full object-cover" alt="Map View" />
      </section>
    </div>
  );
};

export default Contact;
