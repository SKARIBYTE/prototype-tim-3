import { ReactNode } from "react";

interface HeroProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

export default function Hero({ title, description, icon }: HeroProps) {
  return (
    <section className="bg-white pt-32 pb-16 text-center border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {icon && (
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-primary/10 text-primary">
              {icon}
            </div>
          </div>
        )}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-primary">
          {title}
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
