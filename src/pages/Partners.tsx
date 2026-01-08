import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { Star, Handshake, Building2, GraduationCap, Landmark, DollarSign, Scale, Building } from "lucide-react";
import logo from "@/assets/logo.png";

const Partners = () => {
  const keyPartners = [
    {
      name: "European Union (EU)",
      icon: Landmark,
      emoji: "🏛️",
      description: "Supported youth security, governance, and police reform initiatives with over 48 youth groups"
    },
    {
      name: "GiveDirectly",
      icon: DollarSign,
      emoji: "💵",
      description: "Strengthening household resilience through direct support"
    },
    {
      name: "International Institute of Social Studies (ISS)",
      icon: GraduationCap,
      emoji: "🎓",
      description: "Ongoing research and collaboration"
    },
    {
      name: "VU University Amsterdam",
      icon: GraduationCap,
      emoji: "📘",
      description: "Trained 28 youth groups in financial literacy and entrepreneurship, leading to sustainable income-generating activities"
    },
    {
      name: "Mathare Social Justice Centre (MSJC)",
      icon: Scale,
      emoji: "⚖️",
      description: "Youth-driven spatial planning in Mathare"
    },
    {
      name: "Nairobi Metropolitan Services (NMS)",
      icon: Building,
      emoji: "🏙️",
      description: "Collaborative urban development initiatives"
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Our Partners"
        subtitle="Together with our partners, we are building sustainable change for vulnerable youth in Nairobi's informal settlements."
      />

      {/* Main Partner Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Main Partner */}
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Star className="h-5 w-5" />
                <span className="font-semibold">Main Partner</span>
              </div>
              <div className="bg-card rounded-xl p-6 md:p-8 shadow-lg border border-border max-w-lg mx-auto">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-card-foreground mb-2">Dr. Naomi van Stapele</h3>
                <p className="text-muted-foreground">
                  International Institute of Social Studies (ISS), Erasmus University Rotterdam
                </p>
              </div>
            </div>

            {/* Key Partnerships */}
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 bg-secondary text-foreground px-4 py-2 rounded-full mb-6">
                <Handshake className="h-5 w-5 text-primary" />
                <span className="font-semibold">Key Partnerships</span>
              </div>
              <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto">
                Over the past 2 years, Ghetto Foundation has worked with local and international partners to fight poverty, promote financial literacy, and create sustainable livelihoods.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {keyPartners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-5 md:p-6 shadow-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <partner.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-2xl">{partner.emoji}</span>
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-2 text-sm md:text-base">{partner.name}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gratitude Section */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="text-4xl md:text-5xl mb-6 block">✨</span>
            <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8">
              We are deeply grateful to all our partners for walking this journey with us. Together, we continue to empower youth and create lasting change in Mathare.
            </p>
            <img src={logo} alt="Ghetto Foundation" className="h-16 md:h-20 w-auto mx-auto opacity-80" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
