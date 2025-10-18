import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { 
  Camera, Video, Music, Download, ZoomIn, Play, Pause, 
  Filter, Grid, List, Search, Calendar, Eye, Heart,
  ChevronLeft, ChevronRight, X, Clock, User, MapPin,
  Share2, MoreHorizontal
} from 'lucide-react';
import { ASSETS } from '@/lib/assets';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  
  const photos = [
    // Performance Photos
    {
      id: 1,
      src: ASSETS.gallery.performances.dsc1548,
      alt: "Classical concert performance",
      category: "Concerts",
      title: "ಮಹಾ ಸಂಗೀತ ಸಮಾರಂಭ | Grand Music Festival",
      date: "2024-03-15",
      location: "JSS Auditorium",
      photographer: "Cultural Team",
      views: 1250,
      likes: 89
    },
    {
      id: 2,
      src: ASSETS.gallery.performances.dsc1567,
      alt: "Maestro performance",
      category: "Artists",
      title: "ವಿದ್ವಾನ್ ಪ್ರದರ್ಶನ | Maestro Performance",
      date: "2024-02-20",
      location: "Main Hall",
      photographer: "Archive Team",
      views: 890,
      likes: 67
    },
    {
      id: 3,
      src: ASSETS.gallery.performances.dsc1585,
      alt: "Solo performance",
      category: "Artists",
      title: "ಏಕವ್ಯಕ್ತಿ ಪ್ರದರ್ಶನ | Solo Performance",
      date: "2024-01-10",
      location: "Heritage Hall",
      photographer: "Documentation Team",
      views: 2100,
      likes: 156
    },
    // Event Photos
    {
      id: 4,
      src: ASSETS.gallery.events.ss2201,
      alt: "Annual conference",
      category: "Concerts",
      title: "ವಾರ್ಷಿಕ ಸಮ್ಮೇಳನ | Annual Conference",
      date: "2024-04-05",
      location: "Main Auditorium",
      photographer: "Event Team",
      views: 1580,
      likes: 112
    },
    {
      id: 5,
      src: ASSETS.gallery.events.ss2202,
      alt: "Cultural program",
      category: "Heritage",
      title: "ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮ | Cultural Program",
      date: "2024-03-28",
      location: "Open Air Theater",
      photographer: "Cultural Team",
      views: 750,
      likes: 45
    },
    {
      id: 6,
      src: ASSETS.gallery.events.ss2203,
      alt: "Youth festival",
      category: "Artists",
      title: "ಯುವ ಉತ್ಸವ | Youth Festival",
      date: "2024-02-14",
      location: "Heritage Hall",
      photographer: "Youth Program",
      views: 1920,
      likes: 203
    },
    {
      id: 7,
      src: ASSETS.gallery.events.audience,
      alt: "Engaged audience",
      category: "Heritage",
      title: "ಪ್ರೇಕ್ಷಕರು | Audience Engagement",
      date: "2024-01-20",
      location: "Main Auditorium",
      photographer: "Documentation Team",
      views: 1340,
      likes: 98
    },
    {
      id: 8,
      src: ASSETS.gallery.general.img0555008,
      alt: "Traditional ceremony",
      category: "Heritage",
      title: "ಪಾರಂಪರಿಕ ಸಮಾರಂಭ | Traditional Ceremony",
      date: "2024-05-10",
      location: "Heritage Room",
      photographer: "Heritage Team",
      views: 2340,
      likes: 187
    },
    {
      id: 9,
      src: ASSETS.gallery.general.img0646015,
      alt: "Musical instruments display",
      category: "Instruments",
      title: "ವಾದ್ಯ ಪ್ರದರ್ಶನ | Instrument Display",
      date: "2024-06-15",
      location: "Museum Hall",
      photographer: "Archive Team",
      views: 890,
      likes: 76
    },
    {
      id: 10,
      src: ASSETS.gallery.portraits.kba9647,
      alt: "Artist portrait",
      category: "Artists",
      title: "ಕಲಾವಿದ ಚಿತ್ರ | Artist Portrait",
      date: "2024-07-08",
      location: "Studio",
      photographer: "Portrait Team",
      views: 1560,
      likes: 134
    },
    {
      id: 11,
      src: ASSETS.gallery.historical.sriRajendra,
      alt: "Historical moment",
      category: "Heritage",
      title: "ಐತಿಹಾಸಿಕ ಕ್ಷಣ | Historical Moment",
      date: "1990-12-06",
      location: "JSS Sangeetha Sabha",
      photographer: "Archive Collection",
      views: 3450,
      likes: 289
    },
    {
      id: 12,
      src: ASSETS.gallery.events.ss1201,
      alt: "Workshop session",
      category: "Concerts",
      title: "ಕಾರ್ಯಾಗಾರ | Workshop Session",
      date: "2024-08-12",
      location: "Seminar Hall",
      photographer: "Education Team",
      views: 670,
      likes: 54
    }
  ];

  const videos = [
    {
      id: 1,
      title: "ರಾಗ ಯಮನ್ ಪ್ರದರ್ಶನ | Raga Yaman Performance",
      artist: "Vidwan R. K. Srikantan",
      duration: "45:30",
      thumbnail: ASSETS.images.heroConcert,
      date: "2024-03-15",
      category: "Classical",
      views: 5420,
      description: "A mesmerizing performance of Raga Yaman featuring intricate improvisations"
    },
    {
      id: 2,
      title: "ವೀಣಾ ಕಚೇರಿ | Veena Recital",
      artist: "Smt. Jayanthi Kumaresh",
      duration: "38:15",
      thumbnail: ASSETS.images.veenaDetail,
      date: "2024-02-20",
      category: "Instrumental",
      views: 3280,
      description: "Exquisite veena recital showcasing traditional compositions"
    },
    {
      id: 3,
      title: "ತಾಳ ವಾದ್ಯ ಪ್ರದರ್ಶನ | Percussion Ensemble",
      artist: "Vidwan Patri Satish Kumar",
      duration: "32:45",
      thumbnail: ASSETS.images.eventPerformance,
      date: "2024-01-18",
      category: "Percussion",
      views: 2150,
      description: "Dynamic percussion performance featuring mridangam and tabla"
    },
    {
      id: 4,
      title: "ಭಜನ ಸಂಧ್ಯೆ | Devotional Evening",
      artist: "Various Artists",
      duration: "1:02:20",
      thumbnail: ASSETS.images.heroConcert,
      date: "2024-04-02",
      category: "Devotional",
      views: 8900,
      description: "Soul-stirring devotional songs performed by multiple artists"
    }
  ];

  const audio = [
    {
      id: 1,
      title: "ವರ್ಣಂ - ವಿರಿಬೋಣಿ | Varnam - Viriboni",
      artist: "JSS Sangeetha Sabha Archives",
      duration: "12:45",
      raga: "Bhairavi",
      date: "2023-12-10",
      category: "Classical",
      downloads: 1240,
      composer: "Pacchimiriam Adiyappa"
    },
    {
      id: 2,
      title: "ಕೃತಿ - ವಾತಾಪಿ ಗಣಪತಿಂ | Kriti - Vatapi Ganapatim",
      artist: "Archive Collection",
      duration: "8:30",
      raga: "Hamsadhwani",
      date: "2023-11-22",
      category: "Devotional",
      downloads: 890,
      composer: "Muthuswami Dikshitar"
    },
    {
      id: 3,
      title: "ತಿಲ್ಲಾನಾ - ಯಮನ್ | Tillana - Yaman",
      artist: "Heritage Recording",
      duration: "6:15",
      raga: "Yaman",
      date: "2023-10-15",
      category: "Classical",
      downloads: 567,
      composer: "Traditional"
    }
  ];

  const categories = ['All', 'Concerts', 'Artists', 'Instruments', 'Heritage'];
  const videoCategories = ['All', 'Classical', 'Instrumental', 'Percussion', 'Devotional'];
  const audioCategories = ['All', 'Classical', 'Devotional'];

  const filteredPhotos = photos.filter(photo => 
    (selectedCategory === 'All' || photo.category === selectedCategory) &&
    (photo.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     photo.alt.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredPhotos.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-accent/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-6 font-serif">
              ಗ್ಯಾಲರಿ | Media Gallery
            </h1>
            <p className="text-xl text-muted-foreground font-sans leading-relaxed mb-8">
              Explore our rich collection of photographs, videos, and audio recordings showcasing the beauty of Carnatic music
            </p>
            <div className="w-32 veena-divider mx-auto"></div>
            
            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-destructive">{photos.length}</div>
                <div className="text-sm text-muted-foreground">Photos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-destructive">{videos.length}</div>
                <div className="text-sm text-muted-foreground">Videos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-destructive">{audio.length}</div>
                <div className="text-sm text-muted-foreground">Audio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-destructive">50+</div>
                <div className="text-sm text-muted-foreground">Hours</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Tabs */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="photos" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto mb-8 bg-background border border-accent/20 h-14">
              <TabsTrigger value="photos" className="data-[state=active]:bg-destructive data-[state=active]:text-accent text-base font-medium">
                <Camera className="w-5 h-5 mr-2" />
                Photos
              </TabsTrigger>
              <TabsTrigger value="videos" className="data-[state=active]:bg-destructive data-[state=active]:text-accent text-base font-medium">
                <Video className="w-5 h-5 mr-2" />
                Videos
              </TabsTrigger>
              <TabsTrigger value="audio" className="data-[state=active]:bg-destructive data-[state=active]:text-accent text-base font-medium">
                <Music className="w-5 h-5 mr-2" />
                Audio
              </TabsTrigger>
            </TabsList>

            {/* Photos Tab */}
            <TabsContent value="photos" className="space-y-6">
              {/* Search and Filter Controls */}
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-background p-4 rounded-lg border border-accent/20">
                <div className="flex items-center space-x-2 flex-1">
                  <Search className="w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Search photos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border-accent/30 focus:border-accent"
                  />
                </div>
                
                <div className="flex items-center space-x-4">
                  {/* Category Filter */}
                  <div className="flex items-center space-x-2">
                    <Filter className="w-4 h-4 text-muted-foreground" />
                    <select 
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="bg-background border border-accent/30 rounded px-3 py-1 text-sm"
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  
                  {/* View Mode Toggle */}
                  <div className="flex border border-accent/30 rounded">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                      className="rounded-r-none"
                    >
                      <Grid className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                      className="rounded-l-none border-l"
                    >
                      <List className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Photos Grid */}
              <div className={viewMode === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" 
                : "space-y-4"
              }>
                {filteredPhotos.map((photo, index) => (
                  <Card key={photo.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-300 bg-background border-accent/20">
                    <div className="relative overflow-hidden">
                      <img 
                        src={photo.src} 
                        alt={photo.alt}
                        className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                          viewMode === 'grid' ? 'h-64' : 'h-32'
                        }`}
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex space-x-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => openLightbox(index)}
                            className="border-accent text-accent hover:bg-accent hover:text-background"
                          >
                            <ZoomIn className="w-4 h-4 mr-1" />
                            View
                          </Button>
                          <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-background">
                            <Heart className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      
                      {/* Category Badge */}
                      <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground">
                        {photo.category}
                      </Badge>
                      
                      {/* Stats */}
                      <div className="absolute bottom-3 right-3 flex space-x-2">
                        <div className="bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center">
                          <Eye className="w-3 h-3 mr-1" />
                          {photo.views}
                        </div>
                        <div className="bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center">
                          <Heart className="w-3 h-3 mr-1" />
                          {photo.likes}
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-4">
                      <h3 className="font-serif text-foreground font-semibold mb-2 leading-tight">
                        {photo.title}
                      </h3>
                      
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-2" />
                          {new Date(photo.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-3 h-3 mr-2" />
                          {photo.location}
                        </div>
                        <div className="flex items-center">
                          <User className="w-3 h-3 mr-2" />
                          {photo.photographer}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-3">
                        <Button variant="ghost" size="sm" className="text-accent hover:text-background hover:bg-accent">
                          <Share2 className="w-3 h-3 mr-1" />
                          Share
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Videos Tab */}
            <TabsContent value="videos">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos.map((video) => (
                  <Card key={video.id} className="group hover:shadow-elegant transition-all duration-300 bg-background border-accent/20">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                        <Button className="bg-destructive hover:bg-destructive/90 text-accent rounded-full p-4">
                          <Play className="w-6 h-6" />
                        </Button>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-black/70 text-accent px-2 py-1 rounded text-sm font-mono">
                        {video.duration}
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-destructive text-destructive-foreground">
                          {video.category}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4 flex items-center bg-black/70 text-white px-2 py-1 rounded text-xs">
                        <Eye className="w-3 h-3 mr-1" />
                        {video.views}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-serif text-foreground font-semibold mb-2 leading-tight">
                        {video.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">{video.artist}</p>
                      <p className="text-muted-foreground text-xs mb-4 leading-relaxed">{video.description}</p>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(video.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {video.duration}
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button className="flex-1 bg-destructive hover:bg-destructive/90 text-accent">
                          <Play className="w-4 h-4 mr-2" />
                          Watch
                        </Button>
                        <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-background">
                          <Heart className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-background">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Audio Tab */}
            <TabsContent value="audio">
              <div className="space-y-4 max-w-4xl mx-auto">
                {audio.map((track) => (
                  <Card key={track.id} className="group hover:shadow-elegant transition-all duration-300 bg-background border-accent/20">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                              <Music className="w-6 h-6 text-destructive" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-serif text-foreground font-semibold leading-tight">
                                {track.title}
                              </h3>
                              <p className="text-muted-foreground text-sm">{track.artist}</p>
                            </div>
                            <Badge className="bg-destructive text-destructive-foreground">
                              {track.category}
                            </Badge>
                          </div>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-muted-foreground mb-4">
                            <div>
                              <span className="font-medium">Raga:</span> {track.raga}
                            </div>
                            <div>
                              <span className="font-medium">Duration:</span> {track.duration}
                            </div>
                            <div>
                              <span className="font-medium">Composer:</span> {track.composer}
                            </div>
                            <div>
                              <span className="font-medium">Downloads:</span> {track.downloads}
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Button className="bg-destructive hover:bg-destructive/90 text-accent">
                              <Play className="w-4 h-4 mr-2" />
                              Play
                            </Button>
                            <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-background">
                              <Download className="w-4 h-4 mr-1" />
                              Download
                            </Button>
                            <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-background">
                              <Heart className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-background">
                              <Share2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent className="max-w-4xl w-full p-0 bg-black/95">
          <div className="relative">
            <img 
              src={filteredPhotos[currentImageIndex]?.src} 
              alt={filteredPhotos[currentImageIndex]?.alt}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            
            {/* Navigation */}
            <Button
              variant="ghost"
              size="sm"
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
            
            {/* Close Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 text-white hover:bg-white/20"
            >
              <X className="w-6 h-6" />
            </Button>
            
            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white text-xl font-serif font-semibold mb-2">
                {filteredPhotos[currentImageIndex]?.title}
              </h3>
              <div className="flex items-center space-x-4 text-white/80 text-sm">
                <span>{filteredPhotos[currentImageIndex]?.location}</span>
                <span>•</span>
                <span>{filteredPhotos[currentImageIndex]?.photographer}</span>
                <span>•</span>
                <span>{new Date(filteredPhotos[currentImageIndex]?.date).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Gallery;