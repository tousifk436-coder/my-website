

// // "use client";

// // import { useParams, useRouter } from "next/navigation";
// // import { useMedicines } from "@/context/MedicineContext";
// // import { useCart } from "@/context/CartContext";
// // import { useState } from "react";
// // import Link from "next/link";

// // export default function MedicineDetailPage() {
// //   const { id } = useParams();
// //   const router = useRouter();

// //   const { medicines } = useMedicines();
// //   const { addToCart } = useCart();

// //   const medicine = medicines.find((m) => String(m.id) === String(id));

// //   const [added, setAdded] = useState(false);
// //   const [qty, setQty] = useState(1);
// //   const [activeImg, setActiveImg] = useState(0);

// //   if (!medicine) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center bg-gray-50">
// //         <p className="text-gray-500">Medicine not found</p>
// //       </div>
// //     );
// //   }

// //   const images = medicine.images?.length
// //     ? medicine.images
// //     : [medicine.image || "https://via.placeholder.com/400"];

// //   const handleAddToCart = () => {
// //     addToCart({ ...medicine, qty });
// //     setAdded(true);
// //     setTimeout(() => setAdded(false), 1200);
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white px-6 py-10">

// //       {/* TOP HEADER */}
// //       <div className="max-w-6xl mx-auto flex items-center justify-between mb-6">
// //         <button
// //           onClick={() => router.back()}
// //           className="px-4 py-2 rounded-full bg-slate-800/60 hover:bg-slate-700 transition"
// //         >
// //           Back
// //         </button>

// //         <div className="text-sm text-slate-400">
// //           Medicine Details
// //         </div>
// //       </div>

// //       {/* MAIN CARD */}
// //       <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 shadow-2xl">

// //         {/* LEFT */}
// //         <div>
// //           <div className="bg-black/40 rounded-2xl p-4 flex justify-center">
// //             <img
// //               src={images[activeImg]}
// //               className="h-80 w-full object-cover rounded-xl"
// //             />
// //           </div>

// //           {/* THUMBNAILS */}
// //           <div className="flex gap-3 mt-4 overflow-x-auto">
// //             {images.map((img, idx) => (
// //               <img
// //                 key={idx}
// //                 src={img}
// //                 onClick={() => setActiveImg(idx)}
// //                 className={`h-16 w-16 object-cover rounded-lg cursor-pointer border-2
// //                 ${activeImg === idx ? "border-cyan-400" : "border-transparent"}`}
// //               />
// //             ))}
// //           </div>
// //         </div>

// //         {/* RIGHT */}
// //         <div className="flex flex-col justify-center">

// //           <h1 className="text-3xl font-bold mb-2">
// //             {medicine.name}
// //           </h1>

// //           <p className="text-slate-300 mb-4">
// //             {medicine.description ||
// //               "Premium pharmaceutical-grade formulation used in clinical systems."}
// //           </p>

// //           {/* PRICE */}
// //           <div className="flex items-center gap-3 mb-6">
// //             <span className="text-3xl font-bold text-cyan-400">
// //               ₹{medicine.price}
// //             </span>
// //           </div>

// //           {/* 🧬 NEW SECTION: MEDICAL DETAILS */}
// //           <div className="space-y-4 mb-6">

// //             {/* USES */}
// //             <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700">
// //               <h3 className="text-cyan-400 font-semibold mb-1">Uses</h3>
// //               <p className="text-sm text-slate-300">
// //                 {medicine.uses || "Used for general medical treatment and therapy support."}
// //               </p>
// //             </div>

// //             {/* DOSAGE */}
// //             <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700">
// //               <h3 className="text-cyan-400 font-semibold mb-1">Dosage</h3>
// //               <p className="text-sm text-slate-300">
// //                 {medicine.dosage || "As prescribed by physician. Typically 1–2 doses daily."}
// //               </p>
// //             </div>

// //             {/* SIDE EFFECTS */}
// //             <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700">
// //               <h3 className="text-cyan-400 font-semibold mb-1">Side Effects</h3>
// //               <p className="text-sm text-slate-300">
// //                 {medicine.sideEffects || "May include mild nausea, headache or dizziness in rare cases."}
// //               </p>
// //             </div>

// //           </div>

// //           {/* QTY */}
// //           <div className="flex items-center gap-4 mb-6">
// //             <button
// //               onClick={() => setQty((q) => Math.max(1, q - 1))}
// //               className="px-3 py-1 bg-slate-800 rounded"
// //             >
// //               -
// //             </button>

// //             <span className="font-semibold">{qty}</span>

