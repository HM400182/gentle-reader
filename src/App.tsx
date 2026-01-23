
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Team from "./pages/Team";
import Sponsors from "./pages/Sponsors";
import Gallery from "./pages/Gallery";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import News from "./pages/News";
import NotFound from "./pages/NotFound";
import MathareResilience from "./pages/programs/MathareResilience";
import DigitalAssociates from "./pages/programs/DigitalAssociates";
import CommunityProjects from "./pages/programs/CommunityProjects";
import Research from "./pages/programs/Research";
import YouthLeadership from "./pages/programs/YouthLeadership";
import CivicEducation from "./pages/programs/CivicEducation";
import GhettoStories from "./pages/programs/GhettoStories";
import GhettoYouths from "./pages/programs/GhettoYouths";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about/history" element={<About />} />
          <Route path="/about/team" element={<Team />} />
          <Route path="/about/sponsors" element={<Sponsors />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/programs/mathare-resilience" element={<MathareResilience />} />
          <Route path="/programs/digital-associates" element={<DigitalAssociates />} />
          <Route path="/programs/community-projects" element={<CommunityProjects />} />
          <Route path="/programs/research" element={<Research />} />
          <Route path="/programs/youth-leadership" element={<YouthLeadership />} />
          <Route path="/programs/civic-education" element={<CivicEducation />} />
          <Route path="/programs/ghetto-stories" element={<GhettoStories />} />
          <Route path="/programs/ghetto-youths" element={<GhettoYouths />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
