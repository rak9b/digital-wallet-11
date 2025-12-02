import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wallet, Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary-600 p-2 rounded-lg"><Wallet className="h-6 w-6 text-white" /></div>
              <span className="font-bold text-xl text-gray-900">DigiWallet</span>
            </Link>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <Link to="/features" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Features</Link>
              <Link to="/pricing" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Pricing</Link>
              <Link to="/about" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">About</Link>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login"><Button variant="ghost">Log in</Button></Link>
            <Link to="/register"><Button>Get Started</Button></Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md text-gray-400">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
          <Link to="/features" className="block px-3 py-2 text-base font-medium text-gray-700">Features</Link>
          <Link to="/pricing" className="block px-3 py-2 text-base font-medium text-gray-700">Pricing</Link>
          <Link to="/login" className="block px-3 py-2 text-base font-medium text-gray-700">Log in</Link>
        </div>
      )}
    </nav>
  );
};
