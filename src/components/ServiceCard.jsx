import Link from "next/link";

export default function ServiceCard({ service, index = 0 }) {
  const { icon, title, description, href, features } = service;

  return (
    <div
      className={`card p-8 hover-lift group opacity-0 animate-fade-in`}
      style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
    >
      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-300">
        <div className="text-red-600 group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

      {/* Features */}
      {features && features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
              <svg
                className="w-4 h-4 text-red-600 flex-shrink-0"
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
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* Link */}
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-red-600 font-semibold hover:gap-3 transition-all"
      >
        Learn More
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
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Link>
    </div>
  );
}
