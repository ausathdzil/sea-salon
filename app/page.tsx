import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import ServicesSection from '@/components/services-section';
import ReviewsSection from '@/components/reviews-section';

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
