import { Button } from "@/components/ui/button";
import { Apple, PlayCircle, Star } from "lucide-react";

const testimonials = [
  {
    name: "Marie L.",
    role: "Patiente",
    content: "MindCare a changé ma façon de prendre soin de moi. L'application est intuitive et mon thérapeute est formidable.",
    rating: 5,
  },
  {
    name: "Dr. Thomas B.",
    role: "Psychologue",
    content: "Un outil professionnel qui me permet de suivre mes patients efficacement. La sécurité des données est exemplaire.",
    rating: 5,
  },
  {
    name: "Sophie M.",
    role: "Patiente",
    content: "J'apprécie pouvoir consulter depuis chez moi. Le suivi de ma progression me motive au quotidien.",
    rating: 5,
  },
];

export const AppSection = () => {
  return (
    <section id="app" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-96 bg-gradient-to-r from-sage/10 to-transparent rounded-r-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - App showcase */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative">
              {/* Main phone */}
              <div className="relative w-64 md:w-72 bg-foreground/90 rounded-[3rem] p-3 shadow-elevated animate-float">
                <div className="bg-card rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  <div className="h-full bg-gradient-to-b from-sage/20 to-transparent p-5 flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-8 h-8 rounded-full gradient-hero" />
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-sage" />
                        <div className="w-2 h-2 rounded-full bg-sage/50" />
                        <div className="w-2 h-2 rounded-full bg-sage/50" />
                      </div>
                    </div>
                    
                    <div className="space-y-4 flex-1">
                      <div className="bg-card rounded-xl p-4 shadow-soft">
                        <p className="text-xs text-muted-foreground mb-2">Votre humeur aujourd'hui</p>
                        <div className="flex justify-between">
                          {['😊', '😐', '😔', '😰'].map((e, i) => (
                            <span key={i} className={`text-2xl ${i === 0 ? 'opacity-100' : 'opacity-40'}`}>{e}</span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-card rounded-xl p-4 shadow-soft">
                        <p className="text-xs text-muted-foreground mb-2">Prochaine séance</p>
                        <p className="text-sm font-medium text-foreground">Demain, 14h00</p>
                        <p className="text-xs text-sage">Dr. Sophie Martin</p>
                      </div>

                      <div className="bg-military/10 rounded-xl p-4 border border-military/20">
                        <p className="text-xs text-military font-medium">🎯 Objectif du jour</p>
                        <p className="text-sm text-foreground mt-1">10 min de méditation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary phone (behind) */}
              <div className="absolute -right-12 top-12 w-56 md:w-64 bg-foreground/70 rounded-[3rem] p-3 shadow-card -z-10 rotate-6 opacity-60 hidden md:block">
                <div className="bg-card rounded-[2.5rem] overflow-hidden aspect-[9/19]" />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <span className="text-sage font-medium text-sm tracking-wide uppercase">Application mobile</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-4">
              Téléchargez MindCare
            </h2>
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
              Votre bien-être dans votre poche. Accédez à vos séances, suivez votre progression 
              et échangez avec votre thérapeute où que vous soyez.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button variant="military" size="xl" className="gap-3">
                <Apple size={22} />
                App Store
              </Button>
              <Button variant="sage" size="xl" className="gap-3">
                <PlayCircle size={22} />
                Google Play
              </Button>
            </div>

            {/* Ratings */}
            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-border">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={20} className="text-sage fill-sage" />
                ))}
              </div>
              <span className="text-foreground font-medium">4.9/5</span>
              <span className="text-muted-foreground text-sm">• 2,500+ avis</span>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-24">
          <h3 className="font-display text-2xl text-foreground text-center mb-12">
            Ce qu'en disent nos utilisateurs
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 hover:shadow-card transition-all duration-500 group"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-sage fill-sage" />
                  ))}
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-card border border-sage/20 flex items-center justify-center text-sm font-medium text-foreground">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
