import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { Heart, Users, BookOpen, Lightbulb } from 'lucide-react';
import communityServed from '@/assets/programs/community-education.jpg';
import yearsImpact from '@/assets/mathare-aerial.jpg';
import researchImg from '@/assets/programs/research-hero.jpg';
import collage1 from '@/assets/programs/mathare-resilience-hero.jpg';
import collage2 from '@/assets/programs/youth-leadership-hero.jpg';
import collage3 from '@/assets/programs/digital-associates-hero.jpg';
import collage4 from '@/assets/programs/ghetto-stories-hero.jpg';
import collage5 from '@/assets/programs/civic-education-hero.jpg';

const impactStats = [
  { number: 1500, suffix: "+", label: "Community Members Served", icon: Users, bgImage: communityServed, accent: "hsl(var(--community-warm))" },
  { number: 15, suffix: "", label: "Active Programs", icon: BookOpen, bgImage: null, accent: "hsl(var(--community-nature))" },
  { number: 12, suffix: "", label: "Years of Impact", icon: Heart, bgImage: yearsImpact, accent: "hsl(var(--community-trust))" },
  { number: 50, suffix: "+", label: "Research Projects", icon: Lightbulb, bgImage: researchImg, accent: "hsl(var(--community-earth))" },
];

const collageImages = [collage1, collage2, collage3, collage4, collage5];

const ImpactStats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 bg-foreground relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header — charity:water style */}
        <div className="text-center mb-14 sm:mb-20">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: 'hsl(var(--community-warm))' }}>
            Our Impact
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Numbers That Tell Our Story
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: 'hsl(var(--community-warm))' }} />
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {impactStats.map((stat, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl"
              style={{
                animationDelay: `${index * 0.15}s`,
                aspectRatio: '3/4',
              }}
            >
              {/* Background image */}
              {stat.bgImage ? (
                <img
                  src={stat.bgImage}
                  alt={stat.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-2">
                  {collageImages.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Program ${i + 1}`}
                      className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                        i === 0 ? 'col-span-2 row-span-1' : 'col-span-1 row-span-1'
                      }`}
                    />
                  ))}
                </div>
              )}

              {/* Gradient overlay — bottom-heavy for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/85 transition-all duration-500" />

              {/* Accent line at top */}
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-90 group-hover:h-1.5 transition-all duration-300"
                style={{ background: stat.accent }}
              />

              {/* Content — pinned to bottom like UNICEF cards */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4 backdrop-blur-sm border border-white/20"
                  style={{ background: `${stat.accent}33` }}
                >
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>

                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-none mb-1 sm:mb-2">
                  {isVisible ? (
                    <CountUp
                      end={stat.number}
                      duration={2.5}
                      separator=","
                      suffix={stat.suffix}
                    />
                  ) : (
                    <span>0{stat.suffix}</span>
                  )}
                </div>

                <p className="text-white/80 text-xs sm:text-sm font-medium leading-snug">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
