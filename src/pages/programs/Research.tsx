import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Users, BarChart3, Lightbulb, FileText, Target } from 'lucide-react';
import heroImage from '@/assets/programs/research-hero.jpg';
import StatNumber from "@/components/StatNumber";

const Research = () => {
  const principles = [
    {
      icon: Users,
      title: "Community Leadership",
      description: "Research is designed, conducted, and owned by community members themselves."
    },
    {
      icon: Target,
      title: "Action-Oriented",
      description: "Research directly informs and drives community-led action and solutions."
    },
    {
      icon: Lightbulb,
      title: "Participatory Methods",
      description: "Everyone in the community has a voice in the research process and outcomes."
    },
    {
      icon: BarChart3,
      title: "Evidence-Based",
      description: "Decisions and actions are grounded in solid evidence and community insights."
    }
  ];

  const researchAreas = [
    {
      title: "Housing & Infrastructure",
      description: "Understanding housing conditions, infrastructure needs, and development priorities.",
      status: "Ongoing"
    },
    {
      title: "Education & Skills",
      description: "Mapping educational gaps, skills needs, and learning opportunities in the community.",
      status: "Completed"
    },
    {
      title: "Economic Opportunities", 
      description: "Identifying income sources, market opportunities, and economic challenges.",
      status: "Planning"
    },
    {
      title: "Health & Wellbeing",
      description: "Assessing health needs, access to services, and community wellness priorities.",
      status: "Ongoing"
    },
    {
      title: "Social Cohesion",
      description: "Exploring community networks, social capital, and collective action capacity.",
      status: "Completed"
    },
    {
      title: "Environmental Issues",
      description: "Documenting environmental challenges and community-led environmental solutions.",
      status: "Planning"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ongoing': return 'bg-blue-100 text-blue-800';
      case 'Completed': return 'bg-green-100 text-green-800'; 
      case 'Planning': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

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
              Research & Action
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Our Research (CLRA)
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Community-Led Research and Action (CLRA) - empowering residents to investigate 
              their own challenges and develop evidence-based solutions.
            </p>
          </div>
        </section>

        {/* What is CLRA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">What is Community-Led Research and Action?</CardTitle>
                <CardDescription className="text-lg">
                  CLRA is a methodology that puts community members at the center of the research process. 
                  Instead of being subjects of research, residents become researchers themselves, 
                  investigating issues that matter to them and using findings to drive positive change.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Community Ownership</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Community members design research questions, collect data, and interpret findings 
                      based on their lived experiences and priorities.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Action for Change</h4>
                    <p className="text-sm text-muted-foreground">
                      Research findings directly inform community-led initiatives, policy advocacy, 
                      and sustainable solutions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CLRA Principles */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our CLRA Principles</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These core principles guide our approach to community-led research and ensure 
                that the process remains authentic and impactful.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {principles.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <Card key={index} className="hover-card h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{principle.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{principle.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Current Research Areas</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our community researchers are investigating various aspects of life in Mathare 
                to better understand challenges and opportunities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchAreas.map((area, index) => (
                <Card key={index} className="hover-card h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-lg">{area.title}</CardTitle>
                      <Badge className={`text-xs ${getStatusColor(area.status)}`}>
                        {area.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our research team combines academic expertise with deep community knowledge to drive meaningful change.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover-card h-full">
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
                      alt="David Mwangi"
                      className="w-24 h-24 rounded-full mx-auto object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">David Mwangi</h3>
                    <p className="text-primary font-medium mb-3">Research Coordinator</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      David leads our CLRA initiatives and holds a degree in Social Sciences. He's passionate about participatory research methodologies.
                    </p>
                    <div className="text-xs text-muted-foreground">📍 Mathare, Nairobi</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-card h-full">
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                      alt="Samuel Kiprotich"
                      className="w-24 h-24 rounded-full mx-auto object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">Samuel Kiprotich</h3>
                    <p className="text-primary font-medium mb-3">Founder & Executive Director</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Samuel provides strategic direction for our research programs, ensuring community ownership and actionable outcomes.
                    </p>
                    <div className="text-xs text-muted-foreground">📍 Mathare, Nairobi</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-card h-full">
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <img
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
                      alt="Grace Wanjiku"
                      className="w-24 h-24 rounded-full mx-auto object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">Grace Wanjiku</h3>
                    <p className="text-primary font-medium mb-3">Program Director</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Grace ensures our research translates into effective community programs and sustainable development initiatives.
                    </p>
                    <div className="text-xs text-muted-foreground">📍 Mathare, Nairobi</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Impact & Results */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Research Impact</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our community-led research has generated valuable insights and driven concrete 
              actions for positive change in Mathare.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <StatNumber value="15+" className="text-3xl font-bold text-primary mb-2" />
                <p className="text-sm text-muted-foreground">Community Researchers Trained</p>
              </div>
              <div>
                <StatNumber value="8" className="text-3xl font-bold text-primary mb-2" />
                <p className="text-sm text-muted-foreground">Research Studies Completed</p>
              </div>
              <div>
                <StatNumber value="500+" className="text-3xl font-bold text-primary mb-2" />
                <p className="text-sm text-muted-foreground">Community Members Engaged</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Research;