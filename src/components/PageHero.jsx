export default function PageHero({
  title,
  subtitle,
  backgroundImage = null,
}) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background */}
      {backgroundImage ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </>
      ) : (
        <div className="absolute inset-0 gradient-dark" />
      )}

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 border border-red-500/20 rounded-full animate-pulse" />
      <div className="absolute bottom-10 left-10 w-24 h-24 border border-red-500/30 rounded-full animate-pulse delay-500" />
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-ping" />
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-red-500 rounded-full animate-ping delay-300" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in delay-100">
            {subtitle}
          </p>
        )}

        {/* Breadcrumb Decoration */}
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-400 animate-fade-in delay-200">
          <a href="/" className="hover:text-red-500 transition-colors">
            Home
          </a>
          <span className="text-red-500">/</span>
          <span className="text-white">{title}</span>
        </div>
      </div>
    </section>
  );
}
