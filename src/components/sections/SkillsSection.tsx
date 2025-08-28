import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Database,
  Palette,
  Server,
  Smartphone,
  Globe,
  Zap,
} from "lucide-react";
export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Android Nativo",
      icon: Smartphone,
      skills: [
        { name: "Android Nativo (Java & Kotlin)", level: 95 },
        { name: "Jetpack Compose", level: 90 },
        { name: "MVVM / MVI", level: 88 },
        { name: "Coroutines & Flow", level: 85 },
      ],
    },
    {
      title: "Flutter",
      icon: Code2,
      skills: [
        { name: "Flutter & Dart", level: 90 },
        { name: "State Management (Provider / ChangeNotifier)", level: 88 },
        { name: "Clean Architecture", level: 85 },
        { name: "UI & Animações", level: 90 },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        { name: "Java Spring Boot", level: 85 },
        { name: "APIs REST & GraphQL", level: 90 },
        { name: "Microservices", level: 80 },
        { name: "Banco de dados e ORM", level: 82 },
      ],
    },
    {
      title: "Mobile Libraries",
      icon: Zap,
      skills: [
        { name: "Hilt & Dagger", level: 88 },
        { name: "Retrofit & Ktor", level: 90 },
        { name: "Room & SQLite", level: 85 },
        { name: "SharedPreferences & DataStore", level: 88 },
      ],
    },
    {
      title: "Arquitetura & Boas Práticas",
      icon: Globe,
      skills: [
        { name: "Clean Architecture", level: 90 },
        { name: "SOLID", level: 88 },
        { name: "Design Patterns", level: 85 },
        { name: "Testes unitários e instrumentados", level: 80 },
      ],
    },
    {
      title: "Ferramentas",
      icon: Palette,
      skills: [
        { name: "Android Studio & IntelliJ", level: 95 },
        { name: "VS Code", level: 90 },
        { name: "Git & GitHub", level: 88 },
        { name: "CI/CD & DevOps", level: 80 },
      ],
    },
  ];

  const certifications = [
    "Android Developer",
    "Flutter Developer",
    "Java Spring Boot",
    "Clean Architecture",
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Habilidades
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar aplicações mobile
            escaláveis e backends robustos
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
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2 bg-muted" />
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">
            Certificações
          </h3>
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
