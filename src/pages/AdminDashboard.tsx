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
import { Calendar, Users, Newspaper, LogOut, Plus, Trash2, LayoutDashboard, Image, UserCheck, Handshake, DollarSign, Mail, Eye, BookOpen } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);

  // Data states
  const [volunteers, setVolunteers] = useState<any[]>([]);
  const [events, setEvents] = useState<any[]>([]);
  const [news, setNews] = useState<any[]>([]);
  const [gallery, setGallery] = useState<any[]>([]);
  const [team, setTeam] = useState<any[]>([]);
  const [sponsors, setSponsors] = useState<any[]>([]);
  const [donations, setDonations] = useState<any[]>([]);
  const [contacts, setContacts] = useState<any[]>([]);
  const [programs, setPrograms] = useState<any[]>([]);

  // Form states
  const [eventForm, setEventForm] = useState({ title: '', description: '', location: '', event_date: '', event_time: '', is_published: true });
  const [newsForm, setNewsForm] = useState({ title: '', content: '', excerpt: '', author: '', image_url: '', is_published: true });
  const [galleryForm, setGalleryForm] = useState({ title: '', image_url: '', category: 'General', description: '', is_published: true });
  const [teamForm, setTeamForm] = useState({ name: '', role: '', image_url: '', bio: '', email: '', is_published: true });
  const [sponsorForm, setSponsorForm] = useState({ name: '', description: '', logo_url: '', website_url: '', tier: 'partner', is_published: true });
  
  const [donationForm, setDonationForm] = useState({ donor_name: '', email: '', amount: '', currency: 'KES', method: '', message: '' });
  const [programForm, setProgramForm] = useState({ title: '', description: '', image_url: '', slug: '', display_order: 0, is_published: true });

  // Image upload state
  const [uploading, setUploading] = useState(false);

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
    const [v, e, n, g, t, s, d, c, p] = await Promise.all([
      supabase.from('volunteers').select('*').order('created_at', { ascending: false }),
      supabase.from('events').select('*').order('event_date', { ascending: false }),
      supabase.from('news').select('*').order('created_at', { ascending: false }),
      supabase.from('gallery_images').select('*').order('created_at', { ascending: false }),
      supabase.from('team_members').select('*').order('display_order', { ascending: true }),
      supabase.from('sponsors').select('*').order('display_order', { ascending: true }),
      supabase.from('donations').select('*').order('created_at', { ascending: false }),
      supabase.from('contact_submissions').select('*').order('created_at', { ascending: false }),
      supabase.from('programs').select('*').order('display_order', { ascending: true }),
    ]);
    setVolunteers(v.data || []);
    setEvents(e.data || []);
    setNews(n.data || []);
    setGallery(g.data || []);
    setTeam(t.data || []);
    setSponsors(s.data || []);
    setDonations(d.data || []);
    setContacts(c.data || []);
    setPrograms(p.data || []);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  const uploadImage = async (file: File, folder: string): Promise<string | null> => {
    setUploading(true);
    try {
      const { processImage } = await import('@/lib/imageProcessing');
      const processed = await processImage(file, { maxWidth: 1600, maxHeight: 1600, thumbSize: 400, quality: 0.82 });
      const stamp = Date.now();
      const mainPath = `${folder}/${stamp}.${processed.ext}`;
      const thumbPath = `${folder}/${stamp}_thumb.${processed.ext}`;

      const [mainRes, thumbRes] = await Promise.all([
        supabase.storage.from('media').upload(mainPath, processed.main, {
          contentType: processed.mime, cacheControl: '31536000', upsert: false,
        }),
        supabase.storage.from('media').upload(thumbPath, processed.thumb, {
          contentType: processed.mime, cacheControl: '31536000', upsert: false,
        }),
      ]);

      if (mainRes.error) {
        toast({ title: "Upload failed", description: mainRes.error.message, variant: "destructive" });
        return null;
      }
      if (thumbRes.error) {
        // Non-fatal: main image is what the app displays.
        console.warn('Thumbnail upload failed:', thumbRes.error.message);
      }

      const { data } = supabase.storage.from('media').getPublicUrl(mainPath);
      const sizeKB = Math.round(processed.main.size / 1024);
      toast({ title: "Image optimized", description: `Resized to ${processed.width}×${processed.height} (${sizeKB} KB)` });
      return data.publicUrl;
    } catch (err: any) {
      toast({ title: "Upload failed", description: err?.message || 'Could not process image', variant: "destructive" });
      return null;
    } finally {
      setUploading(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, setter: (url: string) => void, folder: string) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = await uploadImage(file, folder);
    if (url) setter(url);
  };

  // CRUD helpers
  const addItem = async (table: string, data: any, resetFn: () => void, requiredFields: string[]) => {
    for (const f of requiredFields) {
      if (!data[f]) { toast({ title: "Error", description: `${f} is required`, variant: "destructive" }); return; }
    }
    const { error } = await supabase.from(table as any).insert([data]);
    if (error) { toast({ title: "Error", description: error.message, variant: "destructive" }); return; }
    toast({ title: "Added successfully!" });
    resetFn();
    fetchAll();
  };

  const deleteItem = async (table: string, id: string) => {
    await supabase.from(table as any).delete().eq('id', id);
    fetchAll();
  };

  const updateVolunteerStatus = async (id: string, status: string) => {
    await supabase.from('volunteers').update({ status }).eq('id', id);
    fetchAll();
  };

  const markContactRead = async (id: string) => {
    await supabase.from('contact_submissions').update({ is_read: true }).eq('id', id);
    fetchAll();
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  const galleryCategories = ['General', 'Mathare Resilience', 'Digital Associates', 'Community Projects', 'Our Research', 'Youth Leadership', 'Civic Education', 'Events', 'Uji Sato'];

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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
          <Card><CardContent className="p-4 flex items-center gap-3"><Users className="w-7 h-7 text-community-nature" /><div><div className="text-2xl font-bold">{volunteers.length}</div><div className="text-xs text-muted-foreground">Volunteers</div></div></CardContent></Card>
          <Card><CardContent className="p-4 flex items-center gap-3"><Calendar className="w-7 h-7 text-community-trust" /><div><div className="text-2xl font-bold">{events.length}</div><div className="text-xs text-muted-foreground">Events</div></div></CardContent></Card>
          <Card><CardContent className="p-4 flex items-center gap-3"><Newspaper className="w-7 h-7 text-primary" /><div><div className="text-2xl font-bold">{news.length}</div><div className="text-xs text-muted-foreground">News</div></div></CardContent></Card>
          <Card><CardContent className="p-4 flex items-center gap-3"><Image className="w-7 h-7 text-community-warm" /><div><div className="text-2xl font-bold">{gallery.length}</div><div className="text-xs text-muted-foreground">Gallery</div></div></CardContent></Card>
          <Card><CardContent className="p-4 flex items-center gap-3"><Mail className="w-7 h-7 text-destructive" /><div><div className="text-2xl font-bold">{contacts.filter(c => !c.is_read).length}</div><div className="text-xs text-muted-foreground">Unread</div></div></CardContent></Card>
        </div>

        <Tabs defaultValue="gallery">
          <TabsList className="mb-4 flex-wrap h-auto gap-1">
            <TabsTrigger value="gallery"><Image className="w-4 h-4 mr-1" />Gallery</TabsTrigger>
            <TabsTrigger value="team"><UserCheck className="w-4 h-4 mr-1" />Team</TabsTrigger>
            <TabsTrigger value="sponsors"><Handshake className="w-4 h-4 mr-1" />Sponsors</TabsTrigger>
            <TabsTrigger value="programs"><BookOpen className="w-4 h-4 mr-1" />Programs</TabsTrigger>
            <TabsTrigger value="events"><Calendar className="w-4 h-4 mr-1" />Events</TabsTrigger>
            <TabsTrigger value="news"><Newspaper className="w-4 h-4 mr-1" />News</TabsTrigger>
            <TabsTrigger value="volunteers"><Users className="w-4 h-4 mr-1" />Volunteers</TabsTrigger>
            <TabsTrigger value="donations"><DollarSign className="w-4 h-4 mr-1" />Donations</TabsTrigger>
            <TabsTrigger value="contacts"><Mail className="w-4 h-4 mr-1" />Contacts</TabsTrigger>
          </TabsList>

          {/* ===== GALLERY TAB ===== */}
          <TabsContent value="gallery">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><Plus className="w-5 h-5" />Add Photo</CardTitle></CardHeader>
                <CardContent>
                  <form onSubmit={e => { e.preventDefault(); addItem('gallery_images', galleryForm, () => setGalleryForm({ title: '', image_url: '', category: 'General', description: '', is_published: true }), ['title', 'image_url']); }} className="space-y-4">
                    <div><Label>Title *</Label><Input value={galleryForm.title} onChange={e => setGalleryForm(f => ({ ...f, title: e.target.value }))} required /></div>
                    <div>
                      <Label>Image *</Label>
                      <Input type="file" accept="image/*" onChange={e => handleImageUpload(e, url => setGalleryForm(f => ({ ...f, image_url: url })), 'gallery')} />
                      {galleryForm.image_url && <img src={galleryForm.image_url} alt="Preview" className="mt-2 h-24 object-cover rounded" />}
                    </div>
                    <div>
                      <Label>Category</Label>
                      <Select value={galleryForm.category} onValueChange={v => setGalleryForm(f => ({ ...f, category: v }))}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>{galleryCategories.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                      </Select>
                    </div>
                    <div><Label>Description</Label><Textarea value={galleryForm.description} onChange={e => setGalleryForm(f => ({ ...f, description: e.target.value }))} /></div>
                    <Button type="submit" className="w-full btn-hero" disabled={uploading}>{uploading ? 'Uploading...' : 'Add Photo'}</Button>
                  </form>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>All Photos ({gallery.length})</CardTitle></CardHeader>
                <CardContent>
                  {gallery.length === 0 ? <p className="text-muted-foreground text-center py-8">No photos yet.</p> : (
                    <div className="grid grid-cols-3 gap-2 max-h-[500px] overflow-y-auto">
                      {gallery.map(img => (
                        <div key={img.id} className="relative group">
                          <img src={img.image_url} alt={img.title} className="w-full aspect-square object-cover rounded" />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Button variant="ghost" size="sm" onClick={() => deleteItem('gallery_images', img.id)}><Trash2 className="w-4 h-4 text-white" /></Button>
                          </div>
                          <p className="text-xs truncate mt-1">{img.title}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* ===== TEAM TAB ===== */}
          <TabsContent value="team">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><Plus className="w-5 h-5" />Add Team Member</CardTitle></CardHeader>
                <CardContent>
                  <form onSubmit={e => { e.preventDefault(); addItem('team_members', teamForm, () => setTeamForm({ name: '', role: '', image_url: '', bio: '', email: '', is_published: true }), ['name', 'role']); }} className="space-y-4">
                    <div><Label>Name *</Label><Input value={teamForm.name} onChange={e => setTeamForm(f => ({ ...f, name: e.target.value }))} required /></div>
                    <div><Label>Role *</Label><Input value={teamForm.role} onChange={e => setTeamForm(f => ({ ...f, role: e.target.value }))} required /></div>
                    <div>
                      <Label>Photo</Label>
                      <Input type="file" accept="image/*" onChange={e => handleImageUpload(e, url => setTeamForm(f => ({ ...f, image_url: url })), 'team')} />
                      {teamForm.image_url && <img src={teamForm.image_url} alt="Preview" className="mt-2 h-20 w-20 object-cover rounded-full" />}
                    </div>
                    <div><Label>Bio</Label><Textarea value={teamForm.bio} onChange={e => setTeamForm(f => ({ ...f, bio: e.target.value }))} /></div>
                    <div><Label>Email</Label><Input type="email" value={teamForm.email} onChange={e => setTeamForm(f => ({ ...f, email: e.target.value }))} /></div>
                    <Button type="submit" className="w-full btn-hero" disabled={uploading}>{uploading ? 'Uploading...' : 'Add Member'}</Button>
                  </form>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Team Members ({team.length})</CardTitle></CardHeader>
                <CardContent>
                  {team.length === 0 ? <p className="text-muted-foreground text-center py-8">No team members yet.</p> : (
                    <div className="space-y-3 max-h-[500px] overflow-y-auto">
                      {team.map(m => (
                        <div key={m.id} className="border rounded-lg p-3 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            {m.image_url ? <img src={m.image_url} alt={m.name} className="w-10 h-10 rounded-full object-cover" /> : <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center"><UserCheck className="w-5 h-5 text-muted-foreground" /></div>}
                            <div><h4 className="font-medium text-sm">{m.name}</h4><p className="text-xs text-muted-foreground">{m.role}</p></div>
                          </div>
                          <Button variant="ghost" size="sm" onClick={() => deleteItem('team_members', m.id)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* ===== SPONSORS TAB ===== */}
          <TabsContent value="sponsors">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><Plus className="w-5 h-5" />Add Sponsor/Partner</CardTitle></CardHeader>
                <CardContent>
                  <form onSubmit={e => { e.preventDefault(); addItem('sponsors', sponsorForm, () => setSponsorForm({ name: '', description: '', logo_url: '', website_url: '', tier: 'partner', is_published: true }), ['name']); }} className="space-y-4">
                    <div><Label>Name *</Label><Input value={sponsorForm.name} onChange={e => setSponsorForm(f => ({ ...f, name: e.target.value }))} required /></div>
                    <div><Label>Description</Label><Textarea value={sponsorForm.description} onChange={e => setSponsorForm(f => ({ ...f, description: e.target.value }))} /></div>
                    <div>
                      <Label>Logo</Label>
                      <Input type="file" accept="image/*" onChange={e => handleImageUpload(e, url => setSponsorForm(f => ({ ...f, logo_url: url })), 'sponsors')} />
                      {sponsorForm.logo_url && <img src={sponsorForm.logo_url} alt="Preview" className="mt-2 h-16 object-contain rounded" />}
                    </div>
                    <div><Label>Website URL</Label><Input value={sponsorForm.website_url} onChange={e => setSponsorForm(f => ({ ...f, website_url: e.target.value }))} placeholder="https://..." /></div>
                    <div>
                      <Label>Tier</Label>
                      <Select value={sponsorForm.tier} onValueChange={v => setSponsorForm(f => ({ ...f, tier: v }))}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="principal">Principal Partner</SelectItem>
                          <SelectItem value="partner">Partner</SelectItem>
                          <SelectItem value="supporter">Supporter</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button type="submit" className="w-full btn-hero" disabled={uploading}>{uploading ? 'Uploading...' : 'Add Sponsor'}</Button>
                  </form>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Sponsors ({sponsors.length})</CardTitle></CardHeader>
                <CardContent>
                  {sponsors.length === 0 ? <p className="text-muted-foreground text-center py-8">No sponsors yet.</p> : (
                    <div className="space-y-3 max-h-[500px] overflow-y-auto">
                      {sponsors.map(s => (
                        <div key={s.id} className="border rounded-lg p-3 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            {s.logo_url && <img src={s.logo_url} alt={s.name} className="w-10 h-10 object-contain" />}
                            <div><h4 className="font-medium text-sm">{s.name}</h4><Badge variant="secondary" className="text-xs">{s.tier}</Badge></div>
                          </div>
                          <Button variant="ghost" size="sm" onClick={() => deleteItem('sponsors', s.id)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>



          {/* ===== PROGRAMS TAB ===== */}
          <TabsContent value="programs">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><Plus className="w-5 h-5" />Add Program</CardTitle></CardHeader>
                <CardContent>
                  <form onSubmit={e => { e.preventDefault(); addItem('programs', programForm, () => setProgramForm({ title: '', description: '', image_url: '', slug: '', display_order: 0, is_published: true }), ['title']); }} className="space-y-4">
                    <div><Label>Title *</Label><Input value={programForm.title} onChange={e => setProgramForm(f => ({ ...f, title: e.target.value }))} required /></div>
                    <div><Label>Description</Label><Textarea value={programForm.description} onChange={e => setProgramForm(f => ({ ...f, description: e.target.value }))} /></div>
                    <div><Label>Slug (URL path)</Label><Input value={programForm.slug} onChange={e => setProgramForm(f => ({ ...f, slug: e.target.value }))} placeholder="e.g. youth-leadership" /></div>
                    <div>
                      <Label>Image</Label>
                      <Input type="file" accept="image/*" onChange={e => handleImageUpload(e, url => setProgramForm(f => ({ ...f, image_url: url })), 'programs')} />
                      <div className="mt-1"><Input placeholder="Or paste image URL" value={programForm.image_url} onChange={e => setProgramForm(f => ({ ...f, image_url: e.target.value }))} /></div>
                      {programForm.image_url && <img src={programForm.image_url} alt="Preview" className="mt-2 h-24 object-cover rounded" />}
                    </div>
                    <div><Label>Display Order</Label><Input type="number" value={programForm.display_order} onChange={e => setProgramForm(f => ({ ...f, display_order: parseInt(e.target.value) || 0 }))} /></div>
                    <div className="flex items-center gap-2"><Switch checked={programForm.is_published} onCheckedChange={v => setProgramForm(f => ({ ...f, is_published: v }))} /><Label>Published</Label></div>
                    <Button type="submit" className="w-full btn-hero" disabled={uploading}>{uploading ? 'Uploading...' : 'Add Program'}</Button>
                  </form>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Programs ({programs.length})</CardTitle></CardHeader>
                <CardContent>
                  {programs.length === 0 ? <p className="text-muted-foreground text-center py-8">No programs yet.</p> : (
                    <div className="space-y-3 max-h-[500px] overflow-y-auto">
                      {programs.map(prog => (
                        <div key={prog.id} className="border rounded-lg p-3 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            {prog.image_url && <img src={prog.image_url} alt={prog.title} className="w-12 h-12 object-cover rounded" />}
                            <div>
                              <h4 className="font-medium text-sm">{prog.title}</h4>
                              {prog.slug && <p className="text-xs text-muted-foreground">/programs/{prog.slug}</p>}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant={prog.is_published ? "default" : "secondary"}>{prog.is_published ? 'Live' : 'Draft'}</Badge>
                            <Button variant="ghost" size="sm" onClick={() => deleteItem('programs', prog.id)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* ===== EVENTS TAB ===== */}
          <TabsContent value="events">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><Plus className="w-5 h-5" />Add Event</CardTitle></CardHeader>
                <CardContent>
                  <form onSubmit={e => { e.preventDefault(); addItem('events', eventForm, () => setEventForm({ title: '', description: '', location: '', event_date: '', event_time: '', is_published: true }), ['title', 'event_date']); }} className="space-y-4">
                    <div><Label>Title *</Label><Input value={eventForm.title} onChange={e => setEventForm(f => ({ ...f, title: e.target.value }))} required /></div>
                    <div><Label>Description</Label><Textarea value={eventForm.description} onChange={e => setEventForm(f => ({ ...f, description: e.target.value }))} /></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div><Label>Date *</Label><Input type="date" value={eventForm.event_date} onChange={e => setEventForm(f => ({ ...f, event_date: e.target.value }))} required /></div>
                      <div><Label>Time</Label><Input value={eventForm.event_time} onChange={e => setEventForm(f => ({ ...f, event_time: e.target.value }))} placeholder="e.g. 2:00 PM" /></div>
                    </div>
                    <div><Label>Location</Label><Input value={eventForm.location} onChange={e => setEventForm(f => ({ ...f, location: e.target.value }))} /></div>
                    <div className="flex items-center gap-2"><Switch checked={eventForm.is_published} onCheckedChange={v => setEventForm(f => ({ ...f, is_published: v }))} /><Label>Published</Label></div>
                    <Button type="submit" className="w-full btn-hero">Add Event</Button>
                  </form>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Events ({events.length})</CardTitle></CardHeader>
                <CardContent>
                  {events.length === 0 ? <p className="text-muted-foreground text-center py-8">No events yet.</p> : (
                    <div className="space-y-3 max-h-[500px] overflow-y-auto">
                      {events.map(ev => (
                        <div key={ev.id} className="border rounded-lg p-3 flex items-center justify-between">
                          <div><h4 className="font-medium text-sm">{ev.title}</h4><p className="text-xs text-muted-foreground">{new Date(ev.event_date).toLocaleDateString()}</p></div>
                          <div className="flex items-center gap-2">
                            <Badge variant={ev.is_published ? "default" : "secondary"}>{ev.is_published ? 'Live' : 'Draft'}</Badge>
                            <Button variant="ghost" size="sm" onClick={() => deleteItem('events', ev.id)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* ===== NEWS TAB ===== */}
          <TabsContent value="news">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><Plus className="w-5 h-5" />Add News</CardTitle></CardHeader>
                <CardContent>
                  <form onSubmit={e => { e.preventDefault(); addItem('news', newsForm, () => setNewsForm({ title: '', content: '', excerpt: '', author: '', image_url: '', is_published: true }), ['title']); }} className="space-y-4">
                    <div><Label>Title *</Label><Input value={newsForm.title} onChange={e => setNewsForm(f => ({ ...f, title: e.target.value }))} required /></div>
                    <div><Label>Excerpt</Label><Input value={newsForm.excerpt} onChange={e => setNewsForm(f => ({ ...f, excerpt: e.target.value }))} /></div>
                    <div><Label>Content</Label><Textarea rows={6} value={newsForm.content} onChange={e => setNewsForm(f => ({ ...f, content: e.target.value }))} /></div>
                    <div><Label>Author</Label><Input value={newsForm.author} onChange={e => setNewsForm(f => ({ ...f, author: e.target.value }))} /></div>
                    <div>
                      <Label>Image</Label>
                      <Input type="file" accept="image/*" onChange={e => handleImageUpload(e, url => setNewsForm(f => ({ ...f, image_url: url })), 'news')} />
                      {newsForm.image_url && <img src={newsForm.image_url} alt="Preview" className="mt-2 h-24 object-cover rounded" />}
                    </div>
                    <div className="flex items-center gap-2"><Switch checked={newsForm.is_published} onCheckedChange={v => setNewsForm(f => ({ ...f, is_published: v }))} /><Label>Published</Label></div>
                    <Button type="submit" className="w-full btn-hero" disabled={uploading}>{uploading ? 'Uploading...' : 'Add News'}</Button>
                  </form>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>News ({news.length})</CardTitle></CardHeader>
                <CardContent>
                  {news.length === 0 ? <p className="text-muted-foreground text-center py-8">No news yet.</p> : (
                    <div className="space-y-3 max-h-[500px] overflow-y-auto">
                      {news.map(n => (
                        <div key={n.id} className="border rounded-lg p-3 flex items-center justify-between">
                          <div><h4 className="font-medium text-sm">{n.title}</h4><p className="text-xs text-muted-foreground">{n.author && `By ${n.author} • `}{new Date(n.created_at).toLocaleDateString()}</p></div>
                          <div className="flex items-center gap-2">
                            <Badge variant={n.is_published ? "default" : "secondary"}>{n.is_published ? 'Live' : 'Draft'}</Badge>
                            <Button variant="ghost" size="sm" onClick={() => deleteItem('news', n.id)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* ===== VOLUNTEERS TAB ===== */}
          <TabsContent value="volunteers">
            <Card>
              <CardHeader><CardTitle>Volunteer Applications ({volunteers.length})</CardTitle></CardHeader>
              <CardContent>
                {volunteers.length === 0 ? <p className="text-muted-foreground text-center py-8">No applications yet.</p> : (
                  <div className="space-y-4 max-h-[600px] overflow-y-auto">
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

          {/* ===== DONATIONS TAB ===== */}
          <TabsContent value="donations">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><Plus className="w-5 h-5" />Record Donation</CardTitle></CardHeader>
                <CardContent>
                  <form onSubmit={e => { e.preventDefault(); addItem('donations', { ...donationForm, amount: donationForm.amount ? parseFloat(donationForm.amount) : null }, () => setDonationForm({ donor_name: '', email: '', amount: '', currency: 'KES', method: '', message: '' }), []); }} className="space-y-4">
                    <div><Label>Donor Name</Label><Input value={donationForm.donor_name} onChange={e => setDonationForm(f => ({ ...f, donor_name: e.target.value }))} /></div>
                    <div><Label>Email</Label><Input type="email" value={donationForm.email} onChange={e => setDonationForm(f => ({ ...f, email: e.target.value }))} /></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div><Label>Amount</Label><Input type="number" value={donationForm.amount} onChange={e => setDonationForm(f => ({ ...f, amount: e.target.value }))} /></div>
                      <div>
                        <Label>Currency</Label>
                        <Select value={donationForm.currency} onValueChange={v => setDonationForm(f => ({ ...f, currency: v }))}>
                          <SelectTrigger><SelectValue /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="KES">KES</SelectItem>
                            <SelectItem value="USD">USD</SelectItem>
                            <SelectItem value="EUR">EUR</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div><Label>Method</Label><Input value={donationForm.method} onChange={e => setDonationForm(f => ({ ...f, method: e.target.value }))} placeholder="M-Pesa, Bank Transfer, etc." /></div>
                    <div><Label>Notes</Label><Textarea value={donationForm.message} onChange={e => setDonationForm(f => ({ ...f, message: e.target.value }))} /></div>
                    <Button type="submit" className="w-full btn-hero">Record Donation</Button>
                  </form>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Donations ({donations.length})</CardTitle></CardHeader>
                <CardContent>
                  {donations.length === 0 ? <p className="text-muted-foreground text-center py-8">No donations recorded yet.</p> : (
                    <div className="space-y-3 max-h-[500px] overflow-y-auto">
                      {donations.map(d => (
                        <div key={d.id} className="border rounded-lg p-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium text-sm">{d.donor_name || 'Anonymous'}</h4>
                              <p className="text-xs text-muted-foreground">{d.email}</p>
                            </div>
                            <div className="text-right">
                              {d.amount && <p className="font-bold text-sm">{d.currency} {d.amount}</p>}
                              <p className="text-xs text-muted-foreground">{d.method}</p>
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">{new Date(d.created_at).toLocaleDateString()}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* ===== CONTACTS TAB ===== */}
          <TabsContent value="contacts">
            <Card>
              <CardHeader><CardTitle>Contact Submissions ({contacts.length})</CardTitle></CardHeader>
              <CardContent>
                {contacts.length === 0 ? <p className="text-muted-foreground text-center py-8">No contact submissions yet.</p> : (
                  <div className="space-y-4 max-h-[600px] overflow-y-auto">
                    {contacts.map(c => (
                      <div key={c.id} className={`border rounded-lg p-4 ${!c.is_read ? 'border-primary bg-primary/5' : ''}`}>
                        <div className="flex items-start justify-between flex-wrap gap-2">
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold">{c.first_name} {c.last_name}</h3>
                              {!c.is_read && <Badge variant="default" className="text-xs">New</Badge>}
                            </div>
                            <p className="text-sm text-muted-foreground">{c.email} {c.phone && `• ${c.phone}`}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary">{c.subject}</Badge>
                            {!c.is_read && <Button variant="outline" size="sm" onClick={() => markContactRead(c.id)}><Eye className="w-3 h-3 mr-1" />Mark Read</Button>}
                            <Button variant="ghost" size="sm" onClick={() => deleteItem('contact_submissions', c.id)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                          </div>
                        </div>
                        <p className="text-sm mt-2">{c.message}</p>
                        <p className="text-xs text-muted-foreground mt-2">{new Date(c.created_at).toLocaleString()}</p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
