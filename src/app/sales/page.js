import PageHero from "@/components/PageHero";
import PropertyCard from "@/components/PropertyCard";

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

      {/* Properties Grid - Search and Services sections removed as per requirement */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-gray-900">{saleProperties.length}</span> properties
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {saleProperties.map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Selling Your Property Section - Keeping Valuation for leads */}
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
                accurate, no-obligation valuations based on current market conditions.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Accurate valuations based on local market knowledge",
                  "No obligation - completely free service",
                  "Expert advice on maximizing your property's value",
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
                  <input type="text" placeholder="Your Name" className="input-field" />
                  <input type="email" placeholder="Email Address" className="input-field" />
                  <input type="tel" placeholder="Phone Number" className="input-field" />
                  <input type="text" placeholder="Property Address" className="input-field" />
                  <button type="submit" className="btn-primary w-full">
                    Request Valuation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTASection Removed as per requirement */}
    </>
  );
}