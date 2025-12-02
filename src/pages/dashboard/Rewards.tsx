import React from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import { Gift, Star } from 'lucide-react';
import { TiltCard } from '../../components/ui/TiltCard';

export const Rewards = () => (
  <div className="space-y-8">
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 text-white">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-white/20 rounded-xl"><Gift className="h-8 w-8" /></div>
        <div>
          <h2 className="text-2xl font-bold">Rewards Program</h2>
          <p className="text-purple-100">Earn points on every transaction</p>
        </div>
      </div>
      <div className="text-4xl font-bold font-mono">2,450 <span className="text-lg font-sans font-normal opacity-80">pts</span></div>
    </div>
    
    <h3 className="text-xl font-bold">Available Rewards</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[1, 2, 3].map(i => (
        <TiltCard key={i}>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="h-16 w-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 text-yellow-600">
                <Star className="h-8 w-8" />
              </div>
              <h4 className="font-bold mb-2">Cashback Boost</h4>
              <p className="text-sm text-gray-500 mb-4">Get 2x cashback for 24 hours</p>
              <button className="text-primary-600 font-bold text-sm">Redeem for 500 pts</button>
            </CardContent>
          </Card>
        </TiltCard>
      ))}
    </div>
  </div>
);
