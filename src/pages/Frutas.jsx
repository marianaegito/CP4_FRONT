// src/pages/Frutas.jsx
export default function Frutas() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Título da seção */}
      <h1 className="text-4xl font-display font-bold text-[--color-primary] mb-6 text-center">
        Frutas Selecionadas
      </h1>

      {/* Descrição principal */}
      <p className="text-gray-700 text-center mb-10 max-w-2xl mx-auto">
        Frutas frescas e selecionadas para acompanhar suas sobremesas, garantindo sabor, cor e qualidade em cada mordida.
      </p>

      {/* Grid de cards de frutas */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="card text-center">
          <img
            src="/assets/morango.webp"
            alt="Morango"
            className="rounded-lg mb-3 w-full h-48 object-cover"
          />
          <h3 className="title text-[--color-primary]">Morango Fresco</h3>
          <p className="text-gray-600 mb-4">
            Doces, suculentos e perfeitos para qualquer sobremesa.
          </p>
          <button className="btn">Adicionar</button>
        </div>

        {/* Card 2 */}
        <div className="card text-center">
          <img
            src="/assets/banana.webp"
            alt="Banana"
            className="rounded-lg mb-3 w-full h-48 object-cover"
          />
          <h3 className="title text-[--color-primary]">Banana Nanica</h3>
          <p className="text-gray-600 mb-4">
            Doce e macia, perfeita para bolos e sobremesas.
          </p>
          <button className="btn">Adicionar</button>
        </div>

        {/* Card 3 */}
        <div className="card text-center">
          <img
            src="/assets/manga.webp"
            alt="Manga"
            className="rounded-lg mb-3 w-full h-48 object-cover"
          />
          <h3 className="title text-[--color-primary]">Manga</h3>
          <p className="text-gray-600 mb-4">
            Sabor tropical e aroma irresistível para suas receitas.
          </p>
          <button className="btn">Adicionar</button>
        </div>
      </div>

      {/* Seção final com chamada para ação */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-[--color-secondary] mb-4">
          Complete suas sobremesas com frutas frescas!
        </h2>
        <button className="btn bg-[--color-secondary] hover:bg-pink-600">
          Fazer Pedido
        </button>
      </div>
    </div>
  );
}
