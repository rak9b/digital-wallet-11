import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff, ArrowRight, User, Briefcase, Shield, Lock, Mail } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/slices/authSlice';
import { TiltCard } from '../../components/ui/TiltCard';

export const Login = () => {
  const [role, setRole] = useState<'user' | 'agent' | 'admin'>('user');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const mockUser = {
        id: '1',
        name: 'Alex Morgan',
        email: data.email,
        role: role,
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      };
      
      dispatch(login({ user: mockUser, token: 'mock-jwt-token' }));
      
      if (role === 'admin') navigate('/admin');
      else if (role === 'agent') navigate('/agent');
      else navigate('/dashboard');
      
      setIsLoading(false);
    }, 1500);
  };

  const roleColors = {
    user: 'bg-[#0F6B66]',
    agent: 'bg-[#FF6B61]',
    admin: 'bg-[#8B5CF6]'
  };

  const roleIcons = {
    user: <User className="w-5 h-5" />,
    agent: <Briefcase className="w-5 h-5" />,
    admin: <Shield className="w-5 h-5" />
  };

  return (
    <div className="min-h-screen bg-[#F7F9FB] flex relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#0F6B66]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#FF6B61]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Left Side - Brand Showcase (Desktop) */}
      <div className="hidden lg:flex w-1/2 items-center justify-center p-12 relative z-10">
        <div className="max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-tr from-[#0F6B66] to-[#2ECC71] rounded-xl flex items-center justify-center shadow-lg shadow-teal-900/20">
                <span className="text-white font-bold text-2xl">D</span>
              </div>
              <span className="text-3xl font-bold text-slate-900 tracking-tight">DigiWallet</span>
            </div>
            
            <h1 className="text-5xl font-bold text-slate-900 leading-tight mb-6">
              The Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F6B66] to-[#2ECC71]">Digital Finance</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Experience secure, instant, and borderless transactions. Manage your wealth with AI-driven insights and military-grade security.
            </p>

            <div className="flex gap-4">
              <div className="flex -space-x-4">
                {[1,2,3,4].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-12 h-12 rounded-full border-4 border-white shadow-sm" alt="User" />
                ))}
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-bold text-slate-900">2M+ Users</span>
                <span className="text-sm text-slate-500">Trust DigiWallet</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 relative z-10">
        <TiltCard className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 lg:p-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Welcome Back</h2>
            <p className="text-slate-500 mt-2">Please sign in to your account</p>
          </div>

          {/* Role Selector */}
          <div className="bg-slate-100 p-1.5 rounded-xl flex mb-8 relative">
            {(['user', 'agent', 'admin'] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 relative z-10 ${
                  role === r ? 'text-white shadow-md' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {roleIcons[r]}
                <span className="capitalize">{r}</span>
                {role === r && (
                  <motion.div
                    layoutId="activeRole"
                    className={`absolute inset-0 rounded-lg ${roleColors[r]}`}
                    style={{ zIndex: -1 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700 ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#0F6B66] transition-colors" />
                <input
                  {...register('email', { required: true })}
                  type="email"
                  placeholder="name@example.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3.5 outline-none focus:ring-2 focus:ring-[#0F6B66]/20 focus:border-[#0F6B66] transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-medium text-slate-700">Password</label>
                <Link to="/forgot-password" className="text-xs font-medium text-[#0F6B66] hover:underline">Forgot?</Link>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#0F6B66] transition-colors" />
                <input
                  {...register('password', { required: true })}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-12 py-3.5 outline-none focus:ring-2 focus:ring-[#0F6B66]/20 focus:border-[#0F6B66] transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className={`w-full py-3.5 rounded-xl text-white font-bold shadow-lg flex items-center justify-center gap-2 transition-all ${
                role === 'user' ? 'bg-[#0F6B66] hover:bg-[#094542] shadow-teal-900/20' :
                role === 'agent' ? 'bg-[#FF6B61] hover:bg-[#E0554C] shadow-orange-900/20' :
                'bg-[#8B5CF6] hover:bg-[#7C3AED] shadow-purple-900/20'
              }`}
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Sign In <ArrowRight className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm">
              Don't have an account?{' '}
              <Link to="/register" className="font-bold text-[#0F6B66] hover:underline">
                Create Account
              </Link>
            </p>
          </div>
        </TiltCard>
      </div>
    </div>
  );
};
