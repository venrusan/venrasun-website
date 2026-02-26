import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Footer from "@/components/Footer";
import ChooseUs from "@/components/ChoosUs";
import TeamAbout from "@/components/TeamAbout";
import Principle from "@/components/principle";
import CustomerImportance from "@/components/CustomerImportance";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CustomerImportance />
      <ChooseUs />
      <TeamAbout />
      <Services />
      <Principle />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
