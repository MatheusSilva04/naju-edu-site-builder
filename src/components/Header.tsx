import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo-naju.jpeg";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="NAJU.Educa" className="h-10 w-10 rounded-lg object-cover" />
          <span className="font-heading font-bold text-xl text-foreground">
            NAJU<span className="text-primary">.Educa</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("home")} className="font-body font-medium text-foreground hover:text-primary transition-colors">
            Home
          </button>
          <button onClick={() => scrollToSection("sobre")} className="font-body font-medium text-foreground hover:text-primary transition-colors">
            Sobre
          </button>
          <Link to="/produtos" className="font-body font-semibold text-primary-foreground bg-primary px-5 py-2 rounded-lg hover:opacity-90 transition-opacity">
            Produtos
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4 flex flex-col gap-3">
          <button onClick={() => scrollToSection("home")} className="font-body font-medium text-foreground py-2 text-left">
            Home
          </button>
          <button onClick={() => scrollToSection("sobre")} className="font-body font-medium text-foreground py-2 text-left">
            Sobre
          </button>
          <Link to="/produtos" onClick={() => setMobileOpen(false)} className="font-body font-semibold text-primary-foreground bg-primary px-5 py-2 rounded-lg text-center">
            Produtos
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
