import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Code,
  Coffee,
  Heart,
  Zap,
  Smartphone,
  Globe,
  Rocket,
  Calendar,
} from "lucide-react";

export const AboutSection = () => {
  const highlights = [
    {
      icon: Calendar,
      title: "2020 - Início",
      description:
        "Início na tecnologia com projetos NFT, onde descobri minha paixão por resolver problemas através da programação",
    },
    {
      icon: Smartphone,
      title: "Banco Next",
      description:
        "Desenvolvimento Android nativo com Java e XML, utilizando a arquitetura MVVM e Retrofit",
    },
    {
      icon: Globe,
      title: "Banca Intesa Sanpaolo Brasil SA",
      description:
        "Desenvolvimento Android nativo com Kotlin, aplicando MVI, Ktor, Room, Hilt e Clean Architecture",
    },
    {
      icon: Rocket,
      title: "Divitech",
      description:
        "Atuação em projetos de Android nativo, Flutter e React, aplicando boas práticas e arquitetura sólida",
    },
  ];

  const technologies = [
    "Android Nativo (Java & Kotlin)",
    "Flutter & Dart",
    "Jetpack Compose",
    "Java Spring Boot",
    "Arquiteturas: MVVM, MVI, Clean Architecture",
    "Hilt & Dagger",
    "Retrofit & Ktor",
    "Room & SQLite",
    "Boas práticas: SOLID, separação de responsabilidades",
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

  return (
    <section id="about" className="py-20 px-4 sm:px-6">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Sobre Mim
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-16">
          {/* Left Column - Text Content */}
          <motion.div
            className="space-y-6 order-2 lg:order-1"
            variants={itemVariants}
          >
            <div className="space-y-6">
              <motion.p
                className="text-base md:text-lg text-foreground/90 leading-relaxed"
                variants={itemVariants}
              >
                Minha jornada na tecnologia começou há cerca de cinco anos, em
                2020, quando participei de projetos de jogos NFT. Foi nessa
                época que percebi que o que realmente me motivava era resolver
                problemas, e a programação se mostrou o caminho perfeito para
                isso.
              </motion.p>

              <motion.p
                className="text-base md:text-lg text-foreground/90 leading-relaxed"
                variants={itemVariants}
              >
                Logo depois, entrei em um programa trainee na Foursy, sendo
                alocado no Banco Next, onde comecei a trabalhar com Android
                nativo, aprendendo sobre MVVM, Retrofit e injeção de
                dependência.
              </motion.p>

              <motion.p
                className="text-base md:text-lg text-foreground/90 leading-relaxed"
                variants={itemVariants}
              >
                Mais tarde, mudei-me para a Itália, atuando em projetos no Banco
                Intesa e na Divitech, onde aprofundei meus conhecimentos em
                desenvolvimento mobile de grande escala e arquiteturas modernas.
              </motion.p>

              <motion.p
                className="text-base md:text-lg text-foreground/90 leading-relaxed"
                variants={itemVariants}
              >
                Hoje, foco em Android nativo e Flutter, aplicando boas práticas,
                performance e arquitetura sólida em todos os projetos que
                participo.
              </motion.p>
            </div>

            {/* Technologies */}
            <motion.div
              className="pt-6 border-t border-border/30"
              variants={itemVariants}
            >
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                Tecnologias Principais
              </h3>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={containerVariants}
              >
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <Badge
                      variant="secondary"
                      className="px-3 py-2 bg-card border border-border hover:border-primary/50 transition-colors text-sm cursor-pointer"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Timeline Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 order-1 lg:order-2 mb-8 lg:mb-0"
            variants={containerVariants}
          >
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
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
                  <Card className="p-4 sm:p-6 bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group h-full cursor-pointer">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-3">
                        <motion.div
                          className="p-2 rounded-lg bg-primary/20"
                          whileHover={{
                            scale: 1.1,
                            rotate: 5,
                            transition: { duration: 0.2 },
                          }}
                        >
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:scale-110 transition-transform" />
                        </motion.div>
                        <h3 className="font-semibold text-foreground text-sm sm:text-base">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-grow">
                        {item.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Quote */}
        <motion.div className="text-center" variants={itemVariants}>
          <motion.div
            className="max-w-4xl mx-auto p-4 sm:p-6 bg-gradient-card border border-border rounded-lg"
            whileHover={{
              scale: 1.01,
              transition: { duration: 0.3 },
            }}
          >
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed italic">
              "Acredito que princípios como SOLID e separação de
              responsabilidades são fundamentais para projetos escaláveis, mas
              mantenho flexibilidade dependendo do contexto do projeto. Meu
              objetivo é me tornar um desenvolvedor com impacto global em todos
              os projetos que participo. Gosto de fazer a diferença e quero
              sempre fazer a diferença!"
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
