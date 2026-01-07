import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { GraduationCap, HeartPulse, Briefcase, Users, ArrowRight } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "Education Program",
      description: "Our education program provides scholarships, tutoring, school supplies, and mentorship to children and youth in Mathare. We believe education is the foundation for breaking the cycle of poverty.",
      features: ["Scholarships for primary and secondary students", "After-school tutoring programs", "School supplies and uniforms", "Career guidance and mentorship"],
      link: "/programs/education",
      color: "bg-blue-500",
    },
    {
      icon: HeartPulse,
      title: "Health & Wellness",
      description: "We promote physical and mental health through community health education, medical outreach, and wellness programs designed to improve the overall health of our community.",
      features: ["Community health education", "Mental health support services", "Medical outreach camps", "Maternal and child health"],
      link: "/programs/health",
      color: "bg-red-500",
    },
    {
      icon: Briefcase,
      title: "Economic Empowerment",
      description: "We equip community members with skills and resources to achieve financial independence through vocational training, entrepreneurship support, and microfinance initiatives.",
      features: ["Vocational skills training", "Business development support", "Microfinance and savings groups", "Job placement assistance"],
      link: "/programs/economic",
      color: "bg-green-500",
    },
    {
      icon: Users,
      title: "Youth Development",
      description: "Our youth programs nurture the next generation of leaders through sports, arts, leadership training, and life skills development.",
      features: ["Sports leagues and tournaments", "Arts and creative programs", "Leadership development", "Life skills training"],
      link: "/programs/youth",
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Our Programs"
        subtitle="Comprehensive initiatives designed to transform lives and build stronger communities"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className={`${program.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                    <program.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{program.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{program.description}</p>
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={program.link}
                    className="inline-flex items-center text-primary font-semibold hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-secondary rounded-lg aspect-video flex items-center justify-center">
                    <program.icon className="h-24 w-24 text-primary/30" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
