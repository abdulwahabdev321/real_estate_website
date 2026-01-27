import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import StatsSection from "@/components/StatsSection";
import Link from "next/link";

const managementServices = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Tenant Finding",
    description: "We source, vet, and reference quality tenants to ensure reliable occupancy and rental income.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Rent Collection",
    description: "Hassle-free rent collection with guaranteed payment dates and arrears management.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Property Maintenance",
    description: "24/7 maintenance coordination with trusted contractors at competitive rates.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Legal Compliance",
    description: "Stay compliant with all landlord regulations, safety certificates, and legal requirements.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Financial Reporting",
    description: "Detailed monthly statements and annual summaries for easy tax management.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: "Property Inspections",
    description: "Regular property inspections with detailed reports and photos.",
  },
];

const packages = [
  {
    name: "Let Only",
    price: "50%",
    priceNote: "of first month's rent",
    description: "Perfect for hands-on landlords who want help finding quality tenants.",
    features: [
      "Property marketing",
      "Viewings & feedback",
      "Tenant referencing",
      "Tenancy agreement preparation",
      "Inventory check-in",
      "Deposit registration",
    ],
    highlighted: false,
  },
  {
    name: "Fully Managed",
    price: "10%",
    priceNote: "of monthly rent",
    description: "Comprehensive management for complete peace of mind.",
    features: [
      "Everything in Let Only",
      "Rent collection & arrears",
      "24/7 maintenance coordination",
      "Regular property inspections",
      "Legal compliance management",
      "Monthly financial statements",
      "Tenancy renewals & notices",
      "Check-out & deposit returns",
    ],
    highlighted: true,
  },
  {
    name: "Rent Collection",
    price: "8%",
    priceNote: "of monthly rent",
    description: "For landlords who handle maintenance but want rent assured.",
    features: [
      "Everything in Let Only",
      "Monthly rent collection",
      "Arrears management",
      "Online owner portal access",
      "Annual rent reviews",
    ],
    highlighted: false,
  },
];

const benefits = [
  {
    stat: "100%",
    label: "Tenant Vetting",
    description: "All tenants thoroughly referenced",
  },
  {
    stat: "24/7",
    label: "Support",
    description: "Round-the-clock emergency line",
  },
  {
    stat: "98%",
    label: "Occupancy Rate",
    description: "Minimal void periods",
  },
  {
    stat: "15+",
    label: "Years Experience",
    description: "Local market expertise",
  },
];

export const metadata = {
  title: "Landlord Services | Preview Estates",
  description: "Professional property management services for landlords. From tenant finding to full management, we handle everything so you don't have to.",
};

export default function LandlordPage() {
  return (
    <>
      <PageHero
        title="Landlord Services"
        subtitle="Maximize your rental income with our professional property management services tailored to your needs."
        backgroundImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920"
      />

      {/* Benefits Section */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`text-center opacity-0 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
              >
                <p className="text-4xl font-bold text-red-600 mb-1">{benefit.stat}</p>
                <p className="font-semibold text-gray-900 mb-1">{benefit.label}</p>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Services"
            title="Comprehensive Property Management"
            description="From finding tenants to handling maintenance, we take care of everything so you can enjoy passive income."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {managementServices.map((service, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 opacity-0 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
              >
                <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center text-red-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Pricing"
            title="Choose Your Management Package"
            description="Flexible packages designed to match your level of involvement and requirements."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden opacity-0 animate-fade-in ${
                  pkg.highlighted
                    ? "bg-gray-900 text-white ring-4 ring-red-600 scale-105"
                    : "bg-gray-50"
                }`}
                style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
              >
                {pkg.highlighted && (
                  <div className="bg-red-600 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className={`text-2xl font-bold mb-2 ${pkg.highlighted ? "text-white" : "text-gray-900"}`}>
                    {pkg.name}
                  </h3>
                  <p className={`mb-6 ${pkg.highlighted ? "text-gray-300" : "text-gray-600"}`}>
                    {pkg.description}
                  </p>
                  <div className="mb-6">
                    <span className={`text-4xl font-bold ${pkg.highlighted ? "text-red-400" : "text-red-600"}`}>
                      {pkg.price}
                    </span>
                    <span className={`text-sm ml-2 ${pkg.highlighted ? "text-gray-400" : "text-gray-500"}`}>
                      {pkg.priceNote}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg
                          className={`w-5 h-5 flex-shrink-0 ${pkg.highlighted ? "text-red-400" : "text-red-600"}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={pkg.highlighted ? "text-gray-300" : "text-gray-600"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`block w-full py-3 text-center rounded-lg font-semibold transition-colors ${
                      pkg.highlighted
                        ? "bg-red-600 text-white hover:bg-red-700"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <span className="inline-block px-4 py-1 bg-red-600/20 text-red-400 rounded-full text-sm font-semibold mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Landlords Across East London
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                With over 15 years of experience managing properties in East London,
                we understand the local market inside out. Our dedicated team ensures
                your investment is protected while maximizing your returns.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Local expertise with deep knowledge of East London",
                  "Dedicated property manager for your portfolio",
                  "Competitive fees with no hidden charges",
                  "Regular property inspections and detailed reports",
                  "Quick turnaround on tenant finding",
                  "Comprehensive legal and compliance support",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary">
                Speak to Our Team
              </Link>
            </div>
            <div className="animate-fade-in-right">
              <div className="bg-gray-800 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Get a Free Rental Valuation</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                  />
                  <input
                    type="text"
                    placeholder="Property Address"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                  />
                  <select className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-red-500">
                    <option value="">Number of Bedrooms</option>
                    <option value="1">1 Bedroom</option>
                    <option value="2">2 Bedrooms</option>
                    <option value="3">3 Bedrooms</option>
                    <option value="4">4+ Bedrooms</option>
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
        title="Ready to Let Your Property?"
        description="Get in touch today for a free rental valuation and discover how we can help maximize your returns."
        primaryBtnText="Book Free Valuation"
        primaryBtnHref="/contact"
      />
    </>
  );
}
