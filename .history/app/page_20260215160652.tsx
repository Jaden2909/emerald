import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';

export default function Home() {
  return (
    <main className="bg-[#050a08] text-stone-200 antialiased">
      <Navbar />
      <Hero />
      <section className="py-40 px-10 flex flex-col items-center text-center">
        <p className="max-w-2xl text-2xl md:text-4xl font-serif leading-relaxed italic text-stone-400">
          "A sanctuary where the whispers of luxury meet the silence of nature."
        </p>
      </section>
      <Features />
      <footer className="py-20 border-t border-emerald-900/30 text-center text-[10px] tracking-[0.4em] uppercase text-stone-600">
        © 2026 Emerald Suites Luxury Group
      </footer>
    </main>
  );
}