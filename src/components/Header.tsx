import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 w-full ${darkMode ? 'bg-slate-900/95' : 'bg-white/95'} backdrop-blur-sm border-b ${darkMode ? 'border-slate-800' : 'border-gray-200'} z-50 transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img 
              src="/Maithri_Aquatech_Logo_2022.jpg" 
              alt="Maithri Aquatech" 
              className="h-12 w-auto rounded-lg shadow-sm"
            />
            <div className={darkMode ? 'text-white' : 'text-gray-900'}>
              <h1 className="text-xl font-bold">MAITHRI AQUATECH</h1>
              <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>Research & Development</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <a href="#home" className={`${darkMode ? 'text-slate-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-300 font-medium`}>Home</a>
            <a href="#research" className={`${darkMode ? 'text-slate-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-300 font-medium`}>Research</a>
            <a href="#projects" className={`${darkMode ? 'text-slate-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-300 font-medium`}>Projects</a>
            <a href="#collaboration" className={`${darkMode ? 'text-slate-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-300 font-medium`}>Collaboration</a>
            <a href="#publications" className={`${darkMode ? 'text-slate-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-300 font-medium`}>Publications</a>
            <a href="#gallery" className={`${darkMode ? 'text-slate-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-300 font-medium`}>Gallery</a>
          </nav>

          {/* Action Buttons - NOW ONLY DARK MODE */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg ${darkMode ? 'hover:bg-slate-800' : 'hover:bg-gray-100'} transition-colors duration-300`}
            >
              {darkMode ? <Sun className="text-yellow-400" size={20} /> : <Moon className="text-gray-600" size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${darkMode ? 'text-white' : 'text-gray-900'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 border-t ${darkMode ? 'border-slate-800' : 'border-gray-200'}`}>
            <nav className="flex flex-col space-y-4">
              <a href="#home" className={`${darkMode ? 'text-slate-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-300`}>Home</a>
              <a href="#research" className={`${darkMode ? 'text-slate-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-300`}>Research</a>
              <a href="#projects" className={`${darkMode ? 'text-slate-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-300`}>Projects</a>
              <a href="#collaboration" className={`${darkMode ? 'text-slate-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-300`}>Collaboration</a>
              <a href="#publications" className={`${darkMode ? 'text-slate-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-300`}>Publications</a>
              <a href="#gallery" className={`${darkMode ? 'text-slate-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-300`}>Gallery</a>
              <div className="flex items-center space-x-4 pt-4">
                <button
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-lg ${darkMode ? 'hover:bg-slate-800' : 'hover:bg-gray-100'} transition-colors duration-300`}
                >
                  {darkMode ? <Sun className="text-yellow-400" size={20} /> : <Moon className="text-gray-600" size={20} />}
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
