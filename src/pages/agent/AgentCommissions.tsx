import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { BarChart3, DollarSign, Calendar, Download } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Button } from '../../components/ui/Button';

const data = [
  { name: 'Mon', earnings: 120 },
  { name: 'Tue', earnings: 150 },
  { name: 'Wed', earnings: 180 },
  { name: 'Thu', earnings: 140 },
  { name: 'Fri', earnings: 250 },
  { name: 'Sat', earnings: 300 },
  { name: 'Sun', earnings: 280 },
];

export const AgentCommissions = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-heading font-bold text-gray-900">Commissions</h1>
          <p className="text-gray-500 mt-1">Track your earnings and payouts.</p>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" /> Export Report
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-primary-700 text-white border-none">
          <CardContent className="p-6">
            <p className="text-primary-100 text-sm font-medium">Total Earnings (This Month)</p>
            <h3 className="text-3xl font-bold mt-2">$1,420.00</h3>
            <div className="mt-4 flex items-center gap-2 text-sm text-primary-100">
              <span className="bg-white/20 px-2 py-0.5 rounded text-white font-bold">+12%</span>
              vs last month
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-gray-500 text-sm font-medium">Pending Payout</p>
            <h3 className="text-3xl font-bold mt-2 text-gray-900">$420.00</h3>
            <p className="text-xs text-gray-400 mt-4">Next payout: Oct 31</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-gray-500 text-sm font-medium">Transactions Processed</p>
            <h3 className="text-3xl font-bold mt-2 text-gray-900">145</h3>
            <p className="text-xs text-gray-400 mt-4">Avg commission: $9.80</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Earnings History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6b7280'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#6b7280'}} tickFormatter={(value) => `$${value}`} />
                <Tooltip 
                  cursor={{fill: '#f3f4f6'}}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                />
                <Bar dataKey="earnings" fill="#0f6b66" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
