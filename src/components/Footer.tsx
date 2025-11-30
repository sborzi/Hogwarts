import { Link } from "wouter";
import { Sparkles } from "lucide-react";

export function Footer() {
  const exploreLinks = [
    { href: "/", label: "Главная" },
    { href: "/about", label: "О книге" },
    { href: "/characters", label: "Персонажи" },
    { href: "/magic", label: "Магия и Заклинания" },
    { href: "/hogwarts", label: "Хогвартс" },
    { href: "/quotes", label: "Цитаты" },
  ];

  return (
    <footer className="bg-card border-t border-card-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <span className="font-display text-xl font-semibold">Хроники Волшебного Мира</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Погрузитесь в мистический мир Дж.К. Роулинг. Откройте для себя незабываемые персонажи,
              могущественные заклинания и тайны Хогвартса в захватывающем приключении.
            </p>
          </div>

          <div>
            <h3 className="font-secondary text-lg font-semibold mb-4">EXPLORE</h3>
            <ul className="space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-secondary text-lg font-semibold mb-4">LEGAL</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm" data-testid="footer-link-privacy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm" data-testid="footer-link-terms">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Хроники Волшебного Мира. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
