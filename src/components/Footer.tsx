import { Heart } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Fonctionnalités", href: "#features" },
    { label: "Sécurité", href: "#security" },
    { label: "Application", href: "#app" },
    { label: "Tarifs", href: "#" },
  ],
  company: [
    { label: "À propos", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Carrières", href: "#" },
    { label: "Presse", href: "#" },
  ],
  legal: [
    { label: "Confidentialité", href: "#" },
    { label: "CGU", href: "#" },
    { label: "Mentions légales", href: "#" },
    { label: "Cookies", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-cta flex items-center justify-center">
                <span className="font-display font-bold text-xl">M</span>
              </div>
              <span className="font-display text-xl font-semibold">MindCare</span>
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Une nouvelle façon de prendre soin de sa santé mentale. 
              Connectez-vous à des professionnels qualifiés dans un espace sécurisé.
            </p>
            <div className="flex gap-4">
              {["twitter", "linkedin", "instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors duration-300"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-primary-foreground/60 rounded-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-sm font-semibold mb-4 text-primary-foreground/90">Produit</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold mb-4 text-primary-foreground/90">Entreprise</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold mb-4 text-primary-foreground/90">Légal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © 2025 MindCare. Tous droits réservés.
          </p>
          <p className="text-sm text-primary-foreground/50 flex items-center gap-1">
            Fait avec <Heart size={14} className="text-sage fill-sage" /> pour votre bien-être
          </p>
        </div>
      </div>
    </footer>
  );
};
