
import { Search, ShoppingCart, User, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      {/* Top bar */}
      <div className="bg-red-600 text-white text-xs py-1">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center hover:underline cursor-pointer">
              <MapPin className="w-3 h-3 mr-1" />
              Find a Store
            </span>
            <span className="flex items-center hover:underline cursor-pointer">
              <Phone className="w-3 h-3 mr-1" />
              1-800-STAPLES
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <span className="hover:underline cursor-pointer">Sign In</span>
            <span className="hover:underline cursor-pointer">Create Account</span>
            <span className="hover:underline cursor-pointer">Order Status</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-red-600 text-3xl font-bold tracking-tight">
              staples
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Input 
                placeholder="Search by keyword or item number" 
                className="w-full pl-4 pr-12 h-11 border-gray-300 rounded-sm text-sm"
              />
              <Button className="absolute right-0 top-0 h-11 bg-red-600 hover:bg-red-700 rounded-sm px-6">
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center space-x-6">
            <Button variant="ghost" className="flex items-center space-x-2 text-sm hover:bg-gray-50 px-3 py-2">
              <User className="w-5 h-5" />
              <span>Account</span>
            </Button>
            <Button variant="ghost" className="flex items-center space-x-2 text-sm relative hover:bg-gray-50 px-3 py-2">
              <ShoppingCart className="w-5 h-5" />
              <span>Cart</span>
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">0</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-8 py-3 text-sm font-medium">
            <a href="#" className="text-red-600 font-semibold">Deals</a>
            <a href="#" className="text-gray-700 hover:text-red-600">Ink & Toner</a>
            <a href="#" className="text-gray-700 hover:text-red-600">Paper</a>
            <a href="#" className="text-gray-700 hover:text-red-600">Cleaning & Breakroom</a>
            <a href="#" className="text-gray-700 hover:text-red-600">Furniture</a>
            <a href="#" className="text-gray-700 hover:text-red-600">Technology</a>
            <a href="#" className="text-gray-700 hover:text-red-600">School & Office Supplies</a>
            <a href="#" className="text-gray-700 hover:text-red-600">Print & Marketing</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
