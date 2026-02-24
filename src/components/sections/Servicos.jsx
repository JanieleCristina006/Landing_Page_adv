import React, { useMemo } from "react";
import {
  ShieldCheck,
  ArrowRight,
  Calendar,
  FileSignature,
  Gavel,
  Handshake,
} from "lucide-react";

export const Servicos = () => {
  const entregas = useMemo(
    () => [
      {
        titulo: "Diagnóstico estratégico do caso",
        descricao:
          "Analisamos o cenário, riscos e objetivos para definir a melhor rota — com clareza do que é possível e do que é prioridade.",
        icon: <FileSignature className="h-5 w-5" />,
      },
      {
        titulo: "Negociação e acordos com firmeza",
        descricao:
          "Buscamos soluções com menos desgaste e mais previsibilidade, protegendo patrimônio e reduzindo tempo quando viável.",
        icon: <Handshake className="h-5 w-5" />,
      },
      {
        titulo: "Execução jurídica com acompanhamento",
        descricao:
          "Se precisar judicializar, conduzimos com técnica do início ao fim: peças, audiências, provas e atualizações contínuas.",
        icon: <Gavel className="h-5 w-5" />,
      },
    ],
    []
  );

  return (
    <section id="servicos" className="relative py-20 sm:py-24 lg:py-28 text-white">
      {/* Fundo (mesmo DNA do resto) */}
      <div className="absolute inset-0 bg-[#05070B]" />
      <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_18%_22%,rgba(198,168,94,0.12),transparent_60%),radial-gradient(900px_520px_at_85%_75%,rgba(13,43,76,0.42),transparent_55%)]" />
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
              Um processo objetivo para você entender o caminho antes de qualquer decisão —
              com postura técnica e foco em resultado quando necessário.
            </p>
          </div>

          {/* Selo Premium */}
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

        {/* Conteúdo: Timeline + Card CTA */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Timeline (estilo do print) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-7 sm:p-9 shadow-[0_28px_120px_rgba(0,0,0,0.55)]">
              <p className="text-sm text-white/60 mb-8">
                O que você recebe no atendimento:
              </p>

              <div className="space-y-10">
                {entregas.map((item, idx) => {
                  const n = idx + 1;
                  return (
                    <div key={n} className="relative pl-16 sm:pl-20">
                      {/* Linha vertical dourada */}
                      {n !== entregas.length && (
                        <div className="absolute left-6 sm:left-7 top-14 bottom-[-40px] w-px bg-gradient-to-b from-[#C6A85E]/60 to-transparent" />
                      )}

                      {/* Círculo com número */}
                      <div className="absolute left-0 top-0">
                        <div className="h-14 w-14 rounded-full border border-white/35 bg-black/40 grid place-items-center">
                          <span className="text-[#C6A85E] font-semibold text-xl">
                            {n}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        {/* Icon mini */}
                        <div className="mt-1 h-10 w-10 rounded-xl grid place-items-center border border-white/10 bg-white/5 text-[#C6A85E] shrink-0">
                          {item.icon}
                        </div>

                        <div className="min-w-0">
                          <h3 className="text-xl sm:text-2xl font-semibold leading-snug">
                            {item.titulo}
                          </h3>
                          <p className="mt-2 text-sm sm:text-[15px] text-white/70 leading-relaxed">
                            {item.descricao}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA no fim da timeline */}
              <div className="mt-10 pt-7 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-sm text-white/65">
                  Quer começar agora? Envie sua demanda e receba orientação inicial.
                </p>

                <a
                  href="#contato"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 bg-[#C6A85E] text-[#0A2240] font-semibold hover:brightness-95 transition whitespace-nowrap w-full sm:w-auto"
                >
                  Solicitar atendimento
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </a>
              </div>
            </div>
          </div>

          {/* Card de Preferência / WhatsApp + Agendar */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-7 sm:p-9 shadow-[0_28px_120px_rgba(0,0,0,0.55)]">
              <div className="flex items-center justify-between mb-6">
                <p className="text-xs tracking-[0.35em] uppercase text-[#C6A85E]/80">
                  Início rápido
                </p>
                <span className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/70 whitespace-nowrap">
                  Sem enrolação
                </span>
              </div>

              <h3 className="text-2xl font-semibold leading-tight">
                Preferência: WhatsApp.
              </h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                Para agilizar a triagem e orientar os próximos passos. Se necessário, agendamos a consulta.
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-5">
                <div className="flex flex-col gap-3">
                  {/* WhatsApp com seu SVG */}
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
                      whitespace-nowrap w-full
                    "
                  >
                    <span className="flex items-center justify-center h-5 w-5 shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        className="h-5 w-5"
                      >
                        <path
                          fill="#fff"
                          d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"
                        />
                        <path
                          fill="#40c351"
                          d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8l6-1.6l0.6,0.3c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"
                        />
                        <path
                          fill="#fff"
                          fillRule="evenodd"
                          d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8C20.6,19.3,19.7,17,19.3,16z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>

                    <span className="font-medium">Iniciar pelo WhatsApp</span>
                  </a>

                  {/* Agendar triagem */}
                  <a
                    href="#contato"
                    className="
                      inline-flex items-center justify-center gap-2
                      rounded-full px-6 py-3
                      border border-[#C6A85E]/30 bg-[#C6A85E]/10
                      hover:bg-[#C6A85E]/15 transition
                      text-[#C6A85E] font-semibold
                      whitespace-nowrap w-full
                    "
                    aria-label="Agendar triagem"
                  >
                    <Calendar className="h-4 w-4 shrink-0" />
                    <span>Agendar triagem</span>
                    <ArrowRight className="h-4 w-4 shrink-0 opacity-90" />
                  </a>
                </div>

                <div className="mt-5 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <p className="mt-4 text-xs text-white/55 leading-relaxed">
                  Atendimento com linguagem clara e postura técnica, respeitando a ética e a discrição do escritório.
                </p>
              </div>
            </div>
          </div>
          {/* /Card */}
        </div>
      </div>
    </section>
  );
};