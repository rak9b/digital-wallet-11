import React from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Search, MoreVertical, Shield, Ban, CheckCircle } from 'lucide-react';

export const AdminUsers = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-heading font-bold text-gray-900">User Management</h1>
          <p className="text-gray-500 mt-1">View and manage all registered users.</p>
        </div>
        <Button>Add User</Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search users..." className="pl-10" />
            </div>
            <Button variant="outline">Filter</Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4">User</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">KYC Level</th>
                  <th className="px-6 py-4">Balance</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[1, 2, 3, 4, 5].map((i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600">
                          U{i}
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">User Name {i}</p>
                          <p className="text-xs text-gray-500">user{i}@example.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="capitalize bg-gray-100 px-2 py-1 rounded text-xs font-bold text-gray-600">
                        {i === 2 ? 'Agent' : 'User'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${i === 4 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${i === 4 ? 'bg-red-600' : 'bg-green-600'}`}></span>
                        {i === 4 ? 'Suspended' : 'Active'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1 text-gray-600">
                        <Shield className="h-4 w-4 text-primary-600" />
                        Level {i % 3 + 1}
                      </div>
                    </td>
                    <td className="px-6 py-4 font-mono">
                      ${(i * 1200).toFixed(2)}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreVertical className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
