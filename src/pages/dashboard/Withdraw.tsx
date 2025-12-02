import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { Building, ArrowRight } from 'lucide-react';

export const Withdraw = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">Withdraw Funds</h1>
      <Card>
        <CardHeader><CardTitle>Transfer to Bank</CardTitle></CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 bg-blue-50 rounded-xl flex gap-3 text-blue-800 text-sm">
             <Building className="h-5 w-5" />
             <p>Withdrawals typically take 1-2 business days to process.</p>
          </div>
          <Input label="Account Number" placeholder="0000 0000 0000" />
          <Input label="Routing Number" placeholder="000000000" />
          <Input label="Amount" type="number" placeholder="0.00" icon={<span className="text-gray-500 font-bold">$</span>} />
          <Button className="w-full">Review Withdrawal <ArrowRight className="ml-2 h-4 w-4" /></Button>
        </CardContent>
      </Card>
    </div>
  );
};
