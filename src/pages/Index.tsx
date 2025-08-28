import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { BottomNav } from "@/components/navigation/BottomNav";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
  };

  const pageTransition = {
    type: "tween" as const,
    ease: "anticipate" as const,
    duration: 0.5,
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Helmet>
        <title>
          Leonardo Schwedler - Desenvolvedor Mobile Android & Flutter
        </title>
        <meta
          name="description"
          content="Portfolio de Leonardo Schwedler, desenvolvedor mobile Android nativo, Flutter e Java Spring Boot. Clean Architecture, MVVM, MVI."
        />
        <meta
          name="keywords"
          content="desenvolvedor mobile, Android nativo, Flutter, Kotlin, Java, Spring Boot, Clean Architecture, MVVM, MVI, desenvolvimento mobile, portfolio"
        />
        <meta name="author" content="Leonardo Schwedler" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://schwedlermobile.com.br/" />
        <meta
          property="og:title"
          content="Leonardo Schwedler - Desenvolvedor Mobile"
        />
        <meta
          property="og:description"
          content="Portfolio de Leonardo Schwedler, desenvolvedor mobile especializado em Android nativo, Flutter e Java Spring Boot."
        />
        <meta
          property="og:image"
          content="https://schwedlermobile.com.br/leonardo-profile.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://schwedlermobile.com.br/"
        />
        <meta
          property="twitter:title"
          content="Leonardo Schwedler - Desenvolvedor Mobile"
        />
        <meta
          property="twitter:description"
          content="Portfolio de Leonardo Schwedler, desenvolvedor mobile especializado em Android nativo, Flutter e Java Spring Boot."
        />
        <meta
          property="twitter:image"
          content="https://schwedlermobile.com.br/leonardo-profile.jpg"
        />

        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />

        <BottomNav
          activeSection={activeSection}
          onSectionChange={scrollToSection}
        />
      </div>
    </motion.div>
  );
};

export default Index;
