import React from "react";

const brands = [
  {
    name: "Staples",
    logo: "https://assets.staples-static.com/sbd/cre/products/240326/kcfep1768/images/staples-logo-red.svg",
    link: "#",
    bgColor: "#F8F8F8", // white
    bgImage: "https://assets.staples-static.com/sbd/cre/products/240326/kcfep1768/images/staples-brand-bg.png",
  },
  {
    name: "Staples TECH",
    logo: "https://assets.staples-static.com/sbd/cre/products/240326/kcfep1768/images/staples-tech-white-red.svg",
    link: "#",
    bgColor: "#5F5F5F", // dark gray
    bgImage: "https://assets.staples-static.com/sbd/cre/products/240326/kcfep1768/images/staples_tech-2024-10-24.png",
  },
  {
    name: "perk",
    logo: "https://assets.staples-static.com/sbd/cre/products/240326/kcfep1768/images/perk-logo-2.png",
    link: "#",
    bgColor: "#5990A2", // blue
    bgImage: "https://assets.staples-static.com/sbd/cre/products/240326/kcfep1768/images/perk-bg.png",
  },
  {
    name: "TRU RED",
    logo: "https://assets.staples-static.com/sbd/cre/products/240326/kcfep1768/images/tru-red-logo.png",
    link: "#",
    bgColor: "#C11E3C", // red
    bgImage: "https://assets.staples-static.com/sbd/cre/products/240326/kcfep1768/images/tru-red-bg.png",
  },
  {
    name: "Pick Me Up",
    logo: "https://assets.staples-static.com/sbd/cre/products/240326/kcfep1768/images/pickmeup-logo.png",
    link: "#",
    bgColor: "#1D2946", // navy
    bgImage: "https://www.staples.com/sbd/cre/products/240326/kcfep1768/images/pick_me_up-2024-10-24.png",
  },
  {
    name: "COASTWIDE",
    logo: "https://assets.staples-static.com/sbd/cre/products/240326/kcfep1768/images/coastwide-logo.png",
    link: "#",
    bgColor: "#ED8933", // orange
    bgImage: "https://assets.staples-static.com/sbd/cre/products/240326/kcfep1768/images/coastwide-bg.png",
  },
  {
    name: "workplace2.0",
    logo: "https://assets.staples-static.com/sbd/cre/products/240326/kcfep1768/images/workplace-logo.png",
    link: "#",
    bgColor: "#00635B", // green
    bgImage: "https://assets.staples-static.com/sbd/cre/products/240326/kcfep1768/images/workplace-bg-3.jpg",
  },
//   {
//     name: "UNION & SCALE",
//     logo: "https://via.placeholder.com/80x40?text=UNION+%26+SCALE",
//     link: "#",
//     bgColor: "#DBDBDB", // light gray
//     bgImage: "https://assets.staples-static.com/sbd/cre/products/240326/kcfep1768/images/unionandscale-bg.jpg",
//   },
];

const StaplesBrandsGrid = () => {
  return (
    <section className="container px-4 py-12">
      <h2 className="text-3xl font-extrabold text-center mb-2">Discover the entire line of Staples brands</h2>
      <p className="text-center text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
        From furniture and paper to electronics, cleaning, janitorial supplies and more, Staples brands are tested to ensure high quality and performance in every product.
      </p>
      <div className="flex overflow-x-auto gap-3 pb-4">
        {brands.map((brand, idx) => (
          <div
            key={idx}
            className="min-w-[180px] max-w-[220px] h-56 rounded-2xl p-[1px] shadow-md flex flex-col"
            style={{
              backgroundColor: brand.bgColor,
              backgroundImage: brand.bgImage ? `url(${brand.bgImage})` : undefined,
              backgroundRepeat: brand.bgImage ? "no-repeat" : undefined,
              backgroundPosition: brand.bgImage ? "50% 70px" : undefined,
              backgroundSize: brand.bgImage ? "cover" : undefined,
            }}
          >
            <div className="flex flex-col items-center justify-start w-full rounded-2xl p-4 relative">
              <img src={brand.logo} alt={brand.name} className="h-10 mt-4 z-10" />
              <a
                href={brand.link}
                className={`font-bold underline text-${idx == 0 ? "black" : "white"} text-base mt-4 mb-6 z-10`}
              >
                Shop now
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gray-100 rounded-xl flex items-center justify-between mt-8 px-8 py-6">
        <span className="font-semibold text-lg">Explore <span className="text-red-700 font-bold">Staples</span>. Family of Brands</span>
        <a href="#" className="bg-red-600 text-white rounded-full px-8 py-2 font-bold text-lg shadow hover:bg-red-700 transition">Shop now</a>
      </div>
    </section>
  );
};

export default StaplesBrandsGrid;

