import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { heroImage } from '@/data/content';

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const scrollToProperties = () =>
    document.querySelector('#properties')?.scrollIntoView({ behavior: 'smooth' });

  const scrollToAbout = () =>
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });

  const parallax = Math.min(scrollY * 0.3, 200);

  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full overflow-hidden bg-charcoal-950">
      {/* Background — parallax via transform only (no scale jank) */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translateY(${parallax}px)` }}
      >
        <div
          className="absolute inset-[-10%] bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            transform: mounted ? 'scale(1)' : 'scale(1.1)',
            transition: 'transform 3.5s cubic-bezier(0.16,1,0.3,1)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/70 via-transparent to-charcoal-950/90" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(13,13,13,0.92) 0%, rgba(13,13,13,0.80) 25%, rgba(13,13,13,0.50) 50%, rgba(13,13,13,0.15) 72%, rgba(13,13,13,0) 90%)',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <div className="container-lux">
          <div className="flex flex-col items-center">
            {/* Eyebrow */}
            <div
              className="flex items-center gap-4"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.9s ease 0.3s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.3s',
              }}
            >
              <span className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-ivory-200/65">
                Monument Real Estate
              </span>
            </div>

            {/* Heading — line-by-line */}
            <h1 className="mt-7 text-center font-display font-semibold leading-[1.3] text-ivory-50">
              {[
                { text: 'Exceptional Properties.', delay: '0.55s' },
                { text: 'Elevated Living.', delay: '0.75s', italic: true },
              ].map(({ text, delay, italic }) => (
                <span key={text} className="block overflow-hidden pb-[0.28em]">
                  <span
                    className={`block text-center text-[34px] sm:text-[42px] lg:text-[50px] xl:text-[56px] ${italic ? 'font-light text-gold-400' : ''}`}
                    style={{
                      opacity: mounted ? 1 : 0,
                      transform: mounted ? 'translateY(0)' : 'translateY(110%)',
                      transition: `opacity 1s ease ${delay}, transform 1s cubic-bezier(0.16,1,0.3,1) ${delay}`,
                    }}
                  >
                    {text}
                  </span>
                </span>
              ))}
            </h1>

            {/* Buttons */}
            <div
              className="mt-10 flex flex-wrap justify-center gap-4"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(18px)',
                transition: 'opacity 0.9s ease 1.2s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 1.2s',
              }}
            >
              <button onClick={scrollToProperties} className="btn-primary">
                <span>Explore Properties</span>
                <ArrowRight className="relative z-10 h-4 w-4" />
              </button>
              <button onClick={scrollToAbout} className="btn-outline">
                <span>Discover Our Story</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right-side minimal scroll indicator */}
      <button
        onClick={scrollToProperties}
        aria-label="Scroll to featured properties"
        className="group absolute right-5 top-1/2 z-10 flex -translate-y-1/2 flex-col items-center gap-3 transition-opacity duration-500 hover:opacity-100 sm:right-10"
        style={{
          opacity: mounted ? 1 : 0,
          transition: 'opacity 1s ease 1.6s',
        }}
      >
        {/* Thin vertical line */}
        <span
          className="block w-px bg-ivory-200/20"
          style={{ height: '60px' }}
        />
        {/* Animated chevron arrow */}
        <span
          className="animate-float-down transition-transform duration-500 group-hover:translate-y-2"
          style={{ animationDuration: '2.4s' }}
        >
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="8" y1="0" x2="8" y2="18" stroke="rgba(245,242,236,0.45)" strokeWidth="1" />
            <polyline
              points="3,13 8,20 13,13"
              stroke="rgba(245,242,236,0.45)"
              strokeWidth="1"
              fill="none"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 z-[5] h-32 w-full bg-gradient-to-t from-charcoal-900 to-transparent" />
    </section>
  );
}
