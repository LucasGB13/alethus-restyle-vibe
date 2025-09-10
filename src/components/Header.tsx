import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-card sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">COLÉGIO</h1>
                <h2 className="text-lg font-semibold text-primary">ALETHUS</h2>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">P</span>
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                Sistema de Ensino Poliedro
              </span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span className="text-sm">(09) 3869-5995 | (09) 99585-3677</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Button variant="ghost" className="text-sm">HOME</Button>
            <Button variant="ghost" className="text-sm">BOLSAS DE ESTUDOS</Button>
            <Button variant="ghost" className="text-sm">COLÉGIO ALETHUS</Button>
            <Button variant="ghost" className="text-sm">NOSSOS CURSOS</Button>
            <Button variant="ghost" className="text-sm">NEWS E EVENTOS</Button>
            <Button variant="hero" className="text-sm ml-2">FALE COM A GENTE</Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-2">
            <Button variant="ghost" className="w-full text-left justify-start">HOME</Button>
            <Button variant="ghost" className="w-full text-left justify-start">BOLSAS DE ESTUDOS</Button>
            <Button variant="ghost" className="w-full text-left justify-start">COLÉGIO ALETHUS</Button>
            <Button variant="ghost" className="w-full text-left justify-start">NOSSOS CURSOS</Button>
            <Button variant="ghost" className="w-full text-left justify-start">NEWS E EVENTOS</Button>
            <Button variant="hero" className="w-full mt-4">FALE COM A GENTE</Button>
            <div className="flex items-center space-x-2 text-muted-foreground pt-4">
              <Phone className="w-4 h-4" />
              <span className="text-sm">(09) 3869-5995 | (09) 99585-3677</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;