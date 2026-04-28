import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Vote, Scale, BookOpen, Users, Megaphone, Award } from 'lucide-react';
import heroImage from '@/assets/programs/civic-education-hero.jpg';
import StatNumber from "@/components/StatNumber";

const CivicEducation = () => {
  const topics = [
    {
      icon: Vote,
      title: "Democratic Participation",
      description: "Understanding voting rights, election processes, and civic participation in democracy.",
      sessions: "12 workshops conducted"
    },
    {
      icon: Scale,
      title: "Human Rights",
      description: "Education about fundamental human rights and how to protect and advocate for them.",
      sessions: "8 rights awareness sessions"
    },
    {
      icon: BookOpen,
      title: "Government Systems",
      description: "How local, county, and national government systems work and how citizens can engage.",
      sessions: "10 educational sessions"
    },
    {
      icon: Megaphone,
      title: "Community Advocacy",
      description: "Skills and strategies for effective community advocacy and public participation.",
      sessions: "15 advocacy trainings"
    }
  ];

  const outcomes = [
    {
      title: "Increased Voter Registration",
      description: "200+ new voters registered in the community",
      impact: "40% increase in local participation"
    },
    {
      title: "Rights Awareness",
      description: "Community members now know their rights and how to access justice",
      impact: "85% report improved rights knowledge"
    },
    {
      title: "Government Engagement",
      description: "Regular community participation in local government meetings",
      impact: "60+ residents actively participating"
    },
    {
      title: "Policy Advocacy",
      description: "Community successfully advocated for improved local services",
      impact: "3 policy changes achieved"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero Section with Background Image */}
        <section className="relative py-24 px-4 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />
          
          {/* Content */}
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 text-white border-white/50 bg-white/10">
              Civic Engagement
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Civic Education
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Empowering community members with knowledge about their rights, responsibilities, 
              and opportunities for democratic participation and civic engagement.
            </p>
          </div>
        </section>

        {/* Program Overview */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Why Civic Education Matters</CardTitle>
                <CardDescription className="text-lg">
                  Civic education is the foundation of democratic participation. When community 
                  members understand their rights, know how government works, and have the skills 
                  to advocate for their needs, they can effectively participate in shaping their 
                  community and holding leaders accountable.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Education Topics */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Civic Education Topics</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We cover essential topics that help community members become informed, 
                active citizens who can effectively participate in democratic processes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {topics.map((topic, index) => {
                const Icon = topic.icon;
                return (
                  <Card key={index} className="hover-card h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{topic.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{topic.description}</p>
                      <div className="text-sm font-medium text-primary">
                        {topic.sessions}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Learning Approach */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Learning Approach</h2>
              <p className="text-muted-foreground">
                We use interactive, community-centered methods that make civic education 
                accessible and relevant to daily life.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Community Discussions</h3>
                <p className="text-sm text-muted-foreground">
                  Interactive group discussions that connect civic concepts to local experiences
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Practical Exercises</h3>
                <p className="text-sm text-muted-foreground">
                  Hands-on activities like mock elections and advocacy role-plays
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Real-World Application</h3>
                <p className="text-sm text-muted-foreground">
                  Immediate opportunities to apply learning through community advocacy
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Program Outcomes */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Program Outcomes</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our civic education program has led to measurable improvements in 
                community engagement and democratic participation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {outcomes.map((outcome, index) => (
                <Card key={index} className="hover-card h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{outcome.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{outcome.description}</p>
                    <div className="text-sm font-medium text-primary">
                      {outcome.impact}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Initiatives */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Upcoming Initiatives</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We continue to expand our civic education efforts to reach more community 
              members and address emerging needs for democratic participation.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="text-left">
                <CardHeader>
                  <CardTitle>Youth Civic Leadership</CardTitle>
                  <CardDescription>
                    Special civic education program designed for young people to prepare 
                    them for leadership roles in the community.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-left">
                <CardHeader>
                  <CardTitle>Women's Political Participation</CardTitle>
                  <CardDescription>
                    Focused program to increase women's participation in political processes 
                    and leadership opportunities.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Program Impact</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <StatNumber value="500+" className="text-3xl font-bold text-primary mb-2" />
                <p className="text-sm text-muted-foreground">Community Members Trained</p>
              </div>
              <div>
                <StatNumber value="45" className="text-3xl font-bold text-primary mb-2" />
                <p className="text-sm text-muted-foreground">Education Sessions Held</p>
              </div>
              <div>
                <StatNumber value="75%" className="text-3xl font-bold text-primary mb-2" />
                <p className="text-sm text-muted-foreground">Increased Civic Participation</p>
              </div>
              <div>
                <StatNumber value="2" className="text-3xl font-bold text-primary mb-2" />
                <p className="text-sm text-muted-foreground">Years Program Running</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CivicEducation;