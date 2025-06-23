import React from "react";

export interface Deal {
  type: string;
  bg: string;
  title?: string;
  subtitle?: string;
  price?: string;
  priceOld?: string;
  priceNote?: string;
  percentOff?: string;
  description?: string;
  badges?: string[];
  badgeStyles?: string[];
  imageUrl: string;
  imageAlt: string;
  imageClassName?: string;
  linkText?: string;
  linkUrl?: string;
  extraContent?: React.ReactNode;
}

interface EndlessSummerDealsGridProps {
  deals: Deal[];
}

const EndlessSummerDealsGrid: React.FC<EndlessSummerDealsGridProps> = ({ deals }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left big card */}
        <div className="md:col-span-1 bg-yellow-300 rounded-2xl p-10 flex flex-col justify-between min-h-[500px] relative">
          <div>
            <div className="text-5xl font-extrabold text-red-700 leading-tight mb-4">ENDLESS<br />SUMMER<br />OF DEAL$</div>
            <div className="text-lg text-gray-900 mb-8">Hot prices on everything you need to breeze through summer.</div>
          </div>
          <a href="#" className="text-black font-bold underline text-base mt-auto">Shop more deals</a>
        </div>
        {/* Right grid 2x3 */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-2 gap-6">
          {deals.map((deal, idx) => (
            <div key={idx} className={`${deal.bg} rounded-2xl p-6 flex flex-col justify-between min-h-[240px] shadow-md`}>
              {deal.title && <div className="text-red-700 font-bold text-lg mb-1">{deal.title}</div>}
              {deal.priceOld && <div className="text-xs line-through text-gray-500">{deal.priceOld} {deal.priceNote && <span className="ml-1 text-gray-700">({deal.priceNote})</span>}</div>}
              {deal.price && <div className="text-4xl font-extrabold text-red-700 leading-tight mb-1" dangerouslySetInnerHTML={{__html: deal.price}} />}
              {deal.percentOff && <div className="text-4xl font-extrabold text-red-700 leading-tight mb-1" dangerouslySetInnerHTML={{__html: deal.percentOff}} />}
              {deal.subtitle && <div className="text-xs text-gray-500 mb-2">{deal.subtitle}</div>}
              {deal.description && <div className="text-gray-800 mb-2" dangerouslySetInnerHTML={{__html: deal.description}} />}
              {deal.badges && deal.badges.length > 0 && (
                <div className="flex items-center gap-2 mb-2">
                  {deal.badges.map((badge, i) => (
                    <span key={i} className={deal.badgeStyles?.[i] || "bg-gray-200 text-xs px-2 py-1 rounded-full font-bold"}>{badge}</span>
                  ))}
                </div>
              )}
              <img src={deal.imageUrl} alt={deal.imageAlt} className={deal.imageClassName || "w-24 h-16 object-contain mb-2"} />
              {deal.linkText && <a href={deal.linkUrl || "#"} className="text-red-700 font-bold underline text-base">{deal.linkText}</a>}
              {deal.extraContent}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Example deals data (you can replace this with your own)
const exampleDeals: Deal[] = [
  {
    type: "reward",
    bg: "bg-yellow-100",
    title: "Easy Rewards.",
    price: '30<span class="text-2xl align-super">%</span>',
    description: "in points back<br />on all ink & toner",
    badges: ["1-hour store pickup"],
    badgeStyles: ["bg-red-600 text-white text-xs px-2 py-1 rounded-full font-bold"],
    imageUrl: "https://www.staples-3p.com/s7/is/image/Staples/s1129326_sc7?wid=128&hei=128",
    imageAlt: "Ink & Toner",
    linkText: "Shop now",
  },
  {
    type: "deal",
    bg: "bg-white",
    priceOld: "$299.99",
    priceNote: "Save $50",
    price: "$249<sup class=\"text-xl\">99</sup>",
    description: "Epson<sup>®</sup> EcoTank<sup>®</sup> ET-2980 with 3 years of free ink",
    badges: ["30% BACK IN POINTS", "New at"],
    badgeStyles: ["bg-purple-700 text-white text-xs px-2 py-1 rounded-full font-bold", "bg-gray-200 text-xs px-2 py-1 rounded-full font-bold"],
    imageUrl: "https://www.staples-3p.com/s7/is/image/Staples/s1130537_sc7?wid=128&hei=128",
    imageAlt: "Epson EcoTank",
    linkText: "Shop now",
  },
  {
    type: "deal",
    bg: "bg-yellow-100",
    priceOld: "$269.99",
    priceNote: "Save $120",
    price: "$149<sup class=\"text-xl\">99</sup>",
    description: "Staples<sup>®</sup> Sorina executive chair",
    imageUrl: "https://www.staples-3p.com/s7/is/image/Staples/s1130538_sc7?wid=128&hei=128",
    imageAlt: "Chair",
    imageClassName: "w-24 h-20 object-contain mb-2",
    linkText: "Shop now",
  },
  {
    type: "deal",
    bg: "bg-yellow-100",
    title: "Bundle Microsoft 365 & save $20 with any PC purchase",
    subtitle: "Sponsored by Microsoft 365",
    badges: ["$879.99 (Save $330!)"],
    badgeStyles: ["bg-red-600 text-white text-xs px-2 py-1 rounded-full font-bold"],
    price: "$549<sup class=\"text-xl\">99</sup>",
    imageUrl: "https://www.staples-3p.com/s7/is/image/Staples/s1129327_sc7?wid=128&hei=128",
    imageAlt: "Laptop",
    linkText: "Shop now",
  },
  {
    type: "deal",
    bg: "bg-white",
    priceOld: "$699.99",
    priceNote: "Save $350",
    price: "$349<sup class=\"text-xl\">99</sup>",
    description: "Lenovo<sup>®</sup> 31.2\" LED monitor",
    imageUrl: "https://www.staples-3p.com/s7/is/image/Staples/s1130539_sc7?wid=128&hei=128",
    imageAlt: "Monitor",
    linkText: "Shop now",
  },
  {
    type: "deal",
    bg: "bg-yellow-100",
    percentOff: "60<span class=\"text-2xl align-super\">% off</span>",
    description: "select Samsonite<sup>®</sup> and American Tourister<sup>®</sup> luggage",
    imageUrl: "https://www.staples-3p.com/s7/is/image/Staples/s1130540_sc7?wid=128&hei=128",
    imageAlt: "Luggage",
    imageClassName: "w-24 h-20 object-contain mb-2",
    linkText: "Shop now",
  },
];

// Default export with example data
const EndlessSummerDealsGridWithDefaults = () => <EndlessSummerDealsGrid deals={exampleDeals} />;

export default EndlessSummerDealsGridWithDefaults;
