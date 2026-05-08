
// "use client";

// import {
//   Building2,
//   Target,
//   Users,
//   BadgeCheck,
//   Truck,
//   ShieldCheck,
// } from "lucide-react";

// export default function AboutPage() {
//   return (
//     <div className="relative min-h-screen px-6 py-16 overflow-hidden bg-gray-100 text-gray-900">

//       {/* 🔬 FORENSIC SCANNING LINES BACKGROUND */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="scan-lines"></div>
//       </div>

//       {/* HERO */}
//       <div className="max-w-5xl mx-auto text-center mb-16 relative z-10">
//         <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white border border-gray-300 text-cyan-600 text-sm mb-4 shadow-sm">
//           <Building2 size={16} /> Pharmaceutical Intelligence System
//         </div>

//         <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
//           About Medico Forensic
//         </h1>

//         <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//           A trusted pharmaceutical platform delivering verified medicines,
//           clinical safety assurance, and fast healthcare access with forensic-grade precision.
//         </p>
//       </div>

//       {/* GRID */}
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 relative z-10">

//         {/* LEFT SIDE */}
//         <div className="space-y-6">

//           <div className="p-6 rounded-2xl border border-slate-800 bg-[rgb(21,35,82)]">
//             <div className="flex items-center gap-3 text-cyan-400 mb-3">
//               <Building2 />
//               <h2 className="text-xl font-semibold">About Company</h2>
//             </div>
//             <p className="text-white">
//               Medico Forensic is a next-generation pharmacy platform focused on delivering safe, genuine, and affordable medicines with advanced digital healthcare intelligence.
//             </p>
//           </div>

//           <div className="p-6 rounded-2xl border border-slate-800 bg-[rgb(21,35,82)]">
//             <div className="flex items-center gap-3 text-cyan-400 mb-3">
//               <Target />
//               <h2 className="text-xl font-semibold">Mission & Vision</h2>
//             </div>
//             <p className="text-white">
//               Our mission is to make healthcare accessible, transparent, and reliable. We envision a system where every medicine is verified, traceable, and safe for all patients.
//             </p>
//           </div>

//           {/* <div className="p-6 rounded-2xl border border-slate-800 "> */}
//           <div className="p-6 rounded-2xl border border-slate-800 bg-[rgb(21,35,82)]">
//             <div className="flex items-center gap-3 text-cyan-400 mb-3">
//               <Users />
//               <h2 className="text-xl font-semibold">Why Choose Us</h2>
//             </div>
//             <ul className="text-white space-y-2">
//               <li>✔ Verified pharmaceutical supply chain</li>
//               <li>✔ Forensic-grade medicine validation</li>
//               <li>✔ Affordable pricing structure</li>
//               <li>✔ 24/7 customer support system</li>
//             </ul>
//           </div>

//         </div>

//         {/* RIGHT SIDE */}
//         <div className="space-y-6">

//           <div className="p-6 rounded-2xl border border-slate-800 bg-[rgb(21,35,82)]">
//             <div className="flex items-center gap-3 text-cyan-400 mb-3">
//               <BadgeCheck />
//               <h2 className="text-xl font-semibold">Genuine Medicines</h2>
//             </div>
//             <p className="text-white">
//               All medicines are sourced from certified manufacturers and undergo strict quality control checks to ensure authenticity and safety.
//             </p>
//           </div>

//            <div className="p-6 rounded-2xl border border-slate-800 bg-[rgb(21,35,82)]">
//             <div className="flex items-center gap-3 text-cyan-400 mb-3">
//               <Truck />
//               <h2 className="text-xl font-semibold">Fast Delivery</h2>
//             </div>
//             <p className="text-white">
//               We ensure rapid and secure delivery of medicines across regions with real-time tracking and safe logistics systems.
//             </p>
//           </div>

//           <div className="p-6 rounded-2xl border border-slate-800 bg-[rgb(21,35,82)]">
//             <div className="flex items-center gap-3 text-cyan-400 mb-3">
//               <ShieldCheck />
//               <h2 className="text-xl font-semibold">Clinical Safety Assurance</h2>
//             </div>
//             <p className="text-white">
//               Every product undergoes multi-layer verification to ensure patient safety and compliance with pharmaceutical standards.
//             </p>
//           </div>

//         </div>
//       </div>

//       {/* FOOT NOTE */}
//       <div className="text-center mt-16 text-gray-500 text-sm relative z-10">
//         © {new Date().getFullYear()} Medico Forensic • Verified Pharmaceutical Intelligence System
//       </div>

//       {/* SCANNING LINE ANIMATION STYLE */}
//       <style jsx>{`
//         .scan-lines {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           background: repeating-linear-gradient(
//             0deg,
//             rgba(0, 0, 0, 0.03),
//             rgba(0, 0, 0, 0.03) 1px,
//             transparent 1px,
//             transparent 6px
//           );
//           animation: scanMove 6s linear infinite;
//         }

//         @keyframes scanMove {
//           0% {
//             transform: translateY(0);
//           }
//           100% {
//             transform: translateY(20px);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";

