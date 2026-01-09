import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Linkedin, Twitter, MapPin, Users } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Samuel Kiprotich",
      role: "Founder & Executive Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Samuel founded the Ghetto Foundation with a vision to empower the Mathare community through education and sustainable development. With over 10 years of experience in community organizing.",
      email: "samuel@ghettofoundation.org",
      linkedin: "#",
      location: "Mathare, Nairobi"
    },
    {
      name: "Grace Wanjiku",
      role: "Program Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Grace leads our community programs with passion and expertise. She has a background in social work and has been instrumental in developing our youth leadership initiatives.",
      email: "grace@ghettofoundation.org",
      linkedin: "#",
      location: "Mathare, Nairobi"
    },
    {
      name: "David Mwangi",
      role: "Research Coordinator",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "David coordinates our Community-Led Research and Action (CLRA) initiatives. He holds a degree in Social Sciences and is passionate about participatory research methodologies.",
      email: "david@ghettofoundation.org",
      twitter: "#",
      location: "Mathare, Nairobi"
    },
    {
      name: "Mary Akinyi",
      role: "Digital Associates Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Mary manages our Digital Associates program, helping community members develop digital literacy and data collection skills. She has a background in IT and community development.",
      email: "mary@ghettofoundation.org",
      linkedin: "#",
      location: "Mathare, Nairobi"
    },
    {
      name: "Peter Ochieng",
      role: "Community Outreach Specialist",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      bio: "Peter builds bridges between the foundation and the wider Mathare community. His grassroots approach ensures our programs remain community-centered and culturally relevant.",
      email: "peter@ghettofoundation.org",
      twitter: "#",
      location: "Mathare, Nairobi"
    },
    {
      name: "Jane Njeri",
      role: "Youth Programs Coordinator",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop&crop=face",
      bio: "Jane leads our youth leadership and civic education programs. She is a young leader herself and understands the challenges and opportunities facing Mathare's youth.",
      email: "jane@ghettofoundation.org",
      linkedin: "#",
      location: "Mathare, Nairobi"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-community-warm/10 to-community-nature/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-gray-900 mb-6">Our Team</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Meet the passionate individuals who work tirelessly to empower the Mathare community. 
              Our team combines local expertise with innovative approaches to create lasting change.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <Users className="w-16 h-16 text-community-warm mx-auto mb-4" />
            <h2 className="text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our leadership team brings together diverse expertise in community development, 
              research, and social innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index} 
                className="community-card group hover:shadow-xl transition-all duration-300 animate-slide-up" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Hover Details */}
                      <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-white">
                          <p className="text-sm leading-relaxed">{member.bio}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-community-warm font-medium mb-4">{member.role}</p>
                    
                    <div className="flex items-center justify-center text-gray-500 text-sm mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      {member.location}
                    </div>

                    {/* Contact Links */}
                    <div className="flex justify-center space-x-3">
                      {member.email && (
                        <a 
                          href={`mailto:${member.email}`}
                          className="p-2 text-gray-600 hover:text-community-warm transition-colors duration-200"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      )}
                      {member.linkedin && (
                        <a 
                          href={member.linkedin}
                          className="p-2 text-gray-600 hover:text-community-trust transition-colors duration-200"
                          aria-label={`${member.name} LinkedIn`}
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {member.twitter && (
                        <a 
                          href={member.twitter}
                          className="p-2 text-gray-600 hover:text-community-nature transition-colors duration-200"
                          aria-label={`${member.name} Twitter`}
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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
            <p>Current opportunities include volunteer positions, internships, and consulting roles.</p>
            <p>Contact us at <a href="mailto:careers@ghettofoundation.org" className="text-white font-medium hover:underline">careers@ghettofoundation.org</a> to learn more.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;