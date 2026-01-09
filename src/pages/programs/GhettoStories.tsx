import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Mic, Camera, Heart, Users, Star } from 'lucide-react';

const GhettoStories = () => {
  const storyTypes = [
    {
      icon: BookOpen,
      title: "Written Narratives",
      description: "Community members share their experiences through written stories and memoirs.",
      count: "50+ stories published"
    },
    {
      icon: Mic,
      title: "Audio Testimonials",
      description: "Oral history project capturing voices and experiences of community elders.",
      count: "30+ recordings collected"
    },
    {
      icon: Camera,
      title: "Photo Stories",
      description: "Visual storytelling that captures daily life, challenges, and celebrations.",
      count: "100+ photo narratives"
    },
    {
      icon: Heart,
      title: "Success Stories",
      description: "Celebrating achievements, resilience, and positive change in the community.",
      count: "25+ inspiring stories"
    }
  ];

  const featuredStories = [
    {
      title: "From Streets to Success",
      author: "Mary Wanjiru",
      preview: "How community support helped me build my own business and create jobs for other women.",
      category: "Entrepreneurship",
      readTime: "5 min read"
    },
    {
      title: "The Teacher's Journey",
      author: "Peter Kamau", 
      preview: "Starting an informal school in my one-room house and watching children's dreams come alive.",
      category: "Education",
      readTime: "7 min read"
    },
    {
      title: "Grandmother's Wisdom",
      author: "Rebecca Nyokabi",
      preview: "Life lessons from an elder who has seen Mathare transform over five decades.",
      category: "Heritage",
      readTime: "10 min read"
    },
    {
      title: "Youth Breaking Barriers",
      author: "Kevin Ochieng",
      preview: "How technology and determination opened doors I never thought possible.",
      category: "Technology",
      readTime: "6 min read"
    }
  ];

  const themes = [
    {
      title: "Resilience & Hope",
      description: "Stories of overcoming challenges and maintaining hope for the future",
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Community Unity",
      description: "How neighbors support each other through difficult times",
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Cultural Heritage",
      description: "preserving and celebrating the rich cultural traditions of our community", 
      color: "bg-purple-100 text-purple-800"
    },
    {
      title: "Innovation & Change",
      description: "Creative solutions and positive changes happening in Mathare",
      color: "bg-orange-100 text-orange-800"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 text-primary">
              Community Narratives
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Ghetto Stories
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Amplifying the voices, experiences, and wisdom of Mathare community members 
              through authentic storytelling that challenges stereotypes and celebrates resilience.
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Why Stories Matter</CardTitle>
                <CardDescription className="text-lg">
                  Every person in Mathare has a story worth telling. Ghetto Stories is our platform 
                  for community members to share their experiences, wisdom, struggles, and triumphs 
                  in their own voices. These stories challenge negative stereotypes, celebrate 
                  resilience, and show the world the true spirit of our community.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Story Types */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Types of Stories We Share</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We use various formats to capture and share the diverse experiences 
                of our community members.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {storyTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <Card key={index} className="hover-card h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{type.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{type.description}</p>
                      <div className="text-sm font-medium text-primary">
                        {type.count}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Story Themes */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Common Themes</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                While every story is unique, certain themes emerge that reflect 
                the shared experiences and values of our community.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {themes.map((theme, index) => (
                <Card key={index} className="hover-card h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-lg">{theme.title}</CardTitle>
                      <Badge className={`text-xs ${theme.color}`}>
                        Theme
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{theme.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Stories */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Stories</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Here are some of the powerful stories shared by our community members.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {featuredStories.map((story, index) => (
                <Card key={index} className="hover-card h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <CardTitle className="text-lg mb-1">{story.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">by {story.author}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="text-xs mb-1">
                          {story.category}
                        </Badge>
                        <p className="text-xs text-muted-foreground">{story.readTime}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic">"{story.preview}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Community Impact */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Impact of Storytelling</h2>
              <p className="text-muted-foreground">
                Ghetto Stories is more than just sharing experiences - it's about 
                changing narratives and building understanding.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Community Connection</h3>
                <p className="text-sm text-muted-foreground">
                  Stories help community members connect with each other's experiences
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Changing Perceptions</h3>
                <p className="text-sm text-muted-foreground">
                  Authentic stories challenge negative stereotypes about informal settlements
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Healing & Empowerment</h3>
                <p className="text-sm text-muted-foreground">
                  Sharing stories can be therapeutic and empowering for storytellers
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Share Your Story</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Do you have a story to tell? We believe every voice matters and every 
              experience has value. Join us in sharing the real stories of Mathare.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="text-left">
                <CardHeader>
                  <CardTitle>Submit Your Story</CardTitle>
                  <CardDescription>
                    Share your experience in writing, audio, or photos. Our team 
                    will help you tell your story in your own voice.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-left">
                <CardHeader>
                  <CardTitle>Story Workshops</CardTitle>
                  <CardDescription>
                    Join our storytelling workshops to learn techniques and connect 
                    with other community storytellers.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Stories by Numbers</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">205+</div>
                <p className="text-sm text-muted-foreground">Stories Shared</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">75</div>
                <p className="text-sm text-muted-foreground">Community Storytellers</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                <p className="text-sm text-muted-foreground">People Reached</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4</div>
                <p className="text-sm text-muted-foreground">Years Collecting Stories</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default GhettoStories;