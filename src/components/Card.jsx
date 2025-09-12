// src/components/Card.jsx
import { useState } from "react";

function Card({ title, description, image }) {
  const [imgOk, setImgOk] = useState(true);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition">
      {image && imgOk ? (
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover"
          onError={() => setImgOk(false)}
          loading="lazy"
        />
      ) : (
        <div className="w-full h-40 bg-gradient-to-r from-amber-200 to-amber-100 flex flex-col items-center justify-center p-3">
          <span className="text-amber-900/70 text-sm">Imagem indisponível</span>
          {/* Mostra o caminho recebido pra facilitar o debug */}
          {image && (
            <code className="text-[10px] mt-1 text-amber-900/60 break-all">
              {image}
            </code>
          )}
        </div>
      )}

      <div className="p-6">
        <h2 className="text-lg font-semibold mb-2 text-brown-800">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default Card;
