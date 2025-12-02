import React from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Search, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { formatCurrency } from '../../lib/utils';

export const AdminTransactions = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-heading font-bold text-gray-900">Global Transactions</h1>
          <p className="text-gray-500 mt-1">Audit trail of all system transactions.</p>
        </div>
        <div className="flex gap-2">
           <Button variant="outline">Export Log</Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search by Transaction ID, User, or Amount..." className="pl-10" />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4">Txn ID</th>
                  <th className="px-6 py-4">Sender</th>
                  <th className="px-6 py-4">Recipient</th>
                  <th className="px-6 py-4">Type</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-mono text-gray-500">#TX-8392{i}</td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">User A</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">User B</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="capitalize bg-gray-100 px-2 py-1 rounded text-xs font-medium text-gray-600">
                        Transfer
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {i === 2 ? (
                        <span className="inline-flex items-center gap-1 text-yellow-600 text-xs font-bold bg-yellow-50 px-2 py-1 rounded-full">
                          <AlertTriangle className="h-3 w-3" /> Flagged
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-green-600 text-xs font-bold bg-green-50 px-2 py-1 rounded-full">
                          <CheckCircle className="h-3 w-3" /> Success
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right font-mono font-bold">
                      {formatCurrency(i * 125.50)}
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
