import React from 'react';
import { Activity, Shield, UserCheck, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const DashboardHome = () => {
  const stats = [
    { icon: UserCheck, label: 'Successful Logins', value: '124', color: 'from-green-400 to-emerald-500' },
    { icon: AlertTriangle, label: 'Failed Attempts', value: '3', color: 'from-red-400 to-rose-500' },
    { icon: Activity, label: 'Active Sessions', value: '1', color: 'from-blue-400 to-indigo-500' },
    { icon: Shield, label: 'Security Score', value: '95%', color: 'from-purple-400 to-pink-500' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card group hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} 
                flex items-center justify-center transform group-hover:rotate-12 transition-transform`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">{stat.label}</p>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="card">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                <Activity className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">Login from Chrome Browser</h3>
                <p className="text-sm text-gray-400">IP: 192.168.1.1 • Location: New York, US</p>
              </div>
              <span className="text-sm text-gray-400">2 minutes ago</span>
            </div>
          ))}
        </div>
      </div>

      {/* Security Tips */}
      <div className="card bg-gradient-to-br from-purple-500/10 to-pink-500/10">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Security Tip</h2>
            <p className="text-gray-300">
              Enable two-factor authentication for an extra layer of security. 
              This helps protect your account even if your password is compromised.
            </p>
            <button className="mt-4 btn-secondary">
              Enable 2FA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;