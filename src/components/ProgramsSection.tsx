import { Link } from "react-router-dom";
import { GraduationCap, HeartPulse, Briefcase, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProgramsSection = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Providing quality education, scholarships, and learning resources to children and youth in Mathare.",
      link: "/programs/education",
      color: "bg-blue-500",
    },
    {
      icon: HeartPulse,
      title: "Health & Wellness",
      description: "Community health initiatives, mental health support, and access to healthcare services.",
      link: "/programs/health",
      color: "bg-red-500",
    },
    {
      icon: Briefcase,
      title: "Economic Empowerment",
      description: "Skills training, entrepreneurship programs, and microfinance support for sustainable livelihoods.",
      link: "/programs/economic",
      color: "bg-green-500",
    },
    {
      icon: Users,
      title: "Youth Development",
      description: "Leadership training, sports programs, and mentorship for the next generation of community leaders.",
      link: "/programs/youth",
      color: "bg-purple-500",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Programs</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We run comprehensive programs designed to address the most pressing needs of our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all border border-border"
            >
              <div className={`${program.color} h-2`} />
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <program.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  {program.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {program.description}
                </p>
                <Link
                  to={program.link}
                  className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link to="/programs">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
