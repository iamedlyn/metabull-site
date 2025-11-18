import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import VideoCard from '../components/VideoCard';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Film, Wand2 } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const productFeatures = [
    {
      title: 'Felix AI for Blender',
      description:
        "Run MetaBull's proprietary AI Agents directly from Blender to automate production of your own projects right from your local machine.",
      linkTo: '/felix-ai-for-blender',
    },
    {
      title: 'Felix for Creators',
      description:
        'Felix 2.0 is the complete production pipeline for independent creators and production teams. Seamless integration with Blender 5.0.',
      linkTo: '/felix-for-creators',
    },
    {
      title: 'Felix for Studios',
      description:
        'Felix 2.0 plus custom integrations and pipeline automations for studios and production partners. Seamless integration with Blender 5.0.',
      linkTo: '/felix-for-studios',
    },
  ];

  const videoSamples = [
    {
      title: 'Shot Analyzer',
      description: 'Create entire 3D scenes in minutes',
      thumbnail: 'https://placehold.co/800x450',
    },
    {
      title: 'PreViz',
      description: 'Full 3D previz in black & white or color',
      thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=450&fit=crop',
    },
    {
      title: 'AI Production',
      description: 'Conversational AI for camera, retargeting, and ADR',
      thumbnail: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=450&fit=crop',
    },
    {
      title: 'Promptless GenAI',
      description: 'Automation with AI tools like Sora and Veo',
      thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=450&fit=crop',
    },
    {
      title: 'Verticals',
      description: 'All the capabilities of Felix for TikTok and YouTube shorts',
      thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=450&fit=crop',
    },
    {
      title: 'Simple Workflow',
      description: 'See the simple workflow',
      thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=450&fit=crop',
    },
  ];

  const coreMessages = [
    {
      icon: <Sparkles size={40} />,
      title: 'Beyond Generative',
      description:
        'Felix delivers powerful automation that enables complete creative control and continuity shot to shot. All while reducing the costly time and effort spent on repetitive tasks—saving up to 70% on most animation budgets.',
      note: 'Felix uses your models together with AI for automation, so the content you create can earn copyright protection.',
    },
    {
      icon: <Film size={40} />,
      title: 'Better than Previz',
      description:
        'Now you can envision your projects in full 3D. Using your own models, Felix renders Previz in full 3D automatically.',
    },
    {
      icon: <Zap size={40} />,
      title: 'AI for Production',
      description:
        "Artists and animators can leverage MetaBull's conversational AI for editing, coverage, and compositing—even editing multiple shots with a single prompt.",
      note: 'Felix enables seamless integration with standard industry tools. Render 4K and verticals on your farm or ours. End-to-end.',
    },
    {
      icon: <Wand2 size={40} />,
      title: 'Promptless GenAI',
      description:
        'Felix can automatically generate images and video from popular systems like Veo or Sora without prompting—promptless GenAI built into your pipeline.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Hero
        headline="Good storytelling is timeless even if the tools change"
        subheadline="Felix 2.0 — The first complete AI production platform for film and television."
        primaryCTA={{
          label: 'Explore Felix 2.0',
          action: () => navigate('/felix-2-0'),
        }}
        secondaryCTA={{
          label: 'Get in touch',
          action: scrollToContact,
        }}
        image="https://metabull.ai/assets/images/felix-v-2.webp"
        imageAlt="Felix 2.0"
        secondaryImage="https://metabull.ai/assets/images/Felix-Screenshot-for-Home-Page.webp"
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Choose your Felix experience
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productFeatures.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                linkTo={feature.linkTo}
                delay={index * 0.1}
              />
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
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoSamples.map((video, index) => (
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {coreMessages.map((message, index) => (
              <motion.div
                key={message.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="text-red-600 mb-6">{message.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{message.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{message.description}</p>
                {message.note && (
                  <p className="text-sm text-gray-500 italic leading-relaxed">{message.note}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Join the Community
            </h2>
            <p className="text-xl text-gray-600">
              Request early access and be part of the future of AI production
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => navigate('/felix-for-creators')}
              className="px-8 py-4 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors text-lg font-medium"
            >
              Request Early Access
            </button>
            <button
              onClick={() => navigate('/support')}
              className="px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors text-lg font-medium"
            >
              Join the Community
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}