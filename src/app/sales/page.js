import PageHero from "@/components/PageHero";
import PropertyCard from "@/components/PropertyCard";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

const saleProperties = [
  {
    id: 1,
    title: "Spacious Family Home",
    price: 450000,
    location: "Wanstead, London E11",
    bedrooms: 4,
    bathrooms: 2,
    sqft: 1800,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    type: "House",
    status: "For Sale",
  },
  {
    id: 2,
    title: "Victorian Terraced House",
    price: 550000,
    location: "Forest Gate, London E7",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1400,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    type: "House",
    status: "For Sale",
  },
  {
    id: 3,
    title: "Penthouse with City Views",
    price: 750000,
    location: "Canary Wharf, London E14",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2000,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    type: "Penthouse",
    status: "For Sale",
  },
  {
    id: 4,
    title: "Modern New Build Apartment",
    price: 385000,
    location: "Stratford, London E15",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 900,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
    type: "Apartment",
    status: "For Sale",
  },
  {
    id: 5,
    title: "Character Period Property",
    price: 625000,
    location: "Leytonstone, London E11",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2200,
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
    type: "House",
    status: "For Sale",
  },
  {
    id: 6,
    title: "Contemporary Town House",
    price: 495000,
    location: "Leyton, London E10",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1500,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
    type: "Townhouse",
    status: "For Sale",
  },
  {
    id: 7,
    title: "Investment Studio Flat",
    price: 220000,
    location: "Manor Park, London E12",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 450,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
    type: "Studio",
    status: "For Sale",
  },
  {
    id: 8,
    title: "Executive Detached Home",
    price: 875000,
    location: "Woodford, London E18",
    bedrooms: 5,
    bathrooms: 3,
    sqft: 2800,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
    type: "House",
    status: "For Sale",
  },
  {
    id: 9,
    title: "First-Time Buyer Special",
    price: 295000,
    location: "Plaistow, London E13",
    bedrooms: 2,
    bathrooms: 1,
    sqft: 700,
    image: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800",
    type: "Apartment",
    status: "For Sale",
  },
];

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Free Valuations",
    description: "Get an accurate, no-obligation valuation of your property from our local experts.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Professional Photography",
    description: "Showcase your property with stunning professional photos that attract buyers.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    title: "Market Analysis",
    description: "In-depth market analysis to price your property competitively for quick sales.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Expert Negotiation",
    description: "Our experienced team negotiates to get you the best possible price.",
  },
];

export const metadata = {
  title: "Sales | Preview Estates",
  description: "Find your dream home or sell your property with Preview Estates. Expert real estate services in East London.",
};

export default function SalesPage() {
  return (
    <>
      <PageHero
        title="Properties for Sale"
        subtitle="Whether you're buying or selling, our expert team is here to help you achieve the best outcome."
        backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920"
      />

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Selling Services"
            title="Maximize Your Property's Value"
            description="Our comprehensive selling services ensure your property reaches the right buyers at the best price."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-xl bg-gray-50 hover:bg-red-50 transition-colors opacity-0 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search/Filter Section */}
      <section className="py-8 bg-gray-50 sticky top-16 z-30 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-[200px]">
              <input
                type="text"
                placeholder="Search by location..."
                className="input-field !py-3"
              />
            </div>
            <select className="input-field !py-3 !w-auto">
              <option value="">Bedrooms</option>
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedrooms</option>
              <option value="3">3 Bedrooms</option>
              <option value="4">4+ Bedrooms</option>
            </select>
            <select className="input-field !py-3 !w-auto">
              <option value="">Price Range</option>
              <option value="0-300000">Up to £300,000</option>
              <option value="300000-500000">£300,000 - £500,000</option>
              <option value="500000-750000">£500,000 - £750,000</option>
              <option value="750000+">£750,000+</option>
            </select>
            <select className="input-field !py-3 !w-auto">
              <option value="">Property Type</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="townhouse">Townhouse</option>
              <option value="penthouse">Penthouse</option>
            </select>
            <button className="btn-primary !py-3">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-gray-900">{saleProperties.length}</span> properties
            </p>
            <select className="input-field !py-2 !w-auto text-sm">
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {saleProperties.map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Selling Your Property Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
                Thinking of Selling?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Get a Free Property Valuation Today
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Wondering what your property is worth? Our experienced local agents provide
                accurate, no-obligation valuations based on current market conditions and
                recent sales in your area.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Accurate valuations based on local market knowledge",
                  "No obligation - completely free service",
                  "Expert advice on maximizing your property's value",
                  "Flexible appointment times to suit your schedule",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="/contact" className="btn-primary">
                Book Free Valuation
              </a>
            </div>
            <div className="animate-fade-in-right">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Request a Valuation</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input-field"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="input-field"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="input-field"
                  />
                  <input
                    type="text"
                    placeholder="Property Address"
                    className="input-field"
                  />
                  <select className="input-field">
                    <option value="">Property Type</option>
                    <option value="house">House</option>
                    <option value="flat">Flat/Apartment</option>
                    <option value="bungalow">Bungalow</option>
                    <option value="other">Other</option>
                  </select>
                  <button type="submit" className="btn-primary w-full">
                    Request Valuation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Buy Your Dream Home?"
        description="Let our expert team guide you through every step of the buying process."
        primaryBtnText="Contact Us Today"
        primaryBtnHref="/contact"
      />
    </>
  );
}
