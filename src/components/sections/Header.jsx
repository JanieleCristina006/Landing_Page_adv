import { useEffect, useState } from "react";
import logo from "../../assets/logo02.png";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // trava scroll quando menu abre
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const navItems = [
    { label: "Serviços", href: "#servicos" },
    { label: "Áreas de Atuação", href: "#areas" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-6 py-4 flex items-center justify-between">
          {/* LOGO */}
          <a href="#home">
            <img
              src={logo}
              alt="Vinícius Ramos Advocacia"
              className="h-14 lg:h-16 w-auto object-contain transition hover:scale-105"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-10 text-sm font-medium text-white/90">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative group hover:text-[#C6A85E] transition"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C6A85E] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+5571XXXXXXX"
              className="text-sm text-white/70 hover:text-[#C6A85E] transition"
            >
              (71) XXXX-XXXX
            </a>

            <a
              href="#contato"
              className="bg-[#C6A85E] hover:brightness-110 transition px-6 py-3 rounded-xl text-sm font-semibold text-[#0D2B4C]"
            >
              Solicitar Atendimento
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden relative w-8 h-8 flex items-center justify-center"
          >
            <span
              className={`absolute w-6 h-[2px] bg-white transition-all duration-300 ${
                open ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute w-6 h-[2px] bg-white transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute w-6 h-[2px] bg-white transition-all duration-300 ${
                open ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/90 backdrop-blur-2xl" />

        <div className="relative h-full flex flex-col justify-center items-center text-white space-y-8 text-xl">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="hover:text-[#C6A85E] transition"
            >
              {item.label}
            </a>
          ))}

          <div className="mt-10 flex flex-col gap-4 items-center">
            <a
              href="tel:+5571XXXXXXX"
              className="text-white/70"
            >
              (71) XXXX-XXXX
            </a>

            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="bg-[#C6A85E] px-8 py-4 rounded-xl text-[#0D2B4C] font-semibold"
            >
              Solicitar Atendimento
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
