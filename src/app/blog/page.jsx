// // "use client";

// // import { useMedicines } from "@/context/MedicineContext";
// // import Link from "next/link";

// // export default function BlogPage() {
// //   const { medicines } = useMedicines();

// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-white via-slate-100 to-[#e9efff] px-4 py-10">

// //       {/* HEADER */}
// //       <div className="max-w-6xl mx-auto mb-10">
// //         <h1 className="text-3xl font-bold text-[#162555]">
// //           Medicine Blog
// //         </h1>
// //         <p className="text-slate-500 text-sm mt-1">
// //           Explore detailed information of all medicines
// //         </p>
// //       </div>

// //       {/* BLOG FEED */}
// //       <div className="max-w-4xl mx-auto space-y-10">

// //         {medicines.map((med) => (
// //           <div
// //             key={med.id}
// //             className="
// //               bg-[#E7F4FC]
// //               border border-slate-200
// //               rounded-3xl
// //               shadow-md
// //               overflow-hidden
// //             "
// //           >

// //             {/* IMAGE */}
// //             <img
// //               src={med.image}
// //               className="w-full h-64 object-cover"
// //               alt={med.name}
// //             />

// //             {/* CONTENT */}
// //             <div className="p-6">

// //               {/* TITLE */}
// //               <h2 className="text-2xl font-bold text-[#162555] mb-2">
// //                 {med.name}
// //               </h2>

// //               {/* DESCRIPTION */}
// //               <p className="text-slate-600 mb-4">
// //                 {med.description ||
// //                   "Premium pharmaceutical-grade medicine used for treatment and care."}
// //               </p>

// //               {/* PRICE */}
// //               <div className="flex items-center gap-3 mb-4">

// //                 {med.marketPrice && (
// //                   <span className="text-slate-400 line-through">
// //                     ₹{med.marketPrice}
// //                   </span>
// //                 )}

// //                 <span className="text-cyan-600 font-bold text-xl">
// //                   ₹{med.price}
// //                 </span>

// //               </div>

// //               {/* CTA */}
// //               <Link href={`/medicines/${med.id}`}>
// //                 <button className="px-5 py-2 bg-[#162555] text-white rounded-xl hover:bg-[#1f3477] transition">
// //                   View Full Details
// //                 </button>
// //               </Link>

// //             </div>

// //           </div>
// //         ))}

// //       </div>

// //     </div>
// //   );
// // }

// "use client";

// import { useMedicines } from "@/context/MedicineContext";
// import { useCart } from "@/context/CartContext";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { toast } from "react-hot-toast";

// export default function BlogPage() {
//   const { medicines } = useMedicines();
//   const { addToCart } = useCart();
//   const router = useRouter();

//   const handleAddToCart = (med) => {
//     addToCart({ ...med, qty: 1 });
//     toast.success(`${med.name} added to cart`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white via-slate-100 to-[#e9efff] px-4 py-10">

//       {/* HEADER */}
//       <div className="max-w-6xl mx-auto mb-10">
//         <h1 className="text-3xl font-bold text-[#162555]">
//           Medicine Blog Feed
//         </h1>
//         <p className="text-slate-500 text-sm">
//           All medicine details in one continuous view
//         </p>
//       </div>

//       {/* FEED */}
//       <div className="space-y-10 max-w-6xl mx-auto">

//         {medicines.map((medicine, index) => (
//           <div
//             key={index}
//             className="
//               relative
//               grid lg:grid-cols-2 gap-8
//               bg-[#E7F4FC]
//               border border-white/70
//               rounded-[2rem]
//               p-6
//               shadow-xl
//             "
//           >

//             {/* LEFT IMAGE */}
//             <div className="bg-white rounded-3xl p-4 flex justify-center border border-slate-200 shadow-sm">

//               <img
//                 src={medicine.image}
//                 alt={medicine.name}
//                 className="h-[380px] w-full object-contain rounded-2xl bg-white"
//               />

//             </div>

//             {/* RIGHT CONTENT */}
//             <div className="flex flex-col justify-center">

//               {/* TITLE */}
//               <h1 className="text-3xl font-extrabold mb-3 text-[#162555]">
//                 {medicine.name}
//               </h1>

//               {/* DESCRIPTION */}
//               <p className="text-slate-600 leading-relaxed mb-5">
//                 {medicine.description ||
//                   "Premium pharmaceutical-grade formulation used in clinical systems."}
//               </p>

//               {/* PRICE */}
//               <div className="flex items-center gap-3 mb-6">

//                 {medicine.marketPrice && (
//                   <span className="text-slate-400 line-through text-lg">
//                     ₹{medicine.marketPrice}
//                   </span>
//                 )}

//                 <span className="text-3xl font-bold text-cyan-600">
//                   ₹{medicine.price}
//                 </span>

//               </div>

