import { Heart, Smile, Sparkles, Sun, Moon, Coffee, Music, Star, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { ReasonCard } from './components/ReasonCard';
import { MemoryCard } from './components/MemoryCard';
import { FloatingHearts } from './components/FloatingHeart';
import { useRef, useState } from 'react';

export default function App() {
  const audioRef = useRef<HTMLAudioElement>(null);
const [isPlaying, setIsPlaying] = useState(false);

const toggleMusic = () => {
  if (!audioRef.current) return;

  if (isPlaying) {
    audioRef.current.pause();
  } else {
    audioRef.current.play();
  }

  setIsPlaying(!isPlaying);
};


  const reasons = [
    {
      icon: Smile,
      title: "รอยยิ้มของเธอ🌈",
      description: "ทุกครั้งที่เห็นเธอยิ้ม มันทำให้วันของเค้าสดใสขึ้นทันที เพราะรู้ว่าเธอไม่ได้เคียดให้"
    },
    {
      icon: Heart,
      title: "ความเข้าใจ🫧",
      description: "เธอเข้าใจเค้าในทุกช่วงเวลา ทั้งตอนดีและตอนแย่ เธอทำให้เค้ารู้สึกว่าไม่ได้เดินคนเดียวเลย"
    },
    {
      icon: Sparkles,
      title: "ความพิเศษ🧸",
      description: "เธอทำให้เค้ารู้สึกว่าเป็นคนพิเศษในชีวิตเธอ ซึ่งไม่เคยรู้สึกแบบนี้มาก่อนเลย "
    },
    {
      icon: Sun,
      title: "พลังบวก (บวกกัน)🔥",
      description: "อะล้อเล่นฮ่าๆ เธอทำให้เค้าอยากเป็นคนที่ดีขึ้นทุกวัน เพื่อที่จะได้มีเธอในชีวิตไปอีกนานแสนนาน"
    },
    {
      icon: Moon,
      title: "ความอบอุ่น💞",
      description: "เธอให้ความอบอุ่นกับเค้าเสมอ ทำให้เค้ารู้สึกปลอดภัย เรื่องที่เคยกลัวว่าจะทำไม่ได้ก็มีเธอคอยเชียร์อัพตลอด"
    },
    {
      icon: Star,
      title: "ความฝัน✨",
      description: "ความฝันของเค้าคงเป็นการที่มีเธอที่แสนดีคนนี้อยู่ด้วยกันไปนานๆ แม้จะตีกันหยุมกันบ้างก็ไม่เป็นไร (เป็นอยู่ ฮ่าๆ)"
    }
  ];

  const memories = [
    {
      date: "วันที่เราพบกันครั้งแรก",
      title: "จุดเริ่มต้นของทุกอย่าง🌻",
      description: "เค้าไป Reply Strory เธอแบบงงๆ แล้วเธอก็ทักมาแบบงงๆ แล้วเธอก็ตอบบ้างไม่ตอบบ้าง เค้างง🥹"
    },
    {
      date: "ช่วงเวลาที่เราได้คุยกัน",
      title: "ทุกบทสนทนา🌺",
      description: "ถึงจะตอบบ้างไม่ตอบบ้าง แต่สุดท้ายเธอก็แพ้ให้เค้าจนได้ฮ่าๆ ตกหลุมรักผมเข้าแล้วไงคุณรู้ตัวบ้างมั้ยยย"
    },
    {
      date: "วันที่เราเป็นแฟนกัน",
      title: "วันที่ดีที่สุด🌷",
      description: "ทำไมเธอไม่รอเค้าขอก่อนนะ แต่เคยถามแล้วเธอบอกถ้ารอเค้าขอเป็นแฟนเธอคงเฉาก่อนพอดี ฮ่าๆ แต่สุดท้ายก็เป็นแฟนกันจนได้ เธอบอกว่าเค้าเป็นแฟนคนแรกด้วย🥰"
    },
    {
      date: "ทุกวันที่ผ่านมา",
      title: "ทุกช่วงเวลาด้วยกัน🌹",
      description: "พอได้มองย้อนกลับไปแล้วเราก็ผ่านอะไรด้วยกันมาตั้งมากมายเลยเนอะ ทั้งล้มลุกคลุกคลาน ทั้งทะเลาะกัน ทั้งงอนกัน แต่สุดท้ายก็ผ่านมันมาได้ด้วยกันทุกครั้งเลยนะ เธอเป็นคนที่ทำให้เค้าอยากมีชีวิตอยู่ต่อไปทุกวันเลยนะ💖✨"
    }
    
  ];

  return (
    <div className="size-full min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 overflow-auto">
      <audio ref={audioRef} loop>
  <source src="/music.mp3" type="audio/mpeg" />
</audio>

<button
  onClick={toggleMusic}
  className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-pink-500 to-rose-500 hover:scale-110 transition-all duration-300 text-white p-4 rounded-full shadow-xl backdrop-blur-md"
>
  {isPlaying ? "⏸️" : "🎵"}
</button>

      <FloatingHearts />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-8"
          >
            <Heart className="size-24 md:size-32 fill-rose-500 text-rose-500 mx-auto" />
          </motion.div>
          <div>
            
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent mb-6"
          >
            Happy Valentine's Day, My Love! 
          </motion.h1>
          <p className='text-5xl md:text-7xl'>💐</p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl md:text-3xl text-gray-700 mb-6 leading-relaxed"
          >
            รอนานใช่ไหมล้าาา ขอโทษคับมันต้องใช้เวลานิดนึง
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            เค้าอยากบอกเธอว่า ทำไมเค้าถึงรักเธอ<br />
            พร้อมยัง ถ้าพร้อมแล้วก็เลื่อนเลย
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-12"
          >
            <div className="animate-bounce">
              <p className="text-gray-400 text-sm">เลื่อนลงเพื่อชมความน่ารักของเค้าได้เลย</p>
              <div className="w-6 h-10 border-2 border-gray-300 rounded-full mx-auto mt-4 flex justify-center">
                <div className="w-1.5 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              เหตุผลที่เค้ารักเธอ🦋
            </h2>
            <p className="text-xl text-gray-600">
              มีเป็นล้านๆยกมาใส่ในนี้ทั้งหมดคงไม่ไหว เอาที่เด่นๆละกันนะ
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <ReasonCard key={index} {...reason} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Memories Timeline Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-transparent via-pink-50/50 to-transparent">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Calendar className="size-16 text-rose-500 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              ความทรงจำของเรา
            </h2>
            <p className="text-xl text-gray-600">
              ทุกช่วงเวลาที่ได้ใช้กับเธอล้วนมีความหมายสำหรับเค้าเสมอ
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-pink-300 via-rose-400 to-pink-300"></div>
            
            {memories.map((memory, index) => (
              <MemoryCard 
                key={index} 
                {...memory} 
                index={index} 
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final Message Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1
              }}
            >
              <Heart className="size-20 fill-rose-500 text-rose-500 mx-auto mb-8" />
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              เค้าอยากให้เธอรู้ว่า...
            </h2>
            <div className='flex justify-center mb-8'>
              <img src="/love2.jpg" alt="love" className="w-64 rounded-xl" />
            </div>

            
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              เค้ารักเธอที่สุด<br />
              และรูปนี้จะเป็นหลักฐานว่า...แฟนเค้าน่ารักที่สุด!<br />
              อะแฮ่มๆๆๆ เอาเลยนะ<br />
              <br />  
              เธอคือคนที่ทำให้เค้ามีความสุขทุกวัน<br />
              เธอคือเหตุผลที่เค้ายิ้มได้ในทุกเช้าที่เธอไม่เคียดให้<br />
              เธอคือคนที่เค้าอยากดูแลและปกป้องตลอดไปนะจ๊ะ🤟🔥<br />
              <br />
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                เค้ารักเธอนะ
              </span>
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="pt-8 border-t border-gray-200"
            >
              <p className="text-gray-600 text-lg">
                ขอบคุณที่เป็นรอยยิ้มให้กันในทุกวัน<br />
                รักเธอมากกว่าเมื่อวาน แต่น้อยกว่าพรุ่งนี้แน่นอน🤟
              </p>
              
              <div className="mt-8 flex items-center justify-center gap-2">
                <Music className="size-5 text-rose-500" />
                <Coffee className="size-5 text-rose-500" />
                <Heart className="size-5 fill-rose-500 text-rose-500" />
                <Coffee className="size-5 text-rose-500" />
                <Music className="size-5 text-rose-500" />
              </div>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 text-gray-500"
          >
            สุขสันต์วันวาเลนไทน์คั้บไอ่หนูหมูอ้วนขี้งอนขี้ดื้อ 💕
          </motion.p>
        </div>
      </section>
    </div>
  );
}
