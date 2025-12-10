import { 
  Camera, Play, Eye, Calendar, Tag, 
  X, ChevronLeft, ChevronRight, Maximize2, Share2, Filter, ArrowDown 
} from 'lucide-react';
import { useState, useEffect, useCallback, useRef } from 'react';

interface GalleryProps {
  darkMode: boolean;
}

export default function Gallery({ darkMode }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(3); // Start with 3 items
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const filterScrollRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Research Lab', 'Field Testing', 'Conferences', 'Awards', 'Team', 'Technology'];

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

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const displayedItems = filteredItems.slice(0, visibleCount);

  // Lightbox Logic
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
    <section id="gallery" className={`py-16 md:py-24 relative ${darkMode ? 'bg-slate-950' : 'bg-gray-50'}`}>
      
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-purple-500/5 rounded-full blur-[80px] md:blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-pink-500/5 rounded-full blur-[80px] md:blur-[100px]"></div>
      </div>

      {/* --- LIGHTBOX (MOBILE OPTIMIZED) --- */}
      {selectedItemIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col animate-in fade-in duration-300">
          
          {/* Top Bar */}
          <div className="flex justify-between items-center p-4 md:p-6 z-50">
            <span className="text-white/80 text-sm font-mono">
              {selectedItemIndex + 1} / {filteredItems.length}
            </span>
            <button onClick={closeLightbox} className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20">
              <X size={24} />
            </button>
          </div>

          {/* Image Stage */}
          <div className="flex-1 relative flex items-center justify-center w-full">
            {/* Mobile Touch Targets for Navigation (Invisible Overlay) */}
            <div className="absolute inset-y-0 left-0 w-1/4 z-40" onClick={(e) => { e.stopPropagation(); prevImage(); }}></div>
            <div className="absolute inset-y-0 right-0 w-1/4 z-40" onClick={(e) => { e.stopPropagation(); nextImage(); }}></div>

            {/* Desktop Arrows */}
            <button onClick={prevImage} className="hidden md:block absolute left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-50">
              <ChevronLeft size={32} />
            </button>
            
            <img 
              src={filteredItems[selectedItemIndex].image} 
              alt={filteredItems[selectedItemIndex].title} 
              className="max-h-[60vh] md:max-h-[85vh] max-w-full object-contain shadow-2xl px-2"
            />

            <button onClick={nextImage} className="hidden md:block absolute right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-50">
              <ChevronRight size={32} />
            </button>
          </div>

          {/* Bottom Caption */}
          <div className="bg-gradient-to-t from-black via-black/90 to-transparent p-6 pb-10 text-center z-50">
            <div className="flex justify-center gap-2 mb-2">
               <span className="px-2 py-0.5 bg-purple-500/80 rounded text-[10px] font-bold uppercase tracking-wider text-white">
                  {filteredItems[selectedItemIndex].category}
                </span>
            </div>
            <h3 className="text-lg md:text-2xl font-bold text-white mb-1 line-clamp-1">{filteredItems[selectedItemIndex].title}</h3>
            <p className="text-white/70 text-xs md:text-sm max-w-2xl mx-auto line-clamp-2">{filteredItems[selectedItemIndex].description}</p>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="mb-10 md:mb-16">
          <div className="text-center md:text-left mb-6">
            <span className={`inline-block py-1 px-3 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider mb-3 border ${darkMode ? 'bg-purple-900/30 border-purple-700 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-600'}`}>
              Visual Archive
            </span>
            <h2 className={`text-3xl md:text-6xl font-black ${darkMode ? 'text-white' : 'text-slate-900'} tracking-tight leading-tight`}>
              Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Gallery</span>
            </h2>
          </div>
          
          {/* --- MOBILE-FRIENDLY SCROLLABLE FILTER BAR --- */}
          <div className="-mx-4 px-4 overflow-x-auto pb-4 hide-scrollbar snap-x">
            <div className={`inline-flex p-1 rounded-full border ${darkMode ? 'bg-slate-800/80 border-slate-700' : 'bg-white border-slate-200 shadow-sm'}`}>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => { setActiveCategory(category); setVisibleCount(3); }}
                  className={`snap-center px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold whitespace-nowrap transition-all duration-300
                    ${activeCategory === category
                      ? 'bg-slate-900 text-white shadow-md transform scale-105'
                      : darkMode
                      ? 'text-slate-400 hover:text-white'
                      : 'text-slate-500 hover:text-slate-900'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* --- CINEMATIC GRID (Responsive) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {displayedItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
              className="group relative h-[280px] md:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Mobile: Stronger Overlay / Desktop: Dynamic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 md:opacity-60 md:group-hover:opacity-90 transition-opacity duration-300"></div>

              {/* Badge */}
              <div className="absolute top-3 right-3 z-20">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[10px] md:text-xs font-bold border border-white/10">
                  {item.type === 'video' ? <Play size={10} fill="white" /> : <Camera size={10} />}
                  {item.type === 'video' ? 'Video' : 'Photo'}
                </span>
              </div>

              {/* Content - Always Visible on Mobile, Slide-up on Desktop */}
              <div className="absolute bottom-0 left-0 w-full p-5 md:p-8 z-20 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2 opacity-90">
                  <span className="text-purple-300 text-[10px] md:text-xs font-bold uppercase tracking-wider">{item.category}</span>
                  <span className="text-white/60 text-[10px] md:text-xs flex items-center gap-1">
                    • {item.date}
                  </span>
                </div>
                
                <h3 className="text-lg md:text-2xl font-bold text-white mb-1 leading-tight">
                  {item.title}
                </h3>
                
                {/* Description: Hidden on mobile (too cluttered), visible on desktop hover */}
                <div className={`hidden md:grid transition-all duration-300 ${isHovered === index ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="text-white/70 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Mobile "Tap to view" hint */}
                <div className="md:hidden mt-2 flex items-center gap-2 text-white/50 text-xs">
                   <Maximize2 size={12} /> Tap to expand
                </div>

                {/* Desktop Line */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500 w-0 group-hover:w-full hidden md:block"></div>
              </div>
            </div>
          ))}
        </div>

        {/* --- LOAD MORE TRIGGER (Large Touch Target) --- */}
        {visibleCount < filteredItems.length && (
          <div className="flex justify-center mt-12 md:mt-16">
            <button 
              onClick={() => setVisibleCount(prev => prev + 3)}
              className={`group flex items-center justify-center w-full md:w-auto gap-3 px-8 py-4 rounded-xl md:rounded-full font-bold transition-all duration-300 active:scale-95 shadow-lg
                ${darkMode ? 'bg-white text-slate-900 hover:bg-purple-50' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
            >
              Load More
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform duration-500" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}