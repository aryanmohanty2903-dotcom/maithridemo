import { Award, Trophy, Star, Medal, Calendar, ExternalLink } from 'lucide-react';

interface AwardsProps {
  darkMode: boolean;
}

export default function Awards({ darkMode }: AwardsProps) {
  const awards = [
    {
      title: "Innovation Excellence Award",
      organization: "International Water Technology Summit",
      year: "2024",
      category: "Technology Innovation",
      description: "Recognition for breakthrough MEGHDOOT atmospheric water harvesting technology",
      impact: "Global recognition for sustainable water solutions",
      icon: <Trophy className="text-yellow-500" size={32} />,
      color: "yellow"
    },
    {
      title: "Best Research Paper Award",
      organization: "Nature Water Technology Journal",
      year: "2024",
      category: "Research Excellence",
      description: "Outstanding contribution to advanced desiccant materials research",
      impact: "Highest cited paper in atmospheric water harvesting field",
      icon: <Award className="text-blue-500" size={32} />,
      color: "blue"
    },
    {
      title: "Sustainability Leadership Award",
      organization: "Global Environmental Research Council",
      year: "2023",
      category: "Environmental Impact",
      description: "Leadership in developing climate-resilient water solutions",
      impact: "Recognized for addressing global water scarcity challenges",
      icon: <Star className="text-green-500" size={32} />,
      color: "green"
    },
    {
      title: "Young Researcher Excellence",
      organization: "International Science Foundation",
      year: "2023",
      category: "Individual Achievement",
      description: "Dr. Patel recognized for outstanding contributions to AWH research",
      impact: "Youngest recipient in the foundation's history",
      icon: <Medal className="text-purple-500" size={32} />,
      color: "purple"
    },
    {
      title: "Technology Transfer Award",
      organization: "National Innovation Council",
      year: "2022",
      category: "Commercialization",
      description: "Successful translation of research into commercial applications",
      impact: "Bridging gap between research and real-world solutions",
      icon: <Trophy className="text-cyan-500" size={32} />,
      color: "cyan"
    },
    {
      title: "Collaborative Research Excellence",
      organization: "MIT-Industry Partnership Program",
      year: "2022",
      category: "Partnership",
      description: "Outstanding collaboration in water technology research",
      impact: "Model for academic-industry partnerships",
      icon: <Award className="text-indigo-500" size={32} />,
      color: "indigo"
    }
  ];

  const recognitions = [
    {
      title: "Featured in Science Magazine",
      description: "Cover story on atmospheric water harvesting breakthroughs",
      date: "March 2024"
    },
    {
      title: "TED Talk: Water from Air",
      description: "Dr. Smith's presentation reaches 2M+ views",
      date: "January 2024"
    },
    {
      title: "UN Water Innovation Showcase",
      description: "MEGHDOOT technology presented at UN headquarters",
      date: "November 2023"
    },
    {
      title: "Patent Portfolio Recognition",
      description: "18 patents granted for AWH innovations",
      date: "October 2023"
    }
  ];

  return (
    <section className={`py-20 ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
            AWARDS & 
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent"> RECOGNITION</span>
          </h2>
          <p className={`text-xl ${darkMode ? 'text-slate-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Celebrating excellence in atmospheric water harvesting research and innovation
          </p>
        </div>

        {/* Awards Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className={`${darkMode ? 'bg-slate-800/50' : 'bg-white'} rounded-xl p-6 border ${darkMode ? 'border-slate-700' : 'border-gray-200'} text-center`}>
            <Trophy className="mx-auto text-yellow-500 mb-4" size={32} />
            <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>15</div>
            <div className={`${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>Total Awards</div>
          </div>

          <div className={`${darkMode ? 'bg-slate-800/50' : 'bg-white'} rounded-xl p-6 border ${darkMode ? 'border-slate-700' : 'border-gray-200'} text-center`}>
            <Award className="mx-auto text-blue-500 mb-4" size={32} />
            <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>8</div>
            <div className={`${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>International</div>
          </div>

          <div className={`${darkMode ? 'bg-slate-800/50' : 'bg-white'} rounded-xl p-6 border ${darkMode ? 'border-slate-700' : 'border-gray-200'} text-center`}>
            <Star className="mx-auto text-green-500 mb-4" size={32} />
            <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>5</div>
            <div className={`${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>This Year</div>
          </div>

          <div className={`${darkMode ? 'bg-slate-800/50' : 'bg-white'} rounded-xl p-6 border ${darkMode ? 'border-slate-700' : 'border-gray-200'} text-center`}>
            <Medal className="mx-auto text-purple-500 mb-4" size={32} />
            <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>12</div>
            <div className={`${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>Team Awards</div>
          </div>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {awards.map((award, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden ${darkMode ? 'bg-slate-800/50' : 'bg-white'} backdrop-blur-sm border ${darkMode ? 'border-slate-700 hover:border-slate-600' : 'border-gray-200 hover:border-gray-300'} rounded-2xl p-8 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${award.color}-500/5 to-${award.color}-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Icon and Year */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-4 ${darkMode ? 'bg-slate-700' : 'bg-gray-50'} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    {award.icon}
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold text-${award.color}-500`}>{award.year}</div>
                    <div className={`text-xs ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>{award.category}</div>
                  </div>
                </div>
                
                {/* Content */}
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
                  {award.title}
                </h3>
                
                <p className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-gray-700'} mb-3`}>
                  {award.organization}
                </p>
                
                <p className={`${darkMode ? 'text-slate-300' : 'text-gray-600'} text-sm leading-relaxed mb-4`}>
                  {award.description}
                </p>

                {/* Impact */}
                <div className={`pt-4 border-t ${darkMode ? 'border-slate-700' : 'border-gray-200'}`}>
                  <div className={`text-xs ${darkMode ? 'text-slate-400' : 'text-gray-500'} mb-1`}>Impact:</div>
                  <div className={`text-sm ${darkMode ? 'text-slate-300' : 'text-gray-700'}`}>{award.impact}</div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 border-2 border-transparent group-hover:border-${award.color}-500/30 rounded-2xl transition-all duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Recognition Timeline */}
        <div className={`${darkMode ? 'bg-slate-800/50' : 'bg-white'} rounded-2xl p-8 border ${darkMode ? 'border-slate-700' : 'border-gray-200'}`}>
          <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-8 text-center`}>Recent Recognition</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recognitions.map((recognition, index) => (
              <div
                key={index}
                className={`flex items-start space-x-4 p-4 rounded-xl ${darkMode ? 'bg-slate-700/30' : 'bg-gray-50'} hover:shadow-md transition-all duration-300`}
              >
                <div className="flex-shrink-0">
                  <Calendar className={darkMode ? 'text-slate-400' : 'text-gray-500'} size={20} />
                </div>
                <div className="flex-1">
                  <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-1`}>
                    {recognition.title}
                  </h4>
                  <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-gray-600'} mb-2`}>
                    {recognition.description}
                  </p>
                  <span className={`text-xs ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>
                    {recognition.date}
                  </span>
                </div>
                <button className={`p-2 rounded-lg ${darkMode ? 'hover:bg-slate-600' : 'hover:bg-gray-200'} transition-colors duration-300`}>
                  <ExternalLink className={darkMode ? 'text-slate-400' : 'text-gray-600'} size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className={`inline-flex items-center px-6 py-3 rounded-full ${darkMode ? 'bg-yellow-900/20' : 'bg-yellow-50'} border ${darkMode ? 'border-yellow-800' : 'border-yellow-200'} mb-6`}>
            <Trophy className="text-yellow-500 mr-2" size={20} />
            <span className={`font-medium ${darkMode ? 'text-yellow-300' : 'text-yellow-700'}`}>
              Excellence in Water Technology Research
            </span>
          </div>
          <p className={`text-lg ${darkMode ? 'text-slate-300' : 'text-gray-600'} mb-8 max-w-2xl mx-auto`}>
            Our commitment to innovation and excellence continues to be recognized by leading organizations worldwide.
          </p>
          <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            View All Awards
          </button>
        </div>
      </div>
    </section>
  );
}