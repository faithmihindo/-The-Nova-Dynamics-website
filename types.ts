
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export enum Page {
  Home = 'home',
  Services = 'services',
  Contact = 'contact'
}
