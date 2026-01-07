import { Users, GraduationCap, Heart, Home } from "lucide-react";

const ImpactSection = () => {
  const stats = [
    { icon: Users, value: "10,000+", label: "Lives Impacted" },
    { icon: GraduationCap, value: "500+", label: "Students Supported" },
    { icon: Heart, value: "50+", label: "Community Programs" },
    { icon: Home, value: "15+", label: "Years of Service" },
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Our Impact
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Together with our community, we've achieved remarkable milestones in transforming lives.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-primary-foreground/80 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