// //             <button
// //               onClick={() => setQty((q) => q + 1)}
// //               className="px-3 py-1 bg-slate-800 rounded"
// //             >
// //               +
// //             </button>
// //           </div>

// //           {/* ACTIONS */}
// //           <div className="flex gap-4">
// //             <button
// //               onClick={handleAddToCart}
// //               className={`px-5 py-3 rounded-lg font-semibold
// //               ${added ? "bg-green-500" : "bg-cyan-600 hover:bg-cyan-700"}`}
// //             >
// //               {added ? "Added ✓" : "Add to Cart"}
// //             </button>

// //             <button className="px-5 py-3 rounded-lg bg-white text-black font-semibold">
// //               Buy Now
// //             </button>
// //           </div>

// //         </div>
// //       </div>

// //       {/* REVIEWS (UNCHANGED) */}
// //       <div className="max-w-6xl mx-auto mt-10">
// //         <h2 className="text-xl font-semibold mb-3">Reviews</h2>

// //         <div className="max-h-64 overflow-y-auto space-y-3 pr-2">
// //           {[1, 2, 3, 4, 5].map((r) => (
// //             <div
// //               key={r}
// //               className="bg-slate-900 border border-slate-800 p-4 rounded-xl"
// //             >
// //               <p className="text-sm text-slate-300">
// //                 "Highly effective and clinically verified formulation."
// //               </p>
// //               <span className="text-xs text-slate-500">
// //                 User {r}
// //               </span>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* RELATED (UNCHANGED) */}
// //       <div className="max-w-6xl mx-auto mt-10">
// //         <h2 className="text-xl font-semibold mb-4">Related Products</h2>

// //         <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
// //           {medicines.slice(0, 4).map((item) => (
// //             <Link key={item.id} href={`/medicines/${item.id}`}>
// //               <div className="bg-slate-900 border border-slate-800 rounded-xl p-3">
// //                 <img src={item.image} className="h-28 w-full object-cover rounded-lg" />
// //                 <p className="mt-2 text-sm font-semibold">{item.name}</p>
// //                 <p className="text-cyan-400 text-sm">₹{item.price}</p>
// //               </div>
// //             </Link>
// //           ))}
// //         </div>
// //       </div>

// //     </div>
// //   );
// // }

// "use client";

// import { useParams, useRouter } from "next/navigation";
// import { useMedicines } from "@/context/MedicineContext";
// import { useCart } from "@/context/CartContext";
// import { useState } from "react";
// import Link from "next/link";

// export default function MedicineDetailPage() {
//   const { id } = useParams();
//   const router = useRouter();

//   const { medicines } = useMedicines();
//   const { addToCart } = useCart();

//   const medicine = medicines.find((m) => String(m.id) === String(id));

//   const [added, setAdded] = useState(false);
//   const [qty, setQty] = useState(1);
//   const [activeImg, setActiveImg] = useState(0);

//   if (!medicine) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-white">
//         <p className="text-[#162555] text-lg font-semibold">
//           Medicine not found
//         </p>
//       </div>
//     );
//   }

//   const images = medicine.images?.length
//     ? medicine.images
//     : [medicine.image || "https://via.placeholder.com/400"];

//   const handleAddToCart = () => {
//     addToCart({ ...medicine, qty });
//     setAdded(true);

//     setTimeout(() => setAdded(false), 1200);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white via-slate-100 to-[#e9efff] text-[#162555] px-6 py-10 relative overflow-hidden">

//       {/* BACKGROUND GLOW */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">

//         <div className="absolute top-10 left-[-100px] w-[300px] h-[300px] bg-cyan-400/10 rounded-full blur-3xl"></div>

//         <div className="absolute bottom-0 right-[-120px] w-[350px] h-[350px] bg-[#162555]/10 rounded-full blur-3xl"></div>

//       </div>

//       {/* TOP HEADER */}
//       <div className="relative max-w-6xl mx-auto flex items-center justify-between mb-6">

//         <button
//           onClick={() => router.back()}
//           className="
//             px-5 py-2 rounded-full
//             bg-white/80
//             border border-slate-200
//             shadow-sm
//             hover:bg-[#162555]
//             hover:text-white
//             transition
//           "
//         >
//           ← Back
//         </button>

//         <div className="text-sm text-slate-500 font-medium">
//           Medicine Details
//         </div>

//       </div>

//       {/* MAIN CARD */}
//       <div
//         className="
//           relative
//           max-w-6xl mx-auto
//           grid lg:grid-cols-2 gap-8
//           bg-white/80
//           backdrop-blur-2xl
//           border border-white/70
//           rounded-[2rem]
//           p-6
//           shadow-2xl
//         "
//       >

