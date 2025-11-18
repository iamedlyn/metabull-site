import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  linkTo: string;
  linkLabel?: string;
  icon?: React.ReactNode;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  linkTo,
  linkLabel = 'Learn more',
  icon,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100"
    >
      {icon && <div className="mb-6 text-red-600">{icon}</div>}
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <Link
        to={linkTo}
        className="inline-flex items-center text-red-600 hover:text-red-700 font-medium transition-colors group"
      >
        {linkLabel}
        <ArrowRight
          size={20}
          className="ml-2 group-hover:translate-x-1 transition-transform"
        />
      </Link>
    </motion.div>
  );
};

export default FeatureCard;