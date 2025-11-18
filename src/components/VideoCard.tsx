import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface VideoCardProps {
  title: string;
  description: string;
  thumbnail?: string;
  delay?: number;
}

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  description,
  thumbnail = 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=450&fit=crop',
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group cursor-pointer"
    >
      <div className="relative rounded-2xl overflow-hidden mb-4 aspect-video bg-gray-900">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <Play size={28} className="text-red-600 ml-1" fill="currentColor" />
          </div>
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default VideoCard;