//         {/* LEFT */}
//         <div>

//           {/* MAIN IMAGE */}
//           <div className="bg-[#162555]/5 rounded-3xl p-4 flex justify-center border border-[#162555]/10">

//             <img
//               src={images[activeImg]}
//               className="h-80 w-full object-cover rounded-2xl"
//             />

//           </div>

//           {/* THUMBNAILS */}
//           <div className="flex gap-3 mt-4 overflow-x-auto pb-2">

//             {images.map((img, idx) => (
//               <img
//                 key={idx}
//                 src={img}
//                 onClick={() => setActiveImg(idx)}
//                 className={`
//                   h-16 w-16 object-cover rounded-xl cursor-pointer border-2 transition
//                   ${
//                     activeImg === idx
//                       ? "border-cyan-500 scale-105"
//                       : "border-transparent opacity-70"
//                   }
//                 `}
//               />
//             ))}

//           </div>

//         </div>

//         {/* RIGHT */}
//         <div className="flex flex-col justify-center">

//           {/* TITLE */}
//           <h1 className="text-4xl font-extrabold mb-3 text-[#162555]">
//             {medicine.name}
//           </h1>

//           {/* DESCRIPTION */}
//           <p className="text-slate-600 leading-relaxed mb-5">
//             {medicine.description ||
//               "Premium pharmaceutical-grade formulation used in clinical systems."}
//           </p>

//           {/* PRICE */}
//           <div className="flex items-center gap-3 mb-6">

//             <span className="text-4xl font-bold text-cyan-600">
//               ₹{medicine.price}
//             </span>

//             <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
//               Verified
//             </span>

//           </div>

//           {/* DETAILS */}
//           <div className="space-y-4 mb-6">

//             {/* USES */}
//             <div className="bg-[#162555]/5 p-4 rounded-2xl border border-[#162555]/10">

//               <h3 className="text-cyan-700 font-bold mb-2">
//                 Uses
//               </h3>

//               <p className="text-sm text-slate-600 leading-relaxed">
//                 {medicine.uses ||
//                   "Used for general medical treatment and therapy support."}
//               </p>

//             </div>

//             {/* DOSAGE */}
//             <div className="bg-[#162555]/5 p-4 rounded-2xl border border-[#162555]/10">

//               <h3 className="text-cyan-700 font-bold mb-2">
//                 Dosage
//               </h3>

//               <p className="text-sm text-slate-600 leading-relaxed">
//                 {medicine.dosage ||
//                   "As prescribed by physician. Typically 1–2 doses daily."}
//               </p>

//             </div>

//             {/* SIDE EFFECTS */}
//             <div className="bg-[#162555]/5 p-4 rounded-2xl border border-[#162555]/10">

//               <h3 className="text-cyan-700 font-bold mb-2">
//                 Side Effects
//               </h3>

//               <p className="text-sm text-slate-600 leading-relaxed">
//                 {medicine.sideEffects ||
//                   "May include mild nausea, headache or dizziness in rare cases."}
//               </p>

//             </div>

//           </div>

//           {/* QUANTITY */}
//           <div className="flex items-center gap-4 mb-7">

//             <button
//               onClick={() => setQty((q) => Math.max(1, q - 1))}
//               className="
//                 h-10 w-10 rounded-xl
//                 bg-[#162555]
//                 text-white
//                 hover:scale-105
//                 transition
//               "
//             >
//               -
//             </button>

//             <span className="text-lg font-bold">
//               {qty}
//             </span>

//             <button
//               onClick={() => setQty((q) => q + 1)}
//               className="
//                 h-10 w-10 rounded-xl
//                 bg-[#162555]
//                 text-white
//                 hover:scale-105
//                 transition
//               "
//             >
//               +
//             </button>

//           </div>

//           {/* ACTIONS */}
//           <div className="flex flex-wrap gap-4">

//             {/* ADD TO CART */}
//             <button
//               onClick={handleAddToCart}
//               className={`
//                 px-6 py-3 rounded-2xl font-semibold transition-all duration-300
//                 ${
//                   added
//                     ? "bg-green-500 text-white"
//                     : "bg-[#162555] hover:bg-[#1f3477] text-white"
//                 }
//               `}
//             >
//               {added ? "Added ✓" : "Add to Cart"}
//             </button>

            
// <button
//   onClick={() =>
//     router.push(
//       `/checkout?name=${encodeURIComponent(
//         medicine.name
//       )}&price=${medicine.price}&id=${medicine.id}&qty=${qty}`
//     )
//   }
//   className="
//     px-6 py-3 rounded-2xl
//     bg-cyan-500 hover:bg-cyan-400
//     text-white font-semibold
//     transition-all duration-300
//     hover:scale-105
//   "
// >
//   Buy Now
// </button>

