import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Heart, Handshake, Users, Sparkles, Globe, GraduationCap, Building2, Scale, MapPin } from 'lucide-react';

const Sponsors = () => {
  const partners = [
    {
      name: "European Union (EU)",
      icon: Building2,
      description: "Supported youth security, governance, and police reform initiatives with over 48 youth groups",
      color: "from-blue-500/20 to-blue-600/10"
    },
    {
      name: "GiveDirectly",
      icon: Heart,
      description: "Strengthening household resilience through direct support",
      color: "from-green-500/20 to-green-600/10"
    },
    {
      name: "International Institute of Social Studies (ISS)",
      icon: GraduationCap,
      description: "Ongoing research and collaboration",
      color: "from-purple-500/20 to-purple-600/10"
    },
    {
      name: "VU University Amsterdam",
      icon: Globe,
      description: "Trained 28 youth groups in financial literacy and entrepreneurship, leading to sustainable income-generating activities",
      color: "from-orange-500/20 to-orange-600/10"
    },
    {
      name: "Mathare Social Justice Centre (MSJC)",
      icon: Scale,
      description: "Youth-driven spatial planning in Mathare",
      color: "from-red-500/20 to-red-600/10"
    },
    {
      name: "Nairobi Metropolitan Services (NMS)",
      icon: MapPin,
      description: "Collaborative urban development initiatives",
      color: "from-teal-500/20 to-teal-600/10"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-primary/5">
        {/* Hero Section */}
        <section className="relative py-24 px-4 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Building Together</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Our <span className="text-primary">Partners</span> & Allies
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Together with our incredible partners, we are building sustainable change for vulnerable youth 
              in Nairobi's informal settlements. Every partnership strengthens our mission.
            </p>
          </div>
        </section>

        {/* Main Partner Section - Premium Highlighted */}
        <section className="py-20 px-4 relative">
          {/* Background decorations */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 px-6 py-3 rounded-full mb-6 border border-amber-500/30">
                <span className="text-3xl">🌟</span>
                <span className="text-lg font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Principal Partner</span>
                <span className="text-3xl">🌟</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Main Partner</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A partnership that has transformed how we approach community-led development
              </p>
            </div>

            {/* Premium Featured Partner Card */}
            <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-card via-card to-primary/10 shadow-[0_20px_80px_-20px] shadow-primary/30">
              {/* Animated gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-amber-500/20 to-primary/20 opacity-50" />
              <div className="absolute inset-[1px] bg-card rounded-xl" />
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-amber-500/20 via-primary/10 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-primary/20 to-transparent rounded-tr-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl" />
              
              <div className="relative z-10 p-8 md:p-12 lg:p-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  {/* Partner Photo Section */}
                  <div className="flex flex-col items-center">
                    <div className="relative group mb-8">
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-primary to-orange-500 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-all duration-500 scale-105" />
                      
                      {/* Photo container */}
                      <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                        <img 
                          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face"
                          alt="Dr. Naomi van Stapele"
                          className="w-full h-full object-cover"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      </div>
                      
                      {/* Floating badges */}
                      <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl">
                        Since 2018
                      </div>
                      <div className="absolute -top-2 -left-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                        ✓ Verified Partner
                      </div>
                    </div>

                    {/* Quick stats under photo */}
                    <div className="flex gap-6 text-center">
                      <div>
                        <span className="text-3xl font-bold bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent">6+</span>
                        <p className="text-xs text-muted-foreground mt-1">Years</p>
                      </div>
                      <div className="w-px bg-border" />
                      <div>
                        <span className="text-3xl font-bold bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent">15+</span>
                        <p className="text-xs text-muted-foreground mt-1">Projects</p>
                      </div>
                      <div className="w-px bg-border" />
                      <div>
                        <span className="text-3xl font-bold bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent">500+</span>
                        <p className="text-xs text-muted-foreground mt-1">Youth</p>
                      </div>
                    </div>
                  </div>

                  {/* Partner Info Section */}
                  <div className="text-center lg:text-left">
                    <div className="inline-block mb-4">
                      <span className="text-xs font-semibold tracking-wider text-primary uppercase">Principal Research Partner</span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                      Dr. Naomi van Stapele
                    </h3>
                    
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6">
                      <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        <GraduationCap className="w-4 h-4" />
                        PhD Researcher
                      </span>
                      <span className="inline-flex items-center gap-1 bg-secondary/50 text-foreground px-3 py-1 rounded-full text-sm">
                        <Globe className="w-4 h-4" />
                        Netherlands
                      </span>
                    </div>
                    
                    <p className="text-primary font-semibold text-lg mb-1">
                      International Institute of Social Studies (ISS)
                    </p>
                    <p className="text-muted-foreground mb-6">
                      Erasmus University Rotterdam
                    </p>
                    
                    {/* Detailed Bio */}
                    <div className="space-y-4 mb-8">
                      <div className="bg-gradient-to-r from-muted/80 to-muted/40 rounded-2xl p-6 border border-border/50">
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Heart className="w-4 h-4 text-primary" />
                          About Our Partner
                        </h4>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          Dr. Naomi van Stapele is a renowned researcher and passionate advocate for urban youth in Africa. 
                          Her groundbreaking work on youth agency, informal settlements, and community resilience has been 
                          instrumental in shaping Ghetto Foundation's approach to sustainable development.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          Through years of collaborative research and unwavering support, she has helped amplify the voices 
                          of Mathare's youth on the global stage, bridging the gap between academic research and real-world 
                          community impact.
                        </p>
                      </div>
                      
                      {/* Key contributions */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
                          <p className="font-medium text-foreground text-sm">Research Focus</p>
                          <p className="text-xs text-muted-foreground mt-1">Youth agency & urban informality</p>
                        </div>
                        <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
                          <p className="font-medium text-foreground text-sm">Key Impact</p>
                          <p className="text-xs text-muted-foreground mt-1">Community-led research methodology</p>
                        </div>
                        <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
                          <p className="font-medium text-foreground text-sm">Publications</p>
                          <p className="text-xs text-muted-foreground mt-1">20+ peer-reviewed papers</p>
                        </div>
                        <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
                          <p className="font-medium text-foreground text-sm">Recognition</p>
                          <p className="text-xs text-muted-foreground mt-1">Global youth advocacy award</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Key Partnerships */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full mb-4">
                <Handshake className="w-4 h-4 text-foreground" />
                <span className="text-sm font-medium">Collaborative Impact</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Key Partnerships</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Over the past 2 years, Ghetto Foundation has worked with local and international partners to fight poverty, 
                promote financial literacy, and create sustainable livelihoods.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partners.map((partner, index) => (
                <Card 
                  key={partner.name}
                  className={`group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-0 bg-gradient-to-br ${partner.color} backdrop-blur-sm`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 rounded-xl bg-background/80 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <partner.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg leading-tight">{partner.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {partner.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Closing Section */}
        <section className="py-20 px-4 bg-gradient-to-t from-primary/5 to-transparent">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are deeply grateful to all our partners for walking this journey with us. 
              Together, we continue to <span className="text-primary font-semibold">empower youth</span> and 
              create <span className="text-primary font-semibold">lasting change</span> in Mathare.
            </p>
            <div className="mt-8">
              <Button variant="outline" className="group">
                Become a Partner
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Sponsors;