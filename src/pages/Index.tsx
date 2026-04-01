import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Heart, Users, ArrowRight, MapPin, Target, Eye } from 'lucide-react';
import unityHands from '@/assets/unity-hands-hero.jpg';
import mathareHero from '@/assets/programs/mathare-resilience-hero.jpg';
import digitalHero from '@/assets/programs/digital-associates-hero.jpg';
import youthHero from '@/assets/programs/youth-leadership-hero.jpg';
import ImpactStats from '@/components/ImpactStats';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative hero-gradient text-white pb-12 sm:pb-16 md:pb-20 lg:pb-32 min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 animate-fade-in">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight break-words drop-shadow-lg">
                Empowering Communities
                <span className="block text-white mt-1 sm:mt-2">in Mathare, Nairobi</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed max-w-2xl drop-shadow-md">
                The Ghetto Foundation is dedicated to community-driven development, 
                research, and sustainable change through education, innovation, and collaboration.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/donate">
                  <Button className="btn-hero bg-white text-community-warm hover:bg-gray-100">
                    Donate Now
                    <Heart className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                
                <Link to="/news">
                  <Button className="btn-outline border-white text-white hover:bg-white hover:text-community-warm">
                    Announcements & News
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
            

          </div>
        </div>
      </section>

      <ImpactStats />
      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center space-x-3">
                <Target className="w-8 h-8 text-community-warm" />
                <h3>Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To empower communities in Mathare through sustainable development, 
                education, and research-driven initiatives that create lasting positive impact.
              </p>
            </div>
            
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center space-x-3">
                <Eye className="w-8 h-8 text-community-nature" />
                <h3>Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                A thriving, self-sustaining Mathare community where every individual 
                has access to opportunities for growth, education, and prosperity.
              </p>
            </div>
            
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center space-x-3">
                <MapPin className="w-8 h-8 text-community-trust" />
                <h3>Our Approach</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Community-led research and action (CLRA) that ensures our programs 
                are designed by and for the people we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-gray-900 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive initiatives designed to address community needs and create sustainable change.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Mathare Resilience",
                description: "Building a comprehensive community center empowering residents through education, skills training, vocational programs, a community library, and social justice advocacy.",
                slug: "mathare-resilience",
                accent: "bg-community-warm",
                image: mathareHero,
                badge: "Community Development"
              },
              {
                title: "Youth Leadership",
                description: "Empowering young leaders in Mathare to drive positive change through skills development, mentorship, hands-on leadership opportunities, and community advocacy training.",
                slug: "youth-leadership",
                accent: "bg-community-trust",
                image: youthHero,
                badge: "Leadership Development"
              },
              {
                title: "Digital Associates",
                description: "Collecting, measuring, and analyzing qualitative and quantitative data to enhance operations, improve online experiences, and quantify return on investment for the community.",
                slug: "digital-associates",
                accent: "bg-community-nature",
                image: digitalHero,
                badge: "Data & Analytics"
              }
            ].map((program, index) => (
              <Card key={index} className="community-card overflow-hidden group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="h-44 overflow-hidden relative">
                  <img src={program.image} alt={program.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/30" />
                  <span className="absolute top-3 left-3 text-xs font-medium text-white bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">{program.badge}</span>
                </div>
                <div className={`h-1 ${program.accent}`}></div>
                <CardContent className="p-6">
                  <h4 className="text-foreground mb-3">{program.title}</h4>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{program.description}</p>
                  <Link to={`/programs/${program.slug}`}>
                    <Button className="btn-outline w-full group-hover:bg-community-warm group-hover:text-white group-hover:border-community-warm">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-16 sm:py-20 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${unityHands})` }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto">
            Whether through donations, volunteering, or partnerships, 
            your support helps us create lasting change in Mathare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button className="btn-hero bg-white text-community-warm hover:bg-gray-100 w-full sm:w-auto">
                Support Our Work
                <Heart className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="btn-outline border-white text-white hover:bg-white hover:text-community-warm w-full sm:w-auto">
                Get Involved
                <Users className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
