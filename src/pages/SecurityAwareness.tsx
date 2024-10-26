import React from 'react';
import { Shield, Lock, Eye, AlertTriangle, Fingerprint, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

const SecurityAwareness = () => {
  const sections = [
    {
      icon: Shield,
      title: 'Why Security Matters',
      content: 'In today\'s digital age, protecting your personal information is more crucial than ever. Cyber threats are constantly evolving, making robust security measures essential.',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Lock,
      title: 'Data Protection',
      content: 'Your personal data, including facial recognition patterns, is encrypted and stored securely. We implement multiple layers of protection to prevent unauthorized access.',
      color: 'from-purple-400 to-pink-500',
    },
    {
      icon: Eye,
      title: 'Privacy First',
      content: 'We prioritize your privacy by implementing strict data handling policies and giving you complete control over your personal information.',
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: AlertTriangle,
      title: 'Common Threats',
      content: 'Stay informed about phishing attempts, social engineering, and other cyber threats. Knowledge is your first line of defense.',
      color: 'from-red-400 to-rose-500',
    },
    {
      icon: Fingerprint,
      title: 'Biometric Security',
      content: 'Facial recognition provides a secure, convenient way to protect your account. Combined with other security measures, it significantly reduces the risk of unauthorized access.',
      color: 'from-amber-400 to-orange-500',
    },
    {
      icon: RefreshCw,
      title: 'Regular Updates',
      content: 'We continuously update our security measures to stay ahead of emerging threats and provide you with the best protection possible.',
      color: 'from-indigo-400 to-violet-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Shield className="mx-auto h-16 w-16 text-cyan-400 mb-4" />
            <h1 className="text-4xl font-bold text-white mb-4">Security Awareness</h1>
            <p className="text-xl text-gray-400">
              Understanding security is the first step towards protecting yourself online
            </p>
          </motion.div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="card group hover:scale-105 transition-transform duration-300">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${section.color} 
                  flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform`}>
                  <section.icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-4">{section.title}</h3>
                <p className="text-gray-400">{section.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security Tips */}
        <div className="mt-16">
          <div className="card bg-gradient-to-br from-purple-500/10 to-pink-500/10">
            <h2 className="text-2xl font-bold text-white mb-6">Essential Security Tips</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-cyan-400">Do's</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    <span>Enable two-factor authentication</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    <span>Keep your software updated</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    <span>Use strong, unique passwords</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-rose-400">Don'ts</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                    <span>Share account credentials</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                    <span>Click on suspicious links</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                    <span>Use public Wi-Fi without VPN</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityAwareness;