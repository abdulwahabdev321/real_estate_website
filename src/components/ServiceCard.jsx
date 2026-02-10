import Link from "next/link";

export default function ServiceCard({ service, index = 0 }) {
  const { icon, title, description, href, features } = service;

  return (
    <div
      className={`card p-4 sm:p-6 lg:p-8 hover-lift group opacity-0 animate-fade-in w-full`}
      style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
    >
      {/* Icon */}
      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-red-100 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-red-600 transition-colors duration-300">
        <div className="text-red-600 group-hover:text-white transition-colors duration-300 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 break-words">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base break-words">{description}</p>

      {/* Features */}
      {features && features.length > 0 && (
        <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-gray-600 text-xs sm:text-sm">
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 text-red-600 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="break-words">{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Link */}
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-red-600 font-semibold hover:gap-3 transition-all text-sm sm:text-base"
      >
        Learn More
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Link>
    </div>
  );
}
