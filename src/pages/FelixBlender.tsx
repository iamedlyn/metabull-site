import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import VideoCard from '../components/VideoCard';
import { motion } from 'framer-motion';
import { CheckCircle2, Download } from 'lucide-react';

export default function FelixBlender() {
  const features = [
    'Direct integration with Blender 5.0',
    'Run AI agents locally on your machine',
    'Automated scene generation and layout',
    'Real-time AI-powered camera placement',
    'Character animation automation',
    'Lighting and rendering optimization',
    'Asset management and organization',
    'Seamless workflow integration',
  ];

  const videos = [
    {
      title: 'Getting Started',
      description: 'Install and configure Felix AI for Blender',
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop',
    },
    {
      title: 'Scene Automation',
      description: 'Automate complex scene creation with AI',
      thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=450&fit=crop',
    },
    {
      title: 'Advanced Workflows',
      description: 'Master advanced production techniques',
      thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=450&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Hero
        headline="Felix AI for Blender"
        subheadline="Run MetaBull's proprietary AI Agents directly from Blender to automate production of your own projects right from your local machine."
        primaryCTA={{
          label: 'Purchase Add-on',
          action: () => {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
          },
        }}
        image="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=800&fit=crop"
        imageAlt="Felix AI for Blender"
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              AI-powered automation for Blender artists
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Felix AI for Blender brings the power of MetaBull's production AI directly into your
              favorite 3D software. Work faster, smarter, and maintain complete creative control
              over your projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle2 size={24} className="text-red-600 flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Learn Felix for Blender
            </h2>
            <p className="text-xl text-gray-600">
              Watch these tutorials to get started with Felix AI for Blender
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <VideoCard
                key={video.title}
                title={video.title}
                description={video.description}
                thumbnail={video.thumbnail}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Get the Blender Add-on
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join the community of creators using Felix AI to revolutionize their Blender workflow
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors text-lg font-medium">
                <Download size={24} className="mr-2" />
                Purchase Add-on
              </button>
              <button className="px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors text-lg font-medium">
                Join the Community
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}