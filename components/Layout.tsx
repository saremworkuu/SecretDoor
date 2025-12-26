
import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-green-500 selection:text-black">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t border-green-900/30 py-6 text-center text-sm text-green-800">
        <p>© 2024 SecretDoor - Trust the Process</p>
      </footer>
    </div>
  );
};

export default Layout;
