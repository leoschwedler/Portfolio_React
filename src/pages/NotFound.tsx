import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>404 - Página não encontrada | Leonardo Schwedler</title>
        <meta
          name="description"
          content="Página não encontrada. Retorne ao portfolio de Leonardo Schwedler."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center px-6 max-w-md mx-auto">
          <div className="mb-8">
            <h1 className="text-8xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              404
            </h1>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              Página não encontrada
            </h2>
            <p className="text-muted-foreground mb-8">
              A página que você está procurando não existe ou foi movida.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate(-1)}
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>

            <Button
              onClick={() => navigate("/")}
              className="bg-gradient-primary hover:shadow-glow"
            >
              <Home className="w-4 h-4 mr-2" />
              Início
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
