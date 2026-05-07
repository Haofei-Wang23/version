import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { useLanguage } from './LanguageProvider';

export default function Timeline() {
  const { content } = useLanguage();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // 平滑的滚动进度用于绘制 SVG 线条
  const pathLength = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-[#0c0a09] py-24 md:py-40">
      <div className="relative z-10 mb-20 text-center md:mb-32">
        <h2 className="mb-6 text-4xl font-bold tracking-[0.14em] text-amber-500 md:text-5xl md:tracking-[0.2em]" style={{ fontFamily: '"Noto Serif SC", serif' }}>{content.timelineSection.title}</h2>
        <div className="mx-auto h-16 w-px bg-gradient-to-b from-amber-600 to-transparent md:h-24" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* 中央 SVG 连线 */}
        <div className="absolute bottom-0 left-6 top-0 w-[2px] md:hidden">
          <div className="h-full w-full bg-stone-800" />
          <motion.div className="absolute left-0 top-0 h-full w-full origin-top bg-amber-600" style={{ scaleY: pathLength }} />
        </div>
        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] hidden md:block">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <line x1="1" y1="0" x2="1" y2="100%" stroke="#292524" strokeWidth="2" />
            <motion.line 
              x1="1" y1="0" x2="1" y2="100%" 
              stroke="#d97706" 
              strokeWidth="2" 
              style={{ pathLength }} 
            />
          </svg>
        </div>

        <div className="space-y-24 pl-6 md:space-y-48 md:pl-0">
          {content.timeline.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`relative flex flex-col items-stretch justify-between gap-8 md:flex-row md:items-center md:gap-12 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute -left-[31px] top-2 z-10 h-4 w-4 rounded-full border-2 border-amber-500 bg-stone-950 shadow-[0_0_12px_rgba(217,119,6,0.55)] md:hidden" />
                
                {/* 图片区 */}
                <motion.div 
                  className="w-full md:w-5/12 relative group"
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, type: "spring" }}
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-sm relative">
                    <div className="absolute inset-0 bg-amber-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover img-hover-zoom grayscale-[40%] group-hover:grayscale-0" />
                  </div>
                  {/* 装饰框 */}
                  <div className={`absolute -inset-4 -z-10 hidden border border-stone-800 transition-transform duration-500 group-hover:scale-105 md:block ${isEven ? 'translate-x-4 translate-y-4' : '-translate-x-4 translate-y-4'}`} />
                </motion.div>

                {/* 中央节点 (仅桌面端) */}
                <div className="hidden md:flex w-2/12 justify-center relative z-10">
                  <motion.div 
                    className="w-6 h-6 rounded-full bg-stone-950 border-4 border-amber-600 shadow-[0_0_15px_rgba(217,119,6,0.5)]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-200px" }}
                    transition={{ type: "spring", delay: 0.2 }}
                  />
                </div>

                {/* 文字区 */}
                <motion.div 
                  className={`w-full md:w-5/12 ${isEven ? 'md:text-right' : 'md:text-left'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="text-amber-600 font-bold tracking-widest mb-2 text-sm uppercase">{item.year}</div>
                  <div className="text-stone-400 text-sm tracking-widest mb-4">{item.period}</div>
                  <h3 className="mb-5 text-2xl font-bold tracking-wider text-stone-100 md:mb-6 md:text-3xl" style={{ fontFamily: '"Noto Serif SC", serif' }}>{item.title}</h3>
                  <p className="text-justify text-base font-light leading-loose text-stone-400 md:text-left md:text-lg">
                    {item.description}
                  </p>
                </motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
