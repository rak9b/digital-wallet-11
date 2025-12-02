import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Home } from './pages/public/Home';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { About } from './pages/public/About';
import { Pricing } from './pages/public/Pricing';
import { DashboardLayout } from './layouts/DashboardLayout';

// User Pages
import { UserDashboard } from './pages/dashboard/UserDashboard';
import { SendMoney } from './pages/dashboard/SendMoney';
import { Transactions } from './pages/dashboard/Transactions';
import { Deposit } from './pages/dashboard/Deposit';
import { Withdraw } from './pages/dashboard/Withdraw';
import { VirtualCards } from './pages/dashboard/VirtualCards';
import { Settings } from './pages/dashboard/Settings';
import { Profile } from './pages/dashboard/Profile';
import { BillPayments } from './pages/dashboard/BillPayments';
import { QRPay } from './pages/dashboard/QRPay';
import { MultiCurrency } from './pages/dashboard/MultiCurrency';
import { Rewards } from './pages/dashboard/Rewards';

// Agent Pages
import { AgentDashboard } from './pages/dashboard/AgentDashboard';
import { AgentCashOps } from './pages/agent/AgentCashOps';
import { AgentTransactions } from './pages/agent/AgentTransactions';
import { AgentCommissions } from './pages/agent/AgentCommissions';
import { AgentProfile } from './pages/agent/AgentProfile';

// Admin Pages
import { AdminDashboard } from './pages/dashboard/AdminDashboard';
import { AdminUsers } from './pages/admin/AdminUsers';
import { AdminTransactions } from './pages/admin/AdminTransactions';
import { AdminAnalytics } from './pages/admin/AdminAnalytics';
import { AdminSettings } from './pages/admin/AdminSettings';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/features" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />

          {/* Protected Routes */}
          <Route path="/" element={<DashboardLayout />}>
            {/* User Routes */}
            <Route path="dashboard" element={<UserDashboard />} />
            <Route path="dashboard/send" element={<SendMoney />} />
            <Route path="dashboard/transactions" element={<Transactions />} />
            <Route path="dashboard/deposit" element={<Deposit />} />
            <Route path="dashboard/withdraw" element={<Withdraw />} />
            <Route path="dashboard/cards" element={<VirtualCards />} />
            <Route path="dashboard/bill-payments" element={<BillPayments />} />
            <Route path="dashboard/qr-pay" element={<QRPay />} />
            <Route path="dashboard/multi-currency" element={<MultiCurrency />} />
            <Route path="dashboard/rewards" element={<Rewards />} />
            <Route path="dashboard/profile" element={<Profile />} />
            <Route path="dashboard/settings" element={<Settings />} />
            
            {/* Agent Routes */}
            <Route path="agent" element={<AgentDashboard />} />
            <Route path="agent/cash-services" element={<AgentCashOps />} />
            <Route path="agent/transactions" element={<AgentTransactions />} />
            <Route path="agent/commissions" element={<AgentCommissions />} />
            <Route path="agent/profile" element={<AgentProfile />} />

            {/* Admin Routes */}
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="admin/users" element={<AdminUsers />} />
            <Route path="admin/transactions" element={<AdminTransactions />} />
            <Route path="admin/analytics" element={<AdminAnalytics />} />
            <Route path="admin/settings" element={<AdminSettings />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
