import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Users, ArrowRight } from "lucide-react";

const CoursesSection = () => {
  const courses = [
    {
      title: "Ensino Médio",
      description: "Formação completa com base no sistema Poliedro, preparando para os melhores vestibulares.",
      duration: "3 anos",
      students: "300+",
      highlights: ["Simulados", "Plantão de Dúvidas", "Material Poliedro"],
      color: "primary"
    },
    {
      title: "Pré-Vestibular",
      description: "Preparação intensiva para ENEM, vestibulares e concursos com foco em resultados.",
      duration: "1 ano",
      students: "150+",
      highlights: ["ENEM", "Medicina", "Engenharia"],
      color: "secondary"
    },
    {
      title: "Curso Técnico",
      description: "Formação técnica integrada ao ensino médio para o mercado de trabalho.",
      duration: "3 anos",
      students: "100+",
      highlights: ["Prática", "Estágio", "Certificação"],
      color: "accent"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary font-semibold mb-4">
            📚 NOSSOS CURSOS
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Escolha o seu
            <span className="text-primary block">caminho para o sucesso</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos cursos com a qualidade Poliedro para todas as etapas da sua jornada educacional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-full h-1 bg-${course.color}`}></div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {course.title}
                  </CardTitle>
                  <div className={`w-12 h-12 bg-${course.color}/10 rounded-full flex items-center justify-center`}>
                    <BookOpen className={`w-6 h-6 text-${course.color}`} />
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {course.description}
                </p>

                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students} alunos</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Destaques:</p>
                  <div className="flex flex-wrap gap-2">
                    {course.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button 
                  className="w-full group"
                  variant={course.color === "primary" ? "default" : course.color === "secondary" ? "secondary" : "accent"}
                >
                  Saiba mais
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="text-lg">
            VER TODOS OS CURSOS
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;