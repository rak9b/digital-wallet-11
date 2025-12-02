import React from "react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon, ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5">
        {label && <label className="text-sm font-medium text-gray-700 ml-1">{label}</label>}
        <div className="relative group">
          {icon && <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">{icon}</div>}
          <input
            ref={ref}
            className={cn(
              "flex h-12 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm transition-all focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none",
              icon && "pl-11",
              error && "border-error focus:border-error",
              className
            )}
            {...props}
          />
        </div>
        {error && (
          <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-xs text-error ml-1">
            {error}
          </motion.p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";
