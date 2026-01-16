import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const API_URL = "https://fakestoreapi.com/products";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1280 }, items: 3 },
  desktop: { breakpoint: { max: 1280, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
};

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL);
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleFilter = (cat) => {
    setCategory(cat);
    if (cat === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((p) => p.category === cat));
    }
  };

  return (
    <section className="py-10 bg-white min-h-[600px]">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold uppercase tracking-wide">Premium Products</h2>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-16 flex-wrap">
        {["all", "jewelery", "electronics", "men's clothing", "women's clothing"].map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilter(cat)}
            className={`px-6 py-2 rounded-sm font-bold uppercase text-xs tracking-widest transition-all ${
              category === cat ? "bg-black text-white shadow-lg" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
          >
            {cat === "all" ? "All" : cat.split("'")[0]}
          </button>
        ))}
      </div>

      <div className="px-6">
        {loading ? (
          /* --- Professional Loader Start --- */
          <div className="flex flex-col justify-center items-center h-80 space-y-6">
            <div className="relative">
              {/* Outer Rotating Ring */}
              <div className="w-20 h-20 border-4 border-gray-100 border-t-purple-600 rounded-full animate-spin"></div>
              {/* Inner Pulsing Core */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-black rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xs font-black uppercase tracking-[0.5em] text-black animate-pulse">
                Loading Collection
              </span>
              <div className="w-24 h-[2px] bg-gray-100 mt-2 overflow-hidden">
                <div className="w-full h-full bg-purple-600 animate-[loading-bar_1.5s_infinite]"></div>
              </div>
            </div>
          </div>
          /* --- Professional Loader End --- */
        ) : filteredProducts.length === 0 ? (
          <div className="flex justify-center items-center h-60">
            <p className="text-gray-500 text-lg italic">No products found in this category.</p>
          </div>
        ) : (
          <Carousel responsive={responsive} infinite autoPlay={false} itemClass="px-3" arrows={true}>
            {filteredProducts.map((product) => (
              <div key={product.id} className="group w-72 mx-auto cursor-pointer">
                <div className="w-72 h-80 bg-white shadow-md overflow-hidden border border-transparent hover:border-4 hover:border-black transition-all duration-300">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="text-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out mt-4">
                  <h3 className="text-sm font-bold uppercase truncate px-2">{product.title}</h3>
                  <p className="text-purple-700 font-black mt-1">${product.price}</p>
                  <button className="mt-2 px-6 py-2 bg-black text-white text-[10px] font-black uppercase tracking-widest hover:bg-purple-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </Carousel>
        )}
      </div>
    </section>
  );
};

export default ProductSection;