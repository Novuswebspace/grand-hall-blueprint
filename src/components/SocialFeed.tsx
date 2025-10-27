import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, MessageCircle, Share2, Instagram, Facebook, Twitter, 
  Youtube, Play, User, Calendar, Eye, Music, Camera,
  ExternalLink, ChevronLeft, ChevronRight
} from 'lucide-react';

const SocialFeed = () => {
  const [activeTab, setActiveTab] = useState('all');

  const socialPosts = [
    {
      id: 1,
      platform: 'instagram',
      type: 'image',
      content: {
        image: '/src/assets/hero-concert.jpg',
        caption: 'ಮಹಾ ಸಂಗೀತ ಸಮಾರಂಭ | Grand Music Festival - An evening filled with divine melodies and classical excellence. Thank you to all who joined us! 🎵✨',
        hashtags: ['#CarnaticMusic', '#JSSSangeethaFestival', '#ClassicalMusic', '#Mysuru'],
      },
      author: {
        name: 'JSS Sangeetha Sabha',
        handle: '@jsssangeethasabha',
        verified: true
      },
      engagement: {
        likes: 1247,
        comments: 89,
        shares: 156
      },
      timestamp: '2 hours ago',
      featured: true
    },
    {
      id: 2,
      platform: 'youtube',
      type: 'video',
      content: {
        thumbnail: '/src/assets/veena-detail.jpg',
        title: 'ವೀಣಾ ಕಚೇರಿ | Veena Recital by Smt. Jayanthi Kumaresh',
        duration: '1:45:30',
        description: 'Experience the ethereal beauty of veena in this mesmerizing recital featuring ragas Yaman and Bhairavi.'
      },
      author: {
        name: 'JSS Sangeetha Sabha',
        handle: 'JSSSangeethaOfficial',
        verified: true
      },
      engagement: {
        likes: 3428,
        comments: 234,
        views: 12567
      },
      timestamp: '1 day ago',
      featured: false
    },
    {
      id: 3,
      platform: 'facebook',
      type: 'post',
      content: {
        text: 'Celebrating 70+ years of preserving and promoting Carnatic music! 🎼 Join us for our upcoming concert series featuring renowned artists from across India. Register now!',
        link: {
          title: 'Upcoming Concert Series 2024',
          description: 'Book your tickets for an unforgettable musical journey',
          image: '/src/assets/event-performance.jpg'
        }
      },
      author: {
        name: 'JSS Sangeetha Sabha',
        handle: 'JSSSangeethaOfficial',
        verified: true
      },
      engagement: {
        likes: 892,
        comments: 67,
        shares: 234
      },
      timestamp: '3 days ago',
      featured: false
    },
    {
      id: 4,
      platform: 'twitter',
      type: 'text',
      content: {
        text: '🎵 "संगीतं रसात्मकम्" - Music is the essence of emotion. Today we celebrate the timeless tradition of Carnatic music that connects souls across generations. #ClassicalMusicWisdom #CarnaticTradition'
      },
      author: {
        name: 'JSS Sangeetha Sabha',
        handle: '@JSSSangeetha',
        verified: true
      },
      engagement: {
        likes: 567,
        retweets: 189,
        replies: 43
      },
      timestamp: '5 days ago',
      featured: false
    },
    {
      id: 5,
      platform: 'instagram',
      type: 'image',
      content: {
        image: '/src/assets/event-performance.jpg',
        caption: 'Behind the scenes: Young artists preparing for tomorrow\'s performance. The future of Carnatic music shines bright! 🌟',
        hashtags: ['#YouthTalent', '#CarnaticMusic', '#FutureOfMusic']
      },
      author: {
        name: 'JSS Sangeetha Sabha',
        handle: '@jsssangeethasabha',
        verified: true
      },
      engagement: {
        likes: 734,
        comments: 45,
        shares: 23
      },
      timestamp: '1 week ago',
      featured: false
    },
    {
      id: 6,
      platform: 'youtube',
      type: 'short',
      content: {
        thumbnail: '/src/assets/veena-detail.jpg',
        title: 'Raga of the Day: Yaman',
        duration: '0:58',
        description: 'Quick lesson on the beautiful Raga Yaman #Shorts'
      },
      author: {
        name: 'JSS Sangeetha Sabha',
        handle: 'JSSSangeethaOfficial',
        verified: true
      },
      engagement: {
        likes: 1892,
        comments: 123,
        views: 8934
      },
      timestamp: '1 week ago',
      featured: false
    }
  ];

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'instagram': return <Instagram className="w-5 h-5" />;
      case 'facebook': return <Facebook className="w-5 h-5" />;
      case 'twitter': return <Twitter className="w-5 h-5" />;
      case 'youtube': return <Youtube className="w-5 h-5" />;
      default: return <User className="w-5 h-5" />;
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'instagram': return 'from-pink-500 to-purple-600';
      case 'facebook': return 'from-blue-600 to-blue-700';
      case 'twitter': return 'from-sky-400 to-sky-500';
      case 'youtube': return 'from-red-500 to-red-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const filteredPosts = activeTab === 'all' 
    ? socialPosts 
    : socialPosts.filter(post => post.platform === activeTab);

  const featuredPost = socialPosts.find(post => post.featured);
  const regularPosts = socialPosts.filter(post => !post.featured);

  return (
    <section className="py-16 bg-gradient-to-br from-background via-accent/5 to-secondary/5 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-destructive/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-accent/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl text-foreground mb-4">
            Social Symphony | ಸಾಮಾಜಿಕ ಸಂಗೀತ
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
            Stay connected with our musical journey through social media. Follow our latest performances, 
            behind-the-scenes moments, and cultural celebrations.
          </p>
          <div className="w-32 veena-divider mx-auto"></div>
        </div>

        {/* Platform Filter Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-background/80 backdrop-blur-sm rounded-full p-2 border border-accent/20">
            {['all', 'instagram', 'youtube', 'facebook', 'twitter'].map((platform) => (
              <Button
                key={platform}
                variant={activeTab === platform ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab(platform)}
                className={`mx-1 rounded-full ${
                  activeTab === platform 
                    ? 'bg-destructive text-accent' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {platform === 'all' ? (
                  <>
                    <Music className="w-4 h-4 mr-1" />
                    All
                  </>
                ) : (
                  <>
                    {getPlatformIcon(platform)}
                    <span className="ml-2 capitalize hidden sm:inline">{platform}</span>
                  </>
                )}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-12">
            <h3 className="text-xl font-serif text-foreground mb-6 text-center">Featured</h3>
            <Card className="max-w-2xl mx-auto bg-gradient-to-br from-background/95 to-accent/5 border-accent/30 shadow-elegant">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={featuredPost.content.image} 
                    alt="Featured post"
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4">
                    <div className={`bg-gradient-to-r ${getPlatformColor(featuredPost.platform)} p-2 rounded-full`}>
                      <div className="text-white">
                        {getPlatformIcon(featuredPost.platform)}
                      </div>
                    </div>
                  </div>
                  <Badge className="absolute top-4 right-4 bg-destructive text-destructive-foreground">
                    Featured
                  </Badge>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center mr-3">
                      <User className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <h4 className="font-semibold text-foreground">{featuredPost.author.name}</h4>
                        {featuredPost.author.verified && (
                          <div className="w-4 h-4 bg-blue-500 rounded-full ml-2 flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{featuredPost.author.handle}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{featuredPost.timestamp}</span>
                  </div>
                  
                  <p className="text-foreground leading-relaxed mb-4">
                    {featuredPost.content.caption}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredPost.content.hashtags?.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-accent border-accent/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-accent/20">
                    <div className="flex items-center space-x-6">
                      <button className="flex items-center space-x-2 text-muted-foreground hover:text-red-500 transition-colors">
                        <Heart className="w-5 h-5" />
                        <span className="text-sm font-medium">{featuredPost.engagement.likes}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-muted-foreground hover:text-blue-500 transition-colors">
                        <MessageCircle className="w-5 h-5" />
                        <span className="text-sm font-medium">{featuredPost.engagement.comments}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-muted-foreground hover:text-green-500 transition-colors">
                        <Share2 className="w-5 h-5" />
                        <span className="text-sm font-medium">{featuredPost.engagement.shares}</span>
                      </button>
                    </div>
                    <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-background">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Post
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Social Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {regularPosts.slice(0, 6).map((post) => (
            <Card key={post.id} className="group hover:shadow-elegant transition-all duration-300 bg-background/80 backdrop-blur-sm border-accent/20 overflow-hidden">
              <CardContent className="p-0">
                {/* Post Header */}
                <div className="p-4 border-b border-accent/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`bg-gradient-to-r ${getPlatformColor(post.platform)} p-2 rounded-full mr-3`}>
                        <div className="text-white">
                          {getPlatformIcon(post.platform)}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">{post.author.name}</h4>
                        <p className="text-xs text-muted-foreground">{post.timestamp}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs capitalize">
                      {post.type}
                    </Badge>
                  </div>
                </div>

                {/* Post Content */}
                <div className="relative">
                  {post.type === 'image' && (
                    <div className="relative group">
                      <img 
                        src={post.content.image} 
                        alt="Social post"
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Camera className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  )}
                  
                  {(post.type === 'video' || post.type === 'short') && (
                    <div className="relative">
                      <img 
                        src={post.content.thumbnail} 
                        alt="Video thumbnail"
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="bg-destructive rounded-full p-3">
                          <Play className="w-6 h-6 text-accent" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-mono">
                        {post.content.duration}
                      </div>
                    </div>
                  )}
                </div>

                {/* Post Text & Engagement */}
                <div className="p-4">
                  {post.content.caption && (
                    <p className="text-sm text-foreground leading-relaxed mb-3 line-clamp-3">
                      {post.content.caption}
                    </p>
                  )}
                  
                  {post.content.text && (
                    <p className="text-sm text-foreground leading-relaxed mb-3">
                      {post.content.text}
                    </p>
                  )}
                  
                  {post.content.title && (
                    <h5 className="font-semibold text-foreground mb-2 text-sm">
                      {post.content.title}
                    </h5>
                  )}

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Heart className="w-3 h-3 mr-1" />
                        {post.engagement.likes || post.engagement.views}
                      </span>
                      <span className="flex items-center">
                        <MessageCircle className="w-3 h-3 mr-1" />
                        {post.engagement.comments || post.engagement.replies}
                      </span>
                    </div>
                    <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                      <ExternalLink className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Follow Us CTA */}
        <div className="text-center">
          <div className="bg-background/80 backdrop-blur-sm border border-accent/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl text-foreground mb-4">
              Join Our Musical Community
            </h3>
            <p className="text-muted-foreground mb-6">
              Follow us on social media for daily doses of classical music, behind-the-scenes content, 
              and exclusive updates from JSS Sangeetha Sabha.
            </p>
            
            <div className="flex justify-center space-x-4 mb-6">
              {['instagram', 'youtube', 'facebook', 'twitter'].map((platform) => (
                <Button
                  key={platform}
                  variant="outline"
                  size="sm"
                  className={`border-accent/30 text-accent hover:bg-gradient-to-r ${getPlatformColor(platform)} hover:text-white hover:border-transparent`}
                >
                  {getPlatformIcon(platform)}
                  <span className="ml-2 capitalize hidden sm:inline">Follow</span>
                </Button>
              ))}
            </div>
            
            <Button className="bg-destructive hover:bg-destructive/90 text-accent">
              <Music className="w-4 h-4 mr-2" />
              View All Social Content
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;





