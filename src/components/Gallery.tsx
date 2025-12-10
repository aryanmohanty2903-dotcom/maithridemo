import { 
  Camera, Play, Download, Eye, Calendar, Tag, 
  X, ChevronLeft, ChevronRight, ZoomIn, Share2 
} from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

interface GalleryProps {
  darkMode: boolean;
}

export default function Gallery({ darkMode }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const categories = ['All', 'Research Lab', 'Field Testing', 'Conferences', 'Awards', 'Team', 'Technology'];

  const galleryItems = [
    {
      id: 1,
      title: "Advanced AWH Laboratory Setup",
      category: "Research Lab",
      type: "image",
      date: "March 2024",
      description: "State-of-the-art atmospheric water harvesting research facility equipped with mass spectrometers.",
      image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["Laboratory", "Equipment", "Research"]
    },
    {
      id: 2,
      title: "MEGHDOOT Field Testing in Desert",
      category: "Field Testing",
      type: "image",
      date: "February 2024",
      description: "Testing AWH systems in extreme arid conditions to validate efficiency at low humidity.",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["Field Test", "Desert", "MEGHDOOT"]
    },
    {
      id: 3,
      title: "Water Tech Summit Presentation",
      category: "Conferences",
      type: "video",
      date: "January 2024",
      description: "Dr. Smith presenting breakthrough research findings on thermodynamic cycles.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["Conference", "Presentation", "Innovation"]
    },
    {
      id: 4,
      title: "Innovation Excellence Award",
      category: "Awards",
      type: "image",
      date: "December 2023",
      description: "Receiving international recognition for sustainable water technology solutions.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["Award", "Recognition", "Achievement"]
    },
    {
      id: 5,
      title: "Research Team Collaboration",
      category: "Team",
      type: "image",
      date: "November 2023",
      description: "Interdisciplinary team working on advanced desiccant material synthesis.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["Team", "Collaboration", "Research"]
    },
    {
      id: 6,
      title: "MEGHDOOT System Components",
      category: "Technology",
      type: "image",
      date: "October 2023",
      description: "Detailed engineering view of the filtration and condensation chambers.",
      image: "https://images.pexels.com/photos/2591690/pexels-photo-2591690.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["Technology", "Engineering", "Design"]
    },
    {
      id: 7,
      title: "Arctic Climate Testing",
      category: "Field Testing",
      type: "video",
      date: "September 2023",
      description: "Analyzing AWH system performance in extreme cold and freezing conditions.",
      image: "https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["Arctic", "Climate", "Testing"]
    },
    {
      id: 8,
      title: "MIT Partnership Signing",
      category: "Conferences",
      type: "image",
      date: "August 2023",
      description: "Formal collaboration agreement signing with MIT Water Lab directors.",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["Partnership", "MIT", "Global"]
    },
    {
      id: 9,
      title: "Laboratory Analysis Session",
      category: "Research Lab",
      type: "image",
      date: "July 2023",
      description: "Microscopic analysis of water quality and mineral content.",
      image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["Analysis", "Quality", "Lab"]
    }
  ];

  // Filtering Logic
  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const displayedItems = filteredItems.slice(0, visibleCount);

  // LIGHTBOX LOGIC
  const openLightbox = (index: number) => setSelectedItemIndex(index);
  const closeLightbox = () => setSelectedItemIndex(null);

  const nextImage = useCallback(() => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((prev) => 
        prev === null || prev === filteredItems.length - 1 ? 0 : prev + 1
      );
    }
  }, [selectedItemIndex, filteredItems.length]);

  const prevImage = useCallback(() => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((prev) => 
        prev === null || prev === 0 ? filteredItems.length - 1 : prev - 1
      );
    }
  }, [selectedItemIndex, filteredItems.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItemIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItemIndex, nextImage, prevImage]);

  return (
    <section id="gallery" className={`py-24 ${darkMode ? 'bg-slate-800' : 'bg-white'} relative`}>
      
      {/* --- LIGHTBOX MODAL --- */}
      {selectedItemIndex !== null && (
        <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center animate-in fade-in duration-200">
          
          {/* Close Button */}
          <button onClick={closeLightbox} className="absolute top-6 right-6 p-2 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors z-20">
            <X size={32} />
          </button>

          {/* Navigation */}
          <button onClick={prevImage} className="absolute left-4 md:left-8 p-3 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors z-20 hidden md:block">
            <ChevronLeft size={40} />
          </button>
          <button onClick={nextImage} className="absolute right-4 md:right-8 p-3 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors z-20 hidden md:block">
            <ChevronRight size={40} />
          </button>

          {/* Main Content */}
          <div className="max-w-6xl w-full max-h-[90vh] flex flex-col items-center px-4">
            <div className="relative w-full h-auto max-h-[70vh] flex justify-center mb-6">
              <img 
                src={filteredItems[selectedItemIndex].image} 
                alt={filteredItems[selectedItemIndex].title} 
                className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
              />
              {filteredItems[selectedItemIndex].type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="p-4 bg-white/20 backdrop-blur-md rounded-full">
                    <Play size={48} className="text-white fill-white" />
                  </div>
                </div>
              )}
            </div>
            
            <div className="text-center text-white max-w-3xl">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="px-3 py-1 bg-purple-500/80 rounded-full text-xs font-bold uppercase tracking-wider">
                  {filteredItems[selectedItemIndex].category}
                </span>
                <span className="text-white/60 text-sm flex items-center gap-1">
                  <Calendar size={14} /> {filteredItems[selectedItemIndex].date}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">{filteredItems[selectedItemIndex].title}</h3>
              <p className="text-white/80 leading-relaxed">{filteredItems[selectedItemIndex].description}</p>
            </div>
          </div>
        </div>
      )}

      {/* --- MAIN SECTION CONTENT --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-black ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
            Research <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className={`text-xl ${darkMode ? 'text-slate-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Visual documentation of our innovation journey, from laboratory breakthroughs to global recognition.
          </p>
        </div>

        {/* Gallery Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { icon: Camera, val: "500+", label: "Images Captured", color: "purple" },
            { icon: Play, val: "25", label: "Video Documentaries", color: "blue" },
            { icon: Eye, val: "15K", label: "Total Views", color: "green" },
            { icon: Download, val: "2.5K", label: "Resource Downloads", color: "cyan" }
          ].map((stat, i) => (
            <div key={i} className={`${darkMode ? 'bg-slate-700/30 border-slate-600' : 'bg-gray-50 border-gray-200'} border rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300`}>
              <stat.icon className={`mx-auto mb-3 text-${stat.color}-500`} size={28} />
              <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{stat.val}</div>
              <div className={`text-xs uppercase tracking-wide font-medium ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => { setActiveCategory(category); setVisibleCount(6); }}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border
                ${activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border-transparent shadow-lg shadow-purple-500/30 scale-105'
                  : darkMode
                  ? 'bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-500 hover:bg-slate-700'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Dynamic Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl
                ${darkMode ? 'bg-slate-800 shadow-black/50' : 'bg-white shadow-gray-200'}`}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                  <button className="p-3 bg-white/20 hover:bg-white/30 rounded-full text-white backdrop-blur-md transition-transform hover:scale-110">
                    <ZoomIn size={24} />
                  </button>
                  <button className="p-3 bg-white/20 hover:bg-white/30 rounded-full text-white backdrop-blur-md transition-transform hover:scale-110">
                    <Share2 size={24} />
                  </button>
                </div>

                {/* Type Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md shadow-sm
                    ${item.type === 'video' ? 'bg-red-500/90 text-white' : 'bg-white/90 text-slate-800'}`}>
                    {item.type === 'video' ? <Play size={10} fill="currentColor" /> : <Camera size={12} />}
                    {item.type === 'video' ? 'Video' : 'Photo'}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className={`p-6 border-t ${darkMode ? 'border-slate-700' : 'border-gray-100'}`}>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                    {item.category}
                  </span>
                  <div className="flex items-center space-x-1 text-xs font-medium opacity-60">
                    <Calendar size={12} />
                    <span>{item.date}</span>
                  </div>
                </div>

                <h3 className={`text-lg font-bold mb-2 line-clamp-1 ${darkMode ? 'text-white group-hover:text-purple-400' : 'text-gray-900 group-hover:text-purple-600'} transition-colors`}>
                  {item.title}
                </h3>
                
                <p className={`text-sm line-clamp-2 mb-4 ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span key={i} className={`inline-flex items-center px-2 py-1 rounded-md text-[10px] font-medium border
                      ${darkMode ? 'bg-slate-700 border-slate-600 text-slate-300' : 'bg-gray-50 border-gray-200 text-gray-600'}`}>
                      <Tag size={10} className="mr-1 opacity-50" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button - Functional */}
        {visibleCount < filteredItems.length && (
          <div className="text-center mt-16">
            <button 
              onClick={() => setVisibleCount(prev => prev + 3)}
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-slate-900 font-lg rounded-xl hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
            >
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"></span>
              <span className="relative flex items-center gap-2">
                Load More Content
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}