//               {/* QUANTITY FIXED (STATIC 1 for blog feed) */}
//               <div className="flex items-center gap-4 mb-7">

//                 <span className="text-sm text-slate-500">
//                   Quantity: 1
//                 </span>

//               </div>

//               {/* ACTIONS */}
//               <div className="flex flex-wrap gap-4">

//                 {/* ADD TO CART */}
//                 <button
//                   onClick={() => handleAddToCart(medicine)}
//                   className="
//                     px-6 py-3 rounded-2xl font-semibold
//                     bg-[#162555] hover:bg-[#1f3477]
//                     text-white transition-all duration-300
//                   "
//                 >
//                   Add to Cart
//                 </button>

//                 {/* BUY NOW */}
//                 <button
//                   onClick={() =>
//                     router.push(
//                       `/checkout?name=${encodeURIComponent(
//                         medicine.name
//                       )}&price=${medicine.price}&id=${medicine.id}&qty=1`
//                     )
//                   }
//                   className="
//                     px-6 py-3 rounded-2xl
//                     bg-cyan-500 hover:bg-cyan-400
//                     text-white font-semibold
//                     transition-all duration-300
//                   "
//                 >
//                   Buy Now
//                 </button>

//               </div>

//             </div>
//           </div>
//         ))}

//       </div>
//     </div>
//   );
// }
"use client";

import { useMedicines } from "@/context/MedicineContext";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function BlogPage() {
  const { medicines } = useMedicines();
  const { addToCart } = useCart();
  const router = useRouter();

  // local state per card will be handled via index map
  const [qtyMap, setQtyMap] = useState({});
  const [imgMap, setImgMap] = useState({});

  const handleQtyChange = (id, type) => {
    setQtyMap((prev) => {
      const current = prev[id] || 1;
      return {
        ...prev,
        [id]:
          type === "inc"
            ? current + 1
            : Math.max(1, current - 1),
      };
    });
  };

  const handleAddToCart = (medicine, qty) => {
    addToCart({ ...medicine, qty });
    toast.success(`${medicine.name} added to cart`);
  };

  const handleImgChange = (id, index) => {
    setImgMap((prev) => ({
      ...prev,
      [id]: index,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-100 to-[#e9efff] px-4 py-10">

      {/* HEADER */}
      

      {/* FEED */}
      <div className="space-y-12 max-w-6xl mx-auto">

        {medicines.map((medicine) => {

          const images = medicine.images?.length
            ? medicine.images
            : [medicine.image];

          const activeImg = imgMap[medicine.id] || 0;
          const qty = qtyMap[medicine.id] || 1;

          return (
            <div
              key={medicine.id}
              className="
                grid lg:grid-cols-2 gap-8
                bg-[#C6E9FF]
                border border-white/70
                rounded-[2rem]
                p-6
                shadow-xl
              "
            >

              {/* LEFT IMAGE SECTION */}
              <div>

                {/* MAIN IMAGE */}
                <div className="bg-white rounded-3xl p-4 flex justify-center border border-slate-200 shadow-sm">

                  <img
                    src={images[activeImg]}
                    alt={medicine.name}
                    className="h-[420px] w-full object-contain rounded-2xl bg-white"
                  />

                </div>

                {/* THUMBNAILS */}
                <div className="flex gap-3 mt-4 overflow-x-auto pb-2">

                  {images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      onClick={() => handleImgChange(medicine.id, idx)}
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

              {/* RIGHT CONTENT */}
              <div className="flex flex-col justify-center">

                {/* TITLE */}
                <h1 className="text-4xl font-extrabold mb-3 text-[#162555]">
                  {medicine.name}
                </h1>

                {/* DESCRIPTION */}
                <p className="text-slate-600 leading-relaxed mb-5">
                  {medicine.description}
                </p>

                {/* PRICE */}
                <div className="flex items-center gap-3 mb-6">

                  {medicine.marketPrice && (
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
                    onClick={() => handleQtyChange(medicine.id, "dec")}
                    className="h-10 w-10 rounded-xl bg-[#162555] text-white hover:scale-105 transition"
                  >
                    -
                  </button>

                  <span className="text-lg font-bold">{qty}</span>

                  <button
                    onClick={() => handleQtyChange(medicine.id, "inc")}
                    className="h-10 w-10 rounded-xl bg-[#162555] text-white hover:scale-105 transition"
                  >
                    +
                  </button>

                </div>

                {/* ACTIONS */}
                <div className="flex flex-wrap gap-4">

                  <button
                    onClick={() => handleAddToCart(medicine, qty)}
                    className="
                      px-6 py-3 rounded-2xl font-semibold
                      bg-[#162555] hover:bg-[#1f3477]
                      text-white transition
                    "
                  >
                    Add to Cart
                  </button>

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
                      transition
                    "
                  >
                    Buy Now
                  </button>

                </div>

              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}