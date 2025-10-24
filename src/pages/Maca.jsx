// src/pages/Maca.jsx
export default function Maca() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Título da seção */}
      <h1 className="text-4xl font-display font-bold text-[--color-primary] mb-6 text-center">
        Delícias de Maçã
      </h1>

      {/* Descrição */}
      <p className="text-gray-700 text-center mb-10 max-w-2xl mx-auto">
        Sobremesas feitas com maçã e especiarias para um toque especial.
      </p>

      {/* Grid de cards de sobremesas de maçã */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="card text-center">
          <img
            src="/assets/maça-pie.webp"
            alt="Torta de Maçã"
            className="rounded-lg mb-3 w-full h-48 object-cover"
          />
          <h3 className="title text-[--color-primary]">Torta de Maçã</h3>
          <p className="text-gray-600 mb-4">
            Massa crocante e recheio cremoso com maçãs frescas.
          </p>
          <button className="btn">Comprar</button>
        </div>

        {/* Card 2 */}
        <div className="card text-center">
          <img
            src="/assets/maçacrumble.webp"
            alt="Crumble de Maçã"
            className="rounded-lg mb-3 w-full h-48 object-cover"
          />
          <h3 className="title text-[--color-primary]">Crumble de Maçã</h3>
          <p className="text-gray-600 mb-4">
            Sobremesa quentinha com cobertura crocante e maçãs caramelizadas.
          </p>
          <button className="btn">Comprar</button>
        </div>

        {/* Card 3 */}
        <div className="card text-center">
          <img
            src="/assets/maça-tarte.webp"
            alt="Tarte de Maçã"
            className="rounded-lg mb-3 w-full h-48 object-cover"
          />
          <h3 className="title text-[--color-primary]">Tarte de Maçã</h3>
          <p className="text-gray-600 mb-4">
            Massa amanteigada, recheio delicado e fatias de maçã frescas.
          </p>
          <button className="btn">Comprar</button>
        </div>
      </div>

      {/* Seção final */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-[--color-secondary] mb-4">
          Experimente nossas sobremesas de maçã!
        </h2>
        <button className="btn bg-[--color-secondary] hover:bg-pink-600">
          Fazer Pedido
        </button>
      </div>
    </div>
  );
}
