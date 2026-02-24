import { AreasAtuacao } from "./components/sections/AreasAtuacao";
import { Contato } from "./components/sections/Contato";
import { Footer } from "./components/sections/Footer";
import { Header } from "./components/sections/Header";
import { HeroSection } from "./components/sections/HeroSection";
import { Sobre } from "./components/sections/Sobre";
import { ChatAgendamento } from "./components/ui/ChatAgendamento";

export const Home = () => {
  return (
    <>
      <Header />

    
        <HeroSection />
        <ChatAgendamento />
        <AreasAtuacao />
        <Sobre />
        <Contato/> 
        <Footer />
    </>
  );
};
