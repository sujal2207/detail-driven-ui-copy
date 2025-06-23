import React from "react";

const services = [
  {
    title: "Print",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    icon: "✔",
    heading: "We print it all and we'll beat any print quote",
    desc: "It's kind of our thing.",
    link: "#",
  },
  {
    title: "Travel",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    icon: "✔",
    heading: "Ready for takeoff.",
    desc: "Luggage, passport photos, all your travel needs. Check.",
    link: "#",
  },
  {
    title: "Tech",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    icon: "✔",
    heading: "All the tech expertise.",
    desc: "None of the confusion.",
    link: "#",
  },
];

const ServicesSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-8 mb-12">
      {/* Banner */}
      <div className="bg-red-700 rounded-2xl flex items-center justify-between p-10 mb-8 relative min-h-[160px]">
        <div className="flex-1">
          <h2 className="text-3xl font-extrabold text-white mb-2">Services done right and fast.</h2>
          <p className="text-white text-xl mb-4">Is there any other way?</p>
          <a href="#" className="text-white font-bold underline">Shop all services</a>
        </div>
        <div className="flex-1 flex justify-end items-center">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white mb-2">That was</span>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Staples_Easy_Button.png" alt="Easy Button" className="w-32 h-32 object-contain" />
          </div>
        </div>
      </div>
      {/* Service Cards */}
      <div className="flex gap-6">
        {services.map((service, idx) => (
          <div key={idx} className="flex-1 bg-white rounded-2xl overflow-hidden shadow border flex flex-col">
            <div className="relative h-56">
              <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span className="text-white text-4xl font-extrabold drop-shadow-lg">{service.icon} {service.title}</span>
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
