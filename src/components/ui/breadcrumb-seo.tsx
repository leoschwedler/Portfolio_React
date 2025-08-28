import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
  isActive?: boolean;
}

interface BreadcrumbSEOProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const BreadcrumbSEO = ({
  items,
  className = "",
}: BreadcrumbSEOProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center space-x-2 text-sm ${className}`}
    >
      <motion.button
        onClick={() => scrollToSection("hero")}
        className="flex items-center text-muted-foreground hover:text-primary transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Home className="w-4 h-4 mr-1" />
        <span>Início</span>
      </motion.button>

      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
          {item.onClick ? (
            <motion.button
              onClick={item.onClick}
              className={`transition-colors ${
                item.isActive
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-primary"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.button>
          ) : item.href ? (
            <motion.a
              href={item.href}
              className={`transition-colors ${
                item.isActive
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-primary"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.a>
          ) : (
            <span
              className={`${
                item.isActive
                  ? "text-primary font-medium"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
};

