import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

const About = lazy(() => import("./pages/About"));
const Team = lazy(() => import("./pages/Team"));
const Sponsors = lazy(() => import("./pages/Sponsors"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Donate = lazy(() => import("./pages/Donate"));
const Contact = lazy(() => import("./pages/Contact"));
const News = lazy(() => import("./pages/News"));
const NotFound = lazy(() => import("./pages/NotFound"));
const MathareResilience = lazy(() => import("./pages/programs/MathareResilience"));
const DigitalAssociates = lazy(() => import("./pages/programs/DigitalAssociates"));
const CommunityProjects = lazy(() => import("./pages/programs/CommunityProjects"));
const Research = lazy(() => import("./pages/programs/Research"));
const YouthLeadership = lazy(() => import("./pages/programs/YouthLeadership"));
const CivicEducation = lazy(() => import("./pages/programs/CivicEducation"));
const GhettoStories = lazy(() => import("./pages/programs/GhettoStories"));
const GhettoYouths = lazy(() => import("./pages/programs/GhettoYouths"));
const UjiSato = lazy(() => import("./pages/programs/UjiSato"));
const Volunteer = lazy(() => import("./pages/Volunteer"));
const Events = lazy(() => import("./pages/Events"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));

const queryClient = new QueryClient();

const PageFallback = () => (
  <div className="min-h-screen bg-background" aria-hidden="true" />
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about/history" element={<About />} />
            <Route path="/about/team" element={<Team />} />
            <Route path="/about/sponsors" element={<Sponsors />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/events" element={<Events />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/reset-password" element={<ResetPassword />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/programs/mathare-resilience" element={<MathareResilience />} />
            <Route path="/programs/digital-associates" element={<DigitalAssociates />} />
            <Route path="/programs/community-projects" element={<CommunityProjects />} />
            <Route path="/programs/research" element={<Research />} />
            <Route path="/programs/youth-leadership" element={<YouthLeadership />} />
            <Route path="/programs/civic-education" element={<CivicEducation />} />
            <Route path="/programs/ghetto-stories" element={<GhettoStories />} />
            <Route path="/programs/ghetto-youths" element={<GhettoYouths />} />
            <Route path="/programs/uji-sato" element={<UjiSato />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
