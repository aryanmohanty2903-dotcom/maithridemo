import { Building2, Droplets, Factory, Heart, Cpu, Beaker, Leaf, Snowflake, Zap, Users, Wind, Database } from 'lucide-react';

interface ApplicationsProps {
  darkMode: boolean;
}

export default function Applications({ darkMode }: ApplicationsProps) {
  const emergingApplications = [
    {
      icon: <Users className="text-blue-500" size={24} />,
      title: "Water For Communities",
      description: "Decentralized water solutions for remote communities and disaster relief",
      category: "Social Impact"
    },
    {
      icon: <Snowflake className="text-cyan-500" size={24} />,
      title: "Fresh Air Cooling & Cold Storage", 
      description: "Dual-purpose systems providing water generation and cooling solutions",
      category: "Energy Efficiency"
    },
    {
      icon: <Database className="text-indigo-500" size={24} />,
      title: "Data Centre Cooling",
      description: "Energy-efficient cooling with simultaneous water generation for tech facilities",
      category: "Technology"
    },
    {
      icon: <Droplets className="text-blue-600" size={24} />,
      title: "Water Reclamation",
      description: "Recovery from cooling tower plumes and industrial waste streams",
      category: "Industrial"
    },
    {
      icon: <Leaf className="text-green-500" size={24} />,
      title: "Sustainable Irrigation",
      description: "Agricultural water solutions in arid regions and drought-prone areas",
      category: "Agriculture"
    },
    {
      icon: <Zap className="text-yellow-500" size={24} />,
      title: "Green Hydrogen Production",
      description: "Ultra-pure water for hydrogen generation and renewable energy storage",
      category: "Energy"
    },
    {
      icon: <Factory className="text-gray-600" size={24} />,
      title: "Process Water For Industries",
      description: "Consistent quality water for manufacturing and industrial processes",
      category: "Industrial"
    },
    {
      icon: <Beaker className="text-purple-500" size={24} />,
      title: "Ultra-Pure Water For Pharma",
      description: "Pharmaceutical grade water production meeting stringent quality standards",
      category: "Healthcare"
    },
    {
      icon: <Cpu className="text-indigo-600" size={24} />,
      title: "Semiconductor Industry",
      description: "Ultra-pure water for chip manufacturing and electronics production",
      category: "Technology"
    },
    {
      icon: <Heart className="text-red-500" size={24} />,
      title: "Water For Dialysis",
      description: "Medical grade water for healthcare facilities and dialysis centers",
      category: "Healthcare"
    },
    {
      icon: <Droplets className="text-cyan-400" size={24} />,
      title: "Air to Water Bottling",
      description: "Commercial bottling operations with pure atmospheric water",
      category: "Commercial"
    },
    {
      icon: <Wind className="text-green-600" size={24} />,
      title: "Carbon Dioxide Capture",
      description: "Environmental applications combining water generation with CO2 utilization",
      category: "Environmental"
    }
  ];

  const categories = ["All", "Social Impact", "Technology", "Healthcare", "Industrial", "Energy", "Agriculture", "Commercial", "Environmental"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredApplications = activeCategory === "All" 
    ? emergingApplications 
    : emergingApplications.filter(app => app.category === activeCategory);

  return (
    <section id="applications" className={`py-20 ${darkMode ? 'bg-slate-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
            EMERGING APPLICATIONS OF 
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">MEGHDOOT® AWH</span>
          </h2>
          <div className={`text-6xl font-bold ${darkMode ? 'text-slate-700' : 'text-gray-300'} mb-4`}>WHAT'S NEXT?</div>
          <p className={`text-xl ${darkMode ? 'text-slate-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Driving innovation towards climate-resilient, decentralized, and sustainable water solutions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                  : darkMode
                  ? 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Central Visual */}
        <div className="relative mb-16">
          <div className="flex justify-center mb-12">
            <div className="relative">
              {/* Central Circle */}
              <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/30">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">MEGHDOOT</div>
                  <div className="text-lg font-semibold">AWH</div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -inset-8">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-4 h-4 bg-blue-400/60 rounded-full"
                    style={{
                      left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 8)}%`,
                      top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 8)}%`,
                      animationDelay: `${i * 0.2}s`,
                      animation: 'float 3s ease-in-out infinite'
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredApplications.map((app, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden ${darkMode ? 'bg-slate-700/30' : 'bg-white'} backdrop-blur-sm border ${darkMode ? 'border-slate-600 hover:border-slate-500' : 'border-gray-200 hover:border-gray-300'} rounded-xl p-6 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl`}
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                    app.category === 'Social Impact' ? 'bg-blue-100 text-blue-800' :
                    app.category === 'Technology' ? 'bg-purple-100 text-purple-800' :
                    app.category === 'Healthcare' ? 'bg-red-100 text-red-800' :
                    app.category === 'Industrial' ? 'bg-gray-100 text-gray-800' :
                    app.category === 'Energy' ? 'bg-yellow-100 text-yellow-800' :
                    app.category === 'Agriculture' ? 'bg-green-100 text-green-800' :
                    app.category === 'Commercial' ? 'bg-cyan-100 text-cyan-800' :
                    'bg-emerald-100 text-emerald-800'
                  }`}>
                    {app.category}
                  </span>
                </div>

                {/* Icon */}
                <div className={`mb-4 p-3 ${darkMode ? 'bg-slate-600' : 'bg-gray-50'} rounded-lg w-fit group-hover:scale-110 transition-transform duration-300`}>
                  {app.icon}
                </div>
                
                {/* Content */}
                <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3 group-hover:text-blue-600 transition-colors duration-300`}>
                  {app.title}
                </h3>
                <p className={`${darkMode ? 'text-slate-400' : 'text-gray-600'} text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300`}>
                  {app.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/30 rounded-xl transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Innovation Statement */}
        <div className={`text-center mt-16 p-8 ${darkMode ? 'bg-slate-700/50' : 'bg-white'} rounded-2xl border ${darkMode ? 'border-slate-600' : 'border-gray-200'}`}>
          <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Innovating Every Drop Towards a Water-Positive Future
          </h3>
          <p className={`${darkMode ? 'text-slate-300' : 'text-gray-600'} text-lg leading-relaxed max-w-4xl mx-auto mb-8`}>
            Our MEGHDOOT technology transforms atmospheric water harvesting from concept to reality, 
            addressing water scarcity across diverse industries and communities worldwide.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Explore Partnerships
            </button>
            <button className={`border-2 ${darkMode ? 'border-slate-400 hover:border-white text-slate-300 hover:text-white' : 'border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600'} px-6 py-3 rounded-lg font-semibold transition-all duration-300`}>
              Custom Solutions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}