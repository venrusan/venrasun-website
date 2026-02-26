import React from "react";

const AboutCard = () => {
  return (
    <section className="py-24 flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-7xl bg-[#42a5f5] rounded-2xl p-10 text-white text-center shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Let's discuss how <span className="font-semibold">VENRASUN</span> can help you achieve your goals. Our team is ready to listen and deliver.
        </p>
        <button
          className="bg-white text-[#42a5f5] font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default AboutCard;