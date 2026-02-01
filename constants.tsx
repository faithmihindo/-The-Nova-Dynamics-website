
import React from 'react';
import { Service } from './types';

export const BUSINESS_NAME = "Nova Dynamics";
export const BUSINESS_EMAIL = "hello@novadynamics.com";
export const BUSINESS_ADDRESS = "123 Innovation Drive, Tech City, TC 90210";

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Digital Strategy',
    description: 'Bespoke roadmaps to navigate the digital landscape and drive sustainable growth.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '2',
    title: 'Brand Identity',
    description: 'Crafting meaningful brand stories that resonate with your target audience.',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '3',
    title: 'Cloud Solutions',
    description: 'Secure and scalable cloud infrastructure tailored to your business operations.',
    icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '4',
    title: 'Data Analytics',
    description: 'Turning raw data into actionable insights to power informed decision-making.',
    icon: 'M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200'
  }
];

export const Icon: React.FC<{ d: string, className?: string }> = ({ d, className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={d} />
  </svg>
);
