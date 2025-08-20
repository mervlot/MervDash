const AboutHeader = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start gap-6 px-4 md:px-10 py-10">
      {/* Left Side - Title */}
      <h1 className="text-xl md:text-2xl font-semibold text-black">ABOUT US</h1>

      {/* Center - Description */}
      <div className="flex-1 text-sm text-gray-700 leading-relaxed">
        <p>
          We combine creativity and technology <br />
          to deliver results that not only meet <br />
          expectations, but exceed them.
        </p>
        <div className="mt-4 font-bold text-black cursor-pointer hover:underline">
          LEARN MORE <span className="bi bi-arrow-right"></span>
        </div>
      </div>

      {/* Right Side - 3 Boxes */}
      <div className="grid grid-rows-3 gap-2">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="w-28 h-16 rounded-md bg-white border border-[#c9c2c2] shadow-sm"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AboutHeader;
