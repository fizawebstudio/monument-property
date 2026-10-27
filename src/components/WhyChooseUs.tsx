import { Compass, Map, Gem, Building2 } from 'lucide-react';
import { benefits } from '@/data/content';
import { useReveal } from '@/hooks/useAnimations';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  compass: Compass,
  map: Map,
  gem: Gem,
  building: Building2,
};

export function WhyChooseUs() {
  const headerReveal = useReveal<HTMLDivElement>();
  const gridReveal = useReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="services" className="relative overflow-hidden bg-charcoal-950 py-24 lg:py-32">
      <div className="container-lux">
        {/* Header */}
        <div
          ref={headerReveal.ref}
          className={`reveal ${headerReveal.isVisible ? 'is-visible' : ''} mb-16 text-center`}
        >
          <div>
            <span className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-gold-500">
              The Monument Standard
            </span>
          </div>
          <h2 className="mt-5 font-display text-3xl font-medium leading-tight text-ivory-50 sm:text-4xl lg:text-5xl xl:text-[3.25rem]">
            Built on Trust.{' '}
            <span className="font-light text-gold-400">Defined by Excellence.</span>
          </h2>
        </div>

        {/* Card grid */}
        <div
          ref={gridReveal.ref}
          className={`stagger ${gridReveal.isVisible ? 'is-visible' : ''} grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6`}
        >
          {benefits.map((benefit) => {
            const Icon = iconMap[benefit.icon] ?? Compass;

            return (
              <div
                key={benefit.number}
                className="group relative overflow-hidden border border-ivory-200/10 bg-charcoal-900/40 p-8 transition-all duration-500 ease-luxury hover:border-gold-500/30 hover:bg-charcoal-900/60 lg:p-10"
              >
                {/* Oversized number in background — right side */}
                <span
                  className="pointer-events-none absolute -right-2 -bottom-6 select-none font-display font-bold leading-none text-ivory-200/[0.04] transition-all duration-700 ease-luxury group-hover:text-gold-500/10"
                  style={{ fontSize: 'clamp(110px, 12vw, 160px)' }}
                >
                  {benefit.number}
                </span>

                {/* Content */}
                <div className="relative z-10 flex flex-col gap-5">
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center border border-ivory-200/15 transition-all duration-500 ease-luxury group-hover:border-gold-500 group-hover:bg-gold-500/10">
                    <Icon className="h-5 w-5 text-ivory-200/50 transition-colors duration-500 group-hover:text-gold-500" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl font-medium text-ivory-200/80 transition-colors duration-400 group-hover:text-ivory-50">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="max-w-xs font-sans text-[14px] leading-[1.75] tracking-[0.01em] text-ivory-200/45 transition-colors duration-500 group-hover:text-ivory-200/60">
                    {benefit.description}
                  </p>

                  {/* Gold accent line */}
                  <div className="h-0.5 w-10 origin-left bg-gold-500/50 transition-all duration-500 ease-luxury group-hover:w-16 group-hover:bg-gold-500" />
                </div>

                {/* Top border on hover */}
                <div className="absolute top-0 left-0 h-px w-0 bg-gold-500 transition-all duration-700 ease-luxury group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
