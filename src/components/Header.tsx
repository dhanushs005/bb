import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-red-600 text-white shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Droplet className="h-8 w-8" />
            <span className="text-2xl font-bold">LifeFlow</span>
          </Link>
          <div className="space-x-6">
            <Link to="/" className="hover:text-red-200 transition">Register</Link>
            <Link to="/donors" className="hover:text-red-200 transition">View Donors</Link>
            <Link to="/emergency" className="hover:text-red-200 transition">Emergency</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}