import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { Button } from '../../components/ui/Button';
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export const Pricing = () => {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: "Basic",
      price: 0,
      desc: "Perfect for getting started",
      features: ["Hold up to $1,000", "Free P2P transfers", "1 Virtual Card", "Standard Support"],
      missing: ["Multi-currency accounts", "Crypto trading", "Cashback rewards"]
    },
    {
      name: "Pro",
      price: annual ? 99 : 12,
      popular: true,
      desc: "For power users",
      features: ["Hold up to $50,000", "Free P2P transfers", "5 Virtual Cards", "Priority Support", "Multi-currency accounts", "1% Cashback"],
      missing: ["Crypto trading"]
    },
    {
      name: "Business",
      price: annual ? 299 : 35,
      desc: "For teams and merchants",
      features: ["Unlimited Limits", "Free P2P transfers", "Unlimited Cards", "Dedicated Manager", "Multi-currency accounts", "2% Cashback", "Merchant API Access"],
      missing: []
    }
  ];

  return (
    <div className="min-h-screen bg-surface-light">
      <Navbar />
      
      <section className="pt-20 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-heading font-bold text-gray-900 mb-4">Simple, transparent pricing</h1>
          <p className="text-xl text-gray-600 mb-8">No hidden fees. No surprise charges. Cancel anytime.</p>
          
          <div className="flex items-center justify-center gap-4">
            <span className={cn("text-sm font-medium", !annual ? "text-gray-900" : "text-gray-500")}>Monthly</span>
            <button 
              onClick={() => setAnnual(!annual)}
              className="w-14 h-8 bg-primary-600 rounded-full relative transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <div className={cn(
                "absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-200",
                annual ? "translate-x-6" : "translate-x-0"
              )} />
            </button>
            <span className={cn("text-sm font-medium", annual ? "text-gray-900" : "text-gray-500")}>
              Yearly <span className="text-secondary-500 font-bold text-xs ml-1">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "relative rounded-3xl p-8 bg-white border",
                plan.popular ? "border-primary-500 shadow-2xl shadow-primary-900/10 ring-1 ring-primary-500" : "border-gray-200 shadow-lg"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                <p className="text-gray-500 text-sm mt-2">{plan.desc}</p>
                <div className="mt-6 flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-500 ml-2">/{annual ? 'year' : 'month'}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-gray-700">
                    <Check className="h-5 w-5 text-success flex-shrink-0" />
                    {feat}
                  </li>
                ))}
                {plan.missing.map((feat, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-gray-400">
                    <X className="h-5 w-5 flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? "primary" : "outline"} 
                className="w-full"
              >
                Choose {plan.name}
              </Button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
