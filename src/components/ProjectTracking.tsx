import React, { useState } from 'react';
import { Calendar, Users, Target, TrendingUp, Clock, CheckCircle, AlertCircle, Play, ChevronDown, ChevronUp } from 'lucide-react';

interface ProjectTrackingProps {
  darkMode: boolean;
}

export default function ProjectTracking({ darkMode }: ProjectTrackingProps) {
  // State to track if all projects should be shown
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: "AWH-2024-001",
      title: "Next-Gen Desiccant Materials",
      description: "Development of advanced MOF-based desiccants for enhanced water extraction",
      status: "In Progress",
      progress: 75,
      team: ["Dr. Smith", "Dr. Patel", "Dr. Johnson"],
      startDate: "Jan 2024",
      endDate: "Dec 2024",
      budget: "$250K",
      category: "Materials Research",
      priority: "high"
    },
    {
      id: "AWH-2024-002",
      title: "AI-Powered Climate Optimization",
      description: "Machine learning algorithms for climate-adaptive water harvesting",
      status: "Planning",
      progress: 25,
      team: ["Dr. Chen", "Dr. Kumar", "Dr. Williams"],
      startDate: "Mar 2024",
      endDate: "Feb 2025",
      budget: "$180K",
      category: "Smart Systems",
      priority: "medium"
    },
    {
      id: "AWH-2023-015",
      title: "Solar Integration Study",
      description: "Renewable energy integration for off-grid AWH systems",
      status: "Completed",
      progress: 100,
      team: ["Dr. Brown", "Dr. Davis", "Dr. Wilson"],
      startDate: "Jun 2023",
      endDate: "Jan 2024",
      budget: "$320K",
      category: "Energy Systems",
      priority: "high"
    },
    {
      id: "AWH-2024-003",
      title: "Arctic Climate Adaptation",
      description: "Specialized AWH systems for extreme cold environments",
      status: "In Progress",
      progress: 45,
      team: ["Dr. Anderson", "Dr. Taylor", "Dr. Moore"],
      startDate: "Feb 2024",
      endDate: "Nov 2024",
      budget: "$290K",
      category: "Climate Research",
      priority: "high"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'green';
      case 'In Progress': return 'blue';
      case 'Planning': return 'yellow';
      default: return 'gray';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed': return <CheckCircle size={16} />;
      case 'In Progress': return <Play size={16} />;
      case 'Planning': return <Clock size={16} />;
      default: return <AlertCircle size={16} />;
    }
  };

  // Logic to decide which projects to display
  const displayedProjects = showAll ? projects : projects.slice(0, 1);

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
            PROJECT
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> TRACKING</span>
          </h2>
          <p className={`text-xl ${darkMode ? 'text-slate-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Real-time monitoring and management of our research initiatives
          </p>
        </div>

        {/* Project Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className={`${darkMode ? 'bg-slate-700/50' : 'bg-blue-50'} rounded-xl p-6 border ${darkMode ? 'border-slate-600' : 'border-blue-200'}`}>
            <div className="flex items-center justify-between mb-4">
              <Target className="text-blue-500" size={24} />
              <span className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>24</span>
            </div>
            <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Active Projects</h3>
            <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>Currently in progress</p>
          </div>

          <div className={`${darkMode ? 'bg-slate-700/50' : 'bg-green-50'} rounded-xl p-6 border ${darkMode ? 'border-slate-600' : 'border-green-200'}`}>
            <div className="flex items-center justify-between mb-4">
              <CheckCircle className="text-green-500" size={24} />
              <span className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>18</span>
            </div>
            <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Completed</h3>
            <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>Successfully finished</p>
          </div>

          <div className={`${darkMode ? 'bg-slate-700/50' : 'bg-purple-50'} rounded-xl p-6 border ${darkMode ? 'border-slate-600' : 'border-purple-200'}`}>
            <div className="flex items-center justify-between mb-4">
              <Users className="text-purple-500" size={24} />
              <span className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>45</span>
            </div>
            <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Researchers</h3>
            <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>Active team members</p>
          </div>

          <div className={`${darkMode ? 'bg-slate-700/50' : 'bg-cyan-50'} rounded-xl p-6 border ${darkMode ? 'border-slate-600' : 'border-cyan-200'}`}>
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="text-cyan-500" size={24} />
              <span className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>$2.1M</span>
            </div>
            <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Total Budget</h3>
            <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>Active funding</p>
          </div>
        </div>

        {/* Project List */}
        <div className="space-y-6">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className={`${darkMode ? 'bg-slate-700/30' : 'bg-white'} rounded-xl p-6 border ${darkMode ? 'border-slate-600 hover:border-slate-500' : 'border-gray-200 hover:border-gray-300'} transition-all duration-300 hover:shadow-lg`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                {/* Project Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {project.title}
                        </h3>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-${getStatusColor(project.status)}-100 text-${getStatusColor(project.status)}-800`}>
                          {getStatusIcon(project.status)}
                          <span className="ml-1">{project.status}</span>
                        </span>
                      </div>
                      <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-gray-500'} mb-2`}>
                        ID: {project.id}
                      </p>
                      <p className={`${darkMode ? 'text-slate-300' : 'text-gray-600'} leading-relaxed`}>
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-gray-700'}`}>Progress</span>
                      <span className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-gray-700'}`}>{project.progress}%</span>
                    </div>
                    <div className={`w-full ${darkMode ? 'bg-slate-600' : 'bg-gray-200'} rounded-full h-2`}>
                      <div
                        className={`bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className={`text-sm font-semibold ${darkMode ? 'text-slate-300' : 'text-gray-700'} mb-2`}>Timeline</h4>
                      <div className="flex items-center space-x-2 mb-1">
                        <Calendar size={14} className={darkMode ? 'text-slate-400' : 'text-gray-500'} />
                        <span className={`text-sm ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                          {project.startDate} - {project.endDate}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h4 className={`text-sm font-semibold ${darkMode ? 'text-slate-300' : 'text-gray-700'} mb-2`}>Budget</h4>
                      <span className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-gray-900'}`}>
                        {project.budget}
                      </span>
                    </div>

                    <div>
                      <h4 className={`text-sm font-semibold ${darkMode ? 'text-slate-300' : 'text-gray-700'} mb-2`}>Category</h4>
                      <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-slate-600 text-slate-300' : 'bg-gray-100 text-gray-700'}`}>
                        {project.category}
                      </span>
                    </div>

                    <div>
                      <h4 className={`text-sm font-semibold ${darkMode ? 'text-slate-300' : 'text-gray-700'} mb-2`}>Team</h4>
                      <div className="flex -space-x-2">
                        {project.team.slice(0, 3).map((member, idx) => (
                          <div
                            key={idx}
                            className={`w-6 h-6 rounded-full ${darkMode ? 'bg-slate-600' : 'bg-gray-300'} border-2 ${darkMode ? 'border-slate-700' : 'border-white'} flex items-center justify-center text-xs font-medium ${darkMode ? 'text-slate-300' : 'text-gray-700'}`}
                            title={member}
                          >
                            {member.split(' ').map(n => n[0]).join('')}
                          </div>
                        ))}
                        {project.team.length > 3 && (
                          <div className={`w-6 h-6 rounded-full ${darkMode ? 'bg-slate-600' : 'bg-gray-300'} border-2 ${darkMode ? 'border-slate-700' : 'border-white'} flex items-center justify-center text-xs font-medium ${darkMode ? 'text-slate-300' : 'text-gray-700'}`}>
                            +{project.team.length - 3}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic View All / Show Less Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center justify-center mx-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span className="mr-2">
              {showAll ? 'Show Less' : 'View All Projects'}
            </span>
            {showAll ? (
              <ChevronUp size={20} className="group-hover:-translate-y-1 transition-transform" />
            ) : (
              <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}