import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-hero animate-gradient" />
      
      {/* Subtle overlay pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-sage/20 blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-primary-foreground/5 blur-3xl animate-float" style={{ animationDelay: '-2s' }} />

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground text-sm animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-sage animate-pulse" />
              Plateforme de santé mentale
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Une nouvelle façon de prendre soin de sa{" "}
              <span className="relative">
                santé mentale
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C50 4 100 2 150 6C200 10 250 4 298 8" stroke="hsl(var(--sage))" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-lg mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              MindCare connecte patients et thérapeutes dans un espace sécurisé et humain. Retrouvez votre équilibre.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Button variant="hero" size="xl">
                Découvrir l'expérience
                <ArrowRight className="ml-1" size={20} />
              </Button>
              <Button variant="heroOutline" size="xl">
                <Play size={18} className="mr-1" />
                Voir comment ça marche
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 justify-center lg:justify-start pt-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-primary bg-sage-light flex items-center justify-center text-xs font-medium text-foreground"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-primary-foreground/80 text-sm">
                <span className="font-semibold text-primary-foreground">2,500+</span> patients accompagnés
              </div>
            </div>
          </div>

          {/* Right content - App mockup */}
          <div className="relative flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Phone frame */}
              <div className="relative w-72 md:w-80 bg-foreground/90 rounded-[3rem] p-3 shadow-elevated animate-float">
                <div className="bg-card rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  {/* Status bar */}
                  <div className="bg-muted px-6 py-3 flex justify-between items-center text-xs text-muted-foreground">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-muted-foreground/50 rounded-sm" />
                      <div className="w-4 h-2 bg-muted-foreground/50 rounded-sm" />
                      <div className="w-6 h-3 bg-sage rounded-sm" />
                    </div>
                  </div>
                  
                  {/* App content preview */}
                  <div className="p-5 space-y-4">
                    <div className="space-y-1">
                      <p className="text-muted-foreground text-xs">Bonjour,</p>
                      <h3 className="font-display text-lg text-foreground">Comment allez-vous ?</h3>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-2">
                      {['😊', '😐', '😔', '😰'].map((emoji, i) => (
                        <button
                          key={i}
                          className={`aspect-square rounded-xl text-2xl flex items-center justify-center transition-all duration-200 ${
                            i === 0 ? 'bg-sage/30 scale-110 shadow-soft' : 'bg-muted hover:bg-sage/20'
                          }`}
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>

                    <div className="bg-muted rounded-xl p-4 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center text-foreground font-medium text-sm">
                          Dr
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Dr. Sophie Martin</p>
                          <p className="text-xs text-muted-foreground">Psychologue</p>
                        </div>
                      </div>
                      <button className="w-full py-2.5 gradient-cta text-primary-foreground rounded-lg text-sm font-medium">
                        Prendre rendez-vous
                      </button>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground">Votre progression</p>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full w-3/4 gradient-cta rounded-full" />
                      </div>
                      <p className="text-xs text-sage font-medium">7 jours de suivi continu</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating notification cards */}
              <div className="absolute -left-16 top-1/4 bg-card rounded-xl p-3 shadow-elevated animate-float hidden md:block" style={{ animationDelay: '-1s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-sage/30 flex items-center justify-center">
                    <span className="text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground">Séance confirmée</p>
                    <p className="text-xs text-muted-foreground">Demain à 14h</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-12 bottom-1/3 bg-card rounded-xl p-3 shadow-elevated animate-float hidden md:block" style={{ animationDelay: '-3s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-military/20 flex items-center justify-center">
                    <span className="text-sm">🔒</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground">100% sécurisé</p>
                    <p className="text-xs text-muted-foreground">Données chiffrées</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/60">
          <span className="text-xs">Découvrir</span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1.5">
            <div className="w-1.5 h-2.5 rounded-full bg-current animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
