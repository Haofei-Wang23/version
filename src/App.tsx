import Hero from './components/Hero';
import Introduction from './components/Introduction';
import HorizontalScroll from './components/HorizontalScroll';
import Timeline from './components/Timeline';
import InteractiveMap from './components/InteractiveMap';
import RouteMap from './components/RouteMap';
import DeepStories from './components/DeepStories';
import { useLanguage } from './components/LanguageProvider';

export default function App() {
  const { content } = useLanguage();

  return (
    <div className="min-h-screen max-w-full overflow-x-clip bg-stone-950 font-sans selection:bg-amber-700 selection:text-white">
      <Hero />
      <Introduction />
      <HorizontalScroll />
      <Timeline />
      <InteractiveMap />
      <RouteMap />
      <DeepStories />
      
      <footer className="bg-black text-stone-500 py-20 relative overflow-hidden border-t border-stone-900">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-900 to-transparent opacity-50" />
        
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold text-stone-300 tracking-[0.3em] mb-6" style={{ fontFamily: '"Noto Serif SC", serif' }}>
            {content.footer.title}
          </h2>
          <div className="w-12 h-[1px] bg-amber-800 mb-8" />
          
          <p className="text-stone-400 tracking-widest leading-loose max-w-2xl mb-12 font-light">
            {content.footer.quote}
            <br />
            {content.footer.closing}
          </p>

          <div className="flex flex-col gap-2 text-sm tracking-wider opacity-60">
            <p>© {new Date().getFullYear()} {content.footer.copyrightSuffix}</p>
            <p>{content.footer.studioTag}</p>
            <p className="mt-4 text-xs">{content.footer.builtWith}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
