import React from "react";
import { Target, Users, Workflow, BarChart3, TrendingUp } from "lucide-react";

const Principle = () => {
  const principles = [
    {
      title: "Purpose",
      icon: <Target size={40} />,
      description:
        "Driven by a clear mission to build impactful digital solutions that empower businesses.",
      bg: "bg-blue-300", // brighter blue
    },
    {
      title: "People",
      icon: <Users size={40} />,
      description:
        "Our strength lies in collaboration — talented teams working closely with our clients.",
      bg: "bg-green-300", // brighter green
    },
    {
      title: "Process",
      icon: <Workflow size={40} />,
      description:
        "Structured, transparent, and efficient workflows ensuring consistent project success.",
      bg: "bg-yellow-300", // brighter yellow
    },
    {
      title: "Performance",
      icon: <BarChart3 size={40} />,
      description:
        "Focused on measurable outcomes that drive real business growth.",
      bg: "bg-purple-300", // brighter purple
    },
    {
      title: "Progress",
      icon: <TrendingUp size={40} />,
      description:
        "Constantly evolving with technology to stay ahead in a fast-changing digital world.",
      bg: "bg-pink-300", // brighter pink
    },
  ];

  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
                <h1 className="text-4xl font-bold mb-4">What Drives Us Forward</h1>
        <h2 className="text-4xl font-bold mb-4">Our 5P Rule</h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
          Our core values define who we are and shape every decision we make.
        </p>

        {/* Cards in single row */}
        <div className="flex justify-between flex-wrap gap-6">
          {principles.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} flex-1 min-w-[200px] max-w-[220px] p-6 rounded-2xl shadow-md
                hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
            >
              <div className="text-slate-800 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Principle;