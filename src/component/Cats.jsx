export default function Cats() {
  const sections = [
    {
      title: "Mobile App",
      subtitle: "Design",
      img: "/desert.jpg",
      desc: ["Description here", "3 lines but", "at the center"],
    },
    {
      title: "Game UI",
      subtitle: "Illustration",
      img: "/car.jpeg",
      desc: ["Game style", "Interface UX", "Immersive feel"],
    },
    {
      title: "Branding",
      subtitle: "Typography",
      img: "/bq.jpg",
      desc: ["Fonts and", "letter spacing", "modern visual"],
    },
  ];

  return (
    <div className="space-y-10">
      {sections.map((sec, idx) => (
        <div
          key={idx}
          className="flex flex-col md:flex-row items-center md:items-center justify-between w-full gap-6 px-4"
        >
          {/* First: Text */}
          <div className="md:flex-1 flex justify-center md:justify-start">
            <div className="text-left text-gray-800">
              <h1 className="text-3xl font-semibold mb-1">{sec.title}</h1>
              <h2 className="text-3xl font-normal">{sec.subtitle}</h2>
            </div>
          </div>

          {/* Second: Image */}
          <div className="md:flex-1 flex justify-center">
            <img
              src={sec.img}
              alt={`Preview ${idx}`}
              className="w-32 h-40 object-cover rounded-md"
            />
          </div>

          {/* Third: Description */}
          <div className="md:flex-1 flex justify-center md:justify-end">
            <div className="text-[10px] text-gray-600 text-center md:text-left space-y-1">
              {sec.desc.map((line, i) => (
                <p key={i}>- {line}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
