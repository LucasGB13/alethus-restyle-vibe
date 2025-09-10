import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Trophy, Users, BookOpen } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-accent transform rotate-45 -translate-x-16 -translate-y-16"></div>
        <div className="absolute top-1/2 right-0 w-24 h-24 bg-accent transform rotate-45 translate-x-12"></div>
        <div className="absolute bottom-0 left-1/3 w-40 h-40 bg-accent transform rotate-45 translate-y-20"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <Badge className="bg-accent text-accent-foreground font-semibold">
                🎯 NOVO ENSINO MÉDIO
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                MATRÍCULAS 
                <span className="block text-accent">ABERTAS!</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 max-w-lg">
                Sua chance de ser Poliedro, sua decisão de ser você no futuro certo
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="accent" 
                size="lg" 
                className="text-lg font-bold group"
              >
                INSCREVA-SE!
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-white border-white hover:bg-white hover:text-primary text-lg"
              >
                CONHECER OS CURSOS
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-full mx-auto mb-2">
                  <Trophy className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm text-white/80">Aprovação</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-full mx-auto mb-2">
                  <Users className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-white/80">Alunos</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-full mx-auto mb-2">
                  <BookOpen className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm text-white/80">Anos</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    PROVA DE BOLSA 2026
                  </h3>
                  <p className="text-white/90">
                    Sua chance de ser Poliedro, sua decisão de ser você no futuro certo
                  </p>
                </div>
                
                <div className="bg-accent text-accent-foreground p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold mb-2">11/09 às 15:00</div>
                  <p className="text-sm">Data da prova de bolsas</p>
                </div>

                <Button 
                  className="w-full bg-white text-primary hover:bg-white/90 font-bold text-lg py-3"
                >
                  INSCREVA-SE AQUI!
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;