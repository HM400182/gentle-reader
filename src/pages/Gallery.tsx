import { useState } from 'react';
import Layout from '@/components/Layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Camera, X, ChevronLeft, ChevronRight, ZoomIn, Coffee, Laptop, Users, Mic, Scale, Building, BookOpen, Play, Calendar, MapPin, Clock } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
  description: string;
}

interface Video {
  id: number;
  title: string;
  thumbnail: string;
  videoUrl: string;
  category: string;
  duration: string;
  description: string;
}

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
}

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const categories = [
    { name: 'All', icon: Camera, color: 'bg-primary' },
    { name: 'Mathare Resilience', icon: Building, color: 'bg-orange-500' },
    { name: 'Digital Associates', icon: Laptop, color: 'bg-community-trust' },
    { name: 'Community Projects', icon: Users, color: 'bg-community-nature' },
    { name: 'Our Research', icon: BookOpen, color: 'bg-teal-500' },
    { name: 'Youth Leadership', icon: Users, color: 'bg-purple-500' },
    { name: 'Civic Education', icon: Scale, color: 'bg-community-hope' },
    { name: 'Events', icon: Calendar, color: 'bg-pink-500' },
    { name: 'Uji Sato', icon: Coffee, color: 'bg-community-warm' },
  ];

  // Real gallery images organized by program
  const galleryImages: GalleryImage[] = [
    // Uji Sato
    { id: 1, src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800', title: 'Morning Porridge Distribution', category: 'Uji Sato', description: 'Children receiving nutritious porridge to start their day' },
    { id: 2, src: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800', title: 'Community Kitchen', category: 'Uji Sato', description: 'Volunteers preparing meals for the community' },
    { id: 3, src: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=800', title: 'Happy Children', category: 'Uji Sato', description: 'Smiling faces after a nourishing breakfast' },
    { id: 4, src: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800', title: 'Uji Sato Volunteers', category: 'Uji Sato', description: 'Dedicated volunteers serving the community' },
    { id: 5, src: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=800', title: 'Serving Station', category: 'Uji Sato', description: 'Fresh porridge being served to children' },
    { id: 6, src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800', title: 'Community Gathering', category: 'Uji Sato', description: 'Families coming together for morning meals' },
    
    // Digital Associates
    { id: 7, src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800', title: 'Computer Training Session', category: 'Digital Associates', description: 'Youth learning digital skills' },
    { id: 8, src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800', title: 'Data Collection Workshop', category: 'Digital Associates', description: 'Training in community research methods' },
    { id: 9, src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800', title: 'Tech Hub Activities', category: 'Digital Associates', description: 'Young people working on digital projects' },
    { id: 10, src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800', title: 'Graduation Ceremony', category: 'Digital Associates', description: 'Celebrating digital literacy graduates' },
    { id: 11, src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800', title: 'Coding Workshop', category: 'Digital Associates', description: 'Learning programming fundamentals' },
    { id: 12, src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800', title: 'Tech Mentorship', category: 'Digital Associates', description: 'One-on-one tech guidance sessions' },
    
    // Youth Leadership
    { id: 13, src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800', title: 'Leadership Workshop', category: 'Youth Leadership', description: 'Young leaders in training session' },
    { id: 14, src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800', title: 'Community Meeting', category: 'Youth Leadership', description: 'Youth-led community discussion' },
    { id: 15, src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800', title: 'Mentorship Session', category: 'Youth Leadership', description: 'Mentors guiding young leaders' },
    { id: 16, src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800', title: 'Project Presentation', category: 'Youth Leadership', description: 'Leaders presenting community projects' },
    { id: 17, src: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800', title: 'Team Building', category: 'Youth Leadership', description: 'Youth leaders bonding activities' },
    { id: 18, src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800', title: 'Strategy Planning', category: 'Youth Leadership', description: 'Planning community initiatives' },
    
    // Civic Education
    { id: 19, src: 'https://images.unsplash.com/photo-1577036421869-7c8d388d2123?w=800', title: 'Rights Awareness Workshop', category: 'Civic Education', description: 'Teaching community about their rights' },
    { id: 20, src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800', title: 'Voter Education', category: 'Civic Education', description: 'Civic engagement training session' },
    { id: 21, src: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800', title: 'Legal Awareness', category: 'Civic Education', description: 'Community members learning legal rights' },
    { id: 22, src: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800', title: 'Constitution Training', category: 'Civic Education', description: 'Understanding constitutional rights' },
    
    // Ghetto Stories
    { id: 23, src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800', title: 'Documentary Filming', category: 'Ghetto Stories', description: 'Capturing authentic Mathare stories' },
    { id: 24, src: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=800', title: 'Community Interview', category: 'Ghetto Stories', description: "Recording residents' experiences" },
    { id: 25, src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800', title: 'Photo Exhibition', category: 'Ghetto Stories', description: 'Showcasing community photography' },
    { id: 26, src: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800', title: 'Film Screening', category: 'Ghetto Stories', description: 'Community documentary viewing' },
    
    // Mathare Resilience
    { id: 27, src: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800', title: 'Resilience Center Opening', category: 'Mathare Resilience', description: 'Community center inauguration' },
    { id: 28, src: 'https://images.unsplash.com/photo-1513128034602-7814ccadence?w=800', title: 'Vocational Training', category: 'Mathare Resilience', description: 'Skills training in progress' },
    { id: 29, src: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800', title: 'Mental Health Support', category: 'Mathare Resilience', description: 'Counseling and support services' },
    { id: 30, src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800', title: 'Community Support', category: 'Mathare Resilience', description: 'Building community bonds' },
    
    // Research
    { id: 31, src: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800', title: 'CLRA Session', category: 'Research', description: 'Community-led research in action' },
    { id: 32, src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800', title: 'Data Analysis Workshop', category: 'Research', description: 'Analyzing community data' },
    { id: 33, src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800', title: 'Research Presentation', category: 'Research', description: 'Sharing research findings' },
    { id: 34, src: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=800', title: 'Field Research', category: 'Research', description: 'Conducting community surveys' },
  ];

  // Video gallery data
  const videos: Video[] = [
    { id: 1, title: 'Uji Sato: Nourishing Our Community', thumbnail: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', category: 'Uji Sato', duration: '5:32', description: 'See how our porridge program transforms lives every morning' },
    { id: 2, title: 'Digital Skills for Tomorrow', thumbnail: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', category: 'Digital Associates', duration: '8:15', description: 'Youth learning technology to shape their futures' },
    { id: 3, title: 'Youth Leadership in Action', thumbnail: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', category: 'Youth Leadership', duration: '6:45', description: 'How young leaders are transforming Mathare' },
    { id: 4, title: 'Voices from the Ghetto', thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', category: 'Ghetto Stories', duration: '12:20', description: 'Documentary showcasing real stories from residents' },
    { id: 5, title: 'Building Resilience Together', thumbnail: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', category: 'Mathare Resilience', duration: '7:50', description: 'Community support and mental health initiatives' },
    { id: 6, title: 'Know Your Rights Workshop', thumbnail: 'https://images.unsplash.com/photo-1577036421869-7c8d388d2123?w=800', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', category: 'Civic Education', duration: '9:30', description: 'Empowering communities through civic knowledge' },
  ];

  // Events calendar data
  const events: Event[] = [
    { id: 1, title: 'Uji Sato Morning Program', date: '2026-01-15', time: '6:00 AM - 9:00 AM', location: 'Mathare Community Center', description: 'Daily porridge distribution for children', category: 'Uji Sato' },
    { id: 2, title: 'Digital Skills Workshop', date: '2026-01-18', time: '10:00 AM - 4:00 PM', location: 'Ghetto Foundation Tech Hub', description: 'Introduction to computer basics and internet safety', category: 'Digital Associates' },
    { id: 3, title: 'Youth Leadership Summit', date: '2026-01-22', time: '9:00 AM - 5:00 PM', location: 'Mathare Social Hall', description: 'Annual gathering of young community leaders', category: 'Youth Leadership' },
    { id: 4, title: 'Documentary Screening: Life in Mathare', date: '2026-01-25', time: '6:00 PM - 8:00 PM', location: 'Community Open Space', description: 'Premiere of new community documentary', category: 'Ghetto Stories' },
    { id: 5, title: 'Civic Education Forum', date: '2026-01-28', time: '2:00 PM - 5:00 PM', location: 'Mathare Community Center', description: 'Understanding your constitutional rights', category: 'Civic Education' },
    { id: 6, title: 'Mental Health Awareness Day', date: '2026-02-01', time: '9:00 AM - 3:00 PM', location: 'Resilience Center', description: 'Free counseling and mental health resources', category: 'Mathare Resilience' },
    { id: 7, title: 'Community Research Presentation', date: '2026-02-05', time: '11:00 AM - 1:00 PM', location: 'Ghetto Foundation Office', description: 'Sharing findings from recent community research', category: 'Research' },
    { id: 8, title: 'Volunteer Training Day', date: '2026-02-10', time: '8:00 AM - 12:00 PM', location: 'Various Locations', description: 'Training new volunteers across all programs', category: 'All' },
  ];

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const filteredVideos = activeCategory === 'All'
    ? videos
    : videos.filter(vid => vid.category === activeCategory);

  const filteredEvents = activeCategory === 'All'
    ? events
    : events.filter(evt => evt.category === activeCategory);

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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
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
              Explore moments from our programs through photos, videos, and upcoming events.
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

        {/* Tabs for Photos, Videos, Events */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="photos" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8 bg-gray-900">
                <TabsTrigger value="photos" className="text-white data-[state=active]:bg-community-warm">
                  <Camera className="w-4 h-4 mr-2" />
                  Photos
                </TabsTrigger>
                <TabsTrigger value="videos" className="text-white data-[state=active]:bg-community-warm">
                  <Play className="w-4 h-4 mr-2" />
                  Videos
                </TabsTrigger>
                <TabsTrigger value="events" className="text-white data-[state=active]:bg-community-warm">
                  <Calendar className="w-4 h-4 mr-2" />
                  Events
                </TabsTrigger>
              </TabsList>

              {/* Photos Tab */}
              <TabsContent value="photos">
                <div className="mb-4">
                  <p className="text-gray-500 text-sm">
                    Showing {filteredImages.length} {filteredImages.length === 1 ? 'photo' : 'photos'}
                    {activeCategory !== 'All' && ` in ${activeCategory}`}
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 sm:gap-2">
                  {filteredImages.map((image, index) => (
                    <div 
                      key={image.id} 
                      className="aspect-square relative group cursor-pointer overflow-hidden animate-fade-in rounded-lg"
                      style={{ animationDelay: `${index * 0.03}s` }}
                      onClick={() => openLightbox(image, index)}
                    >
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-2">
                          <ZoomIn className="w-8 h-8 text-white mx-auto mb-2" />
                          <p className="text-white text-xs sm:text-sm font-medium line-clamp-2">{image.title}</p>
                        </div>
                      </div>
                      <Badge 
                        className="absolute bottom-2 left-2 text-[10px] sm:text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70 text-white border-0"
                      >
                        {image.category}
                      </Badge>
                    </div>
                  ))}
                </div>
              </TabsContent>

              {/* Videos Tab */}
              <TabsContent value="videos">
                <div className="mb-4">
                  <p className="text-gray-500 text-sm">
                    Showing {filteredVideos.length} {filteredVideos.length === 1 ? 'video' : 'videos'}
                    {activeCategory !== 'All' && ` in ${activeCategory}`}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredVideos.map((video, index) => (
                    <div 
                      key={video.id} 
                      className="bg-gray-900 rounded-xl overflow-hidden group cursor-pointer animate-fade-in hover-lift"
                      style={{ animationDelay: `${index * 0.1}s` }}
                      onClick={() => setSelectedVideo(video)}
                    >
                      <div className="relative aspect-video">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-colors">
                          <div className="w-16 h-16 rounded-full bg-community-warm/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Play className="w-8 h-8 text-white ml-1" fill="white" />
                          </div>
                        </div>
                        <Badge className="absolute top-3 right-3 bg-black/70 text-white border-0">
                          {video.duration}
                        </Badge>
                      </div>
                      <div className="p-4">
                        <Badge className="mb-2 bg-community-warm/20 text-community-warm border-community-warm/30">
                          {video.category}
                        </Badge>
                        <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-community-warm transition-colors">
                          {video.title}
                        </h3>
                        <p className="text-gray-400 text-sm line-clamp-2">{video.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              {/* Events Tab */}
              <TabsContent value="events">
                <div className="mb-6">
                  <p className="text-gray-500 text-sm">
                    Showing {filteredEvents.length} upcoming {filteredEvents.length === 1 ? 'event' : 'events'}
                    {activeCategory !== 'All' && ` in ${activeCategory}`}
                  </p>
                </div>
                <div className="space-y-4">
                  {filteredEvents.map((event, index) => (
                    <div 
                      key={event.id} 
                      className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row gap-4 animate-fade-in hover:from-gray-800 hover:to-gray-700 transition-all duration-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {/* Date Badge */}
                      <div className="flex-shrink-0 text-center sm:text-left">
                        <div className="inline-block bg-community-warm rounded-lg p-3 sm:p-4">
                          <div className="text-white text-2xl sm:text-3xl font-bold">
                            {new Date(event.date).getDate()}
                          </div>
                          <div className="text-white/80 text-xs sm:text-sm uppercase">
                            {new Date(event.date).toLocaleString('en-US', { month: 'short' })}
                          </div>
                        </div>
                      </div>
                      
                      {/* Event Details */}
                      <div className="flex-grow">
                        <Badge className="mb-2 bg-community-trust/20 text-community-trust border-community-trust/30">
                          {event.category}
                        </Badge>
                        <h3 className="text-white font-semibold text-lg sm:text-xl mb-2">{event.title}</h3>
                        <p className="text-gray-400 text-sm mb-3">{event.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* RSVP Button */}
                      <div className="flex-shrink-0 flex items-center">
                        <Button className="bg-community-warm hover:bg-community-warm/90 text-white w-full sm:w-auto">
                          RSVP Now
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Photo Lightbox Modal */}
        <Dialog open={!!selectedImage} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-0 overflow-hidden">
            {selectedImage && (
              <div className="relative w-full h-full flex flex-col">
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

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

                <div className="flex-1 flex items-center justify-center p-4 sm:p-8">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    className="max-w-full max-h-[70vh] object-contain rounded-lg"
                  />
                </div>

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

        {/* Video Modal */}
        <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
          <DialogContent className="max-w-4xl p-0 bg-black border-0 overflow-hidden">
            {selectedVideo && (
              <div className="relative">
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="aspect-video">
                  <iframe
                    src={selectedVideo.videoUrl}
                    title={selectedVideo.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4 sm:p-6 bg-gray-900">
                  <Badge className="mb-2 bg-community-warm text-white">{selectedVideo.category}</Badge>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{selectedVideo.title}</h3>
                  <p className="text-gray-400 text-sm">{selectedVideo.description}</p>
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