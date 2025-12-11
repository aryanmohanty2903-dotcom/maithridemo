import { Wind, Beaker, ArrowRight, Play, X, Droplets } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  const [showVideo, setShowVideo] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // --- TYPING EFFECT STATE ---
  const [displayedText, setDisplayedText] = useState('');
  // Added the ® symbol in the source text logic, but we handle styling in the render
  const fullText = "Pioneering Atmospheric Water Generation. We transform air into the world's purest resource using the revolutionary MEGHDOOT technology.";
  
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

  // --- TYPING ANIMATION LOGIC (SLOWER SPEED) ---
  useEffect(() => {
    let index = 0;
    const startDelay = setTimeout(() => {
      const intervalId = setInterval(() => {
        setDisplayedText((prev) => {
          if (index < fullText.length) {
            index++;
            return fullText.slice(0, index);
          } else {
            clearInterval(intervalId);
            return prev;
          }
        });
      }, 50); // CHANGED: Increased from 30 to 50 for slower typing
      
      return () => clearInterval(intervalId);
    }, 1000);

    return () => clearTimeout(startDelay);
  }, []);

  // --- SCROLL TO RESEARCH SECTION ---
  const scrollToResearch = () => {
    const researchSection = document.getElementById('research');
    if (researchSection) {
      researchSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Helper to render text with specific styling for MEGHDOOT
  const renderTypedText = () => {
    // If the text hasn't reached "MEGHDOOT" yet, just return plain text
    if (!displayedText.includes("MEGHDOOT")) {
      return displayedText;
    }

    // Split around MEGHDOOT to apply styles
    const parts = displayedText.split("MEGHDOOT");
    return (
      <>
        {parts[0]}
        <span className="text-cyan-300 font-bold glow-text">
          MEGHDOOT<sup className="text-[0.6em] top-[-0.5em]">®</sup>
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center perspective-1000">
      
      {/* --- INLINE STYLES FOR ANIMATIONS --- */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .animate-title-entry {
          animation: fadeInUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          opacity: 0;
        }

        .delay-200 { animation-delay: 0.2s; }
        .delay-500 { animation-delay: 0.5s; }

        .cursor-blink {
          display: inline-block;
          width: 2px;
          height: 1em;
          background-color: #22d3ee;
          margin-left: 2px;
          vertical-align: middle;
          animation: blink 1s infinite;
        }
        
        .glow-text {
          text-shadow: 0 0 10px rgba(34, 211, 238, 0.5);
        }
      `}</style>

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

        <div className={`absolute inset-0 transition-opacity duration-1000 ${darkMode ? 'bg-slate-900/70' : 'bg-blue-900/50'}`}></div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        
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

          {/* === LEFT COLUMN: Text Content === */}
          <div 
            className="space-y-8"
            style={{
              transform: `rotateY(${mousePosition.x * 5}deg) rotateX(${mousePosition.y * -5}deg)`,
              transition: 'transform 0.3s ease-out'
            }}
          >

            {/* Glowing Badge */}
            <div className="animate-title-entry inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-cyan-400/30 backdrop-blur-md shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              <Beaker className="text-cyan-300 mr-2 animate-pulse" size={18} />
              <span className="text-xs font-bold text-cyan-100 tracking-[0.2em] uppercase">Advanced R&D Platform</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] drop-shadow-2xl text-left animate-title-entry delay-200">
              THE FUTURE OF<br />
              <span className="text-white drop-shadow-lg">
                WATER IS HERE.
              </span>
            </h1>

            {/* Description - TYPING ANIMATION with BLUE MEGHDOOT */}
            <div className="min-h-[84px] animate-title-entry delay-500 relative pl-6">
              {/* Vertical Decorative Line */}
              <div className="absolute left-0 top-1 bottom-1 w-1 bg-cyan-400/80 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
              
              <p className="text-xl text-blue-100 font-medium max-w-lg leading-relaxed text-left drop-shadow-md">
                {renderTypedText()}
                <span className="cursor-blink"></span>
              </p>
            </div>

            {/* Interactive Buttons */}
            <div className="flex flex-wrap gap-5 pt-4 justify-start animate-title-entry delay-500">
              
              {/* Primary Button */}
              <button 
                onClick={scrollToResearch}
                className="group relative px-8 py-4 bg-white text-slate-900 rounded-xl font-bold text-lg overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Research <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>

              {/* Secondary Button */}
              <button 
                onClick={() => setShowVideo(true)}
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
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/10 max-w-lg text-left animate-title-entry delay-500">
              {[
                { val: "2000+", label: "Installations" },
                { val: "15+", label: "Global Patents" },
                { val: "100%", label: "Sustainable" }
              ].map((stat, i) => (
                <div key={i} className="group">
                  <div className="text-3xl font-black text-white group-hover:text-cyan-300 transition-colors duration-300">{stat.val}</div>
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* === RIGHT COLUMN: DYNAMIC VIDEO PLAYER === */}
          <div className="relative h-full min-h-[400px] flex items-center justify-center lg:justify-end perspective-1000">
            
            {showVideo && (
              <div 
                className="relative w-full max-w-xl bg-black/80 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl animate-in slide-in-from-right-10 fade-in duration-500 ring-1 ring-white/20"
                style={{
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(6, 182, 212, 0.1)'
                }}
              >
                <div className="absolute top-0 left-0 right-0 p-4 z-20 flex justify-between items-start bg-gradient-to-b from-black/80 to-transparent">
                  <div className="flex items-center gap-2">
                    <span className="flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                    <span className="text-xs font-bold text-white uppercase tracking-widest font-mono">Live Feed</span>
                  </div>
                  <button 
                    onClick={() => setShowVideo(false)}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-all"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="aspect-video w-full bg-slate-900 relative group">
                  <video 
                    controls 
                    autoPlay 
                    className="w-full h-full object-cover"
                  >
                    <source src="/WhatsApp Video 2025-12-03 at 3.25.01 PM.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="p-6 bg-slate-900/90 border-t border-white/5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-bold text-lg">MEGHDOOT Gen-4</h3>
                      <p className="text-slate-400 text-sm">Atmospheric Water Generator Demo</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}