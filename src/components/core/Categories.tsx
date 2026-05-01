import { Keyboard, Square, Snowflake, Gamepad2, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const cats = [
  { title: "Custom Keycaps", desc: "Hand-crafted profiles", icon: Keyboard, span: "md:col-span-2 md:row-span-2", count: "32 items" },
  { title: "XXL Desk Mats", desc: "Cover your entire desk", icon: Square, span: "", count: "18 items" },
  { title: "Cooling & Thermal", desc: "Stay frosty under load", icon: Snowflake, span: "", count: "24 items" },
  { title: "Controller Gear", desc: "Grips, skins & shells", icon: Gamepad2, span: "md:col-span-2", count: "41 items" },
];

export const Categories = () => (
  <section className="py-20 md:py-28 relative">
    <div className="container">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
        <div>
          <span className="text-sm font-semibold text-primary-glow uppercase tracking-widest">Categories</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-black tracking-tighter">Built for every battlestation.</h2>
        </div>
        <p className="text-muted-foreground max-w-md">
          From silent thermals to sculpted keycaps — every category is hand-picked for performance and aesthetics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[180px] gap-4">
        {cats.map((c, i) => (
          <a
            key={c.title}
            href="#gear"
            className={cn(
              "group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 flex flex-col justify-between",
              "transition-all duration-500 ease-smooth hover:border-primary/60 hover:-translate-y-1 hover:shadow-glow",
              c.span
            )}
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            <div className="absolute -right-10 -bottom-10 size-40 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/30 transition-all duration-500" />

            <div className="relative flex items-start justify-between">
              <div className="size-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary-glow group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <c.icon className="size-6" />
              </div>
              <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-primary-glow group-hover:rotate-45 transition-all duration-500" />
            </div>

            <div className="relative">
              <div className="text-xs text-muted-foreground mb-1">{c.count}</div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{c.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{c.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);
