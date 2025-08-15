import { useScrollFadeIn } from '@/hooks/useScrollFadeIn';

const HeroSection = () => {
  const [ref, isVisible] = useScrollFadeIn<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`flex flex-col justify-center items-center w-full min-h-[calc(100vh-96px)] px-6 fade-in-section ${isVisible ? 'is-visible' : ''}`}
      style={{ minHeight: 'calc(100vh - 96px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      {/* Animated Circle Pattern Image on Right */}
      <div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 overflow-hidden max-w-[420px] lg:max-w-[520px] pointer-events-none">
        <img
          src="/images/Circle Pattern Mandala Art.avif"
          alt="Animated Circle Pattern"
          className="circle-layer1 w-full h-auto"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="text-left transform -translate-y-4 md:-translate-y-6 lg:-translate-y-8">
          <h1 className="font-headline text-6xl md:text-8xl font-medium text-black headline-text mb-8 leading-tight">
            Innovation & Entrepreneurship Development Cell
          </h1>
           <p className="font-serif text-3xl text-coffee-dark leading-relaxed mb-8">
            Entrepreneurship is the bridge between the spark of innovation and the fire of commercialization.
          </p> 
        </div>
      </div>
    </section>
  );
};

export default HeroSection;



