import { useEffect, useMemo, useState } from "react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const navItems = useMemo(
    () => [
      { label: "Serviços", href: "#servicos" },
      { label: "Áreas de Atuação", href: "#areas" },
      { label: "Sobre", href: "#sobre" },
      { label: "Contato", href: "#contato" },
    ],
    []
  );

  // Scroll -> background do header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava scroll quando menu abre
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // ESC fecha menu
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Scroll Spy (marca seção ativa)
  useEffect(() => {
    const ids = ["home", "servicos", "areas", "sobre", "contato"];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!els.length) return;

    const headerOffset = 120; // ajusta se quiser

    const onScroll = () => {
      const y = window.scrollY + headerOffset;

      // pega a última seção cujo topo já passou
      let current = "home";
      for (const el of els) {
        if (el.offsetTop <= y) current = el.id;
      }
      setActive(`#${current}`);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (href) => {
    setOpen(false);
    setActive(href);

    const id = href.replace("#", "");
    const el = document.getElementById(id);

    if (!el) {
      // fallback: comportamento normal do anchor
      window.location.hash = href;
      return;
    }

    const headerH = 96; // h-24
    const top = el.getBoundingClientRect().top + window.pageYOffset - headerH;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const isActive = (href) => active === href;

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">
        <div
          className={[
            "transition-all duration-500",
            scrolled
              ? "bg-black/75 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
              : "bg-black/25 backdrop-blur-sm",
          ].join(" ")}
        >
          <div className="max-w-7xl mx-auto px-5 lg:px-6 h-20 sm:h-24 flex items-center justify-between">
            {/* LOGO TIPOGRÁFICA */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                goTo("#home");
              }}
              className="flex flex-col leading-none select-none"
              aria-label="Ir para o início"
            >
              <span className="text-lg sm:text-xl md:text-2xl font-serif font-semibold tracking-wide text-white">
                Vinícius Ramos
              </span>
              <span className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-[#C6A85E] mt-1">
                Advogados Associados
              </span>
            </a>

            {/* Desktop NAV */}
            <nav className="hidden lg:flex items-center gap-10 text-sm font-medium">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => goTo(item.href)}
                  className={[
                    "relative transition",
                    "text-white/85 hover:text-[#C6A85E]",
                    isActive(item.href) ? "text-[#C6A85E]" : "",
                  ].join(" ")}
                >
                  {item.label}

                  {/* underline */}
                  <span
                    className={[
                      "absolute -bottom-2 left-0 h-[2px] bg-[#C6A85E] transition-all duration-300",
                      isActive(item.href) ? "w-full" : "w-0",
                    ].join(" ")}
                  />
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="tel:+5571XXXXXXX"
                className="text-sm text-white/65 hover:text-[#C6A85E] transition whitespace-nowrap"
              >
                (71) XXXX-XXXX
              </a>

              <button
                onClick={() => goTo("#contato")}
                className="inline-flex items-center justify-center bg-[#C6A85E] hover:brightness-110 transition px-6 py-3 rounded-xl text-sm font-semibold text-[#0D2B4C] whitespace-nowrap"
              >
                Solicitar Atendimento
              </button>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden relative w-10 h-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition flex items-center justify-center"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
            >
              <span
                className={[
                  "absolute w-6 h-[2px] bg-white transition-all duration-300",
                  open ? "rotate-45" : "-translate-y-2",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute w-6 h-[2px] bg-white transition-all duration-300",
                  open ? "opacity-0" : "opacity-100",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute w-6 h-[2px] bg-white transition-all duration-300",
                  open ? "-rotate-45" : "translate-y-2",
                ].join(" ")}
              />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={[
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <div
          className="absolute inset-0 bg-black/85 backdrop-blur-2xl"
          onClick={() => setOpen(false)}
        />

        <div
          className={[
            "absolute right-0 top-0 h-full w-[86%] max-w-sm",
            "bg-[#070A10]/80 backdrop-blur-2xl border-l border-white/10",
            "shadow-[0_40px_120px_rgba(0,0,0,0.6)]",
            "transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          <div className="h-20 sm:h-24 px-6 flex items-center justify-between border-b border-white/10">
            <span className="text-xs tracking-[0.35em] uppercase text-white/60">
              Menu
            </span>

            <button
              onClick={() => setOpen(false)}
              className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition grid place-items-center"
              aria-label="Fechar menu"
            >
              <span className="absolute w-5 h-[2px] bg-white rotate-45" />
              <span className="absolute w-5 h-[2px] bg-white -rotate-45" />
            </button>
          </div>

          <div className="px-6 py-8 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => goTo(item.href)}
                className={[
                  "text-left rounded-xl px-4 py-3 transition",
                  "border border-white/10 bg-white/5 hover:bg-white/10",
                  isActive(item.href)
                    ? "border-[#C6A85E]/40 bg-[#C6A85E]/10 text-[#C6A85E]"
                    : "text-white/90",
                ].join(" ")}
              >
                {item.label}
              </button>
            ))}

            <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-4">
              <a
                href="tel:+5571XXXXXXX"
                className="text-white/70 hover:text-white transition whitespace-nowrap"
              >
                (71) XXXX-XXXX
              </a>

              <button
                onClick={() => goTo("#contato")}
                className="bg-[#C6A85E] px-6 py-4 rounded-xl text-[#0D2B4C] font-semibold text-center"
              >
                Solicitar Atendimento
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};