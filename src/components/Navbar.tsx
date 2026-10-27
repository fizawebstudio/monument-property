import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { navLinks } from '@/data/content';
import { navigateTo } from '@/utils/navigation';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    const t = setTimeout(() => setLoaded(true), 200);
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigateTo(`/${href}`);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-700 ease-luxury ${
          scrolled
            ? 'py-2.5 border-b-2 border-gold-500/40'
            : 'py-4 border-b border-gold-500/15'
        }`}
        style={{
          backgroundColor: '#101114',
          transform: loaded ? 'translateY(0)' : 'translateY(-100%)',
          opacity: loaded ? 1 : 0,
        }}
      >
        <nav className="container-lux flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            aria-label="Monument Property Group — Home"
          >
            <Logo variant="light" />
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                style={{
                  opacity: loaded ? 1 : 0,
                  transform: loaded ? 'translateY(0)' : 'translateY(-10px)',
                  transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${300 + i * 80}ms`,
                }}
              >
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="link-underline font-sans text-[13px] font-medium uppercase tracking-[0.22em] text-ivory-200/80 hover:text-ivory-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#properties"
            onClick={(e) => handleNavClick(e, '#properties')}
            className="hidden lg:inline-flex btn-gold px-6 py-3 text-xs"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(-10px)',
              transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1) 700ms',
            }}
          >
            <span>View Properties</span>
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center justify-center lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6 text-ivory-100" />
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-600 ease-luxury ${
          menuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundColor: '#101114' }}
          onClick={() => setMenuOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-sm px-8 py-8 transition-transform duration-600 ease-luxury ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        style={{ backgroundColor: '#101114' }}>
          <div className="flex items-center justify-between">
            <Logo variant="light" />
            <button
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center p-1"
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-ivory-100" />
            </button>
          </div>

          <ul className="mt-16 flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateX(0)' : 'translateX(30px)',
                  transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${200 + i * 90}ms`,
                }}
              >
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block border-b border-ivory-200/10 py-5 font-display text-2xl text-ivory-100 transition-colors hover:text-gold-500"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#properties"
            onClick={(e) => handleNavClick(e, '#properties')}
            className="mt-10 flex w-full items-center justify-center btn-gold"
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1) 600ms',
            }}
          >
            <span>View Properties</span>
          </a>

          <div className="mt-auto absolute bottom-8 left-8 right-8">
            <p className="font-sans text-xs uppercase tracking-[0.22em] text-ivory-200/40">
              1200 Wilshire Boulevard
            </p>
            <p className="mt-1 font-sans text-xs text-ivory-200/40">Los Angeles, CA 90017</p>
          </div>
        </div>
      </div>
    </>
  );
}
