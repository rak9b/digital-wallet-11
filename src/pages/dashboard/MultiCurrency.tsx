import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { ArrowRightLeft } from 'lucide-react';

export const MultiCurrency = () => (
  <div className="space-y-8">
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold">Multi-Currency</h1>
      <Button><ArrowRightLeft className="mr-2 h-4 w-4" /> Convert</Button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {['USD', 'EUR', 'GBP'].map((curr) => (
        <Card key={curr}>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-xl">{curr}</span>
              <img src={`https://img-wrapper.vercel.app/image?url=https://placehold.co/40x30?text=${curr}`} alt={curr} className="rounded" />
            </div>
            <h3 className="text-2xl font-mono font-bold">0.00</h3>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);
