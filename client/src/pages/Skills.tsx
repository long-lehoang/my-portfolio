import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Code, 
  Laptop, 
  Bolt, 
  Cpu, 
  Server, 
  Network, 
  RefreshCw, 
  Timer, 
  Puzzle,
  Cloud,
  Ship,
  GitBranch,
  Bot,
  Terminal
} from "lucide-react";
import ProgressBar from "@/components/ProgressBar";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(skillsRef, { once: true, amount: 0.2 });

  const programmingSkills = [
    { name: "Java (Spring Boot, Quarkus)", percentage: 90 },
    { name: "AWS & Cloud Services", percentage: 85 },
    { name: "Microservices Architecture", percentage: 90 },
    { name: "DevOps (K8s, Docker, Terraform)", percentage: 80 },
    { name: "Databases (MySQL, TiDB, MongoDB)", percentage: 85 },
  ];

  const systemDesignSkills = [
    { name: "Microservices", icon: <Cpu className="text-primary" /> },
    { name: "Serverless", icon: <Server className="text-primary" /> },
    { name: "Distributed Systems", icon: <Network className="text-primary" /> },
    { name: "High Availability", icon: <RefreshCw className="text-primary" /> },
    { name: "Performance Optimization", icon: <Timer className="text-primary" /> },
    { name: "Modular Design", icon: <Puzzle className="text-primary" /> },
  ];

  const toolsSkills = [
    { name: "AWS", icon: <Cloud className="text-primary" /> },
    { name: "Docker", icon: <Ship className="text-primary" /> },
    { name: "Kubernetes", icon: <Code className="text-primary" /> },
    { name: "Git", icon: <GitBranch className="text-primary" /> },
    { name: "Jenkins", icon: <Bot className="text-primary" /> },
    { name: "Terraform", icon: <Terminal className="text-primary" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6" ref={skillsRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">My Skills</h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Programming & Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-6 text-secondary flex items-center">
                <Code className="text-primary mr-3" />
                Programming & Technologies
              </h3>

              <div className="space-y-5">
                {programmingSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <ProgressBar percentage={isInView ? skill.percentage : 0} />
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Other Skills */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <Card className="p-8">
                <h3 className="text-xl font-bold mb-6 text-secondary flex items-center">
                  <Laptop className="text-primary mr-3" />
                  System Design & Architecture
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {systemDesignSkills.map((skill, index) => (
                    <div key={index} className="flex items-center bg-card/80 p-4 rounded-md border shadow-sm">
                      <div className="mr-3">{skill.icon}</div>
                      <span className="text-foreground font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <h3 className="text-xl font-bold mb-6 text-secondary flex items-center">
                  <Cloud className="text-primary mr-3" />
                  Cloud & DevOps Tools
                </h3>

                <div className="grid grid-cols-3 gap-4">
                  {toolsSkills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center p-4 border rounded-md shadow-sm bg-card/80">
                      <div className="text-2xl mb-2">{skill.icon}</div>
                      <span className="text-sm text-center font-medium text-foreground">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
