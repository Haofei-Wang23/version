import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useLanguage } from './LanguageProvider';

export default function HorizontalScroll() {
  const { content } = useLanguage();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // 将垂直滚动映射为水平位移
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);
  const mobileX = useTransform(scrollYProgress, [0, 0.9], ["0vw", "-344vw"]);
  const galleryCards = content.gallery.map((item, index) => (
    <div key={index} className="relative group h-[46vh] min-h-[300px] w-[82vw] shrink-0 snap-center md:h-[60vh] md:w-[40vw] md:snap-none">
      <div className="absolute inset-0 overflow-hidden rounded-sm bg-stone-800 shadow-2xl">
        <img
          src={item.img}
          alt={item.title}
          className="img-hover-zoom h-full w-full object-cover opacity-60 transition-opacity duration-700 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      <div className="absolute bottom-6 left-6 overflow-hidden md:bottom-8 md:left-8">
        <motion.h3
          className="text-2xl font-bold tracking-wider text-amber-500 transition-transform duration-500 md:translate-y-full md:text-4xl md:tracking-widest md:group-hover:translate-y-0"
          style={{ fontFamily: '"Noto Serif SC", serif' }}
        >
          {item.title}
        </motion.h3>
        <div className="mt-2 h-[2px] w-0 bg-amber-500 transition-all delay-100 duration-700 group-hover:w-full" />
      </div>

      <div className="pointer-events-none absolute right-4 top-4 font-serif text-4xl font-bold italic text-stone-500/50 md:text-6xl">
        0{index + 1}
      </div>
    </div>
  ));

  return (
    <section ref={targetRef} className="relative h-[340vh] bg-stone-900 md:h-[300vh]">
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden py-16 md:flex-row md:items-center md:py-0">
        
        {/* 背景装饰 */}
        <div className="absolute inset-0 bg-stone-950">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-stone-800 -translate-y-1/2" />
        </div>

        <div className="relative z-20 w-full px-6 md:absolute md:left-12 md:top-12 md:w-auto md:px-0">
          <motion.h2 
            className="text-3xl font-bold tracking-[0.14em] text-stone-100 md:text-5xl md:tracking-[0.3em] md:vertical-text"
            style={{ fontFamily: '"Noto Serif SC", serif' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {content.gallerySection.title}
          </motion.h2>
          <div className="mt-4 h-px w-20 bg-amber-600 md:mt-6 md:ml-6 md:h-24 md:w-px" />
        </div>

        <motion.div style={{ x: mobileX }} className="relative z-10 mt-10 flex w-max gap-[4vw] px-6 pb-4 md:hidden">
          {galleryCards}
        </motion.div>

        <motion.div style={{ x }} className="relative z-10 hidden items-center gap-16 px-[20vw] md:flex">
          {galleryCards}
        </motion.div>
      </div>
    </section>
  );
}
