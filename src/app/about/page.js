import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import StatsSection from "@/components/StatsSection";
import TestimonialCard from "@/components/TestimonialCard";

const team = [
  {
    name: "James Wilson",
    role: "Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    description: "With over 20 years in the property industry, James leads our team with passion and expertise.",
  },
  {
    name: "Sarah Mitchell",
    role: "Sales Manager",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    description: "Sarah's dedication to client satisfaction has helped hundreds find their dream homes.",
  },
  {
    name: "David Chen",
    role: "Lettings Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    description: "David ensures our landlords and tenants receive exceptional service throughout.",
  },
  {
    name: "Emma Thompson",
    role: "Property Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    description: "Emma's attention to detail keeps our managed properties in perfect condition.",
  },
];

const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Trust & Integrity",
    description: "We build lasting relationships through honest, transparent dealings in every interaction.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Excellence",
    description: "We strive for excellence in everything we do, always going above and beyond expectations.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Client Focus",
    description: "Your goals are our priority. We listen, understand, and deliver personalized solutions.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Local Expertise",
    description: "Deep knowledge of East London's property market gives our clients a competitive edge.",
  },
];

const milestones = [
  { year: "2009", title: "Founded", description: "Preview Estates was established in Leytonstone" },
  { year: "2012", title: "Expansion", description: "Opened our property management division" },
  { year: "2015", title: "500+ Sales", description: "Celebrated our 500th property sale" },
  { year: "2018", title: "Award Winner", description: "Recognized as Best Local Estate Agent" },
  { year: "2021", title: "Digital Innovation", description: "Launched our online portal for clients" },
  { year: "2024", title: "Growing Strong", description: "Managing 200+ properties across East London" },
];

const testimonials = [
  {
    name: "Robert & Jane Smith",
    role: "First-time Buyers",
    content: "Preview Estates made our first home purchase stress-free. They explained everything clearly and were always available to answer our questions.",
    rating: 5,
  },
  {
    name: "Amanda Foster",
    role: "Landlord",
    content: "I've been with Preview Estates for 5 years now. Their property management service is exceptional - professional, reliable, and always looking out for my interests.",
    rating: 5,
  },
  {
    name: "Mark Thompson",
    role: "Tenant",
    content: "Finding a rental property was easy with Preview Estates. They understood what I was looking for and found me the perfect flat within my budget.",
    rating: 5,
  },
];

export const metadata = {
  title: "About Us | Preview Estates",
  description: "Learn about Preview Estates - your trusted partner for property lettings, management, and sales in East London since 2009.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Preview Estates"
        subtitle="Your trusted partner in East London real estate since 2009."
        backgroundImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920"
      />

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Building Dreams, One Property at a Time
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2009, Preview Estates began with a simple mission: to provide
                exceptional property services with a personal touch. What started as a small
                family business has grown into one of East London's most trusted estate agencies.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Based in the heart of Leytonstone, we've helped thousands of families find
                their perfect homes, assisted landlords in maximizing their investments, and
                built lasting relationships with our community.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we continue to combine our local expertise with innovative technology
                to deliver outstanding results for our clients. Our commitment to integrity,
                professionalism, and client satisfaction remains at the core of everything we do.
              </p>
            </div>
            <div className="relative animate-fade-in-right">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
                alt="Preview Estates Office"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-xl shadow-xl">
                <p className="text-4xl font-bold">15+</p>
                <p className="text-red-100">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Our Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Values"
            title="What We Stand For"
            description="Our core values guide every decision we make and every service we provide."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 text-center opacity-0 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Journey"
            title="Milestones That Define Us"
            description="A timeline of growth, achievements, and commitment to excellence."
          />
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-red-200 transform md:-translate-x-1/2" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center gap-8 opacity-0 animate-fade-in ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"} pl-12 md:pl-0`}>
                    <div className="inline-block">
                      <span className="text-red-600 font-bold text-lg">{milestone.year}</span>
                      <h3 className="text-xl font-semibold text-gray-900 mt-1">{milestone.title}</h3>
                      <p className="text-gray-600 mt-2">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-red-600 transform md:-translate-x-1/2 z-10" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Team"
            title="Meet the Experts"
            description="Our dedicated team of professionals is committed to providing you with exceptional service."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group opacity-0 animate-fade-in`}
                style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-red-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it - hear from some of our satisfied clients."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
                Visit Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Office
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Located on the bustling High Road in Leytonstone, our office is easily
                accessible and open six days a week. Pop in for a chat or book an
                appointment to discuss your property needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">855 High Road Leytonstone, London E11 1HH</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <a href="tel:02085564171" className="text-gray-600 hover:text-red-600 transition-colors">
                      020 8556 4171
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Opening Hours</h4>
                    <p className="text-gray-600">Mon - Fri: 9am - 6pm</p>
                    <p className="text-gray-600">Sat: 10am - 4pm</p>
                    <p className="text-gray-600">Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-right">
              <div className="rounded-2xl overflow-hidden shadow-xl h-96 bg-gray-300">
                {/* Map Placeholder - In production, you'd integrate Google Maps */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.4876754095393!2d0.012226776882772!3d51.56785110693799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a64f7c0c3b3d%3A0x9b7c8e8f8f8f8f8f!2s855%20High%20Rd%20Leytonstone%2C%20London%20E11%201HH!5e0!3m2!1sen!2suk!4v1600000000000!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work With Us?"
        description="Whether you're looking to buy, sell, rent, or let, our team is here to help you every step of the way."
        primaryBtnText="Get in Touch"
        primaryBtnHref="/contact"
      />
    </>
  );
}
