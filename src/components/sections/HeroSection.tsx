import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

export const HeroSection = () => {
  const [text, setText] = useState("");
  const fullText = "Desenvolvedor Full Stack";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 100);
    }
  }, [index, text]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative bg-gradient-hero overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="text-center z-10 px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Leonardo Schwedler
          </h1>
          <div className="h-12 flex items-center justify-center">
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              {text}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Criando experiências digitais incríveis com tecnologias modernas e design elegante.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-3 text-lg font-medium"
          >
            Ver Projetos
          </Button>
          <Button 
            variant="outline" 
            onClick={() => scrollToSection('contact')}
            className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-3 text-lg font-medium"
          >
            Contato
          </Button>
        </div>

        <div className="flex justify-center gap-6 mb-16">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300 hover:shadow-glow group"
          >
            <Github className="w-6 h-6 group-hover:text-primary transition-colors" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300 hover:shadow-glow group"
          >
            <Linkedin className="w-6 h-6 group-hover:text-primary transition-colors" />
          </a>
          <a 
            href="mailto:leonardo@example.com"
            className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300 hover:shadow-glow group"
          >
            <Mail className="w-6 h-6 group-hover:text-primary transition-colors" />
          </a>
        </div>

        <button 
          onClick={() => scrollToSection('about')}
          className="animate-bounce hover:animate-none transition-all duration-300"
        >
          <ChevronDown className="w-8 h-8 text-primary" />
        </button>
      </div>
    </section>
  );
};