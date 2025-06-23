import React from "react";

const products = [
  {
    image: "https://via.placeholder.com/120x140?text=Planner",
    title: "2025-2026 AT-A-GLANCE Contemporary Lite 7'' x 8.75'' Academic Weekly & Monthly Planner, Faux Leather Cover, ...",
    price: "$26.99",
    button: "Pick up",
    tag: "In-store only",
    rating: null,
    reviews: null,
  },
  {
    image: "https://via.placeholder.com/120x140?text=BIC+Highlighters",
    title: "BIC Brite Liner Stick Highlighters, Chisel, Assorted, 5/Pack (BLP51W-AST)",
    price: "$1.99",
    oldPrice: "$4.29",
    button: "Add",
    rating: 4,
    reviews: 180,
  },
  {
    image: "https://via.placeholder.com/120x140?text=HP+8135e",
    title: "HP OfficeJet Pro 8135e Wireless Color All-in-One Printer, Print Scan Copy Fax, Best for Home Office, 3 Months FREE In...",
    price: "$159.99",
    oldPrice: "$234.99",
    button: "Add",
    rating: 4,
    reviews: 1066,
  },
  {
    image: "https://via.placeholder.com/120x140?text=HP+9125e",
    title: "HP OfficeJet Pro 9125e Wireless Color All-in-One Inkjet Printer, Print, Scan, Copy, Fax, Best for Home Office, 3...",
    price: "$209.99",
    oldPrice: "$239.99",
    button: "Add",
    rating: 4,
    reviews: 1182,
  },
];

const Star = () => (
  <span className="text-yellow-400">★</span>
);

const SponsoredProducts = () => {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center mb-6">
          <div className="bg-gray-100 rounded-lg w-72 h-64 flex flex-col justify-center items-start p-8 mr-6">
            <h2 className="text-4xl font-bold mb-2">Sponsored<br/>Products</h2>
          </div>
          <div className="flex-1 overflow-x-auto">
            <div className="flex space-x-6 min-w-[900px]">
              {products.map((product, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow p-4 w-64 flex-shrink-0 relative flex flex-col justify-between">
                  <div>
                    <img src={product.image} alt={product.title} className="w-full h-36 object-contain mb-2 rounded" />
                    {product.tag && (
                      <span className="absolute top-2 left-2 bg-white border border-red-500 text-red-500 text-xs px-2 py-1 rounded">{product.tag}</span>
                    )}
                    <div className="text-xs text-gray-700 mb-1 line-clamp-2 min-h-[32px]">{product.title}</div>
                    {product.rating && (
                      <div className="flex items-center text-xs mb-1">
                        {[...Array(product.rating)].map((_, i) => <Star key={i} />)}
                        <span className="ml-1 text-blue-600 underline cursor-pointer">{product.reviews}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="flex items-end space-x-2 mb-2">
                      <span className="text-lg font-bold text-red-600">{product.price}</span>
                      {product.oldPrice && <span className="text-sm text-gray-500 line-through">{product.oldPrice}</span>}
                    </div>
                    <button className="w-full border border-gray-300 rounded-full py-2 font-medium hover:bg-gray-100 transition">{product.button}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsoredProducts;
