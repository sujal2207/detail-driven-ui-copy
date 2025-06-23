
const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-5 gap-8">
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-red-600">Help Center</a></li>
              <li><a href="#" className="hover:text-red-600">Order Status</a></li>
              <li><a href="#" className="hover:text-red-600">Returns</a></li>
              <li><a href="#" className="hover:text-red-600">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-800 mb-4">About Staples</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-red-600">About Us</a></li>
              <li><a href="#" className="hover:text-red-600">Careers</a></li>
              <li><a href="#" className="hover:text-red-600">Investors</a></li>
              <li><a href="#" className="hover:text-red-600">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-red-600">Business Hub</a></li>
              <li><a href="#" className="hover:text-red-600">Ideas & Inspiration</a></li>
              <li><a href="#" className="hover:text-red-600">Rebate Center</a></li>
              <li><a href="#" className="hover:text-red-600">Site Map</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Programs</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-red-600">Staples Rewards</a></li>
              <li><a href="#" className="hover:text-red-600">Business Rewards</a></li>
              <li><a href="#" className="hover:text-red-600">Credit Cards</a></li>
              <li><a href="#" className="hover:text-red-600">Gift Cards</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <div className="w-8 h-8 bg-gray-300 rounded"></div>
              <div className="w-8 h-8 bg-gray-300 rounded"></div>
              <div className="w-8 h-8 bg-gray-300 rounded"></div>
            </div>
            <p className="text-sm text-gray-600">Sign up for emails</p>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="bg-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="text-red-600 text-xl font-bold">Staples</div>
          <div className="flex space-x-6 text-sm text-gray-600">
            <a href="#" className="hover:text-red-600">Privacy Policy</a>
            <a href="#" className="hover:text-red-600">Terms of Use</a>
            <a href="#" className="hover:text-red-600">California Privacy Rights</a>
            <a href="#" className="hover:text-red-600">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
