import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from '../Header/Navbar';

interface LayoutProps {
  children: React.ReactNode;
}


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-primary text-text-main flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <footer className="py-6 text-center text-text-muted text-sm border-t border-secondary">
          <p>&copy; {new Date().getFullYear()} Firdo Radja. All rights reserved.</p>
        </footer>
      </div>
    </HelmetProvider>
  );
};

export default Layout;
