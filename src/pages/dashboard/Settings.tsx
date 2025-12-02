import React from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import { ToggleLeft, Moon, Bell, Shield } from 'lucide-react';

export const Settings = () => (
  <div className="max-w-2xl mx-auto space-y-8">
    <h1 className="text-3xl font-bold">Settings</h1>
    <Card>
      <CardContent className="divide-y divide-gray-100">
        {[
          { icon: Moon, title: "Dark Mode", desc: "Switch between light and dark themes" },
          { icon: Bell, title: "Notifications", desc: "Receive alerts for transactions" },
          { icon: Shield, title: "Two-Factor Auth", desc: "Add an extra layer of security" }
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between py-6 first:pt-0 last:pb-0">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-gray-100 rounded-lg"><item.icon className="h-5 w-5 text-gray-600" /></div>
              <div>
                <p className="font-bold text-gray-900">{item.title}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            </div>
            <ToggleLeft className="h-8 w-8 text-gray-300 cursor-pointer" />
          </div>
        ))}
      </CardContent>
    </Card>
  </div>
);
