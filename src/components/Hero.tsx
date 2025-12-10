import { Wind, Beaker, ArrowRight, Play, X } from 'lucide-react';
import { useState } from 'react';

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  // State to toggle the video card on the right side
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center">

      {/* --- 1. GLOBAL BACKGROUND VIDEO (Ocean Waves) --- */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/65562-515098354.mp4" type="video/mp4" />
        </video>

        {/* Overlays for readability */}
        <div className={`absolute inset-0 ${darkMode ? 'bg-slate-900/50' : 'bg-blue-900/40'} backdrop-blur-[1px]`}></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
      </div>

      {/* --- 2. MAIN CONTENT GRID --- */}
      {/* REDUCED PADDING TOP: Changed pt-40 to pt-24 to move content up */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* === LEFT COLUMN: Text Content === */}
          <div className="space-y-8">

            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-black/30 border border-white/20 backdrop-blur-md">
              <Beaker className="text-blue-400 mr-2" size={18} />
              <span className="text-sm font-bold text-blue-100 tracking-wide uppercase">Advanced R&D Platform</span>
            </div>

            {/* Heading - FIXED: Removed nested <h1> tags */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
              THE FUTURE OF<br />
              WATER <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 filter drop-shadow-md">
                IS HERE.
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-white/90 font-medium max-w-lg leading-relaxed drop-shadow-md">
              Maithri Aquatech R&D pioneers breakthrough atmospheric water harvesting technology with our revolutionary <strong>MEGHDOOT</strong> systems.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              {/* Explore Button */}
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-900/50 flex items-center gap-2">
                <span>Explore Research</span>
                <ArrowRight size={22} />
              </button>

              {/* Watch Demo Button */}
              <button 
                onClick={() => setShowVideo(true)}
                className="bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-teal-900/50 flex items-center gap-2"
              >
                <Play size={22} fill="currentColor" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/20 max-w-md">
              <div>
                <div className="text-3xl font-bold text-white drop-shadow-md">2000+</div>
                <div className="text-xs text-blue-100 font-semibold uppercase tracking-wider mt-1">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white drop-shadow-md">15+</div>
                <div className="text-xs text-blue-100 font-semibold uppercase tracking-wider mt-1">Patents</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white drop-shadow-md">Global</div>
                <div className="text-xs text-blue-100 font-semibold uppercase tracking-wider mt-1">Impact</div>
              </div>
            </div>
          </div>

          {/* === RIGHT COLUMN: Dynamic Video Card === */}
          <div className="relative h-full min-h-[400px] flex items-center justify-center lg:justify-end">
            
            {showVideo ? (
              // --- THE VIDEO CARD (Slides in) ---
              <div className="relative w-full max-w-lg bg-slate-900/60 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl animate-in slide-in-from-right-10 fade-in duration-500">
                
                {/* Close Button */}
                <button 
                  onClick={() => setShowVideo(false)}
                  className="absolute top-4 right-4 z-20 p-2 bg-black/40 hover:bg-red-500 text-white rounded-full transition-all duration-300"
                >
                  <X size={20} />
                </button>

                {/* Header inside Card */}
                <div className="p-4 border-b border-white/10 flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold text-white tracking-wider uppercase">Live Demonstration</span>
                </div>

                {/* The Video Player */}
                <div className="aspect-video w-full bg-black relative">
                  <video 
                    controls 
                    autoPlay 
                    className="w-full h-full object-cover"
                  >
                    <source src="/WhatsApp Video 2025-12-03 at 3.25.01 PM.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Footer inside Card */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-1">Hybrid Atmospheric Water Generator</h3>
                  <p className="text-sm text-blue-200">
                    See how MEGHDOOT transforms humidity into pure drinking water using advanced condensation technology.
                  </p>
                </div>
              </div>
            ) : (
              // --- EMPTY STATE ---
              <div className="hidden lg:flex items-center justify-center opacity-0">
                {/* Placeholder to keep layout balanced */}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}