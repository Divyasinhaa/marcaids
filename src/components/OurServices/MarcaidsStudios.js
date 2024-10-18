import React from "react";
import Product1 from "./path/to/your/background-image.jpg"; // Import your background image

const MarcaidsStudios = () => {
  return (
    <div
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Product1})` }}
    >
      {/* Circular Background Element */}
      <div className="absolute w-96 h-96 rounded-full bg-gray-300 opacity-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"></div>

      {/* Content */}
      <div className="flex flex-col items-center text-center text-gray-800">
        <img
          src="your-newspaper-image.jpg" // Replace with the path to your image
          alt="Newspaper"
          className="w-full max-w-md h-auto mb-8"
        />
        <h1 className="text-4xl font-bold">MARCAIDS STUDIOS</h1>
        <h2 className="text-2xl mt-4">OUR SERVICES</h2>
      </div>
    </div>
  );
};

export default MarcaidsStudios;
