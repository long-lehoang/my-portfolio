import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import MobileMenu from "./MobileMenu";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Set active section based on scroll position
      const sections = ["home", "about", "skills", "experience", "certification", "projects", "contact"];
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 shadow-md dark:shadow-card/20" : "bg-background/80 backdrop-blur-sm"}`}>
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <span className="text-foreground">Le</span>
          <span className="text-primary">HoangLong</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="/#home">
            <a className={`text-sm font-medium nav-link ${activeSection === "home" ? "active" : ""}`}>
              Home
            </a>
          </Link>
          <Link href="/#about">
            <a className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "about" ? "text-primary font-semibold" : "text-muted-foreground"}`}>
              About
            </a>
          </Link>
          <Link href="/#skills">
            <a className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "skills" ? "text-primary font-semibold" : "text-muted-foreground"}`}>
              Skills
            </a>
          </Link>
          <Link href="/#experience">
            <a className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "experience" ? "text-primary font-semibold" : "text-muted-foreground"}`}>
              Experience
            </a>
          </Link>
          <Link href="/#certification">
            <a className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "certification" ? "text-primary font-semibold" : "text-muted-foreground"}`}>
              Certifications
            </a>
          </Link>
          <Link href="/#projects">
            <a className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "projects" ? "text-primary font-semibold" : "text-muted-foreground"}`}>
              Projects
            </a>
          </Link>
          <Link href="/#contact">
            <a className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "contact" ? "text-primary font-semibold" : "text-muted-foreground"}`}>
              Contact
            </a>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMobileMenu} 
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        setIsOpen={setIsMobileMenuOpen} 
        activeSection={activeSection}
      />
    </header>
  );
};

export default Header;
