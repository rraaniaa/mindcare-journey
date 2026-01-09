import { Shield, Lock, Eye, Server } from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "Données chiffrées",
    description: "Chiffrement de bout en bout pour toutes vos données.",
  },
  {
    icon: Eye,
    title: "Confidentialité totale",
    description: "Aucun partage de vos informations sans votre accord.",
  },
  {
    icon: Server,
    title: "Hébergement sécurisé",
    description: "Serveurs certifiés et localisés en Europe.",
  },
  {
    icon: Shield,
    title: "Accès contrôlé",
    description: "Authentification renforcée et droits stricts.",
  },
];

export const SecuritySection = () => {
  return (
    <section id="security" className="py-24 gradient-hero relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground text-sm mb-6">
            <Shield size={16} />
            Votre sécurité, notre priorité
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground">
            Protection maximale
          </h2>
          <p className="text-primary-foreground/80 mt-4 max-w-2xl mx-auto text-lg">
            Nous avons construit MindCare sur des fondations de sécurité solides. 
            Vos données personnelles sont protégées selon les plus hauts standards.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="group bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 hover:bg-primary-foreground/10 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary-foreground/15 transition-all duration-300">
                <feature.icon className="text-primary-foreground" size={26} />
              </div>
              <h3 className="font-display text-lg text-primary-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-70">
          <div className="flex items-center gap-2 text-primary-foreground text-sm">
            <div className="w-8 h-8 rounded-lg bg-primary-foreground/20 flex items-center justify-center text-xs font-bold">
              RGPD
            </div>
            Conforme
          </div>
          <div className="flex items-center gap-2 text-primary-foreground text-sm">
            <div className="w-8 h-8 rounded-lg bg-primary-foreground/20 flex items-center justify-center text-xs font-bold">
              SSL
            </div>
            Certificat
          </div>
          <div className="flex items-center gap-2 text-primary-foreground text-sm">
            <div className="w-8 h-8 rounded-lg bg-primary-foreground/20 flex items-center justify-center text-xs font-bold">
              HDS
            </div>
            Hébergeur
          </div>
        </div>
      </div>
    </section>
  );
};
