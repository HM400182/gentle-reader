import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Heart, Users, Clock, Star, CheckCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Volunteer = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    skills: '',
    availability: '',
    preferred_program: '',
    motivation: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.full_name.trim() || !form.email.trim()) {
      toast({ title: "Error", description: "Name and email are required.", variant: "destructive" });
      return;
    }
    setLoading(true);
    const { error } = await supabase.from('volunteers').insert([form]);
    setLoading(false);
    if (error) {
      toast({ title: "Error", description: "Failed to submit. Please try again.", variant: "destructive" });
    } else {
      setSubmitted(true);
      toast({ title: "Success!", description: "Your volunteer application has been submitted." });
    }
  };

  const benefits = [
    { icon: Heart, title: "Make a Difference", desc: "Directly impact lives in the Mathare community" },
    { icon: Users, title: "Build Connections", desc: "Meet like-minded people passionate about change" },
    { icon: Clock, title: "Flexible Hours", desc: "Volunteer on your own schedule" },
    { icon: Star, title: "Gain Experience", desc: "Develop skills while serving the community" },
  ];

  if (submitted) {
    return (
      <Layout>
        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <CheckCircle className="w-20 h-20 text-community-nature mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4">Thank You for Volunteering!</h1>
            <p className="text-lg text-muted-foreground mb-8">
              We've received your application and will be in touch soon. Together, we can make a difference in Mathare.
            </p>
            <Button onClick={() => { setSubmitted(false); setForm({ full_name: '', email: '', phone: '', skills: '', availability: '', preferred_program: '', motivation: '' }); }} className="btn-hero">
              Submit Another Application
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-16 sm:py-20 bg-community-nature/10">
        <div className="max-w-4xl mx-auto text-center px-4 animate-fade-in">
          <Users className="w-12 h-12 text-community-nature mx-auto mb-4" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Volunteer With Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our team of dedicated volunteers and help create lasting change in the Mathare community.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <Card key={i} className="community-card text-center animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <CardContent className="p-6">
                <b.icon className="w-10 h-10 text-community-nature mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-2xl mx-auto">
          <Card className="animate-fade-in">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold mb-6">Volunteer Application</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" value={form.full_name} onChange={e => setForm(f => ({ ...f, full_name: e.target.value }))} required maxLength={100} />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} required maxLength={255} />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} maxLength={20} />
                </div>
                <div>
                  <Label htmlFor="skills">Skills & Expertise</Label>
                  <Input id="skills" placeholder="e.g., Teaching, Photography, Social Media" value={form.skills} onChange={e => setForm(f => ({ ...f, skills: e.target.value }))} maxLength={500} />
                </div>
                <div>
                  <Label htmlFor="availability">Availability</Label>
                  <Select value={form.availability} onValueChange={v => setForm(f => ({ ...f, availability: v }))}>
                    <SelectTrigger><SelectValue placeholder="Select availability" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekdays">Weekdays</SelectItem>
                      <SelectItem value="weekends">Weekends</SelectItem>
                      <SelectItem value="both">Both Weekdays & Weekends</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="program">Preferred Program</Label>
                  <Select value={form.preferred_program} onValueChange={v => setForm(f => ({ ...f, preferred_program: v }))}>
                    <SelectTrigger><SelectValue placeholder="Select a program" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mathare-resilience">Mathare Resilience</SelectItem>
                      <SelectItem value="digital-associates">Digital Associates</SelectItem>
                      <SelectItem value="community-projects">Community Projects</SelectItem>
                      <SelectItem value="youth-leadership">Youth Leadership</SelectItem>
                      <SelectItem value="civic-education">Civic Education</SelectItem>
                      <SelectItem value="ghetto-stories">Ghetto Stories</SelectItem>
                      <SelectItem value="ghetto-youths">Ghetto Youths</SelectItem>
                      <SelectItem value="any">Any / Open to All</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="motivation">Why do you want to volunteer?</Label>
                  <Textarea id="motivation" rows={4} value={form.motivation} onChange={e => setForm(f => ({ ...f, motivation: e.target.value }))} maxLength={1000} placeholder="Tell us what motivates you to volunteer with Ghetto Foundation..." />
                </div>
                <Button type="submit" className="btn-hero w-full" disabled={loading}>
                  {loading ? 'Submitting...' : 'Submit Application'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Volunteer;
