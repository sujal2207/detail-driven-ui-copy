
const ServicesSection = () => {
  return (
    <section className="bg-red-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Services done right and fast.</h2>
          <p className="text-xl">Professional printing, tech services, and more</p>
        </div>
        
        <div className="grid grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-3xl">🖨️</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Print</h3>
            <p className="text-base leading-relaxed">Professional printing services for all your business needs</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-3xl">💻</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Tech Services</h3>
            <p className="text-base leading-relaxed">Computer repair, setup, and data recovery services</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-3xl">📞</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <p className="text-base leading-relaxed">Phone and internet services for your business</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
