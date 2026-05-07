import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useLanguage } from './LanguageProvider';

export default function Introduction() {
  const { content } = useLanguage();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-stone-950 py-24 md:py-32">
      {/* 装饰性背景纹理 */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* 左侧文字区 */}
          <motion.div style={{ opacity }} className="space-y-8 md:space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            >
              <h2 className="mb-6 text-3xl font-bold tracking-[0.08em] text-amber-500 md:text-5xl md:tracking-widest" style={{ fontFamily: '"Noto Serif SC", serif' }}>
                {content.introduction.title}
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-amber-700 to-transparent md:w-24" />
            </motion.div>

            <div className="space-y-5 text-base font-light leading-loose tracking-wide text-stone-300 md:space-y-6 md:text-xl">
              {content.introduction.paragraphs.map((para, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 md:hidden">
            <div className="aspect-[3/4] overflow-hidden rounded-sm border border-stone-800 shadow-xl shadow-black/40">
              <img
                src={content.introduction.image1}
                alt={content.introduction.image1Alt}
                className="h-full w-full object-cover grayscale-[20%]"
              />
            </div>
            <div className="mt-10 aspect-[3/4] overflow-hidden rounded-sm border border-stone-800 shadow-xl shadow-black/50">
              <img
                src={content.introduction.image2}
                alt={content.introduction.image2Alt}
                className="h-full w-full object-cover grayscale-[20%]"
              />
            </div>
          </div>

          {/* 右侧图片视差区 */}
          <div className="relative h-[600px] hidden md:block">
            <motion.div 
              style={{ y: y1 }}
              className="absolute top-0 right-0 w-3/4 h-[400px] rounded-sm overflow-hidden shadow-2xl shadow-black/50 z-10 group"
            >
              <div className="absolute inset-0 bg-amber-900/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <img 
                src={content.introduction.image1} 
                alt={content.introduction.image1Alt} 
                className="w-full h-full object-cover img-hover-zoom grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>
            
            <motion.div 
              style={{ y: y2 }}
              className="absolute bottom-0 left-0 w-2/3 h-[350px] rounded-sm overflow-hidden shadow-2xl shadow-black/80 z-20 border-4 border-stone-900 group"
            >
              <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <img 
                src={content.introduction.image2} 
                alt={content.introduction.image2Alt} 
                className="w-full h-full object-cover img-hover-zoom grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
