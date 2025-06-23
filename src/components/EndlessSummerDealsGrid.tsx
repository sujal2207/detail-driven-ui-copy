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
    <section className="container mx-auto py-8 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-auto lg:h-[500px]">
        {/* Left promotional card */}
        <div className="lg:col-span-1 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-2xl p-8 flex flex-col justify-between min-h-[400px] lg:min-h-full relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-4xl lg:text-5xl font-black text-red-600 leading-none mb-6 tracking-tight">
              ENDLESS<br />
              <span className="text-red-700">SUMMER</span><br />
              <span className="text-red-800">OF DEAL$</span>
            </div>
            <div className="text-lg text-gray-800 font-medium mb-8 leading-relaxed">
              Hot prices on everything you need to breeze through summer.
            </div>
          </div>
          <a 
            href="#" 
            className="text-red-700 font-bold underline text-lg hover:text-red-800 transition-colors duration-200 relative z-10"
          >
            Shop more deals
          </a>
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200 rounded-full opacity-30 transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-200 rounded-full opacity-20 transform -translate-x-12 translate-y-12"></div>
        </div>

        {/* Right grid for deals */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-1 lg:grid-rows-2 gap-4">
          {deals.map((deal, idx) => (
            <div 
              key={idx} 
              className={`${deal.bg} rounded-2xl p-6 flex flex-col justify-between min-h-[240px] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100`}
            >
              <div className="flex-grow">
                {deal.title && (
                  <div className="text-red-700 font-bold text-lg mb-2 leading-tight">
                    {deal.title}
                  </div>
                )}
                
                {deal.priceOld && (
                  <div className="text-sm text-gray-500 mb-1">
                    <span className="line-through">{deal.priceOld}</span>
                    {deal.priceNote && (
                      <span className="ml-2 text-green-600 font-semibold">
                        ({deal.priceNote})
                      </span>
                    )}
                  </div>
                )}
                
                {deal.price && (
                  <div 
                    className="text-3xl lg:text-4xl font-black text-red-700 mb-2 leading-none" 
                    dangerouslySetInnerHTML={{ __html: deal.price }} 
                  />
                )}
                
                {deal.percentOff && (
                  <div 
                    className="text-3xl lg:text-4xl font-black text-red-700 mb-2 leading-none" 
                    dangerouslySetInnerHTML={{ __html: deal.percentOff }} 
                  />
                )}
                
                {deal.subtitle && (
                  <div className="text-sm text-gray-600 mb-3 font-medium">
                    {deal.subtitle}
                  </div>
                )}
                
                {deal.description && (
                  <div 
                    className="text-gray-800 mb-3 text-sm leading-relaxed" 
                    dangerouslySetInnerHTML={{ __html: deal.description }} 
                  />
                )}
                
                {deal.badges && deal.badges.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {deal.badges.map((badge, i) => (
                      <span 
                        key={i} 
                        className={deal.badgeStyles?.[i] || "bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full font-bold"}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="flex items-end justify-between mt-auto">
                <div className="flex-shrink-0">
                  <img 
                    src={deal.imageUrl} 
                    alt={deal.imageAlt} 
                    className={deal.imageClassName || "w-20 h-16 object-contain"} 
                  />
                </div>
                
                {deal.linkText && (
                  <a 
                    href={deal.linkUrl || "#"} 
                    className="text-red-700 font-bold underline text-sm hover:text-red-800 transition-colors duration-200 ml-4"
                  >
                    {deal.linkText}
                  </a>
                )}
              </div>
              
              {deal.extraContent}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Example deals data
const exampleDeals: Deal[] = [
  {
    type: "reward",
    bg: "bg-gradient-to-br from-yellow-50 to-yellow-100",
    title: "Easy Rewards.",
    price: '30<span class="text-2xl align-super text-purple-600">%</span>',
    description: "in points back<br />on all ink & toner",
    badges: ["1-hour store pickup"],
    badgeStyles: ["bg-red-600 text-white text-xs px-3 py-1 rounded-full font-bold"],
    imageUrl: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=128&h=128&fit=crop&crop=center",
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
    badges: ["30% BACK IN POINTS", "New at Staples"],
    badgeStyles: [
      "bg-purple-700 text-white text-xs px-3 py-1 rounded-full font-bold", 
      "bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full font-bold"
    ],
    imageUrl: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=128&h=128&fit=crop&crop=center",
    imageAlt: "Epson EcoTank",
    linkText: "Shop now",
  },
  {
    type: "deal",
    bg: "bg-gradient-to-br from-yellow-50 to-yellow-100",
    priceOld: "$269.99",
    priceNote: "Save $120",
    price: "$149<sup class=\"text-xl\">99</sup>",
    description: "Staples<sup>®</sup> Sorina executive chair",
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=128&h=128&fit=crop&crop=center",
    imageAlt: "Executive Chair",
    imageClassName: "w-24 h-20 object-contain",
    linkText: "Shop now",
  },
  {
    type: "deal",
    bg: "bg-gradient-to-br from-yellow-50 to-yellow-100",
    title: "Bundle Microsoft 365 & save $20 with any PC purchase",
    subtitle: "Sponsored by Microsoft 365",
    badges: ["$879.99 (Save $330!)"],
    badgeStyles: ["bg-red-600 text-white text-xs px-3 py-1 rounded-full font-bold"],
    price: "$549<sup class=\"text-xl\">99</sup>",
    imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=128&h=128&fit=crop&crop=center",
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
    imageUrl: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=128&h=128&fit=crop&crop=center",
    imageAlt: "Monitor",
    linkText: "Shop now",
  },
  {
    type: "deal",
    bg: "bg-gradient-to-br from-yellow-50 to-yellow-100",
    percentOff: "60<span class=\"text-2xl align-super\">% off</span>",
    description: "select Samsonite<sup>®</sup> and American Tourister<sup>®</sup> luggage",
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=128&h=128&fit=crop&crop=center",
    imageAlt: "Luggage",
    imageClassName: "w-24 h-20 object-contain",
    linkText: "Shop now",
  },
];

// Default export with example data
export default function EndlessSummerDealsGridWithDefaults() {
  return <EndlessSummerDealsGrid deals={exampleDeals} />;
}