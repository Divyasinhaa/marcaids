import React from 'react';

const PreviousClients2 = () => {
  const clients = [
    {
      skill: "UI/UX Design Fundamentals",
      feedback:
        "The peer-led sessions were engaging and practical. I learned design concepts through real examples.",
    },
    {
      skill: "Frontend Development Basics",
      feedback:
        "Amazing learning experience! The guidance and timely support from peers made everything easier to understand.",
    },
    {
      skill: "Project-Based Learning",
      feedback:
        "Working on real projects with peers helped me gain confidence and hands-on experience.",
    },
  ];

  return (
    <section className="bg-white py-6 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Skill-Based Learning Sessions</h2>
        <p className="text-gray-600 mb-6">
          Learners who enhanced their skills through collaborative,
          peer-to-peer learning experiences on SkillBridge.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-2xl shadow-sm"
            >
              <h3 className="text-xl font-semibold">{client.skill}</h3>
              <p className="text-sm text-gray-500 mb-2">
                Learning Mode: Peer Collaboration
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

export default PreviousClients2;
