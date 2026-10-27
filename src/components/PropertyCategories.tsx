import { ArrowRight } from 'lucide-react';
import { categories } from '@/data/content';
import { useReveal } from '@/hooks/useAnimations';

export function PropertyCategories() {
  const headerReveal = useReveal<HTMLDivElement>();

  return (
    <section className="relative bg-charcoal-900 py-24 lg:py-32">
      <div className="container-lux">
        {/* Header */}
        <div
          ref={headerReveal.ref}
          className={`reveal ${headerReveal.isVisible ? 'is-visible' : ''} mb-16 text-center`}
        >
          <div>
            <span className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-gold-500">
              Explore by Lifestyle
            </span>
          </div>
          <h2 className="mt-5 font-display text-3xl font-medium text-ivory-50 sm:text-4xl lg:text-5xl xl:text-[3.25rem]">
            Find Your Next{' '}
            <span className="font-light text-gold-400">Chapter</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg font-sans text-[15px] leading-[1.75] tracking-[0.01em] text-ivory-200/55">
            Explore property types tailored to different lifestyles and investment goals.
          </p>
        </div>

        {/* Category tiles */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, i) => (
            <CategoryTile key={category.title} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface CategoryTileProps {
  category: (typeof categories)[0];
  index: number;
}

function CategoryTile({ category, index }: CategoryTileProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} group relative aspect-[3/4] cursor-pointer overflow-hidden`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onClick={() => document.querySelector('#properties')?.scrollIntoView({ behavior: 'smooth' })}
    >
      {/* Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-luxury group-hover:scale-110"
        style={{ backgroundImage: `url(${category.image})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-charcoal-950/10 transition-all duration-500 group-hover:from-charcoal-950/95 group-hover:via-charcoal-950/50" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p className="font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-gold-500 opacity-0 transition-all duration-500 ease-luxury group-hover:opacity-100">
          {category.count}
        </p>
        <h3 className="mt-2 font-display text-xl font-medium text-ivory-50 transition-transform duration-500 ease-luxury group-hover:-translate-y-1">
          {category.title}
        </h3>
        <p className="mt-2 max-h-0 overflow-hidden font-sans text-sm leading-relaxed text-ivory-200/60 opacity-0 transition-all duration-500 ease-luxury group-hover:max-h-20 group-hover:opacity-100">
          {category.description}
        </p>
        <div className="mt-4 flex items-center gap-2 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-ivory-200/70 opacity-0 transition-all duration-500 ease-luxury group-hover:opacity-100">
          <span>Explore</span>
          <ArrowRight className="h-3 w-3 transition-transform duration-500 group-hover:translate-x-1" />
        </div>
      </div>

      {/* Top border accent */}
      <div className="absolute top-0 left-0 h-px w-0 bg-gold-500 transition-all duration-700 ease-luxury group-hover:w-full" />
    </div>
  );
}
