import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EventsGrid from '@/components/EventsGrid';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock, Users, Filter, Search, Music } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '@/lib/assets';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "ಮಾಲವಗೌಳ ರಾಗ ಸಂಧ್ಯೆ | Malavagowla Raga Evening",
      artist: "Vidwan Dr. R. K. Srikantan",
      date: "2024-08-15",
      time: "6:30 PM",
      venue: "JSS Sangeetha Sabha Auditorium",
      price: "₹500",
      image: ASSETS.gallery.performances.dsc1548
    },
    {
      id: 2,
      title: "ಕೀರ್ತನೆ ಸಂಭ್ರಮ | Bhajan Festival",
      artist: "Smt. Sudha Raghunathan",
      date: "2024-08-22",
      time: "7:00 PM",
      venue: "JSS Sangeetha Sabha Auditorium",
      price: "₹400",
      image: ASSETS.gallery.events.ss2201
    },
    {
      id: 3,
      title: "ತಾಳ ವಾದ್ಯ ಪ್ರದರ್ಶನ | Percussion Ensemble",
      artist: "Vidwan Patri Satish Kumar",
      date: "2024-08-29",
      time: "6:00 PM",
      venue: "JSS Sangeetha Sabha Auditorium",
      price: "₹350",
      image: ASSETS.gallery.performances.dsc1567
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-background via-accent/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-6 font-serif">
              ಕಾರ್ಯಕ್ರಮಗಳು | Upcoming Events
            </h1>
            <p className="text-xl text-muted-foreground font-sans leading-relaxed mb-8">
              Experience the divine melodies and rhythmic brilliance of Karnataka's finest classical musicians
            </p>
            <div className="w-32 veena-divider mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-foreground mb-4">
              Featured Events
            </h2>
            <div className="w-24 veena-divider mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-background border-accent/20">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-destructive text-accent font-bold px-3 py-2 rounded-full text-sm">
                    {event.price}
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-serif leading-tight text-foreground group-hover:text-destructive transition-colors">
                    {event.title}
                  </CardTitle>
                  <p className="text-muted-foreground font-sans font-medium">
                    {event.artist}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2 text-accent" />
                    {new Date(event.date).toLocaleDateString('en-IN', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2 text-accent" />
                    {event.time}
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2 text-accent" />
                    {event.venue}
                  </div>
                  
                  <Link to={`/events/${event.id}`} className="block">
                    <Button className="w-full mt-4 bg-destructive hover:bg-destructive/90 text-accent font-semibold">
                      <Music className="w-4 h-4 mr-2" />
                      Book Tickets
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About JSS Sangeetha Sabha */}
      <section className="py-20 bg-gradient-to-b from-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6 font-serif">
                ಜೆಎಸ್ಎಸ್ ಸಂಗೀತ ಸಭಾ ಟ್ರಸ್ಟ್ | About JSS Sangeetha Sabha Trust
              </h2>
              <div className="w-24 h-1 bg-destructive mx-auto mb-8"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-background/50 backdrop-blur-sm rounded-lg p-8 border border-accent/20">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-4 flex items-center">
                    <Calendar className="w-6 h-6 mr-3 text-destructive" />
                    ಸ್ಥಾಪನೆ | Foundation
                  </h3>
                  <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                    JSS Sangeetha Sabha Trust was established in <strong className="text-destructive">2001</strong> under 
                    the able guidance of <strong className="text-foreground">His Holiness Jagadguru Sri Shivarathri 
                    Deshikendra Mahaswamiji</strong>.
                  </p>
                  <p className="text-muted-foreground font-sans leading-relaxed">
                    The organization operates under the broader umbrella of JSS Mahavidyapeetha and is 
                    connected to the thousand-year-old Sri Suttur Math tradition.
                  </p>
                </div>

                <div className="bg-background/50 backdrop-blur-sm rounded-lg p-8 border border-accent/20">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-4 flex items-center">
                    <Music className="w-6 h-6 mr-3 text-destructive" />
                    ಉದ್ದೇಶ | Mission
                  </h3>
                  <ul className="space-y-3 text-muted-foreground font-sans">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Popularizing and encouraging classical music
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Providing performance opportunities for established and emerging artists
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Preserving and promoting the rich musical heritage of Karnataka
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Conducting music workshops and competitions for youth development
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-background/50 backdrop-blur-sm rounded-lg p-8 border border-accent/20">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-4 flex items-center">
                    <MapPin className="w-6 h-6 mr-3 text-destructive" />
                    ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆ | Cultural Heritage
                  </h3>
                  <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                    The Sabha was founded to address the changing musical landscape in Mysuru. Historically, 
                    Mysuru has been the <strong className="text-foreground">Cultural Heritage of Karnataka</strong>, 
                    home to numerous renowned musicians, artists, dancers, and authors.
                  </p>
                  <p className="text-muted-foreground font-sans leading-relaxed">
                    Great musicians from Mysuru included Sri Mysuru Sadashivaraya, Veene Sheshanna, 
                    Bidaram Krishnappa, and Mysuru Vasudevacharya, who gained international acclaim.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-destructive/10 to-accent/20 rounded-lg p-8 border border-destructive/20">
                  <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                    ಯುವ ವಿಭಾಗ | Youth Wing
                  </h3>
                  <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                    The Sabha has established a separate youth wing to encourage youngsters, organizing 
                    music workshops and competitions to inculcate interest in classical music among youth.
                  </p>
                  <div className="bg-background/30 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground font-sans">
                      <strong className="text-destructive">Over 500 concerts</strong> organized to date, 
                      featuring artists of national and international recognition.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground font-sans italic">
                "Continuing the legacy of promoting classical music and cultural education for all communities"
              </p>
              <p className="text-sm text-muted-foreground font-sans mt-2">
                — In the tradition of His Holiness Jagadguru Dr. Sri Shivarathri Rajendra Mahaswamiji
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;