import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import PropertyCard from "@/components/PropertyCard";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import StatsSection from "@/components/StatsSection";

// Sample property data
const featuredProperties = [
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
];

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Lettings",
    description: "Find your perfect rental property with our extensive portfolio of quality homes across East London.",
    href: "/lettings",
    features: ["Verified Properties", "Virtual Tours", "24/7 Support"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Sales",
    description: "Whether buying or selling, our expert team ensures smooth transactions and the best market value.",
    href: "/sales",
    features: ["Free Valuations", "Expert Negotiation", "Quick Sales"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Property Management",
    description: "Full-service property management tailored to landlords who want hassle-free rental income.",
    href: "/landlord",
    features: ["Rent Collection", "Maintenance", "Tenant Vetting"],
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Happy Tenant",
    content: "Preview Estates made finding my dream home so easy. Their team was professional, responsive, and genuinely cared about finding the right fit for me.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Property Owner",
    content: "As a landlord, I've never had such peace of mind. Their property management service is exceptional - my properties are always occupied with quality tenants.",
    rating: 5,
  },
  {
    name: "Emma Williams",
    role: "First-time Buyer",
    content: "Buying my first home was daunting, but the team at Preview Estates guided me through every step. I couldn't be happier with my new place!",
    rating: 5,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Animated Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-red-500/30 rounded-full animate-pulse" />
        <div className="absolute bottom-40 right-20 w-48 h-48 border-2 border-red-500/20 rounded-full animate-pulse delay-500" />
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-red-500 rounded-full animate-ping" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-red-600/20 backdrop-blur-sm text-red-400 rounded-full text-sm font-semibold mb-6 animate-fade-in">
            
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 animate-fade-in delay-100 break-words">
            Find Your Perfect
            <span className="block text-red-500">Dream Home</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 sm:mb-10 animate-fade-in delay-200 px-2">
            Your trusted partner for property lettings, management, and sales
            in East London. Discover exceptional homes with our expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-in delay-300 px-4">
            <Link href="/lettings" className="btn-primary w-full sm:w-auto px-6 sm:px-8">
              Browse Properties
            </Link>
            <Link href="/contact" className="btn-outline !text-white !border-white hover:!bg-white hover:!text-black w-full sm:w-auto px-6 sm:px-8">
              Get in Touch
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white overflow-x-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Services"
            title={
              <>
                Comprehensive <span className="text-red-600">Real Estate Solutions</span>
              </>
            }
            description="From finding your dream home to managing your investment property, we've got you covered with professional services tailored to your needs."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />


      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50 overflow-x-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Image Side */}
            <div className="relative lg:animate-fade-in-left ">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800"
                  alt="Real Estate Agent"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 right-2 sm:-right-4 md:-right-6 lg:-right-8 bg-white rounded-xl shadow-xl p-2 sm:p-3 md:p-4 animate-float max-w-[140px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-none">
                <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-10 md:w-12 md:h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 sm:w-4 sm:h-5 md:w-6 md:h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 leading-tight">15+</p>
                    <p className="text-xs text-gray-600 leading-tight">Years</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="animate-fade-in-right">
              <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
                Why Choose Us
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 break-words">
                Your Trusted Partner in Real Estate
              </h2>
              <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                With over 15 years of experience in the East London property market,
                Preview Estates has built a reputation for excellence, integrity, and
                personalized service. We understand that property decisions are significant,
                and we're here to make the process smooth and stress-free.
              </p>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {[
                  "Local expertise with deep knowledge of East London",
                  "Transparent and honest communication throughout",
                  "Dedicated support from experienced professionals",
                  "Comprehensive services under one roof",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base break-words">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white overflow-x-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it. Here's what our satisfied clients have to say about their experience with Preview Estates."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

     

      {/* Contact Info Bar */}
      <section className="bg-gray-900 py-6 sm:py-8 overflow-x-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-3 sm:gap-4 text-white w-full lg:w-auto">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-gray-400 text-xs sm:text-sm">Visit Us</p>
                <p className="font-semibold text-sm sm:text-base break-words">855 High Road Leytonstone, London E11 1HH</p>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 text-white w-full lg:w-auto">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-gray-400 text-xs sm:text-sm">Call Us</p>
                <a href="tel:02034886585" className="font-semibold hover:text-red-500 transition-colors text-sm sm:text-base break-words">020 3488 6585</a>
              </div>
            </div>
            <Link href="/contact" className="btn-primary w-full lg:w-auto px-6 sm:px-8 text-center">
              Book a Viewing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
