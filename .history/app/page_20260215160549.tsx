import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center bg-transparent">
        <div className="text-2xl font-bold tracking-tighter">ES</div>
        <div className="space-x-8 uppercase text-xs tracking-widest">
          <a href="#" className="hover:text-emerald-500 transition">Rooms</a>
          <a href="#" className="hover:text-emerald-500 transition">Dining</a>
          <a href="#" className="hover:text-emerald-500 transition">Experience</a>
          <button className="border border-emerald-500 px-6 py-2 hover:bg-emerald-500 hover:text-black transition">Book Now</button>
        </div>
      </nav>
      
      <Hero />
      
      {/* Smooth Scroll Section Placeholder */}
      <section className="h-screen bg-[#0a0f0d] flex items-center justify-center">
        <p className="text-gray-500 italic">Scroll to explore the heights of sophistication...</p>
      </section>
    </main>
  );
}