import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import SocialButtons from "@/components/SocialButtons";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Footer />
      <SocialButtons />
    </main>
  );
};

export default Index;