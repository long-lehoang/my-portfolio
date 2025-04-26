import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Healthcare Microservices Platform",
      description: "Serverless architecture for medical record management supporting millions of daily transactions with high availability and security.",
      image: "https://images.unsplash.com/photo-1574607383476-f517f260d30b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      technologies: ["Java (Quarkus)", "AWS Lambda", "MongoDB", "Terraform"],
      company: "FPT Software",
      period: "2022-2023"
    },
    {
      title: "Banking Data Migration System",
      description: "High-speed data migration tool for banking systems with zero downtime, using parallel processing and real-time data synchronization.",
      image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      technologies: ["Spring Boot", "Spring Batch", "Kafka", "TiDB"],
      company: "KMS Technology",
      period: "2021-2022"
    },
    {
      title: "Robotic Platform Web Store",
      description: "Full-stack development of a web store for robotic modules with high-throughput API handling and MongoDB optimization.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      technologies: ["Spring Boot", "ReactJS", "MongoDB", "Kubernetes"],
      company: "FPT Software",
      period: "2023-Present"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">Project Showcase</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Highlighting key projects that demonstrate my technical abilities and problem-solving skills
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="bg-light text-muted-foreground px-2 py-1 rounded-md text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="px-6 py-4 border-t flex justify-between items-center">
                  <span className="text-sm text-primary font-medium">{project.company}</span>
                  <span className="text-xs text-muted-foreground">{project.period}</span>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
