'use client';
import { useState, useEffect } from 'react';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Band from '@/components/Band';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import ServiceAreaMap from '@/components/ServiceAreaMap';
import LeadForm from '@/components/LeadForm';
import Confirmation from '@/components/Confirmation';
import Footer from '@/components/Footer';
import * as Icons from '@/components/Icons';

type Screen = 'landing' | 'form' | 'confirmation';
type FormData = Record<string, unknown>;

export default function Home() {
  const [screen, setScreen] = useState<Screen>('landing');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [submission, setSubmission] = useState<FormData | null>(null);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 700 && screen === 'landing');
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [screen]);

  const goToForm = () => { setScreen('form'); window.scrollTo(0, 0); };
  const goToLanding = () => { setScreen('landing'); window.scrollTo(0, 0); };
  const handleSubmit = (data: FormData) => { setSubmission(data); setScreen('confirmation'); window.scrollTo(0, 0); };

  return (
    <div className="app">
      {screen === 'landing' && (
        <>
          <Nav onRequestQuote={goToForm} />
          <div className="response-banner">
            <strong>Spring is here.</strong> We reply to every request within <strong>24 hours</strong>. Currently booking <strong>2–3 weeks out</strong>.
          </div>
          <Hero onRequestQuote={goToForm} />
          <Band />
          <Services selected={selectedServices} setSelected={setSelectedServices} onRequestQuote={goToForm} />
          <Gallery />
          <About />
          <Testimonials />
          <ServiceAreaMap />
          <LeadForm preSelected={selectedServices} onSubmit={handleSubmit} onBack={() => {}} />
          <Footer onRequestQuote={goToForm} />
          <button className={`sticky-cta ${showSticky ? 'visible' : ''}`} onClick={goToForm}>
            <span className="sticky-cta-pulse" />
            Request a quote
            <Icons.ArrowRight width={16} height={16} />
          </button>
        </>
      )}
      {screen === 'form' && (
        <>
          <Nav onRequestQuote={() => {}} />
          <LeadForm preSelected={selectedServices} onSubmit={handleSubmit} onBack={goToLanding} />
          <Footer onRequestQuote={() => {}} />
        </>
      )}
      {screen === 'confirmation' && (
        <Confirmation data={submission || {}} onReturn={goToLanding} />
      )}
    </div>
  );
}
