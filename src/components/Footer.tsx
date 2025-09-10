import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">A</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">COLÉGIO ALETHUS</h3>
                <p className="text-sm text-secondary-foreground/80">Sistema Poliedro</p>
              </div>
            </div>
            <p className="text-secondary-foreground/80 text-sm">
              Formando os líderes do futuro com a excelência do sistema de ensino Poliedro.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Bolsas de Estudos</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Nossos Cursos</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">News e Eventos</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Sobre Nós</a></li>
            </ul>
          </div>

          {/* Cursos */}
          <div>
            <h4 className="font-semibold mb-4">Cursos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Ensino Médio</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Pré-Vestibular</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Curso Técnico</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Fundamental II</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-accent" />
                <span>(09) 3869-5995</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-accent" />
                <span>(09) 99585-3677</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-accent" />
                <span>contato@alethuseducacional.com.br</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <span>Endereço da Escola<br />Cidade, Estado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Call to Action */}
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="text-sm">Siga-nos:</span>
              <div className="flex space-x-2">
                <Button size="icon" variant="ghost" className="w-8 h-8 hover:bg-accent hover:text-accent-foreground">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="ghost" className="w-8 h-8 hover:bg-accent hover:text-accent-foreground">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="ghost" className="w-8 h-8 hover:bg-accent hover:text-accent-foreground">
                  <Youtube className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <Button variant="accent" size="lg">
              MATRICULE-SE AGORA
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-sm text-secondary-foreground/60">
            © 2024 Colégio Alethus. Todos os direitos reservados. | Sistema de Ensino Poliedro
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;