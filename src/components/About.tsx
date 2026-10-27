import { ArrowRight } from 'lucide-react';
import { stats } from '@/data/content';
import { useReveal, useCountUp } from '@/hooks/useAnimations';

const aboutImages = [
  'https://images.pexels.com/photos/7587877/pexels-photo-7587877.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/8134745/pexels-photo-8134745.jpeg?auto=compress&cs=tinysrgb&w=700',
  'https://images.pexels.com/photos/6283973/pexels-photo-6283973.jpeg?auto=compress&cs=tinysrgb&w=700',
];

export function About() {
  const imageReveal = useReveal<HTMLDivElement>({ threshold: 0.15 });
  const textReveal = useReveal<HTMLDivElement>({ threshold: 0.15 });
  const statsReveal = useReveal<HTMLDivElement>({ threshold: 0.25 });

  return (
    <section id="about" className="relative bg-charcoal-950 py-24 lg:py-32">
      <div className="container-lux">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20 xl:gap-28">

          {/* Left — 3-image editorial layout */}
          <div
            ref={imageReveal.ref}
            className={`reveal-left ${imageReveal.isVisible ? 'is-visible' : ''} relative lg:h-full`}
          >
            <div className="grid h-full grid-cols-2 gap-3">
              {/* Large image — top, full width */}
              <div className="col-span-2 overflow-hidden">
                <div
                  className="h-[280px] w-full bg-cover bg-center transition-transform duration-[1.8s] ease-luxury hover:scale-[1.03] sm:h-[340px] lg:h-[300px] xl:h-[360px]"
                  style={{ backgroundImage: `url(${aboutImages[0]})` }}
                />
              </div>
              {/* Two smaller images — bottom row */}
              <div className="overflow-hidden">
                <div
                  className="h-[170px] w-full bg-cover bg-center transition-transform duration-[1.8s] ease-luxury hover:scale-[1.04] sm:h-[190px] lg:h-[170px] xl:h-[200px]"
                  style={{ backgroundImage: `url(${aboutImages[1]})` }}
                />
              </div>
              <div className="overflow-hidden">
                <div
                  className="h-[170px] w-full bg-cover bg-center transition-transform duration-[1.8s] ease-luxury hover:scale-[1.04] sm:h-[190px] lg:h-[170px] xl:h-[200px]"
                  style={{ backgroundImage: `url(${aboutImages[2]})` }}
                />
              </div>
            </div>
          </div>

          {/* Right — content */}
          <div
            ref={textReveal.ref}
            className={`reveal-right ${textReveal.isVisible ? 'is-visible' : ''} flex flex-col justify-center`}
          >
            <div>
              <span className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-gold-500">
                Our Perspective
              </span>
            </div>

            <h2 className="mt-6 font-display text-3xl font-medium leading-[1.15] text-ivory-50 sm:text-4xl lg:text-[2.6rem] xl:text-5xl">
              More Than Property.{' '}
              <span className="font-light text-gold-400">A Sense of Place.</span>
            </h2>

            <div className="mt-7 space-y-4 font-sans text-[15px] leading-[1.75] tracking-[0.01em] text-ivory-200/55">
              <p>
                At Monument Property Group, we believe exceptional real estate is about more than
                square footage. It is about architecture, lifestyle, and the feeling of finding
                somewhere truly extraordinary.
              </p>
              <p>
                From distinctive residences to strategic investment opportunities, we connect our
                clients with properties that stand the test of time.
              </p>
            </div>

            <button
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary mt-9 w-fit"
            >
              <span>Learn More</span>
              <ArrowRight className="relative z-10 h-4 w-4" />
            </button>

            {/* Stats */}
            <div
              ref={statsReveal.ref}
              className={`stagger ${statsReveal.isVisible ? 'is-visible' : ''} mt-12 border-t border-ivory-200/10 pt-10`}
            >
              {/* Desktop: horizontal with dividers */}
              <div className="hidden sm:flex items-start gap-0 divide-x divide-ivory-200/10">
                {stats.map((stat) => (
                  <StatItem key={stat.label} stat={stat} active={statsReveal.isVisible} />
                ))}
              </div>

              {/* Mobile: 2+1 balanced grid */}
              <div className="grid grid-cols-2 gap-y-8 gap-x-4 sm:hidden">
                <StatItem stat={stats[0]} active={statsReveal.isVisible} />
                <StatItem stat={stats[1]} active={statsReveal.isVisible} />
                <div className="col-span-2 flex justify-center">
                  <div className="flex flex-col items-center gap-2">
                    <StatNumber stat={stats[2]} active={statsReveal.isVisible} />
                    <StatLabel label={stats[2].label} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatNumber({ stat, active }: { stat: (typeof stats)[0]; active: boolean }) {
  const count = useCountUp(stat.value, 2200, active);
  return (
    <p className="font-display text-4xl font-normal leading-none text-ivory-50 sm:text-5xl lg:text-[2.75rem] xl:text-[3.25rem]">
      {count}
      <span className="font-display text-xl text-gold-500 sm:text-2xl lg:text-3xl">{stat.suffix}</span>
    </p>
  );
}

function StatLabel({ label }: { label: string }) {
  return (
    <p className="font-sans text-[11px] font-medium uppercase leading-snug tracking-[0.18em] text-ivory-200/45">
      {label}
    </p>
  );
}

function StatItem({ stat, active }: { stat: (typeof stats)[0]; active: boolean }) {
  return (
    <div className="flex flex-1 flex-col gap-2 px-6 first:pl-0 last:pr-0">
      <StatNumber stat={stat} active={active} />
      <StatLabel label={stat.label} />
    </div>
  );
}
