import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Bell, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const News = () => {
  const announcements = [
    {
      id: 1,
      title: "Youth Empowerment Workshop 2025",
      date: "January 15, 2025",
      category: "Event",
      description: "Join us for our upcoming youth empowerment workshop focusing on digital literacy and entrepreneurship skills.",
      featured: true,
    },
    {
      id: 2,
      title: "Partnership with VU University Amsterdam",
      date: "December 20, 2024",
      category: "Partnership",
      description: "We're excited to announce our continued collaboration with VU University Amsterdam for financial literacy training.",
      featured: true,
    },
    {
      id: 3,
      title: "Community Health Outreach Program",
      date: "December 10, 2024",
      category: "Program",
      description: "Our health outreach program successfully reached over 500 families in Mathare this month.",
      featured: false,
    },
    {
      id: 4,
      title: "Digital Associates Graduation Ceremony",
      date: "November 28, 2024",
      category: "Milestone",
      description: "Celebrating the graduation of 45 young people from our Digital Associates program.",
      featured: false,
    },
    {
      id: 5,
      title: "New Office Opening in Mathare",
      date: "November 15, 2024",
      category: "Announcement",
      description: "We're thrilled to announce the opening of our new community center in the heart of Mathare.",
      featured: false,
    },
    {
      id: 6,
      title: "Civic Education Initiative Launch",
      date: "October 30, 2024",
      category: "Program",
      description: "Launching our new civic education program to empower youth with knowledge about their rights and governance.",
      featured: false,
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Event: "bg-primary/20 text-primary",
      Partnership: "bg-accent/20 text-accent",
      Program: "bg-blue-500/20 text-blue-600",
      Milestone: "bg-purple-500/20 text-purple-600",
      Announcement: "bg-yellow-500/20 text-yellow-600",
    };
    return colors[category] || "bg-muted text-muted-foreground";
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-ghetto-charcoal">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <Bell className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            News & Announcements
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Stay updated with the latest news, events, and announcements from Ghetto Foundation.
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 animate-fade-in">Featured News</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {announcements.filter(a => a.featured).map((item, index) => (
              <div 
                key={item.id}
                className="bg-card rounded-lg p-8 shadow-lg border border-border hover:border-primary hover:shadow-xl transition-all duration-300 animate-fade-in hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </span>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4" />
                    {item.date}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <Button variant="outline" className="group">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All News */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 animate-fade-in">All Updates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {announcements.filter(a => !a.featured).map((item, index) => (
              <div 
                key={item.id}
                className="bg-card rounded-lg p-6 shadow-md border border-border hover:border-primary hover:shadow-lg transition-all duration-300 animate-fade-in hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{item.description}</p>
                <div className="flex items-center gap-2 text-muted-foreground text-xs">
                  <Calendar className="h-3 w-3" />
                  {item.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-4">Stay Informed</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter to receive the latest updates directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
              <Button className="bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
