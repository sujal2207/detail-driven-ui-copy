import { Search, ShoppingCart, User, List, HelpCircle, Star, Gift, Globe, TrendingUp, Calendar, Tag, Sun, ArrowRight, MapPin, Truck, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const quickLinks = [
  { icon: <Star className="w-7 h-7" />, label: "That was Easy!" },
  { icon: <Gift className="w-7 h-7" />, label: "1-Hour In-Store Pickup" },
  { icon: <Tag className="w-7 h-7" />, label: "My Deals" },
  { icon: <Calendar className="w-7 h-7" />, label: "Back to School" },
  { icon: <Globe className="w-7 h-7" />, label: "Travel Hub" },
  { icon: <TrendingUp className="w-7 h-7" />, label: "New & Trending" },
  { icon: <Sun className="w-7 h-7" />, label: "Print & Marketing" },
  { icon: <ArrowRight className="w-7 h-7" />, label: "Promotions" },
];

const subNav = [
  "For Business",
  "Print & Marketing",
  "Ink & Toner",
  "Paper Deals",
];

const mainNav = [
  { label: "Shop", href: "#" },
  { label: "Deals", href: "#" },
  { label: "Services", href: "#" },
];

// Add navLinks for the main navigation bar with icons above text
const navLinks = [
  { icon: <Star className="w-6 h-6 mx-auto" />, label: "Deals" },
  { icon: <Gift className="w-6 h-6 mx-auto" />, label: "Rewards" },
  { icon: <Tag className="w-6 h-6 mx-auto" />, label: "Coupons" },
  { icon: <Calendar className="w-6 h-6 mx-auto" />, label: "Events" },
  { icon: <Globe className="w-6 h-6 mx-auto" />, label: "Travel" },
  { icon: <TrendingUp className="w-6 h-6 mx-auto" />, label: "Trending" },
  { icon: <Sun className="w-6 h-6 mx-auto" />, label: "Print" },
  { icon: <ArrowRight className="w-6 h-6 mx-auto" />, label: "More" },
];

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      {/* Very top bar */}
      <div className="bg-gray-100 text-xs text-gray-700 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex items-center h-8 justify-between">
          <div className="flex items-center space-x-4">
            <a href="#" className="flex items-center hover:underline"><MapPin className="w-4 h-4 mr-1" /> Store Locator</a>
            <a href="#" className="flex items-center hover:underline"><Truck className="w-4 h-4 mr-1" /> Order Status</a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="flex items-center hover:underline"><User className="w-4 h-4 mr-1" /> Account</a>
            <a href="#" className="flex items-center hover:underline"><HelpCircle className="w-4 h-4 mr-1" /> Help</a>
          </div>
        </div>
      </div>
      {/* Top info bar */}
      <div className="bg-white text-xs text-gray-700 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex items-center h-8 divide-x divide-gray-200">
          <div className="flex-1 flex items-center min-w-0 pr-4">
            <span className="truncate">Earn points with <span className="font-semibold text-purple-700">Easy Rewards</span>. <a href="#" className="underline">Learn more</a></span>
          </div>
          <div className="flex-1 flex justify-center items-center min-w-0 px-4">
            <span className="truncate">Save $20 or more on custom print</span>
          </div>
          <div className="flex-1 flex justify-end items-center min-w-0 pl-4">
            <span className="flex items-center truncate"><Gift className="w-4 h-4 mr-1 text-yellow-500" />As low as $36.99 88/96 ct. K-cup pods</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-red-600 text-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center h-16">
          {/* Logo */}
          <div className="flex items-center min-w-[120px]">
            <span className="text-3xl font-extrabold tracking-tight leading-none">Staples</span>
          </div>
          {/* Main nav */}
          <nav className="hidden md:flex items-center space-x-8 text-base font-semibold ml-8">
            {mainNav.map((item) => (
              <a key={item.label} href={item.href} className="hover:underline">
                {item.label}
              </a>
            ))}
          </nav>
          {/* Search bar */}
          <div className="flex-1 flex justify-center mx-8">
            <div className="relative w-full max-w-lg">
              <Input 
                placeholder="Search Staples" 
                className="w-full pl-4 pr-12 h-10 rounded-full border-none focus:ring-2 focus:ring-red-400 text-gray-900 placeholder-gray-500 text-base shadow-sm"
              />
              <Button className="absolute right-1 top-1 h-8 w-8 p-0 bg-red-700 hover:bg-red-800 rounded-full flex items-center justify-center">
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>
          {/* Right icons */}
          <div className="flex items-center space-x-2 min-w-[180px] justify-end">
            <Button variant="ghost" className="text-white hover:bg-red-700 p-2"><List className="w-5 h-5" /></Button>
            <Button variant="ghost" className="text-white hover:bg-red-700 p-2"><HelpCircle className="w-5 h-5" /></Button>
            <Button variant="ghost" className="text-white hover:bg-red-700 p-2"><User className="w-5 h-5" /></Button>
            <Button variant="ghost" className="text-white hover:bg-red-700 p-2 relative"><ShoppingCart className="w-5 h-5" /><span className="absolute -top-1 -right-1 bg-yellow-400 text-red-700 text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span></Button>
          </div>
        </div>
      </div>

      {/* Sub-navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex items-center space-x-8 h-10 text-sm font-semibold text-gray-700">
          {subNav.map((item) => (
            <a key={item} href="#" className="hover:text-red-600 flex items-center">
              {item}
              <span className="ml-1 text-xs">{item === "Print & Marketing" && <Gift className="w-3 h-3 text-yellow-500" />}</span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
