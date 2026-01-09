import { useState } from 'react';
import Layout from '@/components/Layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Camera, X, ChevronLeft, ChevronRight, ZoomIn, Coffee, Laptop, Users, Mic, Scale, Building, BookOpen } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
  description: string;
}

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  const categories = [
    { name: 'All', icon: Camera, color: 'bg-primary' },
    { name: 'Uji Sato', icon: Coffee, color: 'bg-community-warm' },
    { name: 'Digital Associates', icon: Laptop, color: 'bg-community-trust' },
    { name: 'Youth Leadership', icon: Users, color: 'bg-community-nature' },
    { name: 'Civic Education', icon: Scale, color: 'bg-community-hope' },
    { name: 'Ghetto Stories', icon: Mic, color: 'bg-purple-500' },
    { name: 'Mathare Resilience', icon: Building, color: 'bg-orange-500' },
    { name: 'Research', icon: BookOpen, color: 'bg-teal-500' },
  ];

  // Gallery images organized by program
  const galleryImages: GalleryImage[] = [
    // Uji Sato
    { id: 1, src: '/lovable-uploads/1604577f-833a-4c8c-88fd-03385f133d3f.png', title: 'Morning Porridge Distribution', category: 'Uji Sato', description: 'Children receiving nutritious porridge to start their day' },
    { id: 2, src: '/lovable-uploads/1604577f-833a-4c8c-88fd-03385f133d3f.png', title: 'Community Kitchen', category: 'Uji Sato', description: 'Volunteers preparing meals for the community' },
    { id: 3, src: '/lovable-uploads/1604577f-833a-4c8c-88fd-03385f133d3f.png', title: 'Happy Children', category: 'Uji Sato', description: 'Smiling faces after a nourishing breakfast' },
    { id: 4, src: '/lovable-uploads/1604577f-833a-4c8c-88fd-03385f133d3f.png', title: 'Uji Sato Volunteers', category: 'Uji Sato', description: 'Dedicated volunteers serving the community' },
    
    // Digital Associates
    { id: 5, src: '/lovable-uploads/1604577f-833a-4c8c-88fd-03385f133d3f.png', title: 'Computer Training Session', category: 'Digital Associates', description: 'Youth learning digital skills' },
    { id: 6, src: '/lovable-uploads/1604577f-833a-4c8c-88fd-03385f133d3f.png', title: 'Data Collection Workshop', category: 'Digital Associates', description: 'Training in community research methods' },
    { id: 7, src: '/lovable-uploads/1604577f-833a-4c8c-88fd-03385f133d3f.png', title: 'Tech Hub Activities', category: 'Digital Associates', description: 'Young people working on digital projects' },
    { id: 8, src: '/lovable-uploads/1604577f-833a-4c8c-88fd-03385f133d3f.png', title: 'Graduation Ceremony', category: 'Digital Associates', description: 'Celebrating digital literacy graduates' },
    
    // Youth Leadership
    { id: 9, src: '/lovable-uploads/1604577f-833a-4c8c-88fd-03385f133d3f.png', title: 'Leadership Workshop', category: 'Youth Leadership', description: 'Young leaders in training session' },
    { id: 10, src: '/lovable-uploads/1604577f-833a-4c8c-88fd-03385f133d3f.png', title: 'Community Meeting', category: 'Youth Leadership', description: 'Youth-led community discussion' },
    { id: 11, src: '/lovable-uploads/1604577f-833a-4c8c-88fd-03385f133d3f.png', title: 'Mentorship Session', category: 'Youth Leadership', description: 'Mentors guiding young leaders' },
    { id: 12, src: '/lovable-uploads/1604577f-833a-4c8c-88fd-03385f133d3f.png', title: 'Project Presentation', category: 'Youth Leadership', description: 'Leaders presenting community projects' },
    
    // Civic Education
    { id: 13, src: '/lovable-uploads/1604577f-833a-4c8c-88fd-03385f133d3f.png', title: 'Rights Awareness Workshop', category: 'Civic Education', description: 'Teaching community about their rights' },
    { id: 14, src: '/lovable-uploads/1604577f-833a-4c8c-88fd-03385f133d3f.png', title: 'Voter Education', category: 'Civic Education', description: 'Civic engagement training session' },
    { id: 15, src: '/lovable-uploads/1604577f-833a-4c8c-88fd-03385f133d3f.png', title: 'Legal Awareness', category: 'Civic Education', description: 'Community members learning legal rights' },
    
    // Ghetto Stories
    { id: 16, src: '/lovable-uploads/1604577f-833a-4c8c-88fd-03385f133d3f.png', title: 'Documentary Filming', category: 'Ghetto Stories', description: 'Capturing authentic Mathare stories' },
    { id: 17, src: '/lovable-uploads/1604577f-833a-4c8c-88fd-03385f133d3f.png', title: 'Community Interview', category: 'Ghetto Stories', description: 'Recording residents\' experiences' },
    { id: 18, src: '/lovable-uploads/1604577f-833a-4c8c-88fd-03385f133d3f.png', title: 'Photo Exhibition', category: 'Ghetto Stories', description: 'Showcasing community photography' },
    
    // Mathare Resilience
    { id: 19, src: '/lovable-uploads/1604577f-833a-4c8c-88fd-03385f133d3f.png', title: 'Resilience Center Opening', category: 'Mathare Resilience', description: 'Community center inauguration' },
    { id: 20, src: '/lovable-uploads/1604577f-833a-4c8c-88fd-03385f133d3f.png', title: 'Vocational Training', category: 'Mathare Resilience', description: 'Skills training in progress' },
    { id: 21, src: '/lovable-uploads/1604577f-833a-4c8c-88fd-03385f133d3f.png', title: 'Mental Health Support', category: 'Mathare Resilience', description: 'Counseling and support services' },
    
    // Research
    { id: 22, src: '/lovable-uploads/1604577f-833a-4c8c-88fd-03385f133d3f.png', title: 'CLRA Session', category: 'Research', description: 'Community-led research in action' },
    { id: 23, src: '/lovable-uploads/1604577f-833a-4c8c-88fd-03385f133d3f.png', title: 'Data Analysis Workshop', category: 'Research', description: 'Analyzing community data' },
    { id: 24, src: '/lovable-uploads/1604577f-833a-4c8c-88fd-03385f133d3f.png', title: 'Research Presentation', category: 'Research', description: 'Sharing research findings' },
  ];

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = imageIndex === 0 ? filteredImages.length - 1 : imageIndex - 1;
    setImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const goToNext = () => {
    const newIndex = imageIndex === filteredImages.length - 1 ? 0 : imageIndex + 1;
    setImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <Camera className="w-10 h-10 sm:w-12 sm:h-12 text-white mr-4" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Our Gallery
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              Explore moments from our programs. Click on any image to view in full screen.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="sticky top-16 z-40 py-4 px-4 bg-black/95 backdrop-blur-lg border-b border-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {categories.map((category) => {
                const IconComponent = category.icon;
                const isActive = activeCategory === category.name;
                return (
                  <Button
                    key={category.name}
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setActiveCategory(category.name)}
                    className={`
                      flex items-center gap-2 rounded-full px-3 sm:px-4 py-2 transition-all duration-300
                      ${isActive 
                        ? `${category.color} text-white shadow-lg scale-105` 
                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                      }
                    `}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="text-xs sm:text-sm font-medium">{category.name}</span>
                  </Button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Results Count */}
        <div className="py-4 px-4">
          <div className="max-w-6xl mx-auto">
            <p className="text-gray-500 text-sm">
              Showing {filteredImages.length} {filteredImages.length === 1 ? 'photo' : 'photos'}
              {activeCategory !== 'All' && ` in ${activeCategory}`}
            </p>
          </div>
        </div>

        {/* Gallery Grid - iPhone-style */}
        <section className="pb-16 px-2 sm:px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 sm:gap-2">
              {filteredImages.map((image, index) => (
                <div 
                  key={image.id} 
                  className="aspect-square relative group cursor-pointer overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={() => openLightbox(image, index)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-2">
                      <ZoomIn className="w-8 h-8 text-white mx-auto mb-2" />
                      <p className="text-white text-xs sm:text-sm font-medium line-clamp-2">{image.title}</p>
                    </div>
                  </div>
                  {/* Category Badge */}
                  <Badge 
                    className="absolute bottom-2 left-2 text-[10px] sm:text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70 text-white border-0"
                  >
                    {image.category}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        <Dialog open={!!selectedImage} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-0 overflow-hidden">
            {selectedImage && (
              <div className="relative w-full h-full flex flex-col">
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Navigation Arrows */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>

                {/* Image */}
                <div className="flex-1 flex items-center justify-center p-4 sm:p-8">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    className="max-w-full max-h-[70vh] object-contain rounded-lg"
                  />
                </div>

                {/* Image Info */}
                <div className="p-4 sm:p-6 bg-gradient-to-t from-black to-transparent">
                  <Badge className="mb-2 bg-community-warm text-white">{selectedImage.category}</Badge>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{selectedImage.title}</h3>
                  <p className="text-gray-400 text-sm">{selectedImage.description}</p>
                  <p className="text-gray-500 text-xs mt-2">
                    {imageIndex + 1} of {filteredImages.length}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
};

export default Gallery;
