// src/pages/Bolos.jsx
export default function Bolos() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Título da seção */}
      <h1 className="text-4xl font-display font-bold text-[--color-primary] mb-6 text-center">
        Bolos Especiais
      </h1>

      {/* Descrição principal */}
      <p className="text-gray-700 text-center mb-10 max-w-2xl mx-auto">
        Bolos com recheios especiais e aquele sabor de casa, perfeitos para comemorações ou momentos doces do dia a dia.
      </p>

      {/* Grid de cards de bolos */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="card text-center">
          <img
            src="/assets/bolodechocolate.png"
            alt="Bolo de Chocolate"
            className="rounded-lg mb-3 w-full h-48 object-cover"
          />
          <h3 className="title text-[--color-primary]">Bolo de Chocolate</h3>
          <p className="text-gray-600 mb-4">
            Massa fofinha com recheio cremoso e cobertura irresistível.
          </p>
          <button className="btn">Comprar</button>
        </div>

        {/* Card 2 */}
        <div className="card text-center">
          <img
            src="/assets/bolodebaunilha.png"
            alt="Bolo de Baunilha"
            className="rounded-lg mb-3 w-full h-48 object-cover"
          />
          <h3 className="title text-[--color-primary]">Bolo de Baunilha</h3>
          <p className="text-gray-600 mb-4">
            Recheio cremoso e massa leve com aroma delicado de baunilha.
          </p>
          <button className="btn">Comprar</button>
        </div>

        {/* Card 3 */}
        <div className="card text-center">
          <img
            src="/assets/bolodefrutas.png"
            alt="Bolo de Frutas"
            className="rounded-lg mb-3 w-full h-48 object-cover"
          />
          <h3 className="title text-[--color-primary]">Bolo de Frutas</h3>
          <p className="text-gray-600 mb-4">
            Massa macia com frutas frescas, perfeito para qualquer celebração.
          </p>
          <button className="btn">Comprar</button>
        </div>
      </div>

      {/* Seção final com chamada para ação */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-[--color-secondary] mb-4">
          Experimente nossos bolos especiais!
        </h2>
        <button className="btn bg-[--color-secondary] hover:bg-pink-600">
          Fazer Pedido
        </button>
      </div>
    </div>
  );
}
