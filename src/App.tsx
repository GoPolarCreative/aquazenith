import { useState, useEffect, useRef } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ChevronDown,
  Menu,
  X,
  Star,
  Droplets,
  Home,
  Wind,
  Shield,
  Eye,
  Layers,
  ArrowRight,
  Send,
} from 'lucide-react';

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

const SERVICES = [
  {
    icon: Droplets,
    title: 'Pressure Washing',
    description: 'High-pressure cleaning that blasts away years of built-up grime, mould, and staining from any surface.',
  },
  {
    icon: Home,
    title: 'House Washing',
    description: 'Soft wash treatments that safely restore your home\'s exterior without damaging render, paint, or cladding.',
  },
  {
    icon: Wind,
    title: 'Roof Washing',
    description: 'Low-pressure soft wash removes lichen, moss, and algae that silently degrade your roof over time.',
  },
  {
    icon: Layers,
    title: 'Driveway Cleaning',
    description: 'Surface cleaner technology delivers a streak-free, uniform result that transforms driveways and paths.',
  },
  {
    icon: Eye,
    title: 'Window Cleaning',
    description: 'Streak-free window cleaning for residential, strata, and commercial properties at any height.',
  },
  {
    icon: Shield,
    title: 'Concrete Sealing',
    description: 'Penetrating sealers that lock out moisture and staining, keeping your concrete looking new for longer.',
  },
  {
    icon: Droplets,
    title: 'Gutter Cleaning',
    description: 'Complete gutter flush and debris removal to prevent blockages, overflows, and water damage.',
  },
];

const BEFORE_AFTERS = [
  {
    before: '/images/styles/before1.png',
    after: '/images/styles/after1.png',
    label: 'Timber Stair Restoration',
  },
  {
    before: '/images/styles/before2.png',
    after: '/images/styles/after2.png',
    label: 'Tennis Court Rejuvenation',
  },
];

const GALLERY = [
  { src: '/images/gallery/gallery1.png', alt: 'Tennis court deep clean in progress' },
  { src: '/images/gallery/gallery2.png', alt: 'Window cleaning on dark brick exterior' },
  { src: '/images/gallery/gallery3.png', alt: 'Roof and court cleaning result' },
  { src: '/images/gallery/gallery4.png', alt: 'Patio pressure wash transformation' },
  { src: '/images/gallery/gallery5.png', alt: 'Solar panel cleaning Melbourne' },
  { src: '/images/gallery/740063369_2283078445830254_7913615686319414018_n_(1).webp', alt: 'Tennis court pressure wash before and after' },
  { src: '/images/gallery/740486478_1694628088428497_7843342192004674261_n.webp', alt: 'Stone staircase cleaning before and after' },
  { src: '/images/gallery/740753661_2192895104833165_2217611655600518052_n_(1).webp', alt: 'Driveway pathway pressure wash before and after' },
  { src: '/images/gallery/741143145_1768435680995555_8537042184969799859_n.webp', alt: 'Pool area paving cleaning before and after' },
  { src: '/images/gallery/741619789_1064243502626452_2410785463005497919_n.webp', alt: 'Outdoor patio tiles before and after' },
  { src: '/images/gallery/742096156_1337408611861747_92185774076219899_n.webp', alt: 'Tennis court surface cleaning before and after' },
  { src: '/images/gallery/742101409_1054334886938257_6815134139124040423_n.webp', alt: 'Courtyard paving restoration before and after' },
  { src: '/images/gallery/742101409_1716159952753390_9177960454232234_n.webp', alt: 'Brick paving driveway cleaning before and after' },
  { src: '/images/gallery/743288552_3565135170305650_1178161206259170121_n_(1).webp', alt: 'Concrete driveway pressure wash before and after' },
  { src: '/images/gallery/743317988_1707507870578870_926001620720812103_n.webp', alt: 'Pool surrounds cleaning before and after' },
  { src: '/images/gallery/743496821_1692593228638605_8328343925720263901_n.webp', alt: 'Wall render soft wash before and after' },
  { src: '/images/gallery/743609631_1373923361416907_5733720203996291325_n.webp', alt: 'Solar panel cleaning before and after' },
  { src: '/images/gallery/743699278_1047524311560219_1982389844684933290_n.webp', alt: 'Roof cleaning before and after' },
  { src: '/images/gallery/743830619_1531334024488998_5953648406081377572_n.webp', alt: 'Outdoor entertaining area cleaning before and after' },
  { src: '/images/gallery/743975150_1023448606933071_4353829313695757216_n.webp', alt: 'Stone steps pressure wash before and after' },
  { src: '/images/gallery/745332021_1824127235240880_3413854918854662299_n.webp', alt: 'Paved area cleaning before and after' },
];

