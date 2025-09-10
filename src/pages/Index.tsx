import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ApprovalSection from "@/components/ApprovalSection";
import CoursesSection from "@/components/CoursesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ApprovalSection />
      <CoursesSection />
      <Footer />
    </div>
  );
};

export default Index;
