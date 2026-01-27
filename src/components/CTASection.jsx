import Link from "next/link";

export default function CTASection({
  title = "Ready to Find Your Perfect Property?",
  description = "Whether you're looking to buy, sell, or rent, our expert team is here to help you every step of the way.",
  primaryBtnText = "Get Started",
  primaryBtnHref = "/contact",
  secondaryBtnText = "Call Us",
  secondaryBtnHref = "tel:02085564171",
}) {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-red" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in">
          {title}
        </h2>
        <p className="text-lg text-red-100 max-w-2xl mx-auto mb-10 animate-fade-in delay-100">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delay-200">
          <Link
            href={primaryBtnHref}
            className="px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            {primaryBtnText}
          </Link>
          <a
            href={secondaryBtnHref}
            className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-red-600 transition-colors flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            {secondaryBtnText}
          </a>
        </div>
      </div>
    </section>
  );
}
