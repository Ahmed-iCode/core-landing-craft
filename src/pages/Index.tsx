import { Navbar } from "@/components/core/Navbar";
import { Hero } from "@/components/core/Hero";
import { Categories } from "@/components/core/Categories";
import { Products } from "@/components/core/Products";
import { Trust } from "@/components/core/Trust";
import { Footer } from "@/components/core/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main>
      <Hero />
      <Categories />
      <Products />
      <Trust />
    </main>
    <Footer />
  </div>
);

export default Index;
