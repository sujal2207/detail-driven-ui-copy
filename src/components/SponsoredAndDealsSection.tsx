import React from "react";

const sponsoredProducts = [
  {
    label: "In-store only",
    image: "https://www.staples-3p.com/s7/is/image/Staples/s1129326_sc7?wid=128&hei=128",
    title: "2025-2026 AT-A-GLANCE Contemporary Lite 7'' x 8.75'' Academic Weekly & Monthly Planner, Faux Leather Cover, ...",
    reviews: null,
    price: "$26.99",
    action: "Pick up",
  },
  {
    image: "https://www.staples-3p.com/s7/is/image/Staples/s1130537_sc7?wid=128&hei=128",
    title: "BIC Brite Liner Stick Highlighters, Chisel, Assorted, 5/Pack (BLP51W-AST)",
    reviews: { stars: 4, count: 180 },
    price: "$1.99",
    oldPrice: "$4.29",
    action: "Add",
  },
  {
    image: "https://www.staples-3p.com/s7/is/image/Staples/s1130538_sc7?wid=128&hei=128",
    title: "HP OfficeJet Pro 8135e Wireless Color All-in-One Printer, Print Scan Copy Fax, Best for Home Office, 3 Months FREE In...",
    reviews: { stars: 4, count: 1066 },
    price: "$159.99",
    oldPrice: "$234.99",
    action: "Add",
  },
  {
    image: "https://www.staples-3p.com/s7/is/image/Staples/s1130539_sc7?wid=128&hei=128",
    title: "HP OfficeJet Pro 9125e Wireless Color All-in-One Inkjet Printer, Print, Scan, Copy, Fax, Best for Home Office, 3...",
    reviews: { stars: 4, count: 1182 },
    price: "$209.99",
    oldPrice: "$239.99",
    action: "Add",
  },
];

const lockIcon = (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-2">
    <rect x="12" y="20" width="24" height="16" rx="4" fill="white" fillOpacity="0.7" />
    <rect x="18" y="12" width="12" height="12" rx="6" fill="white" fillOpacity="0.7" />
  </svg>
);

const SponsoredAndDealsSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Sponsored Products Row */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Sponsored Products Left Card */}
        <div className="bg-white rounded-2xl shadow-md flex items-center justify-center min-w-[260px] min-h-[260px] p-8 relative" style={{backgroundImage: 'url(https://www.staples.com/sk/img/sponsored-bg.svg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <span className="text-3xl font-bold text-black z-10">Sponsored<br />Products</span>
        </div>
        {/* Product Cards */}
        <div className="flex-1 flex gap-6 overflow-x-auto">
          {sponsoredProducts.map((prod, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md p-4 min-w-[260px] flex flex-col justify-between">
              {prod.label && (
                <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded font-bold absolute mt-2 ml-2">{prod.label}</span>
              )}
              <img src={prod.image} alt={prod.title} className="w-24 h-24 object-contain mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">{prod.title}</div>
              {prod.reviews ? (
                <div className="flex items-center text-xs text-yellow-600 mb-1">
                  {"★".repeat(prod.reviews.stars)}<span className="text-gray-500 ml-1">{prod.reviews.count}</span>
                </div>
              ) : (
                <div className="text-xs text-gray-400 mb-1">No reviews yet</div>
              )}
              <div className="flex items-end gap-2 mb-2">
                <span className="text-lg font-bold text-black">{prod.price}</span>
                {prod.oldPrice && <span className="text-xs line-through text-gray-500">{prod.oldPrice}</span>}
              </div>
              <div className="flex items-center gap-2">
                <select className="border rounded px-2 py-1 text-sm">
                  <option>1</option>
                </select>
                <button className="border rounded-full px-6 py-1 font-semibold text-black bg-white hover:bg-gray-100 transition">{prod.action}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* MyDeals & Clearance Row */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* MyDeals */}
        <div className="flex-1 bg-red-700 rounded-2xl flex flex-col items-center justify-center p-10 min-h-[180px] relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-red-800 rounded-t-2xl opacity-30" />
          {lockIcon}
          <div className="text-4xl font-extrabold text-white mb-2"><span className="font-normal">My</span>Deals</div>
          <div className="text-white text-lg font-medium">Exclusive savings every week</div>
        </div>
        {/* Clearance */}
        <div className="flex-1 bg-yellow-400 rounded-2xl flex flex-col items-center justify-center p-10 min-h-[180px] relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-yellow-500 rounded-t-2xl opacity-30" />
          {lockIcon}
          <div className="text-4xl font-extrabold text-black mb-2">Clearance</div>
          <div className="text-black text-lg font-medium">Last-chance deals on the items you need</div>
        </div>
      </div>
    </section>
  );
};

export default SponsoredAndDealsSection; 