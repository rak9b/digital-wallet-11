import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Jan', users: 4000, txns: 2400 },
  { name: 'Feb', users: 3000, txns: 1398 },
  { name: 'Mar', users: 2000, txns: 9800 },
  { name: 'Apr', users: 2780, txns: 3908 },
  { name: 'May', users: 1890, txns: 4800 },
  { name: 'Jun', users: 2390, txns: 3800 },
  { name: 'Jul', users: 3490, txns: 4300 },
];

const pieData = [
  { name: 'P2P Transfer', value: 400 },
  { name: 'Bill Pay', value: 300 },
  { name: 'Merchant', value: 300 },
  { name: 'Cash Out', value: 200 },
];

const COLORS = ['#0f6b66', '#ff6b61', '#3da9f5', '#f39c12'];

export const AdminAnalytics = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-heading font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-500 mt-1">Deep dive into platform performance metrics.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>User Growth vs Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0f6b66" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#0f6b66" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorTxns" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ff6b61" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#ff6b61" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Area type="monotone" dataKey="users" stroke="#0f6b66" fillOpacity={1} fill="url(#colorUsers)" />
                  <Area type="monotone" dataKey="txns" stroke="#ff6b61" fillOpacity={1} fill="url(#colorTxns)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Transaction Volume by Type</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-4 mt-4 flex-wrap">
              {pieData.map((entry, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                  <span className="text-gray-600">{entry.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
