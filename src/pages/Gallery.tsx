import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Camera, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface GalleryImage {
  id: string;
  image_url: string;
  title: string;
  category: string;
  description: string | null;
}

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'Mathare Resilience', 'Digital Associates', 'Community Projects', 'Our Research', 'Youth Leadership', 'Civic Education', 'Events', 'Uji Sato'];

  useEffect(() => {
    const fetchImages = async () => {
      const { data } = await supabase
        .from('gallery_images')
        .select('*')
        .eq('is_published', true)
        .order('display_order', { ascending: true });
      setImages(data || []);
      setLoading(false);
    };
    fetchImages();
  }, []);

  const filteredImages = activeCategory === 'All' ? images : images.filter(img => img.category === activeCategory);

  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setImageIndex(index);
  };

  const navigate = (dir: number) => {
    const newIndex = imageIndex + dir;
    if (newIndex >= 0 && newIndex < filteredImages.length) {
      setImageIndex(newIndex);
      setSelectedImage(filteredImages[newIndex]);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
        {/* Hero */}
        <section className="relative py-16 md:py-24 px-4 bg-community-warm/10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <Camera className="w-10 h-10 sm:w-12 sm:h-12 text-community-warm mr-4" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">Our Gallery</h1>
            </div>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Explore moments captured across our programs and events in Mathare.
            </p>
          </div>
        </section>

        {/* Category Filters */}
        <section className="py-6 px-4 border-b">
          <div className="max-w-6xl mx-auto flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <Badge
                key={cat}
                variant={activeCategory === cat ? "default" : "secondary"}
                className="cursor-pointer px-4 py-2 text-sm"
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </Badge>
            ))}
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            {loading ? (
              <p className="text-center text-muted-foreground py-16">Loading gallery...</p>
            ) : filteredImages.length === 0 ? (
              <div className="text-center py-16">
                <Camera className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                <p className="text-muted-foreground text-lg">No photos in this category yet.</p>
                <p className="text-muted-foreground text-sm mt-1">Check back soon for updates!</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredImages.map((img, index) => (
                  <div
                    key={img.id}
                    className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
                    onClick={() => openLightbox(img, index)}
                  >
                    <img src={img.image_url} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <p className="text-white text-sm font-medium">{img.title}</p>
                        <p className="text-white/70 text-xs">{img.category}</p>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-5 h-5 text-white drop-shadow" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-black/95 border-none">
          {selectedImage && (
            <div className="relative">
              <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 z-50 text-white/80 hover:text-white">
                <X className="w-6 h-6" />
              </button>
              <img src={selectedImage.image_url} alt={selectedImage.title} className="w-full max-h-[80vh] object-contain" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-semibold text-lg">{selectedImage.title}</h3>
                {selectedImage.description && <p className="text-white/70 text-sm mt-1">{selectedImage.description}</p>}
              </div>
              {imageIndex > 0 && (
                <button onClick={() => navigate(-1)} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white">
                  <ChevronLeft className="w-8 h-8" />
                </button>
              )}
              {imageIndex < filteredImages.length - 1 && (
                <button onClick={() => navigate(1)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white">
                  <ChevronRight className="w-8 h-8" />
                </button>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Gallery;
