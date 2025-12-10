import { Target, Eye, Award, Beaker, Globe, Lightbulb } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Beaker className="text-blue-400" size={24} />,
      title: "Research Excellence",
      description: "Cutting-edge R&D driving breakthrough innovations"
    },
    {
      icon: <Globe className="text-green-400" size={24} />,
      title: "Global Impact",
      description: "Solutions addressing worldwide water challenges"
    },
    {
      icon: <Lightbulb className="text-yellow-400" size={24} />,
      title: "Innovation Leadership",
      description: "Pioneering atmospheric water harvesting technology"
    },
    {
      icon: <Award className="text-purple-400" size={24} />,
      title: "Quality Assurance",
      description: "Ultra-pure water meeting highest industry standards"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            MAITHRI 
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">R&D</span>
          </h2>
          <p className="text-2xl text-slate-300 font-light max-w-4xl mx-auto leading-relaxed">
            Where Research Meets The Sky To Create Water
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          
          {/* Left Column - Mission & Vision */}
          <div className="space-y-8">
            
            {/* Mission */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-slate-600 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-600 rounded-lg mr-4">
                  <Target className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">
                To transform air into a universal source of water, ensuring life thrives everywhere through 
                innovative atmospheric water harvesting technology that addresses global water scarcity.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-slate-600 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-cyan-600 rounded-lg mr-4">
                  <Eye className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">
                To become the global leader in atmospheric water harvesting, creating climate-resilient, 
                decentralized water solutions that enable sustainable development worldwide.
              </p>
            </div>
          </div>

          {/* Right Column - Technology Focus */}
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 relative overflow-hidden">
              
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">MEGHDOOT Technology</h3>
                
                <div className="space-y-6">
                  {[
                    { label: "Purity Level", value: "Ultra Pure", percentage: 98 },
                    { label: "Energy Efficiency", value: "Optimized", percentage: 94 },
                    { label: "Climate Adaptability", value: "All Conditions", percentage: 100 },
                    { label: "Scalability", value: "5-5000 LPD", percentage: 96 }
                  ].map((metric, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300 font-medium">{metric.label}</span>
                        <span className="text-white font-semibold">{metric.value}</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000"
                          style={{ width: `${metric.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="mb-4 p-3 bg-slate-700 rounded-lg w-fit group-hover:bg-slate-600 transition-colors duration-300">
                  {value.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-3">{value.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Research Focus Areas */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-8">Research Focus Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Advanced Materials",
                description: "Developing next-generation desiccants and filtration systems",
                color: "from-blue-500 to-blue-700"
              },
              {
                title: "Energy Optimization", 
                description: "Maximizing efficiency while minimizing energy consumption",
                color: "from-cyan-500 to-cyan-700"
              },
              {
                title: "Climate Adaptation",
                description: "Creating solutions for extreme environmental conditions",
                color: "from-teal-500 to-teal-700"
              }
            ].map((area, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-slate-600 transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-white mb-4">{area.title}</h4>
                  <p className="text-slate-300 leading-relaxed">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}