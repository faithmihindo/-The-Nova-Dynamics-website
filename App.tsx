
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  // Scroll to top when changing pages
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <Home onPageChange={setCurrentPage} />;
      case Page.Services:
        return <Services />;
      case Page.Contact:
        return <Contact />;
      default:
        return <Home onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer onPageChange={setCurrentPage} />
      
      {/* Floating Chatbot Component */}
      <ChatWidget />
    </div>
  );
};

export default App;
