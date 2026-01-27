import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import Link from "next/link";

const tenantServices = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Property Search",
    description: "We help you find the perfect rental property that matches your requirements and budget.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Viewing Arrangements",
    description: "Flexible viewing times arranged to suit your schedule, including evenings and weekends.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Application Support",
    description: "Clear guidance through the application process with quick turnaround times.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Maintenance Requests",
    description: "Easy-to-report maintenance issues with prompt response from our dedicated team.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Deposit Protection",
    description: "Your deposit is protected in a government-approved tenancy deposit scheme.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "24/7 Emergency Support",
    description: "Round-the-clock support for genuine emergencies to give you peace of mind.",
  },
];

const faqs = [
  {
    question: "What documents do I need to rent a property?",
    answer: "You'll typically need proof of identity (passport or driving license), proof of address, proof of income (payslips or employment contract), bank statements, and references from previous landlords if applicable.",
  },
  {
    question: "How much deposit do I need to pay?",
    answer: "The deposit is typically equivalent to 5 weeks' rent for annual rents under £50,000, or 6 weeks' rent for higher amounts. Your deposit will be protected in a government-approved scheme.",
  },
  {
    question: "How long does the application process take?",
    answer: "Once we receive your completed application and all required documents, referencing typically takes 2-5 working days. We'll keep you updated throughout the process.",
  },
  {
    question: "Can I decorate or make changes to the property?",
    answer: "Any alterations or decorations need to be approved by the landlord in writing before you proceed. Minor changes may be permitted, but always check first.",
  },
  {
    question: "How do I report maintenance issues?",
    answer: "You can report maintenance issues through our online portal, by phone, or by email. We aim to respond to all non-emergency requests within 24-48 hours.",
  },
  {
    question: "What happens at the end of my tenancy?",
    answer: "We'll arrange a check-out inspection, and provided the property is in good condition, your deposit will be returned within 10 days of the tenancy ending.",
  },
];

export const metadata = {
  title: "Tenants | Preview Estates",
  description: "Information and support for tenants. Find your perfect rental, understand your rights, and get support throughout your tenancy.",
};

export default function TenantsPage() {
  return (
    <>
      <PageHero
        title="Tenant Services"
        subtitle="We're committed to making your rental experience as smooth and enjoyable as possible."
        backgroundImage="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920"
      />

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Services"
            title="How We Support Our Tenants"
            description="From property search to move-out, we're with you every step of the way."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tenantServices.map((service, index) => (
              <div
                key={index}
                className={`p-8 rounded-xl bg-gray-50 hover:bg-red-50 transition-all duration-300 hover:shadow-lg opacity-0 animate-fade-in`}
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

      {/* Renting Process */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Getting Started"
            title="Your Journey to a New Home"
            description="A simple step-by-step guide to renting with Preview Estates."
          />
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-red-200 transform -translate-x-1/2" />
            
            <div className="space-y-12">
              {[
                {
                  step: 1,
                  title: "Search & Browse",
                  description: "Explore our available properties online or tell us your requirements and we'll match you with suitable homes.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  ),
                },
                {
                  step: 2,
                  title: "Arrange Viewings",
                  description: "Book viewings at times that work for you. We offer flexible slots including evenings and weekends.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ),
                },
                {
                  step: 3,
                  title: "Apply & Reference",
                  description: "Submit your application with required documents. We'll process references and keep you informed.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                },
                {
                  step: 4,
                  title: "Sign & Pay",
                  description: "Review and sign your tenancy agreement, pay your deposit and first month's rent securely.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  ),
                },
                {
                  step: 5,
                  title: "Move In",
                  description: "Collect your keys and start enjoying your new home! We're here if you need anything.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center gap-8 opacity-0 animate-fade-in ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className={`bg-white p-8 rounded-xl shadow-lg ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg">
                    {item.icon}
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="FAQs"
            title="Frequently Asked Questions"
            description="Find answers to common questions about renting with Preview Estates."
          />
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className={`group bg-gray-50 rounded-xl overflow-hidden opacity-0 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 group-open:rotate-45 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Tenant Portal CTA */}
      <section className="section-padding bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <span className="inline-block px-4 py-1 bg-red-600/20 text-red-400 rounded-full text-sm font-semibold mb-4">
                Tenant Portal
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Manage Your Tenancy Online
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Our online tenant portal makes managing your tenancy easy. Pay rent, report
                maintenance issues, access important documents, and communicate with our
                team - all from one convenient place.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Pay rent securely online",
                  "Report and track maintenance requests",
                  "Access tenancy documents 24/7",
                  "Communicate directly with our team",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary">
                Access Portal
              </Link>
            </div>
            <div className="animate-fade-in-right">
              <div className="bg-gray-800 rounded-2xl p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-600/20 flex items-center justify-center">
                  <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Already a tenant?</h3>
                <p className="text-gray-400 mb-6">Log in to your account to manage your tenancy.</p>
                <button className="btn-outline !text-white !border-white hover:!bg-white hover:!text-gray-900 w-full">
                  Tenant Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Looking for Your Next Home?"
        description="Browse our available properties or get in touch and let us help you find the perfect place."
        primaryBtnText="View Properties"
        primaryBtnHref="/lettings"
      />
    </>
  );
}
