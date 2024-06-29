import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import ServicesSection from '@/components/services-section';
import ReviewsSection from '@/components/reviews-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ReviewsSection />
    </>
  );
}
