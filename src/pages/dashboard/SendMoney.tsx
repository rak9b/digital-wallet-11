import React, { useState } from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Check, ChevronRight, User } from 'lucide-react';

export const SendMoney = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold text-center">Send Money</h1>
      <Card>
        <CardContent className="p-8">
          {step === 1 && (
            <div className="space-y-6">
              <Input label="Recipient" placeholder="Email or phone" icon={<User className="w-4 h-4" />} />
              <Button onClick={() => setStep(2)} className="w-full">Next <ChevronRight className="ml-2 w-4 h-4" /></Button>
            </div>
          )}
          {step === 2 && (
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto"><Check className="w-8 h-8 text-green-600" /></div>
              <h2 className="text-xl font-bold">Success!</h2>
              <Button onClick={() => setStep(1)}>Send More</Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
