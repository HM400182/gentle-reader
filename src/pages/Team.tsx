import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { User } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "John Kamau",
      role: "Executive Director",
      bio: "A Mathare native with 15+ years of experience in community development and social entrepreneurship.",
    },
    {
      name: "Grace Wanjiku",
      role: "Programs Director",
      bio: "Leading our education and health initiatives with expertise in project management and community engagement.",
    },
    {
      name: "David Ochieng",
      role: "Youth Programs Coordinator",
      bio: "Passionate about empowering young people through sports, arts, and leadership development.",
    },
    {
      name: "Mary Akinyi",
      role: "Finance & Operations",
      bio: "Ensuring transparency and efficiency in all our operations with her background in nonprofit management.",
    },
    {
      name: "Peter Mwangi",
      role: "Community Outreach",
      bio: "Building bridges between the foundation and community members, partners, and stakeholders.",
    },
    {
      name: "Sarah Njeri",
      role: "Research & Documentation",
      bio: "Documenting our impact and conducting research to inform our programs and policies.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Our Team"
        subtitle="Meet the dedicated individuals driving change in our community"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 shadow-lg border border-border text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
