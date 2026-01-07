import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, CreditCard, Smartphone, Building2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import unityHands from "@/assets/unity-hands-hero.jpg";

const Donate = () => {
  const donationTiers = [
    { amount: 10, impact: "Provides school supplies for one child for a month" },
    { amount: 25, impact: "Supports a week of tutoring for a student" },
    { amount: 50, impact: "Covers healthcare costs for a family" },
    { amount: 100, impact: "Sponsors a child's education for a month" },
    { amount: 250, impact: "Funds vocational training for a youth" },
    { amount: 500, impact: "Supports a micro-enterprise startup" },
  ];

  const impactItems = [
    "100% of donations go directly to programs",
    "Transparent reporting on fund usage",
    "Tax-deductible contributions",
    "Regular updates on impact",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${unityHands})` }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-shadow-lg">
            Make a Difference Today
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto text-shadow">
            Your donation directly supports education, health, and economic empowerment
            programs that transform lives in Mathare.
          </p>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Choose Your Impact</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every contribution, no matter the size, creates meaningful change in our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {donationTiers.map((tier, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 shadow-lg border border-border hover:border-primary transition-colors cursor-pointer group"
              >
                <div className="text-3xl font-bold text-primary mb-2">
                  ${tier.amount}
                </div>
                <p className="text-muted-foreground text-sm mb-4">{tier.impact}</p>
                <Button className="w-full bg-primary hover:bg-primary/90 group-hover:scale-105 transition-transform">
                  Donate ${tier.amount}
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">Or enter a custom amount</p>
            <div className="flex justify-center gap-4 max-w-md mx-auto">
              <input
                type="number"
                placeholder="Enter amount"
                className="flex-1 px-4 py-3 border border-border rounded-lg bg-background text-foreground"
              />
              <Button className="bg-primary hover:bg-primary/90 px-8">
                Donate
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Payment Methods
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3 text-muted-foreground">
              <CreditCard className="h-8 w-8 text-primary" />
              <span>Credit/Debit Card</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Smartphone className="h-8 w-8 text-primary" />
              <span>M-Pesa</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Building2 className="h-8 w-8 text-primary" />
              <span>Bank Transfer</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Why Donate to Ghetto Foundation?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {impactItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
