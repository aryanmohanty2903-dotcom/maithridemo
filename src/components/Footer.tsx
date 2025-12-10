import { Mail, Phone, MapPin, Linkedin, Twitter, Globe, BookOpen } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  return (
    <footer className={`${darkMode ? 'bg-slate-900' : 'bg-gray-900'} border-t ${darkMode ? 'border-slate-800' : 'border-gray-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              {/* --- LOGO IMAGE SECTION --- */}
              <img 
                src="/public/Maithri Aquatech_Logo_2022.jpg" 
                alt="Maithri Aquatech" 
                className="h-12 w-auto rounded-lg bg-white p-0.5" // Added bg-white to ensure logo visibility on dark footer
              />
              {/* -------------------------- */}
              
              {/* <div className="text-white">
                <h3 className="text-lg font-bold">MAITHRI AQUATECH</h3>
                <p className="text-sm text-gray-400">Research & Development</p>
              </div> */}
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              Pioneering atmospheric water harvesting technology through cutting-edge research, 
              innovation, and global collaboration to address water scarcity challenges.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-300">
                <Linkedin className="text-gray-400 hover:text-white" size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-300">
                <Twitter className="text-gray-400 hover:text-white" size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-300">
                <Globe className="text-gray-400 hover:text-white" size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-300">
                <BookOpen className="text-gray-400 hover:text-white" size={20} />
              </a>
            </div>
          </div>

          {/* Research Areas */}
          <div>
            <h4 className="text-white font-semibold mb-6">Research Areas</h4>
            <ul className="space-y-3">
              {[
                "Advanced Materials",
                "Smart Systems & IoT", 
                "Energy Integration",
                "Process Optimization",
                "Climate Adaptation",
                "Social Impact Research"
              ].map((area, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                "Research Projects",
                "Publications",
                "Collaboration",
                "Awards & Recognition",
                "Gallery",
                "News & Updates"
              ].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Research Team</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-gray-400 mt-1" size={16} />
                <div className="text-gray-400 text-sm">
                  <p>158, Phase III, IOCL, Cherlapalli,</p>
                  <p>Hyderabad,Secunderabad, Telangana 500051</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-gray-400" size={16} />
                <a href="mailto:research@maithriaquatech.com" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  research@maithriaquatech.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-gray-400" size={16} />
                <span className="text-gray-400 text-sm">+91 77022 91519</span>
              </div>
            </div>
          </div>
        </div>

        {/* Research Stats */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-1">60+</div>
              <div className="text-gray-400 text-sm">Active Projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400 mb-1">42</div>
              <div className="text-gray-400 text-sm">Publications</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400 mb-1">25+</div>
              <div className="text-gray-400 text-sm">Collaborations</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400 mb-1">15</div>
              <div className="text-gray-400 text-sm">Awards</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Maithri Aquatech R&D. All rights reserved. | Where Research Meets The Sky To Create Water
            </div>

            {/* Links */}
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                Research Ethics
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                Open Access
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}