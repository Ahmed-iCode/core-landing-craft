import { ShieldCheck, Truck, Headphones } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Premium Quality", desc: "Hand-tested gear, built to last." },
  { icon: Truck, title: "Fast Local Delivery", desc: "Door-to-door in 24-72 hours." },
  { icon: Headphones, title: "Tech Expert Support", desc: "Real humans who actually game." },
];

export const Trust = () => (
  <section id="bundles" className="py-16 md:py-20">
    <div className="container">
      <div className="rounded-3xl border border-border bg-gradient-surface p-8 md:p-12 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 size-60 rounded-full bg-primary/15 blur-3xl" />
        <div className="grid md:grid-cols-3 gap-8 relative">
          {items.map((it) => (
            <div key={it.title} className="flex items-start gap-4 group">
              <div className="size-14 shrink-0 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary-glow group-hover:shadow-glow group-hover:scale-105 transition-all duration-500">
                <it.icon className="size-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{it.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
