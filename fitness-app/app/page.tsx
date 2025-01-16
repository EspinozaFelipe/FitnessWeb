import ButtonAppBar from "./components/BrandBar/BrandBar";
import HeroSection from "./components/HeroSection";
import ServiceSelection from "./components/ServiceSelection";

export default function Home() {
  return (
    <div>
      <ButtonAppBar></ButtonAppBar>
      <div className="flex flex-col items-center p-4">
        <HeroSection />
        <ServiceSelection />
      </div>
    </div>
  );
}
