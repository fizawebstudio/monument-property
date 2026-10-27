import { useState, type FormEvent } from 'react';
import { ArrowRight, MapPin, Phone, Mail, Check } from 'lucide-react';
import { useReveal } from '@/hooks/useAnimations';

const propertyInterests = [
  'Luxury Residence',
  'City Apartment',
  'Coastal Estate',
  'Contemporary Home',
  'Commercial Space',
  'Investment Opportunity',
];

export function Contact() {
  const leftReveal = useReveal<HTMLDivElement>({ threshold: 0.15 });
  const rightReveal = useReveal<HTMLDivElement>({ threshold: 0.15 });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const whatsappMessage = [
      'Hello Monument Property Group,',
      '',
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Interest: ${form.interest || 'General inquiry'}`,
      `Inquiry: ${form.message.trim()}`,
    ].join('\\n');
    const whatsappUrl = `https://wa.me/13105550148?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative bg-charcoal-950 py-24 lg:py-32">
      <div className="container-lux">
        {/* Header */}
        <div className="mb-16 text-center">
          <div>
            <span className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-gold-500">
              Begin a Conversation
            </span>
          </div>
          <h2 className="mt-5 font-display text-3xl font-medium text-ivory-50 sm:text-4xl lg:text-5xl xl:text-[3.25rem]">
            Let's Find Something{' '}
            <span className="font-light text-gold-400">Extraordinary.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-sans text-[15px] leading-[1.75] tracking-[0.01em] text-ivory-200/55">
            Tell us what you're looking for, and our team will help you take the next step.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — Form */}
          <div
            ref={leftReveal.ref}
            className={`reveal-left ${leftReveal.isVisible ? 'is-visible' : ''}`}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="label-lux" htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="input-lux"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="label-lux" htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="input-lux"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="label-lux" htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="input-lux"
                    placeholder="+1 (310) 555-0000"
                  />
                </div>
                <div>
                  <label className="label-lux" htmlFor="interest">Property Interest</label>
                  <select
                    id="interest"
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    className="input-lux cursor-pointer appearance-none"
                  >
                    <option value="" className="bg-charcoal-900">Select...</option>
                    {propertyInterests.map((interest) => (
                      <option key={interest} value={interest} className="bg-charcoal-900">
                        {interest}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="label-lux" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="input-lux resize-none"
                  placeholder="Tell us about what you're looking for..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary mt-2 w-fit"
              >
                <>
                  <span>{submitted ? 'Open WhatsApp Again' : 'Send via WhatsApp'}</span>
                  {submitted ? <Check className="relative z-10 h-4 w-4" /> : <ArrowRight className="relative z-10 h-4 w-4" />}
                </>
              </button>
              {submitted && (
                <p className="mt-1 font-sans text-xs text-gold-500">
                  WhatsApp opened with your message ready to send.
                </p>
              )}
            </form>
          </div>

          {/* Right — Contact details */}
          <div
            ref={rightReveal.ref}
            className={`reveal-right ${rightReveal.isVisible ? 'is-visible' : ''} flex flex-col justify-start gap-8 lg:pt-2`}
          >
            <div>
              <p className="mb-4 font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-gold-500">
                Monument Property Group
              </p>
              <p className="font-display text-2xl font-medium text-ivory-50">
                1200 Wilshire Boulevard
              </p>
              <p className="mt-1 font-sans text-[15px] leading-[1.6] text-ivory-200/55">
                Los Angeles, CA 90017
              </p>
            </div>

            <div className="h-px w-full bg-ivory-200/10" />

            <div className="flex flex-col gap-5">
              <a
                href="tel:+13105550148"
                className="group flex items-center gap-4 transition-colors hover:text-gold-500"
              >
                <div className="flex h-11 w-11 items-center justify-center border border-ivory-200/15 transition-all duration-500 group-hover:border-gold-500/50">
                  <Phone className="h-4 w-4 text-ivory-200/60 transition-colors group-hover:text-gold-500" />
                </div>
                <div>
                  <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-ivory-200/40">Phone</p>
                  <p className="font-sans text-[15px] text-ivory-100 transition-colors group-hover:text-gold-500">
                    +1 (310) 555-0148
                  </p>
                </div>
              </a>

              <a
                href="mailto:hello@monumentpropertygroup.com"
                className="group flex items-center gap-4 transition-colors hover:text-gold-500"
              >
                <div className="flex h-11 w-11 items-center justify-center border border-ivory-200/15 transition-all duration-500 group-hover:border-gold-500/50">
                  <Mail className="h-4 w-4 text-ivory-200/60 transition-colors group-hover:text-gold-500" />
                </div>
                <div>
                  <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-ivory-200/40">Email</p>
                  <p className="font-sans text-[15px] text-ivory-100 transition-colors group-hover:text-gold-500">
                    hello@monumentpropertygroup.com
                  </p>
                </div>
              </a>

              <div className="group flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center border border-ivory-200/15">
                  <MapPin className="h-4 w-4 text-ivory-200/60" />
                </div>
                <div>
                  <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-ivory-200/40">Office</p>
                  <p className="font-sans text-[15px] text-ivory-100">Mon — Fri, 9am — 6pm PST</p>
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-ivory-200/10" />

            <div>
              <p className="mb-3 font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-gold-500">
                Follow Us
              </p>
              <div className="flex gap-3">
                {['Instagram', 'Facebook', 'LinkedIn'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="link-underline font-sans text-xs uppercase tracking-[0.22em] text-ivory-200/60 hover:text-gold-500"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
