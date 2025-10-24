// src/pages/Sobre.jsx
export default function Sobre() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Título da seção */}
      <h1 className="text-4xl font-display font-bold text-[--color-primary] mb-6 text-center">
        Sobre Nós
      </h1>

      {/* Descrição principal */}
      <p className="text-gray-700 text-center mb-10 max-w-3xl mx-auto">
        Somos apaixonados por confeitaria artesanal. Cada doce é feito com cuidado, ingredientes selecionados e muito amor, para transformar momentos simples em memórias inesquecíveis.
      </p>

      {/* Cards de missão, visão e valores */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
        <div className="card text-center p-6">
          <h3 className="title text-[--color-primary]">Nossa Missão</h3>
          <p className="text-gray-600 mt-2">
            Criar doces artesanais de alta qualidade, levando sabor e alegria para todos os momentos.
          </p>
        </div>

        <div className="card text-center p-6">
          <h3 className="title text-[--color-primary]">Nossa Visão</h3>
          <p className="text-gray-600 mt-2">
            Ser referência em confeitaria artesanal, reconhecida pelo cuidado e criatividade em cada receita.
          </p>
        </div>

        <div className="card text-center p-6">
          <h3 className="title text-[--color-primary]">Nossos Valores</h3>
          <p className="text-gray-600 mt-2">
            Qualidade, criatividade, carinho e atenção aos detalhes em todos os nossos produtos.
          </p>
        </div>
      </div>

      {/* Seção final com chamada para ação */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-[--color-secondary] mb-4">
          Venha conhecer nossos doces!
        </h2>
        <button className="btn bg-[--color-secondary] hover:bg-pink-600">
          Faça um Pedido
        </button>
      </div>
    </div>
  );
}
