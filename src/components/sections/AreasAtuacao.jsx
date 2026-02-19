import { useMemo, useState } from "react";

export function AreasAtuacao() {
  const areas = useMemo(
    () => [
      {
        id: "familia",
        title: "Família & Sucessões",
        subtitle: "Decisões sensíveis. Estratégia firme. Condução segura.",
        bullets: ["Divórcio e partilha", "Guarda e convivência", "Pensão", "Inventário"],
        tag: "Alta urgência",
      },
      {
        id: "civel",
        title: "Cível Estratégico",
        subtitle: "Ações e defesas com foco em resultado e previsibilidade.",
        bullets: ["Indenizações", "Cobranças", "Responsabilidade civil", "Tutelas de urgência"],
        tag: "Contencioso",
      },
      {
        id: "contratos",
        title: "Contratos",
        subtitle: "Clareza, blindagem e negociação: contrato não é detalhe.",
        bullets: ["Revisão", "Elaboração", "Aditivos", "Cláusulas de risco"],
        tag: "Preventivo",
      },
      {
        id: "patrimonial",
        title: "Patrimonial",
        subtitle: "Proteção e organização de bens com visão de longo prazo.",
        bullets: ["Planejamento patrimonial", "Regularização", "Holdings", "Partilhas complexas"],
        tag: "Proteção",
      },
    ],
    []
  );

  const [activeId, setActiveId] = useState(areas[0].id);
  const active = areas.find((a) => a.id === activeId) ?? areas[0];

  return (
    <section id="areas" className="relative bg-[#07090d] overflow-hidden">
      {/* Fundo */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 right-[-140px] w-[520px] h-[520px] bg-[#C6A85E]/10 blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/65" />
        <div className="absolute inset-0 opacity-[0.14]">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <path d="M0 140H1200" stroke="white" strokeWidth="1" />
            <path d="M0 280H1200" stroke="white" strokeWidth="1" />
            <path d="M0 420H1200" stroke="white" strokeWidth="1" />
            <path d="M0 560H1200" stroke="white" strokeWidth="1" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        {/* Cabeçalho */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3">
              <span className="h-[1px] w-10 bg-[#C6A85E]/70" />
              <p className="text-[#C6A85E] text-[11px] sm:text-xs tracking-[0.35em] uppercase">
                Áreas de atuação
              </p>
            </div>

            <h2 className="mt-4 sm:mt-5 text-[34px] leading-[1.02] sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              A condução jurídica certa{" "}
              <span className="text-white/65">muda o jogo.</span>
            </h2>

            <p className="mt-4 text-[15px] sm:text-lg text-gray-300 leading-relaxed">
              Atuação técnica em casos familiares, cíveis e patrimoniais — com linguagem clara,
              estratégia e postura firme em cada etapa.
            </p>
          </div>

          {/* Selo */}
          <div className="flex items-center gap-3 text-white/70">
            <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 grid place-items-center">
              <span className="text-[#C6A85E] font-semibold">VR</span>
            </div>
            <div className="text-sm">
              <p className="text-white font-semibold leading-tight">Atendimento Premium</p>
              <p className="text-white/60 text-xs">Triagem rápida e orientação inicial</p>
            </div>
          </div>
        </div>

        {/* MOBILE: chips + accordion */}
        <div className="mt-10 lg:hidden">
          {/* Chips (melhor no toque) */}
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {areas.map((a) => {
              const selected = a.id === activeId;
              return (
                <button
                  key={a.id}
                  onClick={() => setActiveId(a.id)}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm border transition
                    ${
                      selected
                        ? "border-[#C6A85E]/45 bg-[#C6A85E]/12 text-[#C6A85E]"
                        : "border-white/15 bg-white/5 text-white/75"
                    }`}
                >
                  {a.title}
                </button>
              );
            })}
          </div>

          {/* Accordion cards */}
          <div className="mt-5 space-y-3">
            {areas.map((a, idx) => {
              const open = a.id === activeId;
              return (
                <div
                  key={a.id}
                  className={`rounded-2xl border overflow-hidden backdrop-blur-md transition
                    ${
                      open
                        ? "border-[#C6A85E]/25 bg-black/35"
                        : "border-white/10 bg-white/5"
                    }`}
                >
                  <button
                    onClick={() => setActiveId(a.id)}
                    aria-expanded={open}
                    className="w-full text-left p-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`h-2 w-2 rounded-full ${
                              open ? "bg-[#C6A85E]" : "bg-white/25"
                            }`}
                          />
                          <p className="text-white font-semibold leading-tight">{a.title}</p>
                        </div>
                        <p className="mt-2 text-white/70 text-sm leading-relaxed">
                          {a.subtitle}
                        </p>
                      </div>

                      <span
                        className={`shrink-0 text-[11px] px-3 py-1 rounded-full border
                          ${
                            open
                              ? "border-[#C6A85E]/35 text-[#C6A85E] bg-[#C6A85E]/10"
                              : "border-white/15 text-white/60 bg-white/5"
                          }`}
                      >
                        {a.tag}
                      </span>
                    </div>

                    <div className="mt-3 flex items-center gap-3">
                      <span className="h-[1px] w-10 bg-white/15" />
                      <span className={`h-[1px] flex-1 ${open ? "bg-[#C6A85E]/55" : "bg-white/10"}`} />
                      <span className="text-[11px] text-white/45">0{idx + 1}</span>
                    </div>
                  </button>

                  {open && (
                    <div className="px-4 pb-4">
                      <div className="mt-1 rounded-2xl border border-white/10 bg-black/25 p-4">
                        <p className="text-[#C6A85E] text-[11px] tracking-[0.35em] uppercase">
                          Em destaque
                        </p>

                        <ul className="mt-4 space-y-3">
                          {a.bullets.map((b) => (
                            <li key={b} className="flex items-center gap-3 text-white/85">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A85E]" />
                              <span className="text-sm">{b}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-5 flex flex-col gap-2">
                          <a
                            href="#contato"
                            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl
                                       bg-[#C6A85E] text-[#0D2B4C] font-semibold hover:brightness-110 transition"
                          >
                            Agendar Atendimento <span className="text-lg">→</span>
                          </a>

                          <a
                            href="tel:+5571XXXXXXXX"
                            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl
                                       border border-white/15 text-white/90 hover:bg-white/10 transition"
                          >
                            (71) XXXX-XXXX
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* DESKTOP: lista + painel (igual ao teu, só sem hover obrigatório) */}
        <div className="mt-12 hidden lg:grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Lista */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden">
              <div className="px-7 py-5 border-b border-white/10 bg-black/20">
                <p className="text-white/70 text-sm">Selecione uma área para ver detalhes.</p>
              </div>

              <div className="divide-y divide-white/10">
                {areas.map((a, idx) => {
                  const isActive = activeId === a.id;

                  return (
                    <button
                      key={a.id}
                      onFocus={() => setActiveId(a.id)}
                      onClick={() => setActiveId(a.id)}
                      className={`w-full text-left px-7 py-6 transition-all duration-300
                        ${isActive ? "bg-black/35" : "hover:bg-black/25"}
                      `}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-3">
                            <span
                              className={`h-2 w-2 rounded-full ${
                                isActive ? "bg-[#C6A85E]" : "bg-white/25"
                              }`}
                            />
                            <p className="text-white text-lg font-semibold tracking-tight">
                              {a.title}
                            </p>
                          </div>

                          <p className="mt-2 text-white/70 text-sm leading-relaxed max-w-xl">
                            {a.subtitle}
                          </p>
                        </div>

                        <span
                          className={`shrink-0 text-xs px-3 py-1 rounded-full border transition
                            ${
                              isActive
                                ? "border-[#C6A85E]/40 text-[#C6A85E] bg-[#C6A85E]/10"
                                : "border-white/15 text-white/60 bg-white/5"
                            }`}
                        >
                          {a.tag}
                        </span>
                      </div>

                      <div className="mt-4 flex items-center gap-3">
                        <span className="h-[1px] w-10 bg-white/15" />
                        <span
                          className={`h-[1px] flex-1 ${
                            isActive ? "bg-[#C6A85E]/60" : "bg-white/10"
                          }`}
                        />
                        <span className="text-xs text-white/50">0{idx + 1}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Painel */}
          <div className="lg:col-span-5">
            <div className="relative h-full rounded-3xl border border-white/10 overflow-hidden bg-black/25 backdrop-blur-xl">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C6A85E]/12 via-transparent to-black/40" />
                <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(255,255,255,0.08),transparent)] opacity-70" />
              </div>

              <div className="relative z-10 p-8 h-full flex flex-col">
                <p className="text-[#C6A85E] text-xs tracking-[0.35em] uppercase">Em destaque</p>

                <h3 className="mt-4 text-2xl font-extrabold text-white tracking-tight">
                  {active.title}
                </h3>

                <p className="mt-3 text-white/75 leading-relaxed">{active.subtitle}</p>

                <ul className="mt-6 space-y-3">
                  {active.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-white/85">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C6A85E]" />
                      <span className="text-sm">{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <p className="text-white font-semibold">Quer iniciar agora?</p>
                    <p className="text-white/70 text-sm mt-1">
                      Clique para simular um agendamento e receber a orientação inicial.
                    </p>

                    <div className="mt-4 flex flex-col sm:flex-row gap-3">
                      <a
                        href="#contato"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl
                                   bg-[#C6A85E] text-[#0D2B4C] font-semibold hover:brightness-110 transition"
                      >
                        Agendar Atendimento <span className="text-lg">→</span>
                      </a>

                      <a
                        href="tel:+5571XXXXXXXX"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl
                                   border border-white/15 text-white/90 hover:bg-white/10 transition"
                      >
                        (71) XXXX-XXXX
                      </a>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-3 text-white/50">
                    <span className="h-[1px] w-10 bg-white/15" />
                    <span className="text-xs tracking-[0.25em] uppercase">
                      Estratégia • Técnica • Resultado
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-28 h-28 bg-[#C6A85E]/10 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
