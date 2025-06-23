import Header from "@/components/Header";
import CategoryNavBar from "@/components/CategoryNavBar";
import HeroBanners from "@/components/HeroBanners";
import ProductGrid from "@/components/ProductGrid";
import CategorySection from "@/components/CategorySection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import ExclusiveOfferSignup from "@/components/ExclusiveOfferSignup";
import CollegeMustHavesGrid from "@/components/CollegeMustHavesGrid";
import EndlessSummerDealsGrid from "@/components/EndlessSummerDealsGrid";
import SponsoredAndDealsSection from "@/components/SponsoredAndDealsSection";
import ShopEarnSaveBanner from "@/components/ShopEarnSaveBanner";
import StaplesBrandsGrid from "@/components/StaplesBrandsGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <CategoryNavBar />
        <ProductGrid />
      <EndlessSummerDealsGrid />
        <CategorySection />
      <CollegeMustHavesGrid />
        <HeroBanners />
      <EndlessSummerDealsGrid />
        <ServicesSection />
      <ShopEarnSaveBanner />
      <StaplesBrandsGrid />
      <main>
        <SponsoredAndDealsSection />
        <ExclusiveOfferSignup />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
