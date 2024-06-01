import HeroSection from '@/components/HomePage/HeroSection';
import Layout from '../components/Layout';
import PortfolioSection from '@/components/HomePage/PortfolioSection';
import ServicesSection from '@/components/HomePage/ServicesSection';

export default function Home() {
  return (
    <Layout>
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
      </main>
    </Layout>
  );
}
