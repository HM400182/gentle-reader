import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Heart, Handshake, Sparkles } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const Sponsors = () => {
  const [sponsors, setSponsors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSponsors = async () => {
      const { data } = await supabase
        .from('sponsors')
        .select('*')
        .eq('is_published', true)
        .order('display_order', { ascending: true });
      setSponsors(data || []);
      setLoading(false);
    };
    fetchSponsors();
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-primary/5">
        {/* Hero Section */}
        <section className="relative py-24 px-4 overflow-hidden">
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
              Together with our incredible partners, we are building sustainable change for vulnerable youth in Nairobi's informal settlements.
            </p>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full mb-4">
                <Handshake className="w-4 h-4 text-foreground" />
                <span className="text-sm font-medium">Collaborative Impact</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Partners</h2>
            </div>

            {loading ? (
              <p className="text-center text-muted-foreground py-16">Loading partners...</p>
            ) : sponsors.length === 0 ? (
              <div className="text-center py-16">
                <Handshake className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                <p className="text-muted-foreground text-lg">Partners information coming soon.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sponsors.map((sponsor, index) => (
                  <Card key={sponsor.id} className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-secondary/10 backdrop-blur-sm">
                    <CardHeader className="pb-3">
                      {sponsor.logo_url && (
                        <img src={sponsor.logo_url} alt={sponsor.name} className="w-16 h-16 object-contain rounded-xl mb-3" />
                      )}
                      <CardTitle className="text-lg leading-tight">{sponsor.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {sponsor.description && (
                        <CardDescription className="text-sm leading-relaxed">{sponsor.description}</CardDescription>
                      )}
                      {sponsor.website_url && (
                        <a href={sponsor.website_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-primary mt-3 hover:underline">
                          Visit Website <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
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
            </p>
            <div className="mt-8">
              <Button asChild variant="outline" className="group hover:bg-community-warm hover:text-white hover:border-community-warm [&_svg]:hover:text-white transition-colors">
                <Link to="/contact">
                  Become a Partner
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Sponsors;
