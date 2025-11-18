import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageCircle, Users, Book, FileText, Rocket } from 'lucide-react';

export default function Support() {
  const [showEmailForm, setShowEmailForm] = useState(false);

  const supportOptions = [
    {
      icon: <Mail size={48} />,
      title: 'Email Support',
      description: 'Get help from our support team via email',
      action: () => setShowEmailForm(true),
    },
    {
      icon: <MessageCircle size={48} />,
      title: 'Chat Support',
      description: 'Connect with us in real-time',
      action: () => alert('Chat support coming soon!'),
    },
    {
      icon: <Users size={48} />,
      title: 'Community',
      description: 'Join our community of creators',
      action: () => window.open('#', '_blank'),
    },
  ];

  const resources = [
    {
      icon: <Book size={32} />,
      title: 'Prompt Guide',
      description: 'Learn how to get the most out of Felix with effective prompts',
      link: '#',
    },
    {
      icon: <FileText size={32} />,
      title: 'Felix User Documentation',
      description: 'Complete documentation for all Felix features and workflows',
      link: '#',
    },
    {
      icon: <Rocket size={32} />,
      title: 'Release Information',
      description: 'Stay updated with the latest Felix releases and features',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              How can we help?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get the support you need to make the most of Felix
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {supportOptions.map((option, index) => (
              <motion.button
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={option.action}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 text-left group"
              >
                <div className="text-red-600 mb-6 group-hover:scale-110 transition-transform">
                  {option.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{option.title}</h3>
                <p className="text-gray-600">{option.description}</p>
              </motion.button>
            ))}
          </div>

          <AnimatePresence>
            {showEmailForm && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="max-w-2xl mx-auto mb-20"
              >
                <button
                  onClick={() => setShowEmailForm(false)}
                  className="mb-4 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  ← Back to support options
                </button>
                <ContactForm title="Email Support" submitLabel="Send Message" />
              </motion.div>
            )}
          </AnimatePresence>
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
              Resources
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to master Felix
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <motion.a
                key={resource.title}
                href={resource.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors border border-gray-200 group"
              >
                <div className="text-red-600 mb-6 group-hover:scale-110 transition-transform">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                <p className="text-gray-600">{resource.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}