import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Camera, Play, Calendar, Users, Award, Heart } from 'lucide-react';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      type: 'image',
      src: '/lovable-uploads/1604577f-833a-4c8c-88fd-03385f133d3f.png',
      title: 'Community Workshop',
      category: 'Education',
      date: '2024-01-15',
      description: 'Digital literacy training session with local youth'
    },
    {
      id: 2,
      type: 'image',
      src: '/lovable-uploads/1604577f-833a-4c8c-88fd-03385f133d3f.png',
      title: 'Mathare Resilience Center Groundbreaking',
      category: 'Infrastructure',
      date: '2024-02-08',
      description: 'Community leaders breaking ground for the new resilience center'
    },
    {
      id: 3,
      type: 'video',
      src: '/lovable-uploads/1604577f-833a-4c8c-88fd-03385f133d3f.png',
      title: 'Youth Leadership Program',
      category: 'Leadership',
      date: '2024-01-22',
      description: 'Young leaders presenting their community action plans'
    },
    {
      id: 4,
      type: 'image',
      src: '/lovable-uploads/1604577f-833a-4c8c-88fd-03385f133d3f.png',
      title: 'Community Research Session',
      category: 'Research',
      date: '2024-02-14',
      description: 'CLRA methodology in action - community members conducting research'
    },
    {
      id: 5,
      type: 'image',
      src: '/lovable-uploads/1604577f-833a-4c8c-88fd-03385f133d3f.png',
      title: 'Civic Education Workshop',
      category: 'Education',
      date: '2024-02-20',
      description: 'Teaching community members about their rights and civic participation'
    },
    {
      id: 6,
      type: 'video',
      src: '/lovable-uploads/1604577f-833a-4c8c-88fd-03385f133d3f.png',
      title: 'Ghetto Stories Documentation',
      category: 'Storytelling',
      date: '2024-03-01',
      description: 'Capturing authentic stories from the Mathare community'
    },
    {
      id: 7,
      type: 'image',
      src: '/lovable-uploads/1604577f-833a-4c8c-88fd-03385f133d3f.png',
      title: 'Digital Associates Training',
      category: 'Technology',
      date: '2024-03-10',
      description: 'Community members learning data collection and analysis skills'
    },
    {
      id: 8,
      type: 'image',
      src: '/lovable-uploads/1604577f-833a-4c8c-88fd-03385f133d3f.png',
      title: 'Community Clean-up Day',
      category: 'Environment',
      date: '2024-03-15',
      description: 'Residents working together to improve their neighborhood'
    }
  ];

  const categories = ['All', 'Education', 'Infrastructure', 'Leadership', 'Research', 'Technology', 'Storytelling', 'Environment'];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Camera className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Our Gallery
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Explore moments from our community work, workshops, and initiatives. 
              See the impact we're making together in Mathare.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                  <Camera className="w-8 h-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Photos</div>
              </div>
              <div className="text-center">
                <div className="bg-community-warm/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                  <Play className="w-8 h-8 text-community-warm" />
                </div>
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Videos</div>
              </div>
              <div className="text-center">
                <div className="bg-community-growth/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                  <Users className="w-8 h-8 text-community-growth" />
                </div>
                <div className="text-2xl font-bold text-foreground">200+</div>
                <div className="text-sm text-muted-foreground">People Featured</div>
              </div>
              <div className="text-center">
                <div className="bg-community-hope/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                  <Heart className="w-8 h-8 text-community-hope" />
                </div>
                <div className="text-2xl font-bold text-foreground">25+</div>
                <div className="text-sm text-muted-foreground">Events Documented</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="pb-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={category === 'All' ? 'default' : 'secondary'}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground px-4 py-2"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryItems.map((item) => (
                <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {item.type === 'video' && (
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <div className="bg-white/90 rounded-full p-3">
                          <Play className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                    )}
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="text-xs">
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-sm mb-1 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(item.date).toLocaleDateString()}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-secondary/5">
          <div className="max-w-2xl mx-auto text-center">
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Share Your Story
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have photos or videos from our community events? We'd love to feature your perspective 
              in our gallery and celebrate our collective impact.
            </p>
            <Button size="lg" className="btn-hero">
              Submit Your Photos
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Gallery;