import { MapPin, Phone, Mail, Globe2, Send, Quote } from 'lucide-react';
import { toast } from 'sonner';

const infos = [
  { icon: <MapPin size={18} />, label: 'Address:', value: 'Hell-Ville, Nosy-be, DIANA, Madagascar' },
  { icon: <Phone size={18} />, label: 'Phone:', value: '+ 261 (32) 71 900 24' },
  { icon: <Mail size={18} />, label: 'Email:', value: 'info@islandmanager.com' },
  { icon: <Globe2 size={18} />, label: 'Website :', value: 'islandmanager.com' }
];

const testimonies = new Array(5).fill({
  text: 'Loin, très loin, derrière les montagnes de mots, loin des pays Vokalia et Consonantia, vivent les textes aveugles.',
  author: 'John Gustavo',
  role: 'Client'
});

export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    toast.success('Message envoyé', {
      description: 'Nous vous répondrons rapidement.'
    });
  };

  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-cover bg-center shadow-2xl" style={{ backgroundImage: "url('/assets/images/bg_5.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-900/60 to-slate-950/80" />
        <div className="absolute inset-y-0 left-10 hidden w-48 rounded-full bg-amber-400/20 blur-3xl md:block" />
        <div className="relative z-10 px-6 py-16 text-center space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-amber-200">Restons en contact</p>
          <h1 className="section-title text-white">Contactez-nous</h1>
          <p className="text-slate-200">
            <span className="mr-2">Home</span> &gt; <span>Contactez-nous</span>
          </p>
        </div>
      </section>

      {/* Infos */}
      <section className="card space-y-4 floating-card">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="section-subtitle">Contact</span>
            <h2 className="section-title text-white">Contact Information</h2>
          </div>
          <p className="text-sm text-slate-300 md:w-1/2">Nous sommes disponibles pour répondre à toutes vos questions concernant nos services, événements ou réservations.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {infos.map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-100">
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-400/15 text-amber-200">
                {item.icon}
              </div>
              <p className="font-semibold text-white">{item.label}</p>
              <p className="text-slate-200">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form + map */}
      <section className="grid gap-6 md:grid-cols-2">
        <div className="card space-y-5 order-2 md:order-1 floating-card">
          <div>
            <span className="section-subtitle">Message</span>
            <h2 className="section-title text-white">Contactez-nous</h2>
          </div>
          <form onSubmit={onSubmit} className="space-y-3">
            <input className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder-slate-400 focus:border-amber-300 focus:outline-none" placeholder="Votre Nom" required />
            <input className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder-slate-400 focus:border-amber-300 focus:outline-none" placeholder="Votre Email" required />
            <input className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder-slate-400 focus:border-amber-300 focus:outline-none" placeholder="Sujet" />
            <textarea className="w-full rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder-slate-400 focus:border-amber-300 focus:outline-none" rows={7} placeholder="Message"></textarea>
            <button type="submit" className="button-primary inline-flex items-center justify-center gap-2 w-full">
              Envoyer le Message <Send size={16} />
            </button>
          </form>
        </div>
        <div className="order-1 md:order-2 rounded-[30px] border border-white/10 bg-slate-900/40 p-2 floating-card">
          <iframe
            title="map"
            className="h-full min-h-[300px] w-full rounded-[24px] border border-white/10"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31050.039046492377!2d48.24682443780923!3d-13.39653811705188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2213c7bb16b69c5b%3A0x76e3391191f9e286!2sHell-Ville!5e0!3m2!1sen!2smg!4v1732538937190!5m2!1sen!2smg"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
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
            <div key={idx} className="glass rounded-2xl p-5">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-orange-300">
                <Quote size={18} />
              </div>
              <p className="mt-3 text-sm text-slate-100">{t.text}</p>
              <p className="mt-4 font-semibold text-white">{t.author}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-300">{t.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
