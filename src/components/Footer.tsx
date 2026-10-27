import { Instagram, Facebook, Linkedin, ArrowUp } from 'lucide-react';
import { Logo } from './Logo';
import { navLinks } from '@/data/content';
import { useReveal } from '@/hooks/useAnimations';
import { navigateTo } from '@/utils/navigation';

export function Footer() {
  const { ref, isVisible } = useReveal<HTMLDivElement>({ threshold: 0.1 });

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigateTo(`/${href}`);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} relative border-t border-ivory-200/10 pt-20 pb-8`}
      style={{ backgroundColor: '#101114' }}
    >
      <div className="container-lux">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-5">
            <Logo variant="light" />
            <p className="mt-6 max-w-sm font-display text-xl font-light text-ivory-200/50">
              "Exceptional Properties. Elevated Living."
            </p>
            <p className="mt-4 max-w-sm font-sans text-[14px] leading-[1.75] tracking-[0.01em] text-ivory-200/40">
              Discover remarkable spaces, thoughtfully selected for the way you live, work, and
              invest.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <p className="mb-6 font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-gold-500">
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="link-underline font-sans text-sm text-ivory-200/60 hover:text-gold-500"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <p className="mb-6 font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-gold-500">
              Contact
            </p>
            <div className="flex flex-col gap-3 font-sans text-sm text-ivory-200/60">
              <p>1200 Wilshire Boulevard</p>
              <p>Los Angeles, CA 90017</p>
              <a
                href="tel:+13105550148"
                className="link-underline w-fit hover:text-gold-500"
              >
                +1 (310) 555-0148
              </a>
              <a
                href="mailto:hello@monumentpropertygroup.com"
                className="link-underline w-fit hover:text-gold-500"
              >
                hello@monumentpropertygroup.com
              </a>
            </div>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Linkedin, label: 'LinkedIn' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center border border-ivory-200/10 transition-all duration-500 ease-luxury hover:border-gold-500/50 hover:bg-gold-500 hover:text-charcoal-900"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 h-px w-full bg-ivory-200/10" />

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-sans text-xs text-ivory-200/40">
            &copy; 2026 Monument Property Group. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-ivory-200/50 transition-colors hover:text-gold-500"
          >
            <span>Back to Top</span>
            <span className="flex h-8 w-8 items-center justify-center border border-ivory-200/15 transition-all duration-500 group-hover:border-gold-500 group-hover:bg-gold-500 group-hover:text-charcoal-900">
              <ArrowUp className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-y-0.5" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
