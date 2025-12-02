import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LayoutDashboard, Send, History, CreditCard, Settings, LogOut, Wallet, Users, BarChart3, Banknote, QrCode, Zap, Gift, Globe, FileText } from 'lucide-react';
import { RootState } from '../store/store';
import { logout } from '../store/slices/authSlice';
import { cn } from '../lib/utils';

export const DashboardSidebar = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const location = useLocation();
  const dispatch = useDispatch();

  const userLinks = [
    { icon: LayoutDashboard, label: 'Overview', path: '/dashboard' },
    { icon: Send, label: 'Send Money', path: '/dashboard/send' },
    { icon: History, label: 'Transactions', path: '/dashboard/transactions' },
    { icon: Zap, label: 'Bill Payments', path: '/dashboard/bill-payments' },
    { icon: QrCode, label: 'QR Pay', path: '/dashboard/qr-pay' },
    { icon: CreditCard, label: 'Cards', path: '/dashboard/cards' },
    { icon: Globe, label: 'Multi-Currency', path: '/dashboard/multi-currency' },
    { icon: Gift, label: 'Rewards', path: '/dashboard/rewards' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
  ];

  const agentLinks = [
    { icon: LayoutDashboard, label: 'Overview', path: '/agent' },
    { icon: Banknote, label: 'Cash Services', path: '/agent/cash-services' },
    { icon: History, label: 'Transactions', path: '/agent/transactions' },
    { icon: BarChart3, label: 'Commissions', path: '/agent/commissions' },
    { icon: Settings, label: 'Profile', path: '/agent/profile' },
  ];

  const adminLinks = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
    { icon: Users, label: 'User Management', path: '/admin/users' },
    { icon: FileText, label: 'Transactions', path: '/admin/transactions' },
    { icon: BarChart3, label: 'Analytics', path: '/admin/analytics' },
    { icon: Settings, label: 'System Settings', path: '/admin/settings' },
  ];

  const links = user?.role === 'admin' ? adminLinks : user?.role === 'agent' ? agentLinks : userLinks;

  return (
    <div className="hidden md:flex w-64 flex-col fixed inset-y-0 border-r border-gray-200 bg-white z-10">
      <div className="flex items-center gap-2 h-16 px-6 border-b border-gray-200">
        <div className="bg-primary-600 p-1.5 rounded-lg"><Wallet className="h-5 w-5 text-white" /></div>
        <span className="font-bold text-lg text-gray-900">DigiWallet</span>
      </div>
      <div className="flex-1 flex flex-col gap-1 p-4 overflow-y-auto">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.path;
          return (
            <Link key={link.path} to={link.path} className={cn("flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors", isActive ? "bg-primary-50 text-primary-700" : "text-gray-700 hover:bg-gray-50")}>
              <Icon className={cn("h-5 w-5", isActive ? "text-primary-600" : "text-gray-400")} />
              {link.label}
            </Link>
          );
        })}
      </div>
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3 px-3 py-3 mb-2">
          <div className="h-9 w-9 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold">{user?.name.charAt(0)}</div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">{user?.name}</p>
            <p className="text-xs text-gray-500 truncate">{user?.role}</p>
          </div>
        </div>
        <button onClick={() => dispatch(logout())} className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50">
          <LogOut className="h-5 w-5" /> Sign Out
        </button>
      </div>
    </div>
  );
};
