

"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useMedicines } from "@/context/MedicineContext";
import MedicineCard from "@/components/MedicineCard";

import {
  SlidersHorizontal,
  X,
  Star,
  ShieldCheck,
  FlaskConical,
} from "lucide-react";

export default function MedicinesPage() {
  const { medicines } = useMedicines();
  const searchParams = useSearchParams();

  const initialSearch = searchParams.get("search") || "";

  const [search, setSearch] = useState(initialSearch);

  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState(10000);
  const [rating, setRating] = useState(0);
  const [verifiedOnly, setVerifiedOnly] = useState(false);

  const [openFilter, setOpenFilter] = useState(false);

  const categories = [
    "all",
    ...new Set(medicines.map((m) => m.category || "general")),
  ];

  const filtered = medicines.filter((med) => {
    const matchSearch = med.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "all" || (med.category || "general") === category;

    const matchPrice = Number(med.price) <= price;

    const medRating = med.rating || 4.5;
    const matchRating = medRating >= rating;

    const matchVerified = verifiedOnly
      ? med.verified !== false
      : true;

    return (
      matchSearch &&
      matchCategory &&
      matchPrice &&
      matchRating &&
      matchVerified
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-[#eef3ff] text-[#162555] relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute top-0 left-[-120px] w-[320px] h-[320px] bg-cyan-300/20 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-[-150px] w-[350px] h-[350px] bg-[#162555]/10 rounded-full blur-3xl" />

      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-10">

        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-700 text-sm font-medium mb-4">
              <FlaskConical size={16} />
              US FORENSIC PHARMACY
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Available Medicines
            </h1>

            <p className="text-slate-500 mt-3 max-w-2xl">
              Explore verified medicines with forensic-grade filtering,
              category analysis, pricing controls, and medical validation.
            </p>

          </div>

          {/* RIGHT */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">

            {/* SEARCH */}
            <div
              className="
                flex items-center gap-3
                bg-white/80
                border border-slate-200
                backdrop-blur-xl
                rounded-2xl
                px-4 py-3
                shadow-sm
                w-full sm:w-[320px]
              "
            >
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search medicines..."
                className="w-full bg-transparent outline-none text-[#162555] placeholder-slate-400"
              />
            </div>

            {/* FILTER BUTTON */}
            <button
              onClick={() => setOpenFilter(true)}
              className="
                flex items-center justify-center gap-2
                bg-[#162555]
                hover:bg-[#1e3470]
                text-white
                px-5 py-3
                rounded-2xl
                font-semibold
                transition-all duration-300
                shadow-lg
              "
            >
              <SlidersHorizontal size={18} />
              Filters
            </button>

          </div>
        </div>

        {/* RESULT COUNT */}
        <div className="mb-8 flex items-center gap-2 text-slate-500">

          <ShieldCheck size={18} className="text-cyan-600" />

          <span>
            <span className="font-bold text-cyan-700">
              {filtered.length}
            </span>{" "}
            verified medicine
          </span>

        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">

          {filtered.map((med) => (
            <MedicineCard key={med.id} med={med} />
          ))}

        </div>

        {/* EMPTY */}
        {filtered.length === 0 && (
          <div className="text-center py-24">

            <div className="text-2xl font-bold text-[#162555]">
              No Medicines Found
            </div>

            <p className="text-slate-500 mt-3">
              Try changing filters or search keyword.
            </p>

          </div>
        )}

      </div>

      {/* FILTER DRAWER */}
      {openFilter && (
        <div className="fixed inset-0 z-50 flex justify-end">

          {/* OVERLAY */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpenFilter(false)}
          />

          {/* PANEL */}
          <div
            className="
              relative
              w-full sm:w-[400px]
              h-full
              bg-white
              shadow-2xl
              p-6
              overflow-y-auto
              animate-slideIn
            "
          >

            {/* HEADER */}
            <div className="flex items-center justify-between mb-8">

              <div>
                <h2 className="text-2xl font-bold text-[#162555]">
                  Filter Panel
                </h2>

                <p className="text-slate-500 text-sm mt-1">
                  Forensic medicine controls
                </p>
              </div>

              <button
                onClick={() => setOpenFilter(false)}
                className="
                  h-10 w-10 rounded-xl
                  bg-slate-100
                  hover:bg-slate-200
                  flex items-center justify-center
                  transition
                "
              >
                <X size={18} />
              </button>

            </div>

            {/* CATEGORY */}
            <div className="mb-7">

              <label className="text-sm font-semibold text-[#162555] block mb-3">
                Medicine Category
              </label>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="
                  w-full
                  p-4
                  rounded-2xl
                  border border-slate-200
                  outline-none
                  bg-slate-50
                  text-[#162555]
                "
              >
                {categories.map((cat, i) => (
                  <option key={i} value={cat}>
                    {cat.toUpperCase()}
                  </option>
                ))}
              </select>

            </div>

            {/* PRICE */}
            <div className="mb-7">

              <div className="flex items-center justify-between mb-3">

                <label className="text-sm font-semibold text-[#162555]">
                  Maximum Price
                </label>

                <span className="text-cyan-700 font-bold">
                  ₹{price}
                </span>

              </div>

              <input
                type="range"
                min="0"
                max="10000"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full accent-cyan-600"
              />

            </div>

            {/* RATING */}
            <div className="mb-7">

              <label className="text-sm font-semibold text-[#162555] block mb-3">
                Minimum Rating
              </label>

              <div className="grid grid-cols-4 gap-3">

                {[1, 2, 3, 4].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className={`
                      flex items-center justify-center gap-1
                      py-3 rounded-xl border transition
                      ${
                        rating === star
                          ? "bg-[#162555] text-white border-[#162555]"
                          : "bg-slate-50 border-slate-200 text-slate-600"
                      }
                    `}
                  >
                    <Star size={14} />
                    {star}+
                  </button>
                ))}

              </div>

            </div>

            {/* VERIFIED */}
            <div className="mb-10">

              <label className="flex items-center gap-3 cursor-pointer">

                <input
                  type="checkbox"
                  checked={verifiedOnly}
                  onChange={() =>
                    setVerifiedOnly(!verifiedOnly)
                  }
                  className="h-5 w-5 accent-cyan-600"
                />

                <span className="font-medium text-[#162555]">
                  Show verified medicines only
                </span>

              </label>

            </div>

            {/* ACTIONS */}
            <div className="flex gap-4">

              <button
                onClick={() => {
                  setCategory("all");
                  setPrice(10000);
                  setRating(0);
                  setVerifiedOnly(false);
                }}
                className="
                  flex-1
                  py-3 rounded-2xl
                  border border-slate-200
                  hover:bg-slate-100
                  font-semibold
                  transition
                "
              >
                Reset
              </button>

              <button
                onClick={() => setOpenFilter(false)}
                className="
                  flex-1
                  py-3 rounded-2xl
                  bg-[#162555]
                  hover:bg-[#1d3475]
                  text-white
                  font-semibold
                  transition
                "
              >
                Apply Filters
              </button>

            </div>

          </div>
        </div>
      )}
    </div>
  );
}

// "use client";

// import { useState, useMemo, useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import { useMedicines } from "@/context/MedicineContext";
// import MedicineCard from "@/components/MedicineCard";

// import {
//   SlidersHorizontal,
//   X,
//   Star,
//   ShieldCheck,
//   FlaskConical,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";

// export default function MedicinesPage() {
//   const { medicines } = useMedicines();
//   const searchParams = useSearchParams();

//   const initialSearch = searchParams.get("search") || "";

//   const [search, setSearch] = useState(initialSearch);

//   const [category, setCategory] = useState("all");
//   const [price, setPrice] = useState(10000);
//   const [rating, setRating] = useState(0);
//   const [verifiedOnly, setVerifiedOnly] = useState(false);

//   const [openFilter, setOpenFilter] = useState(false);

//   // PAGINATION
//   const [currentPage, setCurrentPage] = useState(1);
//   const ITEMS_PER_PAGE = 16;

//   const categories = [
//     "all",
//     ...new Set(medicines.map((m) => m.category || "general")),
//   ];

//   const filtered = useMemo(() => {
//     return medicines.filter((med) => {
//       const matchSearch = med.name
//         .toLowerCase()
//         .includes(search.toLowerCase());

//       const matchCategory =
//         category === "all" ||
//         (med.category || "general") === category;

//       const matchPrice = Number(med.price) <= price;

//       const medRating = med.rating || 4.5;
//       const matchRating = medRating >= rating;

//       const matchVerified = verifiedOnly
//         ? med.verified !== false
//         : true;

//       return (
//         matchSearch &&
//         matchCategory &&
//         matchPrice &&
//         matchRating &&
//         matchVerified
//       );
//     });
//   }, [medicines, search, category, price, rating, verifiedOnly]);

//   // RESET TO PAGE 1 WHEN FILTER CHANGES
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [search, category, price, rating, verifiedOnly]);

//   // PAGINATION LOGIC
//   const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

//   const paginatedMedicines = filtered.slice(
//     (currentPage - 1) * ITEMS_PER_PAGE,
//     currentPage * ITEMS_PER_PAGE
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-[#eef3ff] text-[#162555] relative overflow-hidden">

//       {/* BACKGROUND GLOW */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">

//         <div className="absolute top-0 left-[-120px] w-[320px] h-[320px] bg-cyan-300/20 rounded-full blur-3xl" />

//         <div className="absolute bottom-0 right-[-150px] w-[350px] h-[350px] bg-[#162555]/10 rounded-full blur-3xl" />

//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-10">

//         {/* TOP SECTION */}
//         <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

//           {/* LEFT */}
//           <div>

//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-700 text-sm font-medium mb-4">
//               <FlaskConical size={16} />
//               US FORENSIC PHARMACY
//             </div>

//             <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
//               Available Medicines
//             </h1>

//             <p className="text-slate-500 mt-3 max-w-2xl">
//               Explore verified medicines with forensic-grade filtering,
//               category analysis, pricing controls, and medical validation.
//             </p>

//           </div>

//           {/* RIGHT */}
//           <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">

//             {/* SEARCH */}
//             <div
//               className="
//                 flex items-center gap-3
//                 bg-white/80
//                 border border-slate-200
//                 backdrop-blur-xl
//                 rounded-2xl
//                 px-4 py-3
//                 shadow-sm
//                 w-full sm:w-[320px]
//               "
//             >
//               <input
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search medicines..."
//                 className="w-full bg-transparent outline-none text-[#162555] placeholder-slate-400"
//               />
//             </div>

//             {/* FILTER BUTTON */}
//             <button
//               onClick={() => setOpenFilter(true)}
//               className="
//                 flex items-center justify-center gap-2
//                 bg-[#162555]
//                 hover:bg-[#1e3470]
//                 text-white
//                 px-5 py-3
//                 rounded-2xl
//                 font-semibold
//                 transition-all duration-300
//                 shadow-lg
//               "
//             >
//               <SlidersHorizontal size={18} />
//               Filters
//             </button>

//           </div>
//         </div>

//         {/* RESULT COUNT */}
//         <div className="mb-8 flex items-center justify-between flex-wrap gap-4">

//           <div className="flex items-center gap-2 text-slate-500">

//             <ShieldCheck size={18} className="text-cyan-600" />

//             <span>
//               <span className="font-bold text-cyan-700">
//                 {filtered.length}
//               </span>{" "}
//               verified medicines
//             </span>

//           </div>

//           {/* PAGE INFO */}
//           {filtered.length > 0 && (
//             <div className="text-sm text-slate-500 font-medium">
//               Page {currentPage} of {totalPages}
//             </div>
//           )}

//         </div>

//         {/* PRODUCT GRID */}
//         <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">

//           {paginatedMedicines.map((med) => (
//             <MedicineCard key={med.id} med={med} />
//           ))}

//         </div>

//         {/* PAGINATION */}
//         {totalPages > 1 && (
//           <div className="flex items-center justify-center gap-4 mt-14">

//             {/* PREVIOUS */}
//             <button
//               onClick={() =>
//                 setCurrentPage((prev) => Math.max(prev - 1, 1))
//               }
//               disabled={currentPage === 1}
//               className={`
//                 flex items-center gap-2
//                 px-5 py-3 rounded-2xl
//                 font-semibold transition
//                 ${
//                   currentPage === 1
//                     ? "bg-slate-100 text-slate-400 cursor-not-allowed"
//                     : "bg-[#162555] text-white hover:bg-[#1e3470]"
//                 }
//               `}
//             >
//               <ChevronLeft size={18} />
//               Previous
//             </button>

//             {/* PAGE NUMBERS */}
//             <div className="flex items-center gap-2 flex-wrap justify-center">

//               {[...Array(totalPages)].map((_, i) => {
//                 const page = i + 1;

//                 return (
//                   <button
//                     key={page}
//                     onClick={() => setCurrentPage(page)}
//                     className={`
//                       h-11 w-11 rounded-xl
//                       font-semibold transition
//                       ${
//                         currentPage === page
//                           ? "bg-cyan-600 text-white shadow-lg"
//                           : "bg-white border border-slate-200 hover:bg-slate-100 text-slate-700"
//                       }
//                     `}
//                   >
//                     {page}
//                   </button>
//                 );
//               })}

//             </div>

//             {/* NEXT */}
//             <button
//               onClick={() =>
//                 setCurrentPage((prev) =>
//                   Math.min(prev + 1, totalPages)
//                 )
//               }
//               disabled={currentPage === totalPages}
//               className={`
//                 flex items-center gap-2
//                 px-5 py-3 rounded-2xl
//                 font-semibold transition
//                 ${
//                   currentPage === totalPages
//                     ? "bg-slate-100 text-slate-400 cursor-not-allowed"
//                     : "bg-[#162555] text-white hover:bg-[#1e3470]"
//                 }
//               `}
//             >
//               Next
//               <ChevronRight size={18} />
//             </button>

//           </div>
//         )}

//         {/* EMPTY */}
//         {filtered.length === 0 && (
//           <div className="text-center py-24">

//             <div className="text-2xl font-bold text-[#162555]">
//               No Medicines Found
//             </div>

//             <p className="text-slate-500 mt-3">
//               Try changing filters or search keyword.
//             </p>

//           </div>
//         )}

//       </div>

//       {/* FILTER DRAWER */}
//       {openFilter && (
//         <div className="fixed inset-0 z-50 flex justify-end">

//           {/* OVERLAY */}
//           <div
//             className="absolute inset-0 bg-black/40 backdrop-blur-sm"
//             onClick={() => setOpenFilter(false)}
//           />

//           {/* PANEL */}
//           <div
//             className="
//               relative
//               w-full sm:w-[400px]
//               h-full
//               bg-white
//               shadow-2xl
//               p-6
//               overflow-y-auto
//               animate-slideIn
//             "
//           >

//             {/* HEADER */}
//             <div className="flex items-center justify-between mb-8">

//               <div>
//                 <h2 className="text-2xl font-bold text-[#162555]">
//                   Filter Panel
//                 </h2>

//                 <p className="text-slate-500 text-sm mt-1">
//                   Forensic medicine controls
//                 </p>
//               </div>

//               <button
//                 onClick={() => setOpenFilter(false)}
//                 className="
//                   h-10 w-10 rounded-xl
//                   bg-slate-100
//                   hover:bg-slate-200
//                   flex items-center justify-center
//                   transition
//                 "
//               >
//                 <X size={18} />
//               </button>

//             </div>

//             {/* CATEGORY */}
//             <div className="mb-7">

//               <label className="text-sm font-semibold text-[#162555] block mb-3">
//                 Medicine Category
//               </label>

//               <select
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//                 className="
//                   w-full
//                   p-4
//                   rounded-2xl
//                   border border-slate-200
//                   outline-none
//                   bg-slate-50
//                   text-[#162555]
//                 "
//               >
//                 {categories.map((cat, i) => (
//                   <option key={i} value={cat}>
//                     {cat.toUpperCase()}
//                   </option>
//                 ))}
//               </select>

//             </div>

//             {/* PRICE */}
//             <div className="mb-7">

//               <div className="flex items-center justify-between mb-3">

//                 <label className="text-sm font-semibold text-[#162555]">
//                   Maximum Price
//                 </label>

//                 <span className="text-cyan-700 font-bold">
//                   ₹{price}
//                 </span>

//               </div>

//               <input
//                 type="range"
//                 min="0"
//                 max="10000"
//                 value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//                 className="w-full accent-cyan-600"
//               />

//             </div>

//             {/* RATING */}
//             <div className="mb-7">

//               <label className="text-sm font-semibold text-[#162555] block mb-3">
//                 Minimum Rating
//               </label>

//               <div className="grid grid-cols-4 gap-3">

//                 {[1, 2, 3, 4].map((star) => (
//                   <button
//                     key={star}
//                     onClick={() => setRating(star)}
//                     className={`
//                       flex items-center justify-center gap-1
//                       py-3 rounded-xl border transition
//                       ${
//                         rating === star
//                           ? "bg-[#162555] text-white border-[#162555]"
//                           : "bg-slate-50 border-slate-200 text-slate-600"
//                       }
//                     `}
//                   >
//                     <Star size={14} />
//                     {star}+
//                   </button>
//                 ))}

//               </div>

//             </div>

//             {/* VERIFIED */}
//             <div className="mb-10">

//               <label className="flex items-center gap-3 cursor-pointer">

//                 <input
//                   type="checkbox"
//                   checked={verifiedOnly}
//                   onChange={() =>
//                     setVerifiedOnly(!verifiedOnly)
//                   }
//                   className="h-5 w-5 accent-cyan-600"
//                 />

//                 <span className="font-medium text-[#162555]">
//                   Show verified medicines only
//                 </span>

//               </label>

//             </div>

//             {/* ACTIONS */}
//             <div className="flex gap-4">

//               <button
//                 onClick={() => {
//                   setCategory("all");
//                   setPrice(10000);
//                   setRating(0);
//                   setVerifiedOnly(false);
//                 }}
//                 className="
//                   flex-1
//                   py-3 rounded-2xl
//                   border border-slate-200
//                   hover:bg-slate-100
//                   font-semibold
//                   transition
//                 "
//               >
//                 Reset
//               </button>

//               <button
//                 onClick={() => setOpenFilter(false)}
//                 className="
//                   flex-1
//                   py-3 rounded-2xl
//                   bg-[#162555]
//                   hover:bg-[#1d3475]
//                   text-white
//                   font-semibold
//                   transition
//                 "
//               >
//                 Apply Filters
//               </button>

//             </div>

//           </div>
//         </div>
//       )}
//     </div>
//   );
// }