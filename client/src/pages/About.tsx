import { motion } from "framer-motion";
import { Server, Cloud, Database, Cog } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">About Me</h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1573495627361-d9b87960b12d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Professional software engineer working" 
              className="rounded-lg shadow-xl w-full md:max-w-md mx-auto"
            />
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 md:pl-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-secondary">Backend Developer & Cloud Architect</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a passionate backend developer with 5 years of experience specializing in building large-scale, high-performance distributed systems. My expertise lies in Java development with Spring Boot and cloud-native applications on AWS.
            </p>
            
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <Server className="text-primary mr-3 w-6 h-6" />
                <span>Microservices architecture and system design</span>
              </div>
              <div className="flex items-center mb-3">
                <Cloud className="text-primary mr-3 w-6 h-6" />
                <span>AWS cloud services and serverless computing</span>
              </div>
              <div className="flex items-center mb-3">
                <Database className="text-primary mr-3 w-6 h-6" />
                <span>Database optimization and data migration</span>
              </div>
              <div className="flex items-center mb-3">
                <Cog className="text-primary mr-3 w-6 h-6" />
                <span>DevOps and CI/CD pipeline automation</span>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Currently working as a Technical Lead at FPT Software, I lead the development of robotic platform web store solutions, ensuring system reliability and performance for high-throughput applications.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
