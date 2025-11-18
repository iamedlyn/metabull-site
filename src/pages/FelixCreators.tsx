import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import VideoCard from '../components/VideoCard';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function FelixCreators() {
  const features = [
    'Complete production pipeline in one platform',
    'Seamless Blender 5.0 integration',
    'Automated previz and scene generation',
    'AI-powered editing and compositing',
    'Real-time collaboration tools',
    'Cloud rendering or local farm support',
    '4K and vertical format support',
    'Copyright-protected content creation',
  ];

  const videos = [
    {
      title: 'Creator Workflow',
      description: 'See how Felix streamlines independent production',
      thumbnail: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=450&fit=crop',
    },
    {
      title: 'Team Collaboration',
      description: 'Work together seamlessly with Felix',
      thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=450&fit=crop',
    },
    {
      title: 'From Concept to Final',
      description: 'Complete production pipeline demonstration',
      thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=450&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Hero
        headline="Felix for Creators"
        subheadline="The complete production pipeline for independent creators and production teams. Seamless integration with Blender 5.0."
        primaryCTA={{
          label: 'Request Early Access',
          action: () => {
            const formSection = document.getElementById('early-access');
            if (formSection) {
              formSection.scrollIntoView({ behavior: 'smooth' });
            }
          },
        }}
        image="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1200&h=800&fit=crop"
        imageAlt="Felix for Creators"
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
              Built for independent creators
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Felix for Creators gives you enterprise-level production capabilities without the
              enterprise budget. Create professional film and television content with a complete
              AI-powered pipeline designed for independent creators and small teams.
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
              See Felix in action
            </h2>
            <p className="text-xl text-gray-600">
              Watch how creators are using Felix to bring their visions to life
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

      <section id="early-access" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Request Early Access
            </h2>
            <p className="text-xl text-gray-600">
              Join the waitlist and be among the first creators to experience Felix 2.0
            </p>
          </motion.div>

          <ContactForm
            title="Early Adopter Request"
            submitLabel="Request Early Access"
            includeRole={true}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}