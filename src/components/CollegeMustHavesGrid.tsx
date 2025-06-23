import React from "react";

const CollegeMustHavesGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-8">
        Get campus ready with these college must-haves.
      </h2>
      <div className="grid grid-cols-6 gap-6">
        {/* Left large card */}
        <div className="col-span-2 bg-white rounded-2xl shadow-lg flex flex-col justify-between p-8 relative min-h-[500px]">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
            alt="Dorm Desk"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
          />
          <div className="relative z-10 flex flex-col h-full justify-end">
            <ul className="mb-8 space-y-4 text-white text-2xl font-bold">
              <li className="flex items-center gap-3">
                <span className="text-3xl">✔</span> Laptop
              </li>
              <li className="flex items-center gap-3">
                <span className="text-3xl">✔</span> Gaming chair
              </li>
              <li className="flex items-center gap-3 italic font-extrabold">
                <span className="text-3xl">✔</span> Dorm goals crushed
              </li>
            </ul>
            <a href="#" className="text-white font-semibold underline text-lg">Shop now</a>
          </div>
        </div>
        {/* Right grid cards */}
        <div className="col-span-4 grid grid-cols-3 grid-rows-2 gap-6">
          {/* Top left */}
          <div className="bg-blue-100 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-gray-700">As low as</span>
              <div className="text-3xl font-extrabold text-red-600 leading-tight">$88<sup className="text-base align-super">69</sup></div>
              <p className="text-gray-700 mt-2 text-sm">stock up on dorm<br/>room appliances</p>
            </div>
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80" alt="Microwave" className="w-24 h-16 object-contain self-end" />
            <a href="#" className="text-red-600 font-bold mt-2 text-sm underline">Shop now</a>
          </div>
          {/* Top center (spans 2 rows) */}
          <div className="bg-blue-200 rounded-2xl p-6 flex flex-col justify-between row-span-2">
            <div>
              <div className="text-3xl font-extrabold text-blue-900 mb-2">Max comfort.<br/>Minimal space.</div>
              <p className="text-blue-900 text-base mb-4">Dorm-friendly chairs and furniture that do more for less.</p>
            </div>
            <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=300&q=80" alt="Chair and Desk" className="w-full h-28 object-contain" />
            <a href="#" className="text-red-600 font-bold mt-2 text-sm underline">Shop now</a>
          </div>
          {/* Top right */}
          <div className="bg-blue-100 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs line-through text-gray-500">$719.99</span>
              <span className="text-xs text-gray-700 ml-1">(Save $270)</span>
              <div className="text-3xl font-extrabold text-red-600 leading-tight">$449<sup className="text-base align-super">99</sup></div>
              <p className="text-gray-700 mt-2 text-sm">HP 15" laptop with<br/>Intel® Core™ i5 Processor</p>
            </div>
            <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=200&q=80" alt="Laptop" className="w-24 h-16 object-contain self-end" />
            <a href="#" className="text-red-600 font-bold mt-2 text-sm underline">Shop now</a>
          </div>
          {/* Bottom left */}
          <div className="bg-blue-100 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-gray-700">Up to</span>
              <div className="text-3xl font-extrabold text-red-600 leading-tight">40<sup className="text-base align-super">% off</sup></div>
              <p className="text-gray-700 mt-2 text-sm">boxes, packing tape,<br/>and more</p>
            </div>
            <img src="https://images.unsplash.com/photo-1515168833906-d2a3b82b3029?auto=format&fit=crop&w=200&q=80" alt="Boxes" className="w-24 h-16 object-contain self-end" />
            <a href="#" className="text-red-600 font-bold mt-2 text-sm underline">Shop now</a>
          </div>
          {/* Bottom right */}
          <div className="bg-blue-100 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-gray-700">Only</span>
              <div className="text-3xl font-extrabold text-red-600 leading-tight">$25<sup className="text-base align-super">99</sup></div>
              <p className="text-gray-700 mt-2 text-sm">Polaroid Digital<br/>Action Camera</p>
            </div>
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80" alt="Camera" className="w-24 h-16 object-contain self-end" />
            <a href="#" className="text-red-600 font-bold mt-2 text-sm underline">Shop now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeMustHavesGrid; 