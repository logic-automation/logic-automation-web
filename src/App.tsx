import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function LandingPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', details: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      
      const result = await response.json();
      if (result.success) {
        navigate('/success');
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      alert('Error submitting form');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-surface font-body text-on-surface selection:bg-secondary-container">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-sm dark:shadow-none">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <div className="text-xl font-bold tracking-tighter text-slate-900 dark:text-slate-50 font-headline cursor-pointer" onClick={() => { window.scrollTo(0,0); navigate('/'); }}>Logic Automation</div>
          <div className="hidden md:flex gap-8 items-center">
            <a className="font-headline font-semibold tracking-tight text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-300 ease-in-out" href="#services">Services</a>
            <a className="font-headline font-semibold tracking-tight text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-300 ease-in-out" href="#about">About</a>
            <a className="font-headline font-semibold tracking-tight text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-300 ease-in-out" href="#workflow">Workflows</a>
            <a className="font-headline font-semibold tracking-tight text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-300 ease-in-out" href="#contact">Contact</a>
            <a className="bg-primary text-on-primary px-6 py-2 rounded-xl font-headline font-semibold hover:opacity-90 transition-opacity" href="#contact">Get Started</a>
          </div>
          {/* Mobile Menu Icon */}
          <div className="md:hidden cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span className="material-symbols-outlined text-on-surface">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-950 border-t border-outline-variant/20 absolute top-full w-full left-0 flex flex-col px-8 py-4 shadow-lg">
            <a className="font-headline font-semibold tracking-tight text-slate-600 dark:text-slate-400 py-3 border-b border-outline-variant/10" href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a className="font-headline font-semibold tracking-tight text-slate-600 dark:text-slate-400 py-3 border-b border-outline-variant/10" href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a className="font-headline font-semibold tracking-tight text-slate-600 dark:text-slate-400 py-3 border-b border-outline-variant/10" href="#workflow" onClick={() => setIsMobileMenuOpen(false)}>Workflows</a>
            <a className="font-headline font-semibold tracking-tight text-slate-600 dark:text-slate-400 py-3 border-b border-outline-variant/10" href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            <div className="pt-4">
              <a className="bg-primary text-on-primary px-6 py-3 rounded-xl font-headline font-semibold text-center block w-full" href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Get Started</a>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[600px] lg:min-h-[800px] flex items-center px-8 max-w-7xl mx-auto overflow-hidden py-24 lg:py-0">
          <div className="grid lg:grid-cols-12 gap-12 items-center w-full">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-block px-3 py-1 bg-surface-container-highest text-primary text-xs font-bold tracking-[0.05em] uppercase rounded-full">
                Next-Gen Logic Systems
              </div>
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface leading-[1.1]">
                Streamline Your Business with <span className="text-primary">Architectural Automation.</span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
                We design custom software and intelligent workflows that scale with your ambitions. Precision engineering for the modern enterprise.
              </p>
              <div className="flex flex-wrap gap-4">
                <a className="gradient-cta text-on-primary px-8 py-4 rounded-xl font-headline font-bold text-lg diffusion-shadow hover:scale-[1.02] transition-transform inline-block" href="#services">
                  View Solutions
                </a>
                <a className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-xl font-headline font-bold text-lg hover:bg-surface-variant transition-colors" href="#workflow">
                  Technical Specs
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="w-full aspect-square rounded-3xl overflow-hidden diffusion-shadow">
                <img className="w-full h-full object-cover" data-alt="Abstract 3D visualization of interconnected blue glass nodes and circuits representing complex digital logic and automated workflows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaHaNBWrab42eZGL0hf6ZcwT1EkD8kTrS5QoccAXGOGGD64cIWNWV6Gq2Su6jI4jzEV_3h_WKxxzqb5mi7OFf9lSJaJTEgH4GlC6I2MmWGNNQNq-B2fgN4gWeWVMSOig2uU5GE1e2v5KRgJ-tJCr-IZWUoH3y1jCwQYiSXPk40YFDx0D3MCbIWjc7UXzHWxg4c9pzyX0Af3NvR0uYAlB4kdaXWukZRwcigYEM0nd-AAkck6vPlYqRpO8F4IFLlVPEv-6SKzZsWqw" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-xl diffusion-shadow flex items-center gap-4 max-w-xs">
                <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined" data-weight="fill">speed</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-on-surface">99.9% Efficiency</div>
                  <div className="text-xs text-on-surface-variant">Architecture-led performance</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section (Bento Grid Style) */}
        <section className="py-24 bg-surface-container-low" id="services">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-16">
              <h2 className="label-md font-bold uppercase tracking-[0.05em] text-primary mb-2">Capabilities</h2>
              <h3 className="font-headline text-4xl font-bold tracking-tight text-on-surface">Precision Systems</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="bg-surface-container-lowest p-10 rounded-xl diffusion-shadow logic-line group hover:translate-y-[-4px] transition-all duration-300">
                <div className="w-14 h-14 bg-surface-container-low text-primary rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-3xl">developer_mode</span>
                </div>
                <h4 className="font-headline text-2xl font-bold mb-4">Custom Software Development</h4>
                <p className="text-on-surface-variant leading-relaxed">
                  Bespoke architectures built to solve your specific scaling challenges. We write clean, high-performance code for long-term reliability.
                </p>
              </div>
              {/* Service Card 2 */}
              <div className="bg-surface-container-lowest p-10 rounded-xl diffusion-shadow logic-line group hover:translate-y-[-4px] transition-all duration-300">
                <div className="w-14 h-14 bg-surface-container-low text-primary rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-3xl">account_tree</span>
                </div>
                <h4 className="font-headline text-2xl font-bold mb-4">Workflow Optimization</h4>
                <p className="text-on-surface-variant leading-relaxed">
                  Mapping and automating manual processes to eliminate bottlenecks and human error. Fluid operations at every touchpoint.
                </p>
              </div>
              {/* Service Card 3 */}
              <div className="bg-surface-container-lowest p-10 rounded-xl diffusion-shadow logic-line group hover:translate-y-[-4px] transition-all duration-300">
                <div className="w-14 h-14 bg-surface-container-low text-primary rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-3xl">psychology</span>
                </div>
                <h4 className="font-headline text-2xl font-bold mb-4">AI Integration</h4>
                <p className="text-on-surface-variant leading-relaxed">
                  Injecting intelligent decision-making into your existing stack using state-of-the-art machine learning models and LLMs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Process */}
        <section className="py-24 bg-surface overflow-hidden" id="workflow">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="label-md font-bold uppercase tracking-[0.05em] text-tertiary mb-2">The Engine Room</h2>
                <h3 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface">Our Deployment Pipeline</h3>
              </div>
              <div className="hidden md:block">
                <span className="material-symbols-outlined text-surface-container-highest text-[120px] select-none">architecture</span>
              </div>
            </div>
            <div className="relative grid md:grid-cols-4 gap-0 border-t border-outline-variant/20">
              {/* Step 1 */}
              <div className="pt-8 pr-8 relative group">
                <div className="text-primary font-bold font-headline text-6xl opacity-20 mb-4 group-hover:opacity-100 transition-opacity">01</div>
                <h5 className="text-xl font-bold mb-2">Consult</h5>
                <p className="text-on-surface-variant text-sm leading-relaxed">Identifying infrastructure gaps and operational friction points through deep analysis.</p>
              </div>
              {/* Step 2 */}
              <div className="pt-8 pr-8 relative group">
                <div className="text-primary font-bold font-headline text-6xl opacity-20 mb-4 group-hover:opacity-100 transition-opacity">02</div>
                <h5 className="text-xl font-bold mb-2">Design</h5>
                <p className="text-on-surface-variant text-sm leading-relaxed">Architecting a scalable solution that integrates seamlessly with your existing tech stack.</p>
              </div>
              {/* Step 3 */}
              <div className="pt-8 pr-8 relative group">
                <div className="text-primary font-bold font-headline text-6xl opacity-20 mb-4 group-hover:opacity-100 transition-opacity">03</div>
                <h5 className="text-xl font-bold mb-2">Deploy</h5>
                <p className="text-on-surface-variant text-sm leading-relaxed">Executing with surgical precision, ensuring zero downtime and immediate ROI.</p>
              </div>
              {/* Step 4 */}
              <div className="pt-8 relative group">
                <div className="text-primary font-bold font-headline text-6xl opacity-20 mb-4 group-hover:opacity-100 transition-opacity">04</div>
                <h5 className="text-xl font-bold mb-2">Optimize</h5>
                <p className="text-on-surface-variant text-sm leading-relaxed">Continuous refinement based on data streams to maintain peak operational performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 relative" id="about">
          <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-64">
                  <img className="w-full h-full object-cover" data-alt="Diverse team of software engineers working in a minimalist high-tech office with large windows and bright natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuuRssbJkbE00sGmNTVXC7feYjQUZSSGIg5CysXevMpS5jftLBHJsSbAwNGxTNlkj5YseKzadKx5GAucuigxTVDaZZmg9KMX9l8RFEa79E_-7Z-VZVLPyi0jjY2YriN7SkrrP-a9A66Dtaisrru3tIqCDHD1Izw8yWqBT7ldnmDyzKroZ3xbDDlFL9SkmttVSVgdXFEdSAa_pl7eAAMxfwXg0v8Jn8wgAhkqp7L0uHq1s2v6dNPu1YfDWQamiwxTzVZSchwbdo8g" />
                </div>
                <div className="bg-tertiary p-8 rounded-2xl text-on-tertiary">
                  <div className="text-4xl font-bold mb-1">12+</div>
                  <div className="text-sm font-medium opacity-80">Years Expertise</div>
                </div>
              </div>
              <div className="pt-12 space-y-4">
                <div className="bg-primary p-8 rounded-2xl text-on-primary">
                  <div className="text-4xl font-bold mb-1">500+</div>
                  <div className="text-sm font-medium opacity-80">Workflows Built</div>
                </div>
                <div className="rounded-2xl overflow-hidden h-64">
                  <img className="w-full h-full object-cover" data-alt="Macro shot of a high-end computer motherboard with glowing blue fiber optic cables highlighting precision data transfer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3pfocYmOlmLeLTHKV6ebNmLIHIy2CFVPyaHYqizrH7EuEffbiK4KfWEz986Nk0i6f88bHVG5S3fIutjrCtIA-yN6bttZqoVPFFwNn5a6C3a2XaPXzmYuJXGcOJqVmSZUToazmCrwcFWtsb-BKSc4DEUdGqsFelmElXsjeOSgVAYFGjaC3uc7qL8J7N-auLCnz9CtO1VeEPyQYTF8blHEkbfxzgpIJolYegR4eNtMkAo3k9Tq3ASFjiRsAouXR7qTd1tBCg5jv7w" />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="label-md font-bold uppercase tracking-[0.05em] text-primary mb-2">Our Philosophy</h2>
              <h3 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-8">Precision and Fluidity.</h3>
              <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
                <p>
                  Logic Automation was founded on the belief that software should be an asset, not an obstacle. We reject the "standard dashboard" aesthetic for high-end, architectural systems that feel like premium instruments.
                </p>
                <p>
                  Every workflow we build is a balance of rigorous technical logic and the fluidity required for human interaction. We don't just automate; we architect performance.
                </p>
                <div className="pt-4 flex items-center gap-6">
                  <img className="w-16 h-16 rounded-full object-cover outline outline-2 outline-primary outline-offset-4" data-alt="Professional headshot of a man in his late 30s, creative director of a tech firm, soft lighting, blurred office background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpVHYTdr2DEVXuti3t-Wxj8ib_Duasnimnvf78S4oCTB9H4YR6ReVIwmzcI2Z8NP2DYUTHsPOQ794y2mUG_QvZ_3PKm4hLomXbqPx1bWwOMzjeIEjpmk7dmZARpU-k1I7Y00t1SPCVYEbw5sn5F6bXOXWoPzLRQrfDkKEOL1tBySxHfhswNKayNKMXm6rkyt_NV8bxYNGo3E79FYdBGaJoN68UaaAK2yhrSP6VgrUOidwIi9W_IUb5b2pGcKKC1rtZJYFQACqgVQ" />
                  <div>
                    <div className="font-bold text-on-surface">Marcus Thorne</div>
                    <div className="text-sm text-primary font-semibold">Chief Architect, Logic Automation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24 bg-surface-container-low" id="contact">
          <div className="max-w-7xl mx-auto px-8">
            <div className="bg-surface-container-lowest rounded-3xl overflow-hidden flex flex-col lg:flex-row diffusion-shadow">
              <div className="lg:w-1/3 gradient-cta p-12 text-on-primary">
                <h4 className="font-headline text-3xl font-bold mb-6">Ready to Architect Your Future?</h4>
                <p className="opacity-80">Connect with our engineering team for a technical audit of your current processes.</p>
              </div>
              <div className="lg:w-2/3 p-12 lg:p-16">
                <form className="grid md:grid-cols-2 gap-8" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Name</label>
                    <input className="w-full bg-white border border-outline-variant/30 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-on-surface" placeholder="John Doe" type="text" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Email</label>
                    <input className="w-full bg-white border border-outline-variant/30 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-on-surface" placeholder="john@enterprise.com" type="email" name="email" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">How can we help?</label>
                    <textarea className="w-full bg-white border border-outline-variant/30 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-on-surface" placeholder="Describe your current workflow challenge..." rows={4} name="details" value={formData.details} onChange={handleChange} required></textarea>
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <button className="w-full md:w-auto gradient-cta text-on-primary px-12 py-4 rounded-xl font-headline font-bold text-lg diffusion-shadow hover:opacity-90 transition-opacity disabled:opacity-50" type="submit" disabled={loading}>
                      {loading ? 'Submitting...' : 'Initiate Consultation'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 max-w-7xl mx-auto">
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <div className="font-headline font-bold text-slate-900 dark:text-slate-100 mb-4">Logic Automation</div>
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm mb-4">
              <span className="material-symbols-outlined text-[16px]">location_on</span>
              <span>Riverside, CA</span>
            </div>
            <p className="font-body text-sm text-slate-500 dark:text-slate-400">© 2026 Logic Automation. Architectural precision in workflow design.</p>
          </div>
          <div className="flex gap-8">
            <a className="text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-opacity duration-200 text-sm" href="#">Privacy Policy</a>
            <a className="text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-opacity duration-200 text-sm" href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SuccessPage() {
  const navigate = useNavigate();
  return (
    <div className="bg-background text-on-background font-body min-h-screen flex flex-col selection:bg-primary-fixed selection:text-on-primary-fixed">
      <header className="fixed top-0 w-full z-50 bg-[#f3faff]/80 backdrop-blur-xl">
        <nav className="flex justify-between items-center px-8 py-4 max-w-full mx-auto">
          <div className="flex items-center gap-8">
            <span 
              className="text-xl font-bold tracking-tighter text-[#071e27] font-headline cursor-pointer" 
              onClick={() => navigate('/')}
            >
              Logic Automation
            </span>
          </div>
        </nav>
        <div className="bg-[#e6f6ff] h-[1px]"></div>
      </header>
      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-tertiary font-label text-xs uppercase tracking-[0.1em] font-semibold">
                <span className="w-8 h-[1px] bg-tertiary"></span>
                Request Confirmed
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tighter text-on-surface leading-[1.1]">
                Consultation <br />
                <span className="text-primary italic">Requested.</span>
              </h1>
            </div>
            <p className="text-lg text-on-surface-variant max-w-lg leading-relaxed">
              Our engineering team has received your details. We'll reach out to schedule your technical audit. Your precision-focused transformation begins now.
            </p>
            <div className="pt-4">
              <button 
                onClick={() => navigate('/')}
                className="bg-primary text-on-primary px-8 py-4 rounded-xl font-headline font-bold text-lg hover:opacity-90 transition-opacity"
              >
                Return to Main Site
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}