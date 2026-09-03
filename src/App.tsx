import { FormEvent, useEffect, useState } from 'react';
import {
  ArrowRight,
  Award,
  Check,
  ChevronDown,
  Clock3,
  FileCheck2,
  Hammer,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  Quote,
  Ruler,
  Scissors,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from 'lucide-react';

const business = {
  name: 'Home Heaven Furnitures',
  phone: '9068973725',
  displayPhone: '+91 90689 73725',
  email: 'homeheavenfurnitures@gmail.com',
  whatsapp: '919068973725',
  city: 'Gurugram, Haryana',
};

const whatsappLink = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent('Hi Home Heaven Furnitures, I would like to get a quotation for sofa repair.')}`;

const images = {
  hero: 'https://images.pexels.com/photos/12289395/pexels-photo-12289395.jpeg?auto=compress&cs=tinysrgb&w=1600',
  room: 'https://images.pexels.com/photos/28853362/pexels-photo-28853362.jpeg?auto=compress&cs=tinysrgb&w=1200',
  sofa: 'https://images.pexels.com/photos/7018400/pexels-photo-7018400.jpeg?auto=compress&cs=tinysrgb&w=1000',
  craft: 'https://images.pexels.com/photos/279645/pexels-photo-279645.jpeg?auto=compress&cs=tinysrgb&w=1000',
  detail: 'https://images.pexels.com/photos/13201479/pexels-photo-13201479.jpeg?auto=compress&cs=tinysrgb&w=1000',
  bright: 'https://images.pexels.com/photos/12281850/pexels-photo-12281850.jpeg?auto=compress&cs=tinysrgb&w=1000',
};

const services = [
  { icon: Hammer, title: 'Sofa Repair', text: 'Restore structure, springs and finish with careful workmanship.' },
  { icon: Scissors, title: 'Sofa Fabric Change', text: 'A considered fabric refresh for a completely renewed look.' },
  { icon: Sparkles, title: 'Sofa Foam Replacement', text: 'Bring back the comfort and support your sofa once had.' },
  { icon: ShieldCheck, title: 'Leatherette Replacement', text: 'Clean, durable upholstery finishes for everyday living.' },
  { icon: Ruler, title: 'Recliner Repair', text: 'Thoughtful repairs for mechanisms, comfort and upholstery.' },
  { icon: Award, title: 'Chair Repair', text: 'Refresh dining, accent and occasional chairs beautifully.' },
  { icon: FileCheck2, title: 'Furniture Restoration', text: 'Give treasured pieces a refined second life at home.' },
  { icon: Scissors, title: 'Custom Upholstery', text: 'Tailored materials, textures and finishing for your space.' },
];

const areas = ['Golf Course Road', 'DLF Phase 1', 'DLF Phase 2', 'DLF Phase 4', 'DLF Phase 5', 'Sector 42', 'Sector 43', 'Sector 53', 'Sector 54', 'Sector 55', 'Sector 56', 'Golf Course Extension Road', 'Sector 58', 'Sector 59', 'Sector 60', 'Sector 61', 'Sector 62', 'Sector 63A', 'Sector 65', 'Sector 66', 'Sushant Lok', 'Nirvana Country', 'Ambience Island', 'South City 1', 'Palam Vihar'];

const faqs = [
  ['Do you provide sofa repair services in Gurugram?', 'Yes. Home Heaven Furnitures provides sofa repair and restoration services across Gurugram and nearby residential areas.'],
  ['Do you provide doorstep sofa repair?', 'We offer convenient doorstep service where the work is suitable to be completed at your home. We will discuss the best approach after seeing your furniture.'],
  ['Can you change my sofa fabric?', 'Yes. You can share sofa photos and we will help you explore suitable fabric, colour and finish options.'],
  ['Can you replace sofa foam?', 'Yes. Foam replacement can improve comfort, shape and support. We recommend the right option after understanding the sofa\u2019s use.'],
  ['Do you repair recliners?', 'Yes, we can discuss recliner upholstery and repair requirements over WhatsApp or phone.'],
  ['Do you provide leatherette replacement?', 'Yes. We work with leatherette replacement and can advise on finishes that suit your furniture.'],
  ['How can I get a quotation?', 'Send clear photos of your sofa on WhatsApp with your requirements. We will review them and discuss the quotation with you.'],
  ['Can I send sofa photos on WhatsApp?', 'Absolutely. Photo-led enquiries are the quickest way to begin.'],
  ['Which areas of Gurugram do you serve?', 'We serve homes across Gurugram, including Golf Course Road, DLF phases, key sectors and surrounding neighbourhoods.'],
  ['How long does sofa repair usually take?', 'Timing depends on the furniture, materials and scope of work. We will share a clear expectation before work begins.'],
];

function track(eventName: string): void {
  window.dispatchEvent(new CustomEvent(eventName));
}

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSent(true);
    track('form_submit');
  };

  const handleNav = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container header-inner">
          <a href="#home" className="brand" onClick={handleNav} aria-label="Home Heaven Furnitures home">
            <img src="/images/q9ls7ixmvbbpefiwcql5_(1).png" alt="Home Heaven Furnitures emblem" />
            <span><strong>HOME HEAVEN</strong><small>FURNITURES</small></span>
          </a>
          <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
            <a href="#home" onClick={handleNav}>Home</a>
            <a href="#services" onClick={handleNav}>Services</a>
            <a href="#work" onClick={handleNav}>Our Work</a>
            <a href="#why" onClick={handleNav}>Why Home Heaven</a>
            <a href="#areas" onClick={handleNav}>Areas We Serve</a>
            <a href="#contact" onClick={handleNav}>Contact</a>
          </nav>
          <div className="header-actions">
            <a className="header-call" href={`tel:+91${business.phone}`} onClick={() => track('phone_click')}><Phone size={15} /> Call Now</a>
            <a className="button button-gold button-small" href={whatsappLink} target="_blank" rel="noreferrer" onClick={() => track('whatsapp_click')}><WhatsAppIcon size={16} /> WhatsApp</a>
          </div>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-image" style={{ backgroundImage: `url(${images.hero})` }} />
          <div className="hero-overlay" />
          <div className="container hero-content">
            <div className="hero-copy reveal">
              <div className="eyebrow light"><span /> Gurugram's furniture restoration specialists</div>
              <h1>Give your sofa<br /><em>a second life.</em></h1>
              <p className="hero-lead">Premium sofa repair and furniture restoration for homeowners in Gurugram.</p>
              <p className="hero-support">Expert sofa repair, fabric change, foam replacement and furniture restoration — delivered with professional craftsmanship at your doorstep.</p>
              <div className="hero-ctas">
                <a className="button button-gold" href="#contact" onClick={() => { track('quote_click'); }}><span>Get Free Quote</span><ArrowRight size={17} /></a>
                <a className="button button-ghost" href={whatsappLink} target="_blank" rel="noreferrer" onClick={() => track('whatsapp_click')}><WhatsAppIcon size={17} /><span>WhatsApp Us</span></a>
              </div>
              <a className="hero-phone" href={`tel:+91${business.phone}`} onClick={() => track('phone_click')}><Phone size={15} /> Call {business.displayPhone}</a>
            </div>
            <div className="hero-note reveal delay-1"><span className="note-line" /><span>Serving homes<br />across Gurugram</span></div>
          </div>
          <div className="scroll-cue"><span /> Scroll to explore</div>
        </section>

        <section className="trust-strip">
          <div className="container trust-grid">
            {[[ShieldCheck, 'Professional Craftsmanship'], [Sparkles, 'Premium Materials'], [Clock3, 'Doorstep Service'], [MapPin, 'Gurugram Coverage']].map(([Icon, text]) => <div className="trust-item" key={text as string}><Icon size={20} /><span>{text as string}</span></div>)}
          </div>
        </section>

        <section className="section intro-section" id="work">
          <div className="container split-intro">
            <div className="section-heading reveal"><div className="eyebrow">The smarter way to refresh your home</div><h2>Don't replace your sofa.<br /><em>Restore it.</em></h2></div>
            <div className="intro-copy reveal delay-1"><p>Your sofa may not need replacing. With the right materials and skilled workmanship, an old, damaged or uncomfortable sofa can look and feel like new again.</p><a className="text-link" href={whatsappLink} target="_blank" rel="noreferrer" onClick={() => track('whatsapp_click')}>Talk to a restoration expert <ArrowRight size={16} /></a></div>
          </div>
          <div className="container story-grid">
            <div className="story-card story-large reveal"><img src={images.sofa} alt="Elegant neutral sofa in a beautiful living room" loading="lazy" /><div className="story-label"><span>01</span> Worn, but worth saving</div></div>
            <div className="story-card story-small reveal delay-1"><img src={images.craft} alt="Artisan carefully working on sofa upholstery" loading="lazy" /><div className="story-label"><span>02</span> Craft with intention</div></div>
            <div className="story-card story-result reveal delay-2"><div className="result-mark"><Check size={22} /></div><div><span className="result-kicker">The result</span><strong>Beautifully renewed.</strong><p>Better comfort. A finish you can feel good about.</p></div></div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container"><div className="section-heading centered reveal"><div className="eyebrow">Thoughtful work, beautifully finished</div><h2>Furniture care for<br /><em>the way you live.</em></h2><p>From a simple fabric refresh to a complete makeover, we restore the pieces that make your home yours.</p></div>
            <div className="services-grid">{services.map(({ icon: Icon, title, text }, index) => <a className="service-card reveal" style={{ animationDelay: `${index * 60}ms` }} href="#contact" key={title} onClick={() => track('quote_click')}><div className="service-top"><span className="service-number">0{index + 1}</span><Icon size={24} /></div><h3>{title}</h3><p>{text}</p><span className="service-arrow"><ArrowRight size={17} /></span></a>)}</div>
          </div>
        </section>

        <section className="before-after section-dark">
          <div className="container before-grid"><div className="before-copy reveal"><div className="eyebrow light">A transformation worth seeing</div><h2>From worn out<br /><em>to beautiful again.</em></h2><p>Good furniture deserves more than a quick fix. We pay attention to comfort, proportion, materials and the details that make a restoration feel complete.</p><a className="button button-outline" href={whatsappLink} target="_blank" rel="noreferrer" onClick={() => track('whatsapp_click')}>Send your sofa photos <ArrowRight size={17} /></a></div><div className="before-image-wrap reveal delay-1"><div className="before-image"><img src={images.detail} alt="Refined sofa in a modern living room" loading="lazy" /><span>AFTER</span></div><div className="before-image before-secondary"><img src={images.bright} alt="Bright restored sofa interior" loading="lazy" /><span>DETAIL</span></div><div className="image-caption"><span>Restoration stories</span><strong>Built around your home.</strong></div></div></div>
        </section>

        <section className="section why-section" id="why"><div className="container"><div className="why-heading reveal"><div className="eyebrow">Why Home Heaven</div><h2>The care your<br /><em>home deserves.</em></h2><p>Premium doesn't have to mean complicated. It means doing the basics exceptionally well, from the first conversation to the final stitch.</p></div><div className="why-list">{[['01', 'Skilled Craftsmanship', 'Careful workmanship focused on quality and finishing.'], ['02', 'Premium Materials', 'Quality fabrics, foam and upholstery materials selected for your needs.'], ['03', 'Doorstep Convenience', 'Professional service designed around your convenience.'], ['04', 'Transparent Quotations', 'Clear communication before work begins.'], ['05', 'Attention to Detail', 'We focus on finishing, comfort and overall appearance.']].map(([num, title, text], index) => <div className="why-row reveal" style={{ animationDelay: `${index * 70}ms` }} key={num}><span className="why-num">{num}</span><h3>{title}</h3><p>{text}</p><ArrowRight size={18} /></div>)}</div></div></section>

        <section className="areas-section section-dark" id="areas"><div className="container areas-layout"><div className="areas-copy reveal"><div className="eyebrow light">Close to home</div><h2>Serving premium homes<br /><em>across Gurugram.</em></h2><p>Home Heaven Furnitures provides sofa repair and furniture restoration services across Gurugram, including some of the city's most established residential neighbourhoods.</p><a className="button button-gold" href={whatsappLink} target="_blank" rel="noreferrer" onClick={() => track('whatsapp_click')}>Check service availability <ArrowRight size={17} /></a></div><div className="areas-list reveal delay-1">{areas.map((area) => <span key={area}><MapPin size={13} /> {area}</span>)}</div></div></section>

        <section className="section reviews-section"><div className="container"><div className="reviews-top reveal"><div><div className="eyebrow">Words from the people we serve</div><h2>What our customers<br /><em>will say next.</em></h2></div><div className="reviews-note"><Quote size={28} /><p>Real customer reviews coming soon. We're building every relationship one beautifully restored piece at a time.</p></div></div><div className="review-grid">{['Your experience could be featured here.', 'Your honest review could help a Gurugram homeowner choose with confidence.', 'Share your restoration story with us.'].map((text, index) => <div className="review-card reveal" key={text}><div className="stars">{[1, 2, 3, 4, 5].map((star) => <Star size={14} fill="currentColor" key={star} />)}</div><p>"{text}"</p><div className="review-author"><span className="avatar">0{index + 1}</span><span><strong>Customer review</strong><small>Gurugram, Haryana</small></span></div></div>)}</div></div></section>

        <section className="process-section"><div className="container"><div className="section-heading centered light-heading reveal"><div className="eyebrow light">Simple from start to finish</div><h2>Getting your sofa<br /><em>restored is easy.</em></h2></div><div className="process-grid">{[['01', 'Send Photos', 'Share photos of your sofa on WhatsApp.'], ['02', 'Get a Quote', 'Discuss your requirements and receive a quotation.'], ['03', 'Choose Materials', 'Select from suitable fabric, foam and upholstery options.'], ['04', 'Enjoy the Transformation', 'Get your furniture professionally restored.']].map(([num, title, text], index) => <div className="process-step reveal" style={{ animationDelay: `${index * 80}ms` }} key={num}><span>{num}</span><div className="process-line" /><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>

        <section className="cta-section"><div className="container cta-inner reveal"><div><div className="eyebrow light">Ready when you are</div><h2>Your sofa deserves<br /><em>a second life.</em></h2><p>Send us a photo of your sofa and get started with a quotation.</p></div><div className="cta-actions"><a className="button button-gold" href="#contact" onClick={() => track('quote_click')}>Get Free Quote <ArrowRight size={17} /></a><a className="button button-ghost" href={whatsappLink} target="_blank" rel="noreferrer" onClick={() => track('whatsapp_click')}><WhatsAppIcon size={17} /> WhatsApp Home Heaven</a><a className="cta-call" href={`tel:+91${business.phone}`} onClick={() => track('phone_click')}><Phone size={15} /> {business.displayPhone}</a></div></div></section>

        <section className="section faq-section"><div className="container faq-layout"><div className="faq-heading reveal"><div className="eyebrow">Good to know</div><h2>Questions,<br /><em>answered.</em></h2><p>Still have a question? We're happy to help.</p><a className="text-link" href={whatsappLink} target="_blank" rel="noreferrer" onClick={() => track('whatsapp_click')}>Ask us on WhatsApp <ArrowRight size={16} /></a></div><div className="faq-list reveal delay-1">{faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? 'active' : ''}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><ChevronDown size={17} /></button>{openFaq === index && <p>{answer}</p>}</div>)}</div></div></section>

        <section className="contact-section" id="contact"><div className="container contact-layout"><div className="contact-copy reveal"><div className="eyebrow light">Let's restore your furniture</div><h2>Tell us about<br /><em>your sofa.</em></h2><p>Share a few details and we'll get back to you with the best next step.</p><div className="contact-details"><a href={`tel:+91${business.phone}`} onClick={() => track('phone_click')}><Phone size={18} /> {business.displayPhone}</a><a href={`mailto:${business.email}`}><Mail size={18} /> {business.email}</a><span><MapPin size={18} /> {business.city}</span></div></div><div className="form-card reveal delay-1">{formSent ? <div className="form-success"><div className="success-icon"><Check /></div><h3>Thank you for reaching out.</h3><p>Your enquiry is ready to be reviewed. For the quickest response, send your sofa photos directly on WhatsApp.</p><a className="button button-gold" href={whatsappLink} target="_blank" rel="noreferrer" onClick={() => track('whatsapp_click')}>Send photos on WhatsApp <ArrowRight size={17} /></a></div> : <form onSubmit={handleSubmit}><div className="form-heading"><span>01</span><h3>Request a free quote</h3></div><label>Your name<input required name="name" placeholder="Enter your name" /></label><div className="form-row"><label>Phone number<input required name="phone" type="tel" placeholder="Your phone number" /></label><label>Service required<select name="service" defaultValue=""><option value="" disabled>Select a service</option>{services.map((service) => <option key={service.title}>{service.title}</option>)}</select></label></div><label>Tell us a little more<textarea name="message" placeholder="What would you like us to help with?" rows={3} /></label><button className="button button-navy" type="submit">Request Free Quote <ArrowRight size={17} /></button><p className="form-note">Prefer WhatsApp? <a href={whatsappLink} target="_blank" rel="noreferrer" onClick={() => track('whatsapp_click')}>Send us photos directly.</a></p></form>}</div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-top"><div className="footer-brand"><a href="#home" className="brand"><img src="/images/q9ls7ixmvbbpefiwcql5_(1).png" alt="Home Heaven Furnitures emblem" /><span><strong>HOME HEAVEN</strong><small>FURNITURES</small></span></a><p>Premium sofa repair & furniture restoration in Gurugram.</p><div className="socials"><a href={whatsappLink} target="_blank" rel="noreferrer" aria-label="WhatsApp"><WhatsAppIcon size={17} /></a><a href={`mailto:${business.email}`} aria-label="Email"><Mail size={17} /></a><a href="#home" aria-label="Instagram"><Instagram size={17} /></a></div></div><div className="footer-col"><h4>Explore</h4><a href="#home">Home</a><a href="#services">Services</a><a href="#work">Our Work</a><a href="#areas">Areas We Serve</a><a href="#contact">Contact</a></div><div className="footer-col"><h4>Services</h4><a href="#services">Sofa Repair</a><a href="#services">Fabric Change</a><a href="#services">Foam Replacement</a><a href="#services">Recliner Repair</a><a href="#services">Furniture Restoration</a></div><div className="footer-col footer-contact"><h4>Contact</h4><a href={`tel:+91${business.phone}`}>{business.displayPhone}</a><a href={`mailto:${business.email}`}>{business.email}</a><span>{business.city}</span></div></div><div className="container footer-bottom"><span>© 2026 Home Heaven Furnitures. All Rights Reserved.</span><span>Crafted for considered homes.</span></div></footer>

      <div className="floating-actions"><a className="float-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" onClick={() => track('whatsapp_click')}><WhatsAppIcon size={26} /></a><a className="float-call" href={`tel:+91${business.phone}`} aria-label="Call Home Heaven Furnitures" onClick={() => track('phone_click')}><Phone size={24} /></a></div>
    </div>
  );
}

export default App;
