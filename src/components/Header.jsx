// src/components/Header.jsx
import React from "react";

function Header() {
  return (
    <header className="bg-gradient-to-r from-brown-700 to-brown-600 text-white flex justify-between p-4">
      {/* <div className="mx-auto px-6 h-16 flex items-center"> */}
        {/* Logo + título */}
        {/* <a href="#" className="flex items-center gap-3"> */}
          <img
            src="/assets/logo.jpeg"
            alt="Logo"
            className="size-20 rounded-full object-cover"
          />
          {/* <span className="text-xl font-extrabold tracking-tight">
            Cacau & Baunilha
          </span> */}
        {/* </a> */}

        {/* Nav */}
        <nav className="w-fit">
          <ul className="flex items-center w-fit list-none text-black gap-2.5">
            {/* Cada link com efeito hover/ativo semelhante ao print */}
             <li>
              <a
                href="/"
                className="w-fit uppercase text-sm tracking-wider opacity-90 hover:opacity-100 relative
                           after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white
                           hover:after:w-full after:transition-all"
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="/doces"
                className="w-fit uppercase text-sm tracking-wider opacity-90 hover:opacity-100 relative
                           after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white
                           hover:after:w-full after:transition-all"
              >
                Doces
              </a>
            </li>
             
            <li>
              <a
                href="#"
                className="w-fit uppercase text-sm tracking-wider opacity-90 hover:opacity-100 relative
                           after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white
                           hover:after:w-full after:transition-all"
              >
                Salgados
              </a>
            </li>
            <li>
              <a
                href="/sobre"
                className="w-fit uppercase text-sm tracking-wider opacity-90 hover:opacity-100 relative
                           after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white
                           hover:after:w-full after:transition-all"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-fit uppercase text-sm tracking-wider opacity-90 hover:opacity-100 relative
                           after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white
                           hover:after:w-full after:transition-all"
              >
                Cadastro
              </a>
            </li>
          </ul>
        </nav>
      {/* </div> */}
    </header>
  );
}
export default Header;
