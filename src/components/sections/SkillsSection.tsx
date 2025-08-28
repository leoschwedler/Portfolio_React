import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1,
        ease: "easeOut" as const,
        delay: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/20">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Habilidades
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar{" "}
            <button
              onClick={() => {
                const element = document.getElementById("projects");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-primary font-medium hover:text-primary/80 transition-colors underline decoration-primary/30 hover:decoration-primary/60"
            >
              aplicações mobile escaláveis
            </button>{" "}
            e backends robustos. Saiba mais{" "}
            <button
              onClick={() => {
                const element = document.getElementById("about");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-primary font-medium hover:text-primary/80 transition-colors underline decoration-primary/30 hover:decoration-primary/60"
            >
              sobre minha experiência
            </button>
            .
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
        >
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="p-6 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group cursor-pointer">
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div
                      className="p-2 rounded-lg bg-primary/20"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <IconComponent className="w-6 h-6 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div key={skillIndex} variants={itemVariants}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <motion.div
                          variants={progressVariants}
                          className="h-2 bg-muted rounded-full overflow-hidden"
                        >
                          <motion.div
                            className="h-full bg-primary rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              ease: "easeOut" as const,
                              delay: 0.5 + skillIndex * 0.1,
                            }}
                          />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div className="text-center" variants={itemVariants}>
          <h3 className="text-2xl font-semibold mb-6 text-foreground">
            Certificações
          </h3>
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            variants={containerVariants}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.2 },
                }}
              >
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm border-primary/50 text-primary hover:bg-primary/10 transition-colors cursor-pointer"
                >
                  {cert}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
