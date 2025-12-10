import { Camera, Play, Download, Eye, Calendar, Tag } from 'lucide-react';
import { useState } from 'react';

interface GalleryProps {
  darkMode: boolean;
}

export default function Gallery({ darkMode }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Research Lab', 'Field Testing', 'Conferences', 'Awards', 'Team', 'Technology'];

  const galleryItems = [
    {
      id: 1,
      title: "Advanced AWH Laboratory Setup",
      category: "Research Lab",
      type: "image",
      date: "March 2024",
      description: "State-of-the-art atmospheric water harvesting research facility",
      image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Laboratory", "Equipment", "Research"]
    },
    {
      id: 2,
      title: "MEGHDOOT Field Testing in Desert",
      category: "Field Testing",
      type: "image",
      date: "February 2024",
      description: "Testing AWH systems in extreme arid conditions",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Field Test", "Desert", "MEGHDOOT"]
    },
    {
      id: 3,
      title: "Water Tech Summit Presentation",
      category: "Conferences",
      type: "video",
      date: "January 2024",
      description: "Dr. Smith presenting breakthrough research findings",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Conference", "Presentation", "Innovation"]
    },
    {
      id: 4,
      title: "Innovation Excellence Award Ceremony",
      category: "Awards",
      type: "image",
      date: "December 2023",
      description: "Receiving international recognition for AWH technology",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Award", "Recognition", "Achievement"]
    },
    {
      id: 5,
      title: "Research Team Collaboration",
      category: "Team",
      type: "image",
      date: "November 2023",
      description: "Interdisciplinary team working on desiccant materials",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Team", "Collaboration", "Research"]
    },
    {
      id: 6,
      title: "MEGHDOOT System Components",
      category: "Technology",
      type: "image",
      date: "October 2023",
      description: "Detailed view of atmospheric water harvesting components",
      image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Technology", "Components", "Engineering"]
    },
    {
      id: 7,
      title: "Arctic Climate Testing",
      category: "Field Testing",
      type: "video",
      date: "September 2023",
      description: "AWH system performance in extreme cold conditions",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Arctic", "Climate", "Testing"]
    },
    {
      id: 8,
      title: "MIT Partnership Signing",
      category: "Conferences",
      type: "image",
      date: "August 2023",
      description: "Formal collaboration agreement with MIT Water Lab",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Partnership", "MIT", "Collaboration"]
    },
    {
      id: 9,
      title: "Laboratory Analysis Session",
      category: "Research Lab",
      type: "image",
      date: "July 2023",
      description: "Analyzing water quality and extraction efficiency",
      image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Analysis", "Quality", "Laboratory"]
    }
  ];

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className={`py-20 ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
            RESEARCH 
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> GALLERY</span>
          </h2>
          <p className={`text-xl ${darkMode ? 'text-slate-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Visual documentation of our research journey, achievements, and innovations
          </p>
        </div>

        {/* Gallery Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className={`${darkMode ? 'bg-slate-700/50' : 'bg-purple-50'} rounded-xl p-6 border ${darkMode ? 'border-slate-600' : 'border-purple-200'} text-center`}>
            <Camera className="mx-auto text-purple-500 mb-4" size={32} />
            <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>500+</div>
            <div className={`${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>Photos</div>
          </div>

          <div className={`${darkMode ? 'bg-slate-700/50' : 'bg-blue-50'} rounded-xl p-6 border ${darkMode ? 'border-slate-600' : 'border-blue-200'} text-center`}>
            <Play className="mx-auto text-blue-500 mb-4" size={32} />
            <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>25</div>
            <div className={`${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>Videos</div>
          </div>

          <div className={`${darkMode ? 'bg-slate-700/50' : 'bg-green-50'} rounded-xl p-6 border ${darkMode ? 'border-slate-600' : 'border-green-200'} text-center`}>
            <Eye className="mx-auto text-green-500 mb-4" size={32} />
            <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>15K</div>
            <div className={`${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>Views</div>
          </div>

          <div className={`${darkMode ? 'bg-slate-700/50' : 'bg-cyan-50'} rounded-xl p-6 border ${darkMode ? 'border-slate-600' : 'border-cyan-200'} text-center`}>
            <Download className="mx-auto text-cyan-500 mb-4" size={32} />
            <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>2.5K</div>
            <div className={`${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>Downloads</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : darkMode
                  ? 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden ${darkMode ? 'bg-slate-700/30' : 'bg-white'} rounded-2xl border ${darkMode ? 'border-slate-600 hover:border-slate-500' : 'border-gray-200 hover:border-gray-300'} transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2`}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors duration-300">
                          <Eye className="text-white" size={16} />
                        </button>
                        <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors duration-300">
                          <Download className="text-white" size={16} />
                        </button>
                      </div>
                      {item.type === 'video' && (
                        <div className="p-2 bg-red-500/80 backdrop-blur-sm rounded-lg">
                          <Play className="text-white" size={16} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Type Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                    item.type === 'video' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {item.type === 'video' ? 'Video' : 'Photo'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                    item.category === 'Research Lab' ? 'bg-purple-100 text-purple-800' :
                    item.category === 'Field Testing' ? 'bg-green-100 text-green-800' :
                    item.category === 'Conferences' ? 'bg-blue-100 text-blue-800' :
                    item.category === 'Awards' ? 'bg-yellow-100 text-yellow-800' :
                    item.category === 'Team' ? 'bg-pink-100 text-pink-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {item.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Calendar className={darkMode ? 'text-slate-400' : 'text-gray-500'} size={14} />
                    <span className={`text-sm ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>
                      {item.date}
                    </span>
                  </div>
                </div>

                <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                  {item.title}
                </h3>
                
                <p className={`${darkMode ? 'text-slate-300' : 'text-gray-600'} text-sm leading-relaxed mb-4`}>
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`inline-flex items-center px-2 py-1 rounded-md text-xs ${darkMode ? 'bg-slate-600 text-slate-300' : 'bg-gray-100 text-gray-600'}`}
                    >
                      <Tag size={10} className="mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Load More Content
          </button>
        </div>
      </div>
    </section>
  );
}