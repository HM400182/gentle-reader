
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-community-trust/10 to-community-nature/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in">
          <h1 className="text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We'd love to hear from you. Whether you're interested in our programs, 
            want to volunteer, or have any question about our work, we're here to help.
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
                    <h4 className="text-gray-900 font-semibold mb-2">Visit Us</h4>
                    <p className="text-gray-600">
                      Mathare, Nairobi<br />
                      Kenya
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="community-card p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-community-nature mt-1" />
                  <div>
                    <h4 className="text-gray-900 font-semibold mb-2">Call Us</h4>
                    <p className="text-gray-600">
                      +254 XXX XXX XXX<br />
                      Monday - Friday, 8AM - 5PM
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="community-card p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-community-trust mt-1" />
                  <div>
                    <h4 className="text-gray-900 font-semibold mb-2">Email Us</h4>
                    <p className="text-gray-600">
                      info@ghettofoundation.org<br />
                      programs@ghettofoundation.org
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="community-card p-6">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-community-warm mt-1" />
                  <div>
                    <h4 className="text-gray-900 font-semibold mb-2">Office Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-slide-up">
              <Card className="community-card p-8">
                <div className="mb-6">
                  <h2 className="text-gray-900 mb-2">Send us a Message</h2>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">First Name *</label>
                      <input 
                        type="text" 
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-community-warm focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Last Name *</label>
                      <input 
                        type="text" 
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-community-warm focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-community-warm focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input 
                      type="tel"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-community-warm focus:border-transparent"
                      placeholder="+254 XXX XXX XXX"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Subject *</label>
                    <select 
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-community-warm focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="programs">Programs & Services</option>
                      <option value="volunteer">Volunteer Opportunities</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="donation">Donation Questions</option>
                      <option value="media">Media Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Message *</label>
                    <textarea 
                      required
                      rows={6}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-community-warm focus:border-transparent resize-vertical"
                      placeholder="Tell us how we can help you or share your thoughts..."
                    ></textarea>
                  </div>

                  <Button className="btn-hero w-full">
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-gray-900 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">Located in the heart of Mathare, Nairobi</p>
          </div>
          
          <Card className="community-card overflow-hidden animate-slide-up">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-community-warm mx-auto mb-4" />
                <p className="text-gray-600 font-medium">Interactive Map Coming Soon</p>
                <p className="text-gray-500 text-sm mt-2">Google Maps integration will be added</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
