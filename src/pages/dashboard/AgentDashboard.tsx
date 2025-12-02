import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Users, DollarSign, TrendingUp, ArrowRight } from 'lucide-react';

export const AgentDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Agent Portal</h1>
          <p className="text-gray-500">Manage cash-in/out requests and track commissions.</p>
        </div>
        <Button>
          Process Transaction
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm font-medium">Today's Commission</p>
                <h3 className="text-3xl font-bold mt-2 text-gray-900">$142.50</h3>
              </div>
              <div className="p-2 bg-green-100 rounded-lg">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm font-medium">Pending Requests</p>
                <h3 className="text-3xl font-bold mt-2 text-gray-900">12</h3>
              </div>
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm font-medium">Total Processed</p>
                <h3 className="text-3xl font-bold mt-2 text-gray-900">$15,200</h3>
              </div>
              <div className="p-2 bg-purple-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Pending Cash Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
             {[1, 2, 3].map((i) => (
               <div key={i} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50">
                 <div className="flex items-center gap-4">
                   <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600">
                     U{i}
                   </div>
                   <div>
                     <p className="font-medium text-gray-900">User #{1000 + i}</p>
                     <p className="text-sm text-gray-500">Cash Out Request</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4">
                   <span className="font-bold text-lg">$500.00</span>
                   <Button size="sm">Process <ArrowRight className="ml-2 h-4 w-4" /></Button>
                 </div>
               </div>
             ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
