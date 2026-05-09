

// "use client";

// import Link from "next/link";
// import { useCart } from "@/context/CartContext";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function MedicineCard({ med }) {
//   const { addToCart } = useCart();
//   const router = useRouter();
//   const [added, setAdded] = useState(false);

//   const handleAddToCart = (e) => {
//     e.preventDefault();
//     e.stopPropagation();

//     addToCart({
//       id: med.id,
//       name: med.name,
//       price: Number(med.price),
//       image: med.image,
//       description: med.description,
//     });

//     setAdded(true);
//     setTimeout(() => setAdded(false), 1000);
//   };

//   const handleBuyNow = (e) => {
//     e.preventDefault();
//     e.stopPropagation();

//     router.push(
//       `/checkout?name=${encodeURIComponent(med.name)}&price=${med.price}&id=${med.id}`
//     );
//   };

//   return (
//     <Link href={`/medicines/${med.id}`}>
//       <div
//         className="
//           relative group
//           bg-white
//           w-full max-w-sm
//           rounded-2xl
//           overflow-hidden
//           shadow-sm
//           hover:shadow-2xl
//           transition-all duration-300
//           hover:-translate-y-2
//         "
//       >

//         {/* ⭐ Rating */}
//         <div className="absolute top-4 left-4 z-10 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
//           ⭐ 4.5
//         </div>

//         {/* IMAGE */}
//         <figure className="h-56 overflow-hidden bg-gray-50">
//           <img
//             src={med.image}
//             alt={med.name}
//             className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
//             onError={(e) => {
//               e.target.onerror = null;
//               e.target.src =
//                 "https://up.yimg.com/ib/th/id/OIP.4k2niVoRz2TCB_7asSxigAHaE7";
//             }}
//           />
//         </figure>

//         {/* BODY */}
//         <div className="p-5 bg-blue-200">

//           {/* TITLE */}
//           <h2 className="text-lg font-bold text-gray-900 line-clamp-1">
//             {med.name}
//           </h2>

//           {/* DESCRIPTION */}
//           <p className="text-sm text-gray-900 mt-1 line-clamp-2">
//             {med.description}
//           </p>

//           {/* PRICE (FIXED - SINGLE LINE NOW) */}
//           <div className="mt-3 flex items-center gap-3">

//             <p className="text-sm text-gray-900 line-through">
//               ₹{Math.round(med.price * 1.3)}
//             </p>

//             <p className="text-2xl font-bold text-green-500">
//               ₹{med.price}
//             </p>

//           </div>

//           {/* BUTTONS */}
//           <div className="flex gap-3 mt-5">

//             <button
//               onClick={handleAddToCart}
//               className={`
//                 flex-1 px-4 py-2 rounded-xl text-sm font-semibold
//                 transition-all duration-300
//                 ${
//                   added
//                     ? "bg-green-500 text-white shadow-md"
//                     : "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
//                 }
//               `}
//             >
//               {added ? "Added ✓" : "Add to Cart"}
//             </button>

//             <button
//               onClick={handleBuyNow}
//               className="
//                 flex-1 px-4 py-2 rounded-xl text-sm font-semibold
//                 bg-gradient-to-r from-blue-600 to-blue-700
//                 text-white hover:scale-105 transition
//                 shadow-sm hover:shadow-blue-400/30
//               "
//             >
//               Buy Now
//             </button>

//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// }

"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import {
  ShoppingCart,
  Zap,
  ShieldCheck,
  Star,
} from "lucide-react";

export default function MedicineCard({ med }) {
  const { addToCart } = useCart();
  const router = useRouter();

  const [added, setAdded] = useState(false);

  /* ADD TO CART */
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    addToCart({
      id: med.id,
      name: med.name,
      price: Number(med.price),
      image: med.image,
      description: med.description,
    });

    toast.success(`${med.name} added to cart`);

    setAdded(true);

    setTimeout(() => setAdded(false), 1200);
  };

  /* BUY NOW */
  const handleBuyNow = (e) => {
    e.preventDefault();
    e.stopPropagation();

    router.push(
      `/checkout?name=${encodeURIComponent(
        med.name
      )}&price=${med.price}&id=${med.id}`
    );
  };

  return (
    <Link href={`/medicines/${med.id}`}>
      <div
        className="
          relative group
          bg-white
          rounded-[28px]
          overflow-hidden
          border border-slate-200
          shadow-sm
          hover:shadow-2xl
          transition-all duration-500
          hover:-translate-y-2
        "
      >

        {/* TOP BADGES */}
        <div className="absolute top-4 left-4 z-20 flex gap-2">

          {/* RATING */}
          <div
            className="
              flex items-center gap-1
              bg-[#162555]
              text-white
              text-xs font-semibold
              px-3 py-1.5
              rounded-full
              shadow-lg
            "
          >
            <Star size={12} fill="white" />
            4.8
          </div>

         

        </div>

        {/* IMAGE AREA */}
        <div className="relative h-60 overflow-hidden bg-slate-50">

          {/* GLOW */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-[#162555]/5
              to-transparent
              z-10
            "
          />

          <img
            src={med.image}
            alt={med.name}
            className="
              w-full h-full object-cover
              group-hover:scale-110
              transition duration-700
            "
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://up.yimg.com/ib/th/id/OIP.4k2niVoRz2TCB_7asSxigAHaE7";
            }}
          />

        </div>

        {/* CONTENT */}
        <div className="p-5 bg-[#C6E9FF]">

          

          {/* TITLE */}
          <h2
            className="
              text-xl font-bold
              text-[#162555]
              line-clamp-1
            "
          >
            {med.name}
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              text-m text-slate-600
              mt-2 line-clamp-2
              leading-relaxed
            "
          >
            {med.description ||
              "Advanced clinically verified pharmaceutical medicine."}
          </p>

          {/* PRICE */}
          <div className="mt-5 flex items-end gap-3">

            <p className="text-xl text-slate-400 line-through">
              ₹{Math.round(med.price * 1.3)}
            </p>

            <p className="text-xl font-bold text-green-600">
              ₹{med.price}
            </p>

          </div>

          {/* DELIVERY */}
          <div
            className="
              mt-3
              flex items-center gap-2
              text-sm text-slate-500
            "
          >
            <Zap size={15} className="text-cyan-500" />
            Fast delivery available
          </div>

          {/* BUTTONS */}
          <div className="flex gap-3 mt-6">

            {/* ADD TO CART */}
            <button
              onClick={handleAddToCart}
              className={`
                flex-1
                py-3 rounded-2xl
                text-sm font-semibold
                transition-all duration-300
                flex items-center justify-center gap-2
                ${
                  added
                    ? "bg-green-500 text-white shadow-lg"
                    : "bg-[#162555] hover:bg-[#1f3477] text-white shadow-md"
                }
              `}
            >
              <ShoppingCart size={17} />

              {added ? "Added ✓" : "Add to Cart"}
            </button>

            {/* BUY NOW */}
            <button
              onClick={handleBuyNow}
              className="
                flex-1
                py-3 rounded-2xl
                text-sm font-semibold
                bg-cyan-500 hover:bg-cyan-400
                text-white
                transition-all duration-300
                hover:scale-[1.03]
                shadow-md
              "
            >
              Buy Now
            </button>

          </div>

        </div>
      </div>
    </Link>
  );
}