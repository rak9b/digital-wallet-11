import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { ToggleLeft, Shield, Bell, Globe } from 'lucide-react';

export const AdminSettings = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-heading font-bold text-gray-900">System Settings</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary-600" /> Security Policies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Require 2FA for Agents</p>
                <p className="text-sm text-gray-500">Mandatory two-factor auth for all agent accounts</p>
              </div>
              <ToggleLeft className="h-8 w-8 text-primary-600 cursor-pointer" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Max Transaction Limit</p>
                <p className="text-sm text-gray-500">Global limit for unverified users</p>
              </div>
              <div className="w-32">
                <Input placeholder="$1,000" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary-600" /> Regional Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Maintenance Mode</p>
                <p className="text-sm text-gray-500">Suspend all transactions temporarily</p>
              </div>
              <ToggleLeft className="h-8 w-8 text-gray-300 cursor-pointer" />
            </div>
             <Button variant="outline" className="w-full">Manage Supported Currencies</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
