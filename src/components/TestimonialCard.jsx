import Image from "next/image";

export default function TestimonialCard({ testimonial, index = 0 }) {
  const { name, role, content, rating, avatar } = testimonial;

  return (
    <div
      className={`testimonial-card opacity-0 animate-fade-in`}
      style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
    >
      {/* Rating Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-600 leading-relaxed mb-6 relative z-10">
        {content}
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
          {avatar ? (
            <Image
              src={avatar}
              alt={name}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-red-100 flex items-center justify-center">
              <span className="text-red-600 font-semibold text-lg">
                {name.charAt(0)}
              </span>
            </div>
          )}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
}
