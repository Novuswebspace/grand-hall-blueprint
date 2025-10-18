import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Award, Calendar, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUsSection = () => {
  const stats = [
    {
      icon: Calendar,
      value: "72",
      label: "Years of Service",
      color: "text-destructive"
    },
    {
      icon: Users,
      value: "2500+",
      label: "Artists Supported",
      color: "text-secondary"
    },
    {
      icon: Award,
      value: "150+",
      label: "Annual Concerts",
      color: "text-accent"
    },
    {
      icon: Heart,
      value: "10K+",
      label: "Music Lovers",
      color: "text-primary"
    }
  ];

  const keyMilestones = [
    {
      year: "1952",
      title: "Foundation",
      kannada: "ಸ್ಥಾಪನೆ"
    },
    {
      year: "1980",
      title: "Main Auditorium",
      kannada: "ಮುಖ್ಯ ಸಭಾಗೃಹ"
    },
    {
      year: "2020",
      title: "Digital Platform",
      kannada: "ಡಿಜಿಟಲ್ ವೇದಿಕೆ"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-accent/5 via-background to-secondary/5">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-heading text-foreground mb-4">
            About JSS Sangeetha Sabha
          </h2>
          <p className="text-subheading text-secondary font-serif mb-2">ನಮ್ಮ ಬಗ್ಗೆ</p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over seven decades, we have been dedicated to preserving and promoting the divine art of 
            Carnatic music, fostering a rich cultural heritage that transcends generations.
          </p>
          <div className="w-32 veena-divider mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mission & Vision */}
          <div className="space-y-6">
            <Card className="bg-background/80 backdrop-blur-sm border-accent/20 hover:shadow-elegant transition-smooth">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl text-foreground mb-4 text-center">
                  Our Mission | ನಮ್ಮ ಧ್ಯೇಯ
                </h3>
                <p className="text-muted-foreground leading-relaxed text-center">
                  To nurture, preserve, and propagate the classical music traditions of Karnataka, 
                  providing a platform for both established maestros and emerging talents while 
                  fostering appreciation for this divine art form.
                </p>
              </CardContent>
            </Card>

            {/* Key Milestones */}
            <div className="space-y-4">
              <h4 className="font-serif text-xl text-foreground mb-4 text-center">
                Journey Highlights | ಪ್ರಮುಖ ಹಂತಗಳು
              </h4>
              <div className="grid grid-cols-3 gap-4">
                {keyMilestones.map((milestone, index) => (
                  <Card 
                    key={index} 
                    className="text-center bg-background/60 border-accent/20 hover:bg-background/80 transition-smooth group"
                  >
                    <CardContent className="p-4">
                      <div className="text-destructive font-bold text-lg font-mono mb-1 group-hover:scale-110 transition-smooth">
                        {milestone.year}
                      </div>
                      <div className="text-foreground text-sm font-medium">
                        {milestone.title}
                      </div>
                      <div className="text-secondary text-xs">
                        {milestone.kannada}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Statistics Grid */}
          <div>
            <h4 className="font-serif text-xl text-foreground mb-6 text-center">
              Our Impact | ನಮ್ಮ ಪ್ರಭಾವ
            </h4>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card 
                    key={index} 
                    className="text-center bg-background/80 backdrop-blur-sm border-accent/20 hover:shadow-elegant hover:-translate-y-1 transition-bounce group"
                  >
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <IconComponent className={`w-8 h-8 mx-auto ${stat.color} group-hover:scale-110 transition-smooth`} />
                      </div>
                      <div className="text-3xl font-bold text-foreground font-mono mb-2 group-hover:text-secondary transition-smooth">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground leading-tight">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* CTA */}
            <div className="text-center mt-8">
              <Link to="/about">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-bounce px-6"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

