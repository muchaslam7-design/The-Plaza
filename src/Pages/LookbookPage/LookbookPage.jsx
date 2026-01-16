import React from 'react';

const LookbookPage = () => {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      {/* Header Section */}
      <div className="bg-gray-100 py-20 px-10 relative overflow-hidden mb-16">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-black text-black uppercase tracking-tighter italic leading-none">
            Lookbook <span className="text-purple-600">'25</span>
          </h1>
          <p className="text-gray-500 font-bold mt-4 uppercase tracking-[0.3em] text-sm md:text-base">
            Exploring the "Modern Minimalist" Vibe
          </p>
        </div>
        
        {/* Decorative Shapes for Brand Identity */}
        <div className="absolute left-10 top-5 w-24 h-24 border-[20px] border-purple-500 rotate-12 opacity-10"></div>
        <div className="absolute right-10 bottom-5 w-20 h-20 border-[15px] border-pink-500 -rotate-12 opacity-10"></div>
      </div>

      {/* Main Layout Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* 1. Large Hero Image (Storytelling) */}
        <div className="md:col-span-8 group relative overflow-hidden h-[600px] shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop" 
            alt="The Plaza Model Shoot" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          <div className="absolute bottom-10 left-10 text-white z-10">
            <h3 className="text-4xl font-black uppercase italic">Urban Signature</h3>
            <p className="mt-2 font-medium opacity-80 uppercase tracking-widest text-sm">Summer '25 Edition</p>
          </div>
          <div className="absolute inset-6 border border-white/20 pointer-events-none"></div>
        </div>

        {/* 2. Side Text & Design Block */}
        <div className="md:col-span-4 bg-black p-12 flex flex-col justify-between text-white shadow-xl">
          <div className="w-12 h-1 bg-purple-500"></div>
          <div>
            <h2 className="text-3xl font-black uppercase italic mb-6 leading-tight">Beyond <br/> Fashion</h2>
            <p className="text-gray-400 text-sm leading-relaxed italic">
              "We believe style is a way to say who you are without having to speak."
            </p>
          </div>
          <button className="text-left font-black uppercase text-xs tracking-[0.2em] hover:text-purple-500 transition-colors">
            Discover More —
          </button>
        </div>

        {/* 3. Detail Shot (Sidebar) */}
        <div className="md:col-span-4 group relative overflow-hidden h-[450px] shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop" 
            alt="Product Detail" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white border border-white px-6 py-2 uppercase font-bold text-xs tracking-widest">Minimalist</span>
          </div>
        </div>

        {/* 4. Wide Feature Image */}
        <div className="md:col-span-8 group relative overflow-hidden h-[450px] shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop" 
            alt="Collection View" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-purple-900/10"></div>
          {/* Decorative floating square */}
          <div className="absolute top-8 right-8 w-20 h-20 border-[10px] border-pink-400/30 -rotate-12"></div>
        </div>

      </div>
    </div>
  );
};

export default LookbookPage;