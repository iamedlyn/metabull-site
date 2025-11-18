import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import VideoCard from '../components/VideoCard';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function FelixStudios() {
  const features = [
    'Custom pipeline integrations',
    'Enterprise-grade security and compliance',
    'Dedicated support and training',
    'Scalable rendering infrastructure',
    'Multi-project management',
    'Advanced collaboration tools',
    'Custom AI model training',
    'Priority feature development',
    'On-premise deployment options',
    'API access for custom workflows',
  ];

  const videos = [
    {
      title: 'Studio Integration',
      description: 'See how Felix integrates with studio pipelines',
      thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=450&fit=crop',
    },
    {
      title: 'Enterprise Features',
      description: 'Explore advanced capabilities for studios',
      thumbnail: 'https://placehold.co/800x450',
    },
    {
      title: 'Case Study',
      description: 'How studios are using Felix at scale',
      thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=450&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Hero
        headline="Felix for Studios"
        subheadline="Felix 2.0 plus custom integrations and pipeline automations for studios and production partners. Seamless integration with Blender 5.0."
        primaryCTA={{
          label: 'Schedule Assessment',
          action: () => {
            const formSection = document.getElementById('assessment');
            if (formSection) {
              formSection.scrollIntoView({ behavior: 'smooth' });
            }
          },
        }}
        image="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&h=800&fit=crop"
        imageAlt="Felix for Studios"
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
              Enterprise production at scale
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Felix for Studios provides everything production houses need to integrate AI into
              their existing workflows. Custom integrations, dedicated support, and enterprise-grade
              infrastructure ensure your studio can leverage AI without disrupting proven processes.
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
              Studio success stories
            </h2>
            <p className="text-xl text-gray-600">
              See how production studios are transforming their workflows with Felix
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

      <section id="assessment" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Schedule an Integration Assessment
            </h2>
            <p className="text-xl text-gray-600">
              Let's discuss how Felix can integrate with your studio's existing pipeline
            </p>
          </motion.div>

          <ContactForm
            title="Integration Assessment Request"
            submitLabel="Schedule Assessment"
            includeCompany={true}
            includeRole={true}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}