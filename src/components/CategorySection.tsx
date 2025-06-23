
const CategorySection = () => {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Trending products */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-6">Trending products</h2>
          <div className="grid grid-cols-8 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="text-center">
                <div className="w-full h-24 bg-gray-100 rounded-lg mb-2 flex items-center justify-center text-gray-400">
                  Product
                </div>
                <p className="text-xs text-gray-600">Product Name</p>
                <p className="text-sm font-bold text-red-600">$XX.XX</p>
              </div>
            ))}
          </div>
        </div>

        {/* Category promotion banners */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-900 text-white rounded-lg p-6 relative overflow-hidden">
            <h3 className="text-2xl font-bold mb-2">Get campus-ready with these college must-haves</h3>
            <p className="mb-4">Everything you need for a successful semester</p>
            <button className="bg-white text-blue-900 px-6 py-2 rounded font-medium">Shop college</button>
            <div className="absolute right-4 top-4 text-6xl opacity-20">📚</div>
          </div>
          
          <div className="bg-gray-100 rounded-lg p-6">
            <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">$49.99</span>
            <h3 className="text-xl font-bold mt-2 mb-2">Logitech Wireless Mouse</h3>
            <p className="text-gray-600 mb-4">Precision and comfort for everyday use</p>
            <button className="bg-red-600 text-white px-6 py-2 rounded font-medium">Add to cart</button>
          </div>
        </div>

        {/* Saved by the break promotion */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg p-8 text-center mb-8">
          <h2 className="text-3xl font-bold text-black mb-2">Saved by the break.</h2>
          <p className="text-lg text-black mb-6">Quick fixes for all your office breakdowns</p>
          <button className="bg-black text-white px-8 py-3 rounded-lg font-medium">Shop break fixes</button>
        </div>

        {/* Additional product categories */}
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-white border rounded-lg p-4">
            <div className="w-full h-32 bg-gray-100 rounded mb-3 flex items-center justify-center text-gray-400">
              Chair
            </div>
            <h3 className="font-medium mb-2">Office Chairs</h3>
            <p className="text-red-600 font-bold">Starting at $99</p>
          </div>
          
          <div className="bg-white border rounded-lg p-4">
            <div className="w-full h-32 bg-gray-100 rounded mb-3 flex items-center justify-center text-gray-400">
              Printer
            </div>
            <h3 className="font-medium mb-2">Printers & Scanners</h3>
            <p className="text-red-600 font-bold">Up to 40% off</p>
          </div>
          
          <div className="bg-white border rounded-lg p-4">
            <div className="w-full h-32 bg-gray-100 rounded mb-3 flex items-center justify-center text-gray-400">
              Supplies
            </div>
            <h3 className="font-medium mb-2">Office Supplies</h3>
            <p className="text-red-600 font-bold">$10 off $50+</p>
          </div>
          
          <div className="bg-white border rounded-lg p-4">
            <div className="w-full h-32 bg-gray-100 rounded mb-3 flex items-center justify-center text-gray-400">
              Tech
            </div>
            <h3 className="font-medium mb-2">Technology</h3>
            <p className="text-red-600 font-bold">Free shipping</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
