import { ArrowLeft, ArrowRight, Building2, MapPin, Sparkles } from 'lucide-react';
import { benefits, properties, type Property } from '@/data/content';
import { navigateTo } from '@/utils/navigation';

interface SearchResultsProps {
  query: string;
  service: string;
}

interface SearchItem {
  title: string;
  description: string;
  type: 'Property' | 'Service' | 'Location';
  property?: Property;
}

export function SearchResults({ query, service }: SearchResultsProps) {
  const normalizedQuery = query.trim().toLowerCase();
  const hasQuery = normalizedQuery.length > 0;
  const propertyResults: SearchItem[] = properties
    .filter((property) =>
      !hasQuery || [property.name, property.location, property.price, property.type].join(' ').toLowerCase().includes(normalizedQuery),
    )
    .slice(0, 10)
    .map((property) => ({
      title: property.name,
      description: `${property.type} in ${property.location} from ${property.price}.`,
      type: 'Property',
      property,
    }));
  const serviceResults: SearchItem[] = benefits
    .filter((benefit) => hasQuery && [benefit.title, benefit.description].join(' ').toLowerCase().includes(normalizedQuery))
    .map((benefit) => ({ title: benefit.title, description: benefit.description, type: 'Service' }));
  const locationResults: SearchItem[] = Array.from(new Set(properties.map((property) => property.location)))
    .filter((location) => hasQuery && location.toLowerCase().includes(normalizedQuery))
    .map((location) => ({
      title: location,
      description: `Explore exceptional properties and local guidance in ${location}.`,
      type: 'Location',
    }));
  const results = [...propertyResults, ...serviceResults, ...locationResults].slice(0, 10);

  return (
    <section className="min-h-[75vh] bg-charcoal-950 px-4 pb-24 pt-36 sm:px-6 lg:pb-32">
      <div className="container-lux">
        <button
          type="button"
          onClick={() => navigateTo('/')}
          className="group mb-12 flex items-center gap-2 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-ivory-200/55 transition-colors hover:text-gold-500"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </button>

        <div className="max-w-3xl">
          <p className="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-gold-500">Search Results</p>
          <h1 className="mt-5 font-display text-4xl font-medium text-ivory-50 sm:text-5xl lg:text-6xl">
            Results for <span className="font-light text-gold-400">“{query}”</span>
          </h1>
          <p className="mt-5 font-sans text-[15px] leading-[1.75] text-ivory-200/55">
            {service ? `${service} · ` : ''}{results.length} {results.length === 1 ? 'match' : 'matches'} across our properties, services, and locations.
          </p>
        </div>

        {results.length > 0 ? (
          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {results.map((result) => (
              <article
                key={`${result.type}-${result.title}`}
                className="group flex min-h-64 flex-col border border-ivory-200/10 bg-charcoal-900/70 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold-500/40"
              >
                {result.property ? (
                  <div
                    className="mb-6 h-40 bg-cover bg-center"
                    style={{ backgroundImage: `url(${result.property.image})` }}
                  />
                ) : (
                  <div className="mb-6 flex h-40 items-center justify-center border border-ivory-200/10 bg-charcoal-950">
                    {result.type === 'Service' ? (
                      <Sparkles className="h-7 w-7 text-gold-500/70" />
                    ) : (
                      <MapPin className="h-7 w-7 text-gold-500/70" />
                    )}
                  </div>
                )}
                <div className="flex items-center gap-2 font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-gold-500">
                  {result.type === 'Property' ? <Building2 className="h-3.5 w-3.5" /> : <Sparkles className="h-3.5 w-3.5" />}
                  {result.type}
                </div>
                <h2 className="mt-3 font-display text-2xl font-medium text-ivory-50">{result.title}</h2>
                <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-ivory-200/55">{result.description}</p>
                {result.property && (
                  <button
                    type="button"
                    onClick={() => navigateTo(`/property/${result.property?.id}`)}
                    className="mt-6 flex items-center gap-2 self-start font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-ivory-200/70 transition-colors hover:text-gold-500"
                  >
                    View Property <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                )}
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-14 border border-ivory-200/10 bg-charcoal-900/60 p-8 sm:p-12">
            <h2 className="font-display text-2xl text-ivory-50">No exact matches yet.</h2>
            <p className="mt-3 max-w-xl font-sans text-sm leading-relaxed text-ivory-200/55">
              Try a property name, city, or service such as “guidance”, “coastal”, or “investment”.
            </p>
            <button type="button" onClick={() => navigateTo('/')} className="btn-outline mt-8">
              <span>Browse Collection</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
