import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { formatCurrency } from '../../lib/utils';
import { ArrowDownLeft, ArrowUpRight } from 'lucide-react';

export const AgentTransactions = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-heading font-bold text-gray-900">Agent Transactions</h1>
        <p className="text-gray-500 mt-1">History of all cash-in and cash-out operations.</p>
      </div>

      <Card>
        <CardContent className="p-0">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Amount</th>
                <th className="px-6 py-4 text-right">Commission</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className={`p-1.5 rounded ${i % 2 === 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                        {i % 2 === 0 ? <ArrowDownLeft className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
                      </div>
                      <span className="font-medium">{i % 2 === 0 ? 'Cash In' : 'Cash Out'}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-900">User #{1020 + i}</p>
                      <p className="text-xs text-gray-500">user{i}@example.com</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500">Oct {25 - i}, 2023</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Completed
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-gray-900">
                    {formatCurrency(i * 50 + 100)}
                  </td>
                  <td className="px-6 py-4 text-right font-medium text-green-600">
                    +{formatCurrency((i * 50 + 100) * 0.02)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
};
