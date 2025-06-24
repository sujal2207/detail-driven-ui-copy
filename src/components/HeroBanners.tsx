import React from "react";

const HeroBanners = () => {
  return (
      <div className="container py-8">
        <div className={'flex justify-space-between align-middle'}>
          <div className={'mr-2'}>
            <img
                src="https://assets.staples-static.com/sbd/cre/products/home-banners/20250622/2360402/updates_baked/images/2360402_wk4_2across_paperdeals_46_41_1332x560.jpg?imWidth=1416"
                alt="" className={'h-[300px]'}/>
          </div>
          <div>
            <img
                src="https://assets.staples-static.com/sbd/cre/products/home-banners/20250622/2360402/updates_baked/images/2360402_wk4_2across_kcups_1332x560.jpg?imWidth=1416"
                alt="" className={'h-[300px]'}/>
          </div>
        </div>
      </div>
  );
};

export default HeroBanners;
