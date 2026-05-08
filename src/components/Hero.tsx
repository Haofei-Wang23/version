import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

export default function Hero() {
  const { language, setLanguage, content } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // 视差滚动效果
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // 粒子效果生成
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  return (
    <div ref={ref} className="relative flex h-[100svh] w-full items-center justify-center overflow-hidden bg-stone-950 md:h-[120vh]">
      {/* 背景层 - 视差 */}
      <motion.div 
        className="absolute inset-0 h-[110svh] w-full bg-cover bg-center md:h-[120vh]"
        style={{ 
          backgroundImage: `url(${content.hero.bgImage})`,
          y: backgroundY
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-stone-950" />
      </motion.div>

      {/* 悬浮粒子层 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-amber-500/30 blur-[1px]"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              y: ["0%", "-1000%"],
              x: ["0%", `${Math.random() * 20 - 10}%`],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="absolute right-4 top-4 z-30 flex items-center gap-1 border border-amber-700/60 bg-stone-950/90 p-1 backdrop-blur-md md:right-6 md:top-6">
        <button
          type="button"
          onClick={() => setLanguage('zh')}
          className={`px-3 py-1.5 text-[11px] tracking-[0.2em] transition-colors ${language === 'zh' ? 'bg-amber-600 text-stone-950' : 'text-amber-300'}`}
        >
          中文
        </button>
        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`px-3 py-1.5 text-[11px] tracking-[0.2em] transition-colors ${language === 'en' ? 'bg-amber-600 text-stone-950' : 'text-amber-300'}`}
        >
          EN
        </button>
      </div>

      {/* 文字内容层 */}
      <motion.div 
        className="relative z-10 flex max-w-full flex-col items-center justify-center px-5 text-center"
        style={{ y: textY, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="mb-6"
        >
          <h1 className="text-5xl font-bold tracking-[0.08em] text-amber-100 drop-shadow-2xl md:bg-gradient-to-b md:from-amber-100 md:via-amber-200 md:to-amber-700 md:bg-clip-text md:text-8xl md:text-transparent md:tracking-[0.2em] lg:text-9xl" style={{ fontFamily: '"Noto Serif SC", serif' }}>
            {content.hero.title}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="w-px h-16 bg-gradient-to-b from-amber-500/0 via-amber-500 to-amber-500/0" />
          <p className="text-xl font-light tracking-[0.12em] text-stone-300 md:text-4xl md:tracking-[0.3em]" style={{ fontFamily: '"Noto Serif SC", serif' }}>
            {content.hero.subtitle}
          </p>
          <p className="mt-2 text-base italic tracking-wide text-amber-500/80 md:mt-4 md:text-xl md:tracking-widest">
            {content.hero.description}
          </p>
        </motion.div>
      </motion.div>

      {/* 底部滚动提示 */}
      <motion.div 
        className="absolute bottom-16 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-amber-500/50 md:bottom-32"
        animate={{ y: [0, 15, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      >
        <span className="text-xs tracking-[0.5em] uppercase">{content.common.scrollHint}</span>
        <ChevronDown size={32} strokeWidth={1} />
      </motion.div>
      
      {/* 底部渐变遮罩，平滑过渡到下一节 */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-stone-950 to-transparent z-20" />
    </div>
  );
}
