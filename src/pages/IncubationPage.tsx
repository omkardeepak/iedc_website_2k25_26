const IncubationPage = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
        <p className="font-serif text-4xl sm:text-5xl md:text-6xl leading-relaxed">
          Got a great idea but missing the resources to make it real? No worries! This is the place where you can team up with others, collaborate on projects, and transform your concepts into actual prototypes.
        </p>
        <p className="font-serif text-3xl sm:text-4xl md:text-5xl leading-relaxed mt-6 sm:mt-8">
          Share your vision with us, and together we'll help you bring it to life.
        </p>
      </div>

      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 sm:gap-16 items-center">
          <div className="text-left">
            <p className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 sm:mb-8">
              CUSAT Innovation and Technology Incubation Centre
            </p>
            <div className="max-w-2xl text-gray-900 text-2xl sm:text-3xl md:text-4xl leading-relaxed space-y-8 sm:space-y-10">
              <p>
                CITTIC is the Innovation and Technology Incubation Centre at Cochin University of Science and Technology. It provides a platform for students and faculty to transform their innovative ideas into successful ventures.
              </p>
              <p>
                With state-of-the-art infrastructure, mentorship, and funding opportunities, CITTIC supports startups in various domains, fostering a vibrant entrepreneurial ecosystem within the university.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-8 md:mt-0">
            <img
              src="/images/Cittic Logo.svg"
              alt="CITTIC Logo"
              className="w-72 sm:w-80 h-auto md:w-96"
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 sm:gap-16 items-center">
          <div className="text-left">
            <p className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 sm:mb-8">
              RUSA
            </p>
            <div className="max-w-2xl text-gray-900 text-2xl sm:text-3xl md:text-4xl leading-relaxed space-y-8 sm:space-y-10">
              <p>
                As we know, early stage funding is a big challenge for innovators, especially student start-ups who are trying to commercialize innovative ideas. Understanding this challenge, CUSAT has decided to set up a start-up fund with financial support from RUSA. 
              </p>
              <p>
                The fund is managed by CUSAT-TBI of CUSATECH FOUNDATION with the objective of helping our students and researchers to convert their innovative ideas into full-fledged ventures. RUSA also established a start-up incubation centre in CUSAT called RISE TBI(RUSA Innovation Start-up Ecosystem Technology Business Incubator)
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-8 md:mt-0">
            <img
              src="/images/rusa.jpeg"
              alt="RUSA Logo"
              className="w-72 sm:w-80 h-auto md:w-full"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default IncubationPage;