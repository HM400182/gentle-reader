import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { GraduationCap, BookOpen, Users, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Education = () => {
  const initiatives = [
    {
      icon: BookOpen,
      title: "Scholarship Program",
      description: "Full and partial scholarships for primary and secondary education.",
    },
    {
      icon: Users,
      title: "After-School Tutoring",
      description: "Free tutoring sessions to help students excel in their studies.",
    },
    {
      icon: Award,
      title: "Mentorship Program",
      description: "Connecting students with mentors for career guidance and support.",
    },
  ];

  const achievements = [
    "500+ students currently supported",
    "95% pass rate in national exams",
    "50+ students in higher education",
    "100% school retention rate",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Education Program"
        subtitle="Empowering the next generation through quality education"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">About This Program</h2>
                <p className="text-muted-foreground">Breaking barriers through education</p>
              </div>
            </div>

            <div className="prose prose-lg text-muted-foreground space-y-4 mb-12">
              <p>
                Education is the foundation of our work at Ghetto Foundation. We believe
                that every child in Mathare deserves access to quality education,
                regardless of their economic circumstances.
              </p>
              <p>
                Our education program provides comprehensive support including scholarships,
                school supplies, uniforms, tutoring, and mentorship. We work closely with
                local schools and families to ensure children stay in school and succeed
                academically.
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

export default Education;
