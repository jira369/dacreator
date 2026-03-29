import { motion } from 'framer-motion';

interface Props {
  color?: string;
  size?: number;
  top?: string;
  left?: string;
  delay?: number;
}

export default function GradientOrb({
  color = '#6366f1',
  size = 400,
  top = '20%',
  left = '60%',
  delay = 0,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.15, scale: 1 }}
      transition={{ duration: 2, delay, ease: 'easeOut' }}
      className="absolute pointer-events-none"
      style={{
        top,
        left,
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: 'blur(80px)',
      }}
    >
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="w-full h-full"
      />
    </motion.div>
  );
}
