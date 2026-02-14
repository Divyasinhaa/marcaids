import React from 'react';

const PreviousClients1 = () => {
  const clients = [
    {
      track: "Career Planning & Long-Term Goals",
      feedback:
        "The peer guidance sessions helped me plan my career clearly. Learning from someone who had already walked this path was extremely valuable.",
    },
    {
      track: "Investment & Finance Basics Mentorship",
      feedback:
        "Amazing experience! The mentor explained concepts in a very practical way and supported me throughout the learning journey.",
    },
  ];

  return (
    <section className="bg-white py-6 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Mentorship & Learning Tracks</h2>
        <p className="text-gray-600 mb-6">
          Learners who gained clarity and confidence through peer-to-peer
          mentorship on SkillBridge.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-2xl shadow-sm"
            >
              <h3 className="text-xl font-semibold">{client.track}</h3>
              <p className="text-sm text-gray-500 mb-2">
                Session Type: Peer Mentorship
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

export default PreviousClients1;
