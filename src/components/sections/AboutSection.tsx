import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Coffee, Heart, Zap } from "lucide-react";

export const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Código limpo e bem documentado"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Aplicações rápidas e otimizadas"
    },
    {
      icon: Heart,
      title: "UX/UI",
      description: "Experiência do usuário em primeiro lugar"
    },
    {
      icon: Coffee,
      title: "Dedicação",
      description: "Sempre em busca de aprender mais"
    }
  ];

  const technologies = [
    "React", "TypeScript", "Node.js", "Python", "PostgreSQL", 
    "MongoDB", "Docker", "AWS", "Next.js", "TailwindCSS"
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Sobre Mim
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Apaixonado por criar soluções digitais que fazem a diferença
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              Sou desenvolvedor full stack com mais de 3 anos de experiência criando 
              aplicações web modernas e responsivas. Minha paixão está em transformar 
              ideias em realidade através de código limpo e soluções inovadoras.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed mb-8">
              Especializado em React, Node.js e tecnologias modernas, sempre busco 
              as melhores práticas para entregar produtos de alta qualidade que 
              superem as expectativas dos usuários.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {technologies.map((tech) => (
                <Badge 
                  key={tech} 
                  variant="secondary" 
                  className="px-3 py-1 bg-card border border-border hover:border-primary/50 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
                >
                  <IconComponent className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};