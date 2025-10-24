// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Button from "./components/Button"; // Importa o novo componente Button

import Doces from "./pages/Doces";
import Frutas from "./pages/Frutas";
import Bolos from "./pages/Bolos";
import Sobre from "./pages/Sobre";
import Maca from "./pages/Maca";
import Coracao from "./pages/Coracao";
import Salgados from "./pages/Salgados";

function App() {
  return (
    // Flex container vertical com altura total da tela
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      {/* Conteúdo principal deve crescer para empurrar o footer */}
      <div className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <main className="max-w-6xl mx-auto p-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card
                    title="Doces"
                    description="Brigadeiros cremosos, bolos fofinhos e tortas artesanais."
                    image="/assets/doces.webp"
                    route="/doces"
                  />
                  <Card
                    title="Frutas"
                    description="Frutas frescas e selecionadas, cheias de sabor."
                    image="/assets/frutinhas.webp"
                    route="/frutas"
                  />
                  <Card
                    title="Bolos Especiais"
                    description="Recheios irresistíveis e coberturas delicadas."
                    image="/assets/tea.webp"
                    route="/bolos"
                  />
                  <Card
                    title="Sobre Nós"
                    description="Paixão pela confeitaria artesanal."
                    image="/assets/logo.jpeg"
                    route="/sobre"
                  />
                  <Card
                    title="Delícias de Maçã"
                    description="Sobremesas leves e aromáticas com maçã."
                    image="/assets/maca2.jpg"
                    route="/maca"
                  />
                  <Card
                    title="Coração do Amor"
                    description="Doces românticos para celebrar o amor."
                    image="/assets/coracao.jpg"
                    route="/coracao"
                  />
                </div>

               
              </main>
            }
          />

          {/* Páginas individuais */}
          <Route path="/doces" element={<Doces />} />
          <Route path="/frutas" element={<Frutas />} />
          <Route path="/bolos" element={<Bolos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/maca" element={<Maca />} />
          <Route path="/coracao" element={<Coracao />} />
          <Route path="/salgados" element={<Salgados/>} />
          
        </Routes>
      </div>

      {/* Agora o Footer estará sempre no final da página */}
      <Footer />
    </div>
  );
}

export default App;
