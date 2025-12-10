import { Thermometer, Snowflake, Sun, Cloud, Wind, Droplets } from 'lucide-react';

interface TechnologyProps {
  darkMode: boolean;
}

export default function Technology({ darkMode }: TechnologyProps) {
  const productSeries = [
    { name: "Lite Series", capacity: "5-20 LPD", color: "from-blue-400 to-blue-600" },
    { name: "Classic Series", capacity: "40-60 LPD", color: "from-cyan-400 to-cyan-600" },
    { name: "Premium Series", capacity: "150-250 LPD", color: "from-teal-400 to-teal-600" },
    { name: "Magnum Series", capacity: "500-1000 LPD", color: "from-green-400 to-green-600" },
    { name: "Signature Series", capacity: "2000-5000 LPD", color: "from-emerald-400 to-emerald-600" }
  ];

  const climateConditions = [
    {
      title: "HOT & HUMID",
      subtitle: "Water in Air & Land, Yet Stressed",
      icon: <Thermometer className="text-orange-500" size={32} />,
      description: "Standard MEGHDOOT AWH systems excel in high humidity conditions with direct condensation technology.",
      features: ["Direct condensation", "High efficiency", "Minimal energy consumption"],
      bg: "from-orange-500/20 to-red-500/20",
      process: "Air is drawn through filters → Moisture-laden air passes over cold surfaces → Condensed water collects → Filtered and purified → Pure drinking water",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "HOT & DRY",
      subtitle: "High Sensible Heat Load & Low Humidity",
      icon: <Sun className="text-yellow-500" size={32} />,
      description: "Advanced AWH & Desiccant series engineered to harvest more, even when others give less or no water.",
      features: ["Precooling system", "Passive cross-flow HX", "Solar air heater", "Desiccant regeneration"],
      bg: "from-yellow-500/20 to-orange-500/20",
      process: "Advanced AWH: Precooling incoming air with cold exit air → Novel flow path reduces heat load → Improved relative humidity → Enhanced water extraction",
      image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "COLD & HUMID",
      subtitle: "Sub-Zero Dew Point Challenges",
      icon: <Cloud className="text-blue-500" size={32} />,
      description: "Advanced desiccant series with external heating for extended operation in low sunshine conditions.",
      features: ["External heater", "Anti-freeze protection", "Continuous operation", "Air-cooled heat exchanger"],
      bg: "from-blue-500/20 to-cyan-500/20",
      process: "Extended operation in low sunshine → Desiccant desorption with external heater → Ambient air cooled HX → Continuous water harvesting",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "COLD & DRY",
      subtitle: "Low Efficiency & Sub-Zero Conditions",
      icon: <Snowflake className="text-cyan-500" size={32} />,
      description: "Hybrid series combining VCR cycle with advanced desiccant technology for maximum efficiency.",
      features: ["VCR cooling & heating", "Advanced desiccant", "Hybrid efficiency", "Continuous harvesting"],
      bg: "from-cyan-500/20 to-blue-500/20",
      process: "VCR cycle supplies cooling & waste heat → Advanced desiccant captures humidity at low RH → Hybrid system ensures continuous operation",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section id="technology" className={`py-20 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
            MEGHDOOT 
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> TECHNOLOGY SERIES</span>
          </h2>
          <p className={`text-xl ${darkMode ? 'text-slate-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Engineered to harvest water from air across all climate conditions - from 5 LPD to 5000 LPD capacity
          </p>
        </div>

        {/* Product Series */}
        <div className="mb-20">
          <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} text-center mb-12`}>Product Range</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {productSeries.map((series, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden ${darkMode ? 'bg-slate-800' : 'bg-white'} border ${darkMode ? 'border-slate-700' : 'border-gray-200'} rounded-xl p-6 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 min-w-[200px]`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${series.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>{series.name}</h4>
                  <p className={`text-2xl font-bold bg-gradient-to-r ${series.color} bg-clip-text text-transparent`}>
                    {series.capacity}
                  </p>
                  <div className={`mt-4 h-1 ${darkMode ? 'bg-slate-700' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                    <div 
                      className={`h-full bg-gradient-to-r ${series.color} transition-all duration-1000 group-hover:w-full w-0`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Climate Conditions */}
        <div>
          <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} text-center mb-12`}>All-Climate Operation</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {climateConditions.map((condition, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden ${darkMode ? 'bg-slate-800/50' : 'bg-white'} backdrop-blur-sm border ${darkMode ? 'border-slate-700 hover:border-slate-600' : 'border-gray-200 hover:border-gray-300'} rounded-2xl transition-all duration-500 hover:shadow-xl`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${condition.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={condition.image} 
                    alt={condition.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className={`p-2 ${darkMode ? 'bg-slate-800/80' : 'bg-white/80'} rounded-lg backdrop-blur-sm`}>
                        {condition.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">{condition.title}</h4>
                        <p className="text-sm text-gray-200">{condition.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 p-6">
                  {/* Description */}
                  <p className={`${darkMode ? 'text-slate-300' : 'text-gray-600'} mb-6 leading-relaxed`}>{condition.description}</p>

                  {/* Process Flow */}
                  <div className="mb-6">
                    <h5 className={`text-sm font-semibold ${darkMode ? 'text-slate-300' : 'text-gray-700'} mb-2`}>Process Flow:</h5>
                    <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-gray-600'} leading-relaxed`}>{condition.process}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h5 className={`text-sm font-semibold ${darkMode ? 'text-slate-300' : 'text-gray-700'}`}>Key Features:</h5>
                    {condition.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className={`text-sm ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/30 rounded-2xl transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Innovation Statement */}
        <div className={`mt-16 text-center p-8 ${darkMode ? 'bg-slate-800/50' : 'bg-blue-50'} rounded-2xl border ${darkMode ? 'border-slate-700' : 'border-blue-200'}`}>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Wind className="text-blue-500" size={32} />
            <Droplets className="text-cyan-500" size={32} />
          </div>
          <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Innovating Every Drop Towards a Water-Positive Future
          </h3>
          <p className={`text-lg ${darkMode ? 'text-slate-300' : 'text-gray-600'} mb-8 max-w-4xl mx-auto`}>
            Driving innovation towards climate-resilient, decentralized, and sustainable water solutions across all environmental conditions.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Request Technical Specifications
          </button>
        </div>
      </div>
    </section>
  );
}