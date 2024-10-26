import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const DevelopedBy = () => {
  const team = [
    {
      name: 'Alex Chen',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800',
      bio: 'Cybersecurity enthusiast with a passion for building secure, scalable systems.',
      links: {
        github: '#',
        linkedin: '#',
        email: 'alex@example.com',
      },
    },
    {
      name: 'Sarah Johnson',
      role: 'UI/UX Designer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=800',
      bio: 'Creating beautiful, intuitive interfaces that prioritize user security.',
      links: {
        github: '#',
        linkedin: '#',
        email: 'sarah@example.com',
      },
    },
    {
      name: 'Michael Rodriguez',
      role: 'Security Architect',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=800',
      bio: 'Expert in implementing robust security measures and facial recognition systems.',
      links: {
        github: '#',
        linkedin: '#',
        email: 'michael@example.com',
      },
    },
    {
      name: 'Emily Zhang',
      role: 'Backend Developer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=800',
      bio: 'Specialized in building secure, high-performance backend systems.',
      links: {
        github: '#',
        linkedin: '#',
        email: 'emily@example.com',
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Meet Our Team</h1>
          <p className="text-xl text-gray-400">
            The brilliant minds behind HackMan Solution
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="card overflow-hidden">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover object-center rounded-lg transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-cyan-400 mb-4">{member.role}</p>
                  <p className="text-gray-400 mb-6">{member.bio}</p>

                  <div className="flex space-x-4">
                    <a
                      href={member.links.github}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={member.links.linkedin}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={`mailto:${member.links.email}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevelopedBy;