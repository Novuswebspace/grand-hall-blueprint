import { useEffect, useState } from 'react';
import { ASSETS } from '@/lib/assets';

const PreLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // 3.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-background flex items-center justify-center transition-opacity duration-500 ${
        !isLoading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8 relative">
          <img 
            src={ASSETS.logos.jssLogo}
            alt="JSS Logo"
            className="w-24 h-24 mx-auto object-contain animate-float"
          />
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16">
            <div className="veena-divider"></div>
          </div>
        </div>

        {/* Animated Text */}
        <div className="space-y-2 overflow-hidden">
          <h1 className="font-serif text-2xl text-foreground animate-slideUp">
            JSS Sangeetha Sabha
          </h1>
          <p className="text-lg text-secondary animate-slideUp animation-delay-200">
            ಸಂಗೀತ ಸಂಭ್ರಮ
          </p>
        </div>

        {/* Animated Loading Indicator */}
        <div className="mt-8 flex justify-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-music-beat"></div>
          <div className="w-2 h-2 rounded-full bg-accent animate-music-beat animation-delay-100"></div>
          <div className="w-2 h-2 rounded-full bg-accent animate-music-beat animation-delay-200"></div>
          <div className="w-2 h-2 rounded-full bg-accent animate-music-beat animation-delay-300"></div>
          <div className="w-2 h-2 rounded-full bg-accent animate-music-beat animation-delay-400"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-destructive/5 rounded-full blur-3xl animate-pulse animation-delay-200"></div>
        </div>

        {/* Mandala Pattern */}
        <div className="absolute inset-0 mandala-bg opacity-5"></div>
      </div>
    </div>
  );
};

export default PreLoader;
