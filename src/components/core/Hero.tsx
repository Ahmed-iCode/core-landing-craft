import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-setup.jpg";

export const Hero = () => (
  <section id="home" className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
    <div className="container relative grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
      <div className="animate-fade-up">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary-glow">
          <Sparkles className="size-3" /> Premium Tech Essentials
        </span>
        <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tighter">
          Upgrade Your Setup.
          <br />
          <span className="bg-gradient-primary bg-clip-text text-transparent glow-text">
            Elevate Your Game.
          </span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
          Premium PC accessories, custom keycaps, and hardware essentials curated for gamers and creators.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button variant="hero" size="xl" asChild>
            <a href="#gear">
              Shop the Collection <ArrowRight className="ml-1" />
            </a>
          </Button>
        </div>
      </div>

      <div className="relative animate-fade-up [animation-delay:200ms]">
        <div className="absolute -inset-4 bg-gradient-primary opacity-30 blur-3xl rounded-full" />
        <div className="relative rounded-2xl overflow-hidden border border-border shadow-glow-lg">
          <img
            src={heroImg}
            alt="Premium dark gaming PC setup with blue RGB lighting"
            width={1280}
            height={1280}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-border/60 bg-background/70 backdrop-blur-xl px-4 py-3">
            <div>
              <div className="text-xs text-muted-foreground">Featured Gear</div>
              <div className="font-bold">Pro Gaming Desk Mat</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
