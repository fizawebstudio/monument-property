import { ArrowUpRight, BedDouble, Bath, Maximize } from 'lucide-react';
import { properties } from '@/data/content';
import { navigateTo } from '@/utils/navigation';
import { useReveal } from '@/hooks/useAnimations';

export function FeaturedProperties() {
  const headerReveal = useReveal<HTMLDivElement>();

  return (
    <section id="properties" className="relative bg-charcoal-900 py-24">
      <div className="container-lux">
        {/* Header */}
        <div
          ref={headerReveal.ref}
          className={`reveal ${headerReveal.isVisible ? 'is-visible' : ''} mb-16`}
        >
          <div>
            <span className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-gold-500">
              Curated Collection
            </span>
          </div>
          <h2 className="mt-5 font-display text-3xl font-medium leading-tight text-ivory-50 sm:text-4xl lg:text-5xl xl:text-[3.25rem]">
            Spaces Worth Coming Home To
          </h2>
          <p className="mt-5 max-w-lg font-sans text-[15px] leading-[1.75] tracking-[0.01em] text-ivory-200/55">
            Explore a curated collection of exceptional residences, designed for modern living
            and timeless appeal.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {properties.map((property, i) => (
            <PropertyCard key={property.id} property={property} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface PropertyCardProps {
  property: (typeof properties)[0];
  index: number;
}

function PropertyCard({ property, index }: PropertyCardProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <article
      ref={ref}
      role="link"
      tabIndex={0}
      aria-label={`View ${property.name}`}
      onClick={() => navigateTo(`/property/${property.id}`)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          navigateTo(`/property/${property.id}`);
        }
      }}
      className={`reveal ${isVisible ? 'is-visible' : ''} group relative flex cursor-pointer flex-col overflow-hidden bg-charcoal-800`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.3s] ease-luxury group-hover:scale-110"
          style={{ backgroundImage: `url(${property.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/15 to-transparent transition-opacity duration-500 group-hover:from-charcoal-950/90" />

        {/* Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block bg-charcoal-950/55 px-3 py-1.5 font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-ivory-100 backdrop-blur-md">
            {property.type}
          </span>
        </div>

        {/* Arrow hover */}
        <div className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center opacity-0 transition-all duration-500 ease-luxury group-hover:bg-gold-500 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4 text-charcoal-900" />
        </div>

        {/* Bottom text on image */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
          <h3 className="font-display text-xl font-medium text-ivory-50">{property.name}</h3>
          <p className="mt-1 font-sans text-[11px] uppercase tracking-[0.22em] text-ivory-200/60">
            {property.location}
          </p>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-4 p-5">
        <div className="flex items-center justify-between border-b border-ivory-200/10 pb-4 font-sans text-xs text-ivory-200/45">
          <span className="flex items-center gap-1.5">
            <BedDouble className="h-3.5 w-3.5" /> {property.beds} Beds
          </span>
          <span className="flex items-center gap-1.5">
            <Bath className="h-3.5 w-3.5" /> {property.baths} Baths
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize className="h-3.5 w-3.5" /> {property.sqft} sqft
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="font-display text-2xl font-medium text-gold-500">
            {property.price}
          </span>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              navigateTo(`/property/${property.id}`);
            }}
            className="link-underline font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-ivory-200/65 hover:text-gold-500"
          >
            View
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-0 bg-gold-500 transition-all duration-700 ease-luxury group-hover:w-full" />
    </article>
  );
}