//           </div>

//         </div>
//       </div>

//       {/* REVIEWS */}
//       <div className="relative max-w-6xl mx-auto mt-12">

//         <h2 className="text-2xl font-bold mb-5 text-[#162555]">
//           Reviews
//         </h2>

//         <div className="max-h-64 overflow-y-auto space-y-4 pr-2">

//           {[1, 2, 3, 4, 5].map((r) => (
//             <div
//               key={r}
//               className="
//                 bg-white/80
//                 border border-slate-200
//                 p-5 rounded-2xl
//                 shadow-sm
//               "
//             >

//               <p className="text-sm text-slate-600 leading-relaxed">
//                 "Highly effective and clinically verified formulation."
//               </p>

//               <span className="text-xs text-slate-400 mt-2 block">
//                 User {r}
//               </span>

//             </div>
//           ))}

//         </div>

//       </div>

//       {/* RELATED PRODUCTS */}
//       <div className="relative max-w-6xl mx-auto mt-12">

//         <h2 className="text-2xl font-bold mb-5 text-[#162555]">
//           Related Products
//         </h2>

//         <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">

//           {medicines.slice(0, 4).map((item) => (
//             <Link key={item.id} href={`/medicines/${item.id}`}>

//               <div
//                 className="
//                   bg-white/80
//                   border border-slate-200
//                   rounded-2xl
//                   overflow-hidden
//                   shadow-sm
//                   hover:shadow-xl
//                   transition-all duration-300
//                   hover:-translate-y-1
//                 "
//               >

//                 <img
//                   src={item.image}
//                   className="h-32 w-full object-cover"
//                 />

//                 <div className="p-3">

//                   <p className="text-sm font-bold text-[#162555] line-clamp-1">
//                     {item.name}
//                   </p>

//                   <p className="text-cyan-600 font-semibold mt-1">
//                     ₹{item.price}
//                   </p>

//                 </div>

//               </div>

//             </Link>
//           ))}

//         </div>

