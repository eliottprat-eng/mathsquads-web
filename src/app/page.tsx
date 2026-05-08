import Hero from "@/components/hero/Hero";
import StatsSection from "@/components/sections/StatsSection";
import WhySection from "@/components/sections/WhySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PresenceSection from "@/components/sections/PresenceSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <WhySection />
      <TestimonialsSection />
      <PresenceSection />
      <CTASection />
    </>
  );
}
