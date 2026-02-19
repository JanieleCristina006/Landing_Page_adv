import React from "react";
import foto from "../../assets/ad_02.png";

export const Sobre = () => {
  return (
    <section id="sobre" className="relative bg-[#07090d] py-20 lg:py-28 overflow-hidden">
      {/* Fundo sofisticado */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#C6A85E]/10 blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* IMAGEM */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[420px]">
              <div className="absolute -inset-8 bg-[#C6A85E]/10 blur-3xl rounded-full -z-10" />

              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img
                  src={foto}
                  alt="Vinícius Ramos - Advogado"
                  className="w-full h-[420px] sm:h-[500px] object-cover object-[50%_18%]"
                />

                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md px-5 py-4 rounded-xl border border-white/10">
                  <h3 className="text-lg font-semibold text-white">
                    Vinícius Ramos
                  </h3>
                  <p className="text-[#C6A85E] text-sm">
                    Advogado · OAB/BA 00.000
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* TEXTO */}
          <div>
            <div className="inline-flex items-center gap-3">
              <span className="h-[1px] w-10 bg-[#C6A85E]/70" />
              <p className="text-[#C6A85E] text-xs tracking-[0.35em] uppercase">
                Sobre
              </p>
            </div>

            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.05] tracking-tight">
              Atuação jurídica com
              <span className="text-[#C6A85E]"> estratégia e firmeza.</span>
            </h2>

            <p className="mt-6 text-gray-300 leading-relaxed text-base sm:text-lg">
              Vinícius Ramos atua na defesa de interesses familiares, cíveis e patrimoniais
              com posicionamento técnico, postura firme e foco absoluto em resultado.
              Cada caso é conduzido com estratégia individualizada e clareza na comunicação.
            </p>

            <p className="mt-4 text-gray-400 leading-relaxed">
              A atuação combina análise jurídica aprofundada, planejamento estratégico
              e acompanhamento próximo do cliente — garantindo segurança e previsibilidade
              em todas as etapas do processo.
            </p>

            {/* Diferenciais */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border border-white/10 rounded-xl p-5 bg-white/5 backdrop-blur-md">
                <p className="text-[#C6A85E] font-semibold text-sm">Atendimento personalizado</p>
                <p className="text-white/70 text-sm mt-2">
                  Cada situação exige uma estratégia específica.
                </p>
              </div>

              <div className="border border-white/10 rounded-xl p-5 bg-white/5 backdrop-blur-md">
                <p className="text-[#C6A85E] font-semibold text-sm">Foco em resultado</p>
                <p className="text-white/70 text-sm mt-2">
                  Defesa estratégica com objetivo claro.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 bg-[#C6A85E] text-[#0D2B4C] px-7 py-4 rounded-xl font-semibold hover:brightness-110 transition"
              >
                Solicitar Atendimento →
              </a>
            </div>

            {/* Assinatura visual */}
            <div className="mt-8 flex items-center gap-3 text-white/40">
              <span className="h-[1px] w-10 bg-white/15" />
              <span className="text-xs tracking-[0.25em] uppercase">
                Estratégia • Técnica • Resultado
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
