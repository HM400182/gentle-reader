import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Heart, Briefcase, GraduationCap, Shield, Music, Lightbulb, Target } from 'lucide-react';
import heroImage from '@/assets/programs/ghetto-youths-hero.jpg';
import StatNumber from "@/components/StatNumber";

const GhettoYouths = () => {
  const initiatives = [
    {
      icon: Briefcase,
      title: "Skills Development",
      description: "Vocational training and hands-on skills for employment and entrepreneurship.",
      impact: "150+ youth trained"
    },
    {
      icon: GraduationCap,
      title: "Education Support",
      description: "Scholarships, tutoring, and mentorship for academic success.",
      impact: "80+ students supported"
    },
    {
      icon: Shield,
      title: "Safe Spaces",
      description: "Creating protected environments for youth to learn, grow, and connect.",
      impact: "3 community centers"
    },
    {
      icon: Music,
      title: "Arts & Culture",
      description: "Creative expression through music, art, drama, and cultural activities.",
      impact: "200+ participants"
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "Technology skills and entrepreneurship for the digital economy.",
      impact: "40+ tech trainees"
    },
    {
      icon: Heart,
      title: "Mental Health",
      description: "Counseling, peer support, and wellness programs for youth wellbeing.",
      impact: "100+ youth reached"
    }
  ];

  const youthProfiles = [
    {
      name: "Brian Omondi",
      age: 19,
      role: "Youth Ambassador",
      story: "Started as a participant, now leads community outreach programs."
    },
    {
      name: "Faith Njeri",
      age: 21,
      role: "Peer Mentor",
      story: "Overcame challenges to become a mentor for younger community members."
    },
    {
      name: "Dennis Kiprop",
      age: 23,
      role: "Tech Trainer",
      story: "Learned coding through our program and now teaches others."
    },
    {
      name: "Esther Achieng",
      age: 20,
      role: "Arts Coordinator",
      story: "Uses creative arts to help youth express themselves and heal."
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
              Youth Empowerment
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Ghetto Youths
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Empowering the next generation of Mathare through education, skills training, 
              mentorship, and opportunities that transform lives and build futures.
            </p>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Investing in Our Youth</CardTitle>
                <CardDescription className="text-lg">
                  Young people are the heartbeat of Mathare. The Ghetto Youths program recognizes 
                  their potential and provides comprehensive support to help them overcome barriers, 
                  develop skills, and become positive agents of change in their community. We believe 
                  that when youth thrive, communities transform.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Youth Initiatives */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Youth Initiatives</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive programs designed to address the diverse needs and aspirations 
                of young people in Mathare.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {initiatives.map((initiative, index) => {
                const Icon = initiative.icon;
                return (
                  <Card key={index} className="hover-card h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{initiative.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{initiative.description}</p>
                      <div className="text-sm font-medium text-primary">
                        {initiative.impact}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Youth Profiles */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Youth Voices</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Meet some of the inspiring young people who are transforming their lives 
                and making a difference in Mathare.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {youthProfiles.map((youth, index) => (
                <Card key={index} className="hover-card text-center">
                  <CardHeader>
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Users className="w-10 h-10 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{youth.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {youth.role}, Age {youth.age}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{youth.story}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
              <p className="text-muted-foreground">
                A holistic approach that addresses the whole person - mind, body, and community.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Youth-Centered</h3>
                <p className="text-sm text-muted-foreground">
                  Programs designed with and for young people, respecting their voices and choices
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Peer Support</h3>
                <p className="text-sm text-muted-foreground">
                  Youth helping youth through mentorship, accountability, and shared experiences
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Future-Focused</h3>
                <p className="text-sm text-muted-foreground">
                  Building skills and mindsets for sustainable success in a changing world
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Program Impact</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our youth programs are creating lasting change in the lives of young people 
              across Mathare.
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <StatNumber value="500+" className="text-3xl font-bold text-primary mb-2" />
                <p className="text-sm text-muted-foreground">Youth Reached</p>
              </div>
              <div>
                <StatNumber value="150+" className="text-3xl font-bold text-primary mb-2" />
                <p className="text-sm text-muted-foreground">Skills Graduates</p>
              </div>
              <div>
                <StatNumber value="75%" className="text-3xl font-bold text-primary mb-2" />
                <p className="text-sm text-muted-foreground">Employment Rate</p>
              </div>
              <div>
                <StatNumber value="5" className="text-3xl font-bold text-primary mb-2" />
                <p className="text-sm text-muted-foreground">Years Running</p>
              </div>
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join the Movement</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're a young person looking for opportunities or someone who wants 
              to support youth empowerment, there's a place for you.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="text-left">
                <CardHeader>
                  <CardTitle>For Youth</CardTitle>
                  <CardDescription>
                    Join our programs and connect with a community of young people 
                    working together to build better futures.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-left">
                <CardHeader>
                  <CardTitle>For Supporters</CardTitle>
                  <CardDescription>
                    Mentor, volunteer, or donate to help young people in Mathare 
                    reach their full potential.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default GhettoYouths;
