import { Users, Building, Globe, Handshake, Award, ArrowRight } from 'lucide-react';

interface CollaborationProps {
  darkMode: boolean;
}

export default function Collaboration({ darkMode }: CollaborationProps) {
  const partners = [
    {
      type: "Academic",
      name: "MIT Water Innovation Lab",
      description: "Joint research on advanced membrane technologies",
      duration: "2022-2025",
      projects: 3,
      status: "Active"
    },
    {
      type: "Industry",
      name: "Global Water Solutions Inc.",
      description: "Commercial deployment and field testing partnerships",
      duration: "2023-2024",
      projects: 2,
      status: "Active"
    },
    {
      type: "Government",
      name: "National Science Foundation",
      description: "Funding for climate adaptation research initiatives",
      duration: "2021-2024",
      projects: 5,
      status: "Active"
    },
    {
      type: "International",
      name: "European Water Research Alliance",
      description: "Cross-border research collaboration on AWH technology",
      duration: "2023-2026",
      projects: 4,
      status: "Active"
    }
  ];

  const opportunities = [
    {
      title: "Research Fellowship Program",
      description: "Join our team for 6-12 month research fellowships in atmospheric water harvesting",
      type: "Fellowship",
      deadline: "March 31, 2024",
      requirements: ["PhD in relevant field", "2+ years experience", "Research proposal"]
    },
    {
      title: "Industry Partnership",
      description: "Collaborate on commercial applications and technology transfer opportunities",
      type: "Partnership",
      deadline: "Ongoing",
      requirements: ["Established company", "Relevant expertise", "Commitment to R&D"]
    },
    {
      title: "Student Exchange Program",
      description: "Graduate student exchange for collaborative research projects",
      type: "Exchange",
      deadline: "June 15, 2024",
      requirements: ["Graduate student", "University partnership", "Research alignment"]
    }
  ];

  return (
    <section id="collaboration" className={`py-20 ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
            RESEARCH 
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> COLLABORATION</span>
          </h2>
          <p className={`text-xl ${darkMode ? 'text-slate-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Building partnerships to accelerate innovation in atmospheric water harvesting
          </p>
        </div>

        {/* Collaboration Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className={`${darkMode ? 'bg-slate-800/50' : 'bg-white'} rounded-xl p-6 border ${darkMode ? 'border-slate-700' : 'border-gray-200'} text-center`}>
            <Building className="mx-auto text-blue-500 mb-4" size={32} />
            <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>25+</div>
            <div className={`${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>Active Partners</div>
          </div>

          <div className={`${darkMode ? 'bg-slate-800/50' : 'bg-white'} rounded-xl p-6 border ${darkMode ? 'border-slate-700' : 'border-gray-200'} text-center`}>
            <Globe className="mx-auto text-green-500 mb-4" size={32} />
            <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>15</div>
            <div className={`${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>Countries</div>
          </div>

          <div className={`${darkMode ? 'bg-slate-800/50' : 'bg-white'} rounded-xl p-6 border ${darkMode ? 'border-slate-700' : 'border-gray-200'} text-center`}>
            <Users className="mx-auto text-purple-500 mb-4" size={32} />
            <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>120+</div>
            <div className={`${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>Researchers</div>
          </div>

          <div className={`${darkMode ? 'bg-slate-800/50' : 'bg-white'} rounded-xl p-6 border ${darkMode ? 'border-slate-700' : 'border-gray-200'} text-center`}>
            <Award className="mx-auto text-yellow-500 mb-4" size={32} />
            <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>$5.2M</div>
            <div className={`${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>Joint Funding</div>
          </div>
        </div>

        {/* Current Partners */}
        <div className="mb-16">
          <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-8 text-center`}>Current Partners</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className={`${darkMode ? 'bg-slate-800/50' : 'bg-white'} rounded-xl p-6 border ${darkMode ? 'border-slate-700 hover:border-slate-600' : 'border-gray-200 hover:border-gray-300'} transition-all duration-300 hover:shadow-lg`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                        partner.type === 'Academic' ? 'bg-blue-100 text-blue-800' :
                        partner.type === 'Industry' ? 'bg-green-100 text-green-800' :
                        partner.type === 'Government' ? 'bg-purple-100 text-purple-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {partner.type}
                      </span>
                      <span className="inline-flex px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {partner.status}
                      </span>
                    </div>
                    <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                      {partner.name}
                    </h4>
                    <p className={`${darkMode ? 'text-slate-300' : 'text-gray-600'} mb-4`}>
                      {partner.description}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-slate-700">
                  <div>
                    <span className={`text-sm ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>Duration: </span>
                    <span className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-gray-700'}`}>{partner.duration}</span>
                  </div>
                  <div>
                    <span className={`text-sm ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>Projects: </span>
                    <span className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-gray-700'}`}>{partner.projects}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Collaboration Opportunities */}
        <div>
          <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-8 text-center`}>Collaboration Opportunities</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {opportunities.map((opportunity, index) => (
              <div
                key={index}
                className={`${darkMode ? 'bg-slate-800/50' : 'bg-white'} rounded-xl p-6 border ${darkMode ? 'border-slate-700' : 'border-gray-200'} hover:shadow-lg transition-all duration-300`}
              >
                <div className="mb-4">
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                    opportunity.type === 'Fellowship' ? 'bg-blue-100 text-blue-800' :
                    opportunity.type === 'Partnership' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  } mb-3`}>
                    {opportunity.type}
                  </span>
                  <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                    {opportunity.title}
                  </h4>
                  <p className={`${darkMode ? 'text-slate-300' : 'text-gray-600'} mb-4`}>
                    {opportunity.description}
                  </p>
                </div>

                <div className="mb-4">
                  <div className={`text-sm ${darkMode ? 'text-slate-400' : 'text-gray-500'} mb-2`}>
                    Deadline: <span className={`font-medium ${darkMode ? 'text-slate-300' : 'text-gray-700'}`}>{opportunity.deadline}</span>
                  </div>
                  <div className={`text-sm ${darkMode ? 'text-slate-400' : 'text-gray-500'} mb-2`}>Requirements:</div>
                  <ul className="space-y-1">
                    {opportunity.requirements.map((req, idx) => (
                      <li key={idx} className={`text-sm ${darkMode ? 'text-slate-300' : 'text-gray-600'} flex items-center`}>
                        <div className="w-1 h-1 bg-blue-500 rounded-full mr-2"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Apply Now</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Contact for Collaboration */}
        <div className={`mt-16 ${darkMode ? 'bg-slate-800/50' : 'bg-blue-50'} rounded-2xl p-8 border ${darkMode ? 'border-slate-700' : 'border-blue-200'} text-center`}>
          <Handshake className={`mx-auto ${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-4`} size={48} />
          <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Interested in Collaborating?
          </h3>
          <p className={`${darkMode ? 'text-slate-300' : 'text-gray-600'} text-lg mb-6 max-w-2xl mx-auto`}>
            We're always looking for new partners to advance atmospheric water harvesting research. 
            Let's explore how we can work together.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Contact Collaboration Team
          </button>
        </div>
      </div>
    </section>
  );
}