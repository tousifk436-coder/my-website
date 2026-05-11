
"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { X, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CartDrawer({ open, setOpen }) {
  const { cart, updateQty, removeFromCart, totalPrice } = useCart();
  const router = useRouter();

  const [visible, setVisible] = useState(open);

  useEffect(() => {
    if (open) {
      setVisible(true);
    } else {
      const timer = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [open]);

  if (!visible) return null;

  const shipping = 0;
  const savings = cart.length * 50;

  const subtotal = totalPrice;
  const total = subtotal - savings + shipping;

  const handleCheckout = () => {
    // 🔥 PASS REAL CART DATA
    sessionStorage.setItem("checkout_cart", JSON.stringify(cart));
    sessionStorage.setItem(
      "checkout_total",
      JSON.stringify({
        subtotal,
        savings,
        shipping,
        total,
      })
    );

    setOpen(false);
    router.push("/checkout");
  };

  return (
    <div className="fixed inset-0 z-50 flex">

      {/* OVERLAY */}
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* DRAWER */}
      <div
        className={`ml-auto w-full sm:w-[40%] h-full bg-white shadow-2xl flex flex-col
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >

        {/* HEADER */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gradient-to-r from-orange-50 to-white">
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2">
              🛒 Shopping Cart
            </h2>
            <p className="text-sm text-gray-500">
              {cart.length} items
            </p>
          </div>

          <button onClick={() => setOpen(false)}>
            <X className="hover:text-red-500" />
          </button>
        </div>

        {/* ITEMS */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">

          {cart.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">
              Your cart is empty
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 bg-white rounded-xl p-3 shadow-md hover:shadow-lg transition"
              >

                <img
                  src={item.image}
                  className="w-16 h-16 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <h3 className="text-sm font-semibold">
                    {item.name}
                  </h3>

                  <p className="text-blue-600 font-bold">
                    ₹{item.price}
                  </p>

                  <div className="flex items-center gap-2 mt-2">

                    <button
                      onClick={() => updateQty(item.id, "dec")}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>

                    <span>{item.qty}</span>

                    <button
                      onClick={() => updateQty(item.id, "inc")}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>

                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500"
                >
                  <Trash2 size={18} />
                </button>

              </div>
            ))
          )}
        </div>

        {/* BILL */}
        <div className="border-t border-gray-100 p-4 bg-gradient-to-t from-orange-50">

          <div className="space-y-2 text-sm">

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between text-green-600">
              <span>Savings</span>
              <span>-₹{savings}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className="flex justify-between font-bold text-lg mt-2">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

          </div>

          {/* CHECKOUT BUTTON (UPDATED) */}
          <button
            onClick={handleCheckout}
            className="w-full mt-4 bg-blue-500 hover:bg-blue-400 text-white py-3 rounded-lg font-semibold transition"
          >
            🔒 Secure Checkout →
          </button>

          <p className="text-xs text-center text-gray-500 mt-3">
            SSL Secure • Multiple Payment Options
          </p>

        </div>
      </div>
    </div>
  );
}