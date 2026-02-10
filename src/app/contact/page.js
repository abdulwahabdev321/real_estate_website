import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Visit Our Office",
    details: ["855 High Road Leytonstone", "London E11 1HH"],
    link: "https://maps.google.com/?q=855+High+Road+Leytonstone+London+E11+1HH",
    linkText: "Get Directions",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Call Us",
    details: ["020 3488 6585", "074 4749 5999"],
    link: "tel:02034886585",
    linkText: "Call Now",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Email Us",
    details: ["previewestates@gmail.com"],
    link: "mailto:previewestates@gmail.com",
    linkText: "Send Email",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: "Website",
    details: ["www.previewestates.co.uk"],
    link: "https://www.previewestates.co.uk",
    linkText: "Visit Website",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Opening Hours",
    details: ["Mon - Fri: 9am - 6pm", "Sat: 10am - 4pm", "Sun: Closed"],
    link: null,
    linkText: null,
  },
];

const faqs = [
  {
    question: "How do I book a property viewing?",
    answer: "You can book a viewing by calling us, sending an email, or filling out the contact form on this page. We'll get back to you within 24 hours to arrange a convenient time.",
  },
  {
    question: "What areas do you cover?",
    answer: "We primarily cover East London including Leytonstone, Wanstead, Leyton, Stratford, Forest Gate, Manor Park, and surrounding areas in the E11 postcode and beyond.",
  },
  {
    question: "Do you offer free property valuations?",
    answer: "Yes! We offer free, no-obligation property valuations for both sales and lettings. Contact us to book your valuation appointment.",
  },
  {
    question: "What documents do I need to rent a property?",
    answer: "You'll need proof of identity, proof of address, proof of income, and references. Our team will guide you through the specific requirements during the application process.",
  },
];

export const metadata = {
  title: "Contact Us | Preview Estates",
  description: "Get in touch with Preview Estates. Visit our office in Leytonstone, call us, or send us a message.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Get in touch with our friendly team today."
        backgroundImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920"
      />

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-xl p-6 text-center hover:bg-red-50 transition-colors duration-300 opacity-0 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-4">
                  {info.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                ))}
                {info.link && (
                  <a
                    href={info.link}
                    className="inline-block mt-3 text-red-600 font-medium text-sm hover:underline"
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {info.linkText} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-left">
              <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
                Get in Touch
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and one of our team members will get back to you
                within 24 hours.
              </p>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <ContactForm />
              </div>
            </div>

            {/* Map */}
            <div className="animate-fade-in-right">
              <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
                Find Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Location
              </h2>
              <p className="text-gray-600 mb-8">
                Visit our office in Leytonstone. We're located on the High Road,
                easily accessible by public transport.
              </p>
              <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-[500px]">
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

      {/* Why Contact Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="How Can We Help?"
            title="Our Services"
            description="Whatever your property needs, our expert team is here to assist you."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
                title: "Looking to Rent?",
                description: "Browse our available properties or tell us your requirements and we'll find your perfect home.",
                link: "/lettings",
                linkText: "View Rentals",
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Buying or Selling?",
                description: "Get expert advice and support whether you're buying your first home or selling your property.",
                link: "/sales",
                linkText: "View Sales",
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                title: "Landlord Services?",
                description: "From tenant finding to full property management, we help maximize your rental returns.",
                link: "/landlord",
                linkText: "Landlord Info",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`text-center p-8 rounded-xl bg-gray-50 hover:bg-red-50 transition-colors duration-300 opacity-0 animate-fade-in`}
                style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.description}</p>
                <a
                  href={item.link}
                  className="inline-flex items-center gap-2 text-red-600 font-semibold hover:gap-3 transition-all"
                >
                  {item.linkText}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="FAQs"
            title="Frequently Asked Questions"
            description="Quick answers to common questions. Can't find what you're looking for? Contact us!"
          />
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className={`group bg-white rounded-xl overflow-hidden shadow-sm opacity-0 animate-fade-in`}
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

      {/* CTA Banner */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in">
            Prefer to Speak Directly?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in delay-100">
            Our friendly team is available Monday to Saturday to answer your questions
            and help with your property needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delay-200">
            <a
              href="tel:02034886585"
              className="btn-primary flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call 020 3488 6585
            </a>
            <a
              href="mailto:previewestates@gmail.com"
              className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-gray-900 transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
