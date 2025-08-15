import HeroSection from '@/components/HeroSection';
import About_us from '@/components/About-us';

const Index = () => {
  return (
    <div className="min-h-screen">
      
      <main>
        <div className="overflow-x-hidden">
          <HeroSection />
        </div>
        <About_us />
      </main>
      
    </div>
  );
};

export default Index;
