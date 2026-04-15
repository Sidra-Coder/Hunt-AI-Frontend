import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Heart, 
  Target, 
  BarChart3, 
  Settings, 
  LogOut, 
  User,
  Zap
} from 'lucide-react';

const NavItem = ({ icon: Icon, label, id, active = false, onClick }) => (
  <button 
    onClick={() => onClick(id)}
    className={active ? 'nav-link-active w-full' : 'nav-link w-full text-left'}
  >
    <Icon size={20} />
    <span className="font-medium">{label}</span>
  </button>
);

// Git-style Activity Tracker
const ActivityTracker = () => {
  // Generate mock activity data
  const activity = Array.from({ length: 28 }, () => Math.floor(Math.random() * 5));
  
  return (
    <div className="mt-8 p-4 rounded-2xl bg-white/5 border border-white/5">
      <div className="flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-wider text-white/40">
        <Zap size={14} className="text-primary" />
        Product Scrapes
      </div>
      <div className="grid grid-cols-7 gap-1">
        {activity.map((val, i) => (
          <div 
            key={i} 
            className={`w-3 h-3 rounded-sm transition-colors duration-500`}
            style={{ 
              backgroundColor: val === 0 ? 'rgba(255,255,255,0.05)' : 
                               val === 1 ? 'rgba(0,245,255,0.2)' :
                               val === 2 ? 'rgba(0,245,255,0.4)' :
                               val === 3 ? 'rgba(0,245,255,0.7)' : 'rgba(0,245,255,1)'
            }}
            title={`${val} scrapes today`}
          />
        ))}
      </div>
      <div className="mt-2 text-[10px] text-white/30 flex justify-between">
        <span>Less</span>
        <span>More</span>
      </div>
    </div>
  );
};

const Sidebar = ({ onLogout, isOpen, onClose, activeTab, onSetActiveTab }) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
          onClick={onClose}
        />
      )}

      <motion.aside 
        initial={false}
        animate={isMobile ? { x: isOpen ? 0 : -288 } : { x: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className={`
          fixed lg:relative inset-y-0 left-0 w-72 bg-black border-r border-white/10 flex flex-col z-[70] lg:z-0 h-full
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Mobile Close Button */}
        <button 
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 p-2 text-white/40 hover:text-white"
        >
          <LogOut size={20} className="rotate-180" />
        </button>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto min-h-0 p-6 md:p-10 no-scrollbar">
          {/* User Profile */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-secondary p-[2px]">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                 <User className="text-white/80" />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">Sarah Chen</h3>
              <p className="text-xs text-primary font-medium">Pro Plan Member</p>
            </div>
          </div>

          <nav className="space-y-1 md:space-y-2">
            <NavItem 
              icon={LayoutDashboard} 
              label="Dashboard" 
              id="dashboard"
              active={activeTab === 'dashboard'} 
              onClick={onSetActiveTab}
            />
            <NavItem 
              icon={Heart} 
              label="Wishlist" 
              id="wishlist"
              active={activeTab === 'wishlist'} 
              onClick={onSetActiveTab}
            />
            <NavItem 
              icon={Target} 
              label="Competitor Tracker" 
              id="competitor"
              active={activeTab === 'competitor'} 
              onClick={onSetActiveTab}
            />
            <NavItem 
              icon={BarChart3} 
              label="Market Insights" 
              id="market"
              active={activeTab === 'market'} 
              onClick={onSetActiveTab}
            />
            <NavItem 
              icon={Settings} 
              label="Settings" 
              id="settings"
              active={activeTab === 'settings'} 
              onClick={onSetActiveTab}
            />
          </nav>

          <ActivityTracker />
        </div>

        {/* Fixed Bottom Footer */}
        <div className="p-6 md:p-8 pt-4 border-t border-white/5 bg-black">
          <button 
            onClick={onLogout}
            className="flex items-center gap-3 text-white/50 hover:text-red-400 transition-colors w-full px-4 py-2"
          >
            <LogOut size={20} />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;
