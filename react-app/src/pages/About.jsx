import { Award, Leaf, HeartHandshake, Star, Users, Quote } from 'lucide-react';

const counters = [
  { label: 'Plats Savoureux', value: 100 },
  { label: 'Plats Servis', value: 4000 },
  { label: 'Restaurants', value: 10 },
  { label: 'Clients Satisfaits', value: 10000 }
];

const team = [
  { name: 'John Gustavo', role: 'PDG, Co-fondateur', desc: 'Avec une vision claire et une passion pour la gastronomie, John supervise notre équipe pour offrir des expériences culinaires exceptionnelles.' },
  { name: 'Michelle Fraulen', role: 'Chef Principal', desc: 'Spécialiste des plats raffinés et des techniques culinaires, Michelle est le cœur créatif de nos créations gastronomiques.' },
  { name: 'Alfred Smith', role: 'Chef Cuisinier', desc: 'Alfred perfectionne chaque plat avec une expertise culinaire inégalée, apportant saveur et créativité à votre table.' },
  { name: 'Antonio Santibanez', role: 'Chef Cuisinier', desc: 'Antonio combine tradition et innovation pour créer des plats qui éveillent les sens et captivent les papilles.' }
];

const testimonies = new Array(5).fill({
  text: 'Loin, très loin, derrière les montagnes de mots, loin des pays Vokalia et Consonantia, vivent les textes aveugles.',
  author: 'John Gustavo',
  role: 'Client'
});

export default function About() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-cover bg-center shadow-2xl" style={{ backgroundImage: "url('/assets/images/bg_5.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/70 to-slate-950/80" />
        <div className="absolute -left-10 top-6 h-48 w-48 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="relative z-10 px-6 py-16 text-center space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-amber-200">
            Notre histoire
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-white">À Propos</h1>
          <p className="text-slate-200">Accueil &gt; À Propos</p>
        </div>
      </section>

      {/* Double image + CTA */}
      <section className="grid gap-8 md:grid-cols-2">
        <div className="grid grid-cols-2 gap-4">
          <div className="h-48 rounded-2xl bg-cover bg-center floating-card" style={{ backgroundImage: "url('/assets/images/bg_6.jpg')" }} />
          <div className="h-48 rounded-2xl bg-cover bg-center floating-card" style={{ backgroundImage: "url('/assets/images/bg_4.jpg')" }} />
        </div>
        <div className="card space-y-4 floating-card">
          <p className="section-subtitle">Voici nos secrets</p>
          <h2 className="section-title">Ingrédients Parfaits</h2>
          <p className="text-slate-300 leading-relaxed">
            Loin, très loin, derrière les montagnes de mots, loin des pays Vokalia et Consonantia, vivent les textes aveugles. Séparés, ils vivent à Bookmarksgrove, juste à la côte de la Sémantique, un vaste océan de langage.
          </p>
          <div className="flex gap-3">
            <button className="button-primary">En savoir plus</button>
            <button className="button-ghost border-white/20">Découvrir notre carte</button>
          </div>
        </div>
      </section>

      {/* Counters */}
      <section className="rounded-3xl border border-white/10 bg-cover bg-center p-10 shadow-xl floating-card" style={{ backgroundImage: "url('/assets/images/bg_4.jpg')" }}>
        <div className="grid gap-4 md:grid-cols-4">
          {counters.map((c) => (
            <div key={c.label} className="glass rounded-2xl p-5 text-center">
              <p className="text-3xl font-black text-white">{c.value}</p>
              <p className="text-xs uppercase tracking-wide text-slate-200">{c.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story blocks */}
      <section className="space-y-10">
        <div className="card space-y-3 floating-card">
          <h2 className="text-2xl font-bold text-amber-200">Apprenez-en davantage sur notre passion pour la gastronomie !</h2>
          <p className="text-slate-300 leading-relaxed">
            Découvrez l'art de la gastronomie dans une ambiance chaleureuse et conviviale. Notre restaurant vous propose une expérience culinaire exceptionnelle, où chaque plat est préparé avec soin par nos chefs passionnés. Nos menus raffinés sont conçus pour ravir tous les palais.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Nous accordons une attention particulière à chaque détail pour vous offrir un service personnalisé qui répond à toutes vos attentes. Que ce soit pour une soirée romantique, une réunion familiale ou un repas d'affaires, notre équipe s'engage à faire de votre visite un moment inoubliable. Rejoignez-nous et laissez-vous séduire par une cuisine qui allie tradition et créativité, dans un cadre élégant et accueillant.
          </p>
          <div className="flex gap-3">
            <button className="button-primary">Voir Nos Services</button>
            <button className="button-ghost border-white/20">Prendre rendez-vous</button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="card space-y-3 floating-card">
            <span className="section-subtitle">Notre histoire</span>
            <h2 className="section-title">Une Passion pour la Gastronomie</h2>
            <p className="text-slate-300 leading-relaxed">
              Depuis nos débuts, nous avons toujours été animés par une passion profonde pour la cuisine. Chaque plat est une œuvre d'art créée avec des ingrédients soigneusement sélectionnés pour garantir fraîcheur et qualité. Notre mission est de vous offrir une expérience culinaire unique qui allie tradition et créativité dans un cadre chaleureux.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Rejoignez-nous pour en savoir plus sur notre engagement à vous offrir le meilleur, et découvrez pourquoi nos clients reviennent encore et encore pour vivre des moments inoubliables autour d'une table.
            </p>
            <button className="button-ghost border-white/20">Découvrir Notre Histoire</button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="h-48 rounded-2xl bg-cover bg-center floating-card" style={{ backgroundImage: "url('/assets/images/bg_6.jpg')" }} />
            <div className="h-48 rounded-2xl bg-cover bg-center floating-card" style={{ backgroundImage: "url('/assets/images/bg_4.jpg')" }} />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="space-y-6">
        <div className="text-center">
          <span className="section-subtitle">Notre Équipe</span>
          <h2 className="section-title">Les Chefs Derrière Nos Saveurs</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 floating-card p-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <Users className="h-6 w-6 text-amber-200" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                  <p className="text-sm text-amber-200">{member.role}</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About image/story */}
      <section className="grid gap-6 md:grid-cols-2">
        <img src="/assets/images/about.png" alt="Plat gastronomique" className="h-full w-full rounded-3xl object-cover shadow-xl floating-card" />
        <div className="card space-y-3 floating-card">
          <h2 className="section-title">Où chaque plat raconte une histoire</h2>
          <h4 className="text-amber-200 font-semibold">Répondre à vos envies avec simplicité et saveur</h4>
          <p className="text-slate-300 leading-relaxed">
            Depuis nos débuts, notre mission est de proposer des plats savoureux et uniques, préparés avec des ingrédients soigneusement sélectionnés. Nos chefs passionnés travaillent chaque jour pour transformer des moments ordinaires en expériences culinaires inoubliables.
          </p>
          <button className="button-primary w-fit">En savoir plus</button>
        </div>
      </section>

      {/* Testimonials */}
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
