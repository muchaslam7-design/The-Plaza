import React from 'react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Ways to Style a Black Shoulder Bag this Winter",
      category: "STYLING",
      date: "DEC 23, 2025",
      image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=1000&auto=format&fit=crop",
      excerpt: "From oversized coats to sleek blazers, discover how to make your accessory the star of the show..."
    },
    {
      id: 2,
      title: "Why Vegan Leather is the Future of Luxury Fashion",
      category: "TRENDS",
      date: "DEC 21, 2025",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop",
      excerpt: "The fashion industry is shifting. We dive deep into why high-end brands are choosing sustainability..."
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      {/* Blog Hero Header */}
      <div className="max-w-6xl mx-auto px-10 py-16 mb-12 border-b-2 border-black flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h1 className="text-7xl font-black italic uppercase tracking-tighter leading-none">The <br/> Journal</h1>
          <p className="text-purple-600 font-bold mt-4 uppercase tracking-widest text-sm">Stories, Trends & Style Guides</p>
        </div>
        <div className="text-right hidden md:block">
            <p className="text-xs font-black text-gray-400 uppercase tracking-[0.4em]">Est. 2025</p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-6xl mx-auto px-10 grid grid-cols-1 md:grid-cols-2 gap-20">
        {blogPosts.map((post) => (
          <div key={post.id} className="group cursor-pointer">
            {/* Image Container with Border Animation */}
            <div className="relative h-[500px] overflow-hidden mb-8">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Animated Purple Overlay */}
              <div className="absolute inset-0 bg-purple-900/0 group-hover:bg-purple-900/20 transition-all duration-500"></div>
              
              {/* The "Floating Border" Effect you asked about */}
              <div className="absolute inset-4 border-2 border-white/0 group-hover:border-white/40 transition-all duration-500 pointer-events-none"></div>
              
              {/* Category Tag */}
              <div className="absolute top-6 left-6 bg-black text-white text-[10px] font-black px-4 py-2 tracking-widest">
                {post.category}
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-4">
              <p className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">{post.date}</p>
              <h2 className="text-3xl font-bold uppercase italic group-hover:text-purple-600 transition-colors leading-tight">
                {post.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed italic">
                {post.excerpt}
              </p>
              <div className="pt-4">
                <button className="text-xs font-black uppercase tracking-widest border-b-2 border-black pb-1 hover:border-purple-600 hover:text-purple-600 transition-all">
                  Read Full Story
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Brand Element at bottom */}
      <div className="mt-32 flex justify-center opacity-20">
          <div className="w-20 h-20 border-[15px] border-purple-500 rotate-45"></div>
      </div>
    </div>
  );
};

export default BlogPage;