import { 
  Camera, Play, Eye, Calendar, Tag, 
  X, ChevronLeft, ChevronRight, Maximize2, Share2, Filter 
} from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

interface GalleryProps {
  darkMode: boolean;
}

export default function Gallery({ darkMode }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const categories = ['All', 'Research Lab', 'Field Testing', 'Conferences', 'Awards', 'Team'];

  const galleryItems = [
    {
      id: 1,
      title: "Advanced AWH Laboratory",
      category: "Research Lab",
      type: "image",
      date: "March 2024",
      description: "State-of-the-art atmospheric water harvesting research facility equipped with mass spectrometers.",
      image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["Lab", "R&D"]
    },
    {
      id: 2,
      title: "Desert Field Testing",
      category: "Field Testing",
      type: "image",
      date: "February 2024",
      description: "Testing AWH systems in extreme arid conditions to validate efficiency at low humidity.",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["Field Test", "MEGHDOOT"]
    },
    {
      id: 3,
      title: "Global Water Summit",
      category: "Conferences",
      type: "video",
      date: "January 2024",
      description: "Dr. Smith presenting breakthrough research findings on thermodynamic cycles.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["Keynote", "Innovation"]
    },
    {
      id: 4,
      title: "Innovation Excellence",
      category: "Awards",
      type: "image",
      date: "December 2023",
      description: "Receiving international recognition for sustainable water technology solutions.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["Award", "Victory"]
    },
    {
      id: 5,
      title: "The Research Team",
      category: "Team",
      type: "image",
      date: "November 2023",
      description: "Interdisciplinary team working on advanced desiccant material synthesis.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["Team", "Collaboration"]
    },
    {
      id: 6,
      title: "System Architecture",
      category: "Technology",
      type: "image",
      date: "October 2023",
      description: "Detailed engineering view of the filtration and condensation chambers.",
      image: "https://images.pexels.com/photos/2591690/pexels-photo-2591690.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["Tech", "Engineering"]
    },
    {
      id: 7,
      title: "Arctic Deployment",
      category: "Field Testing",
      type: "video",
      date: "September 2023",
      description: "Analyzing AWH system performance in extreme cold and freezing conditions.",
      image: "https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["Climate", "Extreme"]
    },
    {
      id: 8,
      title: "MIT Signing Ceremony",
      category: "Conferences",
      type: "image",
      date: "August 2023",
      description: "Formal collaboration agreement signing with MIT Water Lab directors.",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["Partnership", "MIT"]
    },
    {
      id: 9,
      title: "Microscopic Analysis",
      category: "Research Lab",
      type: "image",
      date: "July 2023",
      description: "Microscopic analysis of water quality and mineral content.",
      image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["Quality", "Lab"]
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
    <section id="gallery" className={`py-24 relative ${darkMode ? 'bg-slate-950' : 'bg-gray-50'}`}>
      
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-[100px]"></div>
      </div>

      {/* --- LIGHTBOX OVERLAY --- */}
      {selectedItemIndex !== null && (
        <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col justify-center animate-in fade-in duration-300">
          
          {/* Controls */}
          <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-50">
            <span className="text-white/80 text-sm font-mono">
              {selectedItemIndex + 1} / {filteredItems.length}
            </span>
            <div className="flex gap-4">
              <button className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all">
                <Share2 size={24} />
              </button>
              <button onClick={closeLightbox} className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all">
                <X size={28} />
              </button>
            </div>
          </div>

          {/* Main Image Stage */}
          <div className="flex-1 relative flex items-center justify-center w-full h-full p-4 md:p-10">
            <button onClick={prevImage} className="absolute left-4 md:left-10 p-4 rounded-full bg-white/5 hover:bg-white/20 text-white backdrop-blur-md transition-all z-40 hidden md:block group">
              <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            
            <img 
              src={filteredItems[selectedItemIndex].image} 
              alt={filteredItems[selectedItemIndex].title} 
              className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
            />

            <button onClick={nextImage} className="absolute right-4 md:right-10 p-4 rounded-full bg-white/5 hover:bg-white/20 text-white backdrop-blur-md transition-all z-40 hidden md:block group">
              <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Caption Bar */}
          <div className="bg-gradient-to-t from-black via-black/80 to-transparent pt-12 pb-8 px-6 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">{filteredItems[selectedItemIndex].title}</h3>
            <p className="text-white/70 max-w-2xl mx-auto">{filteredItems[selectedItemIndex].description}</p>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER: Professional & Modern --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className={`inline-block py-1 px-3 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border ${darkMode ? 'bg-purple-900/30 border-purple-700 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-600'}`}>
              Visual Archive
            </span>
            <h2 className={`text-4xl md:text-6xl font-black ${darkMode ? 'text-white' : 'text-slate-900'} tracking-tight leading-tight`}>
              Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Gallery</span>
            </h2>
          </div>
          
          {/* --- FLOATING FILTER BAR --- */}
          <div className="overflow-x-auto pb-2 hide-scrollbar">
            <div className={`inline-flex p-1.5 rounded-full border ${darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200 shadow-md'}`}>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => { setActiveCategory(category); setVisibleCount(6); }}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300
                    ${activeCategory === category
                      ? 'bg-slate-900 text-white shadow-lg'
                      : darkMode
                      ? 'text-slate-400 hover:text-white hover:bg-slate-700'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* --- CINEMATIC GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
              className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image Background */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Dynamic Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

              {/* Floating Top Badge */}
              <div className="absolute top-4 right-4 z-20 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold border border-white/10">
                  {item.type === 'video' ? <Play size={12} fill="white" /> : <Camera size={12} />}
                  {item.type === 'video' ? 'Play Video' : 'View Image'}
                </span>
              </div>

              {/* Content Overlay (Always Visible but Animates) */}
              <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-3 opacity-80">
                  <span className="text-purple-300 text-xs font-bold uppercase tracking-wider">{item.category}</span>
                  <span className="w-1 h-1 rounded-full bg-white/50"></span>
                  <span className="text-white/70 text-xs flex items-center gap-1">
                    <Calendar size={12} /> {item.date}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-purple-200 transition-colors">
                  {item.title}
                </h3>
                
                {/* Description reveals on hover */}
                <div className={`grid transition-all duration-300 ${isHovered === index ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="text-white/70 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex gap-2">
                      {item.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 rounded text-[10px] font-bold bg-white/10 text-white/80 border border-white/10">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Indicator Line */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500 w-0 group-hover:w-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* --- LOAD MORE TRIGGER --- */}
        {visibleCount < filteredItems.length && (
          <div className="flex justify-center mt-16">
            <button 
              onClick={() => setVisibleCount(prev => prev + 3)}
              className={`group flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-xl
                ${darkMode ? 'bg-white text-slate-900 hover:bg-purple-50' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
            >
              <Filter size={18} className="group-hover:rotate-180 transition-transform duration-500" />
              Load More Moments
            </button>
          </div>
        )}

      </div>
    </section>
  );
}