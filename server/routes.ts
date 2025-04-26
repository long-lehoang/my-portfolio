import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactEmail } from "./email";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const { name, email, subject, message } = req.body;
      
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: "All fields are required" });
      }
      
      // Send email (this would be implemented in email.ts)
      await sendContactEmail({ name, email, subject, message });
      
      return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      console.error("Error sending contact form:", error);
      return res.status(500).json({ message: "Failed to send message" });
    }
  });

  // Serve CV file
  app.get("/LE-HOANG-LONG-CV.pdf", (req: Request, res: Response) => {
    const cvPath = path.resolve(__dirname, "../attached_assets/LE-HOANG-LONG-CV.pdf");
    
    // Check if file exists
    if (fs.existsSync(cvPath)) {
      return res.sendFile(cvPath);
    } else {
      return res.status(404).json({ message: "CV file not found" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
