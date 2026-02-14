import { motion } from 'motion/react';

interface MemoryCardProps {
  title: string;
  description: string;
  date: string;
  index: number;
  isLeft?: boolean;
}

export function MemoryCard({ title, description, date, index, isLeft = false }: MemoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`flex items-center gap-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'} mb-12`}
    >
      <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg inline-block"
        >
          <p className="text-sm text-pink-600 font-semibold mb-2">{date}</p>
          <h4 className="text-xl font-bold text-gray-800 mb-3">{title}</h4>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
        className="w-4 h-4 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full animate-ping opacity-75"></div>
      </motion.div>
      
      <div className="flex-1"></div>
    </motion.div>
  );
}
