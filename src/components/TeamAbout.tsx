import React from "react";

const TeamAbout = () => {
  return (
    <section className="py-12 bg-[#42a5f5] px-6">
      <div className="max-w-4xl mx-auto text-center text-white">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Our Team
        </h2>

        {/* Subheading */}
        <h3 className="text-2xl md:text-3xl font-semibold mb-6 italic">
          More Than a Team A Family
        </h3>

        {/* Paragraph */}
        <p className="text-lg md:text-xl leading-relaxed italic font-light">
          At VENRASUN, we believe great products are built by great people.
          Our team thrives on collaboration, curiosity, and a shared passion
          for solving complex problems. We don't just work together we
          learn, grow, and celebrate together.
          <br /><br />
         
        </p>

      </div>
    </section>
  );
};

export default TeamAbout;