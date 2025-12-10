import React from 'react';
import { Microscope, Cpu, Leaf, Zap, Globe, Users, Wifi, Activity, Database, BarChart3 } from 'lucide-react';

// 1. Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// 2. Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// 3. Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

interface ResearchPillarsProps {
  darkMode: boolean;
}

export default function ResearchPillars({ darkMode }: ResearchPillarsProps) {
  const pillars = [
    {
      icon: <Microscope className="text-blue-500" size={32} />,
      title: "Advanced Materials",
      description: "Developing next-generation desiccants and membranes for enhanced water extraction.",
      projects: 12,
      publications: 8,
      color: "blue"
    },
    {
      icon: <Cpu className="text-purple-500" size={32} />,
      title: "Smart Systems & IoT",
      description: "Integrating AI, machine learning, and IoT for intelligent water harvesting systems.",
      projects: 8,
      publications: 5,
      color: "purple"
    },
    {
      icon: <Leaf className="text-green-500" size={32} />,
      title: "Sustainable Energy",
      description: "Renewable energy solutions and optimization for climate-resilient production.",
      projects: 10,
      publications: 6,
      color: "green"
    },
    {
      icon: <Zap className="text-yellow-500" size={32} />,
      title: "Process Optimization",
      description: "Advanced thermodynamics research for maximum efficiency across all climates.",
      projects: 15,
      publications: 12,
      color: "yellow"
    },
    {
      icon: <Globe className="text-cyan-500" size={32} />,
      title: "Climate Adaptation",
      description: "Developing solutions for extreme environmental conditions and resilience.",
      projects: 9,
      publications: 7,
      color: "cyan"
    },
    {
      icon: <Users className="text-indigo-500" size={32} />,
      title: "Social Impact",
      description: "Community-centered research for decentralized water solutions and accessibility.",
      projects: 6,
      publications: 4,
      color: "indigo"
    }
  ];

  return (
    <section id="research" className={`py-20 ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
            RESEARCH 
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> PILLARS</span>
          </h2>
          <p className={`text-xl ${darkMode ? 'text-slate-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Six core research areas driving innovation in atmospheric water harvesting technology
          </p>
        </div>

        {/* Split Layout: Slider (Left) & Image (Right) */}
        {/* 'items-stretch' ensures both sides are the same height */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16 items-stretch">
          
          {/* LEFT SIDE: Swiper Slider (Takes 2/3 width) */}
          <div className="lg:col-span-2 min-w-0">
            <Swiper
              spaceBetween={24}
              slidesPerView={1}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
              }}
              className="h-full pb-12"
            >
              {pillars.map((pillar, index) => (
                <SwiperSlide key={index} className="h-full"> 
                  <div
                    className={`h-[450px] group relative flex flex-col justify-between overflow-hidden ${darkMode ? 'bg-slate-800/50' : 'bg-white'} backdrop-blur-sm border ${darkMode ? 'border-slate-700 hover:border-slate-500' : 'border-gray-200 hover:border-blue-300'} rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 select-none`}
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-${pillar.color}-500/5 to-${pillar.color}-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className={`mb-6 p-4 ${darkMode ? 'bg-slate-700' : 'bg-gray-50'} rounded-xl w-fit group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm`}>
                        {pillar.icon}
                      </div>
                      
                      {/* Content */}
                      <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3 group-hover:text-${pillar.color}-500 transition-colors`}>
                        {pillar.title}
                      </h3>
                      <p className={`${darkMode ? 'text-slate-300' : 'text-gray-600'} leading-relaxed mb-6 line-clamp-3`}>
                        {pillar.description}
                      </p>
                    </div>

                    {/* Stats Footer */}
                    <div className="relative z-10 pt-6 border-t border-gray-100 dark:border-slate-700">
                      <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                          <span className={`text-2xl font-bold text-${pillar.color}-500`}>{pillar.projects}</span>
                          <span className={`text-xs uppercase tracking-wider ${darkMode ? 'text-slate-500' : 'text-gray-400'}`}>Active Projects</span>
                        </div>
                        <div className="w-px h-8 bg-gray-200 dark:bg-slate-700"></div>
                        <div className="flex flex-col text-right">
                          <span className={`text-2xl font-bold text-${pillar.color}-500`}>{pillar.publications}</span>
                          <span className={`text-xs uppercase tracking-wider ${darkMode ? 'text-slate-500' : 'text-gray-400'}`}>Publications</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* RIGHT SIDE: High-Tech Research Terminal */}
          <div className="lg:col-span-1 hidden lg:block h-full">
            <div className={`group relative h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl border ${darkMode ? 'border-slate-700' : 'border-gray-200'}`}>
              
              {/* Image */}
              <img 
                src="two-male-asian-arab-researcher-scientists-working-laboratory-conducting-study-biohazard-substance-with-scientific-equipment-microscope.jpg" 
                alt="Scientists in Lab" 
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              
              {/* Technical Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-blue-900/20 mix-blend-multiply"></div>
              
              {/* Animated Scanner Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent h-[200%] w-full -translate-y-full animate-[spin_4s_linear_infinite_reverse] opacity-30"></div>
              
              {/* HUD Elements (Heads Up Display) */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-20">
                
                {/* Top Bar */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1 rounded-lg border border-cyan-500/30">
                     <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">System Active</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wifi size={14} className="text-cyan-400" />
                    <span className="text-[10px] font-mono text-cyan-400">5G LINK</span>
                  </div>
                </div>

                {/* Center Crosshair Decoration */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
                  <div className="w-32 h-32 border border-cyan-400 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  </div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-cyan-400/50"></div>
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-0.5 bg-cyan-400/50"></div>
                </div>

                {/* Bottom Data Terminal */}
                <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-4 transform translate-y-2 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-2">
                    <Database size={16} className="text-cyan-400" />
                    <h3 className="text-white text-sm font-bold font-mono tracking-wide">REAL-TIME ANALYSIS</h3>
                  </div>
                  
                  {/* Fake Data Bars */}
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-[10px] text-gray-300 font-mono mb-1">
                        <span>MOF EFFICIENCY</span>
                        <span className="text-green-400">98.4%</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-cyan-500 to-green-500 w-[98%] animate-pulse"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-[10px] text-gray-300 font-mono mb-1">
                        <span>HUMIDITY CAPTURE</span>
                        <span className="text-blue-400">72%</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 w-[72%]"></div>
                      </div>
                    </div>

                     <div className="flex justify-between items-center pt-1">
                        <div className="flex gap-2">
                            <span className="px-1.5 py-0.5 bg-cyan-900/50 border border-cyan-800 text-[9px] text-cyan-300 rounded">TEMP: 24°C</span>
                            <span className="px-1.5 py-0.5 bg-cyan-900/50 border border-cyan-800 text-[9px] text-cyan-300 rounded">PRESS: 101kPa</span>
                        </div>
                        <Activity size={14} className="text-cyan-400 animate-pulse" />
                     </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Research Impact - Stats Grid */}
        <div className={`${darkMode ? 'bg-slate-800/50' : 'bg-white'} rounded-2xl p-10 border ${darkMode ? 'border-slate-700' : 'border-gray-200'} shadow-lg`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-200 dark:divide-slate-700/50">
            <div className="p-2">
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 mb-2">60+</div>
              <div className={`font-medium ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>Active Projects</div>
            </div>
            <div className="p-2">
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400 mb-2">42</div>
              <div className={`font-medium ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>Publications</div>
            </div>
            <div className="p-2">
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400 mb-2">18</div>
              <div className={`font-medium ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>Patents Filed</div>
            </div>
            <div className="p-2">
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-400 mb-2">35+</div>
              <div className={`font-medium ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>Collaborations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}