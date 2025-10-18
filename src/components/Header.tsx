import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ASSETS } from '@/lib/assets';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', kannada: 'ಮುಖ್ಯ' },
    { name: 'About', path: '/about', kannada: 'ನಮ್ಮ ಬಗ್ಗೆ' },
    { name: 'Events', path: '/events', kannada: 'ಕಾರ್ಯಕ್ರಮಗಳು' },
    { name: 'Archive', path: '/archive', kannada: 'ಆರ್ಕೈವ್' },
    { name: 'Gallery', path: '/gallery', kannada: 'ಗ್ಯಾಲರಿ' },
    { name: 'Contact', path: '/contact', kannada: 'ಸಂಪರ್ಕ' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-smooth ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-card' 
          : 'md:bg-transparent bg-background/80 backdrop-blur-sm md:backdrop-blur-none'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={ASSETS.logos.jssLogo} 
              alt="JSS Mahavidyapeetha Logo" 
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="font-serif font-bold text-xl text-foreground">JSS Sangeetha Sabha</h1>
              <p className="text-sm text-muted-foreground">ಸಂಗೀತ ಸಂಭ್ರಮ</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link font-medium text-sm tracking-wide ${
                  location.pathname === item.path 
                    ? 'text-secondary' 
                    : 'text-foreground hover:text-secondary'
                }`}
              >
                <span className="block">{item.name}</span>
                <span className="block text-xs text-muted-foreground">{item.kannada}</span>
              </Link>
            ))}
          </div>

          {/* Donation CTA */}
          <div className="hidden md:block">
            <Button variant="default" className="red-gradient text-primary-foreground hover:shadow-glow transition-bounce">
              Donate
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-smooth"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-[72px] bg-background/95 backdrop-blur-md border-t border-border">
            <div className="container mx-auto px-6 py-4">
              <div className="grid gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block p-3 rounded-lg transition-smooth ${
                      location.pathname === item.path 
                        ? 'bg-muted text-secondary' 
                        : 'hover:bg-muted'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="block font-medium">{item.name}</span>
                    <span className="block text-sm text-muted-foreground">{item.kannada}</span>
                  </Link>
                ))}
                <Button variant="default" className="red-gradient text-primary-foreground mt-2">
                  Donate
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;