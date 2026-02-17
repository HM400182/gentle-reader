import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Recycle, GraduationCap, Utensils, Users, Target, RefreshCw, Briefcase } from 'lucide-react';

import heroImage from '@/assets/programs/community-projects-hero.jpg';
import educationImg from '@/assets/programs/community-education.jpg';
import kitchenImg from '@/assets/programs/community-kitchen.jpg';
import wasteImg from '@/assets/programs/community-waste.jpg';
import innovationImg from '@/assets/programs/community-innovation.jpg';
import youthBusinessImg from '@/assets/programs/community-youth-business.jpg';
import ujiImage1 from '@/assets/programs/uji-sato-1.jpg';

const CommunityProjects = () => {
  const projects = [
    {
      icon: GraduationCap,
      title: "Education Support",
      description:
        "Providing school supplies, tutoring, and scholarship opportunities for local students.",
      status: "Active",
      impact: "200+ students supported",
      image: educationImg,
    },
    {
      icon: Utensils,
      title: "Community Kitchen",
      description:
        "Nutritional programs and food security initiatives for vulnerable families.",
      status: "Active",
      impact: "150+ families fed monthly",
      image: kitchenImg,
    },
    {
      icon: Recycle,
      title: "Waste Management",
      description:
        "Community-led recycling and waste reduction programs for environmental sustainability.",
      status: "Planning",
      impact: "5 tons waste diverted monthly",
      image: wasteImg,
    },
    {
      icon: Briefcase,
      title: "Youth Training in Business Ideas",
      description:
        "Equipping young people with entrepreneurship skills, business planning, and mentorship to create sustainable livelihoods.",
      status: "Active",
      impact: "100+ youth trained",
      image: youthBusinessImg,
    },
    {
      icon: Utensils,
      title: "Uji Sato",
      description:
        "Community-led feeding initiative providing nutritious porridge to children, the elderly, and vulnerable families in Mathare.",
      status: "Active",
      impact: "200+ people fed weekly",
      image: ujiImage1,
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description:
        "Supporting local entrepreneurs and innovation through mentorship and resources.",
      status: "Development",
      impact: "20+ startups supported",
      image: innovationImg,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Planning":
        return "bg-blue-100 text-blue-800";
      case "Development":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero Section */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <Badge
              variant="outline"
              className="mb-4 text-white border-white/50 bg-white/10"
            >
              Community Development
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Community Projects
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Community-driven initiatives that address local needs and create
              lasting positive change through collaborative action and
              sustainable solutions.
            </p>
          </div>
        </section>

        {/* Community-Led Approach */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              Community-Led Development
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our projects are designed, implemented, and sustained by community
              members themselves. We believe that the people who live in Mathare
              are the best experts on what their community needs.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Community Ownership</h3>
                <p className="text-sm text-muted-foreground">
                  Projects are owned and led by community members
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Local Solutions</h3>
                <p className="text-sm text-muted-foreground">
                  Solutions are designed to address specific local challenges
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <RefreshCw className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Sustainable Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Long-term sustainability through community capacity building
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Current Projects */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Current Projects</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These community-driven initiatives are making a real difference
                in the lives of Mathare residents.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <Card
                    key={index}
                    className="hover-card h-full overflow-hidden group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <Badge
                        className={`absolute top-3 right-3 text-xs ${getStatusColor(
                          project.status
                        )}`}
                      >
                        {project.status}
                      </Badge>
                    </div>

                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">
                          {project.title}
                        </CardTitle>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {project.description}
                      </p>
                      <div className="text-sm font-medium text-primary">
                        {project.impact}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Every community project starts with an idea and grows through
              collective action. Join us in creating positive change in Mathare.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="text-left">
                <CardHeader>
                  <CardTitle>Propose a Project</CardTitle>
                  <CardDescription>
                    Have an idea for a community project? We'd love to hear
                    about it and help you bring it to life.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-left">
                <CardHeader>
                  <CardTitle>Volunteer</CardTitle>
                  <CardDescription>
                    Join existing projects and contribute your skills, time,
                    and energy to making a difference in the community.
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

export default CommunityProjects;
