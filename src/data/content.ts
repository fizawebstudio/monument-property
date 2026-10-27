export interface Property {
  id: number;
  name: string;
  location: string;
  price: string;
  type: string;
  image: string;
  images: string[];
  beds: number;
  baths: number;
  sqft: string;
}

export const properties: Property[] = [
  {
    id: 1,
    name: 'The Glass House',
    location: 'Beverly Hills, California',
    price: '$4,850,000',
    type: 'Luxury Residence',
    image:
      'https://images.pexels.com/photos/7031604/pexels-photo-7031604.jpeg?auto=compress&cs=tinysrgb&w=1200',
    images: [
      'https://images.pexels.com/photos/7031604/pexels-photo-7031604.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/8134745/pexels-photo-8134745.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/6283973/pexels-photo-6283973.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
    beds: 5,
    baths: 6,
    sqft: '6,200',
  },
  {
    id: 2,
    name: 'The Urban Residence',
    location: 'Manhattan, New York',
    price: '$2,950,000',
    type: 'City Apartment',
    image:
      'https://images.pexels.com/photos/16110999/pexels-photo-16110999.jpeg?auto=compress&cs=tinysrgb&w=1200',
    images: [
      'https://images.pexels.com/photos/16110999/pexels-photo-16110999.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/946312/pexels-photo-946312.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/7598368/pexels-photo-7598368.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
    beds: 3,
    baths: 3,
    sqft: '2,800',
  },
  {
    id: 3,
    name: 'The Coastal Estate',
    location: 'Malibu, California',
    price: '$6,200,000',
    type: 'Oceanfront Property',
    image:
      'https://images.pexels.com/photos/15501517/pexels-photo-15501517.jpeg?auto=compress&cs=tinysrgb&w=1200',
    images: [
      'https://images.pexels.com/photos/15501517/pexels-photo-15501517.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/2371976/pexels-photo-2371976.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
    beds: 6,
    baths: 7,
    sqft: '8,100',
  },
  {
    id: 4,
    name: 'The Modern Retreat',
    location: 'Austin, Texas',
    price: '$1,850,000',
    type: 'Contemporary Home',
    image:
      'https://images.pexels.com/photos/7598368/pexels-photo-7598368.jpeg?auto=compress&cs=tinysrgb&w=1200',
    images: [
      'https://images.pexels.com/photos/7598368/pexels-photo-7598368.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/7031604/pexels-photo-7031604.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/946312/pexels-photo-946312.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
    beds: 4,
    baths: 4,
    sqft: '3,400',
  },
];

export interface Category {
  title: string;
  description: string;
  image: string;
  count: string;
}

export const categories: Category[] = [
  {
    title: 'Luxury Residences',
    description: 'Architecturally significant homes in premier locations.',
    image:
      'https://images.pexels.com/photos/7031604/pexels-photo-7031604.jpeg?auto=compress&cs=tinysrgb&w=900',
    count: '120+ Properties',
  },
  {
    title: 'Modern Apartments',
    description: 'Sophisticated urban living in the world\'s finest cities.',
    image:
      'https://images.pexels.com/photos/16110999/pexels-photo-16110999.jpeg?auto=compress&cs=tinysrgb&w=900',
    count: '85+ Properties',
  },
  {
    title: 'Coastal Estates',
    description: 'Oceanfront properties with breathtaking waterfront views.',
    image:
      'https://images.pexels.com/photos/15501517/pexels-photo-15501517.jpeg?auto=compress&cs=tinysrgb&w=900',
    count: '45+ Properties',
  },
  {
    title: 'Commercial Spaces',
    description: 'Strategic investment opportunities in prime districts.',
    image:
      'https://images.pexels.com/photos/946312/pexels-photo-946312.jpeg?auto=compress&cs=tinysrgb&w=900',
    count: '60+ Properties',
  },
];

export interface Benefit {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export const benefits: Benefit[] = [
  {
    number: '01',
    title: 'Curated Properties',
    description:
      'Thoughtfully selected homes and investment opportunities, each meeting our exacting standards.',
    icon: 'compass',
  },
  {
    number: '02',
    title: 'Expert Guidance',
    description:
      'Personalized advice backed by deep market knowledge and decades of experience.',
    icon: 'map',
  },
  {
    number: '03',
    title: 'Exceptional Service',
    description:
      'A seamless experience from discovery to closing, with every detail handled.',
    icon: 'gem',
  },
  {
    number: '04',
    title: 'Long-Term Vision',
    description:
      'Property decisions designed to create lasting value for generations to come.',
    icon: 'building',
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Monument made the entire process feel effortless. Their attention to detail and understanding of our needs were exceptional.',
    name: 'Olivia Bennett',
    role: 'Homeowner',
    image:
      'https://images.pexels.com/photos/20451153/pexels-photo-20451153.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    quote:
      'Professional, thoughtful, and incredibly knowledgeable. We found the perfect property with their guidance.',
    name: 'Daniel Carter',
    role: 'Property Investor',
    image:
      'https://images.pexels.com/photos/34299170/pexels-photo-34299170.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    quote:
      'From the first consultation to closing, every detail was handled with care. A truly first-class experience.',
    name: 'Sophia Williams',
    role: 'Homeowner',
    image:
      'https://images.pexels.com/photos/35165348/pexels-photo-35165348.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 25, suffix: '+', label: 'Years of Expertise' },
  { value: 350, suffix: '+', label: 'Properties Represented' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Properties', href: '#properties' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact Us', href: '#contact' },
];

export const heroImage =
  'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1920';

export const aboutImage =
  'https://images.pexels.com/photos/3777410/pexels-photo-3777410.jpeg?auto=compress&cs=tinysrgb&w=1200';

export const spotlightImage =
  'https://images.pexels.com/photos/31817157/pexels-photo-31817157.jpeg?auto=compress&cs=tinysrgb&w=1920';

export const ctaImage =
  'https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&w=1920';

export const footerImage =
  'https://images.pexels.com/photos/2371976/pexels-photo-2371976.jpeg?auto=compress&cs=tinysrgb&w=600';
