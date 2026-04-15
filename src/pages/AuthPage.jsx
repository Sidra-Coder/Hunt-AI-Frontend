import React from 'react';
import { motion } from 'framer-motion';
import { Chrome } from 'lucide-react';

const AuthPage = ({ onLogin }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    
    if (email === 'admin@huntai.com' && password === 'admin123') {
      onLogin();
    } else {
      setError('Invalid email or password. Use the demo account below.');
    }
  };

  const fillDemo = () => {
    setEmail('admin@huntai.com');
    setPassword('admin123');
    setError('');
  };

  return (
    <div className="min-h-screen bg-black widest:bg-[#050505] flex items-center justify-center widest:p-10 overflow-y-auto">
      <div className="flex flex-col lg:flex-row w-full max-w-[1920px] widest:h-[90vh] widest:max-h-[1080px] overflow-y-auto widest:overflow-hidden widest:rounded-[40px] widest:border widest:border-white/10 widest:shadow-[0_0_100px_rgba(0,0,0,0.8)] bg-background relative min-h-screen widest:min-h-0">
        {/* Left Side: AI Visual */}
        <div className="hidden lg:flex w-1/2 relative flex-col items-center p-12 overflow-y-auto bg-black shrink-0">
          <div className="absolute inset-0 z-0 opacity-60">
            <img
              src="/auth-visual.png"
              alt="AI Visualization"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 max-w-lg text-center my-auto"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 tracking-tight">
              Uncover winning products with <span className="neon-text-cyan">AI-powered</span> insights.
            </h1>
            <p className="text-white/60 text-sm sm:text-base lg:text-lg">
              Join thousands of e-commerce entrepreneurs using Hunt AI to stay ahead of market trends and optimize pricing.
            </p>
          </motion.div>

          {/* Animated Orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-700"></div>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full lg:w-1/2 flex flex-col p-8 lg:p-12 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md my-auto mx-auto"
          >
            <div className="mb-10 text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
              <p className="text-white/50">Enter your credentials to access your dashboard</p>
            </div>

            <form className="space-y-6" onSubmit={handleLogin}>
              {error && (
                <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-xl text-sm font-medium animate-shake">
                  {error}
                </div>
              )}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70 ml-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all placeholder:text-white/20"
                  required
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-sm font-medium text-white/70">Password</label>
                  <a href="#" className="text-xs text-primary/80 hover:text-primary">Forgot password?</a>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all placeholder:text-white/20"
                  required
                />
              </div>

              <div className="flex flex-col gap-4">
                <button
                  type="submit"
                  className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-primary hover:text-black transition-all duration-300 shadow-lg shadow-white/10"
                >
                  Log In
                </button>
                
                <button
                  type="button"
                  onClick={fillDemo}
                  className="w-full py-3 bg-white/5 border border-white/10 text-white/70 text-sm font-medium rounded-xl hover:bg-white/10 transition-all"
                >
                  Use Demo Account (admin@huntai.com)
                </button>
              </div>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-4 text-white/40">Or continue with</span>
                </div>
              </div>

              <button
                type="button"
                className="w-full py-4 glass-dark rounded-xl flex items-center justify-center gap-3 hover:bg-white/10 transition-all duration-300"
              >
                <Chrome size={20} />
                Continue with Google
              </button>
            </form>

            <p className="mt-10 text-center text-sm text-white/40">
              Don't have an account? <a href="#" className="text-primary hover:underline">Sign up for free</a>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
