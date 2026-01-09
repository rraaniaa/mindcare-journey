import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export const ContactSection = () => {
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sage font-medium text-sm tracking-wide uppercase">Contact</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-4">
              Parlons ensemble
            </h2>
            <p className="text-muted-foreground mt-4">
              Une question ? Notre équipe vous répond rapidement et en toute confidentialité.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name field */}
            <div className="relative">
              <label
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focused === "name" ? "top-2 text-xs text-sage" : "top-4 text-muted-foreground"
                }`}
              >
                Votre nom
              </label>
              <input
                type="text"
                onFocus={() => setFocused("name")}
                onBlur={(e) => !e.target.value && setFocused(null)}
                className="w-full px-4 pt-7 pb-3 bg-card border border-border rounded-xl focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-all duration-300 text-foreground"
              />
            </div>

            {/* Email field */}
            <div className="relative">
              <label
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focused === "email" ? "top-2 text-xs text-sage" : "top-4 text-muted-foreground"
                }`}
              >
                Votre email
              </label>
              <input
                type="email"
                onFocus={() => setFocused("email")}
                onBlur={(e) => !e.target.value && setFocused(null)}
                className="w-full px-4 pt-7 pb-3 bg-card border border-border rounded-xl focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-all duration-300 text-foreground"
              />
            </div>

            {/* Message field */}
            <div className="relative">
              <label
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focused === "message" ? "top-2 text-xs text-sage" : "top-4 text-muted-foreground"
                }`}
              >
                Votre message
              </label>
              <textarea
                rows={5}
                onFocus={() => setFocused("message")}
                onBlur={(e) => !e.target.value && setFocused(null)}
                className="w-full px-4 pt-7 pb-3 bg-card border border-border rounded-xl focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-all duration-300 text-foreground resize-none"
              />
            </div>

            <Button
              type="submit"
              variant="military"
              size="xl"
              className="w-full"
              disabled={submitted}
            >
              {submitted ? (
                <>
                  <CheckCircle size={20} />
                  Message envoyé !
                </>
              ) : (
                <>
                  <Send size={20} />
                  Envoyer le message
                </>
              )}
            </Button>

            <p className="text-center text-muted-foreground text-sm">
              🔒 Nous vous répondons rapidement et en toute confidentialité.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
