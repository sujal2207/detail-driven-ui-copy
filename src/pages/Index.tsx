
import Header from "@/components/Header";
import HeroBanners from "@/components/HeroBanners";
import ProductGrid from "@/components/ProductGrid";
import CategorySection from "@/components/CategorySection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroBanners />
        <ProductGrid />
        <CategorySection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
