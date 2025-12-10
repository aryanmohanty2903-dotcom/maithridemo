import { 
  Users, Building, Globe, Handshake, Award, 
  ArrowRight, ChevronLeft, ChevronRight, Microscope, GraduationCap 
} from 'lucide-react';
import { useRef } from 'react';

interface CollaborationProps {
  darkMode: boolean;
}

export default function Collaboration({ darkMode }: CollaborationProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 400; // Width of card + gap
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const partners = [
    {
      type: "Academic",
      name: "IIT Roorkee",
      description: "Joint research on advanced hydro-informatics and sustainable water solutions.",
      location: "Uttarakhand",
      projects: "3 Active",
      icon: GraduationCap,
      color: "text-blue-500"
    },
    {
      type: "Academic",
      name: "IIT Hyderabad",
      description: "AI/ML integration in atmospheric water generation efficiency patterns.",
      location: "Telangana",
      projects: "2 Active",
      icon: GraduationCap,
      color: "text-cyan-500"
    },
    {
      type: "Research",
      name: "CSIR - IICT",
      description: "Advanced membrane technology and novel material science applications.",
      location: "Hyderabad",
      projects: "5 Active",
      icon: Microscope,
      color: "text-purple-500"
    },
    {
      type: "Academic",
      name: "BITS Pilani",
      description: "IoT systems for smart water grid management and remote monitoring.",
      location: "Hyderabad Campus",
      projects: "2 Active",
      icon: GraduationCap,
      color: "text-yellow-500"
    },
    {
      type: "Academic",
      name: "SVNIT Surat",
      description: "Thermodynamic optimization of heat exchangers in AWH systems.",
      location: "Gujarat",
      projects: "4 Active",
      icon: GraduationCap,
      color: "text-orange-500"
    },
    {
      type: "Global",
      name: "MIT Water Lab",
      description: "Cross-border research on next-gen desalination and condensation.",
      location: "USA",
      projects: "Joint Venture",
      icon: Globe,
      color: "text-green-500"
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
    <section id="collaboration" className={`py-20 relative overflow-hidden ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
      
      {/* Background Decor */}
      <div className={`absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20`}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-black ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
            RESEARCH 
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"> COLLABORATION</span>
          </h2>
          <p className={`text-xl ${darkMode ? 'text-slate-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Partnering with India's premier institutes to redefine water sustainability.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { icon: Building, val: "25+", label: "Institutes" },
            { icon: Globe, val: "15", label: "Countries" },
            { icon: Users, val: "120+", label: "Researchers" },
            { icon: Award, val: "$5.2M", label: "Joint Funding" }
          ].map((stat, i) => (
            <div key={i} className={`${darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'} rounded-2xl p-6 border text-center transform hover:scale-105 transition-all duration-300 shadow-sm`}>
              <stat.icon className={`mx-auto mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} size={28} />
              <div className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{stat.val}</div>
              <div className={`text-sm ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* --- DYNAMIC SWIPER SLIDER --- */}
        <div className="relative mb-24">
          <div className="flex justify-between items-end mb-8 px-2">
            <div>
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Strategic Partners</h3>
              <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>Leading academic & research institutions</p>
            </div>
            
            {/* Slider Controls */}
            <div className="flex gap-2">
              <button 
                onClick={() => scroll('left')}
                className={`p-3 rounded-full transition-all ${darkMode ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-white hover:bg-gray-100 text-gray-700 shadow-md'}`}
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => scroll('right')}
                className={`p-3 rounded-full transition-all ${darkMode ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-white hover:bg-gray-100 text-gray-700 shadow-md'}`}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Scroll Container */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {partners.map((partner, index) => (
              <div 
                key={index}
                className={`min-w-[300px] md:min-w-[380px] snap-center rounded-2xl p-6 border transition-all duration-300 hover:shadow-xl group
                  ${darkMode 
                    ? 'bg-slate-800/40 border-slate-700 hover:border-blue-500/50 hover:bg-slate-800/80' 
                    : 'bg-white border-gray-200 hover:border-blue-300'}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-xl ${darkMode ? 'bg-slate-700' : 'bg-blue-50'} ${partner.color}`}>
                    <partner.icon size={24} />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${darkMode ? 'border-slate-600 bg-slate-800 text-slate-300' : 'border-gray-200 bg-gray-50 text-gray-600'}`}>
                    {partner.type}
                  </span>
                </div>
                
                <h4 className={`text-xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'} group-hover:text-blue-500 transition-colors`}>
                  {partner.name}
                </h4>
                <div className={`text-xs font-medium mb-4 ${darkMode ? 'text-slate-400' : 'text-gray-500'} uppercase tracking-wide`}>
                  {partner.location}
                </div>
                
                <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>
                  {partner.description}
                </p>

                <div className={`pt-4 border-t flex items-center justify-between ${darkMode ? 'border-slate-700' : 'border-gray-100'}`}>
                  <span className={`text-xs font-semibold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                    ● {partner.projects}
                  </span>
                  <ArrowRight size={16} className={`transform group-hover:translate-x-1 transition-transform ${darkMode ? 'text-slate-400' : 'text-gray-400'}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Opportunities Grid */}
        <div className="mb-16">
          <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-8 text-center`}>Open Opportunities</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {opportunities.map((opp, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
                  ${darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'}`}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br opacity-10 rounded-bl-full -mr-4 -mt-4
                  ${index === 0 ? 'from-blue-500 to-purple-500' : index === 1 ? 'from-green-500 to-cyan-500' : 'from-orange-500 to-red-500'}`}>
                </div>

                <span className={`inline-block px-3 py-1 rounded-md text-xs font-bold mb-4
                  ${darkMode ? 'bg-slate-700 text-slate-300' : 'bg-gray-100 text-gray-600'}`}>
                  {opp.type}
                </span>

                <h4 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{opp.title}</h4>
                <p className={`text-sm mb-4 ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>{opp.description}</p>
                
                <div className="space-y-3 mb-6">
                  {opp.requirements.slice(0, 2).map((req, i) => (
                    <div key={i} className={`flex items-center text-xs ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                      {req}
                    </div>
                  ))}
                </div>

                <button className={`w-full py-2.5 rounded-lg text-sm font-semibold border transition-colors
                  ${darkMode 
                    ? 'border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white' 
                    : 'border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-blue-600'}`}>
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className={`relative overflow-hidden rounded-3xl p-8 md:p-12 text-center border
          ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-blue-600 border-blue-500'}`}>
          
          <div className="relative z-10">
            <Handshake className="mx-auto text-white/90 mb-6" size={48} />
            <h3 className="text-3xl font-bold text-white mb-4">
              Collaborate with Maithri Aquatech
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              We are actively seeking research partners to advance the frontiers of Atmospheric Water Generation.
            </p>
            <button className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3.5 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Contact Collaboration Team
            </button>
          </div>

          {/* Decor Circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

      </div>
    </section>
  );
}