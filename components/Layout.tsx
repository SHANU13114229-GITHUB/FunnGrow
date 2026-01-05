
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTeenPage = location.pathname.includes('/teens');

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isTeenPage ? 'bg-blue-600 shadow-blue-200 shadow-lg' : 'bg-indigo-600 shadow-indigo-200 shadow-lg'}`}>
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-slate-900">
              Funngro
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/teens" 
              className={`font-semibold transition-colors ${isTeenPage ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}`}
            >
              For Teens
            </Link>
            <Link 
              to="/companies" 
              className={`font-semibold transition-colors ${!isTeenPage ? 'text-indigo-600' : 'text-slate-600 hover:text-slate-900'}`}
            >
              For Companies
            </Link>
            <button className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center gap-2 ${isTeenPage ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}>
              {isTeenPage ? 'Get Started' : 'Hire Talent'} <ArrowRight className="w-4 h-4" />
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl p-6 flex flex-col gap-4">
            <Link to="/teens" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold text-slate-700 hover:text-blue-600">For Teens</Link>
            <Link to="/companies" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold text-slate-700 hover:text-indigo-600">For Companies</Link>
            <button className={`w-full py-4 rounded-xl font-bold text-white shadow-lg ${isTeenPage ? 'bg-blue-600' : 'bg-indigo-600'}`}>
              {isTeenPage ? 'Join as a Teen' : 'Hire Teen Talent'}
            </button>
          </div>
        )}
      </header>

      {/* Content */}
      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">F</span>
                </div>
                <span className="text-xl font-bold text-white tracking-tight">Funngro</span>
              </Link>
              <p className="text-sm leading-relaxed mb-6">
                The leading platform connecting ambitious teenagers with forward-thinking companies. Start your professional journey today.
              </p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Platform</h4>
              <ul className="space-y-4 text-sm">
                <li><Link to="/teens" className="hover:text-white transition-colors">For Teens</Link></li>
                <li><Link to="/companies" className="hover:text-white transition-colors">For Companies</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Available Projects</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Legal</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            <p>© 2024 Funngro. All rights reserved.</p>
            <p>Made with ❤️ for the next generation of builders.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
