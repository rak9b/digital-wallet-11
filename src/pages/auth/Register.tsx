import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { login, UserRole } from '../../store/slices/authSlice';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Mail, Lock, Wallet, User, ArrowRight, Briefcase, CheckCircle2 } from 'lucide-react';
import { TiltCard } from '../../components/ui/TiltCard';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

export const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<UserRole>('user');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(login({
        user: {
          id: '2',
          name: data.name,
          email: data.email,
          role: role,
          avatar: `https://ui-avatars.com/api/?name=${data.name}&background=random`
        },
        token: 'mock-jwt-token-new'
      }));
      
      setIsLoading(false);
      if (role === 'admin') navigate('/admin');
      else if (role === 'agent') navigate('/agent');
      else navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-surface-light flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
       {/* Background Decor */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute bottom-[10%] -left-[5%] w-[40%] h-[40%] rounded-full bg-primary-200/20 blur-[100px]" />
        <div className="absolute top-[10%] -right-[5%] w-[40%] h-[40%] rounded-full bg-secondary-200/20 blur-[100px]" />
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mb-8 relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 justify-center mb-6">
          <div className="bg-gradient-to-br from-primary-600 to-primary-800 p-2.5 rounded-xl shadow-lg">
            <Wallet className="h-8 w-8 text-white" />
          </div>
          <span className="font-heading font-bold text-3xl text-gray-900">DigiWallet</span>
        </Link>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Create your account</h2>
        <p className="mt-2 text-gray-500">Join millions of users worldwide.</p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <TiltCard perspective={2500}>
          <Card className="border-0 shadow-2xl shadow-gray-200/50 backdrop-blur-sm bg-white/90">
            <CardHeader>
               <div className="flex justify-center gap-2 mb-6">
                 {[1, 2].map(s => (
                   <div key={s} className="flex flex-col items-center gap-2 flex-1">
                      <div className={cn(
                        "h-1 w-full rounded-full transition-all duration-500",
                        step >= s ? "bg-primary-600" : "bg-gray-100"
                      )} />
                      <span className={cn("text-xs font-bold uppercase tracking-wider", step >= s ? "text-primary-600" : "text-gray-300")}>
                        {s === 1 ? 'Role' : 'Details'}
                      </span>
                   </div>
                 ))}
               </div>
            </CardHeader>
            <CardContent>
              <AnimatePresence mode="wait">
                {step === 1 ? (
                  <motion.div 
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-4"
                  >
                    <button 
                      onClick={() => setRole('user')}
                      className={cn(
                        "w-full p-4 rounded-2xl border-2 text-left transition-all duration-200 group relative overflow-hidden",
                        role === 'user' ? 'border-primary-500 bg-primary-50/50' : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                      )}
                    >
                      <div className="flex items-center gap-4 relative z-10">
                        <div className={cn("p-3 rounded-xl transition-colors", role === 'user' ? "bg-primary-100 text-primary-600" : "bg-gray-100 text-gray-500")}>
                          <User className="h-6 w-6" />
                        </div>
                        <div>
                          <span className="font-bold text-gray-900 block text-lg">Personal Account</span>
                          <span className="text-sm text-gray-500">For daily spending & bills</span>
                        </div>
                        {role === 'user' && <CheckCircle2 className="ml-auto h-6 w-6 text-primary-600" />}
                      </div>
                    </button>
                    
                    <button 
                      onClick={() => setRole('agent')}
                      className={cn(
                        "w-full p-4 rounded-2xl border-2 text-left transition-all duration-200 group relative overflow-hidden",
                        role === 'agent' ? 'border-secondary-500 bg-secondary-50/50' : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                      )}
                    >
                      <div className="flex items-center gap-4 relative z-10">
                        <div className={cn("p-3 rounded-xl transition-colors", role === 'agent' ? "bg-secondary-100 text-secondary-600" : "bg-gray-100 text-gray-500")}>
                          <Briefcase className="h-6 w-6" />
                        </div>
                        <div>
                          <span className="font-bold text-gray-900 block text-lg">Agent Account</span>
                          <span className="text-sm text-gray-500">Earn commissions & fees</span>
                        </div>
                        {role === 'agent' && <CheckCircle2 className="ml-auto h-6 w-6 text-secondary-600" />}
                      </div>
                    </button>

                    <Button className="w-full mt-4 h-12 text-base" onClick={() => setStep(2)}>
                      Continue <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                      <Input
                        label="Full Name"
                        icon={<User className="h-4 w-4" />}
                        placeholder="John Doe"
                        {...register('name', { required: 'Name is required' })}
                        error={errors.name?.message as string}
                      />

                      <Input
                        label="Email address"
                        type="email"
                        icon={<Mail className="h-4 w-4" />}
                        placeholder="name@example.com"
                        {...register('email', { required: 'Email is required' })}
                        error={errors.email?.message as string}
                      />

                      <Input
                        label="Password"
                        type="password"
                        icon={<Lock className="h-4 w-4" />}
                        placeholder="Create a strong password"
                        {...register('password', { required: 'Password is required', minLength: { value: 8, message: 'Must be at least 8 characters' } })}
                        error={errors.password?.message as string}
                      />

                      <div className="flex items-center pt-2">
                        <input
                          id="terms"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-600"
                          required
                        />
                        <label htmlFor="terms" className="ml-2 block text-sm text-gray-600">
                          I agree to the <a href="#" className="text-primary-600 font-medium hover:underline">Terms</a> and <a href="#" className="text-primary-600 font-medium hover:underline">Privacy Policy</a>
                        </label>
                      </div>

                      <div className="flex gap-3 pt-2">
                         <Button type="button" variant="ghost" onClick={() => setStep(1)} className="px-6">Back</Button>
                         <Button type="submit" className="flex-1" isLoading={isLoading}>
                           Create Account
                         </Button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </TiltCard>
        <p className="mt-8 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-bold text-primary-600 hover:text-primary-700 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};
