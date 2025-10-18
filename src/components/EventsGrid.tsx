import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '@/lib/assets';

const EventsGrid = () => {
  const events = [
    {
      id: 1,
      title: "Raga Bhairav - Dawn Concert",
      kannada: "ರಾಗ ಭೈರವ್",
      artist: "Pandit Venkatesh Kumar",
      date: "March 22, 2024",
      time: "6:00 AM",
      venue: "Main Auditorium",
      price: "₹300",
      type: "Morning Raga",
      image: ASSETS.images.eventPerformance,
      featured: true
    },
    {
      id: 2,
      title: "Veena Recital - Mysore Tradition",
      kannada: "ವೀಣಾ ಸಂಗೀತ",
      artist: "Vidushi Jayanthi Kumaresh",
      date: "March 28, 2024",
      time: "7:00 PM",
      venue: "Heritage Hall",
      price: "₹500",
      type: "Solo Performance",
      image: ASSETS.images.eventPerformance
    },
    {
      id: 3,
      title: "Thyagaraja Aradhana Special",
      kannada: "ತ್ಯಾಗರಾಜ ಆರಾಧನೆ",
      artist: "Multiple Artists",
      date: "April 5, 2024",
      time: "10:00 AM",
      venue: "Open Air Theatre",
      price: "Free",
      type: "Festival",
      image: ASSETS.images.eventPerformance,
      featured: true
    },
    {
      id: 4,
      title: "Jugalbandi - Sitar & Flute",
      kannada: "ಜುಗಲ್ಬಂದಿ",
      artist: "Pt. Ravi Shankar & Pt. Hariprasad Chaurasia",
      date: "April 12, 2024",
      time: "7:30 PM",
      venue: "Main Auditorium",
      price: "₹750",
      type: "Collaboration",
      image: ASSETS.images.eventPerformance
    },
    {
      id: 5,
      title: "Lecture Demo - Raga Structures",
      kannada: "ರಾಗ ವಿವರಣೆ",
      artist: "Dr. Mysore Manjunath",
      date: "April 18, 2024",
      time: "4:00 PM",
      venue: "Seminar Hall",
      price: "₹200",
      type: "Educational",
      image: ASSETS.images.eventPerformance
    },
    {
      id: 6,
      title: "Youth Concert - Rising Stars",
      kannada: "ಯುವ ಕಲಾವಿದರು",
      artist: "JSS Academy Students",
      date: "April 25, 2024",
      time: "6:00 PM",
      venue: "Heritage Hall",
      price: "₹150",
      type: "Student Performance",
      image: ASSETS.images.eventPerformance
    }
  ];

  return (
    <section id="events" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-heading text-foreground mb-4">
            Upcoming Programs
          </h2>
          <p className="text-subheading text-secondary font-serif mb-2">ಮುಂಬರುವ ಕಾರ್ಯಕ್ರಮಗಳು</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the divine realm of classical music through our carefully curated performances,
            featuring renowned artists and emerging talents.
          </p>
          <div className="w-32 veena-divider mx-auto mt-6"></div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card 
              key={event.id} 
              className={`group hover:shadow-elegant hover:-translate-y-2 transition-bounce bg-card border-secondary/20 overflow-hidden ${
                event.featured ? 'ring-2 ring-secondary/30' : ''
              }`}
            >
              {/* Event Image */}
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                />
                {/* Date Badge */}
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground rounded-full w-16 h-16 flex flex-col items-center justify-center shadow-card">
                  <span className="text-xs font-medium">
                    {event.date.split(' ')[1].replace(',', '')}
                  </span>
                  <span className="text-lg font-bold">
                    {event.date.split(' ')[1].replace(',', '')}
                  </span>
                </div>
                {/* Featured Badge */}
                {event.featured && (
                  <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
                {/* Type Badge */}
                <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-sm">
                  {event.type}
                </div>
              </div>

              <CardContent className="p-6">
                {/* Event Title */}
                <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-secondary transition-smooth">
                  {event.title}
                </h3>
                <p className="text-secondary text-sm mb-3">{event.kannada}</p>

                {/* Artist */}
                <p className="text-muted-foreground font-medium mb-4">{event.artist}</p>

                {/* Event Details */}
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4 text-secondary" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="mr-2 h-4 w-4 text-secondary" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="mr-2 h-4 w-4 text-secondary" />
                    {event.venue}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">{event.price}</span>
                  <Link to={`/events/${event.id}`}>
                    <Button 
                      size="sm" 
                      className="red-gradient text-primary-foreground hover:shadow-glow transition-bounce"
                    >
                      <Users className="mr-1 h-4 w-4" />
                      Book Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Events CTA */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-bounce px-8"
          >
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsGrid;