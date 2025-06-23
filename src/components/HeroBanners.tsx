import React from "react";

const HeroBanners = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        From caps to classroom: gear up for every milestone.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Banner */}
        <div className="bg-blue-200 rounded-2xl flex flex-col md:flex-row items-center p-8 min-h-[260px] relative overflow-hidden">
          <div className="flex-1 z-10">
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
              <span className="italic">Hats off to the grads.</span>
            </h3>
            <a href="#" className="mt-8 inline-block font-bold underline text-black text-base md:text-lg">
              Shop graduation gifts
            </a>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center z-10 mt-6 md:mt-0">
            {/* Laptop and accessories placeholder */}
            <div className="flex items-center space-x-4">
              <div className="w-32 h-24 bg-white rounded-lg flex items-center justify-center shadow-md">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Microsoft_Surface_Pro_8.png" alt="Laptop" className="object-contain h-20" />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shadow">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Apple_MagSafe_Charger.png" alt="Charger" className="object-contain h-8" />
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shadow">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/JBL_Flip_5.png" alt="Speaker" className="object-contain h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Banner */}
        <div className="bg-yellow-300 rounded-2xl flex flex-col md:flex-row items-center p-8 min-h-[260px] relative overflow-hidden">
          <div className="flex-1 z-10 flex flex-col justify-between h-full">
            <div>
              <p className="text-base text-gray-700 mb-1 font-medium">Your back to school budget</p>
              <h3 className="text-3xl md:text-4xl font-extrabold text-black leading-tight mb-2">
                Saved<br />by the <span className="inline-block align-middle relative">button
                  <span className="inline-block bg-red-600 text-white rounded-full px-2 py-1 text-base font-bold ml-1 align-middle">easy</span>
                </span>
              </h3>
            </div>
            <a href="#" className="mt-4 inline-block font-bold underline text-black text-base md:text-lg">
              Shop back to school deals
            </a>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center z-10 mt-6 md:mt-0">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-20 bg-white rounded-lg flex items-center justify-center shadow-md relative">
                <span className="absolute -top-3 -left-3 bg-red-600 text-white text-xs px-2 py-1 rounded-full font-bold">Supplies as low as 25¢</span>
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Colored_Paper.jpg" alt="Folders" className="object-contain h-16" />
              </div>
              <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center shadow-md">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Backpack_%28pink%29.png" alt="Backpack" className="object-contain h-16" />
              </div>
            </div>
            <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center shadow-md relative">
              <span className="absolute -top-3 -right-3 bg-red-600 text-white text-xs px-2 py-1 rounded-full font-bold">New characters unlocked!</span>
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Disney_Stitch_Backpack.png" alt="Stitch Backpack" className="object-contain h-16" />
            </div>
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80" alt="Girl smiling" className="absolute right-4 bottom-4 w-32 h-40 object-contain rounded-xl shadow-lg hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanners;
