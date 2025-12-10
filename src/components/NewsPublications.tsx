import { BookOpen, Calendar, ExternalLink, Download, Award, TrendingUp } from 'lucide-react';

interface NewsPublicationsProps {
  darkMode: boolean;
}

export default function NewsPublications({ darkMode }: NewsPublicationsProps) {
  const publications = [
    {
      title: "Advanced MOF-Based Desiccants for Atmospheric Water Harvesting",
      authors: "Dr. Smith, J., Dr. Patel, R., Dr. Johnson, M.",
      journal: "Nature Water Technology",
      year: "2024",
      impact: "9.2",
      citations: 45,
      type: "Research Article",
      abstract: "Novel metal-organic framework materials demonstrate 40% improved water extraction efficiency...",
      doi: "10.1038/nwt.2024.001"
    },
    {
      title: "Climate-Adaptive Atmospheric Water Generation Systems",
      authors: "Dr. Chen, L., Dr. Kumar, S., Dr. Williams, A.",
      journal: "Environmental Science & Technology",
      year: "2024",
      impact: "8.8",
      citations: 32,
      type: "Research Article",
      abstract: "Machine learning algorithms optimize AWH performance across diverse climate conditions...",
      doi: "10.1021/est.2024.002"
    },
    {
      title: "Solar-Powered Water Harvesting: A Comprehensive Review",
      authors: "Dr. Brown, K., Dr. Davis, P., Dr. Wilson, T.",
      journal: "Renewable Energy Reviews",
      year: "2023",
      impact: "7.5",
      citations: 78,
      type: "Review Article",
      abstract: "Comprehensive analysis of renewable energy integration in atmospheric water harvesting...",
      doi: "10.1016/rer.2023.003"
    }
  ];

  const news = [
    {
      title: "Maithri Aquatech Receives $2M NSF Grant for Arctic AWH Research",
      date: "March 15, 2024",
      category: "Funding",
      summary: "Major funding awarded for developing specialized atmospheric water harvesting systems for extreme cold environments.",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Breakthrough in Desiccant Materials Published in Nature",
      date: "February 28, 2024",
      category: "Research",
      summary: "Our latest research on MOF-based desiccants shows 40% improvement in water extraction efficiency.",
      image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Partnership with MIT Water Innovation Lab Announced",
      date: "January 20, 2024",
      category: "Collaboration",
      summary: "New three-year collaboration focuses on advanced membrane technologies for water purification.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "MEGHDOOT System Wins Innovation Award at Water Tech Summit",
      date: "December 10, 2023",
      category: "Awards",
      summary: "Recognition for outstanding contribution to sustainable water technology solutions.",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section id="publications" className={`py-20 ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
            NEWS & 
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> PUBLICATIONS</span>
          </h2>
          <p className={`text-xl ${darkMode ? 'text-slate-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Latest research findings, publications, and news from our R&D initiatives
          </p>
        </div>

        {/* Publication Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className={`${darkMode ? 'bg-slate-700/50' : 'bg-blue-50'} rounded-xl p-6 border ${darkMode ? 'border-slate-600' : 'border-blue-200'} text-center`}>
            <BookOpen className="mx-auto text-blue-500 mb-4" size={32} />
            <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>42</div>
            <div className={`${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>Publications</div>
          </div>

          <div className={`${darkMode ? 'bg-slate-700/50' : 'bg-green-50'} rounded-xl p-6 border ${darkMode ? 'border-slate-600' : 'border-green-200'} text-center`}>
            <TrendingUp className="mx-auto text-green-500 mb-4" size={32} />
            <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>1,250</div>
            <div className={`${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>Citations</div>
          </div>

          <div className={`${darkMode ? 'bg-slate-700/50' : 'bg-purple-50'} rounded-xl p-6 border ${darkMode ? 'border-slate-600' : 'border-purple-200'} text-center`}>
            <Award className="mx-auto text-purple-500 mb-4" size={32} />
            <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>8.2</div>
            <div className={`${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>Avg Impact Factor</div>
          </div>

          <div className={`${darkMode ? 'bg-slate-700/50' : 'bg-cyan-50'} rounded-xl p-6 border ${darkMode ? 'border-slate-600' : 'border-cyan-200'} text-center`}>
            <Calendar className="mx-auto text-cyan-500 mb-4" size={32} />
            <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>12</div>
            <div className={`${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>This Year</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Recent Publications */}
          <div>
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-8`}>Recent Publications</h3>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div
                  key={index}
                  className={`${darkMode ? 'bg-slate-700/30' : 'bg-gray-50'} rounded-xl p-6 border ${darkMode ? 'border-slate-600' : 'border-gray-200'} hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                      pub.type === 'Research Article' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {pub.type}
                    </span>
                    <div className="flex space-x-2">
                      <button className={`p-2 rounded-lg ${darkMode ? 'hover:bg-slate-600' : 'hover:bg-gray-200'} transition-colors duration-300`}>
                        <ExternalLink className={darkMode ? 'text-slate-400' : 'text-gray-600'} size={16} />
                      </button>
                      <button className={`p-2 rounded-lg ${darkMode ? 'hover:bg-slate-600' : 'hover:bg-gray-200'} transition-colors duration-300`}>
                        <Download className={darkMode ? 'text-slate-400' : 'text-gray-600'} size={16} />
                      </button>
                    </div>
                  </div>

                  <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                    {pub.title}
                  </h4>
                  
                  <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-gray-600'} mb-2`}>
                    {pub.authors}
                  </p>
                  
                  <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-gray-700'} font-medium mb-3`}>
                    {pub.journal} ({pub.year})
                  </p>

                  <p className={`${darkMode ? 'text-slate-300' : 'text-gray-600'} text-sm mb-4`}>
                    {pub.abstract}
                  </p>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-slate-600">
                    <div className="flex space-x-4">
                      <div>
                        <span className={`text-xs ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>Impact Factor: </span>
                        <span className={`text-xs font-medium ${darkMode ? 'text-slate-300' : 'text-gray-700'}`}>{pub.impact}</span>
                      </div>
                      <div>
                        <span className={`text-xs ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>Citations: </span>
                        <span className={`text-xs font-medium ${darkMode ? 'text-slate-300' : 'text-gray-700'}`}>{pub.citations}</span>
                      </div>
                    </div>
                    <span className={`text-xs ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>
                      DOI: {pub.doi}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Latest News */}
          <div>
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-8`}>Latest News</h3>
            <div className="space-y-6">
              {news.map((item, index) => (
                <div
                  key={index}
                  className={`${darkMode ? 'bg-slate-700/30' : 'bg-gray-50'} rounded-xl overflow-hidden border ${darkMode ? 'border-slate-600' : 'border-gray-200'} hover:shadow-lg transition-all duration-300`}
                >
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                        item.category === 'Funding' ? 'bg-green-100 text-green-800' :
                        item.category === 'Research' ? 'bg-blue-100 text-blue-800' :
                        item.category === 'Collaboration' ? 'bg-purple-100 text-purple-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item.category}
                      </span>
                      <span className={`text-sm ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>
                        {item.date}
                      </span>
                    </div>

                    <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
                      {item.title}
                    </h4>
                    
                    <p className={`${darkMode ? 'text-slate-300' : 'text-gray-600'} leading-relaxed`}>
                      {item.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              View All Publications
            </button>
            <button className={`border-2 ${darkMode ? 'border-slate-400 hover:border-white text-slate-300 hover:text-white' : 'border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600'} px-8 py-4 rounded-xl font-semibold transition-all duration-300`}>
              Subscribe to Updates
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}