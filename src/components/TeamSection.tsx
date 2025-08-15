import { Linkedin } from "lucide-react";

const TeamSection = () => {
  const topMembers = [
    { name: "Ashwin", role: "Lead", img: "", linkedin: "#" },
    { name: "Anjana Shankar", role: "Co-Lead", img: "", linkedin: "#" }
  ];

  const bottomMembers = [
    { name: "Abinash Singh", role: "Tech Lead", img: "", linkedin: "#" },
    { name: "Abinash Singh", role: "Design Lead", img: "", linkedin: "#" },
    { name: "Abinash Singh", role: "Marketing Lead", img: "", linkedin: "#" },
    { name: "Abinash Singh", role: "Operations Lead", img: "", linkedin: "#" },
    { name: "Abinash Singh", role: "Product Lead", img: "", linkedin: "#" }
  ];

  return (
    <section className="py-16 px-6">
      {/* Title */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="font-headline text-4xl md:text-5xl font-bold headline-text">
          CORE TEAM
        </h2>
      </div>

      {/* Top row (Lead & Co-Lead) */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {topMembers.map((member, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center transition-transform"
          >
            <div className="w-48 h-48 bg-gray-300 rounded-full mb-4"></div>
            <h3 className="text-2xl font-bold">{member.name}</h3>
            <p className="text-xl text-gray-500">{member.role}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 p-2 rounded-full hover:bg-blue-100 transition-colors"
            >
              <Linkedin className="w-6 h-6 text-gray-500 hover:text-blue-600 transition-colors" />
            </a>
          </div>
        ))}
      </div>

      {/* Bottom row (Leads) */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {bottomMembers.map((member, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center transition-transform"
          >
            <div className="w-36 h-36 bg-gray-300 rounded-full mb-3"></div>
            <h3 className="text-xl font-bold text-center">{member.name}</h3>
            <p className="text-xs text-gray-500 text-center">{member.role}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 p-1 rounded-full hover:bg-blue-100 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-gray-500 hover:text-blue-600 transition-colors" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
