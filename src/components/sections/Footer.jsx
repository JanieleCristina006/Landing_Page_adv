import React from "react";
import logo from "../../assets/logo02.png";

export const Footer = () => {
  return (
    <footer className="relative bg-[#05070a] text-white overflow-hidden">
      {/* Fundo elegante */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 right-[-160px] w-[500px] h-[500px] bg-[#C6A85E]/10 blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        {/* Grid principal */}
        <div className="grid lg:grid-cols-4 gap-12">

          {/* Marca */}
          <div>
            <img
              src={logo}
              alt="Vinícius Ramos Advocacia"
              className="h-14 w-auto object-contain"
            />

            <p className="mt-6 text-white/60 text-sm leading-relaxed">
              Atuação estratégica em direito familiar, cível e patrimonial.
              Defesa técnica, posicionamento firme e foco absoluto em resultado.
            </p>

            <div className="mt-6 flex items-center gap-3 text-white/40">
              <span className="h-[1px] w-10 bg-white/15" />
              <span className="text-xs tracking-[0.25em] uppercase">
                Estratégia • Técnica • Resultado
              </span>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="text-[#C6A85E] font-semibold mb-5">Navegação</h4>

            <ul className="space-y-3 text-white/70 text-sm">
              <li><a href="#home" className="hover:text-[#C6A85E] transition">Início</a></li>
              <li><a href="#servicos" className="hover:text-[#C6A85E] transition">Serviços</a></li>
              <li><a href="#areas" className="hover:text-[#C6A85E] transition">Áreas de Atuação</a></li>
              <li><a href="#sobre" className="hover:text-[#C6A85E] transition">Sobre</a></li>
              <li><a href="#contato" className="hover:text-[#C6A85E] transition">Contato</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-[#C6A85E] font-semibold mb-5">Contato</h4>

            <ul className="space-y-3 text-white/70 text-sm">
              <li>(71) XXXX-XXXX</li>
              <li>Salvador — BA</li>
              <li>Atendimento presencial e online</li>
              <li>Seg a Sex · 09h às 18h</li>
            </ul>
          </div>

          {/* CTA final */}
          <div>
            <h4 className="text-[#C6A85E] font-semibold mb-5">
              Atendimento
            </h4>

            <p className="text-white/60 text-sm leading-relaxed">
              Inicie agora sua orientação jurídica personalizada.
            </p>

            <a
              href="#contato"
              className="mt-6 inline-flex items-center justify-center px-6 py-4 rounded-xl
                         bg-[#C6A85E] text-[#0D2B4C] font-semibold hover:brightness-110 transition w-full sm:w-auto"
            >
              Solicitar Atendimento →
            </a>
          </div>
        </div>

        {/* Linha inferior */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} Vinícius Ramos Advocacia. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#C6A85E] transition">Política de Privacidade</a>
            <a href="#" className="hover:text-[#C6A85E] transition">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
