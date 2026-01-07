import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { Image } from "lucide-react";

const Gallery = () => {
  const categories = ["All", "Education", "Health", "Community", "Events"];
  
  const galleryItems = [
    { category: "Education", title: "Classroom Learning" },
    { category: "Health", title: "Medical Outreach" },
    { category: "Community", title: "Community Meeting" },
    { category: "Events", title: "Annual Celebration" },
    { category: "Education", title: "Computer Training" },
    { category: "Health", title: "Wellness Workshop" },
    { category: "Community", title: "Youth Sports Day" },
    { category: "Events", title: "Graduation Ceremony" },
    { category: "Education", title: "Library Program" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Gallery"
        subtitle="See our work in action through photos and videos from our programs"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors text-muted-foreground first:bg-primary first:text-primary-foreground first:border-primary"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group relative bg-secondary rounded-lg overflow-hidden aspect-[4/3] cursor-pointer"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image className="h-16 w-16 text-muted-foreground/30" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-primary text-sm font-medium">{item.category}</p>
                    <h3 className="text-white font-semibold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              More photos coming soon. Follow us on social media for the latest updates.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
