import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { Building2, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Partners = () => {
  const partners = [
    { name: "UNICEF Kenya", type: "International NGO" },
    { name: "Nairobi County Government", type: "Government" },
    { name: "Kenya Red Cross", type: "Humanitarian" },
    { name: "Safaricom Foundation", type: "Corporate" },
    { name: "World Vision Kenya", type: "International NGO" },
    { name: "ActionAid Kenya", type: "International NGO" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Our Partners"
        subtitle="Organizations and institutions that support our mission"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-muted-foreground text-lg">
              We work with a diverse network of partners including government agencies,
              international organizations, corporations, and local community groups to
              maximize our impact and reach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 shadow-lg border border-border flex items-center gap-4"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">{partner.name}</h3>
                  <p className="text-muted-foreground text-sm">{partner.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <Handshake className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-foreground mb-4">Become a Partner</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We're always looking for organizations that share our vision of community
            empowerment. Partner with us to create lasting impact in Mathare.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
