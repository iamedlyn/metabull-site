import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function Felix20() {
  const navigate = useNavigate();

  const features = [
    'Complete AI-native production pipeline',
    'Seamless Blender 5.0 integration',
    'Automated scene generation and previz',
    'Conversational AI for editing and compositing',
    'Promptless GenAI integration',
    'End-to-end 4K rendering capabilities',
    'Copyright-protected content creation',
    'Industry-standard tool compatibility',
  ];

  const productVariants = [
    {
      title: 'Felix AI for Blender',
      description:
        'Run proprietary AI Agents directly from Blender to automate production on your local machine.',
      linkTo: '/felix-ai-for-blender',
    },
    {
      title: 'Felix for Creators',
      description:
        'Complete production pipeline for independent creators and production teams with seamless Blender integration.',
      linkTo: '/felix-for-creators',
    },
    {
      title: 'Felix for Studios',
      description:
        'Enterprise solution with custom integrations and pipeline automations for studios and production partners.',
      linkTo: '/felix-for-studios',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Hero
        headline="Felix 2.0 — AI-native production for film and television"
        subheadline="Currently in Beta with release scheduled for November 2025."
        primaryCTA={{
          label: 'Learn more',
          action: () => {
            const featuresSection = document.getElementById('features');
            if (featuresSection) {
              featuresSection.scrollIntoView({ behavior: 'smooth' });
            }
          },
        }}
        secondaryCTA={{
          label: 'Choose your Felix setup',
          action: () => {
            const variantsSection = document.getElementById('variants');
            if (variantsSection) {
              variantsSection.scrollIntoView({ behavior: 'smooth' });
            }
          },
        }}
        image="https://metabull.ai/assets/images/felix-v-2.webp"
        imageAlt="Felix 2.0 Platform"
      />

      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              The future of production is here
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Felix 2.0 represents a fundamental shift in how film and television content is
              produced. By combining cutting-edge AI technology with industry-standard tools, we've
              created a platform that empowers creators while maintaining complete creative control.
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

      <section id="variants" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Start here
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the Felix experience that best fits your workflow and production needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productVariants.map((variant, index) => (
              <FeatureCard
                key={variant.title}
                title={variant.title}
                description={variant.description}
                linkTo={variant.linkTo}
                linkLabel="Go to page"
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}