import { 
  Menu, X, Sun, Moon, 
  Home, FlaskConical, FolderKanban, 
  Users, FileText, Image as ImageIcon, 
  ChevronRight 
} from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Research', href: '#research', icon: FlaskConical },
    { name: 'Projects', href: '#projects', icon: FolderKanban },
    { name: 'Collaboration', href: '#collaboration', icon: Users },
    { name: 'Publications', href: '#publications', icon: FileText },
    { name: 'Gallery', href: '#gallery', icon: ImageIcon },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b
      ${scrolled 
        ? (darkMode ? 'bg-slate-900 border-slate-800 shadow-lg' : 'bg-white border-gray-200 shadow-lg') 
        : 'bg-transparent border-transparent'} 
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* --- LOGO SECTION --- */}
          <div className="flex items-center gap-4 group cursor-pointer">
            {/* Logo Image Wrapper */}
            <div className={`p-1 rounded-xl transition-all duration-300 shadow-lg
              ${scrolled 
                ? (darkMode ? 'bg-slate-800' : 'bg-white') 
                : 'bg-white' /* Always white bg at top for the logo image */
              }`}>
              <img 
                src="/logo.jpg" 
                alt="Maithri Aquatech" 
                className="h-12 w-auto rounded-lg"
              />
            </div>

            {/* Logo Text - The Fix for Readability */}
            <div className="flex flex-col justify-center">
              <h1 className={`text-xl md:text-2xl font-black tracking-tight leading-none transition-colors duration-300
                ${scrolled 
                  ? (darkMode ? 'text-white' : 'text-slate-900') 
                  : 'text-white drop-shadow-lg' /* FORCE WHITE TEXT AT TOP */
                }`}>
                MAITHRI
                <span className={scrolled ? 'text-blue-500' : 'text-blue-200'}> AQUATECH</span>
              </h1>
              <span className={`text-xs font-bold tracking-widest uppercase mt-1 transition-colors duration-300
                ${scrolled 
                  ? (darkMode ? 'text-slate-400' : 'text-slate-500') 
                  : 'text-gray-100 drop-shadow-md' /* FORCE LIGHT GREY AT TOP */
                }`}>
                Research & Development
              </span>
            </div>
          </div>

          {/* --- DESKTOP NAV (Solid Box for Readability) --- */}
          <nav className={`hidden xl:flex items-center gap-1 p-1.5 rounded-full border shadow-2xl transition-all duration-300
            ${scrolled
              ? (darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-gray-100/50 border-gray-200')
              : 'bg-white/95 border-white shadow-blue-900/30' /* SOLID WHITE PILL AT TOP */
            }`}>
            
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300
                  ${scrolled
                    ? (darkMode ? 'text-slate-300 hover:text-white hover:bg-slate-700' : 'text-slate-600 hover:text-blue-600 hover:bg-white')
                    : 'text-slate-800 hover:text-blue-600 hover:bg-blue-50' /* Dark text inside the white pill */
                  }`}
              >
                {item.name}
              </a>
            ))}
            
            <div className={`w-px h-6 mx-2 ${scrolled && darkMode ? 'bg-slate-600' : 'bg-gray-300'}`}></div>
            
            <button
              onClick={toggleDarkMode}
              className={`p-2.5 rounded-full transition-all duration-300 hover:scale-110 active:scale-95
                ${darkMode ? 'bg-yellow-400 text-slate-900' : 'bg-slate-900 text-white'}`}
            >
              {darkMode ? <Sun size={18} strokeWidth={3} /> : <Moon size={18} strokeWidth={3} />}
            </button>
          </nav>

          {/* --- MOBILE TOGGLE --- */}
          <div className="xl:hidden flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className={`p-3 rounded-xl transition-all shadow-lg 
                ${scrolled 
                  ? (darkMode ? 'bg-slate-800 text-yellow-400' : 'bg-gray-100 text-slate-700')
                  : 'bg-white text-slate-900'}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className={`p-3 rounded-xl transition-all active:scale-95 shadow-lg
                ${isMenuOpen 
                  ? 'bg-red-500 text-white rotate-90' 
                  : 'bg-blue-600 text-white'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div 
        className={`xl:hidden fixed inset-x-0 top-[96px] p-4 transition-all duration-500 ease-in-out transform origin-top
          ${isMenuOpen ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-95 -translate-y-4 pointer-events-none'}`}
      >
        <div className={`rounded-3xl border shadow-2xl overflow-hidden
          ${darkMode ? 'bg-slate-900/95 border-slate-700 shadow-black/50' : 'bg-white/95 border-white shadow-xl'}
          backdrop-blur-2xl`}
        >
          <div className="p-4 grid gap-2">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`group flex items-center justify-between p-4 rounded-2xl transition-all duration-200 border border-transparent
                  ${darkMode 
                    ? 'hover:bg-slate-800 hover:border-slate-700 text-slate-300 hover:text-white' 
                    : 'hover:bg-blue-50 hover:border-blue-100 text-slate-600 hover:text-blue-700'}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2.5 rounded-xl transition-colors
                    ${darkMode ? 'bg-slate-800 group-hover:bg-blue-500/20 group-hover:text-blue-400' : 'bg-slate-100 group-hover:bg-blue-100 group-hover:text-blue-600'}`}>
                    <item.icon size={20} strokeWidth={2.5} />
                  </div>
                  <span className="font-bold text-lg">{item.name}</span>
                </div>
                <ChevronRight size={18} className={`opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}