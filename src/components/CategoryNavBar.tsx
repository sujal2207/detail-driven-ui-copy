import React, { useRef, useState, useEffect } from "react";

const categories = [
  {
    label: "That was Easy!",
    icon: (
      <div className="w-12 h-12 rounded-full bg-white border-2 border-red-600 flex items-center justify-center transition-all duration-200">
        <span className="text-red-600 font-bold text-xs">easy</span>
      </div>
    ),
  },
  {
    label: "1-Hour In-Store Pickup",
    icon: (
      <div className="w-12 h-12 rounded-full bg-white border-2 border-red-600 flex items-center justify-center transition-all duration-200">
        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12,6 12,12 16,14"></polyline>
        </svg>
      </div>
    ),
  },
  {
    label: "My Deals",
    icon: (
      <div className="w-12 h-12 rounded-full bg-white border-2 border-red-600 flex items-center justify-center transition-all duration-200">
        <span className="text-red-600 font-bold text-lg">$</span>
      </div>
    ),
  },
  {
    label: "Back to School",
    icon: (
      <div className="w-12 h-12 rounded-full bg-white border-2 border-red-600 flex items-center justify-center transition-all duration-200">
        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      </div>
    ),
  },
  {
    label: "Travel Hub",
    icon: (
      <div className="w-12 h-12 rounded-full bg-white border-2 border-red-600 flex items-center justify-center transition-all duration-200">
        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="m4.93 4.93 4.24 4.24"></path>
          <path d="m14.83 9.17 4.24-4.24"></path>
          <path d="m14.83 14.83 4.24 4.24"></path>
          <path d="m9.17 14.83-4.24 4.24"></path>
          <circle cx="12" cy="12" r="4"></circle>
        </svg>
      </div>
    ),
  },
  {
    label: "New & Trending",
    icon: (
      <div className="w-12 h-12 rounded-full bg-white border-2 border-red-600 flex items-center justify-center transition-all duration-200">
        <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      </div>
    ),
  },
  {
    label: "Print & Marketing",
    icon: (
      <div className="w-12 h-12 rounded-full bg-white border-2 border-red-600 flex items-center justify-center transition-all duration-200">
        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <polyline points="6,9 6,2 18,2 18,9"></polyline>
          <path d="M6,18H4a2,2 0,0 1,-2-2v-5a2,2 0,0 1,2-2H20a2,2 0,0 1,2,2v5a2,2 0,0 1,-2,2H18"></path>
          <rect x="6" y="14" width="12" height="8"></rect>
        </svg>
      </div>
    ),
  },
  {
    label: "Yes, Staples has that!",
    icon: (
      <div className="w-12 h-12 rounded-full bg-white border-2 border-red-600 flex items-center justify-center transition-all duration-200">
        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4"></path>
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
      </div>
    ),
  },
  {
    label: "Promotional Products",
    icon: (
      <div className="w-12 h-12 rounded-full bg-white border-2 border-red-600 flex items-center justify-center transition-all duration-200">
        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
        </svg>
      </div>
    ),
  },
];

const CategoryNavBar = () => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 5);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const handleResize = () => checkScrollPosition();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 250;
      const newScrollLeft = scrollRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      
      scrollRef.current.scrollTo({ 
        left: newScrollLeft, 
        behavior: "smooth" 
      });
    }
  };

  return (
    <nav className="w-full bg-gray-50 border-b border-gray-200 py-6">
      <div className="relative max-w-6xl mx-auto px-6 ">
        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full shadow-md p-2 hover:bg-gray-50 hover:shadow-lg transition-all duration-200 border border-gray-200"
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}

        {/* Categories Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 px-12 scrollbar-hide"
          onScroll={checkScrollPosition}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
         {categories.map((category, index) => (
  <div 
    key={index} 
    className="flex flex-col items-center flex-shrink-0 w-[120px] cursor-pointer group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white rounded-xl py-5"
  >
    <div className="mb-2 transition-all duration-300">
      {React.cloneElement(category.icon, {
        className: `${category.icon.props.className} group-hover:border-red-700 group-hover:scale-110`
      })}
    </div>
    <span className="text-xs text-center font-medium text-gray-700 leading-tight group-hover:text-red-600 transition-colors duration-200 px-1">
      {category.label}
    </span>
  </div>
))}

        </div>

        {/* Right Arrow */}
        {showRightArrow && (
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full shadow-md p-2 hover:bg-gray-50 hover:shadow-lg transition-all duration-200 border border-gray-200"
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
      </div>
      
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </nav>
  );
};

export default CategoryNavBar;