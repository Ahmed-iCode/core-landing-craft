import { Instagram, Facebook } from "lucide-react";
import { Logo } from "./Logo";

const TikTok = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
    <path d="M19.6 6.3a4.85 4.85 0 0 1-3.5-1.5 4.85 4.85 0 0 1-1.4-2.8h-3.3v12a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V8.1a6 6 0 1 0 5.1 5.9V9.4a8.2 8.2 0 0 0 4.9 1.6V7.7c-.1 0-.1 0 0-1.4Z"/>
  </svg>
);

export const Footer = () => (
  <footer id="contact" className="border-t border-border mt-10">
    <div className="container py-12 grid md:grid-cols-3 gap-8 items-start">
      <div>
        <Logo />
        <p className="mt-4 text-sm text-muted-foreground max-w-xs">
          Premium PC accessories curated for gamers and creators. Built around your setup.
        </p>
      </div>
      <div className="md:text-center">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">Get in touch</div>
        <a href="mailto:hello@coregear.shop" className="block mt-2 font-semibold hover:text-primary-glow transition-colors">
          hello@coregear.shop
        </a>
      </div>
      <div className="md:text-right">
        <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Follow Core</div>
        <div className="flex md:justify-end gap-3">
          {[
            { icon: TikTok, label: "TikTok" },
            { icon: Instagram, label: "Instagram" },
            { icon: Facebook, label: "Facebook" },
          ].map((s) => (
            <a
              key={s.label}
              href="#"
              aria-label={s.label}
              className="size-10 rounded-full border border-border bg-surface flex items-center justify-center text-muted-foreground hover:text-primary-glow hover:border-primary/60 hover:shadow-glow transition-all duration-300"
            >
              <s.icon />
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="border-t border-border">
      <div className="container py-5 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
        <span>© {new Date().getFullYear()} Core. All rights reserved.</span>
        <span>Built for the setup obsessed.</span>
      </div>
    </div>
  </footer>
);
