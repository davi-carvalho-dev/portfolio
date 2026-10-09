import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import Projetos from "./assets/components/Projetos";
import Servicos from "./assets/components/Servicos";
import Contato from "./assets/components/Contato";
import Footer from "./assets/components/Footer";

// Sem imports de CSS aqui: o main.tsx já importa o index.css.
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projetos />
        <Servicos />
        <Contato />
      </main>
      <Footer />
    </>
  );
}

export default App;
