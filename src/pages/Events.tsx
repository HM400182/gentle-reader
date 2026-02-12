import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface Event {
  id: string;
  title: string;
  description: string | null;
  location: string | null;
  event_date: string;
  event_time: string | null;
  image_url: string | null;
}

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data } = await supabase
        .from('events')
        .select('*')
        .eq('is_published', true)
        .order('event_date', { ascending: true });
      setEvents(data || []);
      setLoading(false);
    };
    fetchEvents();
  }, []);

  const upcoming = events.filter(e => new Date(e.event_date) >= new Date());
  const past = events.filter(e => new Date(e.event_date) < new Date());

  const EventCard = ({ event }: { event: Event }) => {
    const date = new Date(event.event_date);
    const isPast = date < new Date();
    return (
      <Card className={`community-card overflow-hidden ${isPast ? 'opacity-75' : ''}`}>
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div className="bg-primary/10 rounded-lg p-3 text-center min-w-[60px]">
              <div className="text-2xl font-bold text-primary">{date.getDate()}</div>
              <div className="text-xs text-primary font-medium uppercase">{date.toLocaleDateString('en-US', { month: 'short' })}</div>
            </div>
            <Badge variant={isPast ? "secondary" : "default"} className={isPast ? '' : 'bg-community-nature text-white'}>
              {isPast ? 'Past' : 'Upcoming'}
            </Badge>
          </div>
          <h3 className="font-bold text-lg mb-2">{event.title}</h3>
          {event.description && <p className="text-sm text-muted-foreground mb-3 line-clamp-3">{event.description}</p>}
          <div className="space-y-1 text-sm text-muted-foreground">
            {event.event_time && (
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" />{event.event_time}</div>
            )}
            {event.location && (
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4" />{event.location}</div>
            )}
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <Layout>
      <section className="relative py-16 sm:py-20 bg-community-trust/10">
        <div className="max-w-4xl mx-auto text-center px-4 animate-fade-in">
          <Calendar className="w-12 h-12 text-community-trust mx-auto mb-4" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Events Calendar</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with our community events, workshops, and gatherings in Mathare.
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="text-center py-12 text-muted-foreground">Loading events...</div>
          ) : events.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">No Events Yet</h2>
              <p className="text-muted-foreground">Check back soon for upcoming community events!</p>
            </div>
          ) : (
            <>
              {upcoming.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {upcoming.map(e => <EventCard key={e.id} event={e} />)}
                  </div>
                </div>
              )}
              {past.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Past Events</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {past.map(e => <EventCard key={e.id} event={e} />)}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Events;
