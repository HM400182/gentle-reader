import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Heart, Users, BookOpen, Lightbulb, ArrowRight, MapPin, Target, Eye } from 'lucide-react';
import logoImage from '@/assets/logo.png';
import unityHands from '@/assets/unity-hands-hero.jpg';

const Index = () => {
  const impactStats = [
    { number: "1500+", label: "Community Members Served", icon: Users },
    { number: "15", label: "Active Programs", icon: BookOpen },
    { number: "12", label: "Years of Impact", icon: Heart },
    { number: "50+", label: "Research Projects", icon: Lightbulb }
  ];

  const programs = [
    {
      title: "Mathare Resilience",
      description: "Building community resilience through comprehensive support centers and vocational training.",
      link: "/programs/mathare-resilience",
      color: "bg-community-warm"
    },
    {
      title: "Digital Associates",
      description: "Data collection and analysis to enhance community operations and measure impact.",
      link: "/programs/digital-associates", 
      color: "bg-community-trust"
    },
    {
      title: "Youth Leadership",
      description: "Empowering young leaders to drive positive change in their communities.",
      link: "/programs/youth-leadership",
      color: "bg-community-nature"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative hero-gradient text-white pt-6 sm:pt-12 md:pt-16 lg:pt-20 pb-10 sm:pb-16 md:pb-20 lg:pb-32 min-h-[85vh] sm:min-h-[80vh] md:min-h-[85vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Logo first on mobile for visual impact */}
            <div className="order-1 lg:order-2 flex items-center justify-center w-full py-4 sm:py-0">
              <div className="relative group">
                {/* Glow effect background */}
                <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl scale-75 group-hover:scale-100 group-hover:bg-white/30 transition-all duration-500 animate-pulse" />
                <img 
                  src={logoImage}
                  alt="Ghetto Foundation Logo" 
                  className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 2xl:w-[28rem] 2xl:h-[28rem] object-contain drop-shadow-2xl animate-fade-in transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                />
              </div>
            </div>
            
            {/* Text content */}
            <div className="order-2 lg:order-1 space-y-4 sm:space-y-6 lg:space-y-8 animate-fade-in text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-tight break-words drop-shadow-lg">
                Empowering Communities
                <span className="block text-white mt-1 sm:mt-2">in Mathare, Nairobi</span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-md">
                The Ghetto Foundation is dedicated to community-driven development, 
                research, and sustainable change through education, innovation, and collaboration.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link to="/donate">
                  <Button className="btn-hero bg-white text-community-warm hover:bg-gray-100 w-full sm:w-auto">
                    Donate Now
                    <Heart className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                
                <Link to="/news">
                  <Button className="btn-outline border-white text-white hover:bg-white hover:text-community-warm w-full sm:w-auto">
                    Announcements & News
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <Card key={index} className="impact-card text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-white" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white/90 text-sm font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
            {programs.map((program, index) => (
              <Card key={index} className="community-card overflow-hidden group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`h-2 ${program.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                <CardContent className="p-6">
                  <h4 className="text-gray-900 mb-3">{program.title}</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                  <Link to={program.link}>
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
