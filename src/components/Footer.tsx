import { Button } from '@/components/ui/button';
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Upcoming Events', href: '#events' },
    { name: 'Membership', href: '#membership' },
    { name: 'Archive', href: '#archive' },
    { name: 'Gallery', href: '#gallery' },
  ];

  const programs = [
    { name: 'Morning Concerts', href: '#morning' },
    { name: 'Lecture Demos', href: '#lectures' },
    { name: 'Youth Programs', href: '#youth' },
    { name: 'Festivals', href: '#festivals' },
  ];

  return (
    <footer className="bg-muted border-t border-secondary/20 relative overflow-hidden">
      {/* Decorative Wave Pattern */}
      <div className="absolute top-0 left-0 w-full h-2 gold-gradient"></div>
      
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-xl">ಸಂ</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-foreground">JSS Sangeetha Sabha</h3>
                <p className="text-secondary">ಸಂಗೀತ ಸಂಭ್ರಮ</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Preserving and promoting the rich tradition of Carnatic classical music since 1954. 
              A cultural sanctuary where art meets devotion in the heart of Mysuru.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-muted-foreground">
                <MapPin className="mr-3 h-5 w-5 text-secondary" />
                <span>Jaganmohan Palace Grounds, Mysuru - 570001</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone className="mr-3 h-5 w-5 text-secondary" />
                <span>+91 821 242 3456</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Mail className="mr-3 h-5 w-5 text-secondary" />
                <span>info@jsssangeethasabha.org</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-secondary transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">Programs</h4>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program.name}>
                  <a 
                    href={program.href}
                    className="text-muted-foreground hover:text-secondary transition-smooth"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-card rounded-2xl p-6 mb-8 border border-secondary/20 shadow-card">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="font-serif font-semibold text-foreground mb-2">Stay Connected</h4>
              <p className="text-muted-foreground">Receive updates about upcoming concerts and cultural events</p>
            </div>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
              <Button className="red-gradient text-primary-foreground hover:shadow-glow">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-secondary/20">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span className="text-muted-foreground">Follow us:</span>
            <div className="flex space-x-3">
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-2 hover:bg-secondary hover:text-secondary-foreground rounded-full"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-2 hover:bg-secondary hover:text-secondary-foreground rounded-full"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-2 hover:bg-secondary hover:text-secondary-foreground rounded-full"
              >
                <Youtube className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-2 hover:bg-secondary hover:text-secondary-foreground rounded-full"
              >
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex items-center text-muted-foreground text-sm">
            <span>Made with</span>
            <Heart className="mx-2 h-4 w-4 text-primary" />
            <span>for Classical Music • © 2024 JSS Sangeetha Sabha</span>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Pattern */}
      <div className="absolute bottom-0 left-0 w-full h-1 gold-gradient"></div>
    </footer>
  );
};

export default Footer;