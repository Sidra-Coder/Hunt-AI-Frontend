import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { ShoppingBag, ChevronRight, CheckCircle2, XCircle } from 'lucide-react';

const MarketAnalysis = () => {
  const chartData = [
    { month: 'Jan', price: 120 },
    { month: 'Feb', price: 150 },
    { month: 'Mar', price: 135 },
    { month: 'Apr', price: 180 },
    { month: 'May', price: 210 },
    { month: 'Jun', price: 195 },
  ];

  const competitors = [
    { name: 'Amazon', logo: 'A', stock: 'In Stock', price: '$199.99', trend: 'down' },
    { name: 'AliExpress', logo: 'AX', stock: 'Low Stock', price: '$145.50', trend: 'up' },
    { name: 'Shopify', logo: 'S', stock: 'In Stock', price: '$189.00', trend: 'stable' },
    { name: 'Etsy', logo: 'E', stock: 'Out of Stock', price: '$210.00', trend: 'up' },
  ];

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Price History Chart */}
      <div className="glass-dark rounded-2xl md:rounded-3xl p-4 md:p-8 border border-white/5">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
          <div>
            <h3 className="text-xl md:text-2xl font-bold">Price History</h3>
            <p className="text-white/40 text-xs md:text-sm">Aggregated market price over 6 months</p>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] md:text-xs font-bold flex items-center gap-1 border border-primary/20">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              Live Data
            </span>
          </div>
        </div>

        <div className="h-[250px] md:h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00F5FF" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#00F5FF" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12 }}
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12 }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#121214', 
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '12px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)'
                }}
                itemStyle={{ color: '#00F5FF' }}
              />
              <Area 
                type="monotone" 
                dataKey="price" 
                stroke="#00F5FF" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorPrice)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Competitor Table */}
      <div className="glass-dark rounded-2xl md:rounded-3xl p-4 md:p-8 border border-white/5 overflow-hidden">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h3 className="text-xl md:text-2xl font-bold">Competitor Comparison</h3>
          <button className="text-xs md:text-sm font-semibold text-primary hover:underline flex items-center gap-1 group">
            View All Marketplace <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5 text-white/40 text-xs uppercase tracking-wider">
                <th className="pb-4 font-semibold">Store</th>
                <th className="pb-4 font-semibold">Price</th>
                <th className="pb-4 font-semibold px-2">Status</th>
                <th className="pb-4 font-semibold hidden md:table-cell">Last Update</th>
                <th className="pb-4 hidden sm:table-cell"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {competitors.map((comp, idx) => (
                <tr key={idx} className="group hover:bg-white/[0.02] transition-colors">
                  <td className="py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center font-bold text-lg border border-white/5 group-hover:border-primary/30 transition-all">
                        {comp.logo}
                      </div>
                      <span className="font-bold">{comp.name}</span>
                    </div>
                  </td>
                  <td className="py-6 font-bold text-white/90">
                    {comp.price}
                  </td>
                  <td className="py-6 px-2">
                    {comp.stock === 'Out of Stock' ? (
                      <span className="flex items-center gap-1.5 text-xs font-bold text-red-400 bg-red-400/10 px-2 sm:px-3 py-1 rounded-full w-fit">
                        <XCircle size={14} /> <span className="hidden sm:inline">{comp.stock}</span><span className="sm:hidden">Out</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-xs font-bold text-green-400 bg-green-400/10 px-2 sm:px-3 py-1 rounded-full w-fit">
                        <CheckCircle2 size={14} /> <span className="hidden sm:inline">{comp.stock}</span><span className="sm:hidden">In</span>
                      </span>
                    )}
                  </td>
                  <td className="py-6 text-sm text-white/40 hidden md:table-cell">
                    2 hours ago
                  </td>
                  <td className="py-6 text-right hidden sm:table-cell">
                    <button className="p-2 rounded-lg bg-primary/10 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      <ShoppingBag size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MarketAnalysis;
