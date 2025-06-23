
const CategorySection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Trending products */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">Trending products</h2>
          <div className="grid grid-cols-8 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="text-center">
                <div className="w-full h-24 bg-gray-100 rounded-lg mb-3 flex items-center justify-center text-gray-400 text-xs">
                  Product
                </div>
                <p className="text-xs text-gray-600 mb-1">Product Name</p>
                <p className="text-sm font-bold text-red-600">$XX.XX</p>
              </div>
            ))}
          </div>
        </div>

        {/* Category promotion banners */}
        <div className="grid grid-cols-2 gap-6 mb-12">
          <div className="bg-blue-900 text-white rounded-lg p-8 relative overflow-hidden">
            <h3 className="text-2xl font-bold mb-4 leading-tight">Get campus-ready with these college must-haves</h3>
            <p className="mb-6 text-lg">Everything you need for a successful semester</p>
            <button className="bg-white text-blue-900 px-6 py-3 rounded font-semibold hover:bg-gray-100">Shop college</button>
            <div className="absolute right-6 top-6 text-6xl opacity-20">📚</div>
          </div>
          
          <div className="bg-gray-100 rounded-lg p-8">
            <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">$49.99</span>
            <h3 className="text-2xl font-bold mt-4 mb-3">Logitech Wireless Mouse</h3>
            <p className="text-gray-600 mb-6 text-lg">Precision and comfort for everyday use</p>
            <button className="bg-red-600 text-white px-6 py-3 rounded font-semibold hover:bg-red-700">Add to cart</button>
          </div>
        </div>

        {/* Saved by the break promotion */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg p-12 text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">Saved by the break.</h2>
          <p className="text-xl text-black mb-8">Quick fixes for all your office breakdowns</p>
          <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800">Shop break fixes</button>
        </div>

        {/* Additional product categories */}
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="w-full h-32 bg-gray-100 rounded mb-4 flex items-center justify-center text-gray-400 text-sm">
              Chair
            </div>
            <h3 className="font-semibold mb-2 text-gray-900">Office Chairs</h3>
            <p className="text-red-600 font-bold text-lg">Starting at $99</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="w-full h-32 bg-gray-100 rounded mb-4 flex items-center justify-center text-gray-400 text-sm">
              Printer
            </div>
            <h3 className="font-semibold mb-2 text-gray-900">Printers & Scanners</h3>
            <p className="text-red-600 font-bold text-lg">Up to 40% off</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="w-full h-32 bg-gray-100 rounded mb-4 flex items-center justify-center text-gray-400 text-sm">
              Supplies
            </div>
            <h3 className="font-semibold mb-2 text-gray-900">Office Supplies</h3>
            <p className="text-red-600 font-bold text-lg">$10 off $50+</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="w-full h-32 bg-gray-100 rounded mb-4 flex items-center justify-center text-gray-400 text-sm">
              Tech
            </div>
            <h3 className="font-semibold mb-2 text-gray-900">Technology</h3>
            <p className="text-red-600 font-bold text-lg">Free shipping</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
