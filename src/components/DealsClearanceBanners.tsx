import React from "react";

const DealsClearanceBanners = () => {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 mt-6 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* MyDeals Banner */}
                    <div
                        className="bg-[#d92228] rounded-xl p-6 md:p-10 flex flex-col justify-center items-center text-center shadow-md">
                        <img
                            src="https://www.staples.com/skimg/header/MyDeals_Icon.svg"
                            alt="MyDeals Icon"
                            className="w-12 h-12 mb-4"
                        />
                        <h2 className="text-white text-4xl font-semibold mb-2">
                            <span className="font-bold">My</span>Deals
                        </h2>
                        <p className="text-white text-lg font-medium">
                            Exclusive savings every week
                        </p>
                    </div>

                    {/* Clearance Banner */}
                    <div
                        className="bg-[#f7b731] rounded-xl p-6 md:p-10 flex flex-col justify-center items-center text-center shadow-md">
                        <img
                            src="https://www.staples.com/skimg/header/Clearance_Icon.svg"
                            alt="Clearance Icon"
                            className="w-12 h-12 mb-4"
                        />
                        <h2 className="text-black text-4xl font-semibold mb-2">
                            Clearance
                        </h2>
                        <p className="text-black text-lg font-medium">
                            Last-chance deals on the items you need
                        </p>
                    </div>
                </div>
            </div>
            <section className="max-w-4xl mx-auto px-4 py-8 text-center">

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    Staples drives your business with an extensive product assortment wherever you need it.
                </h2>

                {/* Paragraph */}
                <p className="text-gray-700 mb-8 text-left leading-relaxed">
                    At Staples, we’ve been providing our customers with an extensive assortment of essential office
                    supplies for over 35 years. From writing supplies and paper to shredders and school supplies,
                    Staples is the
                    <a href="#" className="text-blue-600 underline ml-1">office supply</a> expert. We are a top provider
                    of office chairs, desks, tables & office furniture. We also offer the latest technology—from
                    laptops, computers & accessories, to printers, ink & toner, and more. We have all the tools you need
                    to stay productive and connected, plus a wide assortment of unexpected
                    <a href="#" className="text-blue-600 underline ml-1">new & trending products</a> like luggage, smart
                    home technology, gaming consoles & accessories, décor, and gift cards.
                </p>

                {/* Item 1 */}
                <div className="flex items-start gap-4 mb-6">
                    <img
                        src="/images/headphones.png"
                        alt="Headphones"
                        className="w-16 h-16 object-contain"
                    />
                    <div className="text-left">
                        <h4 className="font-bold mb-1">Staples Travel Hub</h4>
                        <p className="text-gray-700">
                            Whether your next
                            <a href="#" className="text-blue-600 underline ml-1">trip</a> is for business or pleasure,
                            <a href="#" className="text-blue-600 underline ml-1">Staples Travel Hub</a> is your new
                            destination for all things travel. Find luggage and travel accessories, and tech gadgets to
                            make your trip run smoothly. Visit us in-store to take advantage of our
                            <a href="#" className="text-blue-600 underline ml-1">TSA PreCheck</a> and passport services.
                        </p>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-4 mb-8 opacity-50">
                    <img
                        src="/images/health.png"
                        alt="Health & Wellness"
                        className="w-16 h-16 object-contain"
                    />
                    <div className="text-left">
                        <h4 className="font-bold mb-1">Health & Wellness</h4>
                        <p className="text-gray-700">
                            Staples range of
                            <a href="#" className="text-blue-600 underline ml-1">health & wellness products</a> can
                            enhance your workspace and overall well-being. Shop ergonomic furniture & tech options, as
                            well as smart gadgets.
                        </p>
                    </div>
                </div>

                {/* Read More button */}
                <button
                    className="border border-gray-600 rounded-full px-6 py-2 text-sm font-semibold hover:bg-gray-100 transition"
                >
                    Read more
                </button>

            </section>
        </>
    );
};

export default DealsClearanceBanners;
