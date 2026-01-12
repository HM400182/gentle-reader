import { useEffect, useRef, useState } from "react";
import { ExternalLink, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const VisitUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const handleGetDirections = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=-1.2654585,36.8574394",
      "_blank"
    );
  };

  return (
    <section
      ref={sectionRef}
      className="bg-muted/30 py-16 sm:py-20"
      aria-labelledby="visit-us-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10">
            <h2
              id="visit-us-heading"
              className="text-3xl sm:text-4xl font-bold text-foreground mb-3"
            >
              Visit Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
              We welcome visitors and donors to experience our community firsthand.
              Come see the impact of your support in action.
            </p>
          </div>

          {/* Map Container */}
          <div className="relative w-full overflow-hidden rounded-2xl shadow-lg border border-border/50 bg-card">
            <div className="aspect-video sm:aspect-[21/9]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8452236002904!2d36.85486447363135!3d-1.2654584987224897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1777b5edd017%3A0xad01ec1768ca566e!2sGhetto%20Foundation!5e0!3m2!1sen!2ske!4v1768246435440!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ghetto Foundation Location - Mathare, Nairobi, Kenya"
                className="absolute inset-0"
              />
            </div>
          </div>

          {/* Address & CTA */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-5 w-5 text-community-warm shrink-0" />
              <address className="not-italic text-sm sm:text-base">
                Ghetto Foundation, Kwa Mbao / Mathare, Nairobi, Kenya
              </address>
            </div>

            <Button
              onClick={handleGetDirections}
              className="bg-community-warm hover:bg-community-warm/90 text-white gap-2 w-full sm:w-auto"
            >
              <ExternalLink className="w-4 h-4" />
              Get Directions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
