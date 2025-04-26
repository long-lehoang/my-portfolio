import { Link } from "wouter";
import { File } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">
              <span className="text-white">Le</span>
              <span className="text-primary">HoangLong</span>
            </h3>
            <p className="text-white/70 text-sm">Backend Developer & AWS Cloud Expert</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-white/70 text-sm">&copy; {new Date().getFullYear()} Le Hoang Long. All rights reserved.</p>
            <p className="text-white/50 text-xs mt-1">Made with passion for building high-performance systems</p>
          </div>
        </div>
      </div>
      
      {/* Floating Download CV Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a 
          href="/LE-HOANG-LONG-CV.pdf"
          download 
          className="flex items-center bg-primary text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          <File className="h-4 w-4 mr-2" />
          <span className="hidden md:inline">Download CV</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
