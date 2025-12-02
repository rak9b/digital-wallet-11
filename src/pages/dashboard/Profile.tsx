import React from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { User } from 'lucide-react';

export const Profile = () => (
  <div className="max-w-2xl mx-auto space-y-8">
    <h1 className="text-3xl font-bold">My Profile</h1>
    <Card>
      <CardContent className="p-8 space-y-6">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-20 w-20 bg-gray-200 rounded-full flex items-center justify-center">
            <User className="h-10 w-10 text-gray-500" />
          </div>
          <Button variant="outline" size="sm">Change Avatar</Button>
        </div>
        <Input label="Full Name" defaultValue="Alex Morgan" />
        <Input label="Email" defaultValue="alex@example.com" disabled />
        <Input label="Phone" defaultValue="+1 (555) 123-4567" />
        <Button>Save Changes</Button>
      </CardContent>
    </Card>
  </div>
);
