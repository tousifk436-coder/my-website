// // "use client";

// // import { useAuth } from "@/context/AuthContext";
// // import { useRouter } from "next/navigation";
// // import { useEffect } from "react";

// // export default function ProfilePage() {
// //   const { user } = useAuth();
// //   const router = useRouter();

// //   useEffect(() => {
// //     if (!user) {
// //       router.push("/login"); // 🔐 redirect if not logged in
// //     }
// //   }, [user]);

// //   if (!user) return null;

// //   return (
// //     <div className="min-h-screen flex justify-center items-center bg-gray-50">

// //       <div className="bg-white shadow-lg rounded-xl p-6 w-96 text-center">

// //         <h2 className="text-2xl font-bold mb-4">My Profile</h2>

// //         <div className="mb-4">
// //           <p className="text-gray-500">Email</p>
// //           <p className="font-semibold">{user.email}</p>
// //         </div>

// //         <div className="mb-4">
// //           <p className="text-gray-500">Role</p>
// //           <p className="font-semibold capitalize">{user.role}</p>
// //         </div>

// //         <button
// //           onClick={() => router.push("/")}
// //           className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
// //         >
// //           Go Home
// //         </button>

// //       </div>

// //     </div>
// //   );
// // }
// "use client";

// import { useAuth } from "@/context/AuthContext";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import { ShieldCheck, User, Mail, BadgeCheck, Activity } from "lucide-react";

// export default function ProfilePage() {
//   const { user } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     if (!user) {
//       router.push("/login");
//     }
//   }, [user]);

//   if (!user) return null;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white flex items-center justify-center px-6">

//       {/* MAIN CARD */}
//       <div className="w-full max-w-xl bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-8 relative overflow-hidden">

//         {/* GLOW EFFECT */}
//         <div className="absolute -top-20 -left-20 w-60 h-60 bg-cyan-500/20 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl"></div>

//         {/* HEADER */}
//         <div className="text-center mb-8">

//           <div className="flex justify-center mb-3">
//             <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
//               <ShieldCheck className="text-cyan-400" />
//             </div>
//           </div>

//           <h2 className="text-3xl font-bold tracking-wide">
//             Secure User Profile
//           </h2>

//           <p className="text-slate-400 text-sm mt-1">
//             Medico Forensic Identity System
//           </p>

//         </div>

//         {/* USER INFO */}
//         <div className="space-y-5">

//           {/* EMAIL */}
//           <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl">
//             <Mail className="text-cyan-400" />
//             <div>
//               <p className="text-xs text-slate-400">Email Address</p>
//               <p className="font-semibold">{user.email}</p>
//             </div>
//           </div>

//           {/* ROLE */}
//           <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl">
//             <BadgeCheck className="text-green-400" />
//             <div>
//               <p className="text-xs text-slate-400">User Role</p>
//               <p className="font-semibold capitalize">{user.role}</p>
//             </div>
//           </div>

//           {/* STATUS */}
//           <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl">
//             <Activity className="text-blue-400" />
//             <div>
//               <p className="text-xs text-slate-400">Account Status</p>
//               <p className="font-semibold text-green-400">
//                 Active & Verified
//               </p>
//             </div>
//           </div>

//         </div>

//         {/* ACTIONS */}
//         <div className="mt-8 flex gap-4">

//           <button
//             onClick={() => router.push("/")}
//             className="flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 font-semibold transition"
//           >
//             Go Home
//           </button>

//           <button
//             onClick={() => router.push("/medicines")}
//             className="flex-1 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
//           >
//             Explore Medicines
//           </button>

//         </div>

//       </div>
//     </div>
//   );
// }

"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  ShieldCheck,
  Mail,
  BadgeCheck,
  Activity,
  ArrowRight,
} from "lucide-react";

export default function ProfilePage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-100 to-[#eef3ff] flex items-center justify-center px-6 py-10 relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-[-120px] w-[320px] h-[320px] bg-cyan-400/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-[-120px] w-[320px] h-[320px] bg-[#162555]/10 rounded-full blur-3xl"></div>

      {/* MAIN CARD */}
      <div
        className="
          relative
          w-full max-w-2xl
          bg-white/80
          backdrop-blur-2xl
          border border-white
          rounded-[2rem]
          shadow-[0_20px_60px_rgba(15,23,42,0.08)]
          overflow-hidden
        "
      >

        {/* TOP STRIP */}
        <div className="h-2 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-[#162555]" />

        <div className="p-8 md:p-10">

          {/* HEADER */}
          <div className="text-center mb-10">

            <div className="flex justify-center mb-4">
              <div
                className="
                  h-20 w-20 rounded-full
                  bg-gradient-to-br from-cyan-400 to-[#162555]
                  flex items-center justify-center
                  shadow-lg
                "
              >
                <ShieldCheck size={34} className="text-white" />
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-[#162555]">
              User Profile
            </h1>

            <p className="text-slate-500 mt-2">
              Secure Medico Forensic Identity Dashboard
            </p>

          </div>

          {/* INFO CARDS */}
          <div className="space-y-5">

            {/* EMAIL */}
            <div
              className="
                bg-[#162555]/5
                border border-[#162555]/10
                rounded-2xl
                p-5
                flex items-center gap-4
                hover:shadow-lg
                transition-all duration-300
              "
            >
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <Mail className="text-cyan-600" />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Email Address
                </p>

                <p className="font-semibold text-[#162555] break-all">
                  {user.email}
                </p>
              </div>
            </div>

            {/* ROLE */}
            <div
              className="
                bg-[#162555]/5
                border border-[#162555]/10
                rounded-2xl
                p-5
                flex items-center gap-4
                hover:shadow-lg
                transition-all duration-300
              "
            >
              <div className="p-3 rounded-xl bg-green-500/10">
                <BadgeCheck className="text-green-600" />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  User Role
                </p>

                <p className="font-semibold capitalize text-[#162555]">
                  {user.role}
                </p>
              </div>
            </div>

            {/* STATUS */}
            <div
              className="
                bg-[#162555]/5
                border border-[#162555]/10
                rounded-2xl
                p-5
                flex items-center gap-4
                hover:shadow-lg
                transition-all duration-300
              "
            >
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Activity className="text-blue-600" />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Account Status
                </p>

                <p className="font-semibold text-green-600">
                  Active & Verified
                </p>
              </div>
            </div>

          </div>

          {/* ACTION BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">

            {/* HOME */}
            <button
              onClick={() => router.push("/")}
              className="
                flex-1
                py-3.5
                rounded-2xl
                bg-[#162555]
                hover:bg-[#1e3270]
                text-white
                font-semibold
                transition-all duration-300
                hover:scale-[1.02]
                shadow-lg
              "
            >
              Go Home
            </button>

            {/* EXPLORE */}
            <button
              onClick={() => router.push("/medicines")}
              className="
                flex-1
                py-3.5
                rounded-2xl
                border border-[#162555]/20
                bg-white
                hover:bg-slate-50
                text-[#162555]
                font-semibold
                transition-all duration-300
                hover:scale-[1.02]
                flex items-center justify-center gap-2
              "
            >
              Explore Medicines
              <ArrowRight size={18} />
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}