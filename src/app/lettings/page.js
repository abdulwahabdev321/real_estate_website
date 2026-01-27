import PageHero from "@/components/PageHero";
import PropertyCard from "@/components/PropertyCard";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

const rentalProperties = [
  {
    id: 1,
    title: "Modern Apartment in Leytonstone",
    price: 1500,
    location: "Leytonstone, London E11",
    bedrooms: 2,
    bathrooms: 1,
    sqft: 850,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
    type: "Apartment",
    status: "For Rent",
  },
  {
    id: 2,
    title: "Luxury Studio Flat",
    price: 1200,
    location: "Stratford, London E15",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 500,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
    type: "Studio",
    status: "For Rent",
  },
  {
    id: 3,
    title: "Contemporary 2 Bed Flat",
    price: 1800,
    location: "Leyton, London E10",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 950,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
    type: "Apartment",
    status: "For Rent",
  },
  {
    id: 4,
    title: "Cozy 1 Bedroom Flat",
    price: 1100,
    location: "Forest Gate, London E7",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 450,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    type: "Apartment",
    status: "For Rent",
  },
  {
    id: 5,
    title: "Spacious 3 Bed House",
    price: 2200,
    location: "Wanstead, London E11",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1400,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    type: "House",
    status: "For Rent",
  },
  {
    id: 6,
    title: "Modern 2 Bed with Garden",
    price: 1650,
    location: "Manor Park, London E12",
    bedrooms: 2,
    bathrooms: 1,
    sqft: 800,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    type: "House",
    status: "For Rent",
  },
  {
    id: 7,
    title: "Executive Studio Apartment",
    price: 1350,
    location: "Stratford, London E15",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 550,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800",
    type: "Studio",
    status: "For Rent",
  },
  {
    id: 8,
    title: "Family 4 Bed House",
    price: 2800,
    location: "Woodford, London E18",
    bedrooms: 4,
    bathrooms: 2,
    sqft: 1800,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    type: "House",
    status: "For Rent",
  },
  {
    id: 9,
    title: "Bright Corner Apartment",
    price: 1450,
    location: "Leytonstone, London E11",
    bedrooms: 2,
    bathrooms: 1,
    sqft: 750,
    image: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800",
    type: "Apartment",
    status: "For Rent",
  },
];

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Verified Properties",
    description: "All our listings are verified and inspected for quality",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Quick Move-in",
    description: "Find and move into your new home within weeks",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "24/7 Support",
    description: "Our team is always available to help you",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Easy Application",
    description: "Simple and streamlined rental application process",
  },
];

export const metadata = {
  title: "Lettings | Preview Estates",
  description: "Find your perfect rental property in East London. Browse our extensive portfolio of quality homes available to let.",
};

export default function LettingsPage() {
  return (
    <>
      <PageHero
        title="Properties to Let"
        subtitle="Discover your ideal rental home from our carefully curated collection of quality properties across East London."
        backgroundImage="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920"
      />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 md:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`text-center md:p-5 p-3 opacity-0 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
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
              <option value="0-1000">Up to £1,000</option>
              <option value="1000-1500">£1,000 - £1,500</option>
              <option value="1500-2000">£1,500 - £2,000</option>
              <option value="2000+">£2,000+</option>
            </select>
            <select className="input-field !py-3 !w-auto">
              <option value="">Property Type</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="studio">Studio</option>
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
              Showing <span className="font-semibold text-gray-900">{rentalProperties.length}</span> properties
            </p>
            <select className="input-field !py-2 !w-auto text-sm">
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rentalProperties.map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Renting Process Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="How It Works"
            title="Simple Renting Process"
            description="We've made finding and renting your next home as easy as possible."
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Search", desc: "Browse our extensive listings" },
              { step: 2, title: "View", desc: "Book viewings at your convenience" },
              { step: 3, title: "Apply", desc: "Submit your application online" },
              { step: 4, title: "Move In", desc: "Get the keys to your new home" },
            ].map((item, index) => (
              <div
                key={index}
                className={`text-center opacity-0 animate-fade-in`}
                style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-red-600 text-white flex items-center justify-center text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[calc(100%_-_16px)] w-[calc(100%_-_64px)] h-0.5 bg-red-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Can't Find What You're Looking For?"
        description="Register with us and we'll notify you as soon as a matching property becomes available."
        primaryBtnText="Register Interest"
        primaryBtnHref="/contact"
      />
    </>
  );
}
