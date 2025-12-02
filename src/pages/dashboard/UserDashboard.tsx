import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, ArrowDownLeft, Wallet, CreditCard, 
  Send, QrCode, FileText, MoreHorizontal, TrendingUp,
  Shield, Zap
} from 'lucide-react';
import { TiltCard } from '../../components/ui/TiltCard';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', value: 2400 },
  { name: 'Tue', value: 1398 },
  { name: 'Wed', value: 9800 },
  { name: 'Thu', value: 3908 },
  { name: 'Fri', value: 4800 },
  { name: 'Sat', value: 3800 },
  { name: 'Sun', value: 4300 },
];

export const UserDashboard = () => {
  return (
    <div className="space-y-8 pb-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-slate-500">Welcome back, Alex! Here's your financial overview.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 font-medium hover:bg-slate-50 transition-colors">
            <FileText className="w-4 h-4" /> Reports
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#0F6B66] text-white rounded-lg font-medium hover:bg-[#094542] transition-colors shadow-lg shadow-teal-900/20">
            <Zap className="w-4 h-4" /> Quick Action
          </button>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Balance Card - Premium Glass Effect */}
        <TiltCard className="col-span-1 md:col-span-2 bg-gradient-to-br from-[#0F6B66] to-[#094542] rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl shadow-teal-900/30">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16" />
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-teal-100 font-medium mb-1">Total Balance</p>
                <h2 className="text-4xl font-bold tracking-tight">$24,562.00</h2>
                <div className="flex items-center gap-2 mt-2 text-teal-200 bg-white/10 w-fit px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span>+12.5% this month</span>
                </div>
              </div>
              <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md border border-white/10">
                <Wallet className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <div className="mt-8 h-32 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#fff" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#fff" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="value" stroke="#fff" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </TiltCard>

        {/* Quick Card Actions */}
        <TiltCard className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full blur-2xl -mr-8 -mt-8" />
          
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-slate-900 text-lg">My Cards</h3>
              <button className="text-[#0F6B66] text-sm font-semibold hover:underline">View All</button>
            </div>
            
            {/* Virtual Card Visual */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-5 text-white shadow-lg mb-6 relative overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02]">
              <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <div className="flex justify-between items-start mb-8">
                <span className="font-bold text-lg italic">VISA</span>
                <Shield className="w-5 h-5 text-slate-400" />
              </div>
              <div className="mb-4">
                <p className="text-slate-400 text-xs mb-1">Card Number</p>
                <p className="font-mono text-lg tracking-wider">**** **** **** 4289</p>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-slate-400 text-xs">Holder</p>
                  <p className="font-medium">ALEX MORGAN</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs">Expires</p>
                  <p className="font-medium">12/25</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors text-slate-600">
              <div className="w-8 h-8 rounded-full bg-teal-100 text-[#0F6B66] flex items-center justify-center mb-2">
                <ArrowUpRight className="w-4 h-4" />
              </div>
              <span className="text-xs font-medium">Top Up</span>
            </button>
            <button className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors text-slate-600">
              <div className="w-8 h-8 rounded-full bg-orange-100 text-[#FF6B61] flex items-center justify-center mb-2">
                <ArrowDownLeft className="w-4 h-4" />
              </div>
              <span className="text-xs font-medium">Withdraw</span>
            </button>
          </div>
        </TiltCard>
      </div>

      {/* Quick Services Hub */}
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-4">Quick Services</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { icon: Send, label: 'Send', color: 'bg-blue-100 text-blue-600' },
            { icon: QrCode, label: 'Scan QR', color: 'bg-purple-100 text-purple-600' },
            { icon: FileText, label: 'Bills', color: 'bg-orange-100 text-orange-600' },
            { icon: CreditCard, label: 'Cards', color: 'bg-pink-100 text-pink-600' },
            { icon: Wallet, label: 'Wallet', color: 'bg-teal-100 text-teal-600' },
            { icon: MoreHorizontal, label: 'More', color: 'bg-slate-100 text-slate-600' },
          ].map((item, idx) => (
            <motion.button
              key={idx}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-3`}>
                <item.icon className="w-6 h-6" />
              </div>
              <span className="font-medium text-slate-700">{item.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="text-xl font-bold text-slate-900">Recent Transactions</h3>
          <button className="text-[#0F6B66] font-medium hover:underline">View All</button>
        </div>
        <div className="divide-y divide-slate-100">
          {[
            { name: 'Netflix Subscription', date: 'Today, 10:23 AM', amount: '-$14.99', type: 'debit', icon: 'N' },
            { name: 'Sarah Johnson', date: 'Yesterday, 4:30 PM', amount: '+$250.00', type: 'credit', icon: 'S' },
            { name: 'Uber Ride', date: 'Yesterday, 9:15 AM', amount: '-$24.50', type: 'debit', icon: 'U' },
            { name: 'Starbucks', date: 'Oct 24, 8:10 AM', amount: '-$5.40', type: 'debit', icon: 'S' },
          ].map((tx, i) => (
            <div key={i} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                  i % 2 === 0 ? 'bg-red-500' : 'bg-[#0F6B66]'
                }`}>
                  {tx.icon}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{tx.name}</p>
                  <p className="text-sm text-slate-500">{tx.date}</p>
                </div>
              </div>
              <span className={`font-bold ${tx.type === 'credit' ? 'text-[#0F6B66]' : 'text-slate-900'}`}>
                {tx.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
