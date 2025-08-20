const HeroSection = () => {
  return (
    <div className="px-4 md:ml-10 mt-10 md:mt-20 max-w-full">
      <h1 className="text-black text-3xl md:text-5xl leading-snug break-words max-w-full">
        At Demmers
        <span className="bi text-black bi-dash-lg" /> we believe
        <br />
        that design is not just
        <br />
        about appearance but
        <br />
        also{" "}
        <span className="text-[#333333]">
          about creating
          <span className="bi text-black bi-dash-lg" />
          <br />
          immersive and
          <br />
          meaningful
          <span className="bi text-black bi-dash-lg" />
          experiences
        </span>
      </h1>
    </div>
  );
};

export default HeroSection;
