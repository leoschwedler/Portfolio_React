import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Smartphone, Globe, Database } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com painel administrativo, sistema de pagamentos e gestão de estoque.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      category: "Fullstack",
      icon: Globe,
      links: {
        demo: "https://demo.example.com",
        github: "https://github.com/leonardo/ecommerce"
      }
    },
    {
      title: "Mobile Banking App",
      description: "Aplicativo mobile para gestão financeira pessoal com autenticação biométrica e sincronização em tempo real.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      category: "Mobile",
      icon: Smartphone,
      links: {
        demo: "https://demo.example.com",
        github: "https://github.com/leonardo/banking-app"
      }
    },
    {
      title: "Analytics Dashboard",
      description: "Dashboard interativo para análise de dados com gráficos em tempo real e relatórios personalizados.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI"],
      category: "Data Viz",
      icon: Database,
      links: {
        demo: "https://demo.example.com",
        github: "https://github.com/leonardo/analytics"
      }
    },
    {
      title: "AI Chat Platform",
      description: "Plataforma de chat inteligente com IA integrada para atendimento automatizado e suporte multilíngue.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      technologies: ["Next.js", "OpenAI", "Prisma", "WebSocket"],
      category: "AI/ML",
      icon: Globe,
      links: {
        demo: "https://demo.example.com",
        github: "https://github.com/leonardo/ai-chat"
      }
    },
    {
      title: "Fitness Tracker",
      description: "App de acompanhamento fitness com planos de treino personalizados e integração com wearables.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      technologies: ["Flutter", "Dart", "Supabase", "Health Kit"],
      category: "Mobile",
      icon: Smartphone,
      links: {
        demo: "https://demo.example.com",
        github: "https://github.com/leonardo/fitness-tracker"
      }
    },
    {
      title: "Smart Home Hub",
      description: "Central de controle para dispositivos IoT domésticos com automação e monitoramento inteligente.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop",
      technologies: ["React", "MQTT", "Raspberry Pi", "Docker"],
      category: "IoT",
      icon: Database,
      links: {
        demo: "https://demo.example.com",
        github: "https://github.com/leonardo/smart-home"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Projetos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi utilizando tecnologias modernas
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
                    <Badge variant="secondary" className="bg-card/90 backdrop-blur-sm">
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
                      className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300"
                      asChild
                    >
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-primary/50 text-primary hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
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