import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Button } from '../../components/ui/Button';
import { Shield, Users, Globe, Award, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <div className="min-h-screen bg-surface-light">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
            We're building the <br />
            <span className="text-primary-600">financial OS</span> for the world
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            DigiWallet was founded on a simple belief: money should move as fast as information. We're empowering millions to take control of their financial future.
          </p>
        </motion.div>
      </section>

      {/* Mission */}
      <section className="bg-white py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Shield, title: "Security First", desc: "Bank-grade encryption and fraud detection systems protect every penny." },
              { icon: Globe, title: "Global Access", desc: "Breaking down borders with instant cross-border transfers in 150+ currencies." },
              { icon: Users, title: "Customer Obsessed", desc: "24/7 support and a platform built entirely around user feedback." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="text-center"
              >
                <div className="h-16 w-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary-600">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Founded", value: "2020" },
              { label: "Team Members", value: "120+" },
              { label: "Offices", value: "12" },
              { label: "Happy Users", value: "2M+" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-4xl md:text-5xl font-bold mb-2 text-secondary-400">{stat.value}</p>
                <p className="text-primary-200 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to join the revolution?</h2>
          <p className="text-gray-600 mb-8">Join millions of users who trust DigiWallet for their daily financial needs.</p>
          <Button size="lg" className="px-8">
            Create Free Account <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};
