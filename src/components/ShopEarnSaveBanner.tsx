import React from "react";

const ShopEarnSaveBanner = () => {
  return (
    <section className="container mt-8 mb-12">
      <div className="bg-red-700 rounded-2xl flex items-center justify-between p-8 relative min-h-[220px]">
        {/* App image */}
        <div className="flex-shrink-0">
          <img
            src="https://assets.staples-static.com/sbd/cre/products/250226/kcfep3048/images/phone-bg.png"
            alt="Staples App"
            className="rounded-xl shadow-lg -mt-8"
            style={{ width: 180, height: 180 }}
          />
        </div>
        {/* Text */}
        <div className="flex-1 px-8">
          <h2 className="text-4xl font-extrabold text-white mb-2">Shop. Earn. Save.</h2>
          <p className="text-white text-lg font-medium mb-2">
            Download our mobile app today for access to exclusive deals.<br />
            Scan products, update bonus points categories and more.
          </p>
        </div>
        {/* QR code */}
        <div className="flex-shrink-0">
          <img
            src="https://assets.staples-static.com/sbd/cre/products/250226/kcfep3048/images/qr.png"
            alt="QR Code"
            className="bg-white rounded-lg p-2"
            style={{ width: 100, height: 100 }}
          />
        </div>
      </div>
    </section>
  );
};

export default ShopEarnSaveBanner;

