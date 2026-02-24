// src/sections/Servicos.jsx
import React from "react";
import {
  MessageCircle,
  Calendar,
  ClipboardList,
  Gavel,
  FileSignature,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export const Servicos = () => {
  const entregas = [
    {
      icon: <FileSignature className="h-5 w-5" />,
      titulo: "Análise do caso & estratégia",
      descricao:
        "Diagnóstico objetivo do cenário, riscos e caminhos possíveis — com plano de ação claro.",
      tag: "Triagem",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      titulo: "Acordos e negociações",
      descricao:
        "Condução firme para reduzir desgaste, proteger patrimônio e acelerar soluções quando viável.",
      tag: "Extrajudicial",
    },
    {
      icon: <Gavel className="h-5 w-5" />,
      titulo: "Ações e defesas judiciais",
      descricao:
        "Atuação técnica do início ao fim: petições, audiências, provas e posicionamento estratégico.",
      tag: "Contencioso",
    },
  ];

  const passos = [
    {
      icon: <MessageCircle className="h-5 w-5" />,
      titulo: "1) Você explica o caso",
      descricao:
        "Pelo WhatsApp ou formulário. Quanto mais claro, melhor para direcionarmos.",
    },
    {
      icon: <ClipboardList className="h-5 w-5" />,
      titulo: "2) Diagnóstico e direcionamento",
      descricao:
        "Você recebe orientação inicial e os próximos passos com transparência.",
    },
    {
      icon: <Gavel className="h-5 w-5" />,
      titulo: "3) Execução com acompanhamento",
      descricao:
        "Estratégia definida, prazos sob controle e atualizações contínuas.",
    },
  ];

  return (
    <section id="servicos" className="relative py-24 text-white">
      {/* Fundo */}
      <div className="absolute inset-0 bg-[#05070B]" />
      <div className="absolute inset-0 bg-[radial-gradient(900px_380px_at_18%_20%,rgba(198,168,94,0.12),transparent_60%),radial-gradient(900px_420px_at_85%_75%,rgba(13,43,76,0.45),transparent_55%)]" />
      <div className="absolute inset-0 opacity-[0.10] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Cabeçalho */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-[1px] w-10 bg-[#C6A85E]/70" />
              <span className="text-xs tracking-[0.35em] uppercase text-[#C6A85E]/80">
                Serviços
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-[1.05]">
              Clareza no início.
              <br />
              <span className="text-[#C6A85E]">Firmeza na condução.</span>
            </h2>

            <p className="mt-5 text-white/70 text-base md:text-lg leading-relaxed">
              Atendimento objetivo e estratégico — você entende o caminho antes
              de qualquer decisão. Quando necessário, seguimos com postura
              técnica e foco em resultado.
            </p>
          </div>

          {/* Selo */}
          <div className="lg:w-[360px]">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full grid place-items-center bg-white/5 border border-white/10 text-[#C6A85E]">
                  <ShieldCheck className="h-5 w-5" />
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

        {/* Conteúdo */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Entregas */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-white/[0.035] backdrop-blur-xl overflow-hidden shadow-[0_28px_120px_rgba(0,0,0,0.55)]">
              <div className="p-7 md:p-9">
                <p className="text-sm text-white/60 mb-7">
                  O que você pode esperar do atendimento:
                </p>

                <div className="space-y-4">
                  {entregas.map((item, i) => (
                    <div
                      key={i}
                      className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 hover:border-[#C6A85E]/35 transition"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className="h-11 w-11 rounded-xl grid place-items-center bg-[#C6A85E]/10 border border-[#C6A85E]/25 text-[#C6A85E] shrink-0">
                            {item.icon}
                          </div>

                          <div>
                            <h3 className="text-lg md:text-xl font-semibold leading-snug">
                              {item.titulo}
                            </h3>
                            <p className="mt-2 text-sm md:text-[15px] text-white/65 leading-relaxed">
                              {item.descricao}
                            </p>
                          </div>
                        </div>

                        <span className="shrink-0 text-[11px] px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/70 whitespace-nowrap">
                          {item.tag}
                        </span>
                      </div>

                      <div className="mt-5 h-px bg-gradient-to-r from-transparent via-[#C6A85E]/25 to-transparent opacity-0 group-hover:opacity-100 transition" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Rodapé */}
              <div className="px-7 md:px-9 py-6 border-t border-white/10 bg-black/20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <p className="text-sm text-white/65">
                    Quer começar agora? Envie sua demanda e receba orientação
                    inicial.
                  </p>

                  <a
                    href="#contato"
                    className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 bg-[#C6A85E] text-[#0A2240] font-semibold hover:brightness-95 transition whitespace-nowrap min-w-[210px] w-full md:w-auto"
                  >
                    Solicitar atendimento
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Como funciona */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-7 md:p-9 shadow-[0_28px_120px_rgba(0,0,0,0.55)]">
              <div className="flex items-center justify-between mb-7">
                <p className="text-xs tracking-[0.35em] uppercase text-[#C6A85E]/80">
                  Como funciona
                </p>
                <span className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/70 whitespace-nowrap">
                  Rápido e objetivo
                </span>
              </div>

              <div className="space-y-5">
                {passos.map((p, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="relative shrink-0">
                      <div className="h-10 w-10 rounded-xl grid place-items-center bg-white/5 border border-white/10 text-[#C6A85E]">
                        {p.icon}
                      </div>
                      {i !== passos.length - 1 && (
                        <div className="absolute left-1/2 -translate-x-1/2 top-10 h-8 w-px bg-gradient-to-b from-white/20 to-transparent" />
                      )}
                    </div>

                    <div className="pt-1">
                      <p className="font-semibold">{p.titulo}</p>
                      <p className="mt-1 text-sm text-white/65 leading-relaxed">
                        {p.descricao}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-5">
                <p className="text-sm text-white/70">
                  <span className="text-white font-semibold">Preferência:</span>{" "}
                  WhatsApp para agilidade. Se necessário, agendamos a consulta.
                </p>

                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                  <a
  href="https://wa.me/5571999999999"
  target="_blank"
  rel="noopener noreferrer"
  className="
    inline-flex items-center justify-center gap-3
    rounded-full px-6 py-3
    border border-white/12 bg-white/5
    hover:bg-[#25D366]/10 hover:border-[#25D366]/40
    transition-all duration-300
    whitespace-nowrap min-w-[220px]
    w-full sm:w-auto
  "
>
  <span className="flex items-center justify-center h-5 w-5 shrink-0">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      className="h-5 w-5"
    >
      <path fill="#fff" d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"/>
      <path fill="#40c351" d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8l6-1.6l0.6,0.3c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"/>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8C20.6,19.3,19.7,17,19.3,16z"
        clipRule="evenodd"
      />
    </svg>
  </span>

  <span className="font-medium">
    Iniciar pelo WhatsApp
  </span>
</a>

                  {/* <a
                    href="#contato"
                    className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 border border-[#C6A85E]/30 bg-[#C6A85E]/10 hover:bg-[#C6A85E]/15 transition text-[#C6A85E] font-semibold whitespace-nowrap min-w-[190px] w-full sm:w-auto"
                    aria-label="Agendar triagem"
                  >
                    <Calendar className="h-4 w-4 shrink-0" />
                    <span>Agendar triagem</span>
                    <ArrowRight className="h-4 w-4 shrink-0 opacity-90" />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};