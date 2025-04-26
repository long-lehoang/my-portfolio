import { motion } from "framer-motion";
import { Link } from "wouter";
import { File, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-28 md:pt-32 pb-20 bg-gradient-to-br from-background/95 via-background/90 to-primary/5 dark:from-background dark:via-background/95 dark:to-primary/10 relative">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, I'm <span className="text-primary">Le Hoang Long</span>
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl font-medium mb-6 text-foreground/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Backend Developer & AWS Cloud Expert
          </motion.h2>
          
          <motion.p 
            className="text-lg mb-8 text-muted-foreground leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            5+ years of experience in backend development, specializing in large-scale distributed systems using Java and Spring Boot. Expertise in microservices architecture and AWS cloud solutions.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link href="/#contact">
              <Button className="bg-primary text-white px-6 py-6" size="lg">
                Contact Me
              </Button>
            </Link>
            
            <a href="/LE-HOANG-LONG-CV.pdf" download>
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white" size="lg">
                <File className="mr-2 h-4 w-4" /> Download CV
              </Button>
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
            alt="Professional software engineer" 
            className="rounded-lg shadow-xl w-full md:max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        onClick={scrollToNextSection}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="h-6 w-6 text-primary" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
