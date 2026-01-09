import { UserPlus, Search, LineChart, Smile } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Créer son espace personnel",
    description: "Inscription simple et rapide en quelques clics.",
  },
  {
    icon: Search,
    title: "Choisir son accompagnant",
    description: "Trouvez le thérapeute adapté à vos besoins.",
  },
  {
    icon: LineChart,
    title: "Suivre son évolution",
    description: "Visualisez vos progrès au quotidien.",
  },
  {
    icon: Smile,
    title: "Retrouver son équilibre",
    description: "Avancez sereinement vers le mieux-être.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-96 bg-gradient-to-l from-sage/10 to-transparent rounded-l-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="text-sage font-medium text-sm tracking-wide uppercase">Comment ça marche</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-4">
              Votre parcours vers l'équilibre
            </h2>
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
              En quelques étapes simples, commencez votre accompagnement personnalisé. 
              Nous avons simplifié chaque étape pour que vous puissiez vous concentrer sur l'essentiel : vous.
            </p>
          </div>

          {/* Right - Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sage via-military to-sage/30" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative flex gap-6 md:gap-8 group"
                >
                  {/* Step indicator */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full gradient-hero flex items-center justify-center shadow-card group-hover:shadow-elevated group-hover:scale-110 transition-all duration-500">
                      <step.icon className="text-primary-foreground" size={24} />
                    </div>
                    {/* Step number */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-sage text-foreground text-xs font-bold flex items-center justify-center shadow-soft">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 bg-card rounded-xl p-6 shadow-soft border border-border/50 group-hover:shadow-card group-hover:border-sage/30 transition-all duration-500 group-hover:translate-x-2">
                    <h3 className="font-display text-lg md:text-xl text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
