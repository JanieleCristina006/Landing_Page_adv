import React, { useMemo, useState } from "react";

export const Contato = () => {
  const whatsappNumber = "5571XXXXXXXXX"; // só números (55 + DDD + número)
  const phoneNumber = "+55 (71) XXXX-XXXX";
  const endereco = "Salvador — BA (atendimento presencial e online)";
  const horario = "Seg a Sex · 09:00 às 18:00";

  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    area: "Família & Sucessões",
    mensagem: "",
  });

  const waLink = useMemo(() => {
    const text = `Olá, gostaria de solicitar atendimento.
Nome: ${form.nome || "-"}
Telefone: ${form.telefone || "-"}
Área: ${form.area || "-"}
Mensagem: ${form.mensagem || "-"}`.trim();

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  }, [form, whatsappNumber]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  const telHref = `tel:${phoneNumber.replace(/\D/g, "")}`;

  return (
    <section id="contato" className="relative bg-[#07090d] py-20 lg:py-28 overflow-hidden">
      {/* Fundo */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 right-[-180px] w-[520px] h-[520px] bg-[#C6A85E]/10 blur-3xl rounded-full" />
        <div className="absolute -bottom-56 left-[-160px] w-[520px] h-[520px] bg-[#C6A85E]/8 blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/65" />
        <div className="absolute inset-0 opacity-[0.12]">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <path d="M0 150H1200" stroke="white" strokeWidth="1" />
            <path d="M0 300H1200" stroke="white" strokeWidth="1" />
            <path d="M0 450H1200" stroke="white" strokeWidth="1" />
            <path d="M0 600H1200" stroke="white" strokeWidth="1" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3">
              <span className="h-[1px] w-10 bg-[#C6A85E]/70" />
              <p className="text-[#C6A85E] text-xs tracking-[0.35em] uppercase">Contato</p>
            </div>

            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.05]">
              Vamos iniciar com <span className="text-white/65">clareza e estratégia.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
              Envie uma mensagem com seu caso e receba a orientação inicial. Atendimento presencial e online.
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

        {/* Conteúdo */}
        <div className="mt-12 grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden">
              <div className="px-6 sm:px-8 py-6 border-b border-white/10 bg-black/20">
                <p className="text-white font-semibold">Descreva o que precisa</p>
                <p className="text-white/60 text-sm mt-1">
                  Quanto mais claro, melhor para direcionarmos o atendimento.
                </p>
              </div>

              <form className="p-6 sm:p-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Seu nome</label>
                    <input
                      name="nome"
                      value={form.nome}
                      onChange={handleChange}
                      placeholder="Ex: Maria Souza"
                      className="w-full rounded-xl bg-black/30 border border-white/10 text-white px-4 py-3 outline-none
                                 focus:border-[#C6A85E]/50 focus:ring-2 focus:ring-[#C6A85E]/15 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm mb-2">Telefone/WhatsApp</label>
                    <input
                      name="telefone"
                      value={form.telefone}
                      onChange={handleChange}
                      placeholder="(71) 9XXXX-XXXX"
                      className="w-full rounded-xl bg-black/30 border border-white/10 text-white px-4 py-3 outline-none
                                 focus:border-[#C6A85E]/50 focus:ring-2 focus:ring-[#C6A85E]/15 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/70 text-sm mb-2">Área de atuação</label>
                  <select
                    name="area"
                    value={form.area}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-black/30 border border-white/10 text-white px-4 py-3 outline-none
                               focus:border-[#C6A85E]/50 focus:ring-2 focus:ring-[#C6A85E]/15 transition"
                  >
                    <option>Família & Sucessões</option>
                    <option>Cível Estratégico</option>
                    <option>Contratos</option>
                    <option>Patrimonial</option>
                    <option>Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/70 text-sm mb-2">Mensagem</label>
                  <textarea
                    name="mensagem"
                    value={form.mensagem}
                    onChange={handleChange}
                    placeholder="Conte um resumo do caso e o que você precisa resolver."
                    rows={5}
                    className="w-full rounded-xl bg-black/30 border border-white/10 text-white px-4 py-3 outline-none resize-none
                               focus:border-[#C6A85E]/50 focus:ring-2 focus:ring-[#C6A85E]/15 transition"
                  />
                  <p className="mt-2 text-xs text-white/45">
                    Evite dados sensíveis. Uma triagem inicial já é suficiente.
                  </p>
                </div>

                {/* Ações */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl
                               bg-[#C6A85E] text-[#0D2B4C] font-semibold hover:brightness-110 transition"
                  >
                    Enviar no WhatsApp <span className="text-lg">→</span>
                  </a>

                  <a
                    href={telHref}
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl
                               border border-white/15 text-white/90 hover:bg-white/10 transition"
                  >
                    Ligar agora
                  </a>
                </div>

                {/* micro confiança */}
                <div className="pt-6 flex items-center gap-3 text-white/45">
                  <span className="h-[1px] w-10 bg-white/15" />
                  <span className="text-xs tracking-[0.25em] uppercase">
                    Resposta rápida • Atendimento objetivo
                  </span>
                </div>
              </form>
            </div>
          </div>

          {/* Lateral info */}
          <div className="lg:col-span-5">
            <div className="relative h-full rounded-3xl border border-white/10 overflow-hidden bg-black/25 backdrop-blur-xl">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C6A85E]/12 via-transparent to-black/40" />
              </div>

              <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
                <p className="text-[#C6A85E] text-xs tracking-[0.35em] uppercase">Informações</p>

                <h3 className="mt-4 text-2xl font-extrabold text-white tracking-tight">
                  Atendimento e canais
                </h3>

                <p className="mt-3 text-white/70 leading-relaxed">
                  Você pode iniciar por mensagem ou ligação. Caso necessário, agendamos a consulta.
                </p>

                <div className="mt-7 space-y-4">
                  <InfoRow label="WhatsApp" value="Iniciar conversa agora" />
                  <InfoRow label="Telefone" value={phoneNumber} />
                  <InfoRow label="Local" value={endereco} />
                  <InfoRow label="Horário" value={horario} />
                </div>

                <div className="mt-auto pt-8">
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <p className="text-white font-semibold">Preferência: WhatsApp</p>
                    <p className="text-white/70 text-sm mt-1">
                      Envie seu nome + resumo do caso e retornaremos com a orientação inicial.
                    </p>

                    <a
                      href={waLink}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex w-full items-center justify-center gap-2 px-6 py-4 rounded-xl
                                 bg-[#C6A85E] text-[#0D2B4C] font-semibold hover:brightness-110 transition"
                    >
                      Abrir WhatsApp <span className="text-lg">→</span>
                    </a>
                  </div>

                  <div className="mt-6 flex items-center gap-3 text-white/40">
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
};

function InfoRow({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-6 border-b border-white/10 pb-4">
      <p className="text-white/55 text-sm">{label}</p>
      <p className="text-white text-sm font-medium text-right">{value}</p>
    </div>
  );
}
