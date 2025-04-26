import React from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface TimelineProps {
  children: React.ReactNode;
}

interface TimelineItemProps {
  children: React.ReactNode;
  side: "left" | "right";
}

const Timeline: React.FC<TimelineProps> & {
  Item: React.FC<TimelineItemProps>;
} = ({ children }) => {
  const isMobile = useIsMobile();

  return (
    <div className="relative timeline-container">
      {/* Timeline Line */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-primary h-full md:block hidden"
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />

      {/* Mobile Timeline Line */}
      <motion.div
        className="absolute left-7 w-0.5 bg-primary h-full md:hidden block"
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />

      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<TimelineItemProps>, {
            ...child.props,
            side: isMobile ? "right" : child.props.side
          });
        }
        return child;
      })}
    </div>
  );
};

const TimelineItem: React.FC<TimelineItemProps> = ({ children, side }) => {
  return (
    <motion.div
      className={`mb-12 relative ${
        side === "left" ? "md:pr-8 md:ml-auto md:mr-1/2" : "md:pl-8 md:ml-1/2"
      } md:w-1/2 w-full pl-16`}
      initial={{ opacity: 0, x: side === "left" ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Timeline Dot */}
      <motion.div
        className={`absolute w-4 h-4 bg-primary rounded-full z-10 ${
          side === "left" ? "md:right-0 md:translate-x-1/2" : "md:left-0 md:-translate-x-1/2"
        } left-5 top-7`}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.5 }}
      />
      {children}
    </motion.div>
  );
};

Timeline.Item = TimelineItem;

export default Timeline;
