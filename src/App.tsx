import { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { FeaturedProperties } from '@/components/FeaturedProperties';
import { About } from '@/components/About';
import { PropertyCategories } from '@/components/PropertyCategories';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Spotlight } from '@/components/Spotlight';
import { Testimonials } from '@/components/Testimonials';
import { CTA } from '@/components/CTA';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { SearchBar } from '@/components/SearchBar';
import { SearchResults } from '@/components/SearchResults';
import { PropertyDetails } from '@/components/PropertyDetails';
import { properties } from '@/data/content';

interface RouteState {
  pathname: string;
  search: string;
  hash: string;
}

function getRoute(): RouteState {
  return {
    pathname: window.location.pathname,
    search: window.location.search,
    hash: window.location.hash,
  };
}

export default function App() {
  const [route, setRoute] = useState<RouteState>(getRoute);

  useEffect(() => {
    const handlePopState = () => setRoute(getRoute());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (route.pathname === '/' && route.hash) {
      window.setTimeout(() => {
        document.querySelector(route.hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    }
  }, [route]);

  const searchParams = new URLSearchParams(route.search);
  const searchQuery = searchParams.get('q') ?? '';
  const selectedService = searchParams.get('service') ?? '';
  const propertyId = Number(route.pathname.match(/^\/property\/(\d+)$/)?.[1]);
  const property = properties.find((item) => item.id === propertyId);
  const isSearchPage = route.pathname === '/search';
  const isPropertyPage = route.pathname.startsWith('/property/') && property;

  return (
    <div className="relative min-h-screen bg-charcoal-900">
      <Navbar />
      <main>
        {isSearchPage ? (
          <SearchResults query={searchQuery} service={selectedService} />
        ) : isPropertyPage ? (
          <PropertyDetails property={property} />
        ) : (
          <>
            <Hero />
            <SearchBar />
            <FeaturedProperties />
            <About />
            <PropertyCategories />
            <WhyChooseUs />
            <Spotlight />
            <Testimonials />
            <CTA />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
