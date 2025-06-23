
const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-5 gap-12">
          <div>
            <h3 className="font-bold text-gray-900 mb-6 text-base">Customer Service</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-red-600 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Order Status</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-6 text-base">About Staples</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-red-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Investors</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-6 text-base">Resources</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-red-600 transition-colors">Business Hub</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Ideas & Inspiration</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Rebate Center</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Site Map</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-6 text-base">Programs</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-red-600 transition-colors">Staples Rewards</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Business Rewards</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Credit Cards</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Gift Cards</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-6 text-base">Connect</h3>
            <div className="flex space-x-4 mb-6">
              <div className="w-10 h-10 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors cursor-pointer"></div>
              <div className="w-10 h-10 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors cursor-pointer"></div>
              <div className="w-10 h-10 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors cursor-pointer"></div>
            </div>
            <p className="text-sm text-gray-600">Sign up for emails</p>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="bg-gray-200 py-6 border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="text-red-600 text-2xl font-bold">staples</div>
          <div className="flex space-x-8 text-sm text-gray-600">
            <a href="#" className="hover:text-red-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-red-600 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-red-600 transition-colors">California Privacy Rights</a>
            <a href="#" className="hover:text-red-600 transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
