import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Search, ArrowRight, ArrowDownLeft, ArrowUpRight, UserCheck, QrCode } from 'lucide-react';

export const AgentCashOps = () => {
  const [mode, setMode] = useState<'in' | 'out'>('in');
  const [step, setStep] = useState(1);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Cash Services</h1>
          <p className="text-gray-500">Process deposits and withdrawals for users.</p>
        </div>
        <div className="flex bg-gray-100 p-1 rounded-xl">
          <button
            onClick={() => setMode('in')}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
              mode === 'in' ? 'bg-white text-primary-700 shadow-sm' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Cash In (Deposit)
          </button>
          <button
            onClick={() => setMode('out')}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
              mode === 'out' ? 'bg-white text-primary-700 shadow-sm' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Cash Out (Withdraw)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>{mode === 'in' ? 'Process Deposit' : 'Process Withdrawal'}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {step === 1 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg flex gap-3 text-blue-800 text-sm">
                    <UserCheck className="h-5 w-5 flex-shrink-0" />
                    <p>Ask the user for their registered email, phone number, or scan their QR code.</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Enter user email or phone" 
                      icon={<Search className="h-4 w-4" />}
                      className="flex-1"
                    />
                    <Button variant="secondary" className="px-4">
                      <QrCode className="h-5 w-5" />
                    </Button>
                  </div>

                  <Button className="w-full" onClick={() => setStep(2)}>
                    Find User
                  </Button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                  <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl">
                    <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold">
                      JD
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">John Doe</p>
                      <p className="text-sm text-gray-500">john.doe@example.com</p>
                    </div>
                    <div className="ml-auto">
                      <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">Verified</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                      <input 
                        type="number" 
                        className="w-full pl-8 pr-4 py-3 text-2xl font-bold border rounded-xl border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none"
                        placeholder="0.00"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="ghost" onClick={() => setStep(1)} className="flex-1">Back</Button>
                    <Button className="flex-1">
                      Confirm {mode === 'in' ? 'Deposit' : 'Withdrawal'}
                    </Button>
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-primary-900 text-white border-none">
            <CardContent className="p-6">
              <p className="text-primary-200 text-sm font-medium">Your Wallet Balance</p>
              <h3 className="text-3xl font-bold mt-1 mb-4">$15,420.00</h3>
              <div className="h-1 w-full bg-primary-800 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-secondary-400"></div>
              </div>
              <p className="text-xs text-primary-300 mt-2">Daily limit: $20,000</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 border-b border-gray-100 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${i % 2 === 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                      {i % 2 === 0 ? <ArrowDownLeft className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">User #{1230 + i}</p>
                      <p className="text-xs text-gray-500">10 mins ago</p>
                    </div>
                  </div>
                  <span className="font-bold text-sm">$200.00</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
