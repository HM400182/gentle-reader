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

        {/* Main Partner Section - Highlighted */}
        <section className="py-16 px-4 relative">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 px-4 py-2 rounded-full mb-4">
                <span className="text-2xl">🌟</span>
                <span className="text-sm font-semibold text-amber-700 dark:text-amber-400">Principal Partner</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Main Partner</h2>
            </div>

            {/* Featured Partner Card */}
            <Card className="relative overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-card via-card to-primary/5 shadow-2xl shadow-primary/10">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary/30 to-transparent" />
              
              <div className="relative z-10 p-8 md:p-12">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                  {/* Partner Photo */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/50 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                    <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl">
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary/20 to-muted flex items-center justify-center">
                        <div className="text-center">
                          <GraduationCap className="w-16 h-16 text-primary/60 mx-auto mb-2" />
                          <span className="text-xs text-muted-foreground">Partner Photo</span>
                        </div>
                      </div>
                    </div>
                    {/* Floating badge */}
                    <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      Since 2018
                    </div>
                  </div>

                  {/* Partner Info */}
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      Dr. Naomi van Stapele
                    </h3>
                    <p className="text-primary font-medium mb-4">
                      International Institute of Social Studies (ISS)
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Erasmus University Rotterdam, Netherlands
                    </p>
                    
                    {/* Bio */}
                    <div className="bg-muted/50 rounded-xl p-5 mb-6">
                      <p className="text-muted-foreground leading-relaxed">
                        Dr. Naomi van Stapele is a renowned researcher and advocate for urban youth in Africa. 
                        Her groundbreaking work on youth agency, informal settlements, and community resilience 
                        has been instrumental in shaping Ghetto Foundation's approach to sustainable development. 
                        Through years of collaborative research and unwavering support, she has helped amplify 
                        the voices of Mathare's youth on the global stage.
                      </p>
                    </div>

                    {/* Stats/highlights */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                      <div className="bg-primary/10 px-4 py-2 rounded-lg">
                        <span className="text-2xl font-bold text-primary">6+</span>
                        <p className="text-xs text-muted-foreground">Years Partnership</p>
                      </div>
                      <div className="bg-primary/10 px-4 py-2 rounded-lg">
                        <span className="text-2xl font-bold text-primary">15+</span>
                        <p className="text-xs text-muted-foreground">Research Projects</p>
                      </div>
                      <div className="bg-primary/10 px-4 py-2 rounded-lg">
                        <span className="text-2xl font-bold text-primary">500+</span>
                        <p className="text-xs text-muted-foreground">Youth Impacted</p>
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