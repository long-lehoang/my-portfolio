import { motion } from "framer-motion";
import Timeline from "@/components/Timeline";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      position: "Technical Lead",
      company: "FPT Software",
      period: "7/2023 - Present",
      project: "Robotic Platform - Web Store",
      responsibilities: [
        "Developed and maintained robotic module store for DART platform as a full-stack engineer.",
        "Handled high-throughput API requests to ensure system reliability and performance.",
        "Collaborated with cross-functional teams, ensuring seamless integration.",
        "Designed and optimized MongoDB queries, reducing response times."
      ],
      techStack: ["Java (Spring Boot)", "ReactJS", "MongoDB", "AWS", "K8s", "ArgoCD", "SonarQube"],
      side: "right" as const
    },
    {
      position: "Senior Software Engineer",
      company: "FPT Software",
      period: "9/2022 - 6/2023",
      project: "Healthcare System",
      responsibilities: [
        "Developed serverless microservices for medical record management, supporting millions of transactions daily.",
        "Improved data processing performance using Quarkus and AWS Lambda.",
        "Mentored junior engineers in backend development and best practices.",
        "Automated Terraform-based infrastructure, improving deployment consistency.",
        "Managed CI/CD pipelines with Jenkins and SonarQube, reducing deployment time by 50%."
      ],
      techStack: ["Java (Quarkus)", "AWS Lambda", "MySQL", "MongoDB", "Terraform", "Jenkins"],
      side: "left" as const
    },
    {
      position: "Software Engineer",
      company: "KMS Technology",
      period: "7/2021 - 8/2022",
      project: "Banking System - Data Migration",
      responsibilities: [
        "Designed and implemented a high-speed data migration tool for a banking system with zero downtime.",
        "Developed Spring Batch-based parallel processing with Kafka, improving migration efficiency.",
        "Worked closely with customer business analysts to design migration workflows."
      ],
      techStack: ["Java (Spring Boot)", "Spring Batch", "Spring Data", "TiDB", "Kafka", "Docker"],
      side: "right" as const
    },
    {
      position: "Fresher Software Engineer",
      company: "Cloud Nine Solutions",
      period: "8/2020 - 6/2021",
      project: "",
      responsibilities: [
        "Gained hands-on experience in backend development by contributing to multiple projects.",
        "Assisted in developing RESTful APIs and optimizing database queries.",
        "Learned Laravel (PHP), MySQL, and JavaScript through real-world project implementations.",
        "Worked closely with senior developers to improve coding best practices."
      ],
      techStack: ["PHP (Laravel)", "MySQL", "JavaScript"],
      side: "left" as const
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">Work Experience</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            My professional journey building high-performance systems and applications
          </p>
        </motion.div>

        <div className="relative">
          <Timeline>
            {experiences.map((exp, index) => (
              <Timeline.Item key={index} side={exp.side}>
                <div className="bg-card p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-center flex-wrap mb-4">
                    <h3 className="text-xl font-bold text-secondary">{exp.position}</h3>
                    <Badge variant="primary" className="text-sm px-3 py-1 rounded-full">
                      {exp.period}
                    </Badge>
                  </div>
                  <h4 className="text-lg font-medium text-primary mb-2">{exp.company}</h4>
                  {exp.project && <p className="text-muted-foreground mb-4">Project: {exp.project}</p>}
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm font-medium text-muted-foreground">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {exp.techStack.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="bg-light text-muted-foreground px-3 py-1 rounded-md text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Timeline.Item>
            ))}
          </Timeline>
        </div>
      </div>
    </section>
  );
};

export default Experience;
