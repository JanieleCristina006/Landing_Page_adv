import { useEffect, useRef, useState } from "react";
import { CalendarDays } from "lucide-react";

const AREAS = ["Direito de Família", "Direito Cível", "Direito Patrimonial", "Outro"];
const DIAS = ["Hoje", "Amanhã", "Esta semana"];
const HORARIOS = ["09:00", "11:00", "14:00", "16:00"];

export function ChatAgendamento() {
  const [open, setOpen] = useState(false);

  const [step, setStep] = useState("start"); // start | nome | area | dia | hora | confirm
  const [nome, setNome] = useState("");
  const [area, setArea] = useState("");
  const [dia, setDia] = useState("");
  const [hora, setHora] = useState("");

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Olá! 👋 Posso simular um agendamento rapidinho. Vamos começar?" },
  ]);

  const endRef = useRef(null);

  const botSay = (text) =>
    setMessages((prev) => [...prev, { from: "bot", text }]);

  const userSay = (text) =>
    setMessages((prev) => [...prev, { from: "user", text }]);

  useEffect(() => {
    if (!open) return;
    setTimeout(() => endRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
  }, [messages, open]);

  const openChat = () => {
    setOpen(true);

    // se estiver no começo, dispara o fluxo
    if (step === "start") {
      setTimeout(() => {
        botSay("Qual seu nome?");
        setStep("nome");
      }, 350);
    }
  };

  const resetChat = () => {
    setOpen(false);
    setStep("start");
    setNome("");
    setArea("");
    setDia("");
    setHora("");
    setInput("");
    setMessages([
      { from: "bot", text: "Olá! 👋 Posso simular um agendamento rapidinho. Vamos começar?" },
    ]);
  };

  const goWhatsApp = () => {
    const phone = "5571XXXXXXXXX"; // <-- coloque seu número com DDI+DDD
    const text = `Olá! Quero agendar um atendimento.\n\nNome: ${nome}\nÁrea: ${area}\nDia: ${dia}\nHorário: ${hora}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const handleSend = (e) => {
    e?.preventDefault();
    const value = input.trim();
    if (!value) return;

    // Só usamos texto livre no passo "nome"
    if (step === "nome") {
      userSay(value);
      setNome(value);
      setInput("");

      setTimeout(() => {
        botSay(`Perfeito, ${value}! Agora selecione a área:`);
        setStep("area");
      }, 350);

      return;
    }

    // nos outros passos, pedimos clique nos botões
    userSay(value);
    setInput("");
    setTimeout(() => botSay("Use as opções abaixo para continuar 🙂"), 250);
  };

  const pickArea = (v) => {
    userSay(v);
    setArea(v);
    setTimeout(() => {
      botSay("Ótimo. Qual dia você prefere?");
      setStep("dia");
    }, 300);
  };

  const pickDia = (v) => {
    userSay(v);
    setDia(v);
    setTimeout(() => {
      botSay("Perfeito. Escolha um horário:");
      setStep("hora");
    }, 300);
  };

  const pickHora = (v) => {
    userSay(v);
    setHora(v);
    setTimeout(() => {
      botSay(
        `Confirma o agendamento?\n\n• Nome: ${nome}\n• Área: ${area}\n• Dia: ${dia}\n• Horário: ${v}`
      );
      setStep("confirm");
    }, 300);
  };

  const confirm = () => {
    userSay("Confirmar ✅");
    setTimeout(() => {
      botSay("Perfeito! Vou abrir o WhatsApp com a mensagem pronta.");
      setTimeout(goWhatsApp, 450);
    }, 300);
  };

  const cancel = () => {
    userSay("Alterar ❌");
    setTimeout(() => {
      botSay("Sem problemas. Vamos escolher a área novamente:");
      setArea("");
      setDia("");
      setHora("");
      setStep("area");
    }, 300);
  };

  return (
    <>
      {/* Botão flutuante */}
      <button
        onClick={openChat}
        className="fixed bottom-6 right-6 z-[999] rounded-full px-5 py-4 shadow-2xl
                   bg-[#C6A85E] text-[#0D2B4C] font-semibold hover:brightness-110
                   transition flex items-center gap-2"
      >
         <CalendarDays size={18} />
         Agendar Atendimento
      </button>

      {/* Janela do chat */}
      {open && (
        <div className="fixed bottom-24 right-6 z-[999] w-[340px] sm:w-[380px]">
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0b0f16]/80 backdrop-blur-xl">
            {/* Header do chat */}
            <div className="px-4 py-3 flex items-center justify-between bg-black/30 border-b border-white/10">
              <div className="text-white">
                <p className="text-sm font-semibold">Atendimento</p>
                <p className="text-xs text-white/70">Simulação de agendamento</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={resetChat}
                  className="text-xs px-3 py-1 rounded-lg border border-white/15 text-white/80 hover:bg-white/10 transition"
                >
                  Reiniciar
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="text-white/80 hover:text-white text-lg leading-none"
                  aria-label="Fechar"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Mensagens */}
            <div className="max-h-[340px] overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line
                      ${
                        m.from === "user"
                          ? "bg-[#C6A85E] text-[#0D2B4C]"
                          : "bg-white/10 text-white"
                      }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              <div ref={endRef} />
            </div>

            {/* Opções por etapa */}
            <div className="px-4 pb-4">
              {step === "area" && (
                <div className="flex flex-wrap gap-2">
                  {AREAS.map((v) => (
                    <button
                      key={v}
                      onClick={() => pickArea(v)}
                      className="text-xs px-3 py-2 rounded-xl border border-white/15 text-white/90 hover:bg-white/10 transition"
                    >
                      {v}
                    </button>
                  ))}
                </div>
              )}

              {step === "dia" && (
                <div className="flex flex-wrap gap-2">
                  {DIAS.map((v) => (
                    <button
                      key={v}
                      onClick={() => pickDia(v)}
                      className="text-xs px-3 py-2 rounded-xl border border-white/15 text-white/90 hover:bg-white/10 transition"
                    >
                      {v}
                    </button>
                  ))}
                </div>
              )}

              {step === "hora" && (
                <div className="flex flex-wrap gap-2">
                  {HORARIOS.map((v) => (
                    <button
                      key={v}
                      onClick={() => pickHora(v)}
                      className="text-xs px-3 py-2 rounded-xl border border-white/15 text-white/90 hover:bg-white/10 transition"
                    >
                      {v}
                    </button>
                  ))}
                </div>
              )}

              {step === "confirm" && (
                <div className="flex gap-2">
                  <button
                    onClick={confirm}
                    className="flex-1 text-sm px-4 py-3 rounded-xl bg-[#C6A85E] text-[#0D2B4C] font-semibold hover:brightness-110 transition"
                  >
                    Confirmar
                  </button>
                  <button
                    onClick={cancel}
                    className="flex-1 text-sm px-4 py-3 rounded-xl border border-white/15 text-white hover:bg-white/10 transition"
                  >
                    Alterar
                  </button>
                </div>
              )}

              {/* Input (somente nome) */}
              {(step === "nome" || step === "start") && (
                <form onSubmit={handleSend} className="mt-3 flex gap-2">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={step === "nome" ? "Digite seu nome..." : "Clique em Agendar"}
                    className="flex-1 bg-black/30 border border-white/10 rounded-xl px-3 py-3 text-sm text-white placeholder:text-white/50 outline-none focus:border-[#C6A85E]/60"
                  />
                  <button
                    type="submit"
                    className="px-4 py-3 rounded-xl bg-white/10 text-white hover:bg-white/15 transition"
                  >
                    Enviar
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
