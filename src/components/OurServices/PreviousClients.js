import React from "react";

import smart from "../../assets/12.jpeg";
import smart1 from "../../assets/0.jpeg";

const PreviousClients = () => {
  const clients = [
    {
      name: "Amit Sharma",
      role: "Frontend Learner",
      feedback:
        "SkillBridge helped me connect with peers who guided me through real-world projects. Learning felt practical and collaborative.",
      image: smart,
    },
    {
      name: "Neha Verma",
      role: "Mentorship Program Mentee",
      feedback:
        "The micro-mentorship sessions were extremely helpful. I gained clarity, confidence, and industry insights.",
      image: smart1,
    },
  ];

  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Our Learners & Alumni</h2>
        <p className="text-gray-600 mb-8">
          Hear from students and professionals who grew through SkillBridge’s
          peer-to-peer learning and mentorship.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-2xl shadow-sm flex flex-col items-center"
            >
              <img
                src={client.image}
                alt={client.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />

              <h3 className="text-xl font-semibold">{client.name}</h3>
              <p className="text-sm text-gray-500 mb-2">
                Role: {client.role}
              </p>
              <p className="italic text-gray-700 mt-2">
                “{client.feedback}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviousClients;
