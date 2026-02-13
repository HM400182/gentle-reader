import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const Team = () => {
  const [members, setMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      const { data } = await supabase
        .from('team_members')
        .select('*')
        .eq('is_published', true)
        .order('display_order', { ascending: true });
      setMembers(data || []);
      setLoading(false);
    };
    fetchTeam();
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-community-warm/10 to-community-nature/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-foreground mb-6">Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Meet the passionate individuals who work tirelessly to empower the Mathare community.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <Users className="w-16 h-16 text-community-warm mx-auto mb-4" />
            <h2 className="text-foreground mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our leadership team brings together diverse expertise in community development, research, and social innovation.
            </p>
          </div>

          {loading ? (
            <p className="text-center text-muted-foreground py-16">Loading team...</p>
          ) : members.length === 0 ? (
            <div className="text-center py-16">
              <Users className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">Team members coming soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.map((member, index) => (
                <Card key={member.id} className="community-card group hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="relative mb-6">
                      <div className="relative overflow-hidden rounded-lg">
                        {member.image_url ? (
                          <img src={member.image_url} alt={member.name} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
                        ) : (
                          <div className="w-full h-64 bg-muted flex items-center justify-center">
                            <Users className="w-16 h-16 text-muted-foreground/50" />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-foreground mb-2 font-semibold text-lg">{member.name}</h3>
                      <p className="text-community-warm font-medium mb-3">{member.role}</p>
                      {member.bio && <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-gradient-to-r from-community-nature to-community-trust text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in">
          <h2 className="text-white mb-6">Join Our Mission</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Are you passionate about community development and social change?
            We're always looking for dedicated individuals to join our team.
          </p>
          <div className="space-y-4 text-white/80">
            <p>Contact us at <a href="mailto:careers@ghettofoundation.org" className="text-white font-medium hover:underline">careers@ghettofoundation.org</a></p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
