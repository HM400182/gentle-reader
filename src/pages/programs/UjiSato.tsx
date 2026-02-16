import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Utensils, Calendar, HandHeart, Flame } from 'lucide-react';
import ujiImage1 from '@/assets/programs/uji-sato-1.jpg';
import ujiImage2 from '@/assets/programs/uji-sato-2.jpg';

const UjiSato = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero Section */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${ujiImage2})` }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 text-white border-white/50 bg-white/10">
              Community Feeding
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Uji Sato
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Nourishing the community through communal porridge cooking — bringing people together 
              while addressing food insecurity in Mathare.
            </p>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group relative overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src={ujiImage1} 
                  alt="Uji porridge cooking over open fire for the Mathare community" 
                  className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white font-medium text-sm">
                  Community porridge cooking in Mathare
                </p>
              </div>
              <div className="group relative overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src={ujiImage2} 
                  alt="Serving porridge to children in the Mathare community" 
                  className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white font-medium text-sm">
                  Serving the young ones of Mathare
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">What is Uji Sato?</CardTitle>
                <CardDescription className="text-lg">
                  Uji Sato is a community-led feeding initiative where large pots of nutritious porridge 
                  (uji) are prepared and shared among community members, especially children and the elderly. 
                  More than just a meal, it is a gathering point that strengthens bonds, fosters solidarity, 
                  and ensures that no one in Mathare goes hungry.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Key Aspects */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A grassroots approach to fighting hunger and building community.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Flame, title: "Open Fire Cooking", description: "Large communal pots of uji are prepared over open fires, a traditional method that brings warmth and togetherness.", impact: "Weekly sessions" },
                { icon: Users, title: "Community Gathering", description: "Uji Sato brings neighbors together — children, parents, and elders share a meal and strengthen community ties.", impact: "200+ served weekly" },
                { icon: Utensils, title: "Nutritious Meals", description: "Fortified porridge provides essential nutrients for growing children and vulnerable community members.", impact: "Balanced nutrition" },
                { icon: Calendar, title: "Regular Schedule", description: "Consistent feeding events ensure families can rely on a warm, nutritious meal throughout the week.", impact: "Ongoing program" },
                { icon: HandHeart, title: "Volunteer-Driven", description: "Community members volunteer their time and skills to cook, serve, and organize each Uji Sato event.", impact: "30+ volunteers" },
                { icon: Heart, title: "Dignity & Care", description: "Every person is served with respect and care, ensuring dignity for all who participate.", impact: "All ages welcome" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="hover-card h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      <div className="text-sm font-medium text-primary">{item.impact}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Program Impact</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">200+</div>
                <p className="text-sm text-muted-foreground">People Fed Weekly</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">30+</div>
                <p className="text-sm text-muted-foreground">Active Volunteers</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">52</div>
                <p className="text-sm text-muted-foreground">Weeks Per Year</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default UjiSato;
