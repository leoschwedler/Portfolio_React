import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail, Instagram } from "lucide-react";
import profileImage from "@/assets/leonardo-profile.jpg";

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

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/leonardo-schwedler",
      label: "GitHub",
      color: "hover:bg-white/10 hover:text-white"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/leonardo-schwedler",
      label: "LinkedIn", 
      color: "hover:bg-blue-600/20 hover:text-blue-400"
    },
    {
      icon: Instagram,
      href: "https://instagram.com/leonardo.dev",
      label: "Instagram",
      color: "hover:bg-pink-600/20 hover:text-pink-400"
    }
  ];

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
        {/* Profile Image */}
        <div className="mb-8 flex justify-center animate-scale-in">
          <div className="relative">
            <img
              src={profileImage}
              alt="Leonardo Schwedler"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/30 shadow-glow"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20"></div>
          </div>
        </div>

        {/* Name and Title */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Leonardo Schwedler
          </h1>
          <div className="h-12 flex items-center justify-center">
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              {text}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </div>

        {/* Professional Description */}
        <div className="mb-8 animate-fade-in-delayed">
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Especialista em criar experiências digitais incríveis com <span className="text-primary font-medium">React</span>, <span className="text-primary font-medium">Node.js</span> e tecnologias modernas. 
            Transformo ideias em soluções elegantes e funcionais.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
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
            <Mail className="w-5 h-5 mr-2" />
            Contato
          </Button>
        </div>

        {/* Social Media Links */}
        <div className="mb-16 animate-slide-up-delayed">
          <p className="text-sm text-muted-foreground mb-4 font-medium">Conecte-se comigo</p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`group p-4 rounded-full bg-card/50 backdrop-blur-sm border border-border transition-all duration-300 hover:shadow-glow hover:scale-110 ${social.color}`}
                  aria-label={social.label}
                >
                  <IconComponent className="w-6 h-6 transition-colors duration-300" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={() => scrollToSection('about')}
          className="animate-bounce hover:animate-none transition-all duration-300 animate-fade-in-delayed"
        >
          <ChevronDown className="w-8 h-8 text-primary" />
        </button>
      </div>
    </section>
  );
};