import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TeamMember from '../components/TeamMember';
import { motion } from 'framer-motion';

export default function About() {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 20+ years in film production and AI technology.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      bio: 'AI researcher and engineer specializing in computer vision and generative models.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    },
    {
      name: 'Michael Chen',
      role: 'Head of Product',
      bio: 'Product strategist focused on creating intuitive tools for creative professionals.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead AI Engineer',
      bio: 'Machine learning expert with a passion for democratizing AI in entertainment.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    },
    {
      name: 'David Park',
      role: 'Creative Director',
      bio: 'Award-winning animator and filmmaker bringing artistic vision to AI tools.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Customer Success',
      bio: 'Dedicated to ensuring every creator succeeds with Felix.',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
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
              About MetaBull
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're building the future of entertainment production. Our mission is to empower
              creators with AI-powered tools that enhance creativity while maintaining complete
              artistic control.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At MetaBull, we believe that good storytelling is timeless, even if the tools
                change. We're committed to creating AI technology that serves artists and creators,
                not replaces them.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Felix 2.0 represents years of research, development, and collaboration with
                industry professionals. We've built a platform that reduces the time and cost of
                production while ensuring creators maintain full copyright protection and creative
                control over their work.
              </p>
            </div>
          </motion.div>
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
              Meet the Team
            </h2>
            <p className="text-xl text-gray-600">
              The people behind Felix and MetaBull
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={member.name}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
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