import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { DashboardSidebar } from '../components/DashboardSidebar';
import { Menu, Bell } from 'lucide-react';

export const DashboardLayout = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardSidebar />
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-20 flex items-center justify-between px-4">
        <Menu className="h-6 w-6 text-gray-600" />
        <span className="font-bold text-lg">DigiWallet</span>
        <Bell className="h-6 w-6 text-gray-600" />
      </div>
      <main className="md:pl-64 pt-16 md:pt-0 min-h-screen">
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8"><Outlet /></div>
      </main>
    </div>
  );
};
