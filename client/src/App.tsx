import { useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Skills from "@/pages/Skills";
import Experience from "@/pages/Experience";
import Certification from "@/pages/Certification";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";

function Router() {
  const [location] = useLocation();
  
  useEffect(() => {
    // Smooth scroll to section when navigating
    if (location.startsWith("/#")) {
      const sectionId = location.substring(2);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/#about" component={About} />
      <Route path="/#skills" component={Skills} />
      <Route path="/#experience" component={Experience} />
      <Route path="/#certification" component={Certification} />
      <Route path="/#projects" component={Projects} />
      <Route path="/#contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Header />
        <Router />
        <Footer />
        <ScrollToTop />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
