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

  // Dynamic shadow effect on scroll
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
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b
      ${scrolled 
        ? (darkMode ? 'bg-slate-900/80 border-slate-800 shadow-lg shadow-blue-900/10' : 'bg-white/80 border-gray-200 shadow-lg') 
        : (darkMode ? 'bg-slate-900/0 border-transparent' : 'bg-white/0 border-transparent')}
      backdrop-blur-xl`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* --- LOGO SECTION --- */}
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className={`relative p-1 rounded-2xl transition-all duration-300 group-hover:scale-105 ${darkMode ? 'bg-white/10' : 'bg-blue-50'}`}>
              <img 
                src="/logo.jpg" 
                alt="Maithri Aquatech" 
                className="h-12 w-auto rounded-xl"
              />
            </div>
            <div className={`flex flex-col justify-center transition-colors duration-300`}>
              <h1 className={`text-xl md:text-2xl font-black tracking-tight leading-none ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                MAITHRI
                <span className="text-blue-500"> AQUATECH</span>
              </h1>
              <span className={`text-xs font-bold tracking-widest uppercase mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Research & Development
              </span>
            </div>
          </div>

          {/* --- DESKTOP NAV --- */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-100/50 dark:bg-slate-800/50 p-1.5 rounded-full border border-gray-200 dark:border-slate-700 backdrop-blur-md">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2
                  ${darkMode 
                    ? 'text-slate-300 hover:text-white hover:bg-slate-700' 
                    : 'text-slate-600 hover:text-blue-600 hover:bg-white hover:shadow-sm'}`}
              >
                {/* Optional: Add icon to desktop nav too if you like */}
                {/* <item.icon size={16} /> */}
                {item.name}
              </a>
            ))}
            <div className="w-px h-6 bg-gray-300 dark:bg-slate-600 mx-2"></div>
            <button
              onClick={toggleDarkMode}
              className={`p-2.5 rounded-full transition-all duration-300 hover:scale-110 active:scale-95
                ${darkMode ? 'bg-yellow-400 text-slate-900 shadow-[0_0_15px_rgba(250,204,21,0.5)]' : 'bg-slate-900 text-white'}`}
            >
              {darkMode ? <Sun size={18} strokeWidth={3} /> : <Moon size={18} strokeWidth={3} />}
            </button>
          </nav>

          {/* --- MOBILE TOGGLE --- */}
          <div className="xl:hidden flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className={`p-3 rounded-xl transition-all ${darkMode ? 'bg-slate-800 text-yellow-400' : 'bg-gray-100 text-slate-700'}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className={`p-3 rounded-xl transition-all active:scale-95
                ${isMenuOpen 
                  ? 'bg-red-500 text-white rotate-90 shadow-lg shadow-red-500/30' 
                  : (darkMode ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'bg-blue-600 text-white shadow-lg shadow-blue-600/20')}`}
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
          
          <div className={`px-6 py-4 text-center text-xs font-bold uppercase tracking-widest border-t
            ${darkMode ? 'border-slate-800 text-slate-500' : 'border-gray-100 text-gray-400'}`}>
            Maithri Aquatech R&D
          </div>
        </div>
      </div>
    </header>
  );
}