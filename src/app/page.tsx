import { HeroSection } from "@/components/HeroSection";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { TestimonialSection } from "@/components/TestimonialSection";
import { QuizPreview } from "@/components/QuizPreview";
import { HowItWorksSection } from "@/components/HowItWorksSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cream-50">
      <HeroSection />
      <QuizPreview />
      <FeaturedProducts />
      <HowItWorksSection />
      <TestimonialSection />
    </div>
  );
}