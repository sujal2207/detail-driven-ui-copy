import React from "react";

const DealsClearanceBanners = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 flex gap-6 mt-2 mb-10">
      <div className="flex-1 bg-red-700 rounded-xl flex flex-col items-center justify-center py-12 relative shadow">
        <div className="absolute top-8 left-1/2 -translate-x-1/2 text-6xl opacity-80">🔒</div>
        <h2 className="text-4xl font-bold text-white mt-16 mb-2">My<span className="font-black">Deals</span></h2>
        <p className="text-white text-lg font-medium mb-2">Exclusive savings every week</p>
      </div>
      <div className="flex-1 bg-yellow-400 rounded-xl flex flex-col items-center justify-center py-12 relative shadow">
        <div className="absolute top-8 left-1/2 -translate-x-1/2 text-6xl opacity-80">🔒</div>
        <h2 className="text-4xl font-bold text-black mt-16 mb-2">Clearance</h2>
        <p className="text-black text-lg font-medium mb-2">Last-chance deals on the items you need</p>
      </div>
    </div>
  );
};

export default DealsClearanceBanners;
