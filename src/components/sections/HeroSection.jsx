// src/sections/Hero.tsx
import { useEffect, useMemo, useState } from "react";
import foto from "../../assets/hero2.png";
import hero from "../../assets/background_hero.png";

export const HeroSection = () => {
  const [offset, setOffset] = useState(0);

  // header mais baixo no mobile (evita “cta fora da dobra”)
  const headerH = useMemo(() => {
    if (typeof window === "undefined") return 96;
    return window.innerWidth < 640 ? 80 : 96; // sm breakpoint
  }, []);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // parallax só no desktop (mobile fica leve)
  const parallaxY = typeof window !== "undefined" && window.innerWidth >= 1024 ? offset * 0.12 : 0;

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{
        paddingTop: headerH,
        minHeight: `calc(100svh - ${headerH}px)`,
      }}
    >
      {/* Background */}
      {/* Background */}
<div className="absolute inset-0 overflow-hidden">
  {/* camada com “sangria” pra não cortar */}
  <div
    className="absolute -top-24 -bottom-24 left-0 right-0 will-change-transform"
    style={{
      backgroundImage: `url(${hero})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      transform: `translateY(${parallaxY}px)`,
    }}
  />

  {/* overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/70" />
  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
</div>


      {/* Conteúdo */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6"
        style={{ minHeight: `calc(100svh - ${headerH}px)` }}
      >
        <div className="h-full grid lg:grid-cols-2 items-center gap-10 lg:gap-14 py-10 lg:py-14">
          {/* TEXTO (sempre primeiro) */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#C6A85E]/35 bg-black/25 backdrop-blur-sm text-[#C6A85E] text-[11px] tracking-[0.25em] uppercase">
              Atendimento Premium · Salvador
            </div>

            <h1 className="mt-5 sm:mt-6 font-extrabold tracking-tight leading-[1.02] text-white">
              <span className="block text-[38px] sm:text-5xl lg:text-6xl">Proteção</span>
              <span className="block text-[38px] sm:text-5xl lg:text-6xl text-[#C6A85E]">Jurídica</span>
              <span className="block text-[38px] sm:text-5xl lg:text-6xl text-white/90">que resolve.</span>
            </h1>

            <p className="mt-4 sm:mt-5 text-[15px] sm:text-lg text-gray-300 leading-relaxed">
              Defesa estratégica em direito familiar, cível e patrimonial.
              Atuação técnica, posicionamento firme e foco absoluto em resultado.
            </p>

            {/* números: no mobile vira 2 colunas e “compacta” */}
            <div className="mt-6 grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-8 text-gray-400 text-[11px] uppercase tracking-wide">
              <div>
                <p className="text-2xl font-bold text-[#C6A85E] leading-none">500+</p>
                <p className="mt-1.5 sm:mt-2">Processos vencidos</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#C6A85E] leading-none">10+</p>
                <p className="mt-1.5 sm:mt-2">Anos de atuação</p>
              </div>
              <div className="col-span-2 sm:col-auto">
                <p className="text-2xl font-bold text-[#C6A85E] leading-none">OAB/BA</p>
                <p className="mt-1.5 sm:mt-2">00.000</p>
              </div>
            </div>

            {/* CTAs: sempre visíveis e com largura total no mobile */}
            <div className="mt-7 grid grid-cols-1 sm:flex gap-3 sm:gap-4">
              <button className="w-full sm:w-auto bg-[#C6A85E] text-[#0D2B4C] font-semibold px-7 py-4 rounded-xl text-base transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 shadow-lg">
                Solicitar Atendimento
              </button>

              <a
                href="tel:+5571XXXXXXXX"
                className="w-full sm:w-auto text-center border border-white/25 px-7 py-4 rounded-xl text-white text-base hover:bg-white/10 transition-all duration-300"
              >
                (71) XXXX-XXXX
              </a>
            </div>
          </div>

          {/* FOTO */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px]">
              {/* glow elegante */}
              <div className="absolute -inset-10 bg-[#C6A85E]/12 blur-3xl rounded-full -z-10" />

              {/* moldura */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                {/* fade/blur nas bordas pra esconder “corte” */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* vinheta */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
                  {/* “esfumado” lateral (disfarça recorte) */}
                  <div className="absolute -left-10 top-0 bottom-0 w-24 bg-black/40 blur-2xl" />
                  <div className="absolute -right-10 top-0 bottom-0 w-24 bg-black/30 blur-2xl" />
                </div>

                <img
                  src={foto}
                  alt="Vinícius Ramos - Advogado"
                  className="
                    w-full
                    h-[360px] sm:h-[440px] lg:h-[520px]
                    object-cover
                    object-[50%_18%]  /* desce a foto (ajuste fino) */
                    scale-[1.03]      /* dá “presença” sem estourar */
                  "
                />

                {/* assinatura */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/55 backdrop-blur-md px-5 py-4 rounded-xl border border-white/10">
                  <h3 className="text-lg font-semibold text-white leading-tight">
                    Vinícius Ramos
                  </h3>
                  <p className="text-[#C6A85E] text-sm">Advogado · OAB/BA 00.000</p>
                </div>
              </div>

              {/* detalhe de marca (micro linha) */}
              <div className="mt-4 flex items-center gap-3 text-white/45">
                <span className="h-[1px] w-10 bg-white/15" />
                <span className="text-xs tracking-[0.25em] uppercase">
                  Estratégia • Técnica • Resultado
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
