import React from 'react';

const PreviousClients1 = () => {
  const clients = [
    {
      product: "Retirement-plan",
      feedback: "Fantastic service! The finance management is amazing.",
      image: "/clients/amit.jpg",
    },
    {
      product: "Investment Fund",
      feedback: "Fantastic service! The finance management is amazing. I appreciate the timely support.",
      image: "/clients/neha.jpg",
    },
  ];

  return (
    <section className="bg-white py-6 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Our Finance Clients</h2>
        <p className="text-gray-600 mb-6">
          A few of the valued customers who trusted us with their finance purchases.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-2xl shadow-sm">
             
              <h3 className="text-xl font-semibold">{client.name}</h3>
              <p className="text-sm text-gray-500 mb-2">Bought: {client.product}</p>
              <p className="italic text-gray-700 mt-2">“{client.feedback}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviousClients;
