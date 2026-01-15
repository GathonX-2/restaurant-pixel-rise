import { NavLink, Routes, Route } from 'react-router-dom';
import { Phone, Mail, Clock, Instagram, Facebook, Twitter, Dribbble, Menu as MenuIcon } from 'lucide-react';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/about', label: 'A propos' },
  { to: '/services', label: 'Service' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' }
];

function TopBar() {
  return (
    <div className="border-b border-white/10 bg-slate-900/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-2 text-[13px] text-slate-200 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <span className="pill border-white/10 bg-white/5">
            <Phone size={13} /> Téléphone : +261 (32) 00 000 00
          </span>
          <span className="pill border-white/10 bg-white/5">
            <Mail size={13} /> ou envoyez-nous un email : info@islandmanager.com
          </span>
        </div>
        <div className="flex items-center gap-3 text-white/80">
          <span className="flex items-center gap-1 text-amber-100"><Clock size={14} /> Lun - Ven / 9:00-21:00, Sam - Dim / 10:00-20:00</span>
          <div className="flex gap-2">
            {[Facebook, Twitter, Instagram, Dribbble].map((Icon, idx) => (
              <button key={idx} className="rounded-full border border-white/10 p-1.5 hover:border-amber-200 hover:text-amber-200 transition">
                <Icon size={14} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <TopBar />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <NavLink to="/" className="text-lg font-black uppercase tracking-[0.15em] text-white">
          Restaurant <span className="text-amber-300">IM</span>
        </NavLink>
        <nav className="hidden items-center gap-6 text-sm font-semibold uppercase tracking-wide text-slate-200 md:flex">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-3 py-1 transition hover:text-amber-200 ${isActive ? 'bg-white/10 text-amber-200' : 'text-slate-200'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <button className="button-ghost border-white/15 text-sm">Voir le menu</button>
          <NavLink to="/contact" className="button-primary text-sm">Réserver</NavLink>
        </div>
        <button className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-100 shadow-sm shadow-black/40 transition hover:border-amber-300 hover:text-amber-200 md:hidden">
          <MenuIcon size={16} /> Menu
        </button>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-16 bg-slate-950/80 text-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-xl font-semibold text-white">Restaurant. IM</h3>
            <p className="mt-3 text-sm">
              Loin, très loin, derrière les montagnes de mots, loin des pays Vokalia et Consonantia, vivent les textes aveugles. Séparés, ils vivent à Bookmarksgrove.
            </p>
            <div className="mt-3 flex gap-3 text-white">
              <a href="#"><Twitter size={16} /></a>
              <a href="#"><Facebook size={16} /></a>
              <a href="#"><Instagram size={16} /></a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Page</h3>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <NavLink to="/" className="hover:text-orange-300">Accueil</NavLink>
              <NavLink to="/about" className="hover:text-orange-300">A propos</NavLink>
              <NavLink to="/services" className="hover:text-orange-300">Service</NavLink>
              <NavLink to="/blog" className="hover:text-orange-300">Blog</NavLink>
              <NavLink to="/contact" className="hover:text-orange-300">Contact</NavLink>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Instagram</h3>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="h-16 w-full overflow-hidden rounded-lg">
                  <img src={`/assets/images/insta-${i}.jpg`} alt={`Insta ${i}`} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Newsletter</h3>
            <p className="mt-3 text-sm">Loin, très loin, derrière les montagnes de mots, loin des pays.</p>
            <form className="mt-4 space-y-2">
              <input className="w-full rounded-md border border-white/15 bg-slate-900 px-3 py-2 text-sm text-white" placeholder="Entrez votre adresse email" />
              <button className="button-primary w-full justify-center bg-orange-500 text-slate-900 hover:-translate-y-0">
                S'abonner
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 bg-orange-600 py-3 text-center text-sm text-white">
        Copyright © {new Date().getFullYear()} Tous droits réservés | Ce modèle est conçu avec ♥ par Island Manager
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
