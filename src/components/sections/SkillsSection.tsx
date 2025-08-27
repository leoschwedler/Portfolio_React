import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Palette, 
  Server, 
  Smartphone,
  Globe
} from "lucide-react";

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "TailwindCSS", level: 92 },
        { name: "Vue.js", level: 80 }
      ]
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "APIs REST", level: 92 },
        { name: "GraphQL", level: 75 }
      ]
    },
    {
      title: "Database",
      icon: Database,
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "Redis", level: 70 },
        { name: "Prisma", level: 88 }
      ]
    },
    {
      title: "DevOps",
      icon: Globe,
      skills: [
        { name: "Docker", level: 82 },
        { name: "AWS", level: 78 },
        { name: "CI/CD", level: 80 },
        { name: "Linux", level: 85 }
      ]
    },
    {
      title: "Mobile",
      icon: Smartphone,
      skills: [
        { name: "React Native", level: 85 },
        { name: "Flutter", level: 70 },
        { name: "PWA", level: 90 },
        { name: "Capacitor", level: 75 }
      ]
    },
    {
      title: "Design",
      icon: Palette,
      skills: [
        { name: "UI/UX", level: 80 },
        { name: "Figma", level: 85 },
        { name: "Responsive", level: 95 },
        { name: "Accessibility", level: 88 }
      ]
    }
  ];

  const certifications = [
    "AWS Certified Developer",
    "React Professional",
    "Node.js Certified",
    "MongoDB University"
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Habilidades
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções completas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="p-6 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted"
                      />
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Certificações</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <Badge 
                key={index}
                variant="outline" 
                className="px-4 py-2 text-sm border-primary/50 text-primary hover:bg-primary/10 transition-colors"
              >
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};