import React from "react";

export default function Card() {
  return (
    <div className="relative mb-20 w-full h-screen bg-[#1e1b2e] overflow-hidden rounded-xl">
      {/* Background Image */}
      <img
        src="/brg.png" // Replace with your image path
        alt="Futuristic"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay Gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e1b2e]/80 to-[#2e1b4e]/50 z-10" />

      {/* Text Content */}
      <div className="relative z-20 p-10 text-white font-sans">
        <div className="text-gray-400 text-3xl font-medium">Horigo style <span className="text-sm">03</span></div>
        <div className="text-white text-5xl font-bold my-4">Lordsleep App <span className="text-sm">04</span></div>
        <div className="text-gray-400 text-3xl font-medium">Datingford <span className="text-sm">05</span></div>
        <div className="text-gray-400 text-3xl font-medium">Holigan <span className="text-sm">06</span></div>
      </div>

      {/* Bottom Page Indicator */}
      <div className="absolute bottom-6 left-10 z-20 text-white text-sm tracking-widest">
        <div className="h-1 w-6 bg-white mb-1" />
        <span>04/08</span>
      </div>
    </div>
  );
}
