import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  headline: string;
  subheadline?: string;
  primaryCTA?: {
    label: string;
    action: () => void;
  };
  secondaryCTA?: {
    label: string;
    action: () => void;
  };
  image?: string;
  imageAlt?: string;
  // secondaryImage prop can be kept in the interface but won't be used below
  secondaryImage?: string; 
  backgroundColor?: string;
}

const Hero: React.FC<HeroProps> = ({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  image,
  imageAlt = '',
  // Removed secondaryImage from destructuring for clarity
  // secondaryImage,
  backgroundColor = 'bg-transparent', // Set default to transparent
}) => {
  return (
    <section className={`${backgroundColor} pt-32 pb-16 lg:pt-40 lg:pb-24`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {headline}
            </h1>
            {subheadline && (
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
                {subheadline}
              </p>
            )}
            {(primaryCTA || secondaryCTA) && (
              <div className="flex flex-col sm:flex-row gap-4">
                {primaryCTA && (
                  <button
                    onClick={primaryCTA.action}
                    className="px-8 py-4 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors text-lg font-medium"
                  >
                    {primaryCTA.label}
                  </button>
                )}
                {secondaryCTA && (
                  <button
                    onClick={secondaryCTA.action}
                    className="px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors text-lg font-medium"
                  >
                    {secondaryCTA.label}
                  </button>
                )}
              </div>
            )}
          </motion.div>

          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-auto rounded-2xl shadow-2xl"
                loading="eager"
              />
              {/* ⚠️ REMOVED secondaryImage RENDERING LOGIC HERE ⚠️ */}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;