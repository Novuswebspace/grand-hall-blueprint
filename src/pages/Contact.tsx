import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-background via-accent/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-6 font-serif">
              ಸಂಪರ್ಕ | Contact Us
            </h1>
            <p className="text-xl text-muted-foreground font-sans leading-relaxed mb-8">
              Get in touch with us for concerts, memberships, or any inquiries about classical music
            </p>
            <div className="w-32 veena-divider mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-background border-accent/20">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-foreground">
                    ವಿಳಾಸ ಮತ್ತು ಮಾಹಿತಿ | Address & Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">JSS Sangeetha Sabha</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        123, Ramaswamy Circle<br />
                        Saraswatipuram, Mysuru - 570009<br />
                        Karnataka, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-destructive flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <p className="text-muted-foreground text-sm">+91 821 234 5678</p>
                      <p className="text-muted-foreground text-sm">+91 821 234 5679 (Box Office)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-destructive flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground text-sm">info@jsssangeethasabha.org</p>
                      <p className="text-muted-foreground text-sm">concerts@jsssangeethasabha.org</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Office Hours</h3>
                      <p className="text-muted-foreground text-sm">
                        Monday - Friday: 10:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="bg-background border-accent/20">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-foreground">
                    ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು | Quick Links
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start border-accent text-accent hover:bg-accent hover:text-background">
                    Concert Bookings
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-accent text-accent hover:bg-accent hover:text-background">
                    Membership Registration
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-accent text-accent hover:bg-accent hover:text-background">
                    Artist Applications
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-accent text-accent hover:bg-accent hover:text-background">
                    Donation Portal
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-background border-accent/20">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-foreground">
                  ಸಂದೇಶ ಕಳುಹಿಸಿ | Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <Input 
                        id="firstName" 
                        placeholder="Your first name"
                        className="border-accent/30 focus:border-accent"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <Input 
                        id="lastName" 
                        placeholder="Your last name"
                        className="border-accent/30 focus:border-accent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com"
                      className="border-accent/30 focus:border-accent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+91 12345 67890"
                      className="border-accent/30 focus:border-accent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="What is this regarding?"
                      className="border-accent/30 focus:border-accent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Please share your message, inquiry, or feedback..."
                      rows={6}
                      className="border-accent/30 focus:border-accent resize-none"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-destructive hover:bg-destructive/90 text-accent font-semibold">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-foreground mb-8 text-center">
            ನಮ್ಮನ್ನು ಭೇಟಿ ಮಾಡಿ | Visit Us
          </h2>
          <Card className="max-w-4xl mx-auto bg-background border-accent/20">
            <CardContent className="p-8">
              <div className="bg-accent/10 h-96 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-serif text-foreground mb-2">Interactive Map</h3>
                  <p className="text-muted-foreground">
                    JSS Sangeetha Sabha, Saraswatipuram, Mysuru
                  </p>
                  <Button className="mt-4 bg-destructive hover:bg-destructive/90 text-accent">
                    Open in Google Maps
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;