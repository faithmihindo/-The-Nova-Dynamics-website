
import React from 'react';
import { SERVICES, Icon } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <header className="bg-white border-b border-slate-200 py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-top-4 duration-700">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-6">Our Expertise</h1>
          <p className="text-xl text-slate-600">
            We offer comprehensive solutions designed to bridge the gap between where your business is and where it needs to be.
          </p>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 animate-in fade-in slide-in-from-bottom-8 duration-700`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="md:w-2/3 p-8 flex flex-col justify-center">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Icon d={service.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description} We bring years of cross-industry experience to help you navigate {service.title.toLowerCase()} complexities with confidence.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-500">Scalable</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-500">Enterprise Ready</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-500">AI-Powered</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-900 text-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Method</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">A systematic approach to ensuring project success every time.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "We dive deep into your business ecosystem to understand your unique challenges." },
              { step: "02", title: "Strategy", desc: "A custom roadmap is built, focused on measurable ROI and sustainable scaling." },
              { step: "03", title: "Execution", desc: "Our team of specialists brings the strategy to life with precision and agility." }
            ].map((item) => (
              <div key={item.step} className="p-8 bg-slate-800 rounded-2xl relative group hover:bg-slate-700 transition-all">
                <span className="text-6xl font-black text-slate-700 absolute top-4 right-8 group-hover:text-blue-500 transition-colors">{item.step}</span>
                <h4 className="text-2xl font-bold mb-4 relative z-10">{item.title}</h4>
                <p className="text-slate-400 relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
