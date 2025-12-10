import { AlertTriangle, Droplets, Shield, Zap, Thermometer, Snowflake, Sun, Cloud } from 'lucide-react';

interface ProblemSolutionProps {
  darkMode: boolean;
}

export default function ProblemSolution({ darkMode }: ProblemSolutionProps) {
  const problems = [
    {
      icon: <AlertTriangle className="text-red-500" size={24} />,
      title: "Climate Change",
      description: "Intensifying droughts and salinity in freshwater reserves"
    },
    {
      icon: <Droplets className="text-orange-500" size={24} />,
      title: "Untreated Wastewater",
      description: "Over 80% of wastewater flows back untreated"
    },
    {
      icon: <Shield className="text-yellow-500" size={24} />,
      title: "Contamination",
      description: "Microplastics, PFAS, heavy metals, and harmful microbes"
    },
    {
      icon: <Zap className="text-purple-500" size={24} />,
      title: "Quality Issues",
      description: "Unreliable quality affected by seasonal pollution and industrial discharge"
    }
  ];

  const applications = [
    { title: "Domestic", desc: "Healthy, balanced daily use water", icon: "🏠" },
    { title: "Semiconductors", desc: "Low-conductivity, corrosion controlled", icon: "💾" },
    { title: "Pharmaceuticals", desc: "Ultra pure sterile water", icon: "🧪" },
    { title: "Food & Beverage", desc: "Mineral balanced flavor stable", icon: "🍽️" },
    { title: "Infused Water", desc: "Blended with essential minerals", icon: "🌿" },
    { title: "Hydration", desc: "Alkaline, hydrogenated & energy water", icon: "⚡" }
  ];

  return (
    <section className={`py-20 ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Problems Section */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
            THE WORLD IS RUNNING OUT OF 
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"> CLEAN WATER</span>
          </h2>
          <p className={`text-xl ${darkMode ? 'text-slate-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Global water challenges demand innovative solutions for sustainable access to pure water
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`${darkMode ? 'bg-slate-800/50' : 'bg-white'} backdrop-blur-sm border ${darkMode ? 'border-slate-700' : 'border-gray-200'} rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className="mb-4">{problem.icon}</div>
              <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>{problem.title}</h3>
              <p className={`${darkMode ? 'text-slate-400' : 'text-gray-600'} text-sm leading-relaxed`}>{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Solution Section */}
        <div className="relative">
          <div className={`absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-3xl`}></div>
          <div className={`relative ${darkMode ? 'bg-slate-800/50' : 'bg-white'} border ${darkMode ? 'border-slate-700' : 'border-gray-200'} rounded-3xl p-8 lg:p-12`}>
            
            <div className="text-center mb-12">
              <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
                PERPETUAL PERENNIAL 
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> PURE WATER FROM AIR</span>
              </h2>
              <p className={`text-xl ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>
                MEGHDOOT Technology - Purity + Innovation
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Process Visualization */}
              <div className="space-y-6">
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-8`}>How MEGHDOOT Works</h3>
                
                <div className="space-y-6">
                  {[
                    { step: "1", title: "Air Filtration", desc: "Air is drawn through advanced filters" },
                    { step: "2", title: "Moisture Extraction", desc: "Moisture-laden air passes over cold surfaces" },
                    { step: "3", title: "Water Collection", desc: "Condensed water collects in storage tank" },
                    { step: "4", title: "Purification", desc: "Water is filtered, remineralized and purified" },
                    { step: "5", title: "Pure Water Output", desc: "Ultra-pure drinking water ready for use" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {item.step}
                      </div>
                      <div>
                        <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.title}</h4>
                        <p className={`${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications Grid */}
              <div className="grid grid-cols-2 gap-4">
                {applications.map((app, index) => (
                  <div
                    key={index}
                    className={`${darkMode ? 'bg-slate-700/50' : 'bg-gray-50'} backdrop-blur-sm border ${darkMode ? 'border-slate-600' : 'border-gray-200'} rounded-xl p-4 hover:shadow-md transition-all duration-300 transform hover:scale-105`}
                  >
                    <div className="text-2xl mb-2">{app.icon}</div>
                    <h4 className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-1`}>{app.title}</h4>
                    <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>{app.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}