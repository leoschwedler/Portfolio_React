import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  MessageCircle,
} from "lucide-react";

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "leonardoschwedler@gmail.com",
      href: "mailto:leonardoschwedler@gmail.com",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (41) 98804-9030",
      href: "tel:+5541988049030",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Curitiba, PR, Brasil",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/leoschwedler",
      color: "hover:text-white",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/leonardo-schwuedller/",
      color: "hover:text-blue-400",
    },
  ];

  const handleWhatsAppClick = () => {
    const message = `Olá Leo! 

Vim pelo seu portfolio e gostaria de conversar sobre um projeto mobile.

Podemos conversar?`;

    const whatsappUrl = `https://wa.me/393887384713?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-20 pb-32 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vamos trabalhar juntos? Entre em contato para projetos mobile com
            Android nativo, Flutter ou Java Spring Boot!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* WhatsApp Contact Card */}
          <Card className="p-8 bg-gradient-card border-border">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Vamos Conversar?
              </h3>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                Prefere conversar pelo WhatsApp? Clique no botão abaixo e vamos
                discutir seu projeto mobile! É a forma mais rápida de entrarmos
                em contato.
              </p>

              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                Enviar Mensagem no WhatsApp
              </Button>

              <p className="text-xs text-muted-foreground mt-4">
                Clique para abrir o WhatsApp com uma mensagem pré-formatada
              </p>
            </div>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  const content = (
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 group">
                      <div className="p-2 rounded-lg bg-primary/20">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {info.label}
                        </p>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  );

                  return info.href ? (
                    <a key={index} href={info.href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Redes sociais
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group ${social.color}`}
                    >
                      <IconComponent className="w-6 h-6 transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>

            <Card className="p-6 bg-gradient-card border-border">
              <h4 className="font-semibold mb-3 text-foreground">
                Disponibilidade
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Atualmente disponível para novos projetos. Trabalho com clientes
                do mundo todo e estou sempre interessado em desafios
                interessantes e oportunidades de colaboração.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-green-400 font-medium">
                  Disponível para projetos
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
