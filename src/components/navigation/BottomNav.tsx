import { Home, User, Code, Briefcase, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BottomNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navItems = [
  { id: "hero", label: "Início", icon: Home },
  { id: "about", label: "Sobre", icon: User },
  { id: "skills", label: "Habilidades", icon: Code },
  { id: "projects", label: "Projetos", icon: Briefcase },
  { id: "contact", label: "Contato", icon: Mail },
];

export const BottomNav = ({
  activeSection,
  onSectionChange,
}: BottomNavProps) => {
  return (
    <motion.nav
      className="fixed bottom-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-t border-border"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-center justify-around py-2 px-4 max-w-md mx-auto">
        {navItems.map((item, index) => {
          const IconComponent = item.icon;
          const isActive = activeSection === item.id;

          return (
            <motion.button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={cn(
                "flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-300",
                "hover:bg-accent/50",
                isActive
                  ? "text-primary bg-accent/20"
                  : "text-muted-foreground hover:text-foreground"
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.1,
                y: -2,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover={{
                  rotate: isActive ? 0 : 5,
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
              >
                <IconComponent
                  size={20}
                  className={cn(
                    "transition-all duration-300",
                    isActive && "drop-shadow-[0_0_8px_hsl(var(--primary))]"
                  )}
                />
              </motion.div>
              <motion.span
                className="text-xs font-medium"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                {item.label}
              </motion.span>
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
};
