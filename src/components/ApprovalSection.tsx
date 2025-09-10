import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Star, Trophy } from "lucide-react";
import studentsImage from "@/assets/students-celebration.jpg";

const ApprovalSection = () => {
  const approvals = [
    {
      name: "Dimitri Citti",
      course: "Medicina - UFPA", 
      achievement: "1º lugar"
    },
    {
      name: "Giovanna Gomes", 
      course: "Engenharia - USP",
      achievement: "Aprovada"
    },
    {
      name: "Giovanna Fim",
      course: "Direito - PUC",
      achievement: "Bolsa integral"
    },
    {
      name: "Lorenna Brito",
      course: "Arquitetura - UFRJ",
      achievement: "Top 10"
    },
    {
      name: "Antonio Victor",
      course: "Medicina - UFC",
      achievement: "2º lugar"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Aprovações com a força
            <span className="text-primary block">Poliedro</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossos alunos conquistam as melhores universidades do país com a excelência 
            do sistema de ensino Poliedro
          </p>
        </div>

        {/* Background Image Section */}
        <div className="relative mb-16 rounded-3xl overflow-hidden h-80">
          <img 
            src={studentsImage} 
            alt="Estudantes comemorando aprovações"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-4xl font-black mb-4">NOSSOS SUCESSOS</h3>
              <p className="text-xl font-light">Mais de 1000 aprovações nos últimos 5 anos</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {approvals.map((student, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-white">
              <CardContent className="p-6 text-center">
                <div className="relative mb-4">
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto flex items-center justify-center border-4 border-primary/20">
                    <GraduationCap className="w-12 h-12 text-primary" />
                  </div>
                  <Badge className="absolute -top-2 -right-2 bg-primary text-white">
                    <Star className="w-3 h-3 mr-1" />
                    {student.achievement}
                  </Badge>
                </div>
                
                <h3 className="font-bold text-lg text-foreground mb-2">
                  {student.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {student.course}
                </p>
                
                <div className="w-full h-1 bg-primary rounded-full"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3">
            <Trophy className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">
              Mais de 1000 aprovações nos últimos 5 anos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApprovalSection;