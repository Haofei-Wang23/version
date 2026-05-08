import { useState } from 'react';
import { motion } from 'motion/react';
import { RefreshCw } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

export default function StoryCards() {
  const { content } = useLanguage();
  return (
    <div className="py-24 px-6 bg-stone-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold tracking-widest text-stone-900 mb-4">
          {content.figuresSection.title}
        </h2>
        <div className="w-16 h-1 bg-red-800 mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {content.figures.map((figure, index) => (
          <FlipCard key={index} figure={figure} index={index} />
        ))}
      </div>
    </div>
  );
}

function FlipCard({ figure, index }: { figure: any, index: number, key?: number }) {
  const { language } = useLanguage();
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div 
      className="relative w-full aspect-[3/4] md:aspect-[4/5] cursor-pointer perspective-1000 group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div 
        className="w-full h-full relative preserve-3d duration-700 ease-in-out"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-xl bg-stone-900">
          <img src={figure.image} alt={figure.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
            <h3 className="text-4xl font-bold text-white mb-2 tracking-wider">{figure.name}</h3>
            <p className="text-red-400 font-medium text-lg">{figure.role}</p>
            <div className="flex items-center gap-2 text-white/50 text-sm mt-6">
              <RefreshCw size={16} />
              <span>{language === 'zh' ? '点击翻转查看故事' : 'Tap to flip and read'}</span>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden rounded-2xl shadow-xl bg-[#f5f1ea] p-10 flex flex-col justify-center items-center text-center rotate-y-180 border border-stone-300">
          <h3 className="text-3xl font-bold text-red-800 mb-6 tracking-wider">{figure.name}</h3>
          <div className="w-12 h-1 bg-red-800/30 mb-8 rounded-full" />
          <p className="text-stone-700 leading-loose text-lg font-medium">
            {figure.story}
          </p>
          <div className="absolute bottom-8 flex items-center gap-2 text-stone-400 text-sm">
            <RefreshCw size={16} />
            <span>{language === 'zh' ? '点击翻转返回' : 'Tap to flip back'}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
