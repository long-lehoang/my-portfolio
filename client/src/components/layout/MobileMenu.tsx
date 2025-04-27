import React from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  activeSection: string;
}

// Define link props with proper typing
type NavLinkProps = React.ComponentPropsWithoutRef<typeof Link> & {
  className?: string;
};

const MobileMenu = ({ isOpen, setIsOpen, activeSection }: MobileMenuProps) => {
  const [, setLocation] = useLocation();
  const menuLinks = [
    { href: "/", label: "Home", id: "home" },
    { href: "/#about", label: "About", id: "about" },
    { href: "/#skills", label: "Skills", id: "skills" },
    { href: "/#experience", label: "Experience", id: "experience" },
    { href: "/#certification", label: "Certifications", id: "certification" },
    { href: "/#projects", label: "Projects", id: "projects" },
    { href: "/#contact", label: "Contact", id: "contact" },
  ];

  const handleLinkClick = (sectionId: string) => {
    // Close the menu first
    setIsOpen(false);
    
    // Short delay to allow menu close animation to complete
    setTimeout(() => {
      // For home, just scroll to top
      if (sectionId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      
      // For other sections, find and scroll to the element
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  const handleBackdropClick = () => {
    // Close the menu when clicking on the backdrop
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 flex items-center justify-center bg-gray-900 bg-opacity-50"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <div className="space-y-4">
              {menuLinks.map((link) => (
                <div
                  key={link.id}
                  className={`block rounded px-4 py-2 text-lg transition-colors cursor-pointer ${
                    activeSection === link.id
                      ? "bg-primary/10 text-primary font-medium"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => handleLinkClick(link.id)}
                >
                  {link.label}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
