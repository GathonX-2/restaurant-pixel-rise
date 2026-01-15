import { Quote } from 'lucide-react';
import { toast } from 'sonner';

const heroSlides = [
  { subheading: 'Restaurant Taste.it', h1: 'En Cuisine Depuis', sub: '1958', image: '/assets/images/bg_1.jpg' },
  { subheading: 'Restaurant Taste.it', h1: 'Meilleure Qualité', sub: 'Nourriture', image: '/assets/images/bg_2.jpg' }
];

const menuColumn = [
  { title: 'Sauce Rôti de Bœuf', price: '29 €', tags: ['Viande', 'Pommes de Terre', 'Riz', 'Tomates'], image: '/assets/images/breakfast-1.jpg' },
  { title: 'Sauce Rôti de Bœuf', price: '29 €', tags: ['Viande', 'Pommes de Terre', 'Riz', 'Tomates'], image: '/assets/images/breakfast-2.jpg' },
  { title: 'Sauce Rôti de Bœuf', price: '29 €', tags: ['Viande', 'Pommes de Terre', 'Riz', 'Tomates'], image: '/assets/images/breakfast-3.jpg' }
];

const menuColumnLunch = [
  { title: 'Sauce Rôti de Bœuf', price: '29 €', tags: ['Viande', 'Pommes de Terre', 'Riz', 'Tomates'], image: '/assets/images/lunch-1.jpg' },
  { title: 'Sauce Rôti de Bœuf', price: '29 €', tags: ['Viande', 'Pommes de Terre', 'Riz', 'Tomates'], image: '/assets/images/lunch-2.jpg' },
  { title: 'Sauce Rôti de Bœuf', price: '29 €', tags: ['Viande', 'Pommes de Terre', 'Riz', 'Tomates'], image: '/assets/images/lunch-3.jpg' }
];

const menuColumnDinner = [
  { title: 'Sauce Rôti de Bœuf', price: '29 €', tags: ['Viande', 'Pommes de Terre', 'Riz', 'Tomates'], image: '/assets/images/dinner-1.jpg' },
  { title: 'Sauce Rôti de Bœuf', price: '29 €', tags: ['Viande', 'Pommes de Terre', 'Riz', 'Tomates'], image: '/assets/images/dinner-2.jpg' },
  { title: 'Sauce Rôti de Bœuf', price: '29 €', tags: ['Viande', 'Pommes de Terre', 'Riz', 'Tomates'], image: '/assets/images/dinner-3.jpg' }
];

const chefs = [
  { name: 'John Gustavo', role: 'PDG, Co-fondateur', text: 'Je suis un travailleur acharné et ambitieux, mais en dehors de cela, une personne assez simple.', image: '/assets/images/chef-4.jpg' },
  { name: 'Michelle Fraulen', role: 'Chef Principal', text: 'Je suis une travailleuse acharnée et ambitieuse, mais en dehors de cela, une personne assez simple.', image: '/assets/images/chef-2.jpg' },
  { name: 'Alfred Smith', role: 'Chef Cuisinier', text: 'Je suis un travailleur acharné et ambitieux, mais en dehors de cela, une personne assez simple.', image: '/assets/images/chef-3.jpg' },
  { name: 'Antonio Santibanez', role: 'Chef Cuisinier', text: 'Je suis un travailleur acharné et ambitieux, mais en dehors de cela, une personne assez simple.', image: '/assets/images/chef-1.jpg' }
];

const blogPreview = [
  { title: "Même le tout-puissant Pointing n’a aucun contrôle sur les textes aveugles", date: '3 Août 2020', author: 'Admin', image: '/assets/images/image_1.jpg' },
  { title: "Même le tout-puissant Pointing n’a aucun contrôle sur les textes aveugles", date: '3 Août 2020', author: 'Admin', image: '/assets/images/image_2.jpg' },
  { title: "Même le tout-puissant Pointing n’a aucun contrôle sur les textes aveugles", date: '3 Août 2020', author: 'Admin', image: '/assets/images/image_3.jpg' }
];

const testimonies = new Array(5).fill({
  text: 'Loin, très loin, derrière les montagnes de mots, loin des pays de Vokalia et Consonantia, vivent les textes aveugles.',
  author: 'John Gustavo',
  role: 'Client'
});

const stats = [
  { label: 'Plats Savoureux', value: '100+' },
  { label: 'Clients Satisfaits', value: '10k' },
  { label: 'Restaurants', value: '10' }
];

export default function Home() {
  const reserve = () => {
    toast.success('Votre demande de réservation est enregistrée !', {
      description: "Nous revenons vers vous sous peu pour confirmer."
    });
  };

  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 shadow-2xl">
        <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="absolute -right-20 top-10 h-60 w-60 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="grid gap-10 p-8 md:grid-cols-[1.15fr,0.85fr] md:p-12">
          <div className="relative space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-amber-200">
              <span className="h-2 w-2 rounded-full bg-amber-300" /> Expérience gastronomique depuis 1958
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold text-white md:text-5xl">Cuisine de feu, produits nobles, service signature.</h1>
              <p className="text-lg text-slate-200">
                Meilleure Qualité — Nourriture, vin, accords et feux de bois orchestrés par nos chefs pour des moments remarquables.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {stats.map((s) => (
                <div key={s.label} className="pill border-white/15 bg-white/5 text-sm">
                  <span className="text-amber-200 font-semibold">{s.value}</span> {s.label}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="button-primary">Réserver une table</button>
              <button className="button-ghost border-white/15">Voir la carte</button>
            </div>
          </div>
          <div className="grid gap-4 md:gap-5">
            {heroSlides.map((slide) => (
              <div key={slide.sub} className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/70 via-slate-900/40 to-slate-800/60 p-6 floating-card">
                <img src={slide.image} alt={slide.subheading} className="absolute inset-0 h-full w-full object-cover opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/70 via-slate-900/40 to-transparent" />
                <div className="relative space-y-3">
                  <span className="pill bg-white/10 text-xs uppercase tracking-[0.2em]">{slide.subheading}</span>
                  <div className="flex items-end gap-3">
                    <h2 className="text-3xl font-black text-white">{slide.h1}</h2>
                    <span className="text-4xl font-black text-amber-300">{slide.sub}</span>
                  </div>
                  <p className="text-sm text-slate-200 max-w-md">Signature artisanale, cuisson au feu et accords soignés pour une expérience immersive.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloc 2 : formulaire + texte sur image */}
      <section className="grid gap-6 md:grid-cols-2">
        <div className="card space-y-4 bg-gradient-to-br from-orange-500/90 to-amber-300/80 text-slate-950 floating-card">
          <h3 className="text-2xl font-bold">Réservez votre Table</h3>
          <div className="grid gap-3 md:grid-cols-2">
            <input className="w-full rounded-lg border border-black/10 bg-white/80 px-3 py-2 text-sm text-slate-900 placeholder-slate-500" placeholder="Nom" />
            <input type="email" className="w-full rounded-lg border border-black/10 bg-white/80 px-3 py-2 text-sm text-slate-900 placeholder-slate-500" placeholder="Email" />
            <input className="w-full rounded-lg border border-black/10 bg-white/80 px-3 py-2 text-sm text-slate-900 placeholder-slate-500" placeholder="Téléphone" />
            <div className="relative">
              <input className="w-full rounded-lg border border-black/10 bg-white/80 px-3 py-2 text-sm text-slate-900 placeholder-slate-500" placeholder="Date" />
            </div>
            <div className="relative">
              <input className="w-full rounded-lg border border-black/10 bg-white/80 px-3 py-2 text-sm text-slate-900 placeholder-slate-500" placeholder="Heure" />
            </div>
            <select className="w-full rounded-lg border border-black/10 bg-white/80 px-3 py-2 text-sm text-slate-900">
              <option>Nombre d'invités</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <button type="button" onClick={reserve} className="button-primary w-full justify-center bg-slate-900 text-white hover:-translate-y-0 hover:shadow-none">
            Réservez votre table maintenant
          </button>
        </div>
        <div className="relative overflow-hidden rounded-3xl bg-cover bg-center p-6 md:p-10" style={{ backgroundImage: "url('/assets/images/about.jpg')" }}>
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/80 via-slate-900/60 to-transparent" />
          <div className="relative space-y-4 text-white">
            <span className="section-subtitle text-white">À Propos</span>
            <h2 className="section-title text-white">Bienvenue chez Restaurant IM</h2>
            <p>
              En chemin, elle a rencontré une copie. La copie a averti le Petit Texte Aveugle que, là d'où elle venait, elle aurait été réécrite mille fois, et tout ce qui resterait de son origine serait le mot "et".
            </p>
            <p>
              Le Petit Texte Aveugle devrait faire demi-tour et retourner dans son propre pays sûr. Une petite rivière appelée Duden traverse leur lieu et leur fournit la nécessaire régularité. C'est un pays paradisiaque, où des morceaux rôtis de phrases volent dans votre bouche.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="pill">Cuisine au feu</span>
              <span className="pill">Accords vin</span>
              <span className="pill">Service raffiné</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro background */}
      <section className="rounded-3xl border border-white/10 bg-cover bg-center p-10 text-center shadow-xl text-white" style={{ backgroundImage: "url('/assets/images/bg_3.jpg')" }}>
        <span className="section-subtitle text-white">Réservations en Cours</span>
        <h2 className="section-title text-white">Dîners Privés &amp; Happy Hours</h2>
      </section>

      {/* Menu */}
      <section className="space-y-8">
        <div className="text-center">
          <span className="section-subtitle">Spécialités</span>
          <h2 className="section-title">Notre Menu</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: 'Petit Déjeuner', items: menuColumn },
            { title: 'Déjeuner', items: menuColumnLunch },
            { title: 'Dîner', items: menuColumnDinner }
          ].map((section) => (
            <div key={section.title} className="card space-y-4 floating-card">
              <h3 className="text-center text-xl font-semibold text-white">{section.title}</h3>
              {section.items.map((item, idx) => (
                <div key={idx} className={`flex gap-3 ${idx === section.items.length - 1 ? '' : 'border-b border-white/5 pb-3'}`}>
                  <div className="menu-img h-20 w-24 flex-shrink-0 overflow-hidden rounded-lg">
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

      {/* Témoignages */}
      <section className="rounded-3xl border border-white/10 bg-cover bg-center p-10 shadow-xl" style={{ backgroundImage: "url('/assets/images/bg_5.jpg')" }}>
        <div className="text-center text-white">
          <span className="section-subtitle text-white">Témoignages</span>
          <h2 className="section-title text-white">Clients Satisfaits</h2>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {testimonies.slice(0, 3).map((t, idx) => (
            <div key={idx} className="glass rounded-2xl p-6 floating-card">
              <Quote className="text-orange-300" size={18} />
              <p className="mt-3 text-sm text-slate-100 leading-relaxed">{t.text}</p>
              <p className="mt-3 font-semibold text-white">{t.author}</p>
              <p className="text-xs uppercase tracking-wide text-slate-300">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Chefs */}
      <section className="space-y-6">
        <div className="text-center">
          <span className="section-subtitle">Chef</span>
          <h2 className="section-title">Nos Chefs Experts</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {chefs.map((chef) => (
            <div key={chef.name} className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 floating-card">
              <div className="h-48 w-full overflow-hidden">
                <img src={chef.image} alt={chef.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-semibold text-white">{chef.name}</h3>
                <p className="text-sm text-amber-200">{chef.role}</p>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">{chef.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ingrédients parfaits */}
      <section className="grid gap-6 md:grid-cols-2">
        <div className="grid grid-cols-2 gap-3">
          <div className="h-48 rounded-2xl bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/bg_6.jpg')" }} />
          <div className="h-48 rounded-2xl bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/bg_4.jpg')" }} />
        </div>
        <div className="card floating-card">
          <span className="section-subtitle">Voici nos secrets</span>
          <h2 className="section-title">Ingrédients Parfaits</h2>
          <p className="text-slate-300">
            Loin, très loin, derrière les montagnes de mots, loin des pays Vokalia et Consonantia, vivent les textes aveugles. Séparés, ils vivent à Bookmarksgrove, juste à la côte de la Sémantique, un vaste océan de langage.
          </p>
          <button className="button-primary mt-4 w-fit">En savoir plus</button>
        </div>
      </section>

      {/* Blog preview */}
      <section className="space-y-6">
        <div className="text-center">
          <span className="section-subtitle">Blog</span>
          <h2 className="section-title">Articles Récents</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {blogPreview.map((post) => (
            <article key={post.image} className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 floating-card">
              <div className="relative h-44 w-full overflow-hidden">
                <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
                <span className="absolute left-3 top-3 pill bg-slate-950/70 text-xs">{post.date}</span>
              </div>
              <div className="space-y-3 p-5">
                <div className="text-xs text-slate-400 flex gap-3">
                  <span>{post.author}</span>
                  <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-amber-300" />3 commentaires</span>
                </div>
                <h3 className="font-semibold text-white leading-tight">{post.title}</h3>
                <div className="flex items-center justify-between text-xs text-amber-200">
                  <button className="button-ghost px-3 py-1 text-xs border-white/15">Lire plus</button>
                  <span className="inline-flex items-center gap-1">3</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-10 text-center shadow-xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(248,210,123,0.15),transparent_30%)]" />
        <h2 className="relative text-2xl font-bold text-white md:text-3xl">Nous Préparons des Plats Délicieux et Nutritifs</h2>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <button className="button-primary">Réservez Une Table Maintenant</button>
          <button className="button-ghost border-white/25">Découvrir le menu</button>
        </div>
      </section>
    </div>
  );
}
