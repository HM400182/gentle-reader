
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Heart, Users, Lightbulb, MapPin } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "Every decision we make prioritizes the needs and voices of the Mathare community."
    },
    {
      icon: Users,
      title: "Inclusive Participation",
      description: "We believe in the power of collective action and ensure everyone has a voice."
    },
    {
      icon: Lightbulb,
      title: "Innovation & Research",
      description: "Data-driven solutions and community-led research guide our approach."
    },
    {
      icon: Target,
      title: "Sustainable Impact",
      description: "We focus on long-term solutions that create lasting positive change."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-community-warm/10 to-community-nature/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-gray-900 mb-6">About Ghetto Foundation</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Founded on the belief that every community has the power to transform itself, 
              the Ghetto Foundation works hand-in-hand with residents of Mathare to create 
              sustainable change through research, education, and community-driven initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  The Ghetto Foundation emerged from a deep understanding that lasting change 
                  comes from within communities themselves. Founded by residents and supporters 
                  who believed in the untapped potential of Mathare, we began as a grassroots 
                  movement focused on education and community empowerment.
                </p>
                <p>
                  Over the years, we've grown into a comprehensive organization that addresses 
                  multiple facets of community development - from vocational training and 
                  digital literacy to research and civic education. Our approach remains 
                  unchanged: listen to the community, research the challenges, and implement 
                  solutions together.
                </p>
                <p>
                  Today, we continue to evolve, always guided by the voices and needs of 
                  the people we serve. Every program, every initiative, and every decision 
                  reflects our commitment to community-led development.
                </p>
              </div>
            </div>
            
            <div className="animate-slide-up">
              <Card className="community-card p-8">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-community-warm mx-auto mb-6" />
                  <h3 className="text-gray-900 mb-4">Located in Mathare</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Mathare is one of Nairobi's largest informal settlements, home to over 
                    200,000 residents. It's a vibrant community with incredible potential, 
                    facing challenges that require innovative, community-driven solutions.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="community-card p-8 animate-fade-in">
              <Target className="w-12 h-12 text-community-warm mb-6" />
              <h3 className="text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower the Mathare community through sustainable development initiatives, 
                community-led research, and educational programs that create lasting positive 
                impact and foster self-reliance.
              </p>
            </Card>
            
            <Card className="community-card p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Eye className="w-12 h-12 text-community-nature mb-6" />
              <h3 className="text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                A thriving, self-sustaining Mathare community where every individual has 
                access to quality education, economic opportunities, and the resources 
                needed to reach their full potential.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we work with the community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="community-card p-6 text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-0">
                  <value.icon className="w-12 h-12 text-community-warm mx-auto mb-4" />
                  <h4 className="text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community-Led Research Approach */}
      <section className="py-20 bg-gradient-to-r from-community-nature to-community-trust text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in">
          <h2 className="text-white mb-6">Community-Led Research & Action (CLRA)</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            At the heart of our methodology is CLRA - an approach that ensures community 
            members are not just beneficiaries but active researchers and decision-makers 
            in identifying challenges and developing solutions.
          </p>
          <p className="text-white/80 leading-relaxed">
            This participatory approach means that every program we implement is grounded 
            in real community needs, backed by local research, and designed for sustainability 
            by the very people it serves.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
