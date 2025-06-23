import React from "react";

const services = [
  {
    title: "Print",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M10.25 2.75h-7.5v10.5h10.5v-3.5"/><path d="m5.75 7.75l2.5 2.5l6-6.5"/></g></svg>,
    heading: "We print it all and we'll beat any print quote",
    desc: "It's kind of our thing.",
    link: "#",
  },
  {
    title: "Travel",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M10.25 2.75h-7.5v10.5h10.5v-3.5"/><path d="m5.75 7.75l2.5 2.5l6-6.5"/></g></svg>,
    heading: "Ready for takeoff.",
    desc: "Luggage, passport photos, all your travel needs. Check.",
    link: "#",
  },
  {
    title: "Tech",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M10.25 2.75h-7.5v10.5h10.5v-3.5"/><path d="m5.75 7.75l2.5 2.5l6-6.5"/></g></svg>,
    heading: "All the tech expertise.",
    desc: "None of the confusion.",
    link: "#",
  },
];

const ServicesSection = () => {
  return (
      <section className="container mt-8 mb-12">
        {/* Banner */}
        <div className="rounded-2xl overflow-hidden mb-4">
          <img
              src="https://assets.staples-static.com/sbd/cre/products/home-banners/20250608/2360402/updates_baked/images/2360402_wk2_easy_services_sliver_2880x350.jpg?imWidth=1416"
              alt="image"/>
        </div>
        {/* Service Cards */}
        <div className="flex gap-6">
          {services.map((service, idx) => (
              <div key={idx} className="flex-1 bg-white rounded-2xl overflow-hidden shadow border flex flex-col">
            <div className="relative h-56">
              <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span className="text-white flex items-center text-4xl font-extrabold drop-shadow-lg"><span className={'mr-2'}>{service.icon}</span> {service.title}</span>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-2">{service.heading}</h3>
              <p className="text-gray-700 mb-4 flex-1">{service.desc}</p>
              <a href={service.link} className="text-blue-600 font-semibold underline">Get started</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
