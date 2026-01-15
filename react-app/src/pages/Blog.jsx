import { Quote } from 'lucide-react';

const posts = [
  { image: '/assets/images/image_1.jpg' },
  { image: '/assets/images/image_2.jpg' },
  { image: '/assets/images/image_3.jpg' },
  { image: '/assets/images/image_4.jpg' },
  { image: '/assets/images/image_5.jpg' },
  { image: '/assets/images/image_6.jpg' },
  { image: '/assets/images/image_6.jpg' },
  { image: '/assets/images/image_6.jpg' },
  { image: '/assets/images/image_6.jpg' }
].map((item, idx) => ({
  ...item,
  id: idx,
  title: "Même le puissant Pointing n'a aucun contrôle sur les textes aveugles",
  date: '3 Août 2020',
  author: 'Admin',
  comments: 3
}));

const testimonies = new Array(5).fill({
  text: 'Loin, très loin, derrière les montagnes de mots, loin des pays Vokalia et Consonantia, vivent les textes aveugles.',
  author: 'John Gustavo',
  role: 'Client'
});

export default function Blog() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-cover bg-center shadow-2xl" style={{ backgroundImage: "url('/assets/images/bg_5.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-900/60 to-slate-950/80" />
        <div className="absolute -right-20 top-6 h-48 w-48 rounded-full bg-orange-400/20 blur-3xl" />
        <div className="relative z-10 px-6 py-16 text-center space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-amber-200">Journal Maison</p>
          <h1 className="section-title text-white">Blog</h1>
          <p className="text-slate-200">Accueil &gt; Blog</p>
        </div>
      </section>

      {/* Posts */}
      <section className="space-y-8">
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/60 floating-card">
              <div className="relative">
                <a className="block h-44 w-full bg-cover bg-center" style={{ backgroundImage: `url('${post.image}')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                <div className="absolute left-4 top-4 space-y-1 text-left">
                  <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-900">{post.date}</span>
                  <span className="inline-flex rounded-full bg-black/60 px-3 py-1 text-xs text-white">Par {post.author}</span>
                </div>
              </div>
              <div className="space-y-3 px-5 py-5">
                <h3 className="text-lg font-semibold text-white">{post.title}</h3>
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 font-semibold text-white">Commentaires {post.comments}</span>
                  <button className="inline-flex items-center gap-2 rounded-full bg-orange-500/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 hover:bg-white">
                    Lire la suite
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-slate-900/50 px-6 py-3 text-sm text-white shadow-lg">
            <span className="rounded-full bg-white/10 px-3 py-1">&lt;</span>
            {[1, 2, 3, 4, 5].map((page) => (
              <span key={page} className={`rounded-full px-3 py-1 ${page === 1 ? 'bg-orange-500/80 text-slate-900 font-semibold' : 'text-slate-300'}`}>
                {page}
              </span>
            ))}
            <span className="rounded-full bg-white/10 px-3 py-1">&gt;</span>
          </div>
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
