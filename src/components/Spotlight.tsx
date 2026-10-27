import { useEffect, useState } from 'react';
import { ArrowRight, MapPin, Plus } from 'lucide-react';
import { spotlightImage } from '@/data/content';
import { useReveal } from '@/hooks/useAnimations';

const hotspots = [
  {
    top: '28%',
    left: '58%',
    label: 'Infinity Pool',
    detail: 'Heated, 40ft lap pool',
    price: '$4,850,000',
    image: 'https://images.pexels.com/photos/28054849/pexels-photo-28054849.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    top: '48%',
    left: '68%',
    label: 'Floor-to-ceiling Glass',
    detail: 'Panoramic city views',
    price: '6,200 sq ft',
    image: 'https://images.pexels.com/photos/28145542/pexels-photo-28145542.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    top: '65%',
    left: '48%',
    label: 'Terrace Garden',
    detail: '2,400 sqft outdoor living',
    price: '$5,200,000',
    image: 'https://images.pexels.com/photos/16934110/pexels-photo-16934110.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export function Spotlight() {
  const { ref, isVisible } = useReveal<HTMLDivElement>({ threshold: 0.1 });
  const [scrollY, setScrollY] = useState(0);
  const [activeSpot, setActiveSpot] = useState<number | null>(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const el = ref.current;
          if (!el) { ticking = false; return; }
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            setScrollY(window.innerHeight - rect.top);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [ref]);

  return (
    <section ref={ref} className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-charcoal-900">
      {/* Parallax background */}
      <div className="absolute inset-0 will-change-transform">
        <div
          className={`reveal-scale ${isVisible ? 'is-visible' : ''} absolute inset-0 bg-cover bg-center`}
          style={{ backgroundImage: `url(${spotlightImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/60 to-charcoal-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 to-transparent" />
      </div>

      {/* Interactive hotspots — click to open, hover preview */}
      <div className="absolute inset-0 z-20 hidden lg:block">
        {/* Click-out backdrop */}
        {activeSpot !== null && (
          <button
            type="button"
            aria-label="Close detail"
            className="absolute inset-0 z-10 cursor-default"
            onClick={() => setActiveSpot(null)}
          />
        )}
        {hotspots.map((spot, i) => (
          <div
            key={spot.label}
            className="group absolute z-20"
            style={{ top: spot.top, left: spot.left }}
          >
            {/* Pulsing dot — click to toggle, hover to preview */}
            <button
              type="button"
              className="relative flex h-5 w-5 cursor-pointer items-center justify-center"
              aria-label={spot.label}
              onClick={() => setActiveSpot(activeSpot === i ? null : i)}
            >
              <span className="absolute h-5 w-5 rounded-full border border-gold-500/40 transition-all duration-700 ease-luxury group-hover:scale-[1.8] group-hover:border-gold-500/70" />
              <span className="absolute h-5 w-5 rounded-full bg-gold-500/20 transition-all duration-700 ease-luxury group-hover:scale-[2.2] group-hover:bg-gold-500/10" />
              <span className={`h-2.5 w-2.5 rounded-full bg-gold-500 transition-all duration-300 group-hover:scale-125 ${activeSpot === i ? 'scale-150 ring-2 ring-gold-500/30' : ''}`} />
            </button>

            {/* Image + listing card — visible on hover (CSS) or when active (state) */}
            <div
              className={`pointer-events-none absolute left-1/2 z-30 w-60 -translate-x-1/2 overflow-hidden rounded-xl border border-gold-500/25 bg-charcoal-950 text-left opacity-0 transition-all duration-500 ease-luxury ${
                i === hotspots.length - 1 ? 'bottom-8 top-auto' : 'top-8'
              } ${
                activeSpot === i
                  ? 'pointer-events-auto translate-x-[-50%] translate-y-0 opacity-100'
                  : 'group-hover:pointer-events-auto group-hover:translate-x-[-50%] group-hover:translate-y-0 group-hover:opacity-100'
              }`}
              style={
                activeSpot === i
                  ? {}
                  : { transform: `translate(-50%, ${i === hotspots.length - 1 ? '-10px' : '10px'})` }
              }
            >
              {/* Image */}
              <div className="relative h-36 w-full overflow-hidden">
                <img
                  src={spot.image}
                  alt={spot.label}
                  className="h-full w-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 to-transparent" />
              </div>
              {/* Text + price */}
              <div className="p-4">
                <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-500">
                  {spot.label}
                </p>
                <p className="mt-1.5 font-sans text-xs leading-relaxed text-ivory-200/60">
                  {spot.detail}
                </p>
                <div className="mt-3 flex items-center justify-between border-t border-ivory-200/10 pt-3">
                  <span className="font-sans text-[9px] uppercase tracking-[0.22em] text-ivory-200/40">
                    Listing Price
                  </span>
                  <span className="font-display text-sm font-semibold text-gold-400">
                    {spot.price}
                  </span>
                </div>
              </div>
              {/* Arrow pointer */}
              <span
                className={`absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 border-gold-500/25 bg-charcoal-950 ${
                  i === hotspots.length - 1 ? '-bottom-1 border-b border-r' : '-top-1 border-l border-t'
                }`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container-lux">
          <div className={`reveal ${isVisible ? 'is-visible' : ''} max-w-xl`}>
            <div>
              <span className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-gold-500">
                Signature Listing
              </span>
            </div>

            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-ivory-50 sm:text-5xl lg:text-6xl">
              The Glass House
            </h2>

            <div className="mt-4 flex items-center gap-2 text-ivory-200/60">
              <MapPin className="h-4 w-4 text-gold-500" />
              <span className="font-sans text-sm uppercase tracking-[0.22em]">
                Beverly Hills, California
              </span>
            </div>

            <p className="mt-6 max-w-md font-sans text-[16px] leading-[1.75] tracking-[0.01em] text-ivory-200/65 sm:text-lg">
              An architectural statement designed around light, space, and modern living.
            </p>

            <div className="mt-8 flex items-center gap-8">
              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-ivory-200/40">Price</p>
                <p className="mt-1 font-display text-3xl font-semibold text-gold-500">$4,850,000</p>
              </div>
              <div className="h-12 w-px bg-ivory-200/15" />
              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-ivory-200/40">Type</p>
                <p className="mt-1 font-sans text-sm uppercase tracking-[0.22em] text-ivory-100">
                  Luxury Residence
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2 text-ivory-200/40">
              <Plus className="h-3.5 w-3.5 text-gold-500" />
              <span className="font-sans text-[11px] uppercase tracking-[0.22em]">
                Click the markers to explore features
              </span>
            </div>

            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-6 btn-primary"
            >
              <span>Explore Property</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 z-[5] h-24 w-full bg-gradient-to-t from-charcoal-950 to-transparent" />
    </section>
  );
}
