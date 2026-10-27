import { useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/content';
import { useReveal } from '@/hooks/useAnimations';

export function Testimonials() {
  const [active, setActive] = useState(0);
  const headerReveal = useReveal<HTMLDivElement>();
  const sliderReveal = useReveal<HTMLDivElement>({ threshold: 0.1 });

  const total = testimonials.length;

  const go = useCallback((dir: 'next' | 'prev') => {
    setActive((prev) => {
      if (dir === 'next') return (prev + 1) % total;
      return (prev - 1 + total) % total;
    });
  }, [total]);

  useEffect(() => {
    const id = setInterval(() => go('next'), 6000);
    return () => clearInterval(id);
  }, [go]);

  const getIndex = (offset: number) => (active + offset + total) % total;

  return (
    <section className="relative overflow-hidden bg-charcoal-900 py-24 lg:py-32">
      <div className="container-lux">
        {/* Header */}
        <div
          ref={headerReveal.ref}
          className={`reveal ${headerReveal.isVisible ? 'is-visible' : ''} mb-16 text-center`}
        >
          <div>
            <span className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-gold-500">
              Client Perspective
            </span>
          </div>
          <h2 className="mt-5 font-display text-3xl font-medium text-ivory-50 sm:text-4xl lg:text-5xl xl:text-[3.25rem]">
            Trusted by Those Who{' '}
            <span className="font-light text-gold-400">Expect More</span>
          </h2>
        </div>

        {/* Carousel */}
        <div
          ref={sliderReveal.ref}
          className={`reveal ${sliderReveal.isVisible ? 'is-visible' : ''} relative`}
        >
          <div className="relative flex items-center justify-center gap-4 overflow-hidden px-2 py-8 sm:gap-6 lg:gap-8">
            {/* Previous card */}
            <div className="hidden shrink-0 sm:block sm:w-[260px] lg:w-[300px] xl:w-[320px]">
              <TestimonialCard
                testimonial={testimonials[getIndex(-1)]}
                scale={0.88}
                opacity={0.3}
                blur
              />
            </div>

            {/* Center card */}
            <div className="w-full max-w-[440px] shrink-0 sm:max-w-[380px] lg:max-w-[440px] xl:max-w-[480px]">
              <TestimonialCard
                testimonial={testimonials[active]}
                scale={1}
                opacity={1}
                active
              />
            </div>

            {/* Next card */}
            <div className="hidden shrink-0 sm:block sm:w-[260px] lg:w-[300px] xl:w-[320px]">
              <TestimonialCard
                testimonial={testimonials[getIndex(1)]}
                scale={0.88}
                opacity={0.3}
                blur
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={() => go('prev')}
              className="flex h-10 w-10 items-center justify-center border border-ivory-200/15 text-ivory-200/60 transition-all duration-300 ease-luxury hover:border-gold-500 hover:bg-gold-500 hover:text-charcoal-900"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className="transition-all duration-400 ease-luxury"
                  style={{
                    height: '2px',
                    width: i === active ? '28px' : '14px',
                    background: i === active ? '#B59A6A' : 'rgba(245,242,236,0.2)',
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => go('next')}
              className="flex h-10 w-10 items-center justify-center border border-ivory-200/15 text-ivory-200/60 transition-all duration-300 ease-luxury hover:border-gold-500 hover:bg-gold-500 hover:text-charcoal-900"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  testimonial: (typeof testimonials)[0];
  scale: number;
  opacity: number;
  active?: boolean;
  blur?: boolean;
}

function TestimonialCard({ testimonial, scale, opacity, active = false, blur = false }: TestimonialCardProps) {
  return (
    <div
      className="relative flex flex-col rounded-2xl p-8 transition-all duration-700 ease-luxury"
      style={{
        transform: `scale(${scale})`,
        opacity,
        filter: blur ? 'blur(1.5px)' : 'none',
        background: active
          ? 'linear-gradient(145deg, rgba(13,13,13,0.95), rgba(23,23,23,0.85))'
          : 'rgba(245,242,236,0.04)',
        border: active ? '1px solid rgba(181,154,106,0.25)' : '1px solid rgba(245,242,236,0.06)',
        boxShadow: active
          ? '0 24px 64px rgba(0,0,0,0.6), 0 0 40px rgba(181,154,106,0.08)'
          : 'none',
      }}
    >
      {/* Proper curly quote mark */}
      <Quote
        className="mb-4 h-8 w-8"
        style={{
          color: active ? 'rgba(181,154,106,0.5)' : 'rgba(181,154,106,0.2)',
          fill: active ? 'rgba(181,154,106,0.15)' : 'transparent',
        }}
      />

      {/* Stars */}
      <div className="mb-4 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="h-3.5 w-3.5 fill-gold-500 text-gold-500"
            style={{ opacity: active ? 1 : 0.6 }}
          />
        ))}
      </div>

      {/* Quote */}
      <p
        className="font-sans text-[15px] leading-[1.8] tracking-[0.01em]"
        style={{ color: active ? 'rgba(245,242,236,0.85)' : 'rgba(245,242,236,0.5)' }}
      >
        {testimonial.quote}
      </p>

      {/* Author */}
      <div className="mt-7 flex items-center gap-4">
        <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border border-gold-500/25">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <p
            className="font-display text-lg font-medium"
            style={{ color: active ? '#F5F2EC' : 'rgba(245,242,236,0.7)' }}
          >
            {testimonial.name}
          </p>
          <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-gold-500">
            {testimonial.role}
          </p>
        </div>
      </div>

      {/* Active bottom accent — centered bold gold */}
      {active && (
        <div className="absolute bottom-0 left-1/2 h-1 w-24 -translate-x-1/2 rounded-b-2xl bg-gold-500" />
      )}
    </div>
  );
}
