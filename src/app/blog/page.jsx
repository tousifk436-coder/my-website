// "use client";

// import Link from "next/link";
// import { useMedicines } from "@/context/MedicineContext";
// import {
//   FileText,
//   ArrowRight,
//   ShieldCheck,
// } from "lucide-react";

// export default function BlogPage() {
//   const { medicines } = useMedicines();

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white px-6 py-10">

//       {/* HERO */}
//       <div className="max-w-7xl mx-auto mb-12">

//         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm mb-5">
//           <ShieldCheck size={16} />
//           Medical Intelligence Articles
//         </div>

//         <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//           Medico Forensic Blog
//         </h1>

//         <p className="text-slate-400 mt-4 max-w-2xl">
//           Explore detailed medicine information, usage guidance,
//           dosage instructions, and forensic pharmaceutical insights.
//         </p>
//       </div>

//       {/* BLOG GRID */}
//       <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

//         {medicines.map((med) => (
//           <Link key={med.id} href={`/blog/${med.id}`}>

//             <div
//               className="
//                 group
//                 bg-slate-900/60
//                 border border-slate-800
//                 rounded-3xl
//                 overflow-hidden
//                 hover:border-cyan-500/40
//                 hover:shadow-cyan-500/10
//                 hover:shadow-2xl
//                 transition-all duration-300
//                 hover:-translate-y-2
//               "
//             >

//               {/* IMAGE */}
//               <div className="h-56 overflow-hidden">
//                 <img
//                   src={med.image}
//                   alt={med.name}
//                   className="
//                     w-full h-full object-cover
//                     group-hover:scale-110
//                     transition duration-500
//                   "
//                 />
//               </div>

//               {/* CONTENT */}
//               <div className="p-5">

//                 <div className="flex items-center gap-2 text-cyan-400 text-sm mb-3">
//                   <FileText size={16} />
//                   Medicine Research
//                 </div>

//                 <h2 className="text-xl font-bold line-clamp-1">
//                   {med.name}
//                 </h2>

//                 <p className="text-slate-400 text-sm mt-3 line-clamp-3">
//                   {med.description ||
//                     "Detailed pharmaceutical analysis and medicine insights."}
//                 </p>

//                 <div className="flex items-center gap-2 mt-5 text-cyan-400 font-medium">
//                   Read Article
//                   <ArrowRight
//                     size={16}
//                     className="group-hover:translate-x-1 transition"
//                   />
//                 </div>

//               </div>
//             </div>

//           </Link>
//         ))}

//       </div>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import { useMedicines } from "@/context/MedicineContext";
import {
  FileText,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function BlogPage() {
  const { medicines } = useMedicines();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-100 to-[#e8eefc] text-[rgb(21,35,82)] px-6 py-10 relative overflow-hidden">

      {/* FORENSIC BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">

        <div className="absolute top-20 left-[-100px] w-[300px] h-[300px] bg-cyan-400/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-10 right-[-120px] w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-3xl"></div>

      </div>

      {/* HERO */}
      <div className="relative max-w-7xl mx-auto mb-14">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 text-sm mb-5 backdrop-blur-xl">
          <ShieldCheck size={16} />
          Medical Intelligence Articles
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Medico Forensic Blog
        </h1>

        <p className="text-slate-600 mt-4 max-w-2xl leading-relaxed">
          Explore detailed medicine information, dosage instructions,
          pharmaceutical intelligence, and verified healthcare insights
          through our forensic-grade medical articles.
        </p>
      </div>

      {/* BLOG GRID */}
      <div className="relative max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {medicines.map((med) => (
          <Link key={med.id} href={`/blog/${med.id}`}>

            <div
              className="
                group
                bg-white/80
                border border-white/60
                rounded-3xl
                overflow-hidden
                backdrop-blur-2xl
                shadow-lg
                hover:shadow-2xl
                hover:shadow-cyan-500/10
                transition-all duration-300
                hover:-translate-y-2
              "
            >

              {/* IMAGE */}
              <div className="h-56 overflow-hidden relative">

                <img
                  src={med.image}
                  alt={med.name}
                  className="
                    w-full h-full object-cover
                    group-hover:scale-110
                    transition duration-700
                  "
                />

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

              </div>

              {/* CONTENT */}
              <div className="p-5">

                {/* BADGE */}
                <div className="flex items-center gap-2 text-cyan-700 text-sm font-medium mb-3">
                  <FileText size={16} />
                  Medicine Research
                </div>

                {/* TITLE */}
                <h2 className="text-xl font-bold line-clamp-1 text-[rgb(21,35,82)]">
                  {med.name}
                </h2>

                {/* DESCRIPTION */}
                <p className="text-slate-600 text-sm mt-3 line-clamp-3 leading-relaxed">
                  {med.description ||
                    "Detailed pharmaceutical analysis and medicine insights."}
                </p>

                {/* FOOTER */}
                <div className="flex items-center justify-between mt-6">

                  <div className="text-cyan-700 font-semibold flex items-center gap-2">
                    Read Article

                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition"
                    />
                  </div>

                  <div className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 border border-cyan-500/20">
                    Verified
                  </div>

                </div>

              </div>
            </div>

          </Link>
        ))}

      </div>
    </div>
  );
}