
const HeroBanners = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      {/* Expert picks section */}
      <div className="text-center mb-6">
        <h2 className="text-lg font-normal text-gray-700">Expert picks at prices you'll love.</h2>
      </div>

      {/* Paper Deals Banner */}
      <div className="bg-red-600 text-white rounded-lg mb-6 overflow-hidden">
        <div className="flex items-center">
          <div className="flex-1 p-8">
            <div className="flex items-center mb-4">
              <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">SAVE</span>
              <span className="ml-3 text-4xl font-bold">35%</span>
            </div>
            <h3 className="text-3xl font-bold mb-2 tracking-wide">PAPER DEALS</h3>
            <p className="text-lg mb-6 font-light">on paper & supply essentials</p>
            <button className="bg-white text-red-600 px-6 py-3 rounded font-semibold hover:bg-gray-100 text-sm">
              Shop now
            </button>
          </div>
          <div className="w-64 h-40 bg-white/10 flex items-center justify-center text-gray-300">
            <span className="text-sm">Paper Image</span>
          </div>
        </div>
      </div>

      {/* Product grid - first row */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <div className="relative mb-3">
            <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-semibold">$5 off</span>
            <div className="w-full h-32 bg-gray-100 rounded flex items-center justify-center text-gray-400 text-sm">
              Product Image
            </div>
          </div>
          <p className="text-sm text-gray-700 mb-3 leading-tight">HP OfficeJet Pro 9015e Wireless Color All-in-One Printer</p>
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-red-600">$36.99</span>
            <span className="text-sm text-gray-500 line-through">$41.99</span>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <div className="w-full h-32 bg-gray-100 rounded flex items-center justify-center text-gray-400 mb-3 text-sm">
            Product Image
          </div>
          <p className="text-sm text-gray-700 mb-3 leading-tight">Staples Copy Paper, 8.5" x 11", Case</p>
          <span className="text-xl font-bold text-red-600">$36.99</span>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <div className="w-full h-32 bg-gray-100 rounded flex items-center justify-center text-gray-400 mb-3 text-sm">
            Product Image
          </div>
          <p className="text-sm text-gray-700 mb-3 leading-tight">Post-it Super Sticky Notes, 3" x 3"</p>
          <span className="text-xl font-bold text-red-600">$14.99</span>
        </div>

        <div className="bg-yellow-400 rounded-lg p-6 text-center flex flex-col justify-center">
          <h3 className="text-xl font-bold mb-2 text-black">Free & fast shipping on $35+</h3>
          <p className="text-sm text-black font-medium">Get it delivered to your door</p>
        </div>
      </div>
    </section>
  );
};

export default HeroBanners;