//       </div>
//     </div>
//   );
// }

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

    // ✅ POPUP NOTIFICATION
    toast.success(`${medicine.name} added to cart`);

    setAdded(true);

    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-100 to-[#e9efff] text-[#162555] px-6 py-10 relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">

        <div className="absolute top-10 left-[-100px] w-[300px] h-[300px] bg-cyan-400/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-[-120px] w-[350px] h-[350px] bg-[#162555]/10 rounded-full blur-3xl"></div>

      </div>

      {/* TOP HEADER */}
      <div className="relative max-w-6xl mx-auto flex items-center justify-between mb-6">

        <button
          onClick={() => router.back()}
          className="
            px-5 py-2 rounded-full
            bg-white/80
            border border-slate-200
            shadow-sm
            hover:bg-[#162555]
            hover:text-white
            transition
          "
        >
          ← Back
        </button>

        <div className="text-sm text-slate-500 font-medium">
          Medicine Details
        </div>

      </div>

      {/* MAIN CARD */}
      <div
        className="
          relative
          max-w-6xl mx-auto
          grid lg:grid-cols-2 gap-8
          bg-white/80
          backdrop-blur-2xl
          border border-white/70
          rounded-[2rem]
          p-6
          shadow-2xl
        "
      >

        {/* LEFT */}
        <div>

          {/* MAIN IMAGE */}
          <div className="bg-white rounded-3xl p-4 flex justify-center border border-slate-200 shadow-sm">

            <img
              src={images[activeImg]}
              alt={medicine.name}
              className="
                h-[420px]
                w-full
                object-contain
                rounded-2xl
                bg-white
              "
            />

          </div>

          {/* THUMBNAILS */}
          <div className="flex gap-3 mt-4 overflow-x-auto pb-2">

            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumbnail-${idx}`}
                onClick={() => setActiveImg(idx)}
                className={`
                  h-20 w-20 object-cover rounded-xl cursor-pointer border-2 transition
                  ${
                    activeImg === idx
                      ? "border-cyan-500 scale-105"
                      : "border-slate-200 opacity-70 hover:opacity-100"
                  }
                `}
              />
            ))}

          </div>

        </div>

        {/* RIGHT */}
        <div className="flex flex-col justify-center">

          {/* TITLE */}
          <h1 className="text-4xl font-extrabold mb-3 text-[#162555]">
            {medicine.name}
          </h1>

          {/* DESCRIPTION */}
          <p className="text-slate-600 leading-relaxed mb-5">
            {medicine.description ||
              "Premium pharmaceutical-grade formulation used in clinical systems."}
          </p>

          {/* PRICE */}
          <div className="flex items-center gap-3 mb-6">

            <span className="text-4xl font-bold text-cyan-600">
              ₹{medicine.price}
            </span>

            <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
              Verified
            </span>

          </div>

          {/* DETAILS */}
          <div className="space-y-4 mb-6">

            {/* USES */}
            <div className="bg-[#162555]/5 p-4 rounded-2xl border border-[#162555]/10">

              <h3 className="text-cyan-700 font-bold mb-2">
                Uses
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {medicine.uses ||
                  "Used for general medical treatment and therapy support."}
              </p>

            </div>

            {/* DOSAGE */}
            <div className="bg-[#162555]/5 p-4 rounded-2xl border border-[#162555]/10">

              <h3 className="text-cyan-700 font-bold mb-2">
                Dosage
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {medicine.dosage ||
                  "As prescribed by physician. Typically 1–2 doses daily."}
              </p>

            </div>

            {/* SIDE EFFECTS */}
            <div className="bg-[#162555]/5 p-4 rounded-2xl border border-[#162555]/10">

              <h3 className="text-cyan-700 font-bold mb-2">
                Side Effects
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {medicine.sideEffects ||
                  "May include mild nausea, headache or dizziness in rare cases."}
              </p>

            </div>

          </div>

          {/* QUANTITY */}
          <div className="flex items-center gap-4 mb-7">

            <button
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="
                h-10 w-10 rounded-xl
                bg-[#162555]
                text-white
                hover:scale-105
                transition
              "
            >
              -
            </button>

            <span className="text-lg font-bold">
              {qty}
            </span>

            <button
              onClick={() => setQty((q) => q + 1)}
              className="
                h-10 w-10 rounded-xl
                bg-[#162555]
                text-white
                hover:scale-105
                transition
              "
            >
              +
            </button>

          </div>

          {/* ACTIONS */}
          <div className="flex flex-wrap gap-4">

            {/* ADD TO CART */}
            <button
              onClick={handleAddToCart}
              className={`
                px-6 py-3 rounded-2xl font-semibold transition-all duration-300
                ${
                  added
                    ? "bg-green-500 text-white"
                    : "bg-[#162555] hover:bg-[#1f3477] text-white"
                }
              `}
            >
              {added ? "Added ✓" : "Add to Cart"}
            </button>

            {/* BUY NOW */}
            <button
              onClick={() =>
                router.push(
                  `/checkout?name=${encodeURIComponent(
                    medicine.name
                  )}&price=${medicine.price}&id=${medicine.id}&qty=${qty}`
                )
              }
              className="
                px-6 py-3 rounded-2xl
                bg-cyan-500 hover:bg-cyan-400
                text-white font-semibold
                transition-all duration-300
                hover:scale-105
              "
            >
              Buy Now
            </button>

          </div>

        </div>
      </div>

      {/* REVIEWS */}
      <div className="relative max-w-6xl mx-auto mt-12">

        <h2 className="text-2xl font-bold mb-5 text-[#162555]">
          Reviews
        </h2>

        <div className="max-h-64 overflow-y-auto space-y-4 pr-2">

          {[1, 2, 3, 4, 5].map((r) => (
            <div
              key={r}
              className="
                bg-white/80
                border border-slate-200
                p-5 rounded-2xl
                shadow-sm
              "
            >

              <p className="text-sm text-slate-600 leading-relaxed">
                "Highly effective and clinically verified formulation."
              </p>

              <span className="text-xs text-slate-400 mt-2 block">
                User {r}
              </span>

            </div>
          ))}

        </div>

      </div>

      {/* RELATED PRODUCTS */}
      <div className="relative max-w-6xl mx-auto mt-12">

        <h2 className="text-2xl font-bold mb-5 text-[#162555]">
          Related Products
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">

          {medicines.slice(0, 4).map((item) => (
            <Link key={item.id} href={`/medicines/${item.id}`}>

              <div
                className="
                  bg-white/80
                  border border-slate-200
                  rounded-2xl
                  overflow-hidden
                  shadow-sm
                  hover:shadow-xl
                  transition-all duration-300
                  hover:-translate-y-1
                "
              >

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