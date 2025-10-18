import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Calendar, Play } from 'lucide-react';
import { ASSETS } from '@/lib/assets';

const ConferenceArchive = () => {
  const [selectedYear, setSelectedYear] = useState('2023');

  const archiveData = {
    '2023': {
      events: 24,
      description: 'Diamond Jubilee Celebrations',
      featuredEvents: [
        {
          id: 1,
          title: 'Ranjani-Gayatri Jugalbandi',
          type: 'Concert',
          date: 'December 15, 2023',
          image: ASSETS.images.eventPerformance,
          duration: '2h 30m'
        },
        {
          id: 2,
          title: 'Veena Maestro Series',
          type: 'Recital',
          date: 'November 20, 2023',
          image: ASSETS.images.veenaDetail,
          duration: '1h 45m'
        },
        {
          id: 3,
          title: 'Traditional Percussion Workshop',
          type: 'Workshop',
          date: 'October 10, 2023',
          image: ASSETS.images.heroConcert,
          duration: '3h 15m'
        }
      ]
    },
    '2022': {
      events: 20,
      description: 'Post-Pandemic Revival Series',
      featuredEvents: [
        {
          id: 1,
          title: 'Classical Revival Concert',
          type: 'Concert',
          date: 'December 20, 2022',
          image: ASSETS.images.heroConcert,
          duration: '2h 15m'
        },
        {
          id: 2,
          title: 'Youth Talent Showcase',
          type: 'Festival',
          date: 'August 15, 2022',
          image: ASSETS.images.eventPerformance,
          duration: '4h 00m'
        }
      ]
    },
    '2021': {
      events: 12,
      description: 'Virtual Concert Initiative',
      featuredEvents: [
        {
          id: 1,
          title: 'Digital Music Festival',
          type: 'Virtual',
          date: 'March 21, 2021',
          image: ASSETS.images.veenaDetail,
          duration: '6h 30m'
        }
      ]
    },
    '2020': {
      events: 8,
      description: 'Heritage Documentation Project',
      featuredEvents: [
        {
          id: 1,
          title: 'Heritage Concert Series',
          type: 'Concert',
          date: 'February 14, 2020',
          image: ASSETS.images.heroConcert,
          duration: '3h 00m'
        }
      ]
    },
    '2019': {
      events: 28,
      description: 'International Music Festival',
      featuredEvents: [
        {
          id: 1,
          title: 'World Music Confluence',
          type: 'Festival',
          date: 'November 15, 2019',
          image: ASSETS.images.eventPerformance,
          duration: '8h 00m'
        }
      ]
    },
    '2018': {
      events: 22,
      description: 'Youth Talent Development',
      featuredEvents: [
        {
          id: 1,
          title: 'Emerging Artists Platform',
          type: 'Concert',
          date: 'September 10, 2018',
          image: ASSETS.images.veenaDetail,
          duration: '2h 45m'
        }
      ]
    },
    '2017': {
      events: 25,
      description: 'Classical Music Workshop',
      featuredEvents: [
        {
          id: 1,
          title: 'Master Class Series',
          type: 'Workshop',
          date: 'July 25, 2017',
          image: ASSETS.images.heroConcert,
          duration: '5h 30m'
        }
      ]
    }
  };

  const years = Object.keys(archiveData).sort((a, b) => parseInt(b) - parseInt(a));
  const currentArchive = archiveData[selectedYear];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Concert': return 'bg-destructive text-accent';
      case 'Recital': return 'bg-accent text-background';
      case 'Workshop': return 'bg-secondary text-background';
      case 'Festival': return 'bg-primary text-primary-foreground';
      case 'Virtual': return 'bg-muted text-foreground';
      default: return 'bg-muted text-foreground';
    }
  };

  const scrollYears = (direction: 'left' | 'right') => {
    const currentIndex = years.indexOf(selectedYear);
    if (direction === 'left' && currentIndex > 0) {
      setSelectedYear(years[currentIndex - 1]);
    } else if (direction === 'right' && currentIndex < years.length - 1) {
      setSelectedYear(years[currentIndex + 1]);
    }
  };

  return (
    <section className="py-16 bg-accent/5">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-heading text-foreground mb-4">
            Conference Archive
          </h2>
          <p className="text-subheading text-secondary font-serif mb-2">ಸಮ್ಮೇಳನ ಸಂಗ್ರಹಾಲಯ</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Journey through decades of musical excellence. Explore our rich collection of
            concerts, lectures, and cultural events that have shaped our legacy.
          </p>
          <div className="w-32 veena-divider mx-auto mt-6"></div>
        </div>

        {/* Year Navigation */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-8">
            <h3 className="font-serif text-xl text-foreground mr-6">Browse by Year</h3>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => scrollYears('left')}
                disabled={years.indexOf(selectedYear) === 0}
                className="p-2 border-accent text-accent hover:bg-accent hover:text-background rounded-full"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => scrollYears('right')}
                disabled={years.indexOf(selectedYear) === years.length - 1}
                className="p-2 border-accent text-accent hover:bg-accent hover:text-background rounded-full"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Year Cards */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-6xl mx-auto">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`relative p-4 lg:p-6 rounded-lg transition-all duration-300 ${
                  selectedYear === year
                    ? 'bg-destructive text-accent shadow-elegant transform scale-105'
                    : 'bg-background text-foreground hover:bg-muted border border-accent/20'
                }`}
              >
                <div className="text-center">
                  <h4 className={`text-xl lg:text-2xl font-bold font-mono mb-1 lg:mb-2 ${
                    selectedYear === year ? 'text-accent' : 'text-foreground'
                  }`}>
                    {year}
                  </h4>
                  <p className={`text-xs lg:text-sm font-medium mb-1 ${
                    selectedYear === year ? 'text-accent' : 'text-muted-foreground'
                  }`}>
                    {archiveData[year].events} Events
                  </p>
                  <p className={`text-xs hidden lg:block ${
                    selectedYear === year ? 'text-accent/80' : 'text-muted-foreground'
                  }`}>
                    {archiveData[year].description}
                  </p>
                </div>
                {selectedYear === year && (
                  <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 to-accent/20 rounded-lg -z-10"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Year Archive */}
        <div className="mb-8">
          <h3 className="font-serif text-2xl text-foreground mb-8 text-center">
            {selectedYear} Archive
          </h3>

          {/* Featured Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentArchive.featuredEvents.map((event) => (
              <Card 
                key={event.id} 
                className="group overflow-hidden hover:shadow-elegant hover:-translate-y-2 transition-bounce bg-background border-accent/20"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                  />
                  
                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button 
                      className="bg-destructive hover:bg-destructive/90 text-accent rounded-full p-4"
                    >
                      <Play className="w-6 h-6" />
                    </Button>
                  </div>

                  {/* Type Badge */}
                  <Badge 
                    className={`absolute top-4 right-4 ${getTypeColor(event.type)} font-medium`}
                  >
                    {event.type}
                  </Badge>

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-sm font-mono">
                    {event.duration}
                  </div>
                </div>

                <CardContent className="p-6">
                  <h4 className="font-serif text-lg text-foreground mb-2 group-hover:text-secondary transition-smooth leading-tight">
                    {event.title}
                  </h4>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Calendar className="mr-2 h-4 w-4 text-accent" />
                    {event.date}
                  </div>

                  <div className="flex items-center justify-between">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-accent text-accent hover:bg-accent hover:text-background"
                    >
                      <Play className="w-4 h-4 mr-1" />
                      Watch
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-muted-foreground hover:text-secondary"
                    >
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* View Complete Archive CTA */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-bounce px-8"
          >
            View Complete Archive
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConferenceArchive;