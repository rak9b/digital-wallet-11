import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { User, Mail, Phone, MapPin, BadgeCheck } from 'lucide-react';
import { TiltCard } from '../../components/ui/TiltCard';

export const AgentProfile = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-heading font-bold text-gray-900">Agent Profile</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <TiltCard>
            <Card className="text-center h-full">
              <CardContent className="pt-8">
                <div className="relative inline-block">
                  <div className="h-24 w-24 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600 font-bold text-3xl mx-auto mb-4">
                    JD
                  </div>
                  <div className="absolute bottom-0 right-0 bg-green-500 p-1.5 rounded-full border-4 border-white">
                    <BadgeCheck className="h-4 w-4 text-white" />
                  </div>
                </div>
                <h2 className="text-xl font-bold text-gray-900">John Doe</h2>
                <p className="text-gray-500 text-sm">Authorized Agent</p>
                <div className="mt-4 flex justify-center gap-2">
                  <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-bold">ID: AG-8832</span>
                </div>
              </CardContent>
            </Card>
          </TiltCard>
        </div>

        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="Full Name" defaultValue="John Doe" icon={<User className="h-4 w-4" />} />
                <Input label="Email" defaultValue="agent@digiwallet.com" icon={<Mail className="h-4 w-4" />} />
                <Input label="Phone" defaultValue="+1 (555) 000-0000" icon={<Phone className="h-4 w-4" />} />
                <Input label="Location" defaultValue="New York, USA" icon={<MapPin className="h-4 w-4" />} />
              </div>
              <div className="pt-4">
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
