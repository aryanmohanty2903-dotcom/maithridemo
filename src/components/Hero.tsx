import { Wind, Beaker, ArrowRight, Play, X, Droplets } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // --- PARALLAX MOUSE EFFECT ---
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setMousePosition({ x, y });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll to gallery instead of opening video card
  const scrollToGallery = () => {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center perspective-1000">

      {/* --- 1. GLOBAL BACKGROUND VIDEO --- */}
      <div className="absolute inset-0 w-full h-full z-0 transform scale-105"> 
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
          style={{
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`, 
            transition: 'transform 0.2s ease-out'
          }}
        >
          <source src="/65562-515098354.mp4" type="video/mp4" />
        </video>

        {/* Dynamic Overlay Gradient */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ${darkMode ? 'bg-slate-900/60' : 'bg-blue-900/40'}`}></div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
           <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping duration-[3s]"></div>
           <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-400/30 rounded-full animate-pulse duration-[4s]"></div>
        </div>
      </div>

      {/* --- 2. MAIN CONTENT GRID --- */}
      <div 
        ref={containerRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* === LEFT COLUMN: Content (Text Left Aligned) === */}
          <div 
            className="space-y-8"
            style={{
              transform: `rotateY(${mousePosition.x * 5}deg) rotateX(${mousePosition.y * -5}deg)`,
              transition: 'transform 0.3s ease-out'
            }}
          >

            {/* Glowing Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.3)] animate-fade-in-up">
              <Beaker className="text-cyan-400 mr-2 animate-pulse" size={18} />
              <span className="text-xs font-bold text-cyan-100 tracking-[0.2em] uppercase">Advanced R&D Platform</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] drop-shadow-2xl text-left">
              THE FUTURE OF<br />
              <span className="relative inline-block">
                WATER
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-cyan-500" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 animate-gradient-x">
                IS HERE.
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-blue-50/90 font-medium max-w-lg leading-relaxed border-l-4 border-cyan-500/50 pl-6 backdrop-blur-sm text-left">
              Pioneering <strong>Atmospheric Water Generation</strong>. We transform air into the world's purest resource using the revolutionary <span className="text-cyan-400">MEGHDOOT</span> technology.
            </p>

            {/* Interactive Buttons */}
            <div className="flex flex-wrap gap-5 pt-4 justify-start">
              
              {/* Primary Button */}
              <button className="group relative px-8 py-4 bg-white text-slate-900 rounded-xl font-bold text-lg overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                <span className="relative z-10 flex items-center gap-2">
                  Explore Research <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>

              {/* Secondary Button */}
              <button 
                onClick={scrollToGallery}
                className="group relative flex items-center gap-3 px-8 py-4 rounded-xl bg-slate-900/40 border border-white/20 backdrop-blur-md text-white font-bold text-lg hover:bg-slate-900/60 transition-all hover:border-cyan-400/50"
              >
                <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                  <Play size={18} fill="currentColor" className="ml-1" />
                  <div className="absolute inset-0 rounded-full border border-cyan-400 animate-ping opacity-20"></div>
                </div>
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/10 max-w-lg text-left">
              {[
                { val: "2000+", label: "Installations" },
                { val: "15+", label: "Global Patents" },
                { val: "100%", label: "Sustainable" }
              ].map((stat, i) => (
                <div key={i} className="group">
                  <div className="text-3xl font-black text-white group-hover:text-cyan-400 transition-colors duration-300">{stat.val}</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1 group-hover:text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* === RIGHT COLUMN: REMOVED (Empty div to maintain left alignment structure) === */}
          <div className="hidden lg:block"></div>

        </div>
      </div>
    </section>
  );
}