import React from 'react';

const PousserLanding = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className="fixed w-full z-50 flex justify-between items-center px-8 py-6 mix-blend-difference">
        <div className="text-2xl font-bold tracking-tighter">POUSSER.</div>
        <div className="space-x-8 text-xs uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity">
          <a href="#about" className="hover:line-through cursor-not-allowed">Product</a>
          <a href="#founders" className="hover:line-through cursor-not-allowed">Leadership</a>
          <a href="#" className="border px-4 py-2 hover:bg-white hover:text-black transition-colors">Access</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center px-8 sm:px-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#333,transparent)] opacity-20" />
        
        <h1 className="text-7xl sm:text-9xl font-bold tracking-tightest leading-none mb-8 z-10">
          NOT FOR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">EVERYONE.</span>
        </h1>
        
        <p className="max-w-md text-lg text-gray-500 z-10 leading-relaxed">
          Pousser is the iMessage bot that doesn't care about your productivity. 
          We care about dominance. If you're looking for a friendly assistant, go to Slack. 
          We built this because everything else is soft.
        </p>
        
        <div className="mt-12 z-10 flex items-center space-x-6">
          <div className="w-12 h-[1px] bg-white opacity-50"></div>
          <span className="text-xs uppercase tracking-widest font-bold">Inquire within</span>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-40 px-8 sm:px-20 bg-zinc-950 border-t border-zinc-900" id="founders">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tighter italic">Nivram (Marvin)</h2>
            <p className="text-gray-400 leading-relaxed uppercase text-sm tracking-wide">
              The Architect of Chaos. Marvin doesn't code for users; he codes for the void. 
              He spent three years in total silence before writing the first line of Pousser. 
              He won't take your meeting.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tighter italic">Xilef (Felix)</h2>
            <p className="text-gray-400 leading-relaxed uppercase text-sm tracking-wide">
              The Arbiter of Taste. Felix believes simplicity is a weapon. 
              If the interface feels cold, it's because he designed it that way. 
              He's probably better dressed than you.
            </p>
          </div>
        </div>
      </section>

      {/* Features - The "Arrogant" part */}
      <section className="py-40 px-8 sm:px-20 bg-black">
        <div className="max-w-4xl space-y-32">
          <div className="group">
            <span className="text-xs text-zinc-700 group-hover:text-white transition-colors">01</span>
            <h3 className="text-5xl font-bold mt-4 mb-6">Exclusionary by design.</h3>
            <p className="text-zinc-600 group-hover:text-zinc-400 transition-colors">
              Pousser rejects 98% of commands. Not because it can't understand them, but because they are beneath it.
            </p>
          </div>
          
          <div className="group">
            <span className="text-xs text-zinc-700 group-hover:text-white transition-colors">02</span>
            <h3 className="text-5xl font-bold mt-4 mb-6">Zero integration.</h3>
            <p className="text-zinc-600 group-hover:text-zinc-400 transition-colors">
              We don't connect to your CRM or your calendar. Pousser is an island. 
              Adapt to us or stay where you are.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="h-screen flex items-center justify-center bg-white text-black text-center px-8">
        <div>
          <h2 className="text-6xl sm:text-8xl font-bold tracking-tighter mb-8 underline decoration-1 underline-offset-8">DEMAND ACCESS</h2>
          <p className="max-w-lg mx-auto text-sm uppercase tracking-widest opacity-60">
            Send a message to our gateway. If we don't reply, you have your answer.
          </p>
          <div className="mt-12 text-3xl font-mono tracking-widest">
            +1 (555) POUSSER
          </div>
        </div>
      </section>

      <footer className="py-12 px-8 flex justify-between items-center text-[10px] uppercase tracking-widest opacity-30 border-t border-zinc-900">
        <div>© 2026 POUSSER LABS. ALL RIGHTS RESERVED.</div>
        <div>STAY MEAN.</div>
      </footer>
    </div>
  );
};

export default PousserLanding;
