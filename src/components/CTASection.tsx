import { Link } from "react-router-dom";
import { Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import unityHands from "@/assets/unity-hands-hero.jpg";

const CTASection = () => {
  return (
    <section className="relative py-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${unityHands})` }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative container mx-auto px-4 text-center animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Join Us in Making a Difference
        </h2>
        <p className="text-gray-200 max-w-2xl mx-auto mb-8 text-lg">
          Your support can help us continue our mission of empowering communities.
          Every contribution, no matter how small, creates a ripple of positive change.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300 hover:scale-105"
            asChild
          >
            <Link to="/donate">
              Donate Now
              <Heart className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-foreground font-semibold transition-all duration-300 hover:scale-105"
            asChild
          >
            <Link to="/contact">
              Get Involved
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
