// src/App.jsx
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-6xl mx-auto p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card
          title="Doces"
          description="Brigadeiros cremosos, bolos fofinhos e tortas artesanais que transformam cada momento em uma celebração doce."
          image="/assets/doces.webp"
        />
        <Card
          title="Frutas"
          description="Frutas frescas e selecionadas, cheias de sabor e cor, perfeitas para acompanhar suas sobremesas."
          image="/assets/frutinhas.webp"
        />
        <Card
          title="Bolos Especiais"
          description="Receitas únicas com recheios irresistíveis, cobertura delicada e aquele toque caseiro que encanta."
          image="/assets/tea.webp"
        />
        <Card
          title="Sobre Nós"
          description="A Cacau & Baunilha nasceu da paixão pela confeitaria artesanal, unindo tradição, criatividade e muito carinho em cada receita."
          image="/assets/logo.jpeg"
        />
        <Card
          title="Delícias de Maçã"
          description="Sobremesas leves e aromáticas com maçã, combinando doçura natural e um toque de especiarias."
          image="/assets/maca2.jpg"
        />
        <Card
          title="Coração do Amor"
          description="Doces românticos e criativos, feitos para celebrar momentos especiais e encantar quem você ama."
          image="/assets/coracao.jpg"
        />
      </main>
       <Footer />
    </div>
  );
}

export default App;
