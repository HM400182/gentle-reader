import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Newspaper, Calendar, ArrowRight, Heart } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const News = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      const { data } = await supabase
        .from('news')
        .select('*')
        .eq('is_published', true)
        .order('created_at', { ascending: false });
      setArticles(data || []);
      setLoading(false);
    };
    fetchNews();
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 md:py-20 px-4 bg-community-warm/10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <Newspaper className="w-10 h-10 sm:w-12 sm:h-12 text-community-warm mr-4" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                Announcements & News
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Stay updated with the latest news, stories, and announcements from Ghetto Foundation.
            </p>
          </div>
        </section>

        {/* News Articles */}
        <section className="py-12 sm:py-16 px-4">
          <div className="max-w-6xl mx-auto">
            {loading ? (
              <p className="text-center text-muted-foreground py-16">Loading news...</p>
            ) : articles.length === 0 ? (
              <div className="text-center py-16">
                <Newspaper className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                <p className="text-muted-foreground text-lg">No news articles yet.</p>
                <p className="text-muted-foreground text-sm mt-1">Check back soon for updates!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article, index) => (
                  <Card key={article.id} className="group overflow-hidden hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    {article.image_url ? (
                      <div className="aspect-video overflow-hidden">
                        <img src={article.image_url} alt={article.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                    ) : (
                      <div className="aspect-video bg-gradient-to-br from-community-warm/20 to-community-trust/20 flex items-center justify-center">
                        <Newspaper className="w-16 h-16 text-community-warm" />
                      </div>
                    )}
                    <CardContent className="p-5">
                      {article.author && (
                        <Badge variant="secondary" className="mb-3 text-xs">{article.author}</Badge>
                      )}
                      <h3 className="font-bold text-lg mb-3 line-clamp-2 group-hover:text-community-warm transition-colors">
                        {article.title}
                      </h3>
                      {article.excerpt && (
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{article.excerpt}</p>
                      )}
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(article.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-community-warm/10">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <Heart className="w-12 h-12 text-community-warm mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">Support Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Your contribution helps us continue these life-changing programs.
            </p>
            <Link to="/donate">
              <Button className="btn-hero">
                Donate Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default News;
