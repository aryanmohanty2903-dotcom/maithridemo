import { 
  Award, Trophy, Star, Medal, Calendar, ExternalLink, 
  ChevronLeft, ChevronRight, Crown, Sparkles, ScrollText 
} from 'lucide-react';
import { useRef } from 'react';

interface AwardsProps {
  darkMode: boolean;
}

export default function Awards({ darkMode }: AwardsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // --- FUNCTIONALITY: SLIDER SCROLL ---
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 400;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const awards = [
    {
      title: "Innovation Excellence",
      organization: "International Water Tech Summit",
      year: "2024",
      category: "Technology",
      description: "Recognition for breakthrough MEGHDOOT atmospheric water harvesting technology.",
      icon: Trophy,
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
      border: "hover:border-yellow-500",
      gradient: "from-yellow-400 to-amber-600"
    },
    {
      title: "Best Research Paper",
      organization: "Nature Water Journal",
      year: "2024",
      category: "Research",
      description: "Highest cited paper in advanced desiccant materials and thermodynamic efficiency.",
      icon: ScrollText,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "hover:border-blue-500",
      gradient: "from-blue-400 to-indigo-600"
    },
    {
      title: "Sustainability Leader",
      organization: "Global Env. Council",
      year: "2023",
      category: "Impact",
      description: "Leadership in developing climate-resilient water solutions for arid regions.",
      icon: GlobeIcon, // Defined below as custom wrapper or import
      color: "text-green-500",
      bg: "bg-green-500/10",
      border: "hover:border-green-500",
      gradient: "from-green-400 to-emerald-600"
    },
    {
      title: "Young Researcher",
      organization: "Intl Science Foundation",
      year: "2023",
      category: "Achievement",
      description: "Dr. Patel recognized for outstanding contributions to AWH material science.",
      icon: Medal,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      border: "hover:border-purple-500",
      gradient: "from-purple-400 to-pink-600"
    },
    {
      title: "Tech Transfer Award",
      organization: "National Innovation Council",
      year: "2022",
      category: "Commercialization",
      description: "Successful translation of laboratory research into real-world commercial applications.",
      icon: Award,
      color: "text-cyan-500",
      bg: "bg-cyan-500/10",
      border: "hover:border-cyan-500",
      gradient: "from-cyan-400 to-blue-600"
    }
  ];

  const recognitions = [
    { title: "Featured in Science Magazine", date: "March 2024", source: "Cover Story" },
    { title: "TED Talk: Water from Air", date: "Jan 2024", source: "2M+ Views" },
    { title: "UN Water Innovation Showcase", date: "Nov 2023", source: "UN HQ" },
    { title: "18 Patents Granted", date: "Oct 2023", source: "Intellectual Property" }
  ];

  return (
    <section className={`py-24 relative overflow-hidden ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
      
      {/* Background Decor (Confetti/Sparkles) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER: DOMINANT & BOLD --- */}
        <div className="text-center mb-20">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border ${darkMode ? 'bg-yellow-900/20 border-yellow-700/50 text-yellow-400' : 'bg-yellow-50 border-yellow-200 text-yellow-700'}`}>
            <Crown size={14} />
            Hall of Fame
          </div>
          <h2 className={`text-4xl md:text-6xl font-black ${darkMode ? 'text-white' : 'text-slate-900'} mb-6 tracking-tight`}>
            Awards & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 animate-gradient">Recognition</span>
          </h2>
          <p className={`text-xl ${darkMode ? 'text-slate-300' : 'text-slate-600'} max-w-2xl mx-auto`}>
            Our commitment to excellence has been recognized globally. Here are the milestones that define our journey.
          </p>
        </div>

        {/* --- STATS STRIP --- */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 rounded-2xl p-6 border ${darkMode ? 'bg-slate-800/40 border-slate-700' : 'bg-white border-gray-100 shadow-xl'}`}>
          {[
            { label: "Total Awards", val: "15", icon: Trophy, color: "text-yellow-500" },
            { label: "International", val: "08", icon: GlobeIcon, color: "text-blue-500" },
            { label: "Patents", val: "18", icon: ScrollText, color: "text-purple-500" },
            { label: "Years Excellence", val: "5+", icon: Star, color: "text-green-500" }
          ].map((stat, i) => (
            <div key={i} className="text-center border-r last:border-r-0 border-gray-200 dark:border-slate-700">
              <stat.icon className={`mx-auto mb-2 ${stat.color}`} size={24} />
              <div className={`text-3xl font-black ${darkMode ? 'text-white' : 'text-slate-900'}`}>{stat.val}</div>
              <div className={`text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* --- THE AWARD SLIDER --- */}
        <div className="relative mb-24 group/slider">
          <div className="flex justify-between items-end mb-8 px-2">
            <div>
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Major Achievements</h3>
            </div>
            <div className="flex gap-3">
              <button onClick={() => scroll('left')} className={`p-3 rounded-full border transition-all active:scale-95 ${darkMode ? 'border-slate-700 hover:bg-slate-800 text-white' : 'border-slate-200 hover:bg-white hover:shadow-lg text-slate-700'}`}>
                <ChevronLeft size={24} />
              </button>
              <button onClick={() => scroll('right')} className={`p-3 rounded-full border transition-all active:scale-95 ${darkMode ? 'border-slate-700 hover:bg-slate-800 text-white' : 'border-slate-200 hover:bg-white hover:shadow-lg text-slate-700'}`}>
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div ref={scrollRef} className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {awards.map((award, index) => (
              <div key={index} className={`relative min-w-[340px] md:min-w-[380px] snap-center rounded-[2rem] p-8 border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden group
                ${darkMode ? `bg-slate-800/40 border-slate-700 ${award.border}` : `bg-white border-slate-100 hover:border-yellow-200 shadow-lg`}`}>
                
                {/* Background Gradient Blob */}
                <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${award.gradient} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`}></div>

                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div className={`p-4 rounded-2xl ${award.bg} ${award.color}`}>
                    <award.icon size={32} />
                  </div>
                  <div className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b ${darkMode ? 'from-slate-600 to-slate-800' : 'from-slate-200 to-white'}`}>
                    {award.year}
                  </div>
                </div>

                <h4 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {award.title}
                </h4>
                <div className={`text-sm font-bold uppercase tracking-wide mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {award.organization}
                </div>
                
                <p className={`text-base leading-relaxed mb-8 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {award.description}
                </p>

                <div className={`pt-6 border-t flex items-center justify-between ${darkMode ? 'border-slate-700' : 'border-slate-100'}`}>
                  <span className={`px-3 py-1 rounded-lg text-xs font-bold border ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'}`}>
                    {award.category}
                  </span>
                  <button className={`text-sm font-bold flex items-center hover:underline ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    View <ExternalLink size={14} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- RECOGNITION TICKER (Dynamic List) --- */}
        <div className={`rounded-3xl p-8 border overflow-hidden relative ${darkMode ? 'bg-slate-800/30 border-slate-700' : 'bg-white border-gray-100 shadow-xl'}`}>
           <div className="flex flex-col md:flex-row items-center justify-between mb-8">
             <div className="flex items-center gap-3">
               <div className="p-2 bg-red-100 text-red-600 rounded-lg animate-pulse">
                 <Sparkles size={20} />
               </div>
               <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Recent Mentions</h3>
             </div>
             <a href="#" className={`text-sm font-bold hover:underline ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Media Center →</a>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {recognitions.map((rec, i) => (
               <div key={i} className={`flex items-center p-4 rounded-xl transition-all hover:scale-[1.02] cursor-pointer
                 ${darkMode ? 'bg-slate-700/50 hover:bg-slate-700' : 'bg-slate-50 hover:bg-white hover:shadow-md'}`}>
                 <div className={`p-3 rounded-lg mr-4 ${darkMode ? 'bg-slate-600' : 'bg-white shadow-sm'}`}>
                   <Calendar size={20} className={darkMode ? 'text-slate-300' : 'text-slate-600'} />
                 </div>
                 <div>
                   <h4 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-slate-900'}`}>{rec.title}</h4>
                   <div className="flex gap-3 text-xs mt-1">
                     <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>{rec.date}</span>
                     <span className={`font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>● {rec.source}</span>
                   </div>
                 </div>
               </div>
             ))}
           </div>
        </div>

      </div>
    </section>
  );
}

// Simple Globe Icon component since it wasn't in lucide imports directly in some versions
function GlobeIcon(props: any) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={props.size || 24} 
      height={props.size || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={props.className}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}