const WHY_US = [
  { label: 'Meticulous attention to detail' },
  { label: 'Transparent communication from quote to completion' },
  { label: 'Outstanding value for money' },
  { label: 'Residential, strata and commercial' },
  { label: 'Free, no-obligation quotes' },
  { label: '3 years of trusted local experience' },
];

function BeforeAfterSlider({ before, after, label }: { before: string; after: string; label: string }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  };

  const onMouseDown = () => { isDragging.current = true; };
  const onMouseMove = (e: React.MouseEvent) => { if (isDragging.current) updatePosition(e.clientX); };
  const onMouseUp = () => { isDragging.current = false; };
  const onTouchMove = (e: React.TouchEvent) => { updatePosition(e.touches[0].clientX); };

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-2xl group" style={{ aspectRatio: '1/1' }}>
      <div
        ref={containerRef}
        className="relative w-full h-full select-none cursor-col-resize"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchMove={onTouchMove}
      >
        {/* After image (background) */}
        <img src={after} alt={`After: ${label}`} className="absolute inset-0 w-full h-full object-cover" draggable={false} />
        {/* Before image (clipped) */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
          <img src={before} alt={`Before: ${label}`} className="absolute inset-0 w-full h-full object-cover" style={{ width: `${10000 / position}%`, maxWidth: 'none' }} draggable={false} />
        </div>
        {/* Divider */}
        <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg" style={{ left: `${position}%` }}>
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M6 10L2 10M2 10L5 7M2 10L5 13" stroke="#0e2150" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 10L18 10M18 10L15 7M18 10L15 13" stroke="#0e2150" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        {/* Labels */}
        <span className="absolute top-3 left-3 bg-navy-900/80 text-white text-xs font-semibold px-2 py-1 rounded-full backdrop-blur-sm">BEFORE</span>
        <span className="absolute top-3 right-3 bg-sky-500/90 text-white text-xs font-semibold px-2 py-1 rounded-full backdrop-blur-sm">AFTER</span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950/80 to-transparent px-4 py-3">
        <p className="text-white font-heading text-lg tracking-wide">{label}</p>
      </div>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', postcode: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'e56c2b8b-3c3f-4fba-b25b-2f3952056c93',
          name: form.name,
          phone: form.phone,
          email: form.email,
          postcode: form.postcode,
          message: form.message,
          subject: `New enquiry from ${form.name} - AquaZenith Website`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ name: '', phone: '', email: '', postcode: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col gap-4">
      <div>
        <h3 className="font-heading text-2xl text-navy-900 font-bold tracking-wide uppercase">Get a Free Quote</h3>
        <p className="text-navy-600 text-sm mt-1">We'll get back to you within 24 hours.</p>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-xs font-semibold text-navy-700 mb-1 uppercase tracking-wider">Full Name</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-navy-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy-700 mb-1 uppercase tracking-wider">Phone Number</label>
          <input
            type="tel"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="0400 000 000"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-navy-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy-700 mb-1 uppercase tracking-wider">Email Address</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-navy-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy-700 mb-1 uppercase tracking-wider">Postcode</label>
          <input
            type="text"
            name="postcode"
            required
            value={form.postcode}
            onChange={handleChange}
            placeholder="3000"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-navy-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy-700 mb-1 uppercase tracking-wider">Message</label>
          <textarea
            name="message"
            required
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            rows={4}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-navy-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition text-sm resize-none"
          />
        </div>
      </div>
      {status === 'success' && (
        <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-4 py-3">
          <CheckCircle size={16} className="text-green-600 flex-shrink-0" />
          <span className="text-green-700 text-sm font-medium">Message sent! We'll be in touch shortly.</span>
        </div>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-sm">Something went wrong. Please call us directly on <a href="tel:0415301570" className="underline font-semibold">0415 301 570</a>.</p>
      )}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 disabled:bg-sky-300 text-white font-heading font-bold text-lg uppercase tracking-wider px-6 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-sky-500/30 hover:scale-[1.02] active:scale-100"
      >
        {status === 'sending' ? (
          <>
            <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={18} />
            Send Enquiry
          </>
        )}
      </button>
    </form>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Services', id: 'services' },
    { label: 'Before & After', id: 'before-after' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <div className="font-body text-navy-900 bg-white antialiased">

      {/* ── NAV ── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-3' : 'bg-white py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-3">
            <img src="/logo.png" alt="AquaZenith Pressure Washing" className="h-16 w-auto drop-shadow" />
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm font-medium text-navy-700 hover:text-sky-500 transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:0415301570"
              className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 text-sm shadow-lg hover:shadow-sky-500/30"
            >
              <Phone size={15} />
              0415 301 570
            </a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-navy-800 p-2"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg px-4 pb-6 pt-4 flex flex-col gap-1">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left text-navy-700 hover:text-sky-500 font-medium py-3 border-b border-gray-100 last:border-0 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:0415301570"
              className="flex items-center justify-center gap-2 bg-sky-500 text-white font-semibold py-3 rounded-xl mt-3 text-base"
            >
              <Phone size={16} />
              0415 301 570
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img src="/images/image-1582740883437605.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
        </div>

<div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-500/30 rounded-full px-4 py-1.5 w-fit">
                <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                <span className="text-sky-300 text-xs font-semibold tracking-widest uppercase">Melbourne's Exterior Cleaning Specialists</span>
              </div>
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-none tracking-tight uppercase">
                Restore.
                <br />
                <span className="text-sky-400">Refresh.</span>
                <br />
                Reveal.
              </h1>
              <p className="text-white/75 text-lg leading-relaxed max-w-lg">
                AquaZenith Pressure Washing delivers premium exterior cleaning for homes, driveways, roofs, and more across Metropolitan Melbourne, the Macedon Ranges, and Mornington Peninsula.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Free Quotes', '3 Years Experience', 'Residential & Commercial'].map(tag => (
                  <span key={tag} className="flex items-center gap-1.5 bg-white/10 border border-white/20 text-white/90 text-sm px-4 py-2 rounded-full">
                    <CheckCircle size={14} className="text-sky-400" />
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="tel:0415301570"
                  className="flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-heading font-bold text-lg uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-200 shadow-xl hover:shadow-sky-500/40 hover:scale-[1.02]"
                >
                  <Phone size={20} />
                  0415 301 570
                </a>
                <button
                  onClick={() => scrollTo('services')}
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-heading font-bold text-lg uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-200"
                >
                  Our Services
                  <ChevronDown size={20} />
                </button>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:pl-8">
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollTo('services')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors"
        >
          <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
          <ChevronDown size={18} className="animate-bounce" />
        </button>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-sky-500 font-semibold text-sm uppercase tracking-widest">What We Do</span>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-navy-900 mt-3 uppercase tracking-tight">Our Services</h2>
            <p className="text-navy-600 mt-4 max-w-2xl mx-auto text-lg">
              From high-pressure blasting to delicate soft wash treatments, we have the right technique for every surface.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div
                key={i}
                className="group relative bg-white border border-gray-100 rounded-2xl p-7 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-sky-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 group-hover:bg-white/20 flex items-center justify-center mb-5 transition-colors duration-300">
                    <s.icon size={24} className="text-sky-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-navy-900 group-hover:text-white mb-2 uppercase tracking-wide transition-colors duration-300">{s.title}</h3>
                  <p className="text-navy-600 group-hover:text-white/80 text-sm leading-relaxed transition-colors duration-300">{s.description}</p>
                </div>
              </div>
            ))}
            {/* CTA card */}
            <div className="bg-gradient-to-br from-navy-900 to-sky-700 rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-xl font-bold text-white uppercase tracking-wide mb-2">Not sure what you need?</h3>
                <p className="text-white/70 text-sm leading-relaxed">Contact us for a free, no-obligation assessment of your property.</p>
              </div>
              <button
                onClick={() => scrollTo('contact')}
                className="flex items-center gap-2 bg-white text-navy-900 font-semibold text-sm px-5 py-3 rounded-xl mt-6 hover:bg-sky-50 transition-colors w-fit"
              >
                Get Free Quote <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── BEFORE & AFTER ── */}
      <section id="before-after" className="py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-sky-400 font-semibold text-sm uppercase tracking-widest">Real Results</span>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white mt-3 uppercase tracking-tight">Before &amp; After</h2>
            <p className="text-white/60 mt-4 max-w-xl mx-auto text-lg">Drag the slider to reveal the transformation. The results speak for themselves.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {BEFORE_AFTERS.map((item, i) => (
              <BeforeAfterSlider key={i} before={item.before} after={item.after} label={item.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sky-500 font-semibold text-sm uppercase tracking-widest">Why AquaZenith</span>
              <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-navy-900 mt-3 uppercase tracking-tight leading-none">
                Cleaning Done Right.<br />
                <span className="text-sky-500">Every Time.</span>
              </h2>
              <p className="text-navy-600 mt-6 text-lg leading-relaxed">
                AquaZenith Pressure Washing is a Melbourne-based exterior cleaning service with 3 years of hands-on experience. We specialise in high-pressure washing, soft washing, window cleaning, and concrete sealing for residential, strata, and commercial properties across Greater Melbourne and surrounding regions.
              </p>
              <p className="text-navy-600 mt-4 text-lg leading-relaxed">
                We combine the right equipment, the right technique, and a genuine commitment to quality to deliver results that exceed expectations every time.
              </p>
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {WHY_US.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-sky-500 flex-shrink-0" />
                    <span className="text-navy-800 font-medium text-sm">{item.label}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="tel:0415301570"
                  className="flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-heading font-bold text-base uppercase tracking-wider px-7 py-4 rounded-xl transition-all duration-200"
                >
                  <Phone size={18} />
                  Call Now
                </a>
                <button
                  onClick={() => scrollTo('contact')}
                  className="flex items-center gap-2 border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-heading font-bold text-base uppercase tracking-wider px-7 py-4 rounded-xl transition-all duration-200"
                >
                  Free Quote
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/images/gallery/gallery1.png" alt="Tennis court cleaning" className="rounded-2xl object-cover w-full aspect-square shadow-xl" />
              <img src="/images/gallery/gallery5.png" alt="Solar panel cleaning" className="rounded-2xl object-cover w-full aspect-square shadow-xl mt-8" />
              <img src="/images/gallery/gallery2.png" alt="Window cleaning" className="rounded-2xl object-cover w-full aspect-square shadow-xl" />
              <img src="/images/gallery/gallery3.png" alt="Court cleaning result" className="rounded-2xl object-cover w-full aspect-square shadow-xl mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS STRIP ── */}
      <section className="bg-sky-500 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-white">
            <MapPin size={24} className="flex-shrink-0" />
            <div>
              <p className="font-heading font-bold text-xl uppercase tracking-wide">Service Areas</p>
              <p className="text-white/80 text-sm">Metropolitan Melbourne &bull; Macedon Ranges Shire &bull; Mornington Peninsula</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-white">
            <div className="flex items-center gap-2">
              <Star size={16} className="fill-white" />
              <span className="text-sm font-semibold">3 Years Experience</span>
            </div>
            <div className="w-px h-6 bg-white/30" />
            <div className="flex items-center gap-2">
              <CheckCircle size={16} />
              <span className="text-sm font-semibold">Free Quotes</span>
            </div>
            <div className="w-px h-6 bg-white/30" />
            <a
              href="tel:0415301570"
              className="flex items-center gap-2 bg-white text-sky-600 font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-sky-50 transition-colors"
            >
              <Phone size={15} />
              0415 301 570
            </a>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-sky-500 font-semibold text-sm uppercase tracking-widest">Our Work</span>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-navy-900 mt-3 uppercase tracking-tight">Gallery</h2>
            <p className="text-navy-600 mt-4 max-w-xl mx-auto text-lg">A sample of the properties we've transformed across Melbourne and surrounds.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {GALLERY.map((img, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/30 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Info */}
            <div>
              <span className="text-sky-400 font-semibold text-sm uppercase tracking-widest">Get in Touch</span>
              <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white mt-3 uppercase tracking-tight leading-none">
                Ready to Transform <br />
                <span className="text-sky-400">Your Property?</span>
              </h2>
              <p className="text-white/60 mt-6 text-lg leading-relaxed">
                We offer free, no-obligation quotes. Reach out by phone, email, or the contact form and we'll be back to you within 24 hours.
              </p>
              <div className="mt-10 flex flex-col gap-5">
                <a href="tel:0415301570" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/20 group-hover:bg-sky-500 flex items-center justify-center transition-colors duration-200 flex-shrink-0">
                    <Phone size={20} className="text-sky-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-widest font-semibold">Phone</p>
                    <p className="text-white font-semibold text-lg group-hover:text-sky-400 transition-colors">0415 301 570</p>
                  </div>
                </a>
                <a href="mailto:aquazenithpressurewashing@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/20 group-hover:bg-sky-500 flex items-center justify-center transition-colors duration-200 flex-shrink-0">
                    <Mail size={20} className="text-sky-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-widest font-semibold">Email</p>
                    <p className="text-white font-semibold group-hover:text-sky-400 transition-colors break-all">aquazenithpressurewashing@gmail.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-sky-400" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-widest font-semibold">Location</p>
                    <p className="text-white font-semibold">Kyneton, VIC</p>
                    <p className="text-white font-semibold">Kew, VIC</p>
                    <p className="text-white/50 text-sm">Serving Metropolitan Melbourne, Macedon Ranges &amp; Mornington Peninsula</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.instagram.com/aquazenith_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-sky-500/20 hover:bg-sky-500 flex items-center justify-center transition-colors duration-200 group text-sky-400 hover:text-white"
                    aria-label="Instagram"
                  >
                    <InstagramIcon size={20} />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61564869934218"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-sky-500/20 hover:bg-sky-500 flex items-center justify-center transition-colors duration-200 group text-sky-400 hover:text-white"
                    aria-label="Facebook"
                  >
                    <FacebookIcon size={20} />
                  </a>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-widest font-semibold">Follow Us</p>
                    <p className="text-white font-semibold">Instagram &amp; Facebook</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-navy-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid sm:grid-cols-3 gap-10">
            <div className="flex flex-col gap-4">
              <img src="/logo.png" alt="AquaZenith Pressure Washing" className="h-16 w-16 object-contain" />
              <p className="text-white/50 text-sm leading-relaxed">
                Melbourne's trusted exterior cleaning specialists. Servicing residential, strata, and commercial properties.
              </p>
            </div>
            <div>
              <p className="text-white font-heading font-bold text-base uppercase tracking-wider mb-4">Services</p>
              <ul className="flex flex-col gap-2">
                {SERVICES.slice(0, 6).map(s => (
                  <li key={s.title} className="text-white/50 text-sm hover:text-sky-400 transition-colors cursor-default">{s.title}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white font-heading font-bold text-base uppercase tracking-wider mb-4">Contact</p>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="tel:0415301570" className="flex items-center gap-2 text-white/50 hover:text-sky-400 text-sm transition-colors">
                    <Phone size={14} />
                    0415 301 570
                  </a>
                </li>
                <li>
                  <a href="mailto:aquazenithpressurewashing@gmail.com" className="flex items-center gap-2 text-white/50 hover:text-sky-400 text-sm transition-colors break-all">
                    <Mail size={14} className="flex-shrink-0" />
                    aquazenithpressurewashing@gmail.com
                  </a>
                </li>
                <li>
                  <span className="flex items-center gap-2 text-white/50 text-sm">
                    <MapPin size={14} className="flex-shrink-0" />
                    Kyneton, VIC &bull; Kew, VIC
                  </span>
                </li>
                <li className="flex items-center gap-3 pt-1">
                  <a
                    href="https://www.instagram.com/aquazenith_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-sky-300 transition-colors"
                    aria-label="Instagram"
                  >
                    <InstagramIcon size={18} />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61564869934218"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-sky-300 transition-colors"
                    aria-label="Facebook"
                  >
                    <FacebookIcon size={18} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-400 text-xs">
              &copy; {new Date().getFullYear()} AquaZenith Pressure Washing. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs">
              Website by{' '}
              <a
                href="https://www.itscold.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-500 hover:text-sky-400 transition-colors"
              >
                Go Polar
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
