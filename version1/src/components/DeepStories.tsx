import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, X } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

export default function DeepStories() {
  const { content } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const activeFigure = activeIndex !== null ? content.figures[activeIndex] : null;
  const [mobileDetailIndex, setMobileDetailIndex] = useState<number | null>(null);
  const mobileFigure = mobileDetailIndex !== null ? content.figures[mobileDetailIndex] : null;

  return (
    <section className="relative overflow-hidden bg-[#0c0a09] py-24 md:py-32">
      {/* 装饰性大字 */}
      <div className="absolute top-10 left-10 text-[15vw] font-bold text-stone-800/20 pointer-events-none select-none" style={{ fontFamily: '"Noto Serif SC", serif' }}>
        {content.figuresSection.watermark}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <h2 className="mb-6 text-3xl font-bold tracking-[0.1em] text-stone-100 md:text-5xl md:tracking-[0.2em]" style={{ fontFamily: '"Noto Serif SC", serif' }}>
            {content.figuresSection.title}
          </h2>
          <div className="w-24 h-[1px] bg-amber-600" />
        </motion.div>

        <div className="flex h-auto flex-col gap-8 lg:h-[600px] lg:flex-row lg:gap-12">
          {/* 左侧手风琴导航 */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {content.figures.map((figure, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setMobileDetailIndex(index);
                }}
                className={`border-l-2 p-5 text-left transition-all duration-500 md:p-6 ${
                  activeIndex === index 
                    ? 'border-amber-500 bg-stone-900/80' 
                    : 'border-stone-800 hover:border-stone-600 hover:bg-stone-900/40'
                }`}
              >
                <h3 className={`mb-2 text-xl font-bold tracking-wider md:text-2xl md:tracking-widest ${activeIndex === index ? 'text-amber-500' : 'text-stone-400'}`} style={{ fontFamily: '"Noto Serif SC", serif' }}>
                  {figure.name}
                </h3>
                <p className="text-sm text-stone-500 tracking-widest">{figure.role}</p>
              </button>
            ))}
          </div>

          {/* 右侧内容展示区 */}
          <div className="relative hidden w-full overflow-hidden rounded-sm border border-stone-800 bg-stone-900/50 lg:block lg:w-2/3">
            <AnimatePresence mode="wait">
              {activeFigure && (
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                  transition={{ duration: 0.5 }}
                  className="relative flex flex-col md:flex-row lg:absolute lg:inset-0"
                >
                  {/* 图片部分 */}
                  <div className="relative h-72 w-full overflow-hidden md:h-auto md:w-2/5 lg:h-full">
                    <img 
                      src={content.figures[activeIndex].image} 
                      alt={activeFigure.name}
                      className="w-full h-full object-cover grayscale-[20%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-stone-900" />
                  </div>

                  {/* 文字部分 */}
                  <div className="flex h-full w-full flex-col justify-center overflow-y-auto p-6 md:w-3/5 md:p-12">
                    <BookOpen className="text-amber-600/50 mb-6" size={32} strokeWidth={1} />
                    <blockquote className="mb-6 border-l-4 border-amber-600/30 pl-5 text-lg italic text-amber-500 md:mb-8 md:pl-6 md:text-2xl" style={{ fontFamily: '"Noto Serif SC", serif' }}>
                      "{activeFigure.quote}"
                    </blockquote>
                    <p className="text-justify text-base font-light leading-loose text-stone-300 md:text-lg">
                      {activeFigure.story}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileFigure && (
          <motion.div
            className="fixed inset-x-4 bottom-4 top-10 z-50 overflow-y-auto border border-amber-600/50 bg-stone-950/95 p-5 shadow-2xl shadow-black/70 backdrop-blur-md lg:hidden"
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.24 }}
          >
            <div className="sticky -top-5 z-20 mb-5 flex items-center justify-between border-b border-stone-800 bg-stone-950/95 py-3 backdrop-blur-md">
              <span className="text-xs tracking-[0.32em] text-amber-600">{content.figuresSection.profileLabel}</span>
              <button
                type="button"
                onClick={() => setMobileDetailIndex(null)}
                className="flex h-10 w-10 items-center justify-center border border-amber-700/50 bg-stone-900/80 text-amber-500"
                aria-label={content.common.closeProfile}
              >
                <X size={22} strokeWidth={1.4} />
              </button>
            </div>
            <div className="mb-5 overflow-hidden rounded-sm border border-stone-800">
              <img src={mobileFigure.image} alt={mobileFigure.name} className="h-72 w-full object-cover grayscale-[15%]" />
            </div>
            <div className="mb-3 text-xs tracking-[0.32em] text-amber-600">{content.common.figureLabel}</div>
            <h3 className="mb-2 pr-8 text-2xl font-bold tracking-wider text-amber-500" style={{ fontFamily: '"Noto Serif SC", serif' }}>
              {mobileFigure.name}
            </h3>
            <p className="mb-6 text-sm tracking-wider text-stone-500">{mobileFigure.role}</p>
            <blockquote className="mb-6 border-l-4 border-amber-600/30 pl-4 text-lg italic leading-relaxed text-amber-500" style={{ fontFamily: '"Noto Serif SC", serif' }}>
              "{mobileFigure.quote}"
            </blockquote>
            <p className="text-justify text-base font-light leading-loose text-stone-300">
              {mobileFigure.story}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
