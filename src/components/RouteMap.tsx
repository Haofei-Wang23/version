import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, CheckCircle2, MapPin, Navigation, RotateCcw, Route, X } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

const mapImageSrc = './image/dt.png?v=20260505-2005';

const routePath =
  'M 660 828 C 654 772, 648 724, 642 690 C 710 672, 814 682, 884 724 C 888 612, 884 456, 880 318 C 800 314, 728 332, 672 370 C 606 414, 578 356, 560 274 C 546 204, 534 118, 530 56';

type RouteStop = {
  title: string;
  subtitle: string;
  description: string;
  x: number;
  y: number;
  url?: string;
};

export default function RouteMap() {
  const { content } = useLanguage();
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [isRouteVisible, setIsRouteVisible] = useState(false);
  const [activeStop, setActiveStop] = useState(0);
  const [detailStopIndex, setDetailStopIndex] = useState<number | null>(null);
  const [checkedInStopIndex, setCheckedInStopIndex] = useState<number | null>(null);
  const stops = content.routeMap.stops as RouteStop[];
  const detailStop = stops.find((_, index) => index === detailStopIndex) ?? null;
  const checkedInStop = stops.find((_, index) => index === checkedInStopIndex) ?? null;

  useEffect(() => {
    if (!detailStop) {
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
  }, [detailStop]);

  const openStop = (index: number) => {
    setActiveStop(index);
    setDetailStopIndex(index);
    setCheckedInStopIndex(null);
    if (!isRouteVisible) {
      setIsRouteVisible(true);
    }
  };

  const openStopFromPlan = (index: number) => {
    openStop(index);
    window.setTimeout(() => {
      mapRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 80);
  };

  const startRoute = () => {
    setIsRouteVisible(false);
    setDetailStopIndex(null);
    setCheckedInStopIndex(null);
    window.setTimeout(() => {
      setActiveStop(0);
      setIsRouteVisible(true);
    }, 40);
  };

  const completeCheckIn = () => {
    setCheckedInStopIndex(activeStop);
  };

  return (
    <section className="relative overflow-hidden bg-stone-950 py-24 md:py-32">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(0deg, white 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-col gap-6 md:mb-14 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <div className="flex items-center gap-3 text-amber-600 mb-5">
              <Route size={32} strokeWidth={1.2} />
              <span className="text-xs uppercase tracking-[0.28em] md:text-sm md:tracking-[0.4em]">{content.routeMap.eyebrow}</span>
            </div>
            <h2 className="mb-5 text-3xl font-bold tracking-[0.12em] text-stone-100 md:text-5xl md:tracking-[0.2em]">
              {content.routeMap.title}
            </h2>
            <p className="max-w-2xl text-sm leading-loose tracking-wide text-stone-400 md:text-base md:tracking-widest">
              {content.routeMap.description}
            </p>
          </div>

          <button
            type="button"
            onClick={startRoute}
            className="group inline-flex w-full items-center justify-center gap-3 border border-amber-600/70 bg-amber-600/10 px-5 py-4 tracking-widest text-amber-400 transition-colors duration-300 hover:bg-amber-600 hover:text-stone-950 sm:w-auto lg:self-auto"
          >
            {isRouteVisible ? <RotateCcw size={20} strokeWidth={1.5} /> : <Navigation size={20} strokeWidth={1.5} />}
            <span>{isRouteVisible ? content.routeMap.resetButton : content.routeMap.startButton}</span>
          </button>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_340px] gap-8 items-stretch">
          <aside className="border border-stone-800 bg-stone-900/70 p-6 md:p-8 flex flex-col justify-between xl:order-2">
            <div>
              <div className="text-amber-600 text-sm tracking-[0.35em] mb-4">{content.routeMap.planEyebrow}</div>
              <h3 className="text-2xl font-bold text-stone-100 tracking-widest mb-4">
                {content.routeMap.planTitle}
              </h3>
              <p className="text-stone-400 leading-loose mb-8">
                {content.routeMap.planSummary}
              </p>

              <div className="space-y-4">
                {stops.map((stop, index) => (
                  <button
                    key={stop.title}
                    type="button"
                    onClick={() => openStopFromPlan(index)}
                    className={`w-full text-left border-l-2 px-4 py-3 transition-colors duration-300 ${
                      activeStop === index && isRouteVisible
                        ? 'border-amber-500 bg-stone-950/70'
                        : 'border-stone-700 hover:border-amber-700 hover:bg-stone-950/40'
                    }`}
                  >
                    <div className="text-sm text-amber-600 tracking-widest mb-1">0{index + 1}</div>
                    <div className="text-stone-100 tracking-widest mb-1">{stop.title}</div>
                    <div className="text-sm text-stone-500 tracking-wide">{stop.subtitle}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-stone-800 pt-6 text-xs text-stone-500 leading-relaxed tracking-wider">
              {content.routeMap.planHint}
            </div>
          </aside>

          <div
            ref={mapRef}
            className="relative overflow-hidden rounded-sm border border-amber-900/50 bg-stone-900 shadow-2xl shadow-black/50 md:min-h-[620px]"
          >
            <div className="relative mx-auto aspect-[2170/2042] w-full md:h-full md:max-h-[860px] md:min-h-[620px]">
              <img
                src={mapImageSrc}
                alt={content.routeMap.mapAlt}
                className="absolute inset-0 h-full w-full object-contain md:object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25" />
              <div className="absolute inset-0 ring-1 ring-inset ring-amber-800/30" />

              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 1000 940"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <filter id="routeGlow">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <path id="changmen-route" d={routePath} />
                </defs>

                <path
                  d={routePath}
                  fill="none"
                  stroke="rgba(12, 10, 9, 0.55)"
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <AnimatePresence>
                  {isRouteVisible && (
                    <>
                      <motion.path
                        key="route-glow"
                        d={routePath}
                        fill="none"
                        stroke="rgba(251, 191, 36, 0.34)"
                        strokeWidth="15"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        filter="url(#routeGlow)"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 5.2, ease: 'easeInOut' }}
                      />
                      <motion.path
                        key="route-line"
                        d={routePath}
                        fill="none"
                        stroke="#fbbf24"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray="10 15"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 5.2, ease: 'easeInOut' }}
                      />
                      <circle r="9" fill="#fef3c7" stroke="#a16207" strokeWidth="5" filter="url(#routeGlow)">
                        <animateMotion dur="7s" repeatCount="indefinite" rotate="auto">
                          <mpath href="#changmen-route" />
                        </animateMotion>
                      </circle>
                    </>
                  )}
                </AnimatePresence>
              </svg>

              {stops.map((stop, index) => (
                <button
                  key={stop.title}
                  type="button"
                  aria-label={stop.title}
                  onClick={() => openStop(index)}
                  className={`absolute z-20 -translate-x-1/2 -translate-y-1/2 group transition-opacity duration-300 ${
                    isRouteVisible ? 'opacity-100' : 'opacity-70'
                  }`}
                  style={{ left: `${stop.x}%`, top: `${stop.y}%` }}
                >
                  <span
                    className={`absolute left-1/2 top-1/2 h-11 w-11 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/20 ${
                      isRouteVisible ? 'animate-ping' : ''
                    }`}
                  />
                  <span
                    className={`relative flex h-9 w-9 items-center justify-center rounded-full border shadow-[0_0_18px_rgba(251,191,36,0.58)] transition-transform duration-300 group-hover:scale-110 ${
                      activeStop === index && isRouteVisible
                        ? 'border-amber-200 bg-amber-400 text-stone-950'
                        : 'border-amber-500/80 bg-stone-950/90 text-amber-300'
                    }`}
                  >
                    <MapPin size={18} strokeWidth={1.8} />
                  </span>
                  <span
                    className={`absolute left-1/2 top-full mt-2 hidden -translate-x-1/2 whitespace-nowrap border px-3 py-1 text-xs tracking-widest backdrop-blur-sm transition-colors duration-300 sm:block ${
                      activeStop === index && isRouteVisible
                        ? 'border-amber-300 bg-stone-950/95 text-amber-200'
                        : 'border-amber-700/60 bg-stone-950/85 text-amber-400'
                    }`}
                  >
                    {stop.title}
                  </span>
                </button>
              ))}

              <AnimatePresence>
                {detailStop && (
                  <motion.div
                    key={detailStop.title}
                    initial={{ opacity: 0, y: 18, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="fixed inset-x-3 bottom-3 top-6 z-50 max-w-2xl overflow-y-auto border border-amber-500/50 bg-stone-950/95 p-5 text-stone-200 shadow-2xl shadow-black/60 backdrop-blur-md md:absolute md:inset-auto md:bottom-6 md:left-auto md:right-8 md:max-h-[88%] md:w-[480px] md:p-6 xl:w-[560px]"
                  >
                    <div className="pointer-events-none absolute inset-1 border border-amber-900/70" />
                    <div className="pointer-events-none absolute -inset-px bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.18),transparent_36%),linear-gradient(135deg,rgba(120,53,15,0.26),transparent_45%)]" />
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setDetailStopIndex(null)}
                        className="absolute right-0 top-0 text-amber-500 hover:text-amber-200 transition-colors"
                        aria-label={content.common.closeDetails}
                      >
                        <X size={18} strokeWidth={1.5} />
                      </button>
                      {checkedInStop ? (
                        <div className="py-8 text-center">
                          <CheckCircle2 className="mx-auto mb-6 text-amber-300" size={64} strokeWidth={1.2} />
                          <div className="mb-3 text-xs tracking-[0.35em] text-amber-600">{content.routeMap.checkedInLabel}</div>
                          <h3 className="mb-5 text-3xl font-bold tracking-widest text-amber-100">
                            {checkedInStopIndex === stops.length - 1 ? content.routeMap.completionTitle : content.routeMap.successTitle}
                          </h3>
                          <p className="mx-auto max-w-md text-sm leading-loose tracking-wide text-stone-300">
                            {checkedInStopIndex === stops.length - 1
                              ? content.routeMap.completionSummary
                              : content.routeMap.successSummaryTemplate.replace('{title}', checkedInStop.title)}
                          </p>
                          <button
                            type="button"
                            onClick={() => setCheckedInStopIndex(null)}
                            className="mt-8 inline-flex w-full items-center justify-center gap-2 border border-amber-500/70 bg-amber-500/10 px-4 py-3 text-sm tracking-widest text-amber-200 transition-colors duration-300 hover:bg-amber-500 hover:text-stone-950"
                          >
                            <ArrowLeft size={16} strokeWidth={1.7} />
                            <span>{content.routeMap.backButton}</span>
                          </button>
                        </div>
                      ) : (
                        <>
                          <div className="mb-3 text-xs tracking-[0.35em] text-amber-600">{content.routeMap.checkpointLabel}</div>
                          <h3 className="mb-3 pr-8 text-2xl font-bold tracking-widest text-amber-100">
                            {detailStop.title}
                          </h3>
                          <p className="mb-4 text-sm tracking-widest text-amber-500">{detailStop.subtitle}</p>
                          <div className="space-y-4 text-sm leading-loose tracking-wide text-stone-300">
                            {detailStop.description.split('\n\n').map((paragraph) => (
                              <p key={paragraph}>{paragraph}</p>
                            ))}
                          </div>
                          {detailStop.url && (
                            <div className="mt-5 overflow-hidden border border-amber-700/50 bg-white">
                              <iframe
                                src={detailStop.url}
                                title={`${detailStop.title} check-in page`}
                                loading="lazy"
                                className="h-[56svh] min-h-[420px] w-full border-0 bg-white md:h-[620px] md:min-h-0"
                                allow="camera; microphone; fullscreen; xr-spatial-tracking"
                              />
                            </div>
                          )}
                          <div className="sticky bottom-0 z-10 mt-5 bg-stone-950/95 pt-3 backdrop-blur-md">
                            <button
                              type="button"
                              onClick={completeCheckIn}
                              className="inline-flex w-full items-center justify-center gap-2 border border-amber-500/70 bg-amber-500/10 px-4 py-3 text-sm tracking-widest text-amber-200 transition-colors duration-300 hover:bg-amber-500 hover:text-stone-950"
                            >
                              <CheckCircle2 size={16} strokeWidth={1.7} />
                              <span>{content.routeMap.checkInButton}</span>
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
