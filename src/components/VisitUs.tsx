import { useEffect, useRef, useState } from "react";
import { ExternalLink, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.85414349635!2d36.85525077573673!3d-1.2655513987224203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1777b5edd317%3A0xad01ec1768ca566e!2sGhetto%20Foundation!5e0!3m2!1sen!2ske!4v1715682000000!5m2!1sen!2ske";

const VisitUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mapVisible, setMapVisible] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Preconnect + dns-prefetch to Google Maps origins immediately on mount
  // so the iframe handshake is already warm by the time it mounts.
  useEffect(() => {
    const origins = [
      "https://www.google.com",
      "https://maps.gstatic.com",
      "https://maps.googleapis.com",
      "https://khms0.googleapis.com",
      "https://khms1.googleapis.com",
      "https://fonts.gstatic.com",
    ];
    const links: HTMLLinkElement[] = [];
    origins.forEach((href) => {
      const pre = document.createElement("link");
      pre.rel = "preconnect";
      pre.href = href;
      pre.crossOrigin = "anonymous";
      document.head.appendChild(pre);
      links.push(pre);

      const dns = document.createElement("link");
      dns.rel = "dns-prefetch";
      dns.href = href;
      document.head.appendChild(dns);
      links.push(dns);
    });
    return () => links.forEach((l) => l.remove());
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Mount iframe immediately so it can start loading in parallel.
          setMapVisible(true);
          observer.disconnect();
        }
      },
      // Start mounting the map well before it scrolls into view
      { threshold: 0, rootMargin: "800px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

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
          <div 
            className="relative w-full overflow-hidden rounded-xl bg-card h-[300px] sm:h-[450px]"
            style={{ 
              boxShadow: '0 8px 30px -12px hsl(var(--foreground) / 0.15), 0 4px 10px -6px hsl(var(--foreground) / 0.1)'
            }}
          >
            {/* Lightweight placeholder shown until map iframe is loaded */}
            {!mapLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <MapPin className="h-8 w-8 animate-pulse text-community-warm" />
                  <span className="text-sm">Loading map…</span>
                </div>
              </div>
            )}
            {mapVisible && (
              <iframe
                src={MAP_SRC}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ghetto Foundation Location - Mathare, Nairobi, Kenya"
                className={`absolute inset-0 w-full h-full rounded-xl transition-opacity duration-500 ${mapLoaded ? "opacity-100" : "opacity-0"}`}
                onLoad={() => setMapLoaded(true)}
              />
            )}
          </div>

          {/* Address & CTA */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-5 w-5 text-community-warm shrink-0" />
              <address className="not-italic text-sm sm:text-base">
                Ghetto Foundation,Mathare , Nairobi, Kenya
              </address>
            </div>

            <Button
              asChild
              className="bg-community-warm hover:bg-community-warm/90 text-white gap-2 w-full sm:w-auto"
            >
              <a
                href="https://www.google.com/maps/place/Ghetto+Foundation/@-1.2655514,36.8552508,17z"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4" />
                Open in Google Maps for Navigation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
