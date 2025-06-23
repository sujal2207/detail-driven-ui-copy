
import { Search, ShoppingCart, User, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Header = () => {
  return (
    <header className="bg-white border-b">
      {/* Top bar */}
      <div className="bg-red-600 text-white text-xs py-1">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" />Find a Store</span>
            <span className="flex items-center"><Phone className="w-3 h-3 mr-1" />1-800-STAPLES</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Sign In</span>
            <span>Create Account</span>
            <span>Order Status</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-red-600 text-2xl font-bold tracking-tight">
              Staples
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Input 
                placeholder="Search by keyword or item number" 
                className="w-full pl-4 pr-12 h-10 border-gray-300 rounded-sm"
              />
              <Button className="absolute right-0 top-0 h-10 bg-red-600 hover:bg-red-700 rounded-sm px-4">
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="flex items-center space-x-1 text-sm">
              <User className="w-4 h-4" />
              <span>Account</span>
            </Button>
            <Button variant="ghost" className="flex items-center space-x-1 text-sm relative">
              <ShoppingCart className="w-4 h-4" />
              <span>Cart</span>
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-8 py-3 text-sm">
            <a href="#" className="text-red-600 font-medium">Deals</a>
            <a href="#" className="hover:text-red-600">Ink & Toner</a>
            <a href="#" className="hover:text-red-600">Paper</a>
            <a href="#" className="hover:text-red-600">Cleaning & Breakroom</a>
            <a href="#" className="hover:text-red-600">Furniture</a>
            <a href="#" className="hover:text-red-600">Technology</a>
            <a href="#" className="hover:text-red-600">School & Office Supplies</a>
            <a href="#" className="hover:text-red-600">Print & Marketing</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
