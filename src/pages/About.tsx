
import Layout from '@/components/Layout';
import { Target, Eye, Heart, Users, Lightbulb, MapPin } from 'lucide-react';
import mathareAerial from '@/assets/mathare-aerial.jpg';

const About = () => {

  return (
    <Layout>
      {/* Hero with Mathare aerial bg */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img src={mathareAerial} alt="Mathare aerial view" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-20 animate-fade-in">
          <h1 className="text-white mb-6 drop-shadow-lg">About Ghetto Foundation</h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Founded on the belief that every community has the power to transform itself,
            we work hand-in-hand with residents of Mathare to create sustainable change.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <img src={mathareAerial} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-2">
                Our Story
              </div>
              <h2 className="text-foreground">From Grassroots to Impact</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The Ghetto Foundation emerged from a deep understanding that lasting change
                  comes from within communities themselves. Founded by residents and supporters
                  who believed in the untapped potential of Mathare, we began as a grassroots
                  movement focused on education and community empowerment.
                </p>
                <p>
                  Over the years, we've grown into a comprehensive organization addressing
                  multiple facets of community development — from vocational training and
                  digital literacy to research and civic education.
                </p>
              </div>
            </div>

            <div className="animate-slide-up">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={mathareAerial} alt="Mathare community" className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-semibold">Mathare, Nairobi</span>
                  </div>
                  <p className="text-sm text-white/80">Home to over 200,000 resilient residents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision with bg image */}
      <section className="relative py-24 overflow-hidden">
        <img src={mathareAerial} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 animate-fade-in">
              <Target className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-white mb-4">Our Mission</h3>
              <p className="text-white/85 leading-relaxed">
                To empower the Mathare community through sustainable development initiatives,
                community-led research, and educational programs that create lasting positive
                impact and foster self-reliance.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Eye className="w-12 h-12 text-secondary mb-6" />
              <h3 className="text-white mb-4">Our Vision</h3>
              <p className="text-white/85 leading-relaxed">
                A thriving, self-sustaining Mathare community where every individual has
                access to quality education, economic opportunities, and the resources
                needed to reach their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-fade-in">
            <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
              What Drives Us
            </div>
            <h2 className="text-foreground mb-4">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: "Community First", desc: "Every decision prioritizes the needs and voices of the Mathare community." },
              { icon: Users, title: "Inclusive Participation", desc: "We believe in collective action and ensure everyone has a voice." },
              { icon: Lightbulb, title: "Innovation & Research", desc: "Data-driven solutions and community-led research guide our approach." },
              { icon: Target, title: "Sustainable Impact", desc: "Long-term solutions that create lasting positive change." },
            ].map((v, i) => (
              <div key={i} className="group text-center p-6 rounded-2xl bg-card border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <v.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-foreground mb-2 text-lg font-semibold">{v.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLRA */}
      <section className="relative py-20 overflow-hidden">
        <img src={mathareAerial} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--community-nature))]/90 to-[hsl(var(--community-trust))]/90" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 animate-fade-in">
          <h2 className="text-white mb-6">Community-Led Research & Action</h2>
          <p className="text-xl text-white/90 mb-6 leading-relaxed">
            At the heart of our methodology is CLRA — ensuring community members are not just
            beneficiaries but active researchers and decision-makers.
          </p>
          <p className="text-white/80 leading-relaxed">
            Every program we implement is grounded in real community needs, backed by local
            research, and designed for sustainability by the very people it serves.
          </p>
        </div>
      </section>

      {/* Join */}
      <section className="relative py-20 overflow-hidden">
        <img src={mathareAerial} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 animate-fade-in">
          <h2 className="text-white mb-6">Join Our Mission</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Are you passionate about community development and social change?
            We're always looking for dedicated individuals to join our team.
          </p>
          <a href="mailto:careers@ghettofoundation.org" className="btn-hero inline-block">
            Get In Touch
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default About;
