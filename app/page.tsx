import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Reviews from '@/components/Reviews';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import BookingSection from '@/components/BookingSection';
import AnaChatWidget from '@/components/AnaChatWidget';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <Features />
      <Reviews />
      <BookingSection />
      <Footer />
      <AnaChatWidget />
    </main>
  );
}
