const UpcomingEvents = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="font-headline text-3xl md:text-5xl font-bold headline-text mb-8">
          EVENTS
        </h2>

        {/* Upcoming Events */}
        <h3 className="font-headline text-2xl md:text-4xl font-semibold mb-4">
          Upcoming Events
        </h3>
        <p className="text-2xl md:text-4xl mb-16">
          Stay tuned for our upcoming events and programs.
        </p>

        {/* Past Events */}
        <h3 className="font-headline text-2xl md:text-4xl font-semibold mb-8">
          Past Events
        </h3>
        <p className="text-2xl md:text-4xl mb-8">
          A look back at our recent activities and achievements.
        </p>

        {/* Makeaton 7.0 Card */}
        <div className="bg-coffee-bg-1 rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row w-full h-auto md:h-96 mb-12">
          {/* Text Section */}
          <div className="flex-1 p-6 flex flex-col justify-center text-left">
            <h4 className="font-headline text-3xl md:text-4xl font-bold mb-4 text-black">
              Makeaton 7.0
            </h4>
            <p className="text-black text-xl md:text-2xl leading-relaxed">
              CITTIC CUSAT proudly hosted ✨ MAKE-A-TON 7.0 ✨ powered by Eduport! The event brought together innovators and coders for Kerala's largest hackathon, in partnership with MLH. With a special track on ‘Best Use of Conductor’ sponsored by Orkes, along with other exciting tracks by Eduport, GoDaddy, Auth0, Streamlit, Cloudflare, and more, participants competed for prizes worth over 1 lakh in cash and 8 track prizes.⚡
            </p>
          </div>

          {/* Image Section (Right Side) */}
          <div className="w-full md:w-96 h-64 md:h-96">
            <img
              src="/images/Makeaton (1).jpg"
              alt="Makeaton Event"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Innovate and Elevate Card */}
        <div className="bg-coffee-bg-1 rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row w-full mb-12">
          {/* Text Section */}
          <div className="flex-1 p-6 flex flex-col justify-center text-left">
            <h4 className="font-headline text-3xl md:text-4xl font-bold mb-2 text-black">
              Innovate and Elevate
            </h4>
            <p className="text-black text-xl md:text-2xl">
              Innovate & Elevate: Empowering Entrepreneurs

Gain insider insights, guidance from experts, and network with peers. Don't miss this opportunity to kickstart your entrepreneurial journey!
            </p>
          </div>

          {/* Image Section (Right Side) */}
          <div className="w-full md:w-96 h-64 md:h-auto">
            <img
              src="/images/innovate-and-elevate.jpeg"
              alt="Innovate and Elevate Event"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Redbull Basement Card */}
        <div className="bg-coffee-bg-1 rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row w-full">
          {/* Text Section */}
          <div className="flex-1 p-6 flex flex-col justify-center text-left">
            <h4 className="font-headline text-3xl md:text-4xl font-bold mb-2 text-black">
              Redbull Basement
            </h4>
            <p className="text-black text-xl md:text-2xl">
              Redbull basement powered by Make-A-Ton 7.0: Level Up Your Ideas !

Got that creative spark buzzing like a rogue WiFi signal? It’s time to take them global with Red Bull Basement!
            </p>
          </div>

          {/* Image Section (Right Side) */}
          <div className="w-full md:w-96 h-64 md:h-auto">
            <img
              src="/images/redbull-basement.jpeg"
              alt="Redbull Basement Event"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
