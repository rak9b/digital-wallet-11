import React from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Plus, CreditCard, Lock, Eye } from 'lucide-react';
import { TiltCard } from '../../components/ui/TiltCard';

export const VirtualCards = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Cards</h1>
        <Button><Plus className="mr-2 h-4 w-4" /> Create New Card</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Active Card */}
        <TiltCard perspective={1500}>
          <div className="relative h-56 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 text-white shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10"><CreditCard className="h-32 w-32" /></div>
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="flex justify-between items-start">
                <span className="font-bold text-lg tracking-wider">DigiWallet</span>
                <span className="bg-white/20 px-2 py-1 rounded text-xs backdrop-blur-sm">Virtual</span>
              </div>
              <div className="space-y-4">
                <p className="font-mono text-xl tracking-widest">4242 •••• •••• 8892</p>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs text-gray-400">CARD HOLDER</p>
                    <p className="font-medium">ALEX MORGAN</p>
                  </div>
                  <div>
                     <p className="text-xs text-gray-400">EXPIRES</p>
                     <p className="font-medium">12/25</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TiltCard>

        {/* Card Controls */}
        <Card className="h-full">
          <CardContent className="p-6 space-y-4">
            <h3 className="font-bold text-gray-900">Card Controls</h3>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start"><Lock className="mr-2 h-4 w-4" /> Freeze Card</Button>
              <Button variant="outline" className="w-full justify-start"><Eye className="mr-2 h-4 w-4" /> Reveal Details</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
