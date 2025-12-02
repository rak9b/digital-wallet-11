import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glareColor?: string;
  tiltMaxAngleX?: number;
  tiltMaxAngleY?: number;
  scale?: number;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className,
  glareColor = "rgba(255, 255, 255, 0.3)",
  tiltMaxAngleX = 5, // Subtle tilt
  tiltMaxAngleY = 5,
  scale = 1.02,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [tiltMaxAngleX, -tiltMaxAngleX]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-tiltMaxAngleY, tiltMaxAngleY]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXRel = e.clientX - rect.left;
    const mouseYRel = e.clientY - rect.top;
    const xPct = (mouseXRel / width) - 0.5;
    const yPct = (mouseYRel / height) - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale }}
      className={`relative transition-shadow duration-300 ease-out ${className || ''}`}
    >
      <div 
        style={{ transform: "translateZ(20px)" }} 
        className="relative z-10 h-full"
      >
        {children}
      </div>
      
      {/* Glare Effect */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none z-20 mix-blend-overlay"
        style={{
          background: `linear-gradient(125deg, transparent 40%, ${glareColor} 50%, transparent 60%)`,
          opacity: useTransform(mouseX, [-0.5, 0.5], [0, 0.6]),
          backgroundPosition: useTransform(mouseX, [-0.5, 0.5], ["0% 0%", "100% 100%"]),
        }}
      />
    </motion.div>
  );
};
