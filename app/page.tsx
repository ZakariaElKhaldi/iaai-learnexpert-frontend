import React from 'react';
import HeroSection from '@/components/landing/hero/HeroSection';
import FeaturesSection from '@/components/landing/features/FeaturesSection';
import TestimonialsSection from '@/components/landing/testimonials/TestimonialsSection';
import PricingSection from '@/components/landing/pricing/PricingSection';
import CtaSection from '@/components/landing/cta/CtaSection';
import FaqSection from '@/components/landing/faq/FaqSection';
import ContactSection from '@/components/landing/contact/ContactSection';
import Footer from '@/components/landing/Footer';

export default function LandingPage() {
  return (
    <>
      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <CtaSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
