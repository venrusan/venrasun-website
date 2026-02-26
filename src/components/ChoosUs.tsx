import React from "react";
import customerImportance from "@/assets/customerhandshake.jpg";

const ChooseUs = () => {
  const features = [
    {
      title: "Client Satisfaction",
      desc: "We measure our success through yours delivering results that exceed expectations every time.",
    },
    {
      title: "Experienced Team",
      desc: "Seasoned professionals with deep expertise across industries and technologies.",
    },
    {
      title: "Quality Delivery",
      desc: "Rigorous standards and proven methodologies guarantee exceptional outcomes.",
    },
    {
      title: "Reliable Support",
      desc: "Dedicated round-the-clock support ensuring your systems never miss a beat.",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 text-lg">
            Why Our Services Stand Out
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="space-y-8 max-w-xl mx-auto lg:mx-0">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="text-3xl font-bold text-[#42a5f5]">
                  {`0${index + 1}`}
                </span>
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={customerImportance}
              alt="Why Choose Us"
              className="rounded-2xl shadow-xl w-full max-w-md"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ChooseUs;