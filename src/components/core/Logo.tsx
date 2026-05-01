import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => (
  <div className={cn("inline-flex items-center", className)}>
    <span className="bg-primary px-2.5 py-1 rounded-md font-black tracking-tighter text-primary-foreground text-lg shadow-glow">
      CORE
    </span>
  </div>
);
