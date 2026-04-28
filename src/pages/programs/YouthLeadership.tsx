import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Star, Megaphone, BookOpen, Award, Target } from 'lucide-react';
import heroImage from '@/assets/programs/youth-leadership-hero.jpg';
import StatNumber from "@/components/StatNumber";

const YouthLeadership = () => {
  const programs = [
    {
      icon: Star,
      title: "Leadership Skills Training",
      description: "Comprehensive workshops on communication, decision-making, and team management.",
      participants: "25+ youth leaders"
    },
    {
      icon: Megaphone,
      title: "Community Advocacy",
      description: "Training young people to advocate for community needs and represent their peers.",
      participants: "15+ advocates"
    },
    {
      icon: BookOpen,
      title: "Mentorship Program",
      description: "Pairing emerging leaders with experienced community leaders for guidance.",
      participants: "30+ mentoring relationships"
    },
    {
      icon: Target,
      title: "Project Leadership",
      description: "Opportunities for youth to lead their own community improvement projects.",
      participants: "10+ youth-led projects"
    }
  ];

  const leaders = [
    {
      name: "Sarah Wanjiku",
      role: "Youth Coordinator",
      achievement: "Led 5 community clean-up initiatives",
      age: 22
    },
    {
      name: "James Otieno", 
      role: "Peer Educator",
      achievement: "Mentored 15 younger community members",
      age: 20
    },
    {
      name: "Grace Nyambura",
      role: "Advocacy Representative",
      achievement: "Successfully campaigned for new water point",
      age: 24
    },
    {
      name: "Michael Kariuki",
      role: "Project Manager",
      achievement: "Organized youth skills training program",
      age: 23
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
              Leadership Development
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Youth Leadership
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Empowering young leaders in Mathare to drive positive change in their community 
              through skills development, mentorship, and hands-on leadership opportunities.
            </p>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Our Vision for Youth Leadership</CardTitle>
                <CardDescription className="text-lg">
                  We believe that young people are not just the leaders of tomorrow - they are 
                  the leaders of today. Our Youth Leadership program provides the tools, 
                  opportunities, and support needed for youth to take an active role in 
                  shaping their community's future.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Programs */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Leadership Programs</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our comprehensive programs are designed to develop confident, capable leaders 
                who can address community challenges and create positive change.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {programs.map((program, index) => {
                const Icon = program.icon;
                return (
                  <Card key={index} className="hover-card h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{program.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{program.description}</p>
                      <div className="text-sm font-medium text-primary">
                        {program.participants}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Leaders */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Young Leaders</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Meet some of the inspiring young people who are making a difference in Mathare 
                through their leadership and community engagement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {leaders.map((leader, index) => (
                <Card key={index} className="hover-card text-center">
                  <CardHeader>
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Users className="w-10 h-10 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{leader.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {leader.role}, Age {leader.age}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{leader.achievement}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Development */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Leadership Skills We Develop</h2>
              <p className="text-muted-foreground">
                Our program focuses on building practical skills that young leaders need 
                to be effective in their communities.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Megaphone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Communication</h3>
                <p className="text-sm text-muted-foreground">
                  Public speaking, active listening, and effective messaging
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Team Building</h3>
                <p className="text-sm text-muted-foreground">
                  Collaboration, conflict resolution, and group dynamics
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Project Management</h3>
                <p className="text-sm text-muted-foreground">
                  Planning, implementation, and evaluation of initiatives
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
              Our youth leadership program has created measurable positive impact 
              in developing the next generation of community leaders.
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <StatNumber value="80+" className="text-3xl font-bold text-primary mb-2" />
                <p className="text-sm text-muted-foreground">Youth Leaders Trained</p>
              </div>
              <div>
                <StatNumber value="25+" className="text-3xl font-bold text-primary mb-2" />
                <p className="text-sm text-muted-foreground">Community Projects Led</p>
              </div>
              <div>
                <StatNumber value="90%" className="text-3xl font-bold text-primary mb-2" />
                <p className="text-sm text-muted-foreground">Continue Community Engagement</p>
              </div>
              <div>
                <StatNumber value="3" className="text-3xl font-bold text-primary mb-2" />
                <p className="text-sm text-muted-foreground">Years Program Running</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default YouthLeadership;