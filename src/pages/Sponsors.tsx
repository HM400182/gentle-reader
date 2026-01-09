import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Heart, Handshake, Users } from 'lucide-react';

const Sponsors = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Handshake className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Our Partners
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Together with our partners, we are building sustainable change for vulnerable youth in Nairobi's informal settlements.
            </p>
          </div>
        </section>

        {/* Main Partner Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">🌟 Main Partner</h2>
              <Card className="max-w-2xl mx-auto">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">Dr. Naomi van Stapele</CardTitle>
                  <CardDescription className="text-base">
                    International Institute of Social Studies (ISS), Erasmus University Rotterdam
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Partnerships */}
        <section className="py-16 px-4 bg-secondary/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">🤝 Key Partnerships</h2>
            <p className="text-lg text-center text-muted-foreground mb-12 max-w-4xl mx-auto">
              Over the past 2 years, Ghetto Foundation has worked with local and international partners to fight poverty, 
              promote financial literacy, and create sustainable livelihoods.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">European Union (EU) 🏛️</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription>
                    Supported youth security, governance, and police reform initiatives with over 48 youth groups
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">GiveDirectly 💵</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription>
                    Strengthening household resilience through direct support
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">International Institute of Social Studies (ISS) 🎓</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription>
                    Ongoing research and collaboration
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">VU University Amsterdam 📘</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription>
                    Trained 28 youth groups in financial literacy and entrepreneurship, leading to sustainable income-generating activities
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">Mathare Social Justice Centre (MSJC) ⚖️</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription>
                    Youth-driven spatial planning in Mathare
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">Nairobi Metropolitan Services (NMS) 🏙️</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription>
                    Collaborative urban development initiatives
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Closing Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground">
              ✨ We are deeply grateful to all our partners for walking this journey with us. 
              Together, we continue to empower youth and create lasting change in Mathare.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Sponsors;