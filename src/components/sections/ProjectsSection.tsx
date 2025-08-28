import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Heart } from "lucide-react";
import currencyImage from "@/assets/currency.png";
import leagueImage from "@/assets/league.png";
import composeLoginImage from "@/assets/composelogin.png";
import droidChatImage from "@/assets/droidChat.png";
import loginSqliteImage from "@/assets/loginsqlite.png";
import ninjaApImage from "@/assets/ninjaap.png";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "CurrencyConverter",
      description:
        "Aplicativo Android para conversão de moedas e exibição de cotações em tempo real. Baseado em Clean Architecture, utiliza Navigation Component para navegação fluida, Hilt para injeção de dependência e Retrofit para chamadas à API de câmbio.",
      image: currencyImage,
      technologies: [
        "Android Nativo",
        "Kotlin",
        "Jetpack Compose",
        "Clean Architecture",
        "Hilt",
        "Retrofit",
        "SQLite / DAO",
      ],
      category: "Mobile Finance",
      icon: Heart,
      links: {
        github: "https://github.com/leoschwedler/Project-Reply",
      },
    },
    {
      title: "League of Legends Onboarding",
      description:
        "Aplicativo de onboarding com tema League of Legends, desenvolvido com Jetpack Compose. Possui transições de tela suaves, banco de dados local com Room, chamadas assíncronas usando Coroutines, arquitetura MVI para gerenciamento de estado e Hilt para injeção de dependências.",
      image: leagueImage,
      technologies: [
        "Jetpack Compose",
        "Kotlin",
        "MVI Architecture",
        "Room",
        "Coroutines",
        "Hilt",
      ],
      category: "Mobile Development",
      icon: Heart,
      links: {
        github: "https://github.com/leoschwedler/League-Of-Legends-App-Compose",
      },
    },
    {
      title: "Jetpack Compose Navigation",
      description:
        "Aplicativo de prática para explorar navegação no Jetpack Compose, com foco em navegação aninhada e validação de formulários. Utiliza arquitetura MVI para gerenciamento de estado, Flows e Channels para eventos pontuais e Hilt para injeção de dependências, garantindo código modular e desacoplado.",
      image: composeLoginImage,
      technologies: [
        "Jetpack Compose",
        "Kotlin",
        "MVI Architecture",
        "Flows & Channels",
        "Hilt",
        "Form Validator",
      ],
      category: "Mobile Development ",
      icon: Heart,
      links: {
        github: "https://github.com/leoschwedler/Login-and-Signup",
      },
    },
    {
      title: "Droid Chat",
      description:
        "Aplicativo de chat Android desenvolvido com Jetpack Compose, oferecendo uma experiência moderna e fluida. Implementa login e cadastro via WebSocket usando Ktor, com suporte a consumo de APIs REST. Hilt é usado para injeção de dependências, garantindo modularidade e abstração.",
      image: droidChatImage,
      technologies: [
        "Jetpack Compose",
        "Kotlin",
        "Hilt",
        "Ktor (WebSocket & REST)",
        "DataStore Preferences",
        "ProtoDataStore",
        "Camera & Gallery Integration",
      ],
      category: "Mobile Chat",
      icon: Heart,
      links: {
        github: "https://github.com/leoschwedler/Droid-Chat",
      },
    },
    {
      title: "Sistema de Cadastro de Ninjas",
      description:
        "Aplicação backend desenvolvida com Spring Boot para gerenciar ninjas e suas missões. Utiliza H2 como banco de dados em memória, Flyway para migrações, JPA e Spring Data JPA para persistência de dados, e segue boas práticas de desenvolvimento com controle de versão via Git e GitHub.",
      image: ninjaApImage,
      technologies: [
        "Spring Boot",
        "Java 17",
        "H2 Database",
        "Flyway",
        "JPA / Spring Data JPA",
        "Maven",
        "Docker",
        "SQL",
        "Git & GitHub",
      ],
      category: "Backend Development",
      icon: Heart,
      links: {
        github: "https://github.com/leoschwedler/CadastroDeNinjas",
      },
    },
    {
      title: "SQLite & DAO Login",
      description:
        "Aplicativo Android de Login e Registro desenvolvido com SQLite, utilizando o padrão de projeto DAO para gerenciar operações no banco de dados de forma eficiente. Implementa autenticação de usuários com email e senha, registro com validação de dados e hash de senha, e navegação intuitiva entre telas.",
      image: loginSqliteImage,
      technologies: [
        "Android Nativo",
        "Kotlin",
        "SQLite",
        "DAO Pattern",
        "User Authentication",
        "Input Validation",
      ],
      category: "Mobile Development",
      icon: Heart,
      links: {
        github:
          "https://github.com/leoschwedler/Signup-and-Login-with-SQLite-Using-DAO-Pattern",
      },
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Projetos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Projetos mobile que desenvolvi utilizando Android nativo, Flutter e
            Java Spring Boot
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card
                key={index}
                className="overflow-hidden bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 p-2 rounded-full bg-card/90 backdrop-blur-sm">
                    <IconComponent className="w-4 h-4 text-primary" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className="bg-card/90 backdrop-blur-sm"
                    >
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-border hover:border-primary/50 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                      asChild
                    >
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Ver no GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
