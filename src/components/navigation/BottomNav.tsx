import { Home, User, Code, Briefcase, Mail } from "lucide-react";
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
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-t border-border">
      <div className="flex items-center justify-around py-2 px-4 max-w-md mx-auto">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={cn(
                "flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-300",
                "hover:bg-accent/50 active:scale-95",
                isActive
                  ? "text-primary bg-accent/20"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <IconComponent
                size={20}
                className={cn(
                  "transition-all duration-300",
                  isActive && "drop-shadow-[0_0_8px_hsl(var(--primary))]"
                )}
              />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
