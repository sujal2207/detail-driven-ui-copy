
const ProductGrid = () => {
  const products = [
    { name: "Brother HL-L2350DW Compact Laser Printer", price: "$149.99", originalPrice: "$179.99", discount: "30%" },
    { name: "Staples 24 lb. Copy Paper", price: "$24.99", originalPrice: "$29.99", discount: null },
    { name: "Sharpie Permanent Markers", price: "$14.99", originalPrice: null, discount: "60%" },
    { name: "Post-it Super Sticky Notes", price: "$19.99", originalPrice: null, discount: null },
    { name: "HP 65 Ink Cartridge", price: "$34.99", originalPrice: "$39.99", discount: null },
    { name: "Steelcase Think Chair", price: "$449.99", originalPrice: "$549.99", discount: null },
    { name: "Samsung Monitor 24-inch", price: "$159.99", originalPrice: "$199.99", discount: null },
    { name: "Lysol Disinfecting Wipes", price: "$12.99", originalPrice: null, discount: null },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-2 text-gray-900">ENDLESS SUMMER DEALS</h2>
        <p className="text-gray-600 mb-8 text-lg">We picked the best deals from across our site</p>
        
        <div className="grid grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow border border-gray-200">
              <div className="relative mb-4">
                {product.discount && (
                  <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-semibold">
                    {product.discount} off
                  </span>
                )}
                <div className="w-full h-40 bg-gray-100 rounded flex items-center justify-center text-gray-400 text-sm">
                  Product Image
                </div>
              </div>
              <h3 className="text-sm text-gray-800 mb-3 line-clamp-2 leading-tight">{product.name}</h3>
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold text-red-600">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
