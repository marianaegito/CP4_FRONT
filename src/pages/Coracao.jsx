// src/pages/Coracao.jsx
export default function Coracao() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Título da seção */}
      <h1 className="text-4xl font-display font-bold text-[--color-primary] mb-6 text-center">
        Coração do Amor
      </h1>

      {/* Descrição principal */}
      <p className="text-gray-700 text-center mb-10 max-w-2xl mx-auto">
        Doces criativos e apaixonantes para encantar quem você ama, perfeitos para datas especiais ou mimos do dia a dia.
      </p>

      {/* Grid de cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="card text-center">
          <img
            src="/assets/coracao.png"
            alt="Cupcake do Amor"
            className="rounded-lg mb-3 w-full h-48 object-cover"
          />
          <h3 className="title text-[--color-primary]">Cupcake do Amor</h3>
          <p className="text-gray-600 mb-4">
            Delicioso cupcake decorado com coração de chocolate.
          </p>
          <button className="btn">Comprar</button>
        </div>

        {/* Card 2 */}
        <div className="card text-center">
          <img
            src="/assets/trufas.png"
            alt="Trufa Romântica"
            className="rounded-lg mb-3 w-full h-48 object-cover"
          />
          <h3 className="title text-[--color-primary]">Trufa Romântica</h3>
          <p className="text-gray-600 mb-4">
            Trufa artesanal com sabores delicados e apaixonantes.
          </p>
          <button className="btn">Comprar</button>
        </div>

        {/* Card 3 */}
        <div className="card text-center">
          <img
            src="/assets/biscoito.png"
            alt="Biscoito de Coração"
            className="rounded-lg mb-3 w-full h-48 object-cover"
          />
          <h3 className="title text-[--color-primary]">Biscoito de Coração</h3>
          <p className="text-gray-600 mb-4">
            Crocante, doce e decorado para surpreender quem você ama.
          </p>
          <button className="btn">Comprar</button>
        </div>
      </div>

      {/* Seção final com chamada para ação */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-[--color-secondary] mb-4">
          Surpreenda com doces apaixonantes!
        </h2>
        <button className="btn bg-[--color-secondary] hover:bg-pink-600">
          Fazer Pedido
        </button>
      </div>
    </div>
  );
}
