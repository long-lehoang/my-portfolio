import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { IdCard, GraduationCap, Code, Cloud, Building, Server, Database } from "lucide-react";

const Certification = () => {
  const certifications = [
    {
      title: "AWS Certified Solution Architect - Associate",
      description: "AWS cloud architecture and implementation best practices",
      icon: <Cloud className="text-3xl text-primary" />
    },
    {
      title: "HashiCorp Certified: Terraform Associate",
      description: "Infrastructure as code and cloud provisioning expertise",
      icon: <Server className="text-3xl text-primary" />
    },
    {
      title: "Udacity Nanodegree: Java Web Developer",
      description: "Advanced Java web development and Spring frameworks",
      icon: <Code className="text-3xl text-primary" />
    },
    {
      title: "Udacity Nanodegree: AWS Cloud Architect",
      description: "Cloud-native design patterns and AWS architecture",
      icon: <Cloud className="text-3xl text-primary" />
    }
  ];

  return (
    <section id="certification" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">Certification & Education</h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-secondary flex items-center">
              <IdCard className="text-primary mr-3" />
              Professional Certifications
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="p-6 flex items-start">
                  <div className="mr-5 mt-1">
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-secondary mb-1">{cert.title}</h4>
                    <p className="text-muted-foreground text-sm">{cert.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
          
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-secondary flex items-center">
              <GraduationCap className="text-primary mr-3" />
              Education
            </h3>
            
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <Building className="w-16 h-16 text-primary p-2 bg-primary/10 rounded-lg mr-4" />
                <div>
                  <h4 className="text-lg font-semibold text-secondary">Ho Chi Minh University of Technology</h4>
                  <p className="text-muted-foreground">(Bach Khoa HCM University)</p>
                </div>
              </div>
              
              <div className="ml-4 border-l-2 border-primary pl-6">
                <div className="relative mb-6">
                  <div className="absolute -left-8 w-4 h-4 rounded-full bg-primary"></div>
                  <div>
                    <h5 className="font-semibold text-secondary">Bachelor of Engineering in Computer Science</h5>
                    <p className="text-muted-foreground text-sm mb-1">August 2017 - April 2022</p>
                    <p className="text-muted-foreground text-sm">GPA: 7.59</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h5 className="font-semibold text-secondary mb-2">Coursework Highlights</h5>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Data Structures & Algorithms</li>
                    <li>Database Systems</li>
                    <li>Software Engineering</li>
                    <li>Distributed Systems</li>
                    <li>Web Application Development</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-semibold text-secondary mb-2">Projects & Activities</h5>
                  <p className="text-muted-foreground mb-4">
                    Participated in coding competitions and hackathons, developing technical skills and team collaboration.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
