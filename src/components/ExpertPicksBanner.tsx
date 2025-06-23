import React from "react";
import { Card } from "./ui/card";

const ExpertPicksBanner = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Expert picks at prices you'll love.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Paper Deals Card */}
        <Card className="flex flex-col justify-between bg-white rounded-2xl p-8 min-h-[300px] shadow-md relative border-0">
          <div className="mb-4">
            <div className="text-5xl font-extrabold text-red-700 leading-none mb-2">PAPER<br />DEAL$</div>
            <div className="text-lg text-black mb-2">Restock for way less.</div>
          </div>
          <div className="flex items-end gap-6 mb-6">
            <div className="relative flex flex-col items-center">
              <img src="https://www.staples-3p.com/s7/is/image/Staples/s1129326_sc7?wid=512&hei=512" alt="Hammermill Copy Plus" className="w-32 h-20 object-contain" />
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-red-600 text-white text-lg font-bold rounded-full px-4 py-1 shadow-lg border-4 border-white">
                Only <span className="text-2xl align-middle">$46<sup className="text-base">99</sup></span><br />10-ream case
              </div>
            </div>
            <div className="relative flex flex-col items-center">
              <img src="https://www.staples-3p.com/s7/is/image/Staples/s1129327_sc7?wid=512&hei=512" alt="Staples Multipurpose Paper" className="w-32 h-20 object-contain" />
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-red-600 text-white text-lg font-bold rounded-full px-4 py-1 shadow-lg border-4 border-white">
                Only <span className="text-2xl align-middle">$41<sup className="text-base">99</sup></span><br />8-ream case
              </div>
            </div>
          </div>
          <a href="#" className="text-red-700 font-bold underline text-base mt-2">Shop all paper deals</a>
        </Card>
        {/* K-Cup Deals Card */}
        <Card className="flex flex-col justify-between bg-white rounded-2xl p-8 min-h-[300px] shadow-md relative border-0">
          <div className="mb-4">
            <div className="text-base font-semibold text-gray-700 mb-1">As low as</div>
            <div className="text-5xl font-extrabold text-red-700 leading-none mb-2">$36<sup className="text-2xl">99</sup></div>
            <div className="text-lg text-black mb-2">for select K-Cup<sup>®</sup> pods, 88–96/pk.</div>
          </div>
          <div className="flex items-end gap-6 mb-6">
            <img src="https://www.staples-3p.com/s7/is/image/Staples/s1130537_sc7?wid=512&hei=512" alt="Pick Me Up K-Cup" className="w-28 h-28 object-contain" />
            <img src="https://www.staples-3p.com/s7/is/image/Staples/s1130538_sc7?wid=512&hei=512" alt="Cafe Bustelo K-Cup" className="w-32 h-28 object-contain" />
          </div>
          <a href="#" className="text-red-700 font-bold underline text-base mt-2">Shop now</a>
        </Card>
      </div>
    </section>
  );
};

export default ExpertPicksBanner;
