const BestProduct = () => {
  return (
    <div className="w-full px-4 md:px-10 py-10 bg-white space-y-6">
      {/* Header Row */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-black">BEST PROJECT</h1>
        <h1 className="text-sm text-gray-700 cursor-pointer hover:underline">
          SEE MORE <span className="bi bi-arrow-up-right"></span>
        </h1>
      </div>

      {/* Image Grid */}
      <div className="grid grid-rows-2 gap-4 md:gap-6">
        {/* Top full-width image */}
        <img
          src="/lambo.jpg"
          alt="Top Project"
          className="w-full h-64 md:h-96 object-cover rounded-md shadow"
        />

        {/* Bottom row with two images */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/bq.jpg"
            alt="Bottom Left"
            className="w-full h-40 md:h-60 object-cover rounded-md shadow"
          />
          <img
            src="/diamond.jpg"
            alt="Bottom Right"
            className="w-full h-40 md:h-60 object-cover rounded-md shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default BestProduct;
