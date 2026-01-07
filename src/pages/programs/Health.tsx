import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { HeartPulse, Stethoscope, Brain, Baby, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Health = () => {
  const initiatives = [
    {
      icon: Stethoscope,
      title: "Medical Outreach",
      description: "Regular health camps providing free medical check-ups and treatment.",
    },
    {
      icon: Brain,
      title: "Mental Health Support",
      description: "Counseling services and mental health awareness programs.",
    },
    {
      icon: Baby,
      title: "Maternal & Child Health",
      description: "Supporting mothers and children with healthcare and nutrition.",
    },
  ];

  const achievements = [
    "5,000+ people served annually",
    "Monthly health education sessions",
    "Partnership with local clinics",
    "Free medication distribution",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Health & Wellness"
        subtitle="Promoting healthy communities through accessible healthcare"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center">
                <HeartPulse className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">About This Program</h2>
                <p className="text-muted-foreground">Building healthier communities</p>
              </div>
            </div>

            <div className="prose prose-lg text-muted-foreground space-y-4 mb-12">
              <p>
                Access to healthcare remains a significant challenge for many families
                in Mathare. Our health program addresses this by bringing essential
                health services directly to the community.
              </p>
              <p>
                We focus on preventive care, health education, and connecting community
                members with healthcare facilities. Our mental health initiatives
                address the often-overlooked psychological needs of our community.
              </p>
            </div>

            {/* Initiatives */}
            <h3 className="text-xl font-bold text-foreground mb-6">Our Initiatives</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {initiatives.map((initiative, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border border-border">
                  <initiative.icon className="h-8 w-8 text-primary mb-4" />
                  <h4 className="font-semibold text-card-foreground mb-2">{initiative.title}</h4>
                  <p className="text-muted-foreground text-sm">{initiative.description}</p>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="bg-primary/10 rounded-lg p-8 mb-12">
              <h3 className="text-xl font-bold text-foreground mb-6">Our Achievements</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/donate">Support This Program</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Health;
