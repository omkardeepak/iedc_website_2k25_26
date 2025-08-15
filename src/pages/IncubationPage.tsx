const IncubationPage = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <p className="font-serif text-2xl md:text-3xl leading-relaxed">
          Got a great idea but missing the resources to make it real? No worries! This is the place where you can team up with others, collaborate on projects, and transform your concepts into actual prototypes.
        </p>
        <p className="font-serif text-xl md:text-2xl leading-relaxed mt-6">
          Share your vision with us, and together we'll help you bring it to life.
        </p>
      </div>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="text-left">
            <p className="text-2xl md:text-3xl font-semibold mb-6">
              CUSAT Innovation and Technology Incubation Centre
            </p>
            <div className="max-w-xl text-gray-900 text-2xl md:text-3xl leading-relaxed space-y-8">
              <p>
                CITTIC is the Innovation and Technology Incubation Centre at Cochin University of Science and Technology. It provides a platform for students and faculty to transform their innovative ideas into successful ventures.
              </p>
              <p>
                With state-of-the-art infrastructure, mentorship, and funding opportunities, CITTIC supports startups in various domains, fostering a vibrant entrepreneurial ecosystem within the university.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/images/Cittic Logo.svg"
              alt="CITTIC Logo"
              className="w-48 h-auto md:w-72"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="text-left">
            <p className="text-2xl md:text-3xl font-semibold mb-6">
              RUSA
            </p>
            <div className="max-w-xl text-gray-900 text-2xl md:text-3xl leading-relaxed space-y-8">
              <p>
                As we know, early stage funding is a big challenge for innovators, especially student start-ups who are trying to commercialize innovative ideas. Understanding this challenge, CUSAT has decided to set up a start-up fund with financial support from RUSA. 
              </p>
              <p>
                The fund is managed by CUSAT-TBI of CUSATECH FOUNDATION with the objective of helping our students and researchers to convert their innovative ideas into full-fledged ventures. RUSA also established a start-up incubation centre in CUSAT called RISE TBI(RUSA Innovation Start-up Ecosystem Technology Business Incubator)
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/images/rusa.jpeg"
              alt="CITTIC Logo"
              className="w-48 h-auto md:w-72"
            />
          </div>
        </div>
      </section>

      {/* New Contact Information Section */}
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h1 className="font-headline text-3xl md:text-5xl font-bold mb-12">Contact Us</h1>
        <p className="font-serif text-2xl md:text-3xl leading-relaxed mb-6">
          We’re excited to connect with you! Whether you have questions, ideas, or want to collaborate, feel free to reach out. Drop us an email at <strong>cittic@cusat.ac.in</strong> or give us a call at <strong>+91 7907 600 633</strong>. We’re here to help and support your entrepreneurial journey.
        </p>
        <div className="mt-8 text-left inline-block">
          <p className="font-serif text-xl md:text-2xl mb-2"><strong>Email:</strong> cittic@cusat.ac.in</p>
          <p className="font-serif text-xl md:text-2xl mb-2"><strong>Phone:</strong> +91 7907 600 633</p>
          <p className="font-serif text-xl md:text-2xl"><strong>Address:</strong> Near University Guest House, CUSAT</p>
          <p className="font-serif text-xl md:text-2xl mt-4">
            Visit us online at{' '}
            <a 
              href="https://cittic.cusat.ac.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 underline"
            >
              cittic.cusat.ac.in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default IncubationPage;
