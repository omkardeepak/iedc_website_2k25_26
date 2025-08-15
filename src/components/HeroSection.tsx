import { useScrollFadeIn } from '@/hooks/useScrollFadeIn';

const HeroSection = () => {
  const [ref, isVisible] = useScrollFadeIn<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`relative py-32 sm:py-56 px-6 fade-in-section ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      {/* Animated Circle Pattern Image on Right */}
      <img
        src="/images/Circle Pattern Mandala Art.avif"
        alt="Animated Circle Pattern"
        className="circle-layer1 absolute opacity-100 hidden md:block"
        style={{ width: '1000px', height: '1000px', top: 'calc(50% - 500px)', right: '-500px' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="text-left">
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



