import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, CreditCard, Smartphone, Building2, CheckCircle, Mail, MapPin } from "lucide-react";
import unityHands from "@/assets/unity-hands-hero.jpg";
import logo from "@/assets/logo.png";

const Donate = () => {
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

        <div className="relative container mx-auto px-4 text-center animate-fade-in">
          <Heart className="h-16 w-16 text-primary mx-auto mb-6 animate-pulse" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-shadow-lg">
            Make a Difference Today
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto text-shadow">
            Your donation directly supports education, health, and economic empowerment
            programs that transform lives in Mathare.
          </p>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8 animate-fade-in">
            Payment Methods
          </h3>
          <div className="flex flex-wrap justify-center gap-8 animate-fade-in">
            <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300">
              <CreditCard className="h-8 w-8 text-primary" />
              <span>Credit/Debit Card</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300">
              <Smartphone className="h-8 w-8 text-primary" />
              <span>M-Pesa</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300">
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
            <h2 className="text-3xl font-bold text-foreground mb-8 animate-fade-in">
              Why Donate to Ghetto Foundation?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {impactItems.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 animate-fade-in hover:translate-x-2 transition-transform duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4 animate-fade-in">
            Here are some ways you can donate:
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto animate-fade-in">
            Choose the method that works best for you
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Bank Transfer Kenya */}
            <div className="bg-card rounded-lg p-6 shadow-lg border border-border hover:border-primary hover:shadow-xl transition-all duration-300 animate-fade-in hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold text-foreground">In Person / Bank Transfer (Kenya)</h3>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Bank:</strong> Barclays Bank</p>
                <p><strong className="text-foreground">Branch:</strong> Development House Nairobi</p>
                <p><strong className="text-foreground">Branch Code:</strong> 047</p>
                <p><strong className="text-foreground">Account No.:</strong> 202827955</p>
                <p><strong className="text-foreground">SWIFT Code:</strong> BARCKENX</p>
              </div>
            </div>

            {/* M-Pesa */}
            <div className="bg-card rounded-lg p-6 shadow-lg border border-border hover:border-primary hover:shadow-xl transition-all duration-300 animate-fade-in hover:-translate-y-2" style={{ animationDelay: '100ms' }}>
              <div className="flex items-center gap-3 mb-4">
                <Smartphone className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Mobile Transfer (Kenya)</h3>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">M-Pesa PayBill Number:</strong> 7232719</p>
                <p><strong className="text-foreground">Bank Option:</strong> KCB</p>
              </div>
            </div>

            {/* International Transfer */}
            <div className="bg-card rounded-lg p-6 shadow-lg border border-border hover:border-primary hover:shadow-xl transition-all duration-300 animate-fade-in hover:-translate-y-2" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold text-foreground">International Online Money Transfer</h3>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Platform:</strong> WorldRemit.com</p>
                <p><strong className="text-foreground">Recipient Name:</strong> Daniel Wainaina Wanjiku</p>
                <p><strong className="text-foreground">Email:</strong> management@ghettofoundationkenya.org</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appreciation */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <Heart className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-6">Appreciation</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We greatly appreciate your contribution to the work that we're doing. Every donation helps us continue to support education, mentorship, and community empowerment in Mathare.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-6">Contact</h2>
            <p className="text-muted-foreground mb-8">
              If you have any questions, partnership queries, or just want to connect, please reach out at:
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
              <a 
                href="mailto:management@ghettofoundationkenya.org" 
                className="flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300"
              >
                <Mail className="h-5 w-5" />
                <span>management@ghettofoundationkenya.org</span>
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Or Visit us at our Office</span>
            </div>
            <div className="mt-8">
              <img src={logo} alt="Ghetto Foundation" className="h-16 mx-auto opacity-80" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
