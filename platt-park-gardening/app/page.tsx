import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import LeadForm from '@/components/LeadForm';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Services />
      <Testimonials />
      <Gallery />
      <LeadForm />
      <CTA />
      <Footer />
    </main>
  );
}
