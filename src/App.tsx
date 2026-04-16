import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function LandingPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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
    <div className="bg-background text-on-background font-body min-h-screen flex flex-col selection:bg-primary-fixed selection:text-on-primary-fixed">
      <header className="fixed top-0 w-full z-50 bg-[#f3faff]/80 backdrop-blur-xl">
        <nav className="flex justify-between items-center px-8 py-4 max-w-full mx-auto">
          <div className="flex items-center gap-8">
            <span className="text-xl font-bold tracking-tighter text-[#071e27] font-headline">Logic Automation</span>
          </div>
        </nav>
        <div className="bg-[#e6f6ff] h-[1px]"></div>
      </header>

      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tighter text-on-surface leading-[1.1]">
                Automate Your <br />
                <span className="text-primary italic">Workflow.</span>
              </h1>
              <p className="text-lg text-on-surface-variant max-w-lg leading-relaxed">
                Streamline operations, reduce manual errors, and scale your business with custom automation solutions built for modern teams.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6 bg-surface-container-low p-8 rounded-xl border border-outline-variant/30">
            <h2 className="text-2xl font-bold font-headline mb-6">Request Consultation</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-label font-medium mb-1">Name</label>
                <input name="name" value={formData.name} onChange={handleChange} required type="text" className="w-full p-3 rounded bg-surface border border-outline-variant focus:outline-none focus:border-primary" />
              </div>
              <div>
                <label className="block text-sm font-label font-medium mb-1">Email</label>
                <input name="email" value={formData.email} onChange={handleChange} required type="email" className="w-full p-3 rounded bg-surface border border-outline-variant focus:outline-none focus:border-primary" />
              </div>
              <div>
                <label className="block text-sm font-label font-medium mb-1">Company</label>
                <input name="company" value={formData.company} onChange={handleChange} required type="text" className="w-full p-3 rounded bg-surface border border-outline-variant focus:outline-none focus:border-primary" />
              </div>
              <div>
                <label className="block text-sm font-label font-medium mb-1">Project Details</label>
                <textarea name="details" value={formData.details} onChange={handleChange} required rows={4} className="w-full p-3 rounded bg-surface border border-outline-variant focus:outline-none focus:border-primary"></textarea>
              </div>
              <button disabled={loading} type="submit" className="w-full py-3 px-6 bg-primary text-on-primary rounded font-label font-semibold hover:bg-surface-tint transition-colors disabled:opacity-50">
                {loading ? 'Submitting...' : 'Submit Request'}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

function SuccessPage() {
  return (
    <div className="bg-background text-on-background font-body min-h-screen flex flex-col selection:bg-primary-fixed selection:text-on-primary-fixed">
      <header className="fixed top-0 w-full z-50 bg-[#f3faff]/80 backdrop-blur-xl">
        <nav className="flex justify-between items-center px-8 py-4 max-w-full mx-auto">
          <div className="flex items-center gap-8">
            <span className="text-xl font-bold tracking-tighter text-[#071e27] font-headline">Logic Automation</span>
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
                Transaction Verified
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tighter text-on-surface leading-[1.1]">
                Consultation <br />
                <span className="text-primary italic">Requested.</span>
              </h1>
            </div>
            <p className="text-lg text-on-surface-variant max-w-lg leading-relaxed">
              Our engineering team has received your details. We'll reach out within 24 hours to schedule your technical audit. Your precision-focused transformation begins now.
            </p>
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