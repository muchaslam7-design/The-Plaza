import React, { useState } from "react";

const ShoopingCart = () => {
  // State for cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Black Shoulder Bag",
      price: 59.99,
      qty: 1,
      image: "Images/71guNLOI6rS._AC_UY900_.jpg", 
      description: "Premium vegan leather with golden chain detail."
    },
  ]);

  // State to control Checkout Modal visibility
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  // Function to update quantity
  const updateQty = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + delta) }
          : item
      )
    );
  };

  const handleClear = () => setCartItems([]);
  const total = cartItems.reduce((s, it) => s + it.price * it.qty, 0);

  // Function to handle checkout click
  const handleProceedCheckout = () => {
    if (cartItems.length > 0) {
      setIsCheckoutModalOpen(true);
    } else {
      alert("Your cart is empty!");
    }
  };

  return (
    <section className="bg-white relative">
      {/* Header row*/}
      <div className="flex justify-start bg-gray-200 py-16 px-16 relative overflow-visible">
        <div className="text-[20px] text-gray-500">
          Home / Sales / Bags / <span className="text-black">Cart</span>
        </div>

        {/* Decorative squares design */}
        <div className="relative flex flex-col gap-6 items-right ml-auto">
          <div className="w-15 h-16 border-[18px] border-pink-500 rotate-[20deg] absolute opacity-50 right-52"></div>
          <div className="w-18 h-20 border-[20px] border-indigo-500 -rotate-[10deg] absolute bottom-[-80px] right-72 opacity-50 z-50"></div>
        </div>
      </div>

      <div className="flex">
        {/* Main content area */}
        <div className="flex-1 px-10 py-8">
          <h3 className="text-2xl font-semibold mb-6">Cart</h3>

          <div className="w-full overflow-x-auto">
            <table className="w-full table-fixed">
              <thead>
                <tr className="text-left text-gray-500 text-sm border-b">
                  <th className="py-4 w-2/5">Product</th>
                  <th className="py-4 w-1/6 text-center">Price</th>
                  <th className="py-4 w-1/6 text-center">Quantity</th>
                  <th className="py-4 w-1/6 text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="align-middle border-b">
                    <td className="py-6">
                      <div className="flex items-center gap-6">
                        <div className="w-28 h-28 bg-gray-50 rounded flex items-center justify-center overflow-hidden border">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="text-base font-medium">{item.name}</div>
                          <div className="text-xs text-gray-400 mt-2">
                                  {item.description}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="py-6 text-center text-gray-700">
                      ${item.price.toFixed(2)}
                    </td>

                    <td className="py-6">
                      <div className="flex items-center justify-center gap-0 border rounded w-fit mx-auto overflow-hidden">
                        <button 
                          onClick={() => updateQty(item.id, -1)}
                          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 font-bold border-r"
                        >
                          −
                        </button>
                        <span className="px-4 py-1 bg-white min-w-[40px] text-center font-medium">
                          {item.qty}
                        </span>
                        <button 
                          onClick={() => updateQty(item.id, 1)}
                          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 font-bold border-l"
                        >
                          +
                        </button>
                      </div>
                    </td>

                    <td className="py-6 text-right font-semibold">
                      ${(item.price * item.qty).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Action row */}
          <div className="flex justify-between items-center mt-8">
            <div className="flex items-center gap-4">
              <button
                onClick={handleClear}
                className="px-6 py-2 border rounded text-sm text-red-600 hover:bg-red-50 transition-colors"
              >
                Clear cart
              </button>
              <button className="px-6 py-2 text-sm border rounded hover:bg-gray-50 transition-colors">
                Update Cart
              </button>
            </div>

            <div className="text-right">
              <div className="text-gray-500 text-sm">Cart Total</div>
              <div className="text-2xl font-bold text-purple-700">${total.toFixed(2)}</div>
              {/* Trigger the Modal on click */}
              <button 
                onClick={handleProceedCheckout}
                className="mt-4 px-8 py-3 bg-black text-white font-bold rounded hover:opacity-80 transition-opacity"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- Checkout Modal Overlay --- */}
      {isCheckoutModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] px-4">
          <div className="bg-white p-8 md:p-10 max-w-md w-full text-center relative shadow-2xl border-t-8 border-purple-600">
            {/* Modal Design Element */}
            <div className="w-16 h-16 border-[12px] border-indigo-500 -rotate-12 absolute -top-8 -left-4 opacity-40"></div>
            
            <div className="text-5xl mb-4">🛒</div>
            <h2 className="text-3xl font-black uppercase italic mb-2">Order Confirmed</h2>
            <p className="text-gray-500 mb-6 font-medium">
              Thank you for shopping at <span className="text-purple-600">The Plaza</span>. Your total bill is <span className="font-bold text-black">${total.toFixed(2)}</span>.
            </p>
            
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => setIsCheckoutModalOpen(false)}
                className="w-full bg-black text-white font-bold py-3 uppercase tracking-widest hover:bg-purple-600 transition-colors"
              >
                Complete Payment
              </button>
              <button 
                onClick={() => setIsCheckoutModalOpen(false)}
                className="w-full bg-white border border-gray-200 text-gray-400 font-bold py-3 uppercase tracking-widest hover:bg-gray-50 transition-colors"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ShoopingCart;