import { CookingPot, Wine, ConciergeBell, Leaf, FlameKindling, Clock3, Check, Quote } from 'lucide-react';

const specials = [
  { title: 'Filet de Saumon', desc: 'Saumon poêlé accompagné de légumes grillés.', image: '/assets/images/breakfast-1.jpg' },
  { title: 'Risotto aux Champignons', desc: 'Un mélange crémeux de riz et de champignons frais.', image: '/assets/images/breakfast-2.jpg' },
  { title: 'Entrecôte de Boeuf', desc: 'Grillée à la perfection avec une sauce maison.', image: '/assets/images/breakfast-3.jpg' }
];

const services = [
  { title: 'Repas sur place', desc: 'Un cadre chaleureux pour savourer vos plats préférés.', icon: <ConciergeBell className="text-orange-300" size={28} /> },
  { title: 'Livraison', desc: 'Des plats livrés directement chez vous, chauds et savoureux.', icon: <CookingPot className="text-emerald-300" size={28} /> },
  { title: 'Événements', desc: "Organisation d'événements privés et professionnels.", icon: <Wine className="text-amber-200" size={28} /> },
  { title: 'Cocktails', desc: 'Une sélection de boissons et de cocktails maison.', icon: <FlameKindling className="text-pink-200" size={28} /> }
];

const reasons = [
  'Ingrédients frais et locaux.',
  'Service rapide et professionnel.',
  'Plats faits maison.',
  'Ambiance conviviale et chaleureuse.',
  'Produits de la mer frais du jour.',
  'Spécialités régionales et traditionnelles.',
  'Parking disponible pour les clients.',
  'Décoration moderne et agréable.',
  'Options sans gluten pour les intolérants.',
  'Plats du jour variés et gourmands.',
  'Programme fidélité pour nos clients.',
  'Plats personnalisés selon vos préférences.',
  'Carte des vins soigneusement sélectionnée.',
  "Organisation d'événements privés."
];

const gallery = [
  '/assets/images/lunch-1.jpg',
  '/assets/images/lunch-2.jpg',
  '/assets/images/lunch-2.jpg',
  '/assets/images/dinner-2.jpg',
  '/assets/images/dinner-2.jpg',
  '/assets/images/dinner-3.jpg'
];

const menuSections = {
  'Petit Déjeuner': [
    { title: 'Rôti de Bœuf', price: '29€', tags: ['Viande', 'Pommes de terre', 'Riz', 'Tomates'], image: '/assets/images/breakfast-1.jpg' },
    { title: 'Rôti de Bœuf', price: '29€', tags: ['Viande', 'Pommes de terre', 'Riz', 'Tomates'], image: '/assets/images/breakfast-2.jpg' },
    { title: 'Rôti de Bœuf', price: '29€', tags: ['Viande', 'Pommes de terre', 'Riz', 'Tomates'], image: '/assets/images/breakfast-3.jpg' }
  ],
  Déjeuner: [
    { title: 'Rôti de Bœuf', price: '29€', tags: ['Viande', 'Pommes de terre', 'Riz', 'Tomates'], image: '/assets/images/lunch-1.jpg' },
    { title: 'Rôti de Bœuf', price: '29€', tags: ['Viande', 'Pommes de terre', 'Riz', 'Tomates'], image: '/assets/images/lunch-2.jpg' },
    { title: 'Rôti de Bœuf', price: '29€', tags: ['Viande', 'Pommes de terre', 'Riz', 'Tomates'], image: '/assets/images/lunch-2.jpg' }
  ],
  Dîner: [
    { title: 'Rôti de Bœuf', price: '29€', tags: ['Viande', 'Pommes de terre', 'Riz', 'Tomates'], image: '/assets/images/dinner-1.jpg' },
    { title: 'Rôti de Bœuf', price: '29€', tags: ['Viande', 'Pommes de terre', 'Riz', 'Tomates'], image: '/assets/images/dinner-1.jpg' },
    { title: 'Rôti de Bœuf', price: '29€', tags: ['Viande', 'Pommes de terre', 'Riz', 'Tomates'], image: '/assets/images/dinner-1.jpg' }
  ]
};

const testimonies = new Array(5).fill({
  text: 'Loin, très loin, derrière les montagnes de mots, loin des pays Vokalia et Consonantia, vivent les textes aveugles.',
  author: 'John Gustavo',
  role: 'Client'
});

export default function Services() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-cover bg-center shadow-2xl" style={{ backgroundImage: "url('/assets/images/bg_5.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/60 to-slate-950/80" />
        <div className="absolute -left-12 top-4 h-48 w-48 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="relative z-10 px-6 py-16 text-center space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-amber-200">Nos prestations</p>
          <h1 className="section-title text-white">Service</h1>
          <p className="text-slate-200">Accueil &gt; Service</p>
        </div>
      </section>

      {/* Spécialités */}
      <section className="space-y-4">
        <div className="text-center">
          <h2 className="section-title text-orange-300">Nos Spécialités</h2>
          <p className="text-slate-300">Découvrez nos plats les plus appréciés, préparés avec soin par nos chefs expérimentés.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {specials.map(item => (
            <div key={item.title} className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 floating-card">
              <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/65 opacity-0 transition hover:opacity-100 px-4 text-center">
                <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                <p className="mt-2 text-sm text-slate-200">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="card floating-card">
        <div className="text-center mb-6">
          <h2 className="section-title text-orange-300">Nos Services</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {services.map(s => (
            <div key={s.title} className="glass rounded-2xl p-5 text-center">
              <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                {s.icon}
              </div>
              <h4 className="text-lg font-semibold text-white">{s.title}</h4>
              <p className="text-sm text-slate-300 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="card grid gap-6 md:grid-cols-2 floating-card">
        <img src="/assets/images/person_4.jpg" alt="Pourquoi nous choisir" className="h-full w-full rounded-3xl object-cover floating-card" />
        <div>
          <h2 className="section-title text-orange-300">Pourquoi Nous Choisir ?</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            {reasons.map(reason => (
              <li key={reason} className="flex items-center gap-2">
                <Check className="text-emerald-300" size={16} /> {reason}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Galerie */}
      <section className="card floating-card">
        <div className="text-center mb-6">
          <h2 className="section-title text-orange-300">Galerie</h2>
          <p className="text-slate-300 px-4">
            Découvrez notre galerie culinaire, une sélection visuelle de nos plats exquis et de notre ambiance chaleureuse. Chaque image raconte une histoire de saveurs uniques, de moments partagés et de passion pour la gastronomie. Plongez dans l’univers de notre restaurant et laissez-vous séduire par notre créativité culinaire et notre élégance.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {gallery.map((img, idx) => (
            <div key={idx} className="relative overflow-hidden rounded-2xl">
              <img src={img} alt={`Galerie ${idx + 1}`} className="h-44 w-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 opacity-0 transition hover:opacity-100">
                <h5 className="text-white">Délicieux Plat {idx + 1}</h5>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Menu */}
      <section className="space-y-6">
        <div className="text-center">
          <span className="section-subtitle">Spécialités</span>
          <h2 className="section-title">Notre Menu</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {Object.entries(menuSections).map(([category, items]) => (
            <div key={category} className="card space-y-4 floating-card">
              <h3 className="text-center text-xl font-semibold text-white">{category}</h3>
              {items.map((item, idx) => (
                <div key={idx} className={`flex gap-3 ${idx === items.length - 1 ? '' : 'border-b border-white/5 pb-3'}`}>
                  <div className="h-20 w-24 flex-shrink-0 overflow-hidden rounded-lg">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <span className="text-orange-300">{item.price}</span>
                    </div>
                    <p className="text-xs text-slate-400">{item.tags.join(', ')}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Réservation */}
      <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-orange-500/90 to-amber-300/85 p-8 text-slate-900 shadow-xl floating-card">
        <h3 className="mb-4 text-2xl font-bold">Réservez votre Table</h3>
        <form className="grid gap-4 md:grid-cols-3">
          <input className="w-full rounded-lg border border-black/10 bg-white/85 px-3 py-2 text-sm text-slate-900 placeholder-slate-500" placeholder="Nom" />
          <input className="w-full rounded-lg border border-black/10 bg-white/85 px-3 py-2 text-sm text-slate-900 placeholder-slate-500" placeholder="Email" />
          <input className="w-full rounded-lg border border-black/10 bg-white/85 px-3 py-2 text-sm text-slate-900 placeholder-slate-500" placeholder="Téléphone" />
          <input className="w-full rounded-lg border border-black/10 bg-white/85 px-3 py-2 text-sm text-slate-900 placeholder-slate-500" placeholder="Date d'arrivée" />
          <input className="w-full rounded-lg border border-black/10 bg-white/85 px-3 py-2 text-sm text-slate-900 placeholder-slate-500" placeholder="Heure" />
          <select className="w-full rounded-lg border border-black/10 bg-white/85 px-3 py-2 text-sm text-slate-900">
            <option>Invités</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <div className="md:col-span-3">
            <button className="button-primary w-full justify-center bg-slate-900 text-white hover:-translate-y-0 hover:shadow-none">
              Réservez votre Table Maintenant
            </button>
          </div>
        </form>
      </section>

      {/* Témoignages */}
      <section className="rounded-3xl border border-white/10 bg-cover bg-center p-10 shadow-xl" style={{ backgroundImage: "url('/assets/images/bg_5.jpg')" }}>
        <div className="text-center text-white">
          <span className="section-subtitle text-white">Témoignages</span>
          <h2 className="section-title text-white">Clients Satisfaits</h2>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {testimonies.slice(0, 3).map((t, idx) => (
            <div key={idx} className="glass rounded-xl p-4">
              <Quote className="text-orange-300" size={18} />
              <p className="mt-2 text-sm text-slate-100">{t.text}</p>
              <p className="mt-3 font-semibold text-white">{t.author}</p>
              <p className="text-xs uppercase tracking-wide text-slate-300">{t.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
