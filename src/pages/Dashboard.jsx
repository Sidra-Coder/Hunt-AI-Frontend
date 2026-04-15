import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';
import MarketAnalysis from '../components/MarketAnalysis';
import Wishlist from './Wishlist';
import { Search, Bell, Filter, Menu, Heart } from 'lucide-react';

const Dashboard = ({ onLogout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  
  const products = [
    { id: 1, name: "Neural Link VR Headset", category: "Tech Gadgets", price: "599.00", hype: 94 },
    { id: 2, name: "Titanium EDC Multitool", category: "Outdoors", price: "85.50", hype: 82 },
    { id: 3, name: "Smart Plant Monitor", category: "Home Tech", price: "42.00", hype: 78 },
    { id: 4, name: "Carbon Fiber Wallet", category: "Accessories", price: "125.00", hype: 91 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <>
            <motion.section 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mb-16"
            >
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h2 className="text-4xl font-bold mb-2 tracking-tight">Trending Now</h2>
                  <p className="text-white/40">Products gaining significant market momentum in the last 24h</p>
                </div>
                <button className="text-primary font-bold hover:underline">View All Trends</button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </motion.section>

            <section className="mb-12">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h2 className="text-4xl font-bold mb-2 tracking-tight">Market Deep-Dive</h2>
                  <p className="text-white/40">Historical price tracking and cross-platform comparisons</p>
                </div>
              </div>
              <MarketAnalysis />
            </section>
          </>
        );
      case 'wishlist':
        return <Wishlist onBack={() => setActiveTab('dashboard')} />;
      case 'competitor':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Competitor Tracker</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['Amazon', 'AliExpress', 'Ebay'].map(store => (
                <div key={store} className="glass-dark p-6 rounded-2xl border border-white/5">
                  <h3 className="text-xl font-bold mb-4">{store}</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/40">Tracked Products</span>
                      <span className="font-bold">12</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/40">Price Changes</span>
                      <span className="text-green-400 font-bold">-5.2%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'market':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Market Insights</h2>
            <div className="glass-dark p-8 rounded-3xl border border-white/5 min-h-[400px] flex items-center justify-center">
              <p className="text-white/40">Expanding analytical charts and global market heatmaps...</p>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="max-w-2xl space-y-8">
            <h2 className="text-3xl font-bold">Settings</h2>
            <div className="space-y-6">
              <div className="glass-dark p-6 rounded-2xl border border-white/10">
                <h3 className="text-lg font-bold mb-4">Account Preferences</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <span>Email Notifications</span>
                    <div className="w-12 h-6 bg-primary rounded-full relative">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-black rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <span>Dark Mode Engine</span>
                    <div className="w-12 h-6 bg-primary rounded-full relative">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-black rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-screen bg-black flex overflow-hidden">
      <div className="flex w-full h-full bg-background relative overflow-hidden">
        <Sidebar 
          onLogout={onLogout} 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)} 
          activeTab={activeTab}
          onSetActiveTab={(tab) => {
            setActiveTab(tab);
            setIsSidebarOpen(false);
          }}
        />
        
        <main className="flex-1 p-4 lg:p-10 overflow-y-auto w-full">
          {/* Top Header */}
          <header className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center mb-12">
            <div className="flex items-center gap-4 w-full md:max-w-xl">
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden p-3 bg-white/5 border border-white/10 rounded-xl text-white/60 hover:text-white"
              >
                <Menu size={24} />
              </button>
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={20} />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all font-medium"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white/60 hover:text-white transition-all">
                <Bell size={20} />
              </button>
              <button className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white/60 hover:text-white transition-all flex items-center gap-2">
                <Filter size={20} />
                <span className="font-semibold">Filter</span>
              </button>
            </div>
          </header>

          {renderContent()}

          <footer className="mt-20 pt-8 border-t border-white/5 text-center text-white/20 text-sm pb-10">
            &copy; 2026 Hunt AI. All rights reserved. Powered by Antigravity Engine.
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
