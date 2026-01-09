import { Calendar, MessageCircle, BarChart3, Users, Clock, Shield, Smartphone, Heart } from "lucide-react";
import { useState } from "react";

const patientFeatures = [
  {
    icon: Smartphone,
    title: "Accès rapide aux soins",
    description: "Consultez depuis chez vous, sans contrainte de déplacement.",
  },
  {
    icon: Heart,
    title: "Suivi personnalisé",
    description: "Un accompagnement adapté à votre rythme et vos besoins.",
  },
  {
    icon: MessageCircle,
    title: "Consultations à distance",
    description: "Échangez par vidéo ou messagerie sécurisée.",
  },
  {
    icon: BarChart3,
    title: "Progression visible",
    description: "Visualisez votre évolution et célébrez vos avancées.",
  },
];

const proFeatures = [
  {
    icon: Calendar,
    title: "Agenda optimisé",
    description: "Gérez vos créneaux et rappels automatiquement.",
  },
  {
    icon: Users,
    title: "Vision globale",
    description: "Suivez tous vos patients depuis un seul tableau de bord.",
  },
  {
    icon: Clock,
    title: "Gestion intelligente",
    description: "Automatisez les tâches administratives.",
  },
  {
    icon: Shield,
    title: "Conformité RGPD",
    description: "Sécurité et confidentialité garanties.",
  },
];

export const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState<"patients" | "pros">("patients");
  const features = activeTab === "patients" ? patientFeatures : proFeatures;

  return (
    <section id="features" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-sage font-medium text-sm tracking-wide uppercase">Fonctionnalités</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-4">
            Conçu pour votre bien-être
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Une plateforme pensée pour répondre aux besoins des patients et des professionnels de santé.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-card rounded-xl shadow-soft border border-border/50">
            <button
              onClick={() => setActiveTab("patients")}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === "patients"
                  ? "gradient-hero text-primary-foreground shadow-card"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Pour les patients
            </button>
            <button
              onClick={() => setActiveTab("pros")}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === "pros"
                  ? "gradient-hero text-primary-foreground shadow-card"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Pour les professionnels
            </button>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={`${activeTab}-${index}`}
              className="group bg-card rounded-2xl p-6 shadow-soft border border-border/50 hover:shadow-elevated hover:-translate-y-1 transition-all duration-500 cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-card border border-sage/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="text-military" size={26} />
              </div>
              <h3 className="font-display text-lg text-foreground mb-2 group-hover:text-military transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover indicator */}
              <div className="mt-4 h-1 w-0 group-hover:w-full bg-sage rounded-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
