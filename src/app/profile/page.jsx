

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