import { ChevronDown, Search } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { navigateTo } from '@/utils/navigation';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [service, setService] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedQuery = query.trim();
    navigateTo(`/search?q=${encodeURIComponent(trimmedQuery)}&service=${encodeURIComponent(service)}`);
  };

  return (
    <section className="relative z-20 -mt-24 bg-transparent px-4 pb-8 pt-0 sm:px-6">
      <div className="container-lux">
        <form onSubmit={handleSubmit} className="mx-auto flex max-w-5xl flex-col gap-3 border border-ivory-200/15 bg-charcoal-950/95 p-4 shadow-2xl shadow-black/30 backdrop-blur-md sm:flex-row sm:p-5">
          <label className="relative min-w-0 flex-1">
            <span className="sr-only">Search properties or locations</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gold-500" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="input-lux h-14 border border-ivory-200/15 bg-charcoal-900/70 pl-11 pr-4"
              placeholder="Search properties or locations"
            />
          </label>
          <label className="relative sm:w-56">
            <span className="sr-only">Choose a service</span>
            <select
              value={service}
              onChange={(event) => setService(event.target.value)}
              className="input-lux h-14 w-full cursor-pointer appearance-none border border-ivory-200/15 bg-charcoal-900/70 px-4 pr-10 text-ivory-200/70"
            >
              <option value="" className="bg-charcoal-900">All Services</option>
              <option value="Property Search" className="bg-charcoal-900">Property Search</option>
              <option value="Investment Guidance" className="bg-charcoal-900">Investment Guidance</option>
              <option value="Market Advisory" className="bg-charcoal-900">Market Advisory</option>
              <option value="Commercial Spaces" className="bg-charcoal-900">Commercial Spaces</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gold-500" />
          </label>
          <button type="submit" className="btn-primary h-14 shrink-0 px-7">
            <span>Search</span>
            <Search className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
