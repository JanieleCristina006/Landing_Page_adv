import { useMemo, useState } from "react";
import { ArrowRight, ShieldCheck, Gavel, FileText, Landmark } from "lucide-react";

export function AreasAtuacao() {
  const areas = useMemo(
    () => [
      {
        id: "familia",
        icon: <ShieldCheck className="h-5 w-5" />,
        title: "Família & Sucessões",
        subtitle: "Decisões sensíveis com condução segura e estratégia firme.",
        bullets: ["Divórcio e partilha", "Guarda e convivência", "Pensão", "Inventário"],
        tag: "Alta urgência",
      },
      {
        id: "civel",
        icon: <Gavel className="h-5 w-5" />,
        title: "Cível Estratégico",
        subtitle: "Ações e defesas com foco em previsibilidade e resultado.",
        bullets: ["Indenizações", "Cobranças", "Responsabilidade civil", "Tutelas de urgência"],
        tag: "Contencioso",
      },
      {
        id: "contratos",
        icon: <FileText className="h-5 w-5" />,
        title: "Contratos",
        subtitle: "Clareza e blindagem: contrato não é detalhe.",
        bullets: ["Revisão", "Elaboração", "Aditivos", "Cláusulas de risco"],
        tag: "Preventivo",
      },
      {
        id: "patrimonial",
        icon: <Landmark className="h-5 w-5" />,
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
    <section id="areas" className="relative overflow-hidden bg-[#05070B] text-white">
      {/* Fundo clean (menos ruído) */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_15%_15%,rgba(198,168,94,0.14),transparent_55%),radial-gradient(900px_420px_at_85%_75%,rgba(13,43,76,0.38),transparent_55%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 py-16 sm:py-20 lg:py-24">
        {/* Cabeçalho */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-[1px] w-10 bg-[#C6A85E]/70" />
              <span className="text-xs tracking-[0.35em] uppercase text-[#C6A85E]/80">
                Áreas de atuação
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-[1.05]">
              A condução jurídica certa{" "}
              <span className="text-white/60">muda o jogo.</span>
            </h2>

            <p className="mt-5 text-white/70 text-base md:text-lg leading-relaxed">
              Atuação técnica em casos familiares, cíveis e patrimoniais — com linguagem clara,
              estratégia e postura firme em cada etapa.
            </p>
          </div>

          {/* Selo (mais limpo) */}
          <div className="lg:w-[360px]">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full grid place-items-center bg-white/5 border border-white/10 text-[#C6A85E]">
                  <span className="font-semibold">VR</span>
                </div>
                <div>
                  <p className="font-semibold">Atendimento Premium</p>
                  <p className="text-sm text-white/65">
                    Triagem rápida, orientação inicial e acompanhamento próximo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE (coeso): accordion com o mesmo “painel” */}
        <div className="mt-10 lg:hidden space-y-3">
          {areas.map((a) => {
            const open = a.id === activeId;

            return (
              <div
                key={a.id}
                className={[
                  "rounded-2xl border overflow-hidden backdrop-blur-xl transition",
                  open ? "border-[#C6A85E]/30 bg-white/[0.05]" : "border-white/10 bg-white/[0.03]",
                ].join(" ")}
              >
                <button
                  onClick={() => setActiveId(open ? "" : a.id)}
                  className="w-full text-left p-5"
                  aria-expanded={open}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div
                        className={[
                          "h-10 w-10 rounded-xl grid place-items-center border shrink-0",
                          open
                            ? "border-[#C6A85E]/30 bg-[#C6A85E]/10 text-[#C6A85E]"
                            : "border-white/10 bg-white/5 text-white/80",
                        ].join(" ")}
                      >
                        {a.icon}
                      </div>

                      <div>
                        <p className="font-semibold text-white leading-tight">{a.title}</p>
                        <p className="mt-1 text-sm text-white/65 leading-relaxed">{a.subtitle}</p>
                      </div>
                    </div>

                    <span
                      className={[
                        "shrink-0 text-[11px] px-3 py-1 rounded-full border whitespace-nowrap",
                        open
                          ? "border-[#C6A85E]/35 text-[#C6A85E] bg-[#C6A85E]/10"
                          : "border-white/15 text-white/60 bg-white/5",
                      ].join(" ")}
                    >
                      {a.tag}
                    </span>
                  </div>
                </button>

                {open && (
                  <div className="px-5 pb-5">
                    <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
                      <p className="text-[#C6A85E] text-[11px] tracking-[0.35em] uppercase">
                        Principais frentes
                      </p>

                      <ul className="mt-4 space-y-3">
                        {a.bullets.map((b) => (
                          <li key={b} className="flex items-center gap-3 text-white/85">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A85E]" />
                            <span className="text-sm">{b}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 flex flex-col gap-3">
                        <a
                          href="#contato"
                          className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 bg-[#C6A85E] text-[#0D2B4C] font-semibold hover:brightness-110 transition"
                        >
                          Solicitar atendimento
                          <ArrowRight className="h-4 w-4" />
                        </a>

                        <a
                          href="tel:+5571XXXXXXXX"
                          className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 border border-white/15 text-white/90 hover:bg-white/10 transition"
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

        {/* DESKTOP: tabs (esquerda) + painel (direita) */}
        <div className="mt-12 hidden lg:grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Lista / Tabs */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden shadow-[0_28px_120px_rgba(0,0,0,0.55)]">
              <div className="px-7 py-5 border-b border-white/10 bg-black/20">
                <p className="text-white/70 text-sm">Selecione uma área para ver detalhes.</p>
              </div>

              <div className="divide-y divide-white/10">
                {areas.map((a, idx) => {
                  const isActive = a.id === activeId;

                  return (
                    <button
                      key={a.id}
                      onClick={() => setActiveId(a.id)}
                      className={[
                        "w-full text-left px-7 py-6 transition",
                        isActive ? "bg-white/[0.05]" : "hover:bg-white/[0.04]",
                      ].join(" ")}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div
                            className={[
                              "h-11 w-11 rounded-xl grid place-items-center border shrink-0",
                              isActive
                                ? "border-[#C6A85E]/30 bg-[#C6A85E]/10 text-[#C6A85E]"
                                : "border-white/10 bg-white/5 text-white/80",
                            ].join(" ")}
                          >
                            {a.icon}
                          </div>

                          <div>
                            <p className="text-white text-lg font-semibold tracking-tight">
                              {a.title}
                            </p>
                            <p className="mt-2 text-white/65 text-sm leading-relaxed max-w-xl">
                              {a.subtitle}
                            </p>
                          </div>
                        </div>

                        <span
                          className={[
                            "shrink-0 text-xs px-3 py-1 rounded-full border whitespace-nowrap",
                            isActive
                              ? "border-[#C6A85E]/35 text-[#C6A85E] bg-[#C6A85E]/10"
                              : "border-white/15 text-white/60 bg-white/5",
                          ].join(" ")}
                        >
                          {a.tag}
                        </span>
                      </div>

                      <div className="mt-4 flex items-center gap-3">
                        <span className="h-[1px] w-10 bg-white/15" />
                        <span
                          className={[
                            "h-[1px] flex-1 transition",
                            isActive ? "bg-[#C6A85E]/60" : "bg-white/10",
                          ].join(" ")}
                        />
                        <span className="text-xs text-white/45">0{idx + 1}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Painel */}
          <div className="lg:col-span-5">
            <div className="relative h-full rounded-3xl border border-white/10 overflow-hidden bg-white/[0.03] backdrop-blur-xl shadow-[0_28px_120px_rgba(0,0,0,0.55)]">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C6A85E]/12 via-transparent to-black/35" />
                <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#C6A85E]/10 blur-3xl rounded-full" />
              </div>

              <div className="relative z-10 p-8 h-full flex flex-col">
                <p className="text-[#C6A85E] text-xs tracking-[0.35em] uppercase">Em destaque</p>

                <div className="mt-4 flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl grid place-items-center bg-[#C6A85E]/10 border border-[#C6A85E]/25 text-[#C6A85E]">
                    {active.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-white tracking-tight">
                      {active.title}
                    </h3>
                    <p className="mt-2 text-white/75 leading-relaxed">{active.subtitle}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-white/70 text-sm">Principais frentes:</p>
                  <ul className="mt-4 space-y-3">
                    {active.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-3 text-white/85">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C6A85E]" />
                        <span className="text-sm">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-8">
                  <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
                    <p className="text-white font-semibold">Quer iniciar agora?</p>
                    <p className="text-white/70 text-sm mt-1">
                      Envie sua demanda e receba orientação inicial.
                    </p>

                    <div className="mt-4 flex flex-col sm:flex-row gap-3">
                      <a
                        href="#contato"
                        className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 bg-[#C6A85E] text-[#0D2B4C] font-semibold hover:brightness-110 transition whitespace-nowrap"
                      >
                        Solicitar atendimento
                        <ArrowRight className="h-4 w-4" />
                      </a>

                      <a
                        href="tel:+5571XXXXXXXX"
                        className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 border border-white/15 text-white/90 hover:bg-white/10 transition whitespace-nowrap"
                      >
                        (71) XXXX-XXXX
                      </a>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-3 text-white/45">
                    <span className="h-[1px] w-10 bg-white/15" />
                    <span className="text-xs tracking-[0.25em] uppercase">
                      Estratégia • Técnica • Resultado
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Painel */}
        </div>
      </div>
    </section>
  );
}