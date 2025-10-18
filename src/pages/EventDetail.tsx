import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Calendar, Clock, MapPin, Users, Heart, Share2, 
  Music, Star, ArrowLeft, Ticket, Phone, Mail,
  Facebook, Twitter, Instagram, Youtube
} from 'lucide-react';
import { ASSETS } from '@/lib/assets';

// Sample event data - in a real app this would come from an API
const eventData = {
  '1': {
    id: 1,
    title: "ಮಾಲವಗೌಳ ರಾಗ ಸಂಧ್ಯೆ",
    englishTitle: "Malavagowla Raga Evening",
    artist: "Vidwan Dr. R. K. Srikantan",
    date: "2024-08-15",
    time: "6:30 PM",
    venue: "JSS Sangeetha Sabha Auditorium",
    price: "₹500",
    type: "Classical Concert",
    image: ASSETS.images.eventPerformance,
    description: "An enchanting evening dedicated to the beautiful Malavagowla raga, presented by the renowned Vidwan Dr. R. K. Srikantan. This performance will showcase the depth and beauty of this melodious raga through various compositions.",
    kannadaDescription: "ಮಾಲವಗೌಳ ರಾಗದ ಸೌಂದರ್ಯವನ್ನು ಪ್ರಸ್ತುತಪಡಿಸುವ ಒಂದು ಮೋಹಕ ಸಂಧ್ಯೆ. ವಿದ್ವಾನ್ ಡಾ. ಆರ್. ಕೆ. ಶ್ರೀಕಾಂತನ್ ಅವರ ಪ್ರಸ್ತುತಿ.",
    duration: "3 hours (including intermission)",
    seatingCapacity: "500",
    accompanists: [
      "Vidwan Mysore Manjunath - Violin",
      "Vidwan Patri Satish Kumar - Mridangam",
      "Sri Anoor Ananthakrishna Sharma - Tabla"
    ],
    program: [
      "Varnam in Malavagowla",
      "Kriti: Endaro Mahanubhavulu - Malavagowla - Tyagaraja",
      "Kriti: Meru Samana - Malavagowla - Tyagaraja",
      "Ragam Tanam Pallavi in Malavagowla",
      "Tillana in Malavagowla"
    ],
    ticketTypes: [
      { type: "Premium", price: "₹800", description: "Front 5 rows with complimentary program notes" },
      { type: "Standard", price: "₹500", description: "General seating" },
      { type: "Student", price: "₹250", description: "With valid student ID" },
      { type: "Senior Citizen", price: "₹300", description: "Above 60 years with ID proof" }
    ]
  },
  '2': {
    id: 2,
    title: "ಕೀರ್ತನೆ ಸಂಭ್ರಮ",
    englishTitle: "Bhajan Festival",
    artist: "Smt. Sudha Raghunathan",
    date: "2024-08-22",
    time: "7:00 PM",
    venue: "JSS Sangeetha Sabha Auditorium",
    price: "₹400",
    type: "Devotional Concert",
    image: ASSETS.images.veenaDetail,
    description: "A soul-stirring evening of devotional music featuring the melodious voice of Smt. Sudha Raghunathan. Experience the divine through traditional bhajans and kirtans.",
    kannadaDescription: "ಶ್ರೀಮತಿ ಸುಧಾ ರಘುನಾಥನ್ ಅವರ ಮಧುರ ಸ್ವರದಲ್ಲಿ ಭಕ್ತಿಗೀತೆಗಳ ಸಂಭ್ರಮ.",
    duration: "2.5 hours",
    seatingCapacity: "500",
    accompanists: [
      "Vidwan H. N. Bhaskar - Violin",
      "Vidwan B. C. Manjunath - Mridangam",
      "Smt. Sukanya Ramgopal - Harmonium"
    ],
    program: [
      "Ganesha Pancharatnam",
      "Bhajans on Lord Krishna",
      "Meera Bhajans",
      "Tyagaraja Kritis in devotional style",
      "Closing with Mangalam"
    ],
    ticketTypes: [
      { type: "Premium", price: "₹600", description: "Front 5 rows with complimentary prasadam" },
      { type: "Standard", price: "₹400", description: "General seating" },
      { type: "Family Pack", price: "₹1200", description: "4 tickets with family seating" },
      { type: "Student", price: "₹200", description: "With valid student ID" }
    ]
  },
  '3': {
    id: 3,
    title: "ತಾಳ ವಾದ್ಯ ಪ್ರದರ್ಶನ",
    englishTitle: "Percussion Ensemble",
    artist: "Vidwan Patri Satish Kumar",
    date: "2024-08-29",
    time: "6:00 PM",
    venue: "JSS Sangeetha Sabha Auditorium",
    price: "₹350",
    type: "Instrumental Concert",
    image: ASSETS.images.heroConcert,
    description: "A dynamic showcase of South Indian percussion instruments led by the master percussionist Vidwan Patri Satish Kumar. Experience the rhythmic brilliance of mridangam, tabla, and other traditional instruments.",
    kannadaDescription: "ವಿದ್ವಾನ್ ಪತ್ರಿ ಸತೀಶ್ ಕುಮಾರ್ ಅವರ ನೇತೃತ್ವದಲ್ಲಿ ತಾಳವಾದ್ಯಗಳ ಅದ್ಭುತ ಪ್ರದರ್ಶನ.",
    duration: "2 hours",
    seatingCapacity: "500",
    accompanists: [
      "Vidwan Mysore Nagaraj - Mridangam",
      "Sri Anoor Ananthakrishna Sharma - Tabla",
      "Sri Kumbakonam Rajappa - Kanjira",
      "Sri Giridhar Udupa - Ghatam"
    ],
    program: [
      "Solo Mridangam - Adi Tala variations",
      "Tabla Solo - Classical compositions",
      "Kanjira & Ghatam duet",
      "Grand ensemble finale",
      "Interactive session with audience"
    ],
    ticketTypes: [
      { type: "Premium", price: "₹500", description: "Front 3 rows with meet & greet" },
      { type: "Standard", price: "₹350", description: "General seating" },
      { type: "Student", price: "₹150", description: "With valid student ID" },
      { type: "Music Teacher", price: "₹200", description: "Special rate for music educators" }
    ]
  }
};

