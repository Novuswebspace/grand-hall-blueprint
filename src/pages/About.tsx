import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InteractiveTimeline from '@/components/InteractiveTimeline';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Calendar, Heart } from 'lucide-react';
import { ASSETS } from '@/lib/assets';

const About = () => {

  const boardMembers = [
    {
      name: "ಡಾ. ಆರ್. ಕೆ. ಶ್ರೀಕಾಂತನ್ | Dr. R. K. Srikantan",
      position: "President",
      specialization: "Vocal Music"
    },
    {
      name: "ಶ್ರೀಮತಿ ಜಯಂತಿ ಕುಮಾರೇಶ್ | Smt. Jayanthi Kumaresh",
      position: "Vice President",
      specialization: "Veena"
    },
    {
      name: "ವಿದ್ವಾನ್ ಪತ್ರಿ ಸತೀಶ್ ಕುಮಾರ್ | Vidwan Patri Satish Kumar",
      position: "Secretary",
      specialization: "Mridangam"
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
              ನಮ್ಮ ಬಗ್ಗೆ | About Us
            </h1>
            <p className="text-xl text-muted-foreground font-sans leading-relaxed mb-8">
              Preserving and promoting the divine art of Carnatic music for over seven decades
            </p>
            <div className="w-32 veena-divider mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-background border-accent/20 mb-12">
              <CardContent className="p-8">
                <h2 className="text-3xl font-serif text-foreground mb-6 text-center">
                  ಮಿಷನ್ | Our Mission
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed text-center font-sans">
                  To nurture, preserve, and propagate the classical music traditions of Karnataka, 
                  providing a platform for both established maestros and emerging talents while 
                  fostering appreciation for this divine art form among future generations.
                </p>
              </CardContent>
            </Card>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <Card className="text-center bg-background border-accent/20">
                <CardContent className="p-6">
                  <Calendar className="w-8 h-8 text-destructive mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground font-mono">72</div>
                  <div className="text-sm text-muted-foreground">Years of Service</div>
                </CardContent>
              </Card>
              
              <Card className="text-center bg-background border-accent/20">
                <CardContent className="p-6">
                  <Users className="w-8 h-8 text-destructive mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground font-mono">2500+</div>
                  <div className="text-sm text-muted-foreground">Artists Supported</div>
                </CardContent>
              </Card>
              
              <Card className="text-center bg-background border-accent/20">
                <CardContent className="p-6">
                  <Award className="w-8 h-8 text-destructive mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground font-mono">150+</div>
                  <div className="text-sm text-muted-foreground">Annual Concerts</div>
                </CardContent>
              </Card>
              
              <Card className="text-center bg-background border-accent/20">
                <CardContent className="p-6">
                  <Heart className="w-8 h-8 text-destructive mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground font-mono">10K+</div>
                  <div className="text-sm text-muted-foreground">Music Lovers</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-foreground mb-4">
              ಮಂಡಳಿ ಸದಸ್ಯರು | Board Members
            </h2>
            <div className="w-24 veena-divider mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {boardMembers.map((member, index) => (
              <Card key={index} className="text-center bg-background border-accent/20">
                <CardHeader>
                  <div className="w-24 h-24 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-accent" />
                  </div>
                  <CardTitle className="text-lg font-serif text-foreground leading-tight">
                    {member.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="border-destructive text-destructive mb-2">
                    {member.position}
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    Specialization: {member.specialization}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <InteractiveTimeline />

      {/* JSS Mahavidyapeetha Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif text-foreground mb-4">
                ಜೆ.ಎಸ್.ಎಸ್. ಮಹಾವಿದ್ಯಾಪೀಠ | JSS Mahavidyapeetha
              </h2>
              <div className="w-32 veena-divider mx-auto"></div>
            </div>
            
            {/* Full Width Image */}
            <div className="mb-12 text-center">
              <div className="relative inline-block">
                <img 
                  src={ASSETS.logos.mvp} 
                  alt="JSS Mahavidyapeetha Logo" 
                  className="w-full max-w-4xl h-auto object-contain drop-shadow-lg mx-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent pointer-events-none"></div>
              </div>
            </div>
            
            {/* Content Container */}
            <div className="max-w-4xl mx-auto">
              <Card className="bg-background/80 backdrop-blur-sm border-accent/20 hover:shadow-elegant transition-smooth">
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl text-foreground mb-4 text-center">
                    Our Parent Institution
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-center">
                    JSS Sangeetha Sabha is proudly affiliated with JSS Mahavidyapeetha, 
                    one of India's premier educational institutions. This association strengthens 
                    our mission of cultural preservation and educational excellence.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-center">
                    Founded with the vision of holistic education, JSS Mahavidyapeetha has been 
                    instrumental in nurturing not just academic excellence but also cultural 
                    and artistic traditions across Karnataka and beyond.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <Badge className="bg-destructive text-destructive-foreground">
                      Educational Excellence
                    </Badge>
                    <Badge className="bg-destructive text-destructive-foreground">
                      Cultural Heritage
                    </Badge>
                    <Badge className="bg-destructive text-destructive-foreground">
                      Community Service
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Information */}
            <div className="mt-12 text-center">
              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                    The synergy between JSS Mahavidyapeetha's educational framework and 
                    JSS Sangeetha Sabha's cultural mission creates a unique environment where 
                    traditional art forms flourish alongside modern educational practices, 
                    ensuring the preservation and evolution of Karnataka's rich musical heritage.
                  </p>
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

export default About;