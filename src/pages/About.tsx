import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { Target, Eye, Heart, Users, Award, Globe } from "lucide-react";

const About = () => {
  const values = [
    { icon: Heart, title: "Compassion", description: "We approach our work with empathy and care for every community member." },
    { icon: Users, title: "Community-Driven", description: "We believe in solutions that come from within the community itself." },
    { icon: Award, title: "Excellence", description: "We strive for the highest standards in all our programs and initiatives." },
    { icon: Globe, title: "Sustainability", description: "We focus on creating lasting change that continues beyond our direct involvement." },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        title="About Us"
        subtitle="Learn about our journey, mission, and the values that drive our work"
      />

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                The Ghetto Foundation was born from the heart of Mathare, one of Nairobi's oldest
                and largest informal settlements. Founded by community members who understood the
                challenges firsthand, we began with a simple mission: to create opportunities
                where there seemed to be none.
              </p>
              <p>
                Over the years, we have grown from a small grassroots initiative to a recognized
                community organization, impacting thousands of lives through education, health,
                and economic empowerment programs. Our approach has always been community-driven,
                believing that sustainable change comes from within.
              </p>
              <p>
                Today, we continue to work alongside community members, local leaders, and
                international partners to build a brighter future for Mathare and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower communities in Mathare and beyond through sustainable development
                initiatives, quality education, comprehensive health programs, and economic
                opportunities that create lasting positive change while respecting local
                culture and knowledge.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A world where every community, regardless of its circumstances, has access to
                the resources, knowledge, and opportunities needed to thrive. We envision
                Mathare as a model of community-driven development that inspires positive
                change across Africa and the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do and how we work with our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
