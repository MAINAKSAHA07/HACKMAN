import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Shield, 
  LogOut, 
  Bell, 
  Settings,
  ChevronDown,
  Activity
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import DashboardHome from '../components/dashboard/DashboardHome';
import DashboardNav from '../components/dashboard/DashboardNav';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Overview', path: '/dashboard' },
    { icon: Activity, label: 'Activity Logs', path: '/dashboard/activity' },
    { icon: Shield, label: 'Security', path: '/security' },
    { icon: Users, label: 'Developed By', path: '/developed-by' },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 border-r border-gray-800">
        <div className="p-4">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-cyan-400" />
            <span className="text-xl font-bold text-white">HackMan</span>
          </div>
        </div>

        <nav className="mt-8">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-2 px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors
                ${location.pathname === item.path ? 'bg-gray-800 text-white border-l-4 border-cyan-400' : ''}`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <header className="h-16 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-6">
          <h1 className="text-xl font-semibold text-white">
            {menuItems.find(item => item.path === location.pathname)?.label || 'Dashboard'}
          </h1>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Settings className="h-5 w-5" />
            </button>
            <div className="relative group">
              <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium">
                    {user?.firstName?.[0] || 'U'}
                  </span>
                </div>
                <span>{user?.firstName || 'User'}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute right-0 mt-2 w-48 py-2 bg-gray-900 rounded-lg shadow-xl border border-gray-800 hidden group-hover:block">
                <button
                  onClick={logout}
                  className="w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-800 hover:text-white transition-colors flex items-center space-x-2"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-auto bg-gray-900 p-6">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/activity" element={<ActivityLogs />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

const ActivityLogs = () => (
  <div className="space-y-4">
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="card">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                <Activity className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-medium">Login Attempt</h3>
                <p className="text-sm text-gray-400">2 minutes ago</p>
              </div>
            </div>
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-500/10 text-green-400">
              Successful
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Dashboard;