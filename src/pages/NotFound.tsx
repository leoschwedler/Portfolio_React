import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, Home, Mail, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <Card className="bg-gray-800/50 border-gray-700 text-white">
          <CardHeader className="text-center">
            <div className="text-8xl font-bold text-blue-500 mb-4">404</div>
            <CardTitle className="text-3xl font-bold text-white mb-2">
              Página não encontrada
            </CardTitle>
            <CardDescription className="text-gray-300 text-lg">
              Ops! Parece que você se perdeu no caminho. A página que você está
              procurando não existe.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="text-center text-gray-300">
              <p className="mb-4">
                Não se preocupe! Aqui estão algumas opções para você continuar
                navegando:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                asChild
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Link to="/">
                  <Home className="mr-2 h-4 w-4" />
                  Voltar ao Início
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                <Link to="/#about">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Sobre Mim
                </Link>
              </Button>
            </div>

            <div className="border-t border-gray-700 pt-6">
              <h3 className="text-lg font-semibold text-white mb-4 text-center">
                Encontre-me nas redes sociais
              </h3>

              <div className="flex justify-center space-x-4">
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  <a
                    href="mailto:leonardo@schwedlermobile.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>

                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  <a
                    href="https://github.com/leonardoschwedler"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>

                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  <a
                    href="https://linkedin.com/in/leonardoschwedler"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="text-center text-sm text-gray-400 mt-6">
              <p>
                Se você acredita que isso é um erro, entre em contato comigo
                através do email ou redes sociais.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
