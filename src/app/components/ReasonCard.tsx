import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface ReasonCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function ReasonCard({ icon: Icon, title, description, index }: ReasonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
        className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center mb-6"
      >
        <Icon className="size-8 text-white" />
      </motion.div>
      
      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        {title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed text-lg">
        {description}
      </p>
    </motion.div>
  );
}
