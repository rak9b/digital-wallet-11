import React from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import { ArrowDownLeft } from 'lucide-react';

export const Transactions = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold">Transactions</h1>
    <Card><CardContent className="p-0">
      {[1,2,3,4,5].map(i => (
        <div key={i} className="flex justify-between items-center p-4 border-b">
          <div className="flex gap-4"><ArrowDownLeft className="h-5 w-5" /><span>Transaction {i}</span></div>
          <span className="font-bold">$100.00</span>
        </div>
      ))}
    </CardContent></Card>
  </div>
);
