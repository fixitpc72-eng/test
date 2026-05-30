import Header from "./components/Header";
import Hero from "./components/sections/Hero";
import TradesGrid from "./components/sections/TradesGrid";
import FieldDocumentation from "./components/sections/FieldDocumentation";
import FeaturesGrid from "./components/sections/FeaturesGrid";
import StatsSection from "./components/sections/StatsSection";
import DashboardPreview from "./components/sections/DashboardPreview";
import Footer from "./components/sections/Footer";

export default function App() {
  return (
    <div className="min-h-dvh bg-[var(--background)] text-[var(--foreground)]">
      <Header />
      <main>
        <Hero />
        <TradesGrid />
        <FieldDocumentation />
        <FeaturesGrid />
        <StatsSection />
        <DashboardPreview />
      </main>
      <Footer />
    </div>
  );
}
