import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Calendar, Users, Newspaper, LogOut, Plus, Trash2, LayoutDashboard } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);

  // Data
  const [volunteers, setVolunteers] = useState<any[]>([]);
  const [events, setEvents] = useState<any[]>([]);
  const [news, setNews] = useState<any[]>([]);

  // Forms
  const [eventForm, setEventForm] = useState({ title: '', description: '', location: '', event_date: '', event_time: '', is_published: true });
  const [newsForm, setNewsForm] = useState({ title: '', content: '', excerpt: '', author: '', is_published: true });

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) { navigate('/admin/login'); return; }
      const { data } = await supabase.from('user_roles').select('role').eq('user_id', session.user.id).eq('role', 'admin').single();
      if (!data) { navigate('/admin/login'); return; }
      setLoading(false);
      fetchAll();
    };
    checkAuth();
  }, [navigate]);

  const fetchAll = async () => {
    const [v, e, n] = await Promise.all([
      supabase.from('volunteers').select('*').order('created_at', { ascending: false }),
      supabase.from('events').select('*').order('event_date', { ascending: false }),
      supabase.from('news').select('*').order('created_at', { ascending: false }),
    ]);
    setVolunteers(v.data || []);
    setEvents(e.data || []);
    setNews(n.data || []);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  const addEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventForm.title || !eventForm.event_date) { toast({ title: "Error", description: "Title and date required", variant: "destructive" }); return; }
    const { error } = await supabase.from('events').insert([eventForm]);
    if (error) { toast({ title: "Error", description: error.message, variant: "destructive" }); return; }
    toast({ title: "Event added!" });
    setEventForm({ title: '', description: '', location: '', event_date: '', event_time: '', is_published: true });
    fetchAll();
  };

  const deleteEvent = async (id: string) => {
    await supabase.from('events').delete().eq('id', id);
    fetchAll();
  };

  const addNews = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsForm.title) { toast({ title: "Error", description: "Title required", variant: "destructive" }); return; }
    const { error } = await supabase.from('news').insert([newsForm]);
    if (error) { toast({ title: "Error", description: error.message, variant: "destructive" }); return; }
    toast({ title: "News added!" });
    setNewsForm({ title: '', content: '', excerpt: '', author: '', is_published: true });
    fetchAll();
  };

  const deleteNews = async (id: string) => {
    await supabase.from('news').delete().eq('id', id);
    fetchAll();
  };

  const updateVolunteerStatus = async (id: string, status: string) => {
    await supabase.from('volunteers').update({ status }).eq('id', id);
    fetchAll();
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <header className="bg-background border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LayoutDashboard className="w-6 h-6 text-primary" />
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
          </div>
          <Button variant="outline" size="sm" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </Button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <Card><CardContent className="p-4 flex items-center gap-4"><Users className="w-8 h-8 text-community-nature" /><div><div className="text-2xl font-bold">{volunteers.length}</div><div className="text-sm text-muted-foreground">Volunteers</div></div></CardContent></Card>
          <Card><CardContent className="p-4 flex items-center gap-4"><Calendar className="w-8 h-8 text-community-trust" /><div><div className="text-2xl font-bold">{events.length}</div><div className="text-sm text-muted-foreground">Events</div></div></CardContent></Card>
          <Card><CardContent className="p-4 flex items-center gap-4"><Newspaper className="w-8 h-8 text-primary" /><div><div className="text-2xl font-bold">{news.length}</div><div className="text-sm text-muted-foreground">News Articles</div></div></CardContent></Card>
        </div>

        <Tabs defaultValue="volunteers">
          <TabsList className="mb-4">
            <TabsTrigger value="volunteers"><Users className="w-4 h-4 mr-1" />Volunteers</TabsTrigger>
            <TabsTrigger value="events"><Calendar className="w-4 h-4 mr-1" />Events</TabsTrigger>
            <TabsTrigger value="news"><Newspaper className="w-4 h-4 mr-1" />News</TabsTrigger>
          </TabsList>

          {/* Volunteers Tab */}
          <TabsContent value="volunteers">
            <Card>
              <CardHeader><CardTitle>Volunteer Applications</CardTitle></CardHeader>
              <CardContent>
                {volunteers.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">No volunteer applications yet.</p>
                ) : (
                  <div className="space-y-4">
                    {volunteers.map(v => (
                      <div key={v.id} className="border rounded-lg p-4">
                        <div className="flex items-start justify-between flex-wrap gap-2">
                          <div>
                            <h3 className="font-semibold">{v.full_name}</h3>
                            <p className="text-sm text-muted-foreground">{v.email} {v.phone && `• ${v.phone}`}</p>
                          </div>
                          <Select value={v.status} onValueChange={val => updateVolunteerStatus(v.id, val)}>
                            <SelectTrigger className="w-32"><SelectValue /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pending">Pending</SelectItem>
                              <SelectItem value="approved">Approved</SelectItem>
                              <SelectItem value="rejected">Rejected</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        {v.skills && <p className="text-sm mt-2"><strong>Skills:</strong> {v.skills}</p>}
                        {v.preferred_program && <p className="text-sm"><strong>Program:</strong> {v.preferred_program}</p>}
                        {v.availability && <p className="text-sm"><strong>Availability:</strong> {v.availability}</p>}
                        {v.motivation && <p className="text-sm mt-1 text-muted-foreground">{v.motivation}</p>}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><Plus className="w-5 h-5" />Add Event</CardTitle></CardHeader>
                <CardContent>
                  <form onSubmit={addEvent} className="space-y-4">
                    <div><Label>Title *</Label><Input value={eventForm.title} onChange={e => setEventForm(f => ({ ...f, title: e.target.value }))} required maxLength={200} /></div>
                    <div><Label>Description</Label><Textarea value={eventForm.description} onChange={e => setEventForm(f => ({ ...f, description: e.target.value }))} maxLength={2000} /></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div><Label>Date *</Label><Input type="date" value={eventForm.event_date} onChange={e => setEventForm(f => ({ ...f, event_date: e.target.value }))} required /></div>
                      <div><Label>Time</Label><Input value={eventForm.event_time} onChange={e => setEventForm(f => ({ ...f, event_time: e.target.value }))} placeholder="e.g. 2:00 PM" maxLength={50} /></div>
                    </div>
                    <div><Label>Location</Label><Input value={eventForm.location} onChange={e => setEventForm(f => ({ ...f, location: e.target.value }))} maxLength={200} /></div>
                    <div className="flex items-center gap-2">
                      <Switch checked={eventForm.is_published} onCheckedChange={v => setEventForm(f => ({ ...f, is_published: v }))} />
                      <Label>Published</Label>
                    </div>
                    <Button type="submit" className="w-full btn-hero">Add Event</Button>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>All Events</CardTitle></CardHeader>
                <CardContent>
                  {events.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">No events yet.</p>
                  ) : (
                    <div className="space-y-3">
                      {events.map(ev => (
                        <div key={ev.id} className="border rounded-lg p-3 flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">{ev.title}</h4>
                            <p className="text-xs text-muted-foreground">{new Date(ev.event_date).toLocaleDateString()}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant={ev.is_published ? "default" : "secondary"}>{ev.is_published ? 'Live' : 'Draft'}</Badge>
                            <Button variant="ghost" size="sm" onClick={() => deleteEvent(ev.id)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* News Tab */}
          <TabsContent value="news">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><Plus className="w-5 h-5" />Add News</CardTitle></CardHeader>
                <CardContent>
                  <form onSubmit={addNews} className="space-y-4">
                    <div><Label>Title *</Label><Input value={newsForm.title} onChange={e => setNewsForm(f => ({ ...f, title: e.target.value }))} required maxLength={200} /></div>
                    <div><Label>Excerpt</Label><Input value={newsForm.excerpt} onChange={e => setNewsForm(f => ({ ...f, excerpt: e.target.value }))} maxLength={500} /></div>
                    <div><Label>Content</Label><Textarea rows={6} value={newsForm.content} onChange={e => setNewsForm(f => ({ ...f, content: e.target.value }))} maxLength={5000} /></div>
                    <div><Label>Author</Label><Input value={newsForm.author} onChange={e => setNewsForm(f => ({ ...f, author: e.target.value }))} maxLength={100} /></div>
                    <div className="flex items-center gap-2">
                      <Switch checked={newsForm.is_published} onCheckedChange={v => setNewsForm(f => ({ ...f, is_published: v }))} />
                      <Label>Published</Label>
                    </div>
                    <Button type="submit" className="w-full btn-hero">Add News</Button>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>All News</CardTitle></CardHeader>
                <CardContent>
                  {news.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">No news articles yet.</p>
                  ) : (
                    <div className="space-y-3">
                      {news.map(n => (
                        <div key={n.id} className="border rounded-lg p-3 flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">{n.title}</h4>
                            <p className="text-xs text-muted-foreground">{n.author && `By ${n.author} • `}{new Date(n.created_at).toLocaleDateString()}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant={n.is_published ? "default" : "secondary"}>{n.is_published ? 'Live' : 'Draft'}</Badge>
                            <Button variant="ghost" size="sm" onClick={() => deleteNews(n.id)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
