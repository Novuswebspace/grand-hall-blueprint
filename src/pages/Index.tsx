import Header from '@/components/Header';
import Hero from '@/components/Hero';
import EventsGrid from '@/components/EventsGrid';
import ConferenceArchive from '@/components/ConferenceArchive';
import SocialFeed from '@/components/SocialFeed';
import AboutUsSection from '@/components/AboutUsSection';
import SupportOurMission from '@/components/SupportOurMission';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <EventsGrid />
        <AboutUsSection />
        <ConferenceArchive />
        <SocialFeed />
        <SupportOurMission />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
