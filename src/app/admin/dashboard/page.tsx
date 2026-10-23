'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { 
  Users, 
  Layers, 
  Code2, 
  LogOut, 
  Plus, 
  Trash2, 
  Phone, 
  Mail, 
  ExternalLink,
  Clock, 
  Sparkles, 
  CheckCircle2, 
  LayoutDashboard,
  Search,
  ChevronRight,
  Filter,
  Eye
} from 'lucide-react';

export default function AdminDashboardPage() {
  const router = useRouter();
  // 3 Distinct Sidebar Pages / Sections
  const [activeSection, setActiveSection] = useState<'contacts' | 'products' | 'developers'>('contacts');

  const [contacts, setContacts] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [developers, setDevelopers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Add Product Form Modal
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [newProduct, setNewProduct] = useState({
    title: '',
    tagline: '',
    category: 'ERP Systems',
    description: '',
    features: '',
    dummyImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    badge: 'Enterprise',
  });
  const [productSaving, setProductSaving] = useState(false);

  // Add Developer Form Modal
  const [showAddDeveloper, setShowAddDeveloper] = useState(false);
  const [newDeveloper, setNewDeveloper] = useState({
    title: '',
    experience: '4+ Years',
    skills: 'Next.js 15, React 19, TypeScript, Tailwind CSS, Node.js',
    engagement: 'Full-Time / Part-Time / Hourly',
    availability: 'Immediate (Within 48 hrs)',
    description: '',
  });
  const [developerSaving, setDeveloperSaving] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('tansur_admin_session');
    if (!auth) {
      router.push('/admin/login');
      return;
    }
    fetchData();
  }, [router]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [contactsRes, productsRes, devsRes] = await Promise.all([
        fetch('/api/contact'),
        fetch('/api/products'),
        fetch('/api/developers'),
      ]);

      const [cData, pData, dData] = await Promise.all([
        contactsRes.json(),
        productsRes.json(),
        devsRes.json(),
      ]);

      if (cData.success) setContacts(cData.data || []);
      if (pData.success) setProducts(pData.data || []);
      if (dData.success) setDevelopers(dData.data || []);
    } catch (err) {
      console.error('Error fetching admin data', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/auth', { method: 'DELETE' });
    } catch (e) {}
    localStorage.removeItem('tansur_admin_session');
    router.push('/admin/login');
  };

  // Handle Add Product
  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    setProductSaving(true);
    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct),
      });
      const data = await res.json();
      if (data.success) {
        setShowAddProduct(false);
        setNewProduct({
          title: '',
          tagline: '',
          category: 'ERP Systems',
          description: '',
          features: '',
          dummyImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
          badge: 'Enterprise',
        });
        setNotification('Product added successfully! Now live on /products and homepage.');
        setTimeout(() => setNotification(''), 4000);
        fetchData();
      }
    } catch (err) {
      alert('Error saving product');
    } finally {
      setProductSaving(false);
    }
  };

  // Handle Add Developer
  const handleAddDeveloper = async (e: React.FormEvent) => {
    e.preventDefault();
    setDeveloperSaving(true);
    try {
      const res = await fetch('/api/developers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newDeveloper),
      });
      const data = await res.json();
      if (data.success) {
        setShowAddDeveloper(false);
        setNewDeveloper({
          title: '',
          experience: '4+ Years',
          skills: 'Next.js 15, React 19, TypeScript, Tailwind CSS, Node.js',
          engagement: 'Full-Time / Part-Time / Hourly',
          availability: 'Immediate (Within 48 hrs)',
          description: '',
        });
        setNotification('Developer role published! Now live on /hire-developers page.');
        setTimeout(() => setNotification(''), 4000);
        fetchData();
      }
    } catch (err) {
      alert('Error saving developer role');
    } finally {
      setDeveloperSaving(false);
    }
  };

  const handleDeleteProduct = async (id: string) => {
    if (!confirm('Remove this product from live catalog?')) return;
    try {
      const res = await fetch(`/api/products?id=${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setNotification('Product removed.');
        setTimeout(() => setNotification(''), 3000);
        fetchData();
      }
    } catch (e) {}
  };

  const handleDeleteDeveloper = async (title: string) => {
    if (!confirm(`Delete developer profile: "${title}"?`)) return;
    try {
      const res = await fetch(`/api/developers?title=${encodeURIComponent(title)}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setNotification('Developer profile deleted.');
        setTimeout(() => setNotification(''), 3000);
        fetchData();
      }
    } catch (e) {}
  };

  // Filtered contacts for DataTable
  const filteredContacts = contacts.filter((c) => {
    const term = searchTerm.toLowerCase();
    return (
      c.name?.toLowerCase().includes(term) ||
      c.phone?.toLowerCase().includes(term) ||
      c.email?.toLowerCase().includes(term) ||
      c.productInterest?.toLowerCase().includes(term) ||
      c.message?.toLowerCase().includes(term)
    );
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      
      {/* Top Header */}
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md px-6 py-3.5 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 bg-white/5 p-1 rounded-xl">
            <Image src="/logo.png" alt="Tansur Logo" fill className="object-contain" />
          </div>
          <div>
            <h1 className="font-black text-base text-white tracking-tight flex items-center gap-2">
              <span>Tansur Control Center</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800">
                Connected
              </span>
            </h1>
            <span className="text-[11px] text-cyan-400">Master Administration Suite</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/"
            target="_blank"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-xl border border-slate-700 transition-colors"
          >
            <span>Public Site</span>
            <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
          </a>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-red-400 hover:text-red-300 bg-red-950/40 hover:bg-red-900/40 px-3.5 py-1.5 rounded-xl border border-red-900/50 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* Main Layout: Aside Sidebar + Content Studio */}
      <div className="flex-1 flex flex-col md:flex-row">
        
        {/* ASIDE SIDEBAR (3 Distinct Navigation Pages) */}
        <aside className="w-full md:w-64 bg-slate-900/90 border-r border-slate-800 p-4 space-y-6 flex-shrink-0">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-3 block mb-2">
              Navigation Pages
            </span>
            <nav className="space-y-1">
              
              {/* Page 1: Contact Leads & DataTable */}
              <button
                onClick={() => setActiveSection('contacts')}
                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-xs font-bold transition-all text-left ${
                  activeSection === 'contacts'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Users className="w-4 h-4" />
                  <span>Contact Leads</span>
                </div>
                <span className={`px-2 py-0.5 text-[10px] font-black rounded-full ${
                  activeSection === 'contacts' ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-300'
                }`}>
                  {contacts.length}
                </span>
              </button>

              {/* Page 2: Manage Products */}
              <button
                onClick={() => setActiveSection('products')}
                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-xs font-bold transition-all text-left ${
                  activeSection === 'products'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Layers className="w-4 h-4" />
                  <span>Our Products</span>
                </div>
                <span className={`px-2 py-0.5 text-[10px] font-black rounded-full ${
                  activeSection === 'products' ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-300'
                }`}>
                  {products.length}
                </span>
              </button>

              {/* Page 3: Hire Developers Manager */}
              <button
                onClick={() => setActiveSection('developers')}
                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-xs font-bold transition-all text-left ${
                  activeSection === 'developers'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Code2 className="w-4 h-4" />
                  <span>Hire Developers</span>
                </div>
                <span className={`px-2 py-0.5 text-[10px] font-black rounded-full ${
                  activeSection === 'developers' ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-300'
                }`}>
                  {developers.length}
                </span>
              </button>

            </nav>
          </div>

          {/* Quick Metrics Card */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400 block">
              System Overview
            </span>
            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-lg font-black text-white">{contacts.length}</div>
                <div className="text-[10px] text-slate-400">Total Leads</div>
              </div>
              <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-lg font-black text-cyan-400">{products.length}</div>
                <div className="text-[10px] text-slate-400">Live Products</div>
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN STUDIO CONTENT AREA */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          
          {/* Global Notification Toast */}
          {notification && (
            <div className="mb-6 p-4 bg-emerald-950 border border-emerald-800 rounded-2xl text-emerald-300 text-xs sm:text-sm flex items-center gap-3 shadow-lg animate-in fade-in duration-200">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400" />
              <span>{notification}</span>
            </div>
          )}

          {/* ================= PAGE 1: CONTACTS INQUIRIES DATATABLE ================= */}
          {activeSection === 'contacts' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black text-white">Contact & Demo Inquiries</h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Structured relational DataTable showing submissions received from public contact forms.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="relative">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search name, phone, product..."
                      className="w-64 pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                  </div>
                  <button
                    onClick={fetchData}
                    className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-xs font-bold text-slate-300 rounded-xl border border-slate-800"
                  >
                    Refresh
                  </button>
                </div>
              </div>

              {/* DATATABLE */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-950 text-slate-400 uppercase tracking-wider text-[10px] font-black border-b border-slate-800">
                      <tr>
                        <th className="py-3.5 px-4">Date / Time</th>
                        <th className="py-3.5 px-4">Name</th>
                        <th className="py-3.5 px-4">Phone / WhatsApp</th>
                        <th className="py-3.5 px-4">Email</th>
                        <th className="py-3.5 px-4">Project / Product Type</th>
                        <th className="py-3.5 px-4">Message / Requirements</th>
                        <th className="py-3.5 px-4 text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/80">
                      {loading ? (
                        <tr>
                          <td colSpan={7} className="py-12 text-center text-slate-500">
                            Loading DataTable records...
                          </td>
                        </tr>
                      ) : filteredContacts.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="py-12 text-center text-slate-500">
                            No contact inquiries found matching search criteria.
                          </td>
                        </tr>
                      ) : (
                        filteredContacts.map((c, idx) => (
                          <tr key={c._id || idx} className="hover:bg-slate-800/40 transition-colors">
                            <td className="py-3.5 px-4 whitespace-nowrap text-slate-400 font-mono text-[11px]">
                              {new Date(c.createdAt).toLocaleDateString()} <br />
                              <span className="text-[10px] text-slate-500">{new Date(c.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                            </td>
                            <td className="py-3.5 px-4 font-bold text-white whitespace-nowrap">
                              {c.name}
                            </td>
                            <td className="py-3.5 px-4 whitespace-nowrap">
                              <a
                                href={`https://wa.me/${c.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi ${c.name}, contacting you from Tansur Software Solutions regarding your inquiry.`)}`}
                                target="_blank"
                                rel="noreferrer"
                                className="font-bold text-emerald-400 hover:underline flex items-center gap-1.5"
                              >
                                <Phone className="w-3.5 h-3.5" />
                                <span>{c.phone}</span>
                              </a>
                            </td>
                            <td className="py-3.5 px-4 text-slate-300 whitespace-nowrap">
                              {c.email || 'N/A'}
                            </td>
                            <td className="py-3.5 px-4">
                              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-950 text-blue-300 border border-blue-800 whitespace-nowrap">
                                {c.productInterest || 'General System'}
                              </span>
                            </td>
                            <td className="py-3.5 px-4 text-slate-400 max-w-xs truncate" title={c.message}>
                              {c.message}
                            </td>
                            <td className="py-3.5 px-4 text-center whitespace-nowrap">
                              <a
                                href={`https://wa.me/${c.phone.replace(/[^0-9]/g, '')}`}
                                target="_blank"
                                rel="noreferrer"
                                className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg text-[10px] transition-colors"
                              >
                                Chat WhatsApp
                              </a>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                {/* DataTable Footer count */}
                <div className="bg-slate-950/80 px-4 py-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Showing {filteredContacts.length} of {contacts.length} entries</span>
                  <span className="text-cyan-400 font-semibold">Real-Time MongoDB Sync</span>
                </div>
              </div>
            </div>
          )}

          {/* ================= PAGE 2: MANAGE PRODUCTS ================= */}
          {activeSection === 'products' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black text-white">Live Software Products ({products.length})</h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Products managed here appear dynamically across the website and on the public <a href="/products" target="_blank" className="text-cyan-400 underline font-bold">/products</a> page.
                  </p>
                </div>

                <button
                  onClick={() => setShowAddProduct(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-md transition-all"
                >
                  <Plus className="w-4 h-4" />
                  <span>+ Add New Product</span>
                </button>
              </div>

              {/* Add Product Modal Form */}
              {showAddProduct && (
                <div className="bg-slate-900 border-2 border-blue-500/50 rounded-3xl p-6 sm:p-8 animate-in fade-in duration-200 shadow-2xl">
                  <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-800">
                    <h3 className="text-lg font-black text-white">Publish New Software Product</h3>
                    <button onClick={() => setShowAddProduct(false)} className="text-xs font-bold text-slate-400 hover:text-white">✕ Close</button>
                  </div>

                  <form onSubmit={handleAddProduct} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">Product Title *</label>
                        <input
                          type="text"
                          required
                          value={newProduct.title}
                          onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">Category *</label>
                        <input
                          type="text"
                          required
                          value={newProduct.category}
                          onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">Tagline *</label>
                        <input
                          type="text"
                          required
                          value={newProduct.tagline}
                          onChange={(e) => setNewProduct({ ...newProduct, tagline: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">Badge Label</label>
                        <input
                          type="text"
                          value={newProduct.badge}
                          onChange={(e) => setNewProduct({ ...newProduct, badge: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Product Description *</label>
                      <textarea
                        rows={3}
                        required
                        value={newProduct.description}
                        onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Key Features (One per line)</label>
                      <textarea
                        rows={3}
                        value={newProduct.features}
                        onChange={(e) => setNewProduct({ ...newProduct, features: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                      ></textarea>
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
                      <button type="button" onClick={() => setShowAddProduct(false)} className="px-5 py-2 rounded-xl text-xs font-bold text-slate-400">Cancel</button>
                      <button type="submit" disabled={productSaving} className="px-6 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md">
                        {productSaving ? 'Publishing...' : 'Publish to Live Site'}
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((item, idx) => (
                  <div key={item.id || item._id || idx} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between shadow-sm">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-950 text-blue-300 border border-blue-800">
                          {item.category}
                        </span>
                        <span className="text-[10px] font-semibold text-cyan-400">{item.badge}</span>
                      </div>
                      <h4 className="font-bold text-base text-white">{item.title}</h4>
                      <p className="text-xs text-cyan-300 mt-0.5">{item.tagline}</p>
                      <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">{item.description}</p>
                    </div>

                    <div className="mt-5 pt-3.5 border-t border-slate-800 flex items-center justify-between text-xs">
                      <a href={`/products/${item.slug}`} target="_blank" className="text-blue-400 hover:underline flex items-center gap-1 font-semibold">
                        <span>Public Link</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <button onClick={() => handleDeleteProduct(item.id || item._id)} className="text-red-400 hover:text-red-300 flex items-center gap-1 text-[11px] p-1 rounded hover:bg-red-950/50">
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= PAGE 3: HIRE DEVELOPERS MANAGER ================= */}
          {activeSection === 'developers' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black text-white">Hire Developers Roster ({developers.length})</h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Manage the developer profiles shown on the public <a href="/hire-developers" target="_blank" className="text-cyan-400 underline font-bold">/hire-developers</a> page.
                  </p>
                </div>

                <button
                  onClick={() => setShowAddDeveloper(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-md transition-all"
                >
                  <Plus className="w-4 h-4" />
                  <span>+ Add Developer Profile</span>
                </button>
              </div>

              {/* Add Developer Modal Form */}
              {showAddDeveloper && (
                <div className="bg-slate-900 border-2 border-emerald-500/50 rounded-3xl p-6 sm:p-8 animate-in fade-in duration-200 shadow-2xl">
                  <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-800">
                    <h3 className="text-lg font-black text-white">Add New Developer Profile</h3>
                    <button onClick={() => setShowAddDeveloper(false)} className="text-xs font-bold text-slate-400 hover:text-white">✕ Close</button>
                  </div>

                  <form onSubmit={handleAddDeveloper} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">Developer Role Title *</label>
                        <input
                          type="text"
                          required
                          value={newDeveloper.title}
                          onChange={(e) => setNewDeveloper({ ...newDeveloper, title: e.target.value })}
                          placeholder="e.g. Senior Next.js 15 & Cloud Architect"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">Experience *</label>
                        <input
                          type="text"
                          required
                          value={newDeveloper.experience}
                          onChange={(e) => setNewDeveloper({ ...newDeveloper, experience: e.target.value })}
                          placeholder="e.g. 5+ Years"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">Skills (Comma separated) *</label>
                        <input
                          type="text"
                          required
                          value={newDeveloper.skills}
                          onChange={(e) => setNewDeveloper({ ...newDeveloper, skills: e.target.value })}
                          placeholder="Next.js 15, React 19, MongoDB, AWS, Tailwind"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">Availability</label>
                        <input
                          type="text"
                          value={newDeveloper.availability}
                          onChange={(e) => setNewDeveloper({ ...newDeveloper, availability: e.target.value })}
                          placeholder="Immediate (Within 48 hrs)"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Role Description & Capabilities *</label>
                      <textarea
                        rows={3}
                        required
                        value={newDeveloper.description}
                        onChange={(e) => setNewDeveloper({ ...newDeveloper, description: e.target.value })}
                        placeholder="Expert in building low-latency SSR systems, real-time Socket.io, high-throughput APIs..."
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                      ></textarea>
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
                      <button type="button" onClick={() => setShowAddDeveloper(false)} className="px-5 py-2 rounded-xl text-xs font-bold text-slate-400">Cancel</button>
                      <button type="submit" disabled={developerSaving} className="px-6 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md">
                        {developerSaving ? 'Publishing...' : 'Publish Profile to Site'}
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Developers Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {developers.map((dev, idx) => (
                  <div key={idx} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between shadow-sm">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-blue-600">
                          {dev.experience}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-emerald-400 bg-emerald-950 border border-emerald-800">
                          ● {dev.availability}
                        </span>
                      </div>
                      <h4 className="font-bold text-lg text-white mb-2">{dev.title}</h4>
                      <p className="text-xs text-slate-400 mb-4 leading-relaxed">{dev.description}</p>
                      
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {dev.skills.map((skill: string) => (
                          <span key={skill} className="px-2 py-0.5 rounded-lg text-[10px] font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3.5 border-t border-slate-800 flex items-center justify-between text-xs">
                      <span className="text-[11px] text-slate-500">{dev.engagement}</span>
                      <button onClick={() => handleDeleteDeveloper(dev.title)} className="text-red-400 hover:text-red-300 flex items-center gap-1 text-[11px] p-1 rounded hover:bg-red-950/50">
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Delete Profile</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </main>
      </div>

    </div>
  );
}
