import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import ServicesSection from '@/components/services-section';
import ContactsSection from '@/components/contacts-section';
import ReviewsSection from '@/components/reviews-section';
import ReviewForm from '@/components/review-form';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-between w-full">
        <HeroSection />
        <ServicesSection />
        <ReviewsSection />
        <ContactsSection />
      </main>
      <Footer />
    </>
  );
}
