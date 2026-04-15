import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Heart, TrendingUp, DollarSign } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const HypeGauge = ({ score }) => {
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      <svg className="w-12 h-12 -rotate-90">
        <circle
          cx="24"
          cy="24"
          r={radius}
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="4"
          fill="transparent"
        />
        <circle
          cx="24"
          cy="24"
          r={radius}
          stroke="currentColor"
          strokeWidth="4"
          fill="transparent"
          strokeDasharray={circumference}
          style={{ strokeDashoffset: offset }}
          className="text-primary transition-all duration-1000 ease-out"
        />
      </svg>
      <span className="absolute text-[10px] font-bold">{score}%</span>
    </div>
  );
};

const ProductCard = memo(({ product }) => {
  // Mock data for mini trend
  const trendData = [
    { v: 10 }, { v: 15 }, { v: 8 }, { v: 22 }, { v: 18 }, { v: 30 }, { v: 25 }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="glass-dark rounded-3xl p-6 relative group border border-white/5 hover:border-primary/30 transition-all duration-300"
    >
    
      <div className="flex justify-between items-start mb-6">
        <div className="flex flex-col">
          <span className="text-[10px] md:text-xs font-semibold text-primary/60 uppercase tracking-widest mb-1">
            {product.category}
          </span>
          <h3 className="text-lg md:text-xl font-bold line-clamp-1">{product.name}</h3>
        </div>
        <HypeGauge score={product.hype} />
      </div>

      <div className="h-16 w-full mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={trendData}>
            <Line 
              type="monotone" 
              dataKey="v" 
              stroke="#00F5FF" 
              strokeWidth={2} 
              dot={false} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-auto pt-6 border-t border-white/5 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] text-white/40 font-medium uppercase tracking-wider">Market Price</div>
            <div className="text-2xl font-bold flex items-center text-accent">
              <DollarSign size={18} />
              {product.price}
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-green-400 font-semibold bg-green-400/5 px-3 py-1 rounded-full border border-green-400/10">
            <TrendingUp size={14} />
            Hype High
          </div>
        </div>
        
        <div className="flex gap-3">
          <button className="flex-1 py-4 bg-primary text-black font-bold rounded-2xl hover:bg-primary/80 transition-all duration-300 transform active:scale-[0.98] shadow-[0_0_20px_rgba(0,245,255,0.3)]">
            Save to List
          </button>
          <button className="px-5 py-4 glass-dark rounded-2xl text-white/40 hover:text-red-400 hover:border-red-400/30 transition-all active:scale-[0.98]">
            <Heart size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
});

export default ProductCard;
