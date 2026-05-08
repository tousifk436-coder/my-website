"use client";

import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { cart, increaseQty, decreaseQty, removeFromCart, clearCart,updateQty } = useCart();
  const { user } = useAuth();
  const router = useRouter();

  // SAFETY (prevents crash)
  if (!cart) return null;

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handleOrder = () => {
    if (!user) {
      alert("Please login first");
      router.push("/login");
      return;
    }

    alert("Order placed!");
    clearCart();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">

      <h1 className="text-2xl font-semibold mb-8 text-center">
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">
          Cart is empty
        </p>
      ) : (
        <div className="max-w-2xl mx-auto space-y-6">

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 border rounded-lg p-4 bg-white"
            >

              <img
                src={item.image}
                className="w-20 h-20 object-cover rounded"
              />

              <div className="flex-1">

                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-gray-500">
                  ₹{item.price}
                </p>

                <div className="flex items-center gap-3 mt-3">

                  <button
  onClick={() => updateQty(item.id, "dec")}
  className="px-3 py-1 bg-gray-200 rounded"
>
  -
</button>

<span className="mx-2">{item.qty || 1}</span>

<button
  onClick={() => updateQty(item.id, "inc")}
  className="px-3 py-1 bg-gray-200 rounded"
>
  +
</button>

                  {/* <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-2 border"
                  >
                    -
                  </button>

                  <span>{item.qty}</span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-2 border"
                  >
                    +
                  </button> */}

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-auto text-red-500 text-sm"
                  >
                    Remove
                  </button>

                </div>

              </div>

              <div className="font-semibold">
                ₹{item.price * item.qty}
              </div>

            </div>
          ))}

          <div className="border-t pt-4">

            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <button
              onClick={handleOrder}
              className="w-full mt-4 bg-black text-white py-3 rounded"
            >
              Checkout
            </button>

          </div>

        </div>
      )}

      <div className="flex justify-center mt-8">
  <button
    onClick={() => router.push("/")}
    className="group relative px-8 py-3 rounded-full bg-blue-600 text-white font-medium shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-2xl hover:scale-105 active:scale-95"
  >
    {/* glow effect */}
    <span className="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-30 blur-xl transition"></span>

    {/* text */}
    <span className="relative flex items-center gap-2">
      ← Back to Home
    </span>
  </button>
</div>
      
    </div>
  );
}