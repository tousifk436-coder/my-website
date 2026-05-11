

"use client";

import { useParams, useRouter } from "next/navigation";
import { useMedicines } from "@/context/MedicineContext";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import Link from "next/link";
import { toast } from "react-hot-toast";

export default function MedicineDetailPage() {
  const { id } = useParams();
  const router = useRouter();

  const { medicines } = useMedicines();
  const { addToCart } = useCart();

  const medicine = medicines.find((m) => String(m.id) === String(id));

  const [added, setAdded] = useState(false);
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);

  // ⭐ REVIEWS STATE (NEW)
  const [reviews, setReviews] = useState([
    { text: "Highly effective and clinically verified formulation.", user: "User 1" },
    { text: "Good quality product and fast delivery.", user: "User 2" },
  ]);

  const [reviewText, setReviewText] = useState("");

  if (!medicine) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-[#162555] text-lg font-semibold">
          Medicine not found
        </p>
      </div>
    );
  }

  const images = medicine.images?.length
    ? medicine.images
    : [medicine.image || "https://via.placeholder.com/400"];

  const handleAddToCart = () => {
    addToCart({ ...medicine, qty });
    toast.success(`${medicine.name} added to cart`);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  // ⭐ ADD REVIEW FUNCTION
  const handleAddReview = () => {
    if (!reviewText.trim()) return;

    setReviews((prev) => [
      { text: reviewText, user: "You" },
      ...prev,
    ]);

    setReviewText("");
    toast.success("Review added");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-100 to-[#e9efff] text-[#162555] px-6 py-10 relative overflow-hidden">

      {/* BACKGROUND GLOW (UNCHANGED) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-[-100px] w-[300px] h-[300px] bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-[-120px] w-[350px] h-[350px] bg-[#162555]/10 rounded-full blur-3xl"></div>
      </div>

      {/* MAIN CARD (ONLY BG COLOR ADDED AS REQUESTED) */}
      <div
        className="
          relative
          max-w-6xl mx-auto
          grid lg:grid-cols-2 gap-8
          bg-[#C6E9FF]
          backdrop-blur-2xl
          border border-white/70
          rounded-[2rem]
          p-6
          shadow-xl
        "
      >

        {/* LEFT */}
        <div>

          <div className="bg-white rounded-3xl p-4 flex justify-center border border-slate-200 shadow-sm">

            <img
              src={images[activeImg]}
              alt={medicine.name}
              className="h-[420px] w-full object-contain rounded-2xl bg-white"
            />

          </div>

          <div className="flex gap-3 mt-4 overflow-x-auto pb-2">

            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                onClick={() => setActiveImg(idx)}
                className={`h-20 w-20 object-cover rounded-xl cursor-pointer border-2 transition
                ${activeImg === idx
                  ? "border-cyan-500 scale-105"
                  : "border-slate-200 opacity-70 hover:opacity-100"}`}
              />
            ))}

          </div>

        </div>

        {/* RIGHT */}
        <div className="flex flex-col justify-center">

          <h1 className="text-4xl font-extrabold mb-3 text-[#162555]">
            {medicine.name}
          </h1>

          <p className="text-slate-600 leading-relaxed mb-5">
            {medicine.description ||
              "Premium pharmaceutical-grade formulation used in clinical systems."}
          </p>

          {/* ⭐ PRICE (FIXED ORIGINAL + STRIKE) */}
         {/* PRICE */}
<div className="flex items-center gap-3 mb-6">

  {/* FORCE CHECK (DO NOT RELY ON TRUTHY/FALSY) */}
  {medicine.marketPrice != null &&
    Number(medicine.marketPrice) > Number(medicine.price) && (
      <span className="text-slate-400 line-through text-lg">
        ₹{medicine.marketPrice}
      </span>
    )}

  <span className="text-4xl font-bold text-cyan-600">
    ₹{medicine.price}
  </span>

</div>
          {/* QUANTITY */}
          <div className="flex items-center gap-4 mb-7">

            <button
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="h-10 w-10 rounded-xl bg-[#162555] text-white hover:scale-105 transition"
            >
              -
            </button>

            <span className="text-lg font-bold">{qty}</span>

            <button
              onClick={() => setQty((q) => q + 1)}
              className="h-10 w-10 rounded-xl bg-[#162555] text-white hover:scale-105 transition"
            >
              +
            </button>

          </div>

          {/* ACTIONS */}
          <div className="flex flex-wrap gap-4">

            <button
              onClick={handleAddToCart}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300
              ${added
                ? "bg-green-500 text-white"
                : "bg-[#162555] hover:bg-[#1f3477] text-white"}`}
            >
              {added ? "Added ✓" : "Add to Cart"}
            </button>

            <button
              onClick={() =>
                router.push(
                  `/checkout?name=${encodeURIComponent(
                    medicine.name
                  )}&price=${medicine.price}&id=${medicine.id}&qty=${qty}`
                )
              }
              className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-white font-semibold transition-all duration-300 hover:scale-105"
            >
              Buy Now
            </button>

          </div>

        </div>
      </div>

      {/* ⭐ REVIEWS (NEW ADD REVIEW OPTION) */}
      <div className="relative max-w-6xl mx-auto mt-12">

        <h2 className="text-2xl font-bold mb-5 text-[#162555]">
          Reviews
        </h2>

        {/* ADD REVIEW */}
        <div className="flex gap-2 mb-4">

          <input
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Write a review..."
            className="flex-1 px-3 py-2 border rounded-lg bg-white"
          />

          <button
            onClick={handleAddReview}
            className="px-4 py-2 bg-[#162555] text-white rounded-lg"
          >
            Add
          </button>

        </div>

        {/* REVIEW LIST */}
        <div className="max-h-64 overflow-y-auto space-y-4 pr-2">

          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-[#E7F4FC] border border-slate-200 p-5 rounded-2xl shadow-sm"
            >
              <p className="text-sm text-slate-600 leading-relaxed">
                "{r.text}"
              </p>
              <span className="text-xs text-slate-400 mt-2 block">
                {r.user}
              </span>
            </div>
          ))}

        </div>

      </div>

      {/* ⭐ RELATED PRODUCTS (UPDATED ONLY UI CLEANUP) */}
      <div className="relative max-w-6xl mx-auto mt-12">

        <h2 className="text-2xl font-bold mb-5 text-[#162555]">
          Related Products
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">

          {medicines.slice(0, 4).map((item) => (
            <Link key={item.id} href={`/medicines/${item.id}`}>

              <div className="bg-[#E7F4FC] border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

                <img
                  src={item.image}
                  className="h-32 w-full object-cover"
                  alt={item.name}
                />

                <div className="p-3">

                  <p className="text-sm font-bold text-[#162555] line-clamp-1">
                    {item.name}
                  </p>

                  <p className="text-cyan-600 font-semibold mt-1">
                    ₹{item.price}
                  </p>

                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>

    </div>
  );
}