import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { CreditCard, Building, User } from 'lucide-react';
import { TiltCard } from '../../components/ui/TiltCard';

export const Deposit = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">Add Money</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: CreditCard, title: 'Card Deposit', desc: 'Instant • 1.5% fee' },
          { icon: Building, title: 'Bank Transfer', desc: '1-3 days • Free' },
          { icon: User, title: 'Find Agent', desc: 'Cash deposit nearby' },
        ].map((method, i) => (
          <TiltCard key={i} perspective={2000}>
            <Card className="h-full cursor-pointer hover:border-primary-500 transition-colors">
              <CardContent className="p-8 text-center space-y-4">
                <div className="h-12 w-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto text-primary-600">
                  <method.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{method.title}</h3>
                  <p className="text-sm text-gray-500">{method.desc}</p>
                </div>
              </CardContent>
            </Card>
          </TiltCard>
        ))}
      </div>
    </div>
  );
};
