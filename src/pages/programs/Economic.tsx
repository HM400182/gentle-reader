import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { Briefcase, Wrench, Store, Coins, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Economic = () => {
  const initiatives = [
    {
      icon: Wrench,
      title: "Vocational Training",
      description: "Skills training in trades like tailoring, carpentry, and electronics.",
    },
    {
      icon: Store,
      title: "Business Development",
      description: "Supporting aspiring entrepreneurs with training and mentorship.",
    },
    {
      icon: Coins,
      title: "Microfinance",
      description: "Access to small loans and savings groups for business growth.",
    },
  ];

  const achievements = [
    "200+ businesses started",
    "1,000+ people trained in skills",
    "85% employment success rate",
    "20+ savings groups formed",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Economic Empowerment"
        subtitle="Creating pathways to financial independence and prosperity"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">About This Program</h2>
                <p className="text-muted-foreground">Building economic resilience</p>
              </div>
            </div>

            <div className="prose prose-lg text-muted-foreground space-y-4 mb-12">
              <p>
                Economic empowerment is key to sustainable community development.
                Our program equips community members with the skills, resources,
                and support they need to achieve financial independence.
              </p>
              <p>
                Through vocational training, business development support, and
                microfinance initiatives, we help individuals and families build
                sustainable livelihoods and break the cycle of poverty.
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

export default Economic;
