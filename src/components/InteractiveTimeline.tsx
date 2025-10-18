import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { milestones, getCategoryColor, getCategoryIcon } from '@/data/milestones';

interface TimelineItemProps {
  milestone: typeof milestones[0];
  index: number;
  isVisible: boolean;
  isActive: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ milestone, index, isVisible, isActive }) => {
  const isLeft = index % 2 === 0;
  
  return (
    <div 
      className={`timeline-item relative mb-16 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${isActive ? 'scale-105 z-10' : 'scale-100'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent/30 to-accent/10"></div>
      
      {/* Timeline Dot */}
      <div className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-2 w-6 h-6 rounded-full border-4 border-background transition-all duration-500 ${
        isActive ? `${getCategoryColor(milestone.category)} shadow-lg scale-125` : 'bg-accent/60'
      }`}>
      </div>
      
      {/* Content */}
      <div className={`flex ${isLeft ? 'justify-end pr-16' : 'justify-start pl-16'}`}>
        <div className={`w-full max-w-md ${isLeft ? 'text-right' : 'text-left'}`}>
          {/* Content Card */}
          <Card className={`bg-background/95 backdrop-blur-sm transition-all duration-500 hover:shadow-elegant ${
            isActive 
              ? 'border-accent/60 shadow-lg ring-2 ring-accent/30' 
              : 'border-accent/20 hover:border-accent/40'
          }`}>
            <CardContent className="p-6">
              {/* Category Icon */}
              <div className={`text-2xl mb-3 ${isLeft ? 'text-right' : 'text-left'}`}>
                {getCategoryIcon(milestone.category)}
              </div>
              
              {/* Title */}
              <h3 className={`font-serif text-xl text-foreground mb-2 transition-colors duration-300 ${
                isActive ? 'text-accent' : ''
              }`}>
                {milestone.title}
              </h3>
              
              {/* Kannada Title */}
              <p className={`text-secondary font-medium mb-3 ${isLeft ? 'text-right' : 'text-left'}`}>
                {milestone.kannada}
              </p>
              
              {/* Description */}
              <p className={`text-muted-foreground leading-relaxed ${isLeft ? 'text-right' : 'text-left'}`}>
                {milestone.description}
              </p>
              
              {/* Category Badge */}
              <div className={`mt-4 ${isLeft ? 'text-right' : 'text-left'}`}>
                <Badge 
                  variant="secondary" 
                  className={`${getCategoryColor(milestone.category)} text-destructive-foreground capitalize font-medium`}
                >
                  {milestone.category.replace('_', ' ')}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const InteractiveTimeline: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number>(0);
  const [visibleYearStart, setVisibleYearStart] = useState<number>(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState<boolean>(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);
  
  const YEARS_TO_SHOW = 5;
  const AUTO_SCROLL_DELAY = 3000; // 3 seconds
  
  // Function to scroll to a specific item
  const scrollToItem = (index: number) => {
    const targetRef = itemRefs.current[index];
    if (targetRef && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const containerRect = container.getBoundingClientRect();
      const targetRect = targetRef.getBoundingClientRect();
      
      const scrollTop = targetRect.top - containerRect.top + container.scrollTop - containerRect.height / 2 + targetRect.height / 2;
      
      container.scrollTo({
        top: scrollTop,
        behavior: 'smooth'
      });
    }
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling) return;

    autoScrollInterval.current = setInterval(() => {
      setActiveItem(prevActive => {
        const nextIndex = (prevActive + 1) % milestones.length;
        
        // Update visible years with smoother transition
        const currentYearGroup = Math.floor(prevActive / YEARS_TO_SHOW);
        const nextYearGroup = Math.floor(nextIndex / YEARS_TO_SHOW);
        
        if (currentYearGroup !== nextYearGroup) {
          // Smooth transition to next year group
          const newYearStart = nextYearGroup * YEARS_TO_SHOW;
          setTimeout(() => {
            setVisibleYearStart(newYearStart);
          }, 200);
        }
        
        // Scroll to next item
        setTimeout(() => scrollToItem(nextIndex), 50);
        
        return nextIndex;
      });
    }, AUTO_SCROLL_DELAY);

    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
    };
  }, [isAutoScrolling]);

  // Manual scroll detection
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const containerRect = scrollContainer.getBoundingClientRect();
      const containerCenter = containerRect.top + containerRect.height / 2;
      
      let closestIndex = 0;
      let closestDistance = Infinity;
      
      itemRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const itemCenter = rect.top + rect.height / 2;
          const distance = Math.abs(itemCenter - containerCenter);
          
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        }
      });
      
      setActiveItem(closestIndex);
      
      // Update visible years based on active item
      const yearGroup = Math.floor(closestIndex / YEARS_TO_SHOW);
      const newYearStart = yearGroup * YEARS_TO_SHOW;
      setVisibleYearStart(newYearStart);
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif text-foreground mb-4">
            ಇತಿಹಾಸ | Our Journey So Far
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Journey through decades of entrepreneurial excellence and cultural preservation
          </p>
          <div className="w-32 veena-divider mx-auto"></div>
        </div>
        
        {/* Fixed Height Scrollable Timeline Container */}
        <div className="max-w-4xl mx-auto h-[600px] timeline-container-mobile relative">
          <div 
            ref={scrollContainerRef}
            className="h-full overflow-y-auto scrollbar-hide scroll-smooth pointer-events-none"
            style={{
              scrollSnapType: 'y mandatory',
              scrollBehavior: 'smooth'
            }}
          >
            {/* Timeline Content */}
            <div className="relative py-8">
              {/* Central Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 top-0 bottom-0 bg-gradient-to-b from-accent via-accent/60 to-accent/20"></div>
              
              {/* Timeline Items */}
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  ref={el => itemRefs.current[index] = el}
                  data-index={index}
                  className="scroll-snap-center"
                  style={{ scrollSnapAlign: 'center' }}
                >
                  <TimelineItem
                    milestone={milestone}
                    index={index}
                    isVisible={true}
                    isActive={activeItem === index}
                  />
                </div>
              ))}
              
              {/* Bottom padding for last item */}
              <div className="h-32"></div>
            </div>
          </div>
          
          {/* Year Navigation with Arrow Controls */}
          <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 flex flex-col items-center timeline-scroll-indicators">
            {/* Up Arrow */}
            <button
              onClick={() => {
                setIsAutoScrolling(false);
                const prevIndex = activeItem > 0 ? activeItem - 1 : milestones.length - 1;
                scrollToItem(prevIndex);
                setActiveItem(prevIndex);
                // Resume auto-scroll after 3 seconds
                setTimeout(() => setIsAutoScrolling(true), 3000);
              }}
              className="mb-2 p-1 rounded-full bg-background/80 border border-accent/30 hover:bg-accent/10 hover:border-accent/50 transition-all duration-300"
              aria-label="Previous milestone"
            >
              <ChevronUp className="w-4 h-4 text-accent" />
            </button>

            {/* Year Navigation Indicators - Only 5 visible */}
            <div className="flex flex-col space-y-3 transition-all duration-700 ease-in-out">
              {milestones.slice(visibleYearStart, visibleYearStart + YEARS_TO_SHOW).map((milestone, index) => {
                const actualIndex = visibleYearStart + index;
                return (
                  <button
                    key={actualIndex}
                    onClick={() => {
                      setIsAutoScrolling(false);
                      scrollToItem(actualIndex);
                      setActiveItem(actualIndex);
                      // Resume auto-scroll after 3 seconds
                      setTimeout(() => setIsAutoScrolling(true), 3000);
                    }}
                    className={`px-2 py-1 text-xs font-mono font-bold transition-all duration-500 rounded border transform ${
                      activeItem === actualIndex 
                        ? 'bg-accent text-background border-accent shadow-md scale-110' 
                        : 'bg-background/80 text-accent/70 border-accent/30 hover:bg-accent/10 hover:text-accent hover:border-accent/50'
                    }`}
                    style={{
                      transitionDelay: `${index * 100}ms`,
                      animation: `fadeInUp 0.6s ease-out ${index * 100}ms both`
                    }}
                    aria-label={`Go to milestone ${milestone.year}`}
                  >
                    {milestone.year}
                  </button>
                );
              })}
            </div>

            {/* Down Arrow */}
            <button
              onClick={() => {
                setIsAutoScrolling(false);
                const nextIndex = (activeItem + 1) % milestones.length;
                scrollToItem(nextIndex);
                setActiveItem(nextIndex);
                // Resume auto-scroll after 3 seconds
                setTimeout(() => setIsAutoScrolling(true), 3000);
              }}
              className="mt-2 p-1 rounded-full bg-background/80 border border-accent/30 hover:bg-accent/10 hover:border-accent/50 transition-all duration-300"
              aria-label="Next milestone"
            >
              <ChevronDown className="w-4 h-4 text-accent" />
            </button>
          </div>
          

        </div>
      </div>
    </section>
  );
};

export default InteractiveTimeline;
