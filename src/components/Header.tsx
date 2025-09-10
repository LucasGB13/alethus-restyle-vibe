import { Button } from "@/components/ui/button";
import { Phone, Menu, X, Mail } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-lg shadow-card sticky top-0 z-50 border-b border-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Modernizado */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-hero rounded-2xl flex items-center justify-center shadow-card">
                  <span className="text-white font-black text-xl">A</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full"></div>
              </div>
              <div>
                <h1 className="text-2xl font-black text-foreground">COLÉGIO</h1>
                <h2 className="text-xl font-bold text-primary">ALETHUS</h2>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-3 ml-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-sm">P</span>
              </div>
              <div>
                <span className="text-sm font-bold text-muted-foreground block">
                  Sistema de Ensino
                </span>
                <span className="text-lg font-black text-primary">
                  POLIEDRO
                </span>
              </div>
            </div>
          </div>

          {/* Contact Info Modernizado */}
          <div className="hidden xl:flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Fale conosco</p>
                <p className="text-sm font-bold text-foreground">(09) 3869-5995</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center">
                <Mail className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">WhatsApp</p>
                <p className="text-sm font-bold text-foreground">(09) 99585-3677</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Modernizada */}
          <nav className="hidden lg:flex items-center space-x-2">
            <Button variant="ghost" className="text-sm font-semibold hover:text-primary">HOME</Button>
            <Button variant="ghost" className="text-sm font-semibold hover:text-primary">BOLSAS</Button>
            <Button variant="ghost" className="text-sm font-semibold hover:text-primary">COLÉGIO</Button>
            <Button variant="ghost" className="text-sm font-semibold hover:text-primary">CURSOS</Button>
            <Button variant="ghost" className="text-sm font-semibold hover:text-primary">EVENTOS</Button>
            <Button variant="hero" className="text-sm font-bold ml-4">
              FALE CONOSCO
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden w-12 h-12"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation Melhorada */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border py-6 space-y-4 animate-fade-in">
            <div className="space-y-2">
              <Button variant="ghost" className="w-full text-left justify-start text-base font-semibold">HOME</Button>
              <Button variant="ghost" className="w-full text-left justify-start text-base font-semibold">BOLSAS DE ESTUDOS</Button>
              <Button variant="ghost" className="w-full text-left justify-start text-base font-semibold">COLÉGIO ALETHUS</Button>
              <Button variant="ghost" className="w-full text-left justify-start text-base font-semibold">NOSSOS CURSOS</Button>
              <Button variant="ghost" className="w-full text-left justify-start text-base font-semibold">NEWS E EVENTOS</Button>
            </div>
            
            <div className="pt-4 border-t border-border">
              <Button variant="hero" className="w-full font-bold text-base">
                FALE CONOSCO
              </Button>
            </div>
            
            <div className="grid grid-cols-1 gap-4 pt-4 border-t border-border">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold">(09) 3869-5995</p>
                  <p className="text-xs text-muted-foreground">Telefone</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary" />
                <div>
                  <p className="text-sm font-semibold">(09) 99585-3677</p>
                  <p className="text-xs text-muted-foreground">WhatsApp</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;