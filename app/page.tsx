import BeverageNavbar from "../components/sections/navbar/beverage";
import BeverageHero from "../components/sections/hero/beverage";
import BeverageItems from "../components/sections/items/beverage";
import BeverageFeatures from "../components/sections/features/beverage";
import BeverageFlow from "../components/sections/flow/beverage";
import BeverageFAQ from "../components/sections/faq/beverage";
import BeverageCTA from "../components/sections/cta/beverage";
import BeverageFooter from "../components/sections/footer/beverage";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-background text-foreground">
      <BeverageNavbar />
      <BeverageHero />
      <BeverageFeatures />
      <BeverageFlow />
      <BeverageFAQ />
      <BeverageCTA />
      <BeverageFooter />
    </main>
  );
}
