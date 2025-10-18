import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users } from 'lucide-react';
import { ASSETS } from '@/lib/assets';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden md:pt-0 pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={ASSETS.images.heroConcert}
          alt="Classical Concert at JSS Sangeetha Sabha"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-70"></div>
        <div className="absolute inset-0 mandala-bg"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="font-serif font-bold text-hero text-foreground mb-6 leading-tight">
            <span className="block text-secondary mb-2">ಸಂಗೀತ ಸಂಭ್ರಮ</span>
            <span className="block">Celebrating Classical Excellence</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Immerse yourself in the timeless tradition of Carnatic classical music. 
            Experience the divine harmony where art meets devotion in the heart of Mysuru.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="red-gradient text-primary-foreground hover:shadow-glow transition-bounce px-8 py-4 text-lg"
            >
              <Calendar className="mr-2 h-5 w-5" />
              View Upcoming Events
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-bounce px-8 py-4 text-lg"
            >
              <Users className="mr-2 h-5 w-5" />
              Join Community
            </Button>
          </div>

          {/* Upcoming Event Highlight */}
          <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 shadow-card border border-secondary/20 max-w-2xl mx-auto">
            <div className="flex items-center justify-center text-secondary mb-3">
              <MapPin className="mr-2 h-5 w-5" />
              <span className="font-medium">Next Performance</span>
            </div>
            <h3 className="font-serif text-xl text-foreground mb-2">
              Raga Yaman - An Evening of Devotion
            </h3>
            <p className="text-muted-foreground mb-3">
              Featuring Ustad Rashid Khan & Pandit Jasraj Academy
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <span className="flex items-center text-secondary">
                <Calendar className="mr-1 h-4 w-4" />
                March 15, 2024
              </span>
              <span className="text-muted-foreground">7:00 PM</span>
              <span className="text-primary font-medium">₹500 onwards</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Veena Divider */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-64">
        <div className="veena-divider"></div>
      </div>
    </section>
  );
};

export default Hero;