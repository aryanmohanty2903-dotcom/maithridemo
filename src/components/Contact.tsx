import { Mail, Phone, MapPin, Send, Users, Calendar, MessageSquare, Globe } from 'lucide-react';
import { useState } from 'react';

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  const [activeForm, setActiveForm] = useState<'contact' | 'visit'>('contact');

  // Function to handle switching to the visit form and scrolling up
  const handleBookConsultation = () => {
    setActiveForm('visit');
    const formSection = document.getElementById('contact-form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className={`py-20 ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
            GET IN 
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> TOUCH</span>
          </h2>
          <p className={`text-xl ${darkMode ? 'text-slate-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Connect with our research team to explore collaboration opportunities and discuss your water technology needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div className="space-y-8">
            
            {/* Company Info */}
            <div className={`${darkMode ? 'bg-slate-800/50' : 'bg-white'} backdrop-blur-sm border ${darkMode ? 'border-slate-700' : 'border-gray-200'} rounded-2xl p-8`}>
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-8 flex items-center`}>
                <div className="p-3 bg-blue-600 rounded-lg mr-4">
                  <Users className="text-white" size={24} />
                </div>
                Maithri Aquatech R&D
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className={`p-2 ${darkMode ? 'bg-slate-700' : 'bg-gray-100'} rounded-lg`}>
                    <MapPin className="text-blue-500" size={20} />
                  </div>
                  <div>
                    <h4 className={`${darkMode ? 'text-white' : 'text-gray-900'} font-semibold`}>Research Headquarters</h4>
                    <p className={`${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>158, Phase III, IOCL, Cherlapalli,</p>
                    <p className={`${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>Hyderabad, Secunderabad, Telangana 500051</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className={`p-2 ${darkMode ? 'bg-slate-700' : 'bg-gray-100'} rounded-lg`}>
                    <Mail className="text-cyan-500" size={20} />
                  </div>
                  <div>
                    <h4 className={`${darkMode ? 'text-white' : 'text-gray-900'} font-semibold`}>Email</h4>
                    <p className={`${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>research@maithriaquatech.com</p>
                    <p className={`${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>collaboration@maithriaquatech.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className={`p-2 ${darkMode ? 'bg-slate-700' : 'bg-gray-100'} rounded-lg`}>
                    <Phone className="text-green-500" size={20} />
                  </div>
                  <div>
                    <h4 className={`${darkMode ? 'text-white' : 'text-gray-900'} font-semibold`}>Phone</h4>
                    <p className={`${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>+91 77022 91519</p>
                    <p className={`${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>Mon-Sat: 9 AM - 6 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className={`p-2 ${darkMode ? 'bg-slate-700' : 'bg-gray-100'} rounded-lg`}>
                    <Globe className="text-purple-500" size={20} />
                  </div>
                  <div>
                    <h4 className={`${darkMode ? 'text-white' : 'text-gray-900'} font-semibold`}>Online</h4>
                    <p className={`${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>www.maithriaquatech.com</p>
                    <p className={`${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>LinkedIn | ResearchGate</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Research Areas */}
            <div className={`${darkMode ? 'bg-slate-800/50' : 'bg-white'} backdrop-blur-sm border ${darkMode ? 'border-slate-700' : 'border-gray-200'} rounded-2xl p-8`}>
              <h4 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>Research Inquiries</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Materials Research",
                  "Climate Adaptation", 
                  "Energy Integration",
                  "Process Optimization",
                  "Smart Systems",
                  "Social Impact"
                ].map((area, index) => (
                  <div key={index} className={`flex items-center space-x-3 p-3 ${darkMode ? 'bg-slate-700/50' : 'bg-gray-50'} rounded-lg`}>
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className={`${darkMode ? 'text-slate-300' : 'text-gray-700'} text-sm`}>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form Container - Added ID for scrolling */}
          <div id="contact-form-section" className={`${darkMode ? 'bg-slate-800/50' : 'bg-white'} backdrop-blur-sm border ${darkMode ? 'border-slate-700' : 'border-gray-200'} rounded-2xl p-8`}>
            {/* Form Toggle */}
            <div className="flex space-x-4 mb-8">
              <button
                onClick={() => setActiveForm('contact')}
                className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  activeForm === 'contact'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : darkMode
                    ? 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <MessageSquare className="inline mr-2" size={20} />
                Send Message
              </button>
              <button
                onClick={() => setActiveForm('visit')}
                className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  activeForm === 'visit'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : darkMode
                    ? 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Calendar className="inline mr-2" size={20} />
                Schedule Visit
              </button>
            </div>

            {/* Contact Form */}
            {activeForm === 'contact' && (
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block ${darkMode ? 'text-slate-300' : 'text-gray-700'} text-sm font-medium mb-2`}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      className={`w-full ${darkMode ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'} border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors duration-300`}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className={`block ${darkMode ? 'text-slate-300' : 'text-gray-700'} text-sm font-medium mb-2`}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      className={`w-full ${darkMode ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'} border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors duration-300`}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block ${darkMode ? 'text-slate-300' : 'text-gray-700'} text-sm font-medium mb-2`}>
                      Organization
                    </label>
                    <input
                      type="text"
                      className={`w-full ${darkMode ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'} border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors duration-300`}
                      placeholder="Your organization"
                    />
                  </div>
                  <div>
                    <label className={`block ${darkMode ? 'text-slate-300' : 'text-gray-700'} text-sm font-medium mb-2`}>
                      Research Area
                    </label>
                    <select className={`w-full ${darkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors duration-300`}>
                      <option value="">Select research area</option>
                      <option value="materials">Materials Research</option>
                      <option value="climate">Climate Adaptation</option>
                      <option value="energy">Energy Integration</option>
                      <option value="optimization">Process Optimization</option>
                      <option value="smart">Smart Systems</option>
                      <option value="collaboration">Research Collaboration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={`block ${darkMode ? 'text-slate-300' : 'text-gray-700'} text-sm font-medium mb-2`}>
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className={`w-full ${darkMode ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'} border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors duration-300`}
                    placeholder="Tell us about your research interests, collaboration ideas, or specific questions about our work..."
                  ></textarea>
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="updates"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="updates" className={`${darkMode ? 'text-slate-300' : 'text-gray-700'} text-sm`}>
                    Subscribe to research updates and publication notifications
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            )}

            {/* Schedule Visit Form */}
            {activeForm === 'visit' && (
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block ${darkMode ? 'text-slate-300' : 'text-gray-700'} text-sm font-medium mb-2`}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      className={`w-full ${darkMode ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'} border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors duration-300`}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className={`block ${darkMode ? 'text-slate-300' : 'text-gray-700'} text-sm font-medium mb-2`}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      className={`w-full ${darkMode ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'} border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors duration-300`}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block ${darkMode ? 'text-slate-300' : 'text-gray-700'} text-sm font-medium mb-2`}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className={`w-full ${darkMode ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'} border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors duration-300`}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className={`block ${darkMode ? 'text-slate-300' : 'text-gray-700'} text-sm font-medium mb-2`}>
                      Organization
                    </label>
                    <input
                      type="text"
                      className={`w-full ${darkMode ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'} border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors duration-300`}
                      placeholder="Your organization"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block ${darkMode ? 'text-slate-300' : 'text-gray-700'} text-sm font-medium mb-2`}>
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      className={`w-full ${darkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors duration-300`}
                    />
                  </div>
                  <div>
                    <label className={`block ${darkMode ? 'text-slate-300' : 'text-gray-700'} text-sm font-medium mb-2`}>
                      Preferred Time
                    </label>
                    <select className={`w-full ${darkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors duration-300`}>
                      <option value="">Select time slot</option>
                      <option value="9-10">9:00 AM - 10:00 AM</option>
                      <option value="10-11">10:00 AM - 11:00 AM</option>
                      <option value="11-12">11:00 AM - 12:00 PM</option>
                      <option value="14-15">2:00 PM - 3:00 PM</option>
                      <option value="15-16">3:00 PM - 4:00 PM</option>
                      <option value="16-17">4:00 PM - 5:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={`block ${darkMode ? 'text-slate-300' : 'text-gray-700'} text-sm font-medium mb-2`}>
                    Visit Purpose
                  </label>
                  <select className={`w-full ${darkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors duration-300`}>
                    <option value="">Select visit purpose</option>
                    <option value="research-tour">Research Facility Tour</option>
                    <option value="collaboration">Collaboration Discussion</option>
                    <option value="technology-demo">Technology Demonstration</option>
                    <option value="partnership">Partnership Meeting</option>
                    <option value="student-visit">Student/Academic Visit</option>
                    <option value="media-interview">Media Interview</option>
                  </select>
                </div>

                <div>
                  <label className={`block ${darkMode ? 'text-slate-300' : 'text-gray-700'} text-sm font-medium mb-2`}>
                    Number of Visitors
                  </label>
                  <select className={`w-full ${darkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors duration-300`}>
                    <option value="">Select number of visitors</option>
                    <option value="1">1 person</option>
                    <option value="2-5">2-5 people</option>
                    <option value="6-10">6-10 people</option>
                    <option value="11-20">11-20 people</option>
                    <option value="20+">More than 20 people</option>
                  </select>
                </div>

                <div>
                  <label className={`block ${darkMode ? 'text-slate-300' : 'text-gray-700'} text-sm font-medium mb-2`}>
                    Additional Information
                  </label>
                  <textarea
                    rows={4}
                    className={`w-full ${darkMode ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'} border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors duration-300`}
                    placeholder="Please provide any specific requirements, areas of interest, or special accommodations needed..."
                  ></textarea>
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="terms" className={`${darkMode ? 'text-slate-300' : 'text-gray-700'} text-sm`}>
                    I agree to the terms and conditions for facility visits
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <Calendar size={20} />
                  <span>Schedule Visit</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Research Consultation CTA */}
        <div className={`mt-16 p-8 ${darkMode ? 'bg-gradient-to-r from-blue-900/30 to-cyan-900/30' : 'bg-gradient-to-r from-blue-50 to-cyan-50'} rounded-2xl border ${darkMode ? 'border-blue-800/50' : 'border-blue-200'} text-center`}>
          <Calendar className={`mx-auto ${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-4`} size={48} />
          <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Schedule a Research Consultation
          </h3>
          <p className={`${darkMode ? 'text-slate-300' : 'text-gray-600'} text-lg mb-6 max-w-3xl mx-auto`}>
            Our research team is available for technical consultations, collaboration discussions, 
            and custom AWH solution development. Book a session to explore opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {/* BOOK CONSULTATION BUTTON */}
            <button 
              onClick={handleBookConsultation}
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book Research Consultation
            </button>
            
            {/* DOWNLOAD PORTFOLIO LINK - NOW IDENTICAL STYLE TO BOOK BUTTON */}
            <a 
              href="https://www.maithriaqua.com/brochure" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-block text-center"
            >
              Download Research Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}