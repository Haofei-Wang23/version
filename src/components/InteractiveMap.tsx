import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Map } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

export default function InteractiveMap() {
  const { content } = useLanguage();
  const [activePoint, setActivePoint] = useState<number | null>(null);

  useEffect(() => {
    if (activePoint === null) {
      return undefined;
    }

    const scrollY = window.scrollY;
    const originalPosition = document.body.style.position;
    const originalTop = document.body.style.top;
    const originalWidth = document.body.style.width;
    const originalOverflow = document.body.style.overflow;

    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.position = originalPosition;
      document.body.style.top = originalTop;
      document.body.style.width = originalWidth;
      document.body.style.overflow = originalOverflow;
      window.scrollTo(0, scrollY);
    };
  }, [activePoint]);

  return (
    <section className="relative bg-stone-950 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col items-center md:mb-20"
        >
          <Map size={40} className="text-amber-600 mb-6" strokeWidth={1} />
          <h2 className="mb-6 text-3xl font-bold tracking-[0.12em] text-stone-100 md:text-5xl md:tracking-[0.2em]" style={{ fontFamily: '"Noto Serif SC", serif' }}>
            {content.hotspotsSection.title}
          </h2>
          <p className="text-sm tracking-wide text-stone-400 md:text-base md:tracking-widest">{content.hotspotsSection.hint}</p>
        </motion.div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-stone-800 bg-stone-900 shadow-2xl md:aspect-[21/9]">
          {/* 地图底图 */}
          <motion.img 
            src={content.hotspots.image} 
            alt={content.hotspotsSection.mapAlt} 
            className="w-full h-full object-cover opacity-40"
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2 }}
          />
          
          {/* 扫描线动画 */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-1 bg-amber-500/20 blur-sm z-10"
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />

          {/* 交互热点 */}
          {content.hotspots.points.map((point, index) => (
            <div
              key={index}
              className="absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{ left: `${point.x}%`, top: `${point.y}%` }}
              onClick={() => setActivePoint(index)}
            >
              {/* 呼吸光环 */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-amber-500/30"
                animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
              />
              {/* 中心点 */}
              <div className="relative w-4 h-4 bg-amber-500 rounded-full border-2 border-stone-900 shadow-[0_0_10px_rgba(245,158,11,0.8)] group-hover:scale-150 transition-transform duration-300" />
              
              {/* 悬停提示 */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                <div className="bg-stone-900/90 border border-amber-600/50 text-amber-500 px-3 py-1 text-sm tracking-widest backdrop-blur-sm">
                  {point.title}
                </div>
              </div>
            </div>
          ))}

          {/* 详情弹窗 */}
          <AnimatePresence>
            {activePoint !== null && (
              <motion.div 
                className="fixed inset-x-3 bottom-3 top-8 z-50 flex items-stretch justify-center bg-black/70 p-0 backdrop-blur-md md:absolute md:inset-0 md:items-center md:p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div 
                  className="relative max-h-full w-full max-w-2xl overflow-y-auto border border-stone-700 bg-stone-900 p-5 shadow-2xl md:p-12"
                  initial={{ scale: 0.9, y: 20, opacity: 0 }}
                  animate={{ scale: 1, y: 0, opacity: 1 }}
                  exit={{ scale: 0.9, y: 20, opacity: 0 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                >
                  <button 
                    className="sticky top-0 z-10 ml-auto flex h-10 w-10 items-center justify-center bg-stone-900/90 text-stone-500 transition-colors hover:text-amber-500 md:absolute md:right-6 md:top-6 md:bg-transparent"
                    onClick={() => setActivePoint(null)}
                    aria-label={content.common.closeDetails}
                  >
                    <X size={26} strokeWidth={1} />
                  </button>
                  
                  <div className="mb-5 md:mb-8">
                    <h3 className="mb-2 pr-10 text-2xl font-bold tracking-wider text-amber-500 md:text-4xl md:tracking-widest" style={{ fontFamily: '"Noto Serif SC", serif' }}>
                      {content.hotspots.points[activePoint].title}
                    </h3>
                    <p className="text-sm uppercase tracking-wide text-stone-400 md:tracking-widest">
                      {content.hotspots.points[activePoint].subtitle}
                    </p>
                  </div>
                  
                  <div className="mb-6 h-[1px] w-12 bg-amber-600 md:mb-8" />
                  
                  <p className="text-left text-base font-light leading-loose tracking-normal text-stone-300 md:text-justify md:text-lg">
                    {content.hotspots.points[activePoint].description}
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
