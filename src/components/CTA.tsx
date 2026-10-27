import { ArrowRight } from 'lucide-react';
import { spotlightImage } from '@/data/content';
import { useReveal } from '@/hooks/useAnimations';

export function CTA() {
  const { ref, isVisible } = useReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative h-[70vh] min-h-[500px] w-full overflow-hidden bg-charcoal-950">
      {/* Background */}
      <div className={`reveal-scale ${isVisible ? 'is-visible' : ''} absolute inset-0`}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${spotlightImage})` }}
        />
        <div className="absolute inset-0 bg-charcoal-950/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-charcoal-950/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className={`reveal ${isVisible ? 'is-visible' : ''} container-lux text-center`}>
          <div>
            <span className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-gold-500">
              The Next Move
            </span>
          </div>

          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-medium leading-tight text-ivory-50 sm:text-5xl lg:text-6xl">
            Your Next Chapter{' '}
            <span className="font-light text-gold-400">Starts Here.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl font-sans text-[15px] leading-[1.75] tracking-[0.01em] text-ivory-200/55 sm:text-base">
            Let us help you find a property that feels like more than a place to live.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={() => document.querySelector('#properties')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              <span>Explore Properties</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline"
            >
              <span>Get in Touch</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
