import { 
  Users, Building, Globe, Handshake, Award, 
  ArrowRight, ChevronLeft, ChevronRight, Microscope, GraduationCap, Mail 
} from 'lucide-react';
import { useRef } from 'react';

interface CollaborationProps {
  darkMode: boolean;
}

export default function Collaboration({ darkMode }: CollaborationProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // --- FUNCTIONALITY: SCROLL HANDLER ---
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

  // --- FUNCTIONALITY: NAVIGATION HANDLERS ---
  
  // UPDATED: Scrolls to the Contact section instead of opening mailto
  const handleContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApply = (position: string) => {
    window.location.href = `mailto:careers@maithriaquatech.com?subject=Application for ${position}`;
  };

  const partners = [
    {
      type: "Academic",
      name: "IIT Roorkee",
      description: "Joint research on advanced hydro-informatics and sustainable water solutions.",
      location: "Uttarakhand",
      projects: "3 Active",
      icon: GraduationCap,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "hover:border-blue-500"
    },
    {
      type: "Academic",
      name: "IIT Hyderabad",
      description: "AI/ML integration in atmospheric water generation efficiency patterns.",
      location: "Telangana",
      projects: "2 Active",
      icon: GraduationCap,
      color: "text-cyan-500",
      bg: "bg-cyan-500/10",
      border: "hover:border-cyan-500"
    },
    {
      type: "Research",
      name: "CSIR - IICT",
      description: "Advanced membrane technology and novel material science applications.",
      location: "Hyderabad",
      projects: "5 Active",
      icon: Microscope,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      border: "hover:border-purple-500"
    },
    {
      type: "Academic",
      name: "BITS Pilani",
      description: "IoT systems for smart water grid management and remote monitoring.",
      location: "Hyderabad Campus",
      projects: "2 Active",
      icon: GraduationCap,
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
      border: "hover:border-yellow-500"
    },
    {
      type: "Academic",
      name: "SVNIT Surat",
      description: "Thermodynamic optimization of heat exchangers in AWH systems.",
      location: "Gujarat",
      projects: "4 Active",
      icon: GraduationCap,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
      border: "hover:border-orange-500"
    },
    {
      type: "Global",
      name: "MIT Water Lab",
      description: "Cross-border research on next-gen desalination and condensation.",
      location: "USA",
      projects: "Joint Venture",
      icon: Globe,
      color: "text-green-500",
      bg: "bg-green-500/10",
      border: "hover:border-green-500"
    }
  ];

  const opportunities = [
    {
      title: "Research Fellowship",
      description: "Join our team for 6-12 month research fellowships in atmospheric water harvesting.",
      type: "Fellowship",
      deadline: "March 31, 2025",
      requirements: ["PhD / Masters", "Material Science", "Research proposal"]
    },
    {
      title: "Industry Partnership",
      description: "Collaborate on commercial applications and technology transfer opportunities.",
      type: "Partnership",
      deadline: "Ongoing",
      requirements: ["Established Company", "Distribution Network", "R&D Commitment"]
    },
    {
      title: "Student Exchange",
      description: "Graduate student exchange for collaborative research projects.",
      type: "Exchange",
      deadline: "June 15, 2025",
      requirements: ["Final Year Student", "University NOC", "Alignment with Roadmap"]
    }
  ];

  return (
    <section id="collaboration" className={`py-24 relative overflow-hidden ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className={`inline-block py-1 px-3 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border ${darkMode ? 'bg-blue-900/30 border-blue-800 text-blue-400' : 'bg-blue-50 border-blue-100 text-blue-600'}`}>
            Global Network
          </span>
          <h2 className={`text-4xl md:text-5xl font-black ${darkMode ? 'text-white' : 'text-slate-900'} mb-6 tracking-tight`}>
            Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Collaboration</span>
          </h2>
          <p className={`text-xl ${darkMode ? 'text-slate-300' : 'text-slate-600'} max-w-3xl mx-auto leading-relaxed`}>
            Partnering with India's premier institutes and global leaders to redefine water sustainability through technology.
          </p>
        </div>

        {/* Stats Grid - Floating Glass Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {[
            { icon: Building, val: "25+", label: "Partner Institutes" },
            { icon: Globe, val: "15", label: "Countries Reached" },
            { icon: Users, val: "120+", label: "Active Researchers" },
            { icon: Award, val: "$5.2M", label: "Joint Funding" }
          ].map((stat, i) => (
            <div key={i} className={`group relative rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border
              ${darkMode ? 'bg-slate-800/40 border-slate-700 backdrop-blur-sm hover:bg-slate-800/60' : 'bg-white border-gray-100 shadow-lg hover:shadow-xl'}`}>
              <div className={`inline-flex p-3 rounded-xl mb-4 transition-colors duration-300 ${darkMode ? 'bg-slate-700 group-hover:bg-blue-500/20' : 'bg-blue-50 group-hover:bg-blue-100'}`}>
                <stat.icon className={`w-8 h-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>
              <div className={`text-3xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{stat.val}</div>
              <div className={`text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* --- DYNAMIC PARTNER SLIDER --- */}
        <div className="relative mb-24 group/slider">
          <div className="flex justify-between items-end mb-8 px-2">
            <div>
              <h3 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Strategic Partners</h3>
              <p className={`mt-2 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Swipe to explore our academic network</p>
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

          {/* Cards Container */}
          <div ref={scrollRef} className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {partners.map((partner, index) => (
              <div key={index} className={`min-w-[320px] md:min-w-[400px] snap-center rounded-3xl p-8 border transition-all duration-300 hover:shadow-2xl relative overflow-hidden group
                ${darkMode ? `bg-slate-800/40 border-slate-700 ${partner.border}` : `bg-white border-slate-100 hover:border-blue-200 shadow-lg`}`}>
                
                {/* Glow Effect on Hover */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                <div className="flex justify-between items-start mb-6">
                  <div className={`p-4 rounded-2xl ${partner.bg} ${partner.color}`}>
                    <partner.icon size={28} />
                  </div>
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold border tracking-wide uppercase ${darkMode ? 'border-slate-600 bg-slate-900/50 text-slate-300' : 'border-slate-200 bg-slate-50 text-slate-600'}`}>
                    {partner.type}
                  </span>
                </div>
                
                <h4 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'} group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${partner.color === 'text-blue-500' ? 'from-blue-400 to-blue-600' : 'from-cyan-400 to-cyan-600'} transition-all`}>
                  {partner.name}
                </h4>
                <div className={`text-xs font-bold uppercase tracking-widest mb-4 opacity-60 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {partner.location}
                </div>
                
                <p className={`text-base leading-relaxed mb-8 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {partner.description}
                </p>

                <div className={`pt-6 border-t flex items-center justify-between ${darkMode ? 'border-slate-700' : 'border-slate-100'}`}>
                  <span className={`text-sm font-bold flex items-center ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
                    {partner.projects}
                  </span>
                  {/* Functional Learn More - Scrolls to Contact */}
                  <button onClick={handleContact} className={`text-sm font-bold flex items-center group-hover:translate-x-1 transition-transform ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Details <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- OPPORTUNITIES GRID --- */}
        <div className="mb-24">
          <h3 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-10 text-center`}>Collaboration Opportunities</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {opportunities.map((opp, index) => (
              <div key={index} className={`relative rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col
                ${darkMode ? 'bg-slate-800/30 border-slate-700 hover:border-blue-500/30' : 'bg-white border-slate-100 hover:border-blue-200 shadow-lg'}`}>
                
                <div className="mb-6">
                  <span className={`inline-block px-3 py-1 rounded-lg text-xs font-bold mb-4 ${darkMode ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-50 text-blue-700'}`}>
                    {opp.type}
                  </span>
                  <h4 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{opp.title}</h4>
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{opp.description}</p>
                </div>
                
                <div className="mt-auto space-y-4">
                  <div className="space-y-2">
                    {opp.requirements.slice(0, 2).map((req, i) => (
                      <div key={i} className={`flex items-center text-xs font-medium ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                        {req}
                      </div>
                    ))}
                  </div>

                  {/* FUNCTIONAL BUTTON */}
                  <button 
                    onClick={() => handleApply(opp.title)}
                    className={`w-full py-3 rounded-xl text-sm font-bold flex items-center justify-center space-x-2 transition-all
                    ${darkMode 
                      ? 'bg-slate-700 hover:bg-blue-600 text-white' 
                      : 'bg-slate-100 hover:bg-blue-600 text-slate-700 hover:text-white'}`}
                  >
                    <span>Apply Now</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- CTA SECTION (Functional) --- */}
        <div className={`relative overflow-hidden rounded-[2.5rem] p-10 md:p-16 text-center shadow-2xl
          ${darkMode ? 'bg-gradient-to-br from-blue-900 to-slate-900' : 'bg-gradient-to-br from-blue-600 to-cyan-600'}`}>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md mb-6 inline-flex">
              <Handshake className="text-white" size={40} />
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
              Ready to Innovate with Us?
            </h3>
            <p className="text-blue-50 text-lg mb-10 max-w-2xl leading-relaxed opacity-90">
              We are actively seeking research partners to advance the frontiers of Atmospheric Water Generation. Join the revolution today.
            </p>
            
            {/* FUNCTIONAL MAIN BUTTON */}
            <button 
              onClick={handleContact}
              className="bg-white text-blue-700 hover:bg-blue-50 px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center gap-2"
            >
              <Mail size={20} />
              Contact Research Team
            </button>
          </div>

          {/* Background Patterns */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
             <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white/30 rounded-full"></div>
             <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-white/20 rounded-full"></div>
          </div>
        </div>

      </div>
    </section>
  );
}