import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  const felixLinks = [
    { label: 'Felix 2.0', path: '/felix-2-0' },
    { label: 'Felix AI for Blender', path: '/felix-ai-for-blender' },
    { label: 'Felix for Creators', path: '/felix-for-creators' },
    { label: 'Felix for Studios', path: '/felix-for-studios' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0">
            <img
              src="https://metabull.ai/assets/images/metabul-bull-logo.webp"
              alt="MetaBull"
              className="h-12 w-auto"
              width={230}
              height={103}
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-900 hover:text-red-600 transition-colors text-sm font-medium"
            >
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="text-gray-900 hover:text-red-600 transition-colors text-sm font-medium flex items-center">
                Felix
                <svg
                  className={`ml-1 w-4 h-4 transition-transform ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 border border-gray-100"
                  >
                    {felixLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-50 hover:text-red-600 transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/support"
              className="text-gray-900 hover:text-red-600 transition-colors text-sm font-medium"
            >
              Support
            </Link>

            <Link
              to="/about"
              className="text-gray-900 hover:text-red-600 transition-colors text-sm font-medium"
            >
              About
            </Link>

            <a
              href="https://felix.metabull.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors text-sm font-medium"
            >
              Studio Access
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-900 hover:text-red-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-100 overflow-hidden"
            >
              <div className="py-4 space-y-4">
                <Link
                  to="/"
                  className="block text-gray-900 hover:text-red-600 transition-colors text-sm font-medium"
                >
                  Home
                </Link>

                <div className="space-y-2">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full text-left text-gray-900 hover:text-red-600 transition-colors text-sm font-medium flex items-center justify-between"
                  >
                    Felix
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        isDropdownOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 space-y-2 overflow-hidden"
                      >
                        {felixLinks.map((link) => (
                          <Link
                            key={link.path}
                            to={link.path}
                            className="block text-gray-700 hover:text-red-600 transition-colors text-sm"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  to="/support"
                  className="block text-gray-900 hover:text-red-600 transition-colors text-sm font-medium"
                >
                  Support
                </Link>

                <Link
                  to="/about"
                  className="block text-gray-900 hover:text-red-600 transition-colors text-sm font-medium"
                >
                  About
                </Link>

                <a
                  href="https://felix.metabull.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors text-sm font-medium text-center"
                >
                  Studio Access
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;