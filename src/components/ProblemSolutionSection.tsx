import { X, Check, ArrowRight } from "lucide-react";

const problems = [
  "Stress quotidien non géré",
  "Accès difficile aux soins",
  "Manque de suivi personnalisé",
  "Sentiment d'isolement",
];

const solutions = [
  "Accompagnement accessible",
  "Thérapeutes qualifiés",
  "Suivi continu et adapté",
  "Communauté bienveillante",
];

export const ProblemSolutionSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-muted/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sage font-medium text-sm tracking-wide uppercase">La différence MindCare</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-4">
            De la difficulté vers l'équilibre
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center max-w-5xl mx-auto">
          {/* Problems - Before */}
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 relative group hover:shadow-elevated transition-all duration-500">
            <div className="absolute -top-3 left-6 px-4 py-1 bg-destructive/10 text-destructive text-xs font-medium rounded-full">
              Avant
            </div>
            <div className="space-y-5 pt-4">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-destructive/5 border border-destructive/10 group-hover:translate-x-1 transition-transform duration-300"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <X className="text-destructive" size={18} />
                  </div>
                  <span className="text-foreground/80">{problem}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow indicator */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-16 h-16 rounded-full gradient-hero flex items-center justify-center shadow-elevated">
              <ArrowRight className="text-primary-foreground" size={24} />
            </div>
          </div>

          {/* Solutions - After */}
          <div className="bg-card rounded-2xl p-8 shadow-card border border-sage/30 relative group hover:shadow-elevated transition-all duration-500">
            <div className="absolute -top-3 left-6 px-4 py-1 bg-sage/20 text-military text-xs font-medium rounded-full">
              Avec MindCare
            </div>
            <div className="space-y-5 pt-4">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-sage/10 border border-sage/20 group-hover:-translate-x-1 transition-transform duration-300"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="w-10 h-10 rounded-full gradient-cta flex items-center justify-center flex-shrink-0">
                    <Check className="text-primary-foreground" size={18} />
                  </div>
                  <span className="text-foreground font-medium">{solution}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