const EventDetail = () => {
  const { eventId } = useParams();
  const event = eventData[eventId as keyof typeof eventData];

  if (!event) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-serif text-foreground mb-4">Event Not Found</h1>
          <Link to="/events">
            <Button variant="outline">Back to Events</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-background via-accent/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link to="/events" className="inline-flex items-center text-accent hover:text-secondary mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Events
            </Link>
            
            <div className="text-center">
              <Badge className="bg-destructive text-destructive-foreground mb-4">
                {event.type}
              </Badge>
              <h1 className="text-4xl font-bold text-foreground mb-4 font-serif">
                {event.title}
              </h1>
              <h2 className="text-2xl text-secondary mb-6 font-serif">
                {event.englishTitle}
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Featuring {event.artist}
              </p>
              <div className="w-32 veena-divider mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Image Section */}
      <section className="py-12 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-elegant">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Event Info Card */}
              <Card className="bg-background border-accent/20">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-foreground">
                    Event Details | ಕಾರ್ಯಕ್ರಮದ ವಿವರಗಳು
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-5 h-5 mr-3 text-secondary" />
                      <div>
                        <p className="font-medium">Date</p>
                        <p>{new Date(event.date).toLocaleDateString('en-IN', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-5 h-5 mr-3 text-secondary" />
                      <div>
                        <p className="font-medium">Time</p>
                        <p>{event.time}</p>
                        <p className="text-sm">Duration: {event.duration}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-5 h-5 mr-3 text-secondary" />
                      <div>
                        <p className="font-medium">Venue</p>
                        <p>{event.venue}</p>
                        <p className="text-sm">Capacity: {event.seatingCapacity}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-muted-foreground">
                      <Music className="w-5 h-5 mr-3 text-secondary" />
                      <div>
                        <p className="font-medium">Main Artist</p>
                        <p>{event.artist}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">About This Performance</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {event.description}
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm italic">
                      {event.kannadaDescription}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Program Details */}
              <Card className="bg-background border-accent/20">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-foreground">
                    Program | ಕಾರ್ಯಕ್ರಮ
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Repertoire</h4>
                      <ul className="space-y-2">
                        {event.program.map((item, index) => (
                          <li key={index} className="text-muted-foreground text-sm flex items-start">
                            <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Accompanying Artists</h4>
                      <ul className="space-y-2">
                        {event.accompanists.map((artist, index) => (
                          <li key={index} className="text-muted-foreground text-sm flex items-start">
                            <Users className="w-4 h-4 mt-0.5 mr-2 text-secondary flex-shrink-0" />
                            {artist}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Sidebar */}
            <div className="space-y-6">
              
              {/* Ticket Booking Card */}
              <Card className="bg-background border-accent/20 sticky top-24">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-foreground text-center">
                    Book Tickets | ಟಿಕೆಟ್ ಬುಕಿಂಗ್
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {event.ticketTypes.map((ticket, index) => (
                    <div key={index} className="border border-accent/20 rounded-lg p-4 hover:border-accent/40 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-foreground">{ticket.type}</h4>
                        <span className="text-lg font-bold text-primary">{ticket.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{ticket.description}</p>
                      <Button 
                        size="sm" 
                        className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground"
                      >
                        Select {ticket.type}
                      </Button>
                    </div>
                  ))}
                  
                  <div className="border-t border-accent/20 pt-4 mt-6">
                    <h4 className="font-semibold text-foreground mb-3">Contact for Booking</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Phone className="w-4 h-4 mr-2 text-secondary" />
                        +91 821 234 5679
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Mail className="w-4 h-4 mr-2 text-secondary" />
                        concerts@jsssangeethasabha.org
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 pt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Heart className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventDetail;
