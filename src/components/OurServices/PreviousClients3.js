import React from 'react';

const PreviousClients3 = () => {
  const clients = [
    {
      skill: "Data Structures & Algorithms",
      feedback:
        "Fantastic learning experience! The peer explanations were clear and exactly what I needed to strengthen my basics.",
    },
    {
      skill: "Machine Learning Fundamentals",
      feedback:
        "Smooth learning journey. I really appreciated the timely guidance and collaborative support from peers.",
    },
  ];

  return (
    <section className="bg-white py-6 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Skill Growth Journeys</h2>
        <p className="text-gray-600 mb-6">
          Learners who accelerated their growth through peer-to-peer mentorship
          and collaborative learning on SkillBridge.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-2xl shadow-sm"
            >
              <h3 className="text-xl font-semibold">{client.skill}</h3>
              <p className="text-sm text-gray-500 mb-2">
                Learning Mode: Peer Mentorship
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

export default PreviousClients3;
