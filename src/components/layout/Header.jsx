import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-red-600">
            FoodieExpress
          </Link>
          
          <div className="flex-1 mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for restaurants or dishes..."
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute right-4 top-3 text-gray-400" />
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <Link to="/cart" className="relative">
              <FaShoppingCart className="text-2xl text-gray-700 hover:text-red-600" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
            </Link>
            <Link to="/login">
              <FaUser className="text-2xl text-gray-700 hover:text-red-600" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}