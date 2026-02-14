import { Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function FloatingHeart({ delay = 0 }: { delay?: number }) {
  const [position] = useState({
    left: Math.random() * 100,
    size: Math.random() * 20 + 20,
    duration: Math.random() * 3 + 4,
  });

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: `${position.left}%`,
        bottom: -50,
      }}
      initial={{ y: 0, opacity: 0 }}
      animate={{
        y: -1000,
        opacity: [0, 1, 1, 0],
        x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50],
      }}
      transition={{
        duration: position.duration,
        repeat: Infinity,
        delay: delay,
        ease: "easeOut",
      }}
    >
      <Heart
        className="fill-pink-400/30 text-pink-400/30"
        style={{ width: position.size, height: position.size }}
      />
    </motion.div>
  );
}

export function FloatingHearts() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: 15 }).map((_, i) => (
        <FloatingHeart key={i} delay={i * 0.5} />
      ))}
    </div>
  );
}
