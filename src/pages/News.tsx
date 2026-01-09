import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Newspaper, 
  Calendar, 
  ArrowRight, 
  Coffee, 
  Users, 
  BookOpen, 
  Laptop, 
  Mic, 
  Scale,
  Building,
  Heart
} from 'lucide-react';

const News = () => {
  const featuredPost = {
    title: "Uji Sato: Nourishing Mathare's Future",
    description: "Every morning, Ghetto Foundation's Uji Sato program provides nutritious porridge to hundreds of children in Mathare. This simple act of care ensures that children start their day with energy and focus, enabling them to learn and grow. Uji Sato is more than just a meal—it's a symbol of community love and the foundation for brighter futures.",
    date: "2025-01-05",
    category: "Community",
    icon: Coffee,
    image: "/lovable-uploads/1604577f-833a-4c8c-88fd-03385f133d3f.png"
  };

  const blogPosts = [
    {
      title: "Digital Associates: Empowering Youth with Technology",
      description: "Our Digital Associates program trains young people in data collection, analysis, and digital literacy. Graduates become community researchers, using technology to document issues, track progress, and drive evidence-based solutions in Mathare.",
      date: "2025-01-03",
      category: "Technology",
      icon: Laptop,
      link: "/programs/digital-associates"
    },
    {
      title: "Youth Leadership: Building Tomorrow's Leaders",
      description: "The Youth Leadership program identifies and nurtures young leaders in Mathare. Through mentorship, training, and hands-on projects, we equip youth with skills to advocate for their communities and create positive change.",
      date: "2024-12-28",
      category: "Leadership",
      icon: Users,
      link: "/programs/youth-leadership"
    },
    {
      title: "Civic Education: Know Your Rights",
      description: "Our Civic Education initiative teaches community members about their constitutional rights, governance structures, and how to engage with local authorities. Knowledge is power—and we're giving that power to Mathare.",
      date: "2024-12-20",
      category: "Education",
      icon: Scale,
      link: "/programs/civic-education"
    },
    {
      title: "Ghetto Stories: Authentic Voices from Mathare",
      description: "Ghetto Stories documents the real experiences of Mathare residents through photography, video, and written narratives. These stories challenge stereotypes and showcase the resilience, creativity, and humanity of our community.",
      date: "2024-12-15",
      category: "Storytelling",
      icon: Mic,
      link: "/programs/ghetto-stories"
    },
    {
      title: "Mathare Resilience Center: A Hub for Community Growth",
      description: "The Mathare Resilience Center serves as a multi-purpose facility offering vocational training, mental health support, and community gatherings. It's a safe space where residents can access resources and build connections.",
      date: "2024-12-10",
      category: "Infrastructure",
      icon: Building,
      link: "/programs/mathare-resilience"
    },
    {
      title: "Community-Led Research Action (CLRA)",
      description: "Our CLRA methodology puts community members at the center of research. Residents identify problems, design solutions, and measure impact—ensuring programs truly serve local needs.",
      date: "2024-12-05",
      category: "Research",
      icon: BookOpen,
      link: "/programs/research"
    }
  ];

  const announcements = [
    {
      title: "Volunteer Registration Open for 2025",
      date: "2025-01-08",
      type: "Announcement"
    },
    {
      title: "Partnership with VU University Amsterdam Renewed",
      date: "2025-01-02",
      type: "News"
    },
    {
      title: "Uji Sato Program Reaches 500 Children Daily",
      date: "2024-12-30",
      type: "Milestone"
    },
    {
      title: "New Youth Leadership Cohort Begins January 15",
      date: "2024-12-25",
      type: "Event"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 md:py-20 px-4 bg-community-warm/10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <Newspaper className="w-10 h-10 sm:w-12 sm:h-12 text-community-warm mr-4" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                Announcements & News
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Stay updated with the latest news, stories, and announcements from Ghetto Foundation. 
              Discover how our programs are making a difference in Mathare.
            </p>
          </div>
        </section>

        {/* Announcements Banner */}
        <section className="py-8 px-4 bg-community-trust/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-foreground flex items-center">
              <span className="mr-2">📢</span> Latest Announcements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {announcements.map((item, index) => (
                <Card key={index} className="hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-4">
                    <Badge variant="secondary" className="mb-2 text-xs">
                      {item.type}
                    </Badge>
                    <h3 className="font-semibold text-sm mb-2 line-clamp-2">{item.title}</h3>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post - Uji Sato */}
        <section className="py-12 sm:py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-foreground">Featured Story</h2>
            <Card className="overflow-hidden hover-lift animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto bg-community-warm/20 flex items-center justify-center p-8">
                  <featuredPost.icon className="w-24 h-24 sm:w-32 sm:h-32 text-community-warm" />
                </div>
                <CardContent className="p-6 sm:p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-community-warm text-white">
                    {featuredPost.category}
                  </Badge>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featuredPost.description}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        {/* Blog Section - Programs */}
        <section className="py-12 sm:py-16 px-4 bg-secondary/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">Our Programs & Stories</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Learn about the initiatives that are transforming lives in Mathare
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <Card key={index} className="group overflow-hidden hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="aspect-video bg-gradient-to-br from-community-warm/20 to-community-trust/20 flex items-center justify-center">
                    <post.icon className="w-16 h-16 text-community-warm group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardContent className="p-5">
                    <Badge variant="secondary" className="mb-3 text-xs">
                      {post.category}
                    </Badge>
                    <h3 className="font-bold text-lg mb-3 line-clamp-2 group-hover:text-community-warm transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </div>
                      <Link to={post.link}>
                        <Button variant="ghost" size="sm" className="text-community-warm hover:text-community-warm/80">
                          Read More <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-community-warm/10">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <Heart className="w-12 h-12 text-community-warm mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">
              Support Our Mission
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Your contribution helps us continue these life-changing programs. 
              Together, we can create lasting impact in Mathare.
            </p>
            <Link to="/donate">
              <Button className="btn-hero">
                Donate Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default News;
