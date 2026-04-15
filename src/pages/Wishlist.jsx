import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Wishlist = ({ onBack }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="py-12 md:py-20 text-center"
    >
      <div className="relative inline-block mb-8">
        <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full"></div>
        <Heart className="relative mx-auto text-primary/30" size={100} />
      </div>
      
      <h2 className="text-4xl font-bold mb-4 tracking-tight">Your Wishlist</h2>
      <p className="text-white/40 max-w-md mx-auto text-lg leading-relaxed mb-10">
        You haven't saved any winning products yet. Explore the trending dashboard and track your favorites here for deep monitoring.
      </p>
      
      <button 
        onClick={onBack}
        className="px-10 py-4 bg-white text-black font-bold rounded-2xl hover:bg-primary transition-all duration-300 shadow-xl shadow-white/5 active:scale-95"
      >
        Explore Trends
      </button>
    </motion.div>
  );
};

export default Wishlist;
