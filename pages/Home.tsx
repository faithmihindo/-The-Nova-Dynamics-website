
import React from 'react';
import { Page } from '../types';
import { SERVICES, BUSINESS_NAME, Icon } from '../constants';

interface HomeProps {
  onPageChange: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onPageChange }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-slate-50 py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10 animate-in fade-in slide-in-from-left-8 duration-700">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
              Leading Innovation Since 2018
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
              Empowering Businesses for the <span className="text-blue-600">Digital Age.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
              We provide high-impact strategies and technological solutions that help modern enterprises scale, innovate, and lead.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => onPageChange(Page.Contact)}
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
              >
                Work with Us
              </button>
              <button 
                onClick={() => onPageChange(Page.Services)}
                className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all"
              >
                Our Services
              </button>
            </div>
          </div>
          <div className="relative z-10 hidden lg:block animate-in fade-in zoom-in duration-1000">
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/business/800/600" 
                alt="Business Collaboration" 
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full z-0"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-slate-200 rounded-3xl rotate-12 z-0"></div>
            </div>
          </div>
        </div>
        {/* Background blobs */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full opacity-50 blur-3xl"></div>
      </section>

      {/* Stats/Logo Cloud Section */}
      <section className="bg-white py-12 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
          <span className="text-2xl font-black text-slate-400">FORTUNE 500</span>
          <span className="text-2xl font-black text-slate-400">TECHCORP</span>
          <span className="text-2xl font-black text-slate-400">GLOBAL INC</span>
          <span className="text-2xl font-black text-slate-400">NEXUS</span>
          <span className="text-2xl font-black text-slate-400">VANTAGE</span>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Core Expertise</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg">
              We specialize in deep-tier business transformation, leveraging the latest in tech and strategy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-slate-100 group">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon d={service.icon} className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                <button 
                  onClick={() => onPageChange(Page.Services)}
                  className="text-blue-600 font-semibold text-sm flex items-center hover:underline"
                >
                  Learn More 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Trust Section */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <svg className="w-16 h-16 text-blue-500 mx-auto mb-8 opacity-40" fill="currentColor" viewBox="0 0 32 32">
            <path d="M10 8v8h6c0 4.418-3.582 8-8 8V28c6.627 0 12-5.373 12-12V8H10zm14 0v8h6c0 4.418-3.582 8-8 8V28c6.627 0 12-5.373 12-12V8H24z" />
          </svg>
          <p className="text-2xl lg:text-3xl italic font-light leading-relaxed mb-8">
            "{BUSINESS_NAME} didn't just provide a service; they provided a partnership that redefined our approach to scalability. Truly game-changing results."
          </p>
          <div>
            <div className="font-bold text-xl text-blue-400">Sarah Jenkins</div>
            <div className="text-slate-400">CTO at Global Nexus</div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-white text-center">
        <div className="max-w-3xl mx-auto p-12 bg-blue-600 rounded-[3rem] text-white shadow-2xl">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">Ready to scale your vision?</h2>
          <p className="text-blue-100 text-lg mb-10">
            Join hundreds of thriving companies who trust us with their critical operations.
          </p>
          <button 
            onClick={() => onPageChange(Page.Contact)}
            className="px-10 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-slate-100 transition-all hover:scale-105"
          >
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
