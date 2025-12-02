import React from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import { QrCode, Camera } from 'lucide-react';

export const QRPay = () => (
  <div className="max-w-md mx-auto space-y-8 text-center">
    <h1 className="text-3xl font-bold">Scan to Pay</h1>
    <Card className="aspect-square bg-gray-900 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 border-2 border-primary-500 m-12 rounded-lg opacity-50 animate-pulse"></div>
      <Camera className="h-12 w-12 text-white/50" />
      <p className="absolute bottom-8 text-white/80 text-sm">Align QR code within frame</p>
    </Card>
    <p className="text-gray-500">Scan any DigiWallet or supported merchant QR code</p>
  </div>
);
