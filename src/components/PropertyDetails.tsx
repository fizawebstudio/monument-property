import { ArrowLeft, ArrowRight, Bath, BedDouble, Mail, Maximize } from 'lucide-react';
import type { Property } from '@/data/content';
import { navigateTo } from '@/utils/navigation';

interface PropertyDetailsProps {
  property: Property;
}

export function PropertyDetails({ property }: PropertyDetailsProps) {
  return (
    <section className="min-h-screen bg-charcoal-950 px-4 pb-24 pt-32 sm:px-6 lg:pb-32">
      <div className="container-lux">
        <button
          type="button"
          onClick={() => navigateTo('/')}
          className="group mb-10 flex items-center gap-2 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-ivory-200/55 transition-colors hover:text-gold-500"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Collection
        </button>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="grid grid-cols-2 gap-3">
            {property.images.map((image, index) => (
              <div
                key={image}
                className={`${index === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-[4/3]'} overflow-hidden bg-charcoal-900`}
              >
                <img src={image} alt={`${property.name} view ${index + 1}`} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-center">
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-gold-500">Property Details</p>
            <h1 className="mt-5 font-display text-4xl font-medium leading-tight text-ivory-50 sm:text-5xl">{property.name}</h1>
            <p className="mt-4 font-sans text-sm uppercase tracking-[0.22em] text-ivory-200/55">{property.location}</p>
            <p className="mt-8 font-display text-3xl font-medium text-gold-500">{property.price}</p>
            <p className="mt-6 max-w-lg font-sans text-[15px] leading-[1.75] text-ivory-200/55">
              A carefully selected {property.type.toLowerCase()} for clients looking for distinctive architecture, lasting value, and an exceptional sense of place.
            </p>

            <div className="mt-10 grid grid-cols-3 border-y border-ivory-200/10 py-6">
              <div className="flex flex-col gap-2 border-r border-ivory-200/10">
                <BedDouble className="h-4 w-4 text-gold-500" />
                <span className="font-sans text-xs text-ivory-200/55">{property.beds} Bedrooms</span>
              </div>
              <div className="flex flex-col gap-2 px-4 border-r border-ivory-200/10">
                <Bath className="h-4 w-4 text-gold-500" />
                <span className="font-sans text-xs text-ivory-200/55">{property.baths} Bathrooms</span>
              </div>
              <div className="flex flex-col gap-2 pl-4">
                <Maximize className="h-4 w-4 text-gold-500" />
                <span className="font-sans text-xs text-ivory-200/55">{property.sqft} Sq Ft</span>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={() => navigateTo('/#contact')} className="btn-primary">
                <span>Arrange a Viewing</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button type="button" onClick={() => navigateTo('/#contact')} className="btn-outline">
                <Mail className="h-4 w-4" />
                <span>Ask a Question</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
