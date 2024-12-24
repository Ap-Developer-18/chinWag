import Header from "@/components/common/Header";
import PreLoader from "@/components/common/PreLoader";
import ScrollToTop from "@/components/common/ScrollToTop";
import Benefit from "@/components/home/Benefit";
import Commitment from "@/components/home/Commitment";
import Conversations from "@/components/home/Conversations";
import Faq from "@/components/home/Faq";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import Private from "@/components/home/Private";
import RoadMap from "@/components/home/RoadMap";
import Supercharge from "@/components/home/Supercharge";

export default function Home() {
  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden relative">
      <Hero />
      <Benefit />
      <Private />
      <Commitment />
      <Supercharge />
      <div className="bg-section-layer bg-cover bg-no-repeat">
        <RoadMap />
        <Conversations />
        <Faq />
      </div>
      <Footer />
      <PreLoader />
      <ScrollToTop />
    </div>
  );
}
