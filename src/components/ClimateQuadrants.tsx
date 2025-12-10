import { Thermometer, Snowflake, Sun, Cloud, Wind, Droplets, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

interface ClimateQuadrantsProps {
  darkMode: boolean;
}

export default function ClimateQuadrants({ darkMode }: ClimateQuadrantsProps) {
  const [selectedQuadrant, setSelectedQuadrant] = useState<any>(null);

  const climateQuadrants = [
    {
      id: 1,
      title: "HOT & HUMID",
      subtitle: "Water in Air & Land, Yet Stressed",
      icon: <Thermometer className="text-white" size={28} />,
      description: "Groundwater contamination, salinity, and overuse threaten water security despite abundant atmospheric moisture.",
      technology: "Standard MEGHDOOT AWH",
      process: [
        "Air is drawn through advanced filters",
        "Moisture-laden air passes over cold surfaces",
        "Condensed water collects in storage tank",
        "Water is filtered, remineralized and purified",
        "Ultra-pure drinking water ready for use"
      ],
      features: ["Direct condensation", "High efficiency", "Minimal energy consumption"],
      capacity: "5-5000 LPD",
      efficiency: "95%",
      // Dynamic Color Scheme: Orange/Red for Hot
      gradient: "from-orange-500 to-red-600",
      accentColor: "text-orange-400",
      image: "/hot&humid.png"
    },
    {
      id: 2,
      title: "HOT & DRY",
      subtitle: "High Sensible Heat Load & Low Humidity",
      icon: <Sun className="text-white" size={28} />,
      description: "Advanced AWH & Desiccant series engineered to harvest more, even when others give less or no water.",
      technology: "MEGHDOOT Advanced AWH & Desiccant Series",
      process: [
        "Precooling incoming air with cold exit air",
        "Novel flow path reduces sensible heat load",
        "Desiccant regeneration with solar air heater",
        "Ambient air cooled HX for condensation",
        "Continuous water harvesting in arid conditions"
      ],
      features: ["Precooling system", "Passive cross-flow HX", "Solar air heater", "Desiccant regeneration"],
      capacity: "5-2000 LPD",
      efficiency: "85%",
      // Dynamic Color Scheme: Yellow/Orange for Hot & Dry
      gradient: "from-yellow-500 to-orange-500",
      accentColor: "text-yellow-400",
      image: "/hot&dry.png"
    },
    {
      id: 3,
      title: "COLD & HUMID",
      subtitle: "Sub-Zero Dew Point Challenges",
      icon: <Cloud className="text-white" size={28} />,
      description: "Advanced desiccant series with external heating for extended operation in low sunshine conditions.",
      technology: "MEGHDOOT Advanced Desiccant Series with Heater",
      process: [
        "Extended operation in low sunshine hours",
        "Desiccant desorption with external heater",
        "Anti-freeze protection systems",
        "Ambient air cooled HX for condensation",
        "Continuous operation in sub-zero conditions"
      ],
      features: ["External heater", "Anti-freeze protection", "Continuous operation", "Air-cooled heat exchanger"],
      capacity: "5-1000 LPD",
      efficiency: "80%",
      // Dynamic Color Scheme: Blue/Cyan for Cold
      gradient: "from-blue-500 to-cyan-500",
      accentColor: "text-blue-400",
      image: "/cold&humid.png"
    },
    {
      id: 4,
      title: "COLD & DRY",
      subtitle: "Low Efficiency & Sub-Zero Conditions",
      icon: <Snowflake className="text-white" size={28} />,
      description: "Hybrid series combining VCR cycle with advanced desiccant technology for maximum efficiency.",
      technology: "MEGHDOOT Hybrid Series",
      process: [
        "VCR cycle supplies cooling & waste heat",
        "Advanced desiccant captures humidity at low RH",
        "Hybrid system ensures continuous operation",
        "Enhanced humidity capture even at low RH",
        "Efficient water harvesting in extreme conditions"
      ],
      features: ["VCR cooling & heating", "Advanced desiccant", "Hybrid efficiency", "Continuous harvesting"],
      capacity: "5-500 LPD",
      efficiency: "75%",
      // Dynamic Color Scheme: Cyan/Teal for Cold & Dry
      gradient: "from-cyan-500 to-teal-500",
      accentColor: "text-cyan-400",
      image: "/cold&dry.png"
    }
  ];

  return (
    <section id="climate-quadrants" className={`pt-4 pb-20 ${darkMode ? 'bg-slate-950' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            CLIMATE <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">QUADRANTS</span>
          </h2>
          <p className={`text-lg ${darkMode ? 'text-blue-100' : 'text-gray-600'}`}>
            Select a climate zone to view technical details.
          </p>
        </div>

        {/* --- MAIN SPLIT LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:h-[700px]">
          
          {/* LEFT COLUMN: Buttons + Explore Section */}
          <div className="lg:col-span-4 flex flex-col h-full">
            
            {/* 1. The 4 Small Boxes Grid */}
            <div className="grid grid-cols-1 gap-4 mb-6">
              {climateQuadrants.map((quadrant) => (
                <div
                  key={quadrant.id}
                  onClick={() => setSelectedQuadrant(quadrant)}
                  className={`
                    cursor-pointer p-6 rounded-2xl border transition-all duration-500 flex items-center gap-5 relative overflow-hidden group
                    ${selectedQuadrant?.id === quadrant.id 
                      ? 'border-transparent shadow-xl translate-x-2' 
                      : darkMode ? 'bg-slate-900 border-slate-800 hover:border-slate-600' : 'bg-white border-gray-200 hover:border-blue-300 shadow-sm'
                    }
                  `}
                >
                  {/* Active Background Animation */}
                  {selectedQuadrant?.id === quadrant.id && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${quadrant.gradient} opacity-20 animate-pulse`}></div>
                  )}
                  {/* Hover Background Animation */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${quadrant.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                  <div className={`p-3 rounded-xl shadow-md z-10 bg-gradient-to-br ${quadrant.gradient}`}>
                    {quadrant.icon}
                  </div>
                  <h3 className={`font-bold text-lg z-10 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {quadrant.title}
                  </h3>
                  
                  {/* Animated Arrow */}
                  <ArrowRight 
                    className={`ml-auto z-10 transition-transform duration-300 ${selectedQuadrant?.id === quadrant.id ? 'text-white translate-x-0' : 'text-gray-400 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`} 
                    size={20} 
                  />
                </div>
              ))}
            </div>

            {/* 2. Explore Section */}
            <div className={`mt-auto p-8 text-center rounded-3xl border relative overflow-hidden ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-200'} shadow-lg group`}>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-500/5 dark:to-blue-900/20 opacity-50"></div>
              <div className="relative z-10">
                <div className="flex justify-center gap-3 mb-4">
                  <Wind className="text-blue-500" size={28} />
                  <Droplets className="text-cyan-500" size={28} />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  All-Climate Technology
                </h3>
                <p className={`text-sm mb-6 ${darkMode ? 'text-blue-100' : 'text-gray-600'}`}>
                  Reliable water production from tropical humidity to arctic dryness.
                </p>
                <a
                  href="https://www.maithriaqua.com/meghdoot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white py-3.5 rounded-xl font-bold transition-all hover:scale-[1.02] shadow-lg hover:shadow-blue-500/25"
                >
                  Explore Climate Solutions
                </a>
              </div>
            </div>

          </div>


          {/* RIGHT COLUMN: Display Area */}
          <div className={`lg:col-span-8 rounded-[2rem] overflow-hidden border shadow-2xl relative transition-all duration-500 h-full flex flex-col ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-200'}`}>
            
            {/* --- STATE 1: DEFAULT IMAGE --- */}
            {!selectedQuadrant ? (
              <div className="h-full relative group flex flex-col justify-center items-center">
                <img 
                  src="/image_5653fb.jpg" 
                  alt="Default View" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>
                <div className="relative z-10 text-center p-8 max-w-2xl animate-in zoom-in duration-700">
                  <h3 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-2xl tracking-tight">
                    Water from Air.<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">Anywhere.</span>
                  </h3>
                  <p className="text-xl text-blue-100 font-medium drop-shadow-md">
                    Click on a climate quadrant to see how MEGHDOOT adapts to different environmental conditions.
                  </p>
                </div>
              </div>
            ) : (
              
              /* --- STATE 2: DETAILED VIEW --- */
              <div className="h-full flex flex-col animate-in fade-in duration-500 bg-slate-900/50 backdrop-blur-xl">
                
                {/* Header Image Banner with Dynamic Color Overlay */}
                <div className="relative h-72 shrink-0 overflow-hidden">
                  <img 
                    src={selectedQuadrant.image} 
                    alt={selectedQuadrant.title} 
                    className="w-full h-full object-cover scale-105"
                  />
                  {/* Dynamic Gradient Overlay based on Quadrant Type */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${selectedQuadrant.gradient} opacity-80 mix-blend-multiply`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 p-8 z-10 w-full">
                    <div className="flex items-center gap-4 mb-3">
                       <span className={`px-4 py-1.5 bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg`}>
                         Selected Zone
                       </span>
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <h2 className="text-5xl font-extrabold text-white tracking-tight mb-2">{selectedQuadrant.title}</h2>
                        <p className="text-lg text-blue-100 font-medium max-w-xl">{selectedQuadrant.subtitle}</p>
                      </div>
                      {/* Big Icon Watermark */}
                      <div className="text-white/20 transform translate-y-4">
                        {selectedQuadrant.icon}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Area - Scrollable */}
                <div className={`flex-1 overflow-y-auto p-8 ${darkMode ? 'bg-slate-950' : 'bg-white'}`}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    
                    {/* Left: Technology */}
                    <div className="space-y-8">
                      <div>
                        <h4 className={`text-sm font-bold uppercase tracking-widest ${selectedQuadrant.accentColor} mb-3`}>
                          Technology
                        </h4>
                        <p className={`text-2xl font-bold leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {selectedQuadrant.technology}
                        </p>
                        <p className={`text-base mt-4 leading-relaxed ${darkMode ? 'text-blue-100' : 'text-gray-700'}`}>
                          {selectedQuadrant.description}
                        </p>
                      </div>

                      {/* Specs Box with Dynamic Border */}
                      <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-gray-50 border-gray-200'} relative overflow-hidden`}>
                        {/* Subtle colored accent line on left */}
                        <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${selectedQuadrant.gradient}`}></div>
                        
                        <div className="flex justify-between items-center mb-3">
                          <span className={`text-xs font-bold uppercase ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Efficiency</span>
                          <span className={`text-xl font-bold ${selectedQuadrant.accentColor}`}>{selectedQuadrant.efficiency}</span>
                        </div>
                        <div className={`w-full ${darkMode ? 'bg-slate-800' : 'bg-gray-200'} rounded-full h-2.5 mb-6`}>
                          <div className={`h-2.5 rounded-full bg-gradient-to-r ${selectedQuadrant.gradient}`} style={{ width: selectedQuadrant.efficiency }}></div>
                        </div>
                        <div className="flex justify-between items-center pt-2 border-t border-dashed border-gray-700/50">
                          <span className={`text-xs font-bold uppercase ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Capacity</span>
                          <span className={`text-base font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{selectedQuadrant.capacity}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Process */}
                    <div className="space-y-8">
                       <div>
                        <h4 className={`text-sm font-bold uppercase tracking-widest ${selectedQuadrant.accentColor} mb-4`}>
                          Process Flow
                        </h4>
                        <ul className="space-y-4">
                          {selectedQuadrant.process.slice(0, 5).map((step: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-4 group">
                              <div className={`mt-1 p-1 rounded-full bg-gradient-to-br ${selectedQuadrant.gradient} shadow-sm`}>
                                <CheckCircle2 size={14} className="text-white" />
                              </div>
                              <span className={`text-base ${darkMode ? 'text-blue-50 group-hover:text-white' : 'text-gray-700 group-hover:text-black'} transition-colors`}>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
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