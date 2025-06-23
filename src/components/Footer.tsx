import React from "react";

const footerLinks = [
  {
    heading: "Customer Service",
    links: [
      "Help Center",
      "Returns",
      "Shipping",
      "Contact Us",
      "Account Overview",
      "AutoRestock Subscriptions",
      "Store Locator",
      "Warranty",
      "Recalled Items",
      "Legal & Policies",
      "Privacy & Security",
      "Feedback",
    ],
  },
  {
    heading: "Company Information",
    links: [
      "About Staples",
      "Meet Our Experts",
      "Supplier Diversity",
      "Financial Information",
      "Media Information",
      "Community Relations",
      "Accessibility Commitment",
      "Staples Media Network",
      "Affiliate Program",
      "CA Transparency in Supply Chain Act",
    ],
    extra: {
      heading: "Other Staples Sites",
      links: [
        "Print & Marketing",
        "Promotional Products",
        "Quill.com",
        "Federal Government Customers",
      ],
    },
  },
  {
    heading: "Staples for Business",
    links: [
      "For Business",
      "Breakroom Solutions",
      "Facility Solutions",
      "Furniture Solutions",
      "Office Products & Services",
      "Print Solutions",
      "Tech Solutions",
      "Contact Staples Business",
    ],
    extra: {
      heading: "Careers",
      links: [
        "Staples Inc",
        "Corporate/Warehouse/Delivery",
        "Retail",
        "Corporate/Warehouse/Print Facility",
        "Retail Stores",
      ],
    },
  },
  {
    heading: "Staples Programs",
    links: ["Easy Rewards Overview"],
    extra: {
      heading: "Services",
      links: [
        "All Services",
        "Print & Marketing",
        "Recycling",
        "Shipping Services",
        "Tech Services & Support",
        "Warranties & Protection Plans",
        "Passport & TSA Services",
        "Promotional Products",
        "Online Notary Services",
        "Custom Packaging",
        "Primo Water Delivery Services",
        "Virtual Mailing Address",
      ],
    },
  },
];

const socialIcons = [
  { name: "Facebook", icon: <span className="fab fa-facebook-f" /> },
  { name: "X", icon: <span className="fab fa-x-twitter" /> },
  { name: "Pinterest", icon: <span className="fab fa-pinterest-p" /> },
  { name: "LinkedIn", icon: <span className="fab fa-linkedin-in" /> },
];

const appIcons = [
  { name: "Google Play", icon: <span className="fab fa-google-play" /> },
  { name: "Apple Store", icon: <span className="fab fa-apple" /> },
];

const Footer = () => (
  <footer className="bg-white border-t mt-16 text-sm text-gray-700">
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {footerLinks.map((section, idx) => (
          <div key={section.heading}>
            <h3 className="font-semibold mb-2">{section.heading}</h3>
            <ul className="space-y-1 mb-4">
              {section.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:underline">{link}</a>
                </li>
              ))}
            </ul>
            {section.extra && (
              <div className="mt-4">
                <h4 className="font-semibold mb-2">{section.extra.heading}</h4>
                <ul className="space-y-1">
                  {section.extra.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="hover:underline">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    <div className="border-t py-6 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src="/favicon.ico" alt="Staples Logo" className="h-8 w-auto mr-2" />
          <span className="text-xl font-bold text-red-600">Staples.</span>
        </div>
        <div className="flex items-center gap-6">
          <span>Join us on</span>
          <div className="flex gap-3 text-xl">
            {/* Replace with real icons in production */}
            <a href="#" aria-label="Facebook" className="hover:text-blue-600">F</a>
            <a href="#" aria-label="X" className="hover:text-black">X</a>
            <a href="#" aria-label="Pinterest" className="hover:text-red-600">P</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-700">in</a>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span>Download our mobile app</span>
          <a href="#" aria-label="Google Play" className="ml-2"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8" /></a>
          <a href="#" aria-label="Apple Store" className="ml-2"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Apple Store" className="h-8" /></a>
        </div>
      </div>
    </div>
    <div className="bg-white border-t text-xs text-gray-500 py-4 px-4 text-center">
      <div className="max-w-7xl mx-auto">
        <p>
          This website is intended for personal use by US residents only. See our delivery policy for full details. Copyright 1998-2025, Staples, Inc., All Rights Reserved.<br />
          <a href="#" className="underline">Site Map</a> | <a href="#" className="underline">Feedback</a> | <a href="#" className="underline">Privacy Notice</a> | <a href="#" className="underline">Terms & Conditions</a> | <a href="#" className="underline">AdChoices</a> | <a href="#" className="underline">Do Not Sell or Share My Personal Information</a> | <a href="#" className="underline">California Notice</a><br />
          By clicking Instacart links, you will leave staples.com and enter the Instacart site, which they operate and control. Item prices may vary from in-store prices. Service fees may apply. Available in select zip codes or location.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