import {
  Building2,
  Target,
  Users,
  BadgeCheck,
  Truck,
  ShieldCheck,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen px-6 py-16 overflow-hidden bg-gradient-to-b from-white via-[#f4f7ff] to-[#e9efff] text-[#162555]">

      {/* 🔬 FORENSIC SCANNING LINES BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="scan-lines"></div>

        {/* LIGHT GLOW EFFECTS */}
        <div className="absolute top-10 left-[-120px] w-[300px] h-[300px] bg-cyan-400/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-[-120px] w-[350px] h-[350px] bg-[#162555]/10 rounded-full blur-3xl"></div>
      </div>

      {/* HERO */}
      <div className="max-w-5xl mx-auto text-center mb-16 relative z-10">

        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white border border-cyan-200 text-cyan-700 text-sm mb-4 shadow-sm">
          <Building2 size={16} />
          US FORENSIC 
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-[#162555]">
          About US  Forensic
        </h1>

        <p className="text-slate-600 mt-4 max-w-2xl mx-auto leading-relaxed">
          A trusted pharmaceutical platform delivering verified medicines,
          clinical safety assurance, and fast healthcare access with
          forensic-grade precision.
        </p>

      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 relative z-10">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          {/* ABOUT COMPANY */}
          <div className="p-6 rounded-3xl border border-[#162555]/10 bg-white/80 backdrop-blur-xl shadow-sm hover:shadow-xl transition-all duration-300">

            <div className="flex items-center gap-3 text-cyan-600 mb-3">
              <Building2 />
              <h2 className="text-xl font-bold text-[#162555]">
                About Company
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Medico Forensic is a next-generation pharmacy platform focused on
              delivering safe, genuine, and affordable medicines with advanced
              digital healthcare intelligence.
            </p>

          </div>

          {/* MISSION */}
          <div className="p-6 rounded-3xl border border-[#162555]/10 bg-white/80 backdrop-blur-xl shadow-sm hover:shadow-xl transition-all duration-300">

            <div className="flex items-center gap-3 text-cyan-600 mb-3">
              <Target />
              <h2 className="text-xl font-bold text-[#162555]">
                Mission & Vision
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Our mission is to make healthcare accessible, transparent, and
              reliable. We envision a system where every medicine is verified,
              traceable, and safe for all patients.
            </p>

          </div>

          {/* WHY CHOOSE US */}
          <div className="p-6 rounded-3xl border border-[#162555]/10 bg-white/80 backdrop-blur-xl shadow-sm hover:shadow-xl transition-all duration-300">

            <div className="flex items-center gap-3 text-cyan-600 mb-3">
              <Users />
              <h2 className="text-xl font-bold text-[#162555]">
                Why Choose Us
              </h2>
            </div>

            <ul className="text-slate-600 space-y-3">
              <li>✔ Verified pharmaceutical supply chain</li>
              <li>✔ Forensic-grade medicine validation</li>
              <li>✔ Affordable pricing structure</li>
              <li>✔ 24/7 customer support system</li>
            </ul>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* GENUINE */}
          <div className="p-6 rounded-3xl border border-[#162555]/10 bg-white/80 backdrop-blur-xl shadow-sm hover:shadow-xl transition-all duration-300">

            <div className="flex items-center gap-3 text-cyan-600 mb-3">
              <BadgeCheck />
              <h2 className="text-xl font-bold text-[#162555]">
                Genuine Medicines
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              All medicines are sourced from certified manufacturers and undergo
              strict quality control checks to ensure authenticity and safety.
            </p>

          </div>

          {/* FAST DELIVERY */}
          <div className="p-6 rounded-3xl border border-[#162555]/10 bg-white/80 backdrop-blur-xl shadow-sm hover:shadow-xl transition-all duration-300">

            <div className="flex items-center gap-3 text-cyan-600 mb-3">
              <Truck />
              <h2 className="text-xl font-bold text-[#162555]">
                Fast Delivery
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              We ensure rapid and secure delivery of medicines across regions
              with real-time tracking and safe logistics systems.
            </p>

          </div>

          {/* SAFETY */}
          <div className="p-6 rounded-3xl border border-cyan-200 bg-gradient-to-r from-cyan-50 to-white backdrop-blur-xl shadow-sm hover:shadow-xl transition-all duration-300">

            <div className="flex items-center gap-3 text-cyan-600 mb-3">
              <ShieldCheck />
              <h2 className="text-xl font-bold text-[#162555]">
                Clinical Safety Assurance
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Every product undergoes multi-layer verification to ensure patient
              safety and compliance with pharmaceutical standards.
            </p>

          </div>

        </div>

      </div>

      {/* FOOTER NOTE */}
      <div className="text-center mt-16 text-slate-500 text-sm relative z-10">
        © {new Date().getFullYear()} Medico Forensic • Verified Pharmaceutical Intelligence System
      </div>

      {/* SCANNING LINE ANIMATION */}
      <style jsx>{`
        .scan-lines {
          position: absolute;
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(
            0deg,
            rgba(22, 37, 85, 0.03),
            rgba(22, 37, 85, 0.03) 1px,
            transparent 1px,
            transparent 6px
          );
          animation: scanMove 6s linear infinite;
        }

        @keyframes scanMove {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(20px);
          }
        }
      `}</style>
    </div>
  );
}