import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, Book, Shield, Scale, Coffee } from 'lucide-react';

const MathareResilience = () => {
  const features = [
    {
      icon: Users,
      title: "Vocational Training Center",
      description: "Skills development programs for sustainable livelihoods and economic empowerment."
    },
    {
      icon: Book,
      title: "Mathare Community Library",
      description: "Educational resources and learning spaces for all community members."
    },
    {
      icon: Shield,
      title: "Research & Resource Center",
      description: "Data collection and analysis to inform community-led solutions."
    },
    {
      icon: Scale,
      title: "Community Response & Safe Space",
      description: "Support services and conflict resolution for community members."
    },
    {
      icon: MapPin,
      title: "Social Justice Center Office",
      description: "Advocacy and legal support for community rights and social justice."
    },
    {
      icon: Coffee,
      title: "Communal Gathering Area",
      description: "Spaces for community meetings, events, and social cohesion activities."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 text-primary">
              Community Development
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Mathare Resilience
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Building a comprehensive community center that empowers residents through education, 
              skills training, and social justice advocacy.
            </p>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl mb-4">Coming Soon</CardTitle>
                <CardDescription className="text-lg">
                  We're excited to announce the development of the Mathare Resilience Center - 
                  a multi-purpose facility that will serve as the heart of our community initiatives.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Center Features */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Center Features</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The Mathare Resilience Center will house multiple facilities designed to 
                address the diverse needs of our community members.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="hover-card h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Impact Vision */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Vision for Impact</h2>
            <p className="text-lg text-muted-foreground mb-8">
              The Mathare Resilience Center will create lasting change by providing integrated 
              services that address education, economic empowerment, social justice, and community cohesion.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-sm text-muted-foreground">Community Members Served</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <p className="text-sm text-muted-foreground">Skills Training Programs</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <p className="text-sm text-muted-foreground">Community-Led Approach</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default MathareResilience;