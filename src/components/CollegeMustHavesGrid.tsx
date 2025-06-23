import React from "react";

const CollegeMustHavesGrid = () => {
  return (
    <section className="container py-10">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
        Get campus ready with these college must-haves.
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-3">
        {/* Left large promotional card */}
        <div className="lg:col-span-2 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl overflow-hidden relative min-h-[500px] shadow-xl">
          {/* Background image overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80')`
            }}
          ></div>
          
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          
          {/* Content */}
          <div className="relative z-10 p-8 h-full flex flex-col justify-end">
            <div className="mb-8">
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-white">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-2xl font-bold">Laptop</span>
                </li>
                <li className="flex items-center gap-4 text-white">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-2xl font-bold">Gaming chair</span>
                </li>
                <li className="flex items-center gap-4 text-white">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-2xl font-bold italic">Dorm goals crushed</span>
                </li>
              </ul>
            </div>
            <a 
              href="#" 
              className="text-white font-bold underline text-lg hover:text-blue-200 transition-colors duration-200"
            >
              Shop now
            </a>
          </div>
        </div>

        {/* Right grid - 3 columns, 2 rows */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-3">
          
          {/* Top left - Appliances */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 flex flex-col justify-between min-h-[240px] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex-grow">
              <span className="text-xs font-bold text-gray-600 uppercase tracking-wide">As low as</span>
              <div className="text-4xl font-black text-red-600 leading-none mb-2">
                $88<sup className="text-lg align-super">69</sup>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                stock up on dorm<br/>room appliances
              </p>
            </div>
            <div className="flex items-end justify-between mt-4">
              <img 
                src="https://images.unsplash.com/photo-1572635148818-ef6fd45eb394?auto=format&fit=crop&w=200&q=80" 
                alt="Microwave" 
                className="w-20 h-16 object-contain" 
              />
              <a 
                href="#" 
                className="text-red-600 font-bold text-sm underline hover:text-red-700 transition-colors duration-200"
              >
                Shop now
              </a>
            </div>
          </div>

          {/* Center column - spans 2 rows */}
          <div className="lg:row-span-2 bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl p-6 flex flex-col justify-between min-h-[240px] lg:min-h-[500px] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex-grow">
              <div className="text-3xl lg:text-4xl font-black text-blue-900 leading-tight mb-4">
                Max comfort.<br/>
                <span className="text-blue-800">Minimal space.</span>
              </div>
              <p className="text-blue-900 text-base mb-6 leading-relaxed">
                Dorm-friendly chairs and furniture that do more for less.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=300&q=80" 
                alt="Chair and Desk" 
                className="w-full max-w-[200px] h-32 object-contain mb-4" 
              />
              <a 
                href="#" 
                className="text-red-600 font-bold text-sm underline hover:text-red-700 transition-colors duration-200"
              >
                Shop now
              </a>
            </div>
          </div>

          {/* Top right - Laptop */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 flex flex-col justify-between min-h-[240px] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex-grow">
              <div className="mb-1">
                <span className="text-xs line-through text-gray-500">$719.99</span>
                <span className="text-xs text-green-600 font-semibold ml-2">(Save $270)</span>
              </div>
              <div className="text-4xl font-black text-red-600 leading-none mb-2">
                $449<sup className="text-lg align-super">99</sup>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                HP 15" laptop with<br/>Intel® Core™ i5 Processor
              </p>
            </div>
            <div className="flex items-end justify-between mt-4">
              <img 
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=200&q=80" 
                alt="Laptop" 
                className="w-20 h-16 object-contain" 
              />
              <a 
                href="#" 
                className="text-red-600 font-bold text-sm underline hover:text-red-700 transition-colors duration-200"
              >
                Shop now
              </a>
            </div>
          </div>

          {/* Bottom left - Moving supplies */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 flex flex-col justify-between min-h-[240px] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex-grow">
              <span className="text-xs font-bold text-gray-600 uppercase tracking-wide">Up to</span>
              <div className="text-4xl font-black text-red-600 leading-none mb-2">
                40<sup className="text-lg align-super">% off</sup>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                boxes, packing tape,<br/>and more
              </p>
            </div>
            <div className="flex items-end justify-between mt-4">
              <img 
                src="https://images.unsplash.com/photo-1515168833906-d2a3b82b3029?auto=format&fit=crop&w=200&q=80" 
                alt="Moving Boxes" 
                className="w-20 h-16 object-contain" 
              />
              <a 
                href="#" 
                className="text-red-600 font-bold text-sm underline hover:text-red-700 transition-colors duration-200"
              >
                Shop now
              </a>
            </div>
          </div>

          {/* Bottom right - Camera */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 flex flex-col justify-between min-h-[240px] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex-grow">
              <span className="text-xs font-bold text-gray-600 uppercase tracking-wide">Only</span>
              <div className="text-4xl font-black text-red-600 leading-none mb-2">
                $25<sup className="text-lg align-super">99</sup>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Polaroid Digital<br/>Action Camera
              </p>
            </div>
            <div className="flex items-end justify-between mt-4">
              <img 
                src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=200&q=80" 
                alt="Digital Camera" 
                className="w-20 h-16 object-contain" 
              />
              <a 
                href="#" 
                className="text-red-600 font-bold text-sm underline hover:text-red-700 transition-colors duration-200"
              >
                Shop now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeMustHavesGrid;