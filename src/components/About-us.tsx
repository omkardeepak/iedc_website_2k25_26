import { useScrollFadeIn } from '@/hooks/useScrollFadeIn';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const About_us = () => {
  const [ref, isVisible] = useScrollFadeIn<HTMLElement>();

  return (
    <section
      ref={ref}
      id="about-us"
      className={`py-12 px-6 fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Newspaper-like heading */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-widest text-gray-900 mb-3">
            ABOUT US
          </h2>
        </div>

        {/* Newspaper style layout */}
        <div className="text-justify font-serif text-gray-800 leading-relaxed text-2xl md:text-3xl">
          {/* Full paragraph */}
          <p className="mb-6">
            <span className="font-bold text-3xl md:text-4xl text-purple-800">IEDC CUSAT</span> is a government-funded organization that aims to promote entrepreneurship among students and young professionals in India. We foster a culture of innovation and provide necessary resources to budding entrepreneurs.
          </p>

          {/* What We Offer list */}
          <div className="mb-6 break-inside-avoid">
            {/* <h3 className="font-bold text-4xl text-purple-800 mb-4">What We Offer</h3> */}
            <ul className="space-y-4 text-2xl md:text-3xl">
              <li className="flex items-start">
                <CheckCircleIcon className="h-8 w-8 text-purple-800 mr-4 flex-shrink-0" />
                <span>Provides various training and resources for future entrepreneurs</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-8 w-8 text-purple-800 mr-4 flex-shrink-0" />
                <span>Entrepreneurship-related workshops, seminars, and competitions</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-8 w-8 text-purple-800 mr-4 flex-shrink-0" />
                <span>Offers incubation facilities for start-ups at CITTIC, CUSAT</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-8 w-8 text-purple-800 mr-4 flex-shrink-0" />
                <span>Opportunities to connect with like-minded individuals</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About_us;
