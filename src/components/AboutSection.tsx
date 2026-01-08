import { Target, Eye, Users } from "lucide-react";

const AboutSection = () => {
  const cards = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower communities through sustainable development initiatives, education, and research that creates lasting positive change in Mathare and beyond.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "A world where every community has the resources, knowledge, and opportunities to thrive and achieve their full potential.",
    },
    {
      icon: Users,
      title: "Our Values",
      description: "Community-driven, transparent, innovative, and committed to sustainable development that respects local culture and knowledge.",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About <span className="text-primary">Ghetto Foundation</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are a community-based organization dedicated to transforming lives through education, innovation, and sustainable development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-border animate-fade-in hover-lift"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <card.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
