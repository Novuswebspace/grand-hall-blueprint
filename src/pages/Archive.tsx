import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Download, Play, Volume2 } from 'lucide-react';

const Archive = () => {
  const archiveYears = [
    {
      year: "2023",
      events: [
        {
          title: "ಮಹಾ ಸಂಗೀತ ಸಮಾರಂಭ | Grand Music Festival",
          date: "December 2023",
          description: "A magnificent celebration featuring renowned artists from across Karnataka",
          recordings: 12,
          type: "Festival"
        },
        {
          title: "ವೀಣಾ ಕಲಾವಿದರ ಸಂಮೇಳನ | Veena Artists Convention",
          date: "August 2023",
          description: "Dedicated to the divine sound of veena with master musicians",
          recordings: 8,
          type: "Convention"
        }
      ]
    },
    {
      year: "2022",
      events: [
        {
          title: "ಶಾಸ್ತ್ರೀಯ ಸಂಗೀತ ಶಿಕ್ಷಣ | Classical Music Education Series",
          date: "November 2022",
          description: "Educational workshops and lecture demonstrations",
          recordings: 15,
          type: "Workshop"
        },
        {
          title: "ಯುವ ಕಲಾವಿದರ ಮಂಚ | Young Artists Platform",
          date: "June 2022",
          description: "Showcasing emerging talent in Carnatic music",
          recordings: 10,
          type: "Platform"
        }
      ]
    },
    {
      year: "2021",
      events: [
        {
          title: "ಆನ್‌ಲೈನ್ ಸಂಗೀತ ಉತ್ಸವ | Virtual Music Festival",
          date: "March 2021",
          description: "Digital celebration during challenging times",
          recordings: 20,
          type: "Virtual"
        }
      ]
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
              ಸಂಗ್ರಹಾಲಯ | Conference Archive
            </h1>
            <p className="text-xl text-muted-foreground font-sans leading-relaxed mb-8">
              Relive the magical moments from our past events and conferences
            </p>
            <div className="w-32 veena-divider mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Timeline Archive */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-foreground mb-4">
              Event Timeline
            </h2>
            <div className="w-24 veena-divider mx-auto"></div>
          </div>
          <div className="space-y-12">
            {archiveYears.map((yearData, index) => (
              <div key={yearData.year} className="relative">
                {/* Year Header */}
                <div className="flex items-center mb-8">
                  <div className="bg-destructive text-accent font-bold text-2xl px-6 py-3 rounded-full font-mono">
                    {yearData.year}
                  </div>
                  <div className="flex-1 h-px bg-accent/30 ml-6"></div>
                </div>
                
                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-8">
                  {yearData.events.map((event, eventIndex) => (
                    <Card key={eventIndex} className="group hover:shadow-lg transition-all duration-300 bg-background border-accent/20">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-lg font-serif leading-tight text-foreground mb-2">
                              {event.title}
                            </CardTitle>
                            <div className="flex items-center text-sm text-muted-foreground mb-2">
                              <Calendar className="w-4 h-4 mr-2 text-accent" />
                              {event.date}
                            </div>
                            <span className="inline-block bg-accent/20 text-accent px-2 py-1 rounded text-xs font-medium">
                              {event.type}
                            </span>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {event.description}
                        </p>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-accent/10">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Volume2 className="w-4 h-4 mr-2 text-accent" />
                            {event.recordings} Recordings
                          </div>
                          
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-background">
                              <Play className="w-4 h-4 mr-1" />
                              Listen
                            </Button>
                            <Button size="sm" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-background">
                              <Download className="w-4 h-4 mr-1" />
                              Download
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Archive;