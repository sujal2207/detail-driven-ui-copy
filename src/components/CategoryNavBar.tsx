import React, { useRef } from "react";

const categories = [
  {
    label: "That was Easy!",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#fff" stroke="#B91C1C" strokeWidth="2"/><text x="50%" y="55%" textAnchor="middle" fill="#B91C1C" fontSize="12" fontWeight="bold" dy=".3em">easy</text></svg>
    ),
  },
  {
    label: "1-Hour In-Store Pickup",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="#B91C1C" strokeWidth="3" fill="#fff"/><text x="50%" y="55%" textAnchor="middle" fill="#B91C1C" fontSize="12" fontWeight="bold" dy=".3em">1hr</text></svg>
    ),
  },
  {
    label: "My Deals",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="#B91C1C" strokeWidth="3" fill="#fff"/><text x="50%" y="55%" textAnchor="middle" fill="#B91C1C" fontSize="14" fontWeight="bold" dy=".3em">$</text></svg>
    ),
  },
  {
    label: "Back to School",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="8" y="10" width="24" height="20" rx="3" fill="#fff" stroke="#B91C1C" strokeWidth="2"/><rect x="14" y="16" width="12" height="8" fill="#B91C1C"/></svg>
    ),
  },
  {
    label: "Travel Hub",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="#B91C1C" strokeWidth="3" fill="#fff"/><circle cx="20" cy="20" r="8" stroke="#B91C1C" strokeWidth="2" fill="none"/></svg>
    ),
  },
  {
    label: "New & Trending",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><polygon points="20,8 24,18 35,18 26,24 29,35 20,28 11,35 14,24 5,18 16,18" fill="#fff" stroke="#B91C1C" strokeWidth="2"/></svg>
    ),
  },
  {
    label: "Print & Marketing",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="10" y="12" width="20" height="16" rx="2" fill="#fff" stroke="#B91C1C" strokeWidth="2"/><rect x="14" y="18" width="12" height="6" fill="#B91C1C"/></svg>
    ),
  },
  {
    label: "Yes, Staples has that!",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="#B91C1C" strokeWidth="3" fill="#fff"/><path d="M20 12v8l6 3" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
  },
  {
    label: "Promo Pro",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M20 8v24M8 20h24" stroke="#B91C1C" strokeWidth="3" strokeLinecap="round"/></svg>
    ),
  },
];

const CategoryNavBar = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full bg-white shadow-sm py-4">
      <div className="relative max-w-7xl mx-auto px-2">
        {/* Left Arrow (optional, hidden on large screens) */}
        <button
          className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100"
          style={{ display: 'none' }}
          aria-label="Scroll left"
          onClick={() => scroll(-200)}
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 scrollbar-hide px-2 md:justify-center md:overflow-x-visible"
        >
          {categories.map((cat, idx) => (
            <div key={idx} className="flex flex-col items-center min-w-[90px] max-w-[110px] mx-2">
              <div className="mb-2">{cat.icon}</div>
              <span className="text-sm text-center font-medium whitespace-nowrap">{cat.label}</span>
            </div>
          ))}
          {/* Right Arrow at the end */}
          <button
            className="flex flex-col items-center justify-center min-w-[60px] max-w-[60px] ml-2 bg-white rounded-full shadow h-14 w-14 mt-1 hover:bg-gray-100"
            aria-label="Scroll right"
            onClick={() => scroll(200)}
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#fff" stroke="#E5E7EB" strokeWidth="2"/><path d="M9 6l6 6-6 6" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default CategoryNavBar; 