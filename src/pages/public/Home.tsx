import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import { Button } from '../../components/ui/Button';
import { ArrowRight, CheckCircle2, Zap, Shield } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TiltCard } from '../../components/ui/TiltCard';

export const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <div className="min-h-screen bg-surface-light overflow-x-hidden">
      <Navbar />
      <section className="relative pt-24 pb-32 overflow-visible perspective-1000">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div style={{ y: y1 }} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
              <h1 className="text-6xl md:text-8xl font-heading font-bold text-gray-900 mb-6">
                Banking <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-secondary-500">Reimagined</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-lg">Experience the future of finance with DigiWallet. Instant transfers, zero hidden fees.</p>
              <div className="flex gap-4">
                <Link to="/register"><Button size="lg" className="h-14 px-8">Get Started Free</Button></Link>
                <Link to="/features"><Button variant="ghost" size="lg" className="h-14 px-8">View Features <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              </div>
            </motion.div>
            <motion.div style={{ y: y2 }} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="relative perspective-1000">
              <TiltCard className="max-w-md mx-auto" perspective={2000}>
                <div className="relative rounded-[3rem] bg-gray-900 p-4 ring-1 ring-gray-900/10 shadow-2xl">
                   <div className="relative rounded-[2.5rem] bg-white overflow-hidden h-[600px] p-6 flex flex-col">
                      <div className="bg-primary-600 rounded-3xl p-8 text-white mb-8">
                        <p className="text-primary-100">Balance</p>
                        <h3 className="text-4xl font-bold">$24,562.00</h3>
                      </div>
                      <div className="space-y-4">
                        {[1,2,3].map(i => (
                          <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50">
                            <div className="h-10 w-10 rounded-full bg-primary-100" />
                            <div className="h-4 w-24 bg-gray-200 rounded" />
                          </div>
                        ))}
                      </div>
                   </div>
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
