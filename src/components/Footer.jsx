// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">
        
        {/* Contato */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Entre em Contato</h2>
          <p>Email: <a href="mailto:contato@cacauebaunilha.com" className="text-pink-400 hover:underline">contato@cacauebaunilha.com</a></p>
          <p>Telefone: <a href="tel:+5511999999999" className="text-pink-400 hover:underline">(11) 99999-9999</a></p>
          <p>Endereço: Rua das Delícias, 123 - São Paulo/SP</p>
        </div>

        {/* Políticas */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Informações</h2>
          <p>
            <a href="/politicas" className="text-pink-400 hover:underline">
              Políticas de Privacidade
            </a>
          </p>
          <p>
            <a href="/termos" className="text-pink-400 hover:underline">
              Termos de Uso
            </a>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 border-t border-gray-700 pt-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Cacau & Baunilha. Todos os direitos reservados.
      </div>
    </footer>
  );
}
