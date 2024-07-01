import Navbar from '@/components/ui/navbar';
import HeroSection from '@/components/sections/hero-section';
import ServicesSection from '@/components/sections/services-section';
import ReviewsSection from '@/components/sections/reviews-section';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ReviewsSection />
    </>
  );
}
