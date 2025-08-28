import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import profileImage from "@/assets/leonardo-profile.jpeg";

export const HeroSection = () => {
  const [text, setText] = useState("");
  const fullText = "Desenvolvedor Mobile Android & Flutter";
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
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/leoschwedler",
      label: "GitHub",
      color: "hover:bg-white/10 hover:text-white",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/leonardo-schwuedller/",
      label: "LinkedIn",
      color: "hover:bg-blue-600/20 hover:text-blue-400",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const profileVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-gradient-hero overflow-hidden"
    >
      {/* Background decorative elements */}
      <motion.div
        className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-48 h-48 bg-accent/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="text-center z-10 px-6 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div
          className="mb-8 flex justify-center"
          variants={profileVariants}
        >
          <div className="relative">
            <motion.img
              src={profileImage}
              alt="Leonardo Schwedler"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/20 shadow-glow"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            />
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-10"></div>
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.div className="mb-8" variants={textVariants}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Leonardo Schwedler
          </h1>
          <div className="h-12 flex items-center justify-center">
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              {text}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                |
              </motion.span>
            </p>
          </div>
        </motion.div>

        {/* Professional Description */}
        <motion.div className="mb-8" variants={textVariants}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Olá! Sou Leo, desenvolvedor apaixonado por solucionar problemas
            através da tecnologia. Atualmente, foco no desenvolvimento mobile
            com{" "}
            <button
              onClick={() => scrollToSection("skills")}
              className="text-primary font-medium hover:text-primary/80 transition-colors underline decoration-primary/30 hover:decoration-primary/60"
            >
              Android nativo
            </button>{" "}
            e{" "}
            <button
              onClick={() => scrollToSection("skills")}
              className="text-primary font-medium hover:text-primary/80 transition-colors underline decoration-primary/30 hover:decoration-primary/60"
            >
              Flutter
            </button>
            , mas também mantenho estudos em backend com{" "}
            <button
              onClick={() => scrollToSection("projects")}
              className="text-primary font-medium hover:text-primary/80 transition-colors underline decoration-primary/30 hover:decoration-primary/60"
            >
              Java Spring Boot
            </button>
            . Conheça mais{" "}
            <button
              onClick={() => scrollToSection("about")}
              className="text-primary font-medium hover:text-primary/80 transition-colors underline decoration-primary/30 hover:decoration-primary/60"
            >
              sobre minha jornada
            </button>
            .
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          variants={itemVariants}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-3 text-lg font-medium"
            >
              Ver Projetos
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-3 text-lg font-medium"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contato
            </Button>
          </motion.div>
        </motion.div>

        {/* Social Media Links */}
        <motion.div className="mb-16" variants={itemVariants}>
          <p className="text-sm text-muted-foreground mb-4 font-medium">
            Conecte-se comigo
          </p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-4 rounded-full bg-card/50 backdrop-blur-sm border border-border transition-all duration-300 hover:shadow-glow ${social.color}`}
                  aria-label={social.label}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className="w-6 h-6 transition-colors duration-300" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={() => scrollToSection("about")}
          className="animate-fade-in-delayed"
          whileHover={{
            scale: 1.2,
            y: -5,
          }}
          whileTap={{ scale: 0.9 }}
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <ChevronDown className="w-8 h-8 text-primary" />
        </motion.button>
      </motion.div>
    </section>
  );
};
