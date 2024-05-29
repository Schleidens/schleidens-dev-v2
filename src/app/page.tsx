import HeroSection from '@/components/HomePage/HeroSection';
import Layout from '../components/Layout';
import PortfolioSection from '@/components/HomePage/PortfolioSection';

export default function Home() {
  return (
    <Layout>
      <main>
        <HeroSection />
        <PortfolioSection />
      </main>
    </Layout>
  );
}
