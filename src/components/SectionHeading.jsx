export default function SectionHeading({
  subtitle,
  title,
  description,
  align = "center",
  light = false,
}) {
  const alignmentClasses = {
    center: "text-center mx-auto",
    left: "text-left",
    right: "text-right ml-auto",
  };

  return (
    <div className={`max-w-2xl ${alignmentClasses[align]} mb-12`}>
      {subtitle && (
        <span
          className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 ${
            light
              ? "bg-white/20 text-white"
              : "bg-red-100 text-red-600"
          }`}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg ${
            light ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
