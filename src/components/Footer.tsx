import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = 2025;

  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Felix 2.0', path: 'felix-2-0' },
        { label: 'Felix AI for Blender', path: 'felix-ai-for-blender' },
        { label: 'Felix for Creators', path: 'felix-for-creators' },
        { label: 'Felix for Studios', path: 'felix-for-studios' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', path: 'about' },
        { label: 'Support', path: 'support' },
        { label: 'MetaBull Games', path: '#' },
        { label: 'Investors', path: '#' },
        { label: 'Screening Room', path: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Home', path: '' }, 
        { label: 'Studio Access', href: 'https://felix.metabull.ai/', external: true },
      ],
    },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo + Description */}
          <div>
            <img
              src="https://metabull.ai/assets/images/metabul-bull-logo.webp"
              alt="MetaBull"
              className="h-10 w-auto mb-4"
              width={230}
              height={103}
            />
            <p className="text-sm text-gray-600 max-w-xs">
              AI-powered entertainment and production platform for film, TV, creators, and studios.
            </p>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">{section.title}</h3>
              <ul className="space-y-3">

                {section.links.map((link) => (
                  <li key={link.label}>

                    {/* External Link */}
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 hover:text-red-600 transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      // Internal Link — SAFE: always passes string
                      <Link
                        to={link.path ?? "#"}
                        className="text-sm text-gray-600 hover:text-red-600 transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}

                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-gray-600">
            <p>&copy; {currentYear} MetaBull. All rights reserved.</p>
            <Link to="#" className="hover:text-red-600 transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-red-600 transition-colors">Privacy Policy</Link>
          </div>

          <div className="text-sm text-gray-600">
            Built with ❤️ by{" "}
            <a
              rel="nofollow"
              target="_blank"
              href="https://nadeza.com"
              className="text-red-600 hover:text-red-700 transition-colors"
            >
              Edlyn - Nadeza Marketing
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
