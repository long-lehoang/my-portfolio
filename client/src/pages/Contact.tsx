import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, Linkedin, File, Github, Twitter, Linkedin as LinkedinIcon } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I will get back to you soon.",
        variant: "default",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Add animated background gradients */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '10s' }}></div>
        <div className="absolute bottom-20 left-40 w-80 h-80 bg-primary rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '4s', animationDuration: '15s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto mb-8"></div>
          <p className="text-foreground/80 max-w-3xl mx-auto text-lg">
            Feel free to reach out for collaboration opportunities or to discuss how my skills can contribute to your project needs.
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="md:w-1/2 mb-12 md:mb-0"
          >
            <div className="bg-background/50 backdrop-blur-xl rounded-xl p-8 shadow-lg border border-border/40">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <Mail className="mr-3 text-primary" />
                Send Me A Message
              </h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-muted-foreground">Your Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="w-full px-4 py-2 bg-background/70 border border-border/50 rounded-md focus:ring-2 focus:ring-primary focus:border-primary text-foreground"
                              placeholder="Your name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-muted-foreground">Your Email</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              className="w-full px-4 py-2 bg-background/70 border border-border/50 rounded-md focus:ring-2 focus:ring-primary focus:border-primary text-foreground"
                              placeholder="Your email address"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-muted-foreground">Subject</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="w-full px-4 py-2 bg-background/70 border border-border/50 rounded-md focus:ring-2 focus:ring-primary focus:border-primary text-foreground"
                            placeholder="Message subject"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-muted-foreground">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={5}
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-blue-500 text-white py-3 px-6 rounded-md font-medium hover:opacity-90 transition-all shadow-md hover:shadow-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </div> 
                      : "Send Message"
                    }
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="bg-background/50 backdrop-blur-xl rounded-xl p-8 shadow-lg border border-border/40">
              <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center">
                <Phone className="mr-3 text-primary" />
                Contact Information
              </h3>
              
              <div className="space-y-7">
                <motion.div 
                  className="flex items-start" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="mr-4 bg-primary/10 p-3 rounded-full border border-primary/20">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-foreground">Email</h4>
                    <a href="mailto:long.bk.khmt@gmail.com" className="text-foreground/80 hover:text-primary transition-colors">
                      long.bk.khmt@gmail.com
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="mr-4 bg-primary/10 p-3 rounded-full border border-primary/20">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-foreground">Phone</h4>
                    <a href="tel:+84938186100" className="text-foreground/80 hover:text-primary transition-colors">
                      +84 93 8186 100
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="mr-4 bg-primary/10 p-3 rounded-full border border-primary/20">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-foreground">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/long-lehoang/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-foreground/80 hover:text-primary transition-colors"
                    >
                      linkedin.com/in/long-lehoang/
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="mr-4 bg-primary/10 p-3 rounded-full border border-primary/20">
                    <File className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-foreground">Resume</h4>
                    <a 
                      href="/LE-HOANG-LONG-CV.pdf" 
                      download 
                      className="text-foreground/80 hover:text-primary transition-colors flex items-center"
                    >
                      Download CV <span className="ml-2">⬇️</span>
                    </a>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-6 text-foreground">Follow Me</h4>
                <div className="flex space-x-6">
                  <a href="#" className="bg-primary/10 p-4 rounded-full hover:bg-primary/20 transition-all hover:scale-110">
                    <Github className="h-6 w-6 text-primary" />
                  </a>
                  <a href="#" className="bg-primary/10 p-4 rounded-full hover:bg-primary/20 transition-all hover:scale-110">
                    <Twitter className="h-6 w-6 text-primary" />
                  </a>
                  <a href="https://www.linkedin.com/in/long-lehoang/" target="_blank" rel="noopener noreferrer" className="bg-primary/10 p-4 rounded-full hover:bg-primary/20 transition-all hover:scale-110">
                    <LinkedinIcon className="h-6 w-6 text-primary" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
