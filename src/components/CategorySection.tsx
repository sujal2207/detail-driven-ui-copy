import React, { useRef, useState, useEffect } from 'react';

const trendingProducts = [
  {
    name: "Staples 30% Recycled File Folders, 1/3-Cut Tab, Letter Size, Manila",
    price: "$16.99",
    oldPrice: "$20.59",
    image: "https://www.staples-3p.com/s7/is/image/Staples/FD6708EB-0D9C-4710-B97EE04BFBA39232_sc7?wid=240&hei=240",
    rating: 4.5,
    reviews: 8521,
  },
  {
    name: "Staples Wooden Pencil, 2.2mm, #2 Medium Lead, 8/Pack",
    price: "$0.50",
    oldPrice: "$3.09",
    image: "https://www.staples-3p.com/s7/is/image/Staples/61ED8C0D-0C8B-4C1B-85B804E09B8D485B_sc7?wid=120&hei=120",
    rating: 4,
    reviews: 693,
  },
  {
    name: "Staples QuickStrip EasyClose Self Seal Security Tinted",
    price: "$24.99",
    oldPrice: "$28.79",
    image: "https://www.staples-3p.com/s7/is/image/Staples/s1223639_sc7?wid=120&hei=120",
    rating: 5,
    reviews: 1953,
  },
  {
    name: "Staples Block Erasers, Pink, 3/Pack",
    price: "$1.00",
    oldPrice: "$3.79",
    image: "https://www.staples-3p.com/s7/is/image/Staples/s1215435_sc7?wid=240&hei=240",
    rating: 4,
    reviews: 830,
  },
  {
    name: "Staples Manual Pencil Sharpener, Assorted Colors",
    price: "$0.50",
    oldPrice: "$3.79",
    image: "https://www.staples-3p.com/s7/is/image/Staples/s1215515_sc7?wid=240&hei=240",
    rating: 4,
    reviews: 1811,
  },
  {
    name: "Staples Eraser Caps, Assorted, 12/Pack",
    price: "$0.50",
    oldPrice: "$2.19",
    image: "https://www.staples-3p.com/s7/is/image/Staples/s1215532_sc7?wid=240&hei=240",
    rating: 4,
    reviews: 599,
  },
  {
    name: "Crayola Classic Kid's Markers, Fine Point, 10/Pack",
    price: "$0.99",
    oldPrice: "$4.19",
    image: "https://www.staples-3p.com/s7/is/image/Staples/sp127374048_sc7?wid=240&hei=240",
    rating: 5,
    reviews: 811,
  },
  {
    name: "Crayola Classic Kid's Markers, Fine Point, 10/Pack",
    price: "$0.99",
    oldPrice: "$4.19",
    image: "https://www.staples-3p.com/s7/is/image/Staples/sp127374048_sc7?wid=240&hei=240",
    rating: 5,
    reviews: 811,
  },
  {
    name: "Crayola Classic Kid's Markers, Fine Point, 10/Pack",
    price: "$0.99",
    oldPrice: "$4.19",
    image: "https://www.staples-3p.com/s7/is/image/Staples/sp127374048_sc7?wid=240&hei=240",
    rating: 5,
    reviews: 811,
  },
];

const CategorySection = () => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 5);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    checkScroll();
    const handleResize = () => checkScroll();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scroll = (direction) => {
    const scrollAmount = 300;
    if (scrollRef.current) {
      const newScrollLeft =
          scrollRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
      <section className="py-8">
        <div className="container">
          {/* Trending deals */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Trending deals</h2>

            <div className="relative">
              {/* Left Arrow */}
              {showLeftArrow && (
                  <button
                      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 border rounded-full bg-white shadow hover:bg-gray-50"
                      onClick={() => scroll('left')}
                  >
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                      <path
                          d="M15 19l-7-7 7-7"
                          stroke="#B91C1C"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                      />
                    </svg>
                  </button>
              )}

              {/* Horizontal scroll container */}
              <div
                  ref={scrollRef}
                  onScroll={checkScroll}
                  className="flex overflow-x-auto gap-4 scrollbar-hide pb-2"
              >
                {trendingProducts.map((product, index) => (
                    <div
                        key={index}
                        className="flex flex-col w-48 min-w-[12rem] bg-white border rounded-lg p-3 hover:shadow transition-all"
                    >
                      <img
                          src={product.image}
                          alt={product.name}
                          className="h-36 object-contain mb-3"
                      />
                      <div className="flex flex-col flex-grow">
                        <p className="text-xs text-gray-700 line-clamp-2 mb-1">
                          {product.name}
                        </p>
                        <div className="flex items-center mb-1">
                          <div className="flex text-yellow-400 mr-1">
                            {'★'.repeat(Math.floor(product.rating))}
                          </div>
                          <span className="text-xs text-gray-600">
                        ({product.reviews})
                      </span>
                        </div>
                        <div className="flex items-baseline gap-2 mb-2">
                          <p className="text-red-600 font-bold">{product.price}</p>
                          <p className="text-xs line-through text-gray-500">
                            {product.oldPrice}
                          </p>
                        </div>
                        <div className="flex items-center mt-auto gap-2">
                          <select className="border rounded px-1 py-0.5 text-sm">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </select>
                          <button className="flex-1 bg-white border rounded px-3 py-1 text-sm font-medium hover:bg-gray-50">
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                ))}
              </div>

              {/* Right Arrow */}
              {showRightArrow && (
                  <button
                      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 border rounded-full bg-white shadow hover:bg-gray-50"
                      onClick={() => scroll('right')}
                  >
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                      <path
                          d="M9 5l7 7-7 7"
                          stroke="#B91C1C"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                      />
                    </svg>
                  </button>
              )}
            </div>
          </div>
        </div>

        {/* Hide scrollbar */}
        <style jsx>{`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>
  );
};

export default CategorySection;
