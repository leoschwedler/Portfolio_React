import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
}

export const FadeIn = ({ children, className, ...props }: AnimatedProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const SlideInLeft = ({
  children,
  className,
  ...props
}: AnimatedProps) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const SlideInRight = ({
  children,
  className,
  ...props
}: AnimatedProps) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const ScaleIn = ({ children, className, ...props }: AnimatedProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const StaggerContainer = ({
  children,
  className,
  ...props
}: AnimatedProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.1,
        },
      },
    }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({
  children,
  className,
  ...props
}: AnimatedProps) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
        },
      },
    }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const HoverCard = ({ children, className, ...props }: AnimatedProps) => (
  <motion.div
    whileHover={{
      scale: 1.02,
      y: -5,
      transition: { duration: 0.2 },
    }}
    whileTap={{ scale: 0.98 }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const HoverButton = ({
  children,
  className,
  ...props
}: AnimatedProps) => (
  <motion.button
    whileHover={{
      scale: 1.05,
      transition: { duration: 0.2 },
    }}
    whileTap={{ scale: 0.95 }}
    className={className}
    {...props}
  >
    {children}
  </motion.button>
);
