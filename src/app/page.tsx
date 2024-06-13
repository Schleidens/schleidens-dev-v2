import HeroSection from '@/components/HomePage/HeroSection';
import Layout from '../components/Layout';
import PortfolioSection from '@/components/HomePage/PortfolioSection';
import ServicesSection from '@/components/HomePage/ServicesSection';
import TestimonialsSection from '@/components/HomePage/TestimonialsSection';
import CtaSection from '@/components/HomePage/CtaSection';

export const revalidate = 30;

export default function Home() {
  return (
    <Layout>
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
    </Layout>
  );
}
