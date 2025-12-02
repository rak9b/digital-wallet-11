import React from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import { Zap, Wifi, Smartphone, Home } from 'lucide-react';
import { TiltCard } from '../../components/ui/TiltCard';

export const BillPayments = () => {
  const categories = [
    { icon: Zap, name: 'Electricity', color: 'bg-yellow-100 text-yellow-600' },
    { icon: Wifi, name: 'Internet', color: 'bg-blue-100 text-blue-600' },
    { icon: Smartphone, name: 'Mobile', color: 'bg-purple-100 text-purple-600' },
    { icon: Home, name: 'Rent', color: 'bg-green-100 text-green-600' },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Pay Bills</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <TiltCard key={i} perspective={2000}>
            <Card className="cursor-pointer hover:shadow-md transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                <div className={`h-12 w-12 rounded-full flex items-center justify-center ${cat.color}`}>
                  <cat.icon className="h-6 w-6" />
                </div>
                <span className="font-bold text-gray-900">{cat.name}</span>
              </CardContent>
            </Card>
          </TiltCard>
        ))}
      </div>
    </div>
  );
};
