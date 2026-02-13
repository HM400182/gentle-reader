import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ first_name: '', last_name: '', email: '', phone: '', subject: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.first_name || !form.last_name || !form.email || !form.subject || !form.message) {
      toast({ title: "Error", description: "Please fill all required fields", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from('contact_submissions').insert([form]);
    setSubmitting(false);
    if (error) {
      toast({ title: "Error", description: "Failed to send message. Please try again.", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
    setForm({ first_name: '', last_name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-community-trust/10 to-community-nature/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in">
          <h1 className="text-foreground mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We'd love to hear from you. Whether you're interested in our programs, want to volunteer, or have any question about our work, we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              <Card className="community-card p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-community-warm mt-1" />
                  <div>
                    <h4 className="text-foreground font-semibold mb-2">Visit Us</h4>
                    <p className="text-muted-foreground">Mathare, Nairobi<br />Kenya</p>
                  </div>
                </div>
              </Card>
              <Card className="community-card p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-community-nature mt-1" />
                  <div>
                    <h4 className="text-foreground font-semibold mb-2">Call Us</h4>
                    <p className="text-muted-foreground">+254 XXX XXX XXX<br />Monday - Friday, 8AM - 5PM</p>
                  </div>
                </div>
              </Card>
              <Card className="community-card p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-community-trust mt-1" />
                  <div>
                    <h4 className="text-foreground font-semibold mb-2">Email Us</h4>
                    <p className="text-muted-foreground">info@ghettofoundation.org<br />programs@ghettofoundation.org</p>
                  </div>
                </div>
              </Card>
              <Card className="community-card p-6">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-community-warm mt-1" />
                  <div>
                    <h4 className="text-foreground font-semibold mb-2">Office Hours</h4>
                    <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 5:00 PM<br />Saturday: 9:00 AM - 2:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-slide-up">
              <Card className="community-card p-8">
                <div className="mb-6">
                  <h2 className="text-foreground mb-2">Send us a Message</h2>
                  <p className="text-muted-foreground">Fill out the form below and we'll get back to you as soon as possible.</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-foreground font-medium mb-2">First Name *</label>
                      <input type="text" required value={form.first_name} onChange={e => setForm(f => ({ ...f, first_name: e.target.value }))} className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-community-warm focus:border-transparent bg-background text-foreground" placeholder="Your first name" />
                    </div>
                    <div>
                      <label className="block text-foreground font-medium mb-2">Last Name *</label>
                      <input type="text" required value={form.last_name} onChange={e => setForm(f => ({ ...f, last_name: e.target.value }))} className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-community-warm focus:border-transparent bg-background text-foreground" placeholder="Your last name" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-foreground font-medium mb-2">Email Address *</label>
                    <input type="email" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-community-warm focus:border-transparent bg-background text-foreground" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label className="block text-foreground font-medium mb-2">Phone Number</label>
                    <input type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-community-warm focus:border-transparent bg-background text-foreground" placeholder="+254 XXX XXX XXX" />
                  </div>
                  <div>
                    <label className="block text-foreground font-medium mb-2">Subject *</label>
                    <select required value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-community-warm focus:border-transparent bg-background text-foreground">
                      <option value="">Select a subject</option>
                      <option value="Programs & Services">Programs & Services</option>
                      <option value="Volunteer Opportunities">Volunteer Opportunities</option>
                      <option value="Partnership Inquiry">Partnership Inquiry</option>
                      <option value="Donation Questions">Donation Questions</option>
                      <option value="Media Inquiry">Media Inquiry</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-foreground font-medium mb-2">Message *</label>
                    <textarea required rows={6} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-community-warm focus:border-transparent resize-vertical bg-background text-foreground" placeholder="Tell us how we can help you..." />
                  </div>
                  <Button type="submit" className="btn-hero w-full" disabled={submitting}>
                    {submitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-foreground mb-4">Find Us</h2>
            <p className="text-xl text-muted-foreground">Located in the heart of Mathare, Nairobi</p>
          </div>
          <Card className="community-card overflow-hidden animate-slide-up">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-community-warm mx-auto mb-4" />
                <p className="text-muted-foreground font-medium">Interactive Map Coming Soon</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
