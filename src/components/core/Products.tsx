import keycaps from "@/assets/prod-keycaps.jpg";
import deskmat from "@/assets/prod-deskmat.jpg";
import cooler from "@/assets/prod-cooler.jpg";
import controller from "@/assets/prod-controller.jpg";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.9 11.9L4 20l4.22-1.11a7.93 7.93 0 0 0 3.82.97h.01a7.94 7.94 0 0 0 5.55-13.54Zm-5.55 12.2h-.01a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.5.66.67-2.44-.16-.25a6.6 6.6 0 0 1 10.25-8.13 6.55 6.55 0 0 1 1.93 4.66 6.61 6.61 0 0 1-6.58 6.56Zm3.62-4.93c-.2-.1-1.18-.58-1.36-.65-.18-.07-.31-.1-.45.1-.13.2-.51.65-.63.78-.12.13-.23.15-.43.05a5.43 5.43 0 0 1-1.6-.99 6.04 6.04 0 0 1-1.11-1.38c-.12-.2 0-.31.09-.41.09-.09.2-.23.3-.35.1-.12.13-.2.2-.33.07-.13.03-.25-.02-.35-.05-.1-.45-1.08-.61-1.48-.16-.39-.33-.34-.45-.34l-.38-.01a.74.74 0 0 0-.54.25c-.18.2-.7.69-.7 1.67 0 .98.71 1.93.81 2.06.1.13 1.4 2.14 3.4 3 2 .85 2 .57 2.36.53.36-.03 1.18-.48 1.34-.94.17-.46.17-.86.12-.94-.05-.08-.18-.13-.38-.23Z"/>
  </svg>
);

const products = [
  { id: 1, title: "Aurora GMK Keycap Set", price: "$129", tag: "Bestseller", img: keycaps },
  { id: 2, title: "Voidmat XXL Pro", price: "$59", tag: "New", img: deskmat },
  { id: 3, title: "Frostcore RGB Fan", price: "$39", tag: "Hot", img: cooler },
  { id: 4, title: "Phantom Controller Shell", price: "$79", tag: "Limited", img: controller },
];

const wa = (title: string) =>
  `https://wa.me/0000000000?text=${encodeURIComponent(`Hi Core! I'd like to order: ${title}`)}`;

export const Products = () => (
  <section id="gear" className="py-20 md:py-28 relative">
    <div className="container">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
        <div>
          <span className="text-sm font-semibold text-primary-glow uppercase tracking-widest">Trending Gear</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-black tracking-tighter">What everyone's buying.</h2>
        </div>
        <a href="#" className="text-sm text-primary-glow hover:underline font-semibold">View all gear →</a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((p) => (
          <article
            key={p.id}
            className="group relative rounded-2xl border border-border bg-surface overflow-hidden transition-all duration-500 ease-smooth hover:-translate-y-2 hover:border-primary/60 hover:shadow-glow-lg"
          >
            <div className="relative aspect-square overflow-hidden bg-background">
              <img
                src={p.img}
                alt={p.title}
                width={768}
                height={768}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-110"
              />
              <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-primary/20 backdrop-blur border border-primary/40 text-primary-glow">
                {p.tag}
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-base leading-tight">{p.title}</h3>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-xl font-black text-primary-glow">{p.price}</span>
                <span className="text-xs text-muted-foreground">Free delivery</span>
              </div>
              <a
                href={wa(p.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 h-10 rounded-md bg-surface-elevated border border-border text-sm font-semibold transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-glow"
              >
                <WhatsAppIcon className="size-4" />
                Order via WhatsApp
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
