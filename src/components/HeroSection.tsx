import { Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-shadow-lg">
              Empowering
              <br />
              Communities
              <br />
              <span className="text-primary">in Mathare, Nairobi</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 max-w-xl text-shadow animate-slide-up" style={{ animationDelay: '200ms' }}>
              The Ghetto Foundation is dedicated to community-driven
              development, research, and sustainable change through education,
              innovation, and collaboration.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 animate-slide-up" style={{ animationDelay: '400ms' }}>
              <Button
                variant="outline"
                className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-6 py-3 h-auto transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link to="/donate">
                  Donate Now
                  <Heart className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 h-auto transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link to="/about">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Logo */}
          <div className="hidden lg:flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: '300ms' }}>
            <div className="relative">
              <img
                src={logo}
                alt="Ghetto Foundation"
                className="w-80 xl:w-96 h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
