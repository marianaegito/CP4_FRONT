// src/pages/Doces.jsx
export default function Doces() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Título da seção */}
      <h1 className="text-4xl font-display font-bold text-[--color-primary] mb-6 text-center">
        Doces Artesanais
      </h1>

      {/* Descrição */}
      <p className="text-gray-700 text-center mb-10 max-w-2xl mx-auto">
        Brigadeiros, cupcakes, tortas e muito mais — feitos com amor e ingredientes selecionados.
      </p>

      {/* Grid de cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="card text-center">
          <img
            src="/assets/brigadeiro.webp"
            alt="Brigadeiro"
            className="rounded-lg mb-3 w-full h-48 object-cover"
          />
          <h3 className="title text-[--color-primary]">Brigadeiro Gourmet</h3>
          <p className="text-gray-600 mb-4">
            Clássico e irresistível, feito com chocolate belga.
          </p>
          <button className="btn">Comprar</button>
        </div>

        {/* Card 2 */}
        <div className="card text-center">
          <img
            src="/assets/cupcake.webp"
            alt="Cupcake"
            className="rounded-lg mb-3 w-full h-48 object-cover"
          />
          <h3 className="title text-[--color-primary]">Cupcake de Baunilha</h3>
          <p className="text-gray-600 mb-4">
            Massa leve e cobertura cremosa com toque de baunilha.
          </p>
          <button className="btn">Comprar</button>
        </div>

        {/* Card 3 */}
        <div className="card text-center">
          <img
            src="/assets/torta-morango.webp"
            alt="Torta de Morango"
            className="rounded-lg mb-3 w-full h-48 object-cover"
          />
          <h3 className="title text-[--color-primary]">Torta de Morango</h3>
          <p className="text-gray-600 mb-4">
            Base crocante, recheio cremoso e morangos frescos.
          </p>
          <button className="btn">Comprar</button>
        </div>
      </div>

      {/* Seção final */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-[--color-secondary] mb-4">
          Peça já o seu doce favorito!
        </h2>
        <button className="btn bg-[--color-secondary] hover:bg-pink-600">
          Fazer Pedido
        </button>
      </div>
    </div>
  );
}
