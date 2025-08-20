const Head = () => {
  return (
    <div className="relative w-full min-h-screen bg-white">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img src="/bga.png" className="w-full h-full object-cover" />
      </div>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6 relative z-10">
        <h1
          src="/avtr.png"
          className="text-white"
          alt="Avatar"
        >Oxaley</h1>
        <ul className="flex gap-4 text-sm">
          {["About", "Careers", "History"].map((item) => (
            <li key={item}>
              <a
                className="text-gray-500 transition hover:text-gray-500/75"
                href="#"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Headline and Description Side-by-Side */}
      <div className="relative  flex    px-4 md:px-10 py-10 w-full">
        
        {/* Left: Headline */}
        <div className=" mr-auto">
          <h1 className="text-white text-4xl md:text-6xl">Crafting</h1>
          <h1 className="text-white text-3xl md:text-5xl">narrative</h1>
          <h1 className="text-gray-500 text-2xl md:text-4xl">through</h1>
          <h1 className="text-gray-400 text-2xl md:text-3xl">design</h1>

          {/* Emoji Stack */}
          <div className="flex  space-x-[-12px] ">
            {["🍕", "🍔", "🍟"].map((emoji, index) => (
              <div
                key={index}
                className="w-6 h-6 rounded-full border border-black bg-white flex items-center justify-center shadow"
              >
                <span className="text-sm">{emoji}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Description */}
        <div className="text-right md:text-right w-full md:w-1/2 self-start ">
          <p className="text-sm sm:block md:hidden text-gray-300 leading-snug">
            <span className="block ">We believe good design is</span>{" "}
            <span className="block ">  key to building strong</span>{" "}
            <span className="block ">  connections.</span>
          </p>          
          <p className="text-sm hidden md:block text-gray-300 leading-snug">
            <span className="block ">We believe good design is key to</span>{" "}
            <span className="block ">   building strong connections.</span>{" "}

          </p>
        </div>
      </div>

      {/* Portfolio Section */}
      <PortfolioSection />
    </div>
  );
};

export default Head;

const PortfolioSection = () => {
  return (
    <div className="relative w-full px-4 md:px-12 lg:px-20 py-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
      {/* Left Text */}
      <div className="text-sm md:text-base font-medium text-black">
        SEE OUR PORTFOLIO
      </div>

      {/* Image Grid */}
      <div className="flex gap-2 md:gap-3">
        {["/apple.jpeg", "/applea.jpg", "/car.jpeg"].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Portfolio ${index + 1}`}
            className="w-20 h-14 md:w-24 md:h-16 object-cover rounded-md"
          />
        ))}
      </div>

      {/* Scroll Button */}
      <div
        className="flex items-center gap-2 text-sm md:text-base text-black cursor-pointer"
        onClick={() => {
          const el = document.getElementById("next-section");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span>SCROLL NOW</span>
        <button className="w-8 h-8 flex items-center justify-center border border-black rounded-full bg-white">
          <i className="bi bi-arrow-down text-black"></i>
        </button>
      </div>
    </div>
  );
};
