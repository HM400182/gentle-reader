import heroBg from "@/assets/hero-bg.jpg";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <section className="relative pt-32 pb-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="text-gray-200 text-lg max-w-2xl mx-auto text-shadow">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
