
const ServicesSection = () => {
  return (
    <section className="bg-red-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Services done right and fast.</h2>
          <p className="text-lg">Professional printing, tech services, and more</p>
        </div>
        
        <div className="grid grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🖨️</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Print</h3>
            <p className="text-sm">Professional printing services for all your business needs</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">💻</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Tech Services</h3>
            <p className="text-sm">Computer repair, setup, and data recovery services</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">📞</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Connect</h3>
            <p className="text-sm">Phone and internet services for your business</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
