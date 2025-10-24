// src/pages/Salgados.jsx
export default function Salgados() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Título da seção */}
      <h1 className="text-4xl font-display font-bold text-[--color-primary] mb-6 text-center">
        Salgados Selecionados
      </h1>

      {/* Descrição principal */}
      <p className="text-gray-700 text-center mb-10 max-w-2xl mx-auto">
        Salgados fresquinhos e variados para acompanhar seus lanches e festas, garantindo sabor, textura e qualidade em cada mordida.
      </p>

      {/* Grid de cards de salgados */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="card text-center">
          <img
            src="/assets/coxinha.webp"
            alt="Coxinha"
            className="rounded-lg mb-3 w-full h-48 object-cover"
          />
          <h3 className="title text-[--color-primary]">Coxinha</h3>
          <p className="text-gray-600 mb-4">
            Crocante por fora, recheio cremoso de frango por dentro.
          </p>
          <button className="btn">Adicionar</button>
        </div>

        {/* Card 2 */}
        <div className="card text-center">
          <img
            src="/assets/enroladinho.webp"
            alt="Enroladinho de Salsicha"
            className="rounded-lg mb-3 w-full h-48 object-cover"
          />
          <h3 className="title text-[--color-primary]">Enroladinho de Salsicha</h3>
          <p className="text-gray-600 mb-4">
            Massa macia envolvendo uma deliciosa salsicha, perfeita para festas.
          </p>
          <button className="btn">Adicionar</button>
        </div>

        {/* Card 3 */}
        <div className="card text-center">
          <img
            src="/assets/kibe.webp"
            alt="Kibe"
            className="rounded-lg mb-3 w-full h-48 object-cover"
          />
          <h3 className="title text-[--color-primary]">Kibe</h3>
          <p className="text-gray-600 mb-4">
            Tradicional e saboroso, crocante por fora e suculento por dentro.
          </p>
          <button className="btn">Adicionar</button>
        </div>
      </div>

      {/* Seção final com chamada para ação */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-[--color-secondary] mb-4">
          Complete seu lanche com salgados fresquinhos!
        </h2>
        <button className="btn bg-[--color-secondary] hover:bg-yellow-600">
          Fazer Pedido
        </button>
      </div>
    </div>
  );
}
