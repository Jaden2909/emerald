// Inside app/page.tsx
return (
  <main className="bg-[#050a08] min-h-screen">
    <Navbar />
    <Hero />
    
    <div id="properties">
      <Features />
    </div>

    <Dining />

    <div id="celebrations">
      <section className="py-24 bg-[#050a08] px-6">
         {/* ... (Existing Celebrations Code) ... */}
      </section>
    </div>

    <div id="wellness">
      <Wellness />
    </div>

    <div id="contact">
      <footer className="bg-[#050a08] pt-32 pb-12 border-t border-white/5">
         {/* ... (Existing Footer Code) ... */}
      </footer>
    </div>
  </main>
);