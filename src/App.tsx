/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Calendar, Star, CheckCircle2, ChevronRight,
  Wine, PartyPopper, GlassWater, ArrowRight, Check,
  Quote, MapPin, Sparkles, Phone, Flame, Zap, Users, Clock
} from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = '', yOffset = 30 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: yOffset }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

const Section = ({ id, children, className = '' }: any) => (
  <section id={id} className={`py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const Modal = ({ isOpen, onClose }: any) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
        className="relative bg-zinc-900 border border-zinc-800 p-8 rounded-2xl w-full max-w-lg shadow-2xl z-10"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-zinc-400 hover:text-white">
          <X className="w-6 h-6" />
        </button>
        <h3 className="font-serif text-3xl mb-2 text-white">Check Availability</h3>
        <p className="text-zinc-400 mb-6 font-sans">Fill out the details below and our team will get back to you within 2 hours.</p>
        
        <form className="space-y-4 font-sans" onSubmit={(e) => { e.preventDefault(); onClose(); alert("Booking request sent! (Frontend Demo)"); }}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">Name</label>
              <input required type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">Event Date</label>
              <input required type="date" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors [&::-webkit-calendar-picker-indicator]:invert" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">Event Type</label>
            <select className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors appearance-none">
              <option>Wedding</option>
              <option>Corporate Event</option>
              <option>Private Party</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">Guest Count</label>
            <input required type="number" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="e.g. 150" />
          </div>
          <button type="submit" className="w-full mt-4 bg-gold-500 hover:bg-gold-400 text-zinc-950 font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
            Get a Custom Quote <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </motion.div>
    </div>
  )
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = () => setIsModalOpen(true);

  return (
    <div className="font-sans bg-zinc-950 text-zinc-50 min-h-screen selection:bg-gold-500/30 selection:text-gold-200">
      
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <GlassWater className="text-gold-500 w-8 h-8" />
            <span className="font-serif text-xl font-bold tracking-tight text-white">Booze<span className="text-gold-500">.</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Services</a>
            <a href="#packages" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Packages</a>
            <a href="#gallery" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Gallery</a>
            <button onClick={openModal} className="bg-white text-zinc-950 hover:bg-zinc-200 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors">
              Book Now
            </button>
          </div>

          <button className="md:hidden text-zinc-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000" 
            alt="Premium cocktails on a bar" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center w-full">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-gold-400 text-xs font-semibold tracking-wider uppercase mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Premium Mobile Bar Experience</span>
            </motion.div>
            
            <FadeIn>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-6 text-white">
                Elevate Your Event With <span className="italic text-gold-500">Taste.</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <p className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed max-w-lg font-light">
                Expert mixologists, custom tailored cocktails, and a luxury setup that guarantees an unforgettable night. We don't just pour drinks; we curate experiences.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.2} className="flex flex-col sm:flex-row gap-4">
              <button onClick={openModal} className="bg-gold-500 hover:bg-gold-400 text-zinc-950 px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all">
                Get a Custom Quote <ArrowRight className="w-5 h-5" />
              </button>
              <button onClick={openModal} className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 hover:bg-zinc-800 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-all">
                Check Date Availability
              </button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <div className="border-y border-zinc-800/50 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          <p className="text-center text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-6">Trusted for premium events across the city</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-20 items-center opacity-60 grayscale">
            {['Vogue', 'GQ', 'Four Seasons', 'Sundance'].map((brand, i) => (
              <span key={i} className="font-serif text-xl md:text-2xl font-bold">{brand}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Agitation & Solution */}
      <Section id="problem-solution" className="grid md:grid-cols-2 gap-16 items-center">
        <FadeIn>
          <div className="space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">Don't let a <span className="line-through text-zinc-600 decoration-gold-500 decoration-4">basic bar</span> ruin a great party.</h2>
            <p className="text-zinc-400 text-lg">
              Long lines. Weak, generic drinks. Unprofessional staff running out of ice. 
              Your guests will remember the bar—make sure it's for the right reasons.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Stand out with a visually stunning bar setup",
                "Craft cocktails designed specifically for your event",
                "Professional, high-energy mixologists",
                "Zero stress for you—we handle ice, garnishes, and cleanup"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-zinc-300">
                  <CheckCircle2 className="w-6 h-6 text-gold-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
        <FadeIn delay={0.2} className="relative">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-gold-500/10">
            <img src="https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&q=80&w=800" alt="Mixologist pouring a drink" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <blockquote className="font-serif text-xl italic text-white">
                "The bar was the absolute highlight of our wedding. The team was incredible."
                <footer className="mt-2 text-sm font-sans text-gold-400 not-italic">— Sarah & James, 2025</footer>
              </blockquote>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Services Breakdown */}
      <section id="services" className="bg-zinc-900 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-4">Crafted for Every Occasion</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">Whether it's the biggest day of your life or a brand activation, we deliver an unmatched standard of service.</p>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Weddings", icon: <Wine />, desc: "Elegant setups, signature his/hers cocktails, and seamless service so you can dance the night away." },
              { title: "Corporate Events", icon: <Users />, desc: "Impress clients and reward the team with a premium bar experience that elevates your brand image." },
              { title: "Private Parties", icon: <PartyPopper />, desc: "From milestones to intimate gatherings, we bring the luxury cocktail lounge directly to your backyard." }
            ].map((service, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-2xl hover:border-gold-500/50 transition-colors group">
                  <div className="w-14 h-14 bg-zinc-900 rounded-xl flex items-center justify-center text-gold-500 mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-3">{service.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{service.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Experience */}
      <Section className="text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] aspect-square bg-gold-500/20 rounded-full blur-[120px] pointer-events-none" />
        
        <FadeIn>
          <span className="text-gold-500 font-semibold tracking-wider text-sm uppercase mb-4 block">The Booze Difference</span>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight">
            We don't just serve alcohol.<br />
            <span className="italic">We curate the vibe.</span>
          </h2>
          <button onClick={openModal} className="bg-white text-zinc-950 hover:bg-zinc-200 px-8 py-4 rounded-full font-bold text-lg inline-flex items-center gap-2 transition-transform hover:scale-105">
            Book the Experience <ArrowRight className="w-5 h-5" />
          </button>
        </FadeIn>
      </Section>

      {/* Packages / Pricing (Psychological Strategy) */}
      <section id="packages" className="py-24 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-4">Transparent, Premium Pricing</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">Choose the perfect tier for your event. All packages include our stunning mobile bar setup and professional staff.</p>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Tier 1: Basic */}
            <FadeIn delay={0}>
              <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-2xl relative">
                <h3 className="text-2xl font-serif mb-2">The Classic Pour</h3>
                <p className="text-zinc-400 text-sm mb-6">Perfect for casual gatherings needing standard service.</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold">Starts $899</span>
                </div>
                <ul className="space-y-4 mb-8 text-sm text-zinc-300">
                  <li className="flex gap-3"><Check className="w-5 h-5 text-zinc-600 shrink-0" /> Mobile bar setup</li>
                  <li className="flex gap-3"><Check className="w-5 h-5 text-zinc-600 shrink-0" /> 1 Professional Bartender</li>
                  <li className="flex gap-3"><Check className="w-5 h-5 text-zinc-600 shrink-0" /> Beer, Wine, standard mixers</li>
                  <li className="flex gap-3"><Check className="w-5 h-5 text-zinc-600 shrink-0" /> Standard ice & garnishes</li>
                </ul>
                <button onClick={openModal} className="w-full py-3 rounded-lg font-semibold border border-zinc-700 hover:bg-zinc-800 transition-colors">Inquire Now</button>
              </div>
            </FadeIn>

            {/* Tier 2: Premium (Anchor/Decoy optimized) */}
            <FadeIn delay={0.1}>
              <div className="bg-zinc-900 border-2 border-gold-500 p-10 rounded-2xl relative transform lg:-translate-y-4 shadow-2xl shadow-gold-500/10">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-500 text-zinc-950 font-bold px-4 py-1 rounded-full text-xs tracking-wider uppercase">
                  Most Popular
                </div>
                <h3 className="text-2xl font-serif mb-2 text-gold-500">The Signature Mix</h3>
                <p className="text-zinc-400 text-sm mb-6">The definitive cocktail experience for weddings & corporate.</p>
                <div className="mb-8 flex items-baseline gap-2">
                  <span className="text-4xl font-bold">Starts $1,499</span>
                </div>
                <ul className="space-y-4 mb-8 text-sm font-medium">
                  <li className="flex gap-3"><Check className="w-5 h-5 text-gold-500 shrink-0" /> Premium Mobile Bar & Lounge Setup</li>
                  <li className="flex gap-3"><Check className="w-5 h-5 text-gold-500 shrink-0" /> 2 Master Mixologists</li>
                  <li className="flex gap-3"><Check className="w-5 h-5 text-gold-500 shrink-0" /> 3 Custom "Signature Cocktails"</li>
                  <li className="flex gap-3"><Check className="w-5 h-5 text-gold-500 shrink-0" /> Fresh juices & premium garnishes</li>
                  <li className="flex gap-3"><Check className="w-5 h-5 text-gold-500 shrink-0" /> Customized print menus</li>
                </ul>
                <button onClick={openModal} className="w-full py-4 rounded-lg font-bold bg-gold-500 text-zinc-950 hover:bg-gold-400 transition-colors">Book The Signature</button>
              </div>
            </FadeIn>

            {/* Tier 3: Luxury */}
            <FadeIn delay={0.2}>
              <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-2xl relative">
                <h3 className="text-2xl font-serif mb-2">The VIP Experience</h3>
                <p className="text-zinc-400 text-sm mb-6">High-end presentation for galas and luxury events.</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold">Starts $2,499</span>
                </div>
                <ul className="space-y-4 mb-8 text-sm text-zinc-300">
                  <li className="flex gap-3"><Check className="w-5 h-5 text-zinc-600 shrink-0" /> Everything in Premium</li>
                  <li className="flex gap-3"><Check className="w-5 h-5 text-zinc-600 shrink-0" /> Top-shelf spirit selection</li>
                  <li className="flex gap-3"><Check className="w-5 h-5 text-zinc-600 shrink-0" /> Interactive elements (Smoke/Fire)</li>
                  <li className="flex gap-3"><Check className="w-5 h-5 text-zinc-600 shrink-0" /> Custom branded bar front</li>
                </ul>
                <button onClick={openModal} className="w-full py-3 rounded-lg font-semibold border border-zinc-700 hover:bg-zinc-800 transition-colors">Inquire Now</button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Gallery / Visual Proof */}
      <section id="gallery" className="py-4 md:py-20 overflow-hidden">
        <FadeIn className="px-6 md:px-12 max-w-7xl mx-auto mb-10 text-center">
             <h2 className="font-serif text-4xl md:text-5xl mb-4">Instagrammable Moments</h2>
             <p className="text-zinc-400 max-w-2xl mx-auto text-lg">Aesthetic cocktails crafted for the camera, and the palate.</p>
        </FadeIn>
        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory gap-4 px-6 md:grid md:grid-cols-4 md:gap-4 md:px-12 max-w-[1600px] mx-auto pb-8">
          {[
            "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1555597673-aeeac78beee9?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1470337458703-4f53f446c18a?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1609951651556-5334e2706168?auto=format&fit=crop&q=80&w=600"
          ].map((src, i) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              key={i} 
              className="min-w-[80vw] sm:min-w-[300px] md:min-w-0 aspect-[3/4] rounded-2xl overflow-hidden snap-center relative group"
            >
              <img src={src} alt="Cocktail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <Section id="how-it-works" className="bg-zinc-950">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Seamless Setup</h2>
          <p className="text-zinc-400">Three easy steps to securing the best drinks in town.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 text-center max-w-4xl mx-auto relative">
          <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-px bg-zinc-800" />
          {[
            { step: '01', title: 'Consultation', desc: 'Tell us about your event, guest count, and vibe. We reply fast.' },
            { step: '02', title: 'Menu Curation', desc: 'We design custom cocktails tailored to your taste and theme.' },
            { step: '03', title: 'The Event', desc: 'We arrive early, set up beautifully, and pour perfection all night.' }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.15} className="relative z-10">
              <div className="w-14 h-14 mx-auto bg-zinc-900 border border-zinc-700 rounded-full flex items-center justify-center font-serif text-gold-500 font-bold mb-6">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Urgency & Final CTA */}
      <section className="relative overflow-hidden py-32 bg-zinc-900 border-y border-zinc-800">
         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Dates for Summer 2026 are filling up fast.</h2>
            <p className="text-xl text-zinc-300 mb-10 font-light">
              Don't leave the bar to chance. Secure your date now and let us handle the rest.
              <br/>Lock in your date with just a 20% deposit.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={openModal} className="bg-gold-500 hover:bg-gold-400 text-zinc-950 px-8 py-5 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all">
                Check My Date <Clock className="w-5 h-5" />
              </button>
              <button onClick={openModal} className="bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-5 rounded-lg font-semibold text-lg flex items-center justify-center transition-all">
                View Packages
              </button>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 py-16 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GlassWater className="text-gold-500 w-6 h-6" />
              <span className="font-serif text-xl font-bold">Booze.</span>
            </div>
            <p className="text-zinc-500 text-sm max-w-xs">Premium mobile bartending services creating unforgettable experiences through craft cocktails.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 md:gap-16 text-sm text-zinc-400">
            <div className="flex flex-col gap-3">
              <span className="text-white font-semibold">Links</span>
              <a href="#services" className="hover:text-gold-500 pb-16 md:pb-0">Services</a>
            </div>
             <div className="flex flex-col gap-3">
              <span className="text-white font-semibold">Contact</span>
              <span>hello@boozemobilebar.com</span>
              <span>(555) 123-4567</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA (Only visible on small screens when scrolled) */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div 
            initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }}
            className="md:hidden fixed bottom-6 left-6 right-6 z-40"
          >
            <button onClick={openModal} className="w-full shadow-2xl shadow-gold-500/20 bg-gold-500 text-zinc-950 font-bold py-4 rounded-xl flex items-center justify-center gap-2 text-lg">
              Book Your Event <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
