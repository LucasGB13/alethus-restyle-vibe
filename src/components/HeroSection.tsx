import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Trophy, Users, BookOpen, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-20 w-32 h-32 bg-accent/10 transform rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-white space-y-8 animate-slide-up">
            <div className="space-y-6">
              <Badge className="bg-accent text-accent-foreground font-bold text-sm px-4 py-2 animate-fade-in">
                <Sparkles className="w-4 h-4 mr-2" />
                NOVO ENSINO MÉDIO 2025
              </Badge>
              
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-7xl font-black leading-tight">
                  <span className="block">MATRÍCULAS</span>
                  <span className="block text-accent drop-shadow-2xl">ABERTAS!</span>
                </h1>
                <div className="w-20 h-2 bg-accent rounded-full"></div>
              </div>
              
              <p className="text-2xl lg:text-3xl text-white/95 max-w-lg font-light leading-relaxed">
                Sua chance de ser <span className="font-bold text-accent">Poliedro</span>, 
                sua decisão de ser <span className="font-bold">você</span> no futuro certo
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                variant="accent" 
                size="lg" 
                className="text-xl font-bold py-4 px-8 group"
              >
                INSCREVA-SE AGORA!
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-xl py-4 px-8 text-white border-2 border-white hover:bg-white hover:text-primary"
              >
                CONHECER CURSOS
              </Button>
            </div>

            {/* Stats com animação */}
            <div className="grid grid-cols-3 gap-8 pt-12">
              {[
                { icon: Trophy, value: "98%", label: "Aprovação", delay: "0.2s" },
                { icon: Users, value: "500+", label: "Alunos", delay: "0.4s" },
                { icon: BookOpen, value: "15+", label: "Anos", delay: "0.6s" }
              ].map((stat, index) => (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: stat.delay }}>
                  <div className="flex items-center justify-center w-16 h-16 bg-accent rounded-2xl mx-auto mb-4 shadow-glow">
                    <stat.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <div className="text-4xl font-black text-accent">{stat.value}</div>
                  <div className="text-lg text-white/90 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Card de Prova de Bolsa Modernizado */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 bg-gradient-accent rounded-3xl transform rotate-2 shadow-dramatic"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-glow border-4 border-accent">
              <div className="space-y-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-2xl mb-4">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-primary mb-2">
                    PROVA DE BOLSA
                  </h3>
                  <div className="text-6xl font-black text-secondary">2026</div>
                  <p className="text-muted-foreground text-lg mt-2">
                    Sua chance de conquistar o futuro
                  </p>
                </div>
                
                <div className="bg-gradient-accent p-6 rounded-2xl text-center shadow-card">
                  <div className="text-4xl font-black text-accent-foreground mb-2">11/09</div>
                  <div className="text-2xl font-bold text-accent-foreground">às 15:00</div>
                  <p className="text-accent-foreground/80 text-sm mt-2">Data da prova de bolsas</p>
                </div>

                <Button 
                  variant="hero"
                  className="w-full text-xl font-black py-4"
                >
                  GARANTA SUA VAGA!
                  <ArrowRight className="w-6 h-6" />
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  <p>🎯 Bolsas de até <span className="font-bold text-primary">100%</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;