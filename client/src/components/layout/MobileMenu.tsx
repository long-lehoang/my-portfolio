import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  activeSection: string;
}

const MobileMenu = ({ isOpen, setIsOpen, activeSection }: MobileMenuProps) => {
  const menuLinks = [
    { href: "/#home", label: "Home", id: "home" },
    { href: "/#about", label: "About", id: "about" },
    { href: "/#skills", label: "Skills", id: "skills" },
    { href: "/#experience", label: "Experience", id: "experience" },
    { href: "/#certification", label: "Certifications", id: "certification" },
    { href: "/#projects", label: "Projects", id: "projects" },
    { href: "/#contact", label: "Contact", id: "contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg absolute w-full"
        >
          <div className="container mx-auto px-6 py-3 flex flex-col space-y-4">
            {menuLinks.map((link) => (
              <Link href={link.href} key={link.id}>
                <a
                  className={`py-2 text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === link.id
                      ? "text-primary font-semibold"
                      : "text-muted-foreground"
                  }`}
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
