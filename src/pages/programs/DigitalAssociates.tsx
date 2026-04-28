import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart3, Users, TrendingUp, Target, Database, LineChart } from 'lucide-react';
import heroImage from '@/assets/programs/digital-associates-hero.jpg';
import hillaryImg from '@/assets/Gemini_Generated_Image_tb938vtb938vtb93.jpg';
import StatNumber from "@/components/StatNumber";

const DigitalAssociates = () => {
  const services = [
    {
      icon: Database,
      title: "Data Collection",
      description: "Systematic gathering of qualitative and quantitative data from community sources."
    },
    {
      icon: LineChart,
      title: "Data Analysis",
      description: "Advanced analysis techniques to extract meaningful insights from collected data."
    },
    {
      icon: BarChart3,
      title: "Performance Measurement",
      description: "Tracking key metrics to evaluate program effectiveness and community impact."
    },
    {
      icon: TrendingUp,
      title: "ROI Quantification",
      description: "Calculating return on investment for community programs and initiatives."
    },
    {
      icon: Users,
      title: "Experience Enhancement",
      description: "Improving online and offline experiences based on data-driven insights."
    },
    {
      icon: Target,
      title: "Operations Optimization",
      description: "Streamlining processes and operations through evidence-based recommendations."
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
              Data & Analytics
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Digital Associates
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Collecting, measuring, and analyzing qualitative and quantitative data to enhance 
              operations, improve online experiences, and quantify return on investment.
            </p>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Data Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We leverage data science and analytics to help organizations make informed 
                decisions and maximize their community impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="hover-card h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Process</h2>
              <p className="text-muted-foreground">
                A systematic approach to data-driven decision making
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Data Collection</h3>
                  <p className="text-muted-foreground">
                    We gather comprehensive data from multiple sources including surveys, 
                    interviews, digital platforms, and community feedback systems.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Analysis & Insights</h3>
                  <p className="text-muted-foreground">
                    Using advanced analytical tools, we process and analyze data to uncover 
                    patterns, trends, and actionable insights.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Implementation</h3>
                  <p className="text-muted-foreground">
                    We translate insights into practical recommendations and support 
                    implementation to maximize impact and ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our dedicated data specialists and analysts who drive meaningful insights and impact through technology.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover-card h-full">
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <img
                      src={hillaryImg}
                      alt="Hillary Mukaka"
                      className="w-24 h-24 rounded-full mx-auto object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">Hillary Mukaka</h3>
                    <p className="text-primary font-medium mb-3">Software Eng</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Hillary is a software engineer who develops and maintains our data collection,website and analysis tools.
                    </p>
                    <div className="text-xs text-muted-foreground">📍  Nairobi,Kenya</div>
                  </div>
                </CardContent>
              </Card>

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
                      David coordinates our data collection and analysis efforts, ensuring research methodology excellence in all our projects.
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
                      Samuel provides strategic oversight for our data initiatives, ensuring they align with community needs and organizational goals.
                    </p>
                    <div className="text-xs text-muted-foreground">📍 Mathare, Nairobi</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Measurable Impact</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our data-driven approach has helped organizations achieve significant improvements 
              in their operations and community engagement.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <StatNumber value="85%" className="text-3xl font-bold text-primary mb-2" />
                <p className="text-sm text-muted-foreground">Average ROI Improvement</p>
              </div>
              <div>
                <StatNumber value="300+" className="text-3xl font-bold text-primary mb-2" />
                <p className="text-sm text-muted-foreground">Data Points Analyzed</p>
              </div>
              <div>
                <StatNumber value="25+" className="text-3xl font-bold text-primary mb-2" />
                <p className="text-sm text-muted-foreground">Organizations Served</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DigitalAssociates;