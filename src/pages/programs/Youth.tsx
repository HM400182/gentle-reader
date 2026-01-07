import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { Users, Trophy, Palette, Lightbulb, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Youth = () => {
  const initiatives = [
    {
      icon: Trophy,
      title: "Sports Programs",
      description: "Football, basketball, and athletics leagues for youth development.",
    },
    {
      icon: Palette,
      title: "Arts & Culture",
      description: "Music, dance, drama, and visual arts programs for creative expression.",
    },
    {
      icon: Lightbulb,
      title: "Leadership Training",
      description: "Developing the next generation of community leaders.",
    },
  ];

  const achievements = [
    "2,000+ youth engaged",
    "Multiple sports teams",
    "Annual talent showcase",
    "Youth-led community projects",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Youth Development"
        subtitle="Nurturing tomorrow's leaders through sports, arts, and mentorship"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">About This Program</h2>
                <p className="text-muted-foreground">Investing in our future</p>
              </div>
            </div>

            <div className="prose prose-lg text-muted-foreground space-y-4 mb-12">
              <p>
                Young people are the future of Mathare. Our youth development program
                provides safe spaces and positive opportunities for young people to
                grow, learn, and develop their potential.
              </p>
              <p>
                Through sports, arts, leadership training, and mentorship, we help
                youth build confidence, develop life skills, and become active
                contributors to their community.
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

export default Youth;
