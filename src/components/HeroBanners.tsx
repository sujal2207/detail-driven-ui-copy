
const HeroBanners = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      {/* Expert picks section */}
      <div className="text-center mb-6">
        <h2 className="text-lg font-medium text-gray-800">Expert picks at prices you'll love.</h2>
      </div>

      {/* Paper Deals Banner */}
      <div className="bg-red-600 text-white rounded-lg mb-6 overflow-hidden">
        <div className="flex items-center">
          <div className="flex-1 p-8">
            <div className="flex items-center mb-4">
              <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">SAVE</span>
              <span className="ml-3 text-3xl font-bold">35%</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">PAPER DEALS</h3>
            <p className="text-lg mb-4">on paper & supply essentials</p>
            <button className="bg-white text-red-600 px-6 py-2 rounded font-medium hover:bg-gray-100">
              Shop now
            </button>
          </div>
          <div className="w-64 h-32 bg-white/10 flex items-center justify-center text-gray-300">
            <span>Paper Image</span>
          </div>
        </div>
      </div>

      {/* Product grid - first row */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
          <div className="relative mb-3">
            <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">$5 off</span>
            <div className="w-full h-32 bg-gray-100 rounded flex items-center justify-center text-gray-400">
              Product Image
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-2">HP OfficeJet Pro 9015e Wireless Color All-in-One Printer</p>
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-red-600">$36.99</span>
            <span className="text-sm text-gray-500 line-through">$41.99</span>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
          <div className="w-full h-32 bg-gray-100 rounded flex items-center justify-center text-gray-400 mb-3">
            Product Image
          </div>
          <p className="text-sm text-gray-600 mb-2">Staples Copy Paper, 8.5" x 11", Case</p>
          <span className="text-lg font-bold text-red-600">$36.99</span>
        </div>

        <div className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
          <div className="w-full h-32 bg-gray-100 rounded flex items-center justify-center text-gray-400 mb-3">
            Product Image
          </div>
          <p className="text-sm text-gray-600 mb-2">Post-it Super Sticky Notes, 3" x 3"</p>
          <span className="text-lg font-bold text-red-600">$14.99</span>
        </div>

        <div className="bg-yellow-400 rounded-lg p-4 text-center">
          <h3 className="text-xl font-bold mb-2">Free & fast shipping on $35+</h3>
          <p className="text-sm">Get it delivered to your door</p>
        </div>
      </div>
    </section>
  );
};

export default HeroBanners;
