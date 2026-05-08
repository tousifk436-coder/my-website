

"use client";

import { useParams, useRouter } from "next/navigation";
import { useMedicines } from "@/context/MedicineContext";
import {
  ShieldCheck,
  Pill,
  Activity,
  AlertTriangle,
} from "lucide-react";

export default function BlogDetailsPage() {
  const { id } = useParams();
  const router = useRouter();

  const { medicines } = useMedicines();

  const medicine = medicines.find(
    (m) => String(m.id) === String(id)
  );

  if (!medicine) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-[#162555] text-xl font-semibold">
          Medicine Blog Not Found
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-100 to-[#eef3ff] text-[#162555] overflow-hidden">

      {/* HERO */}
      <div className="relative h-[420px] md:h-[500px] overflow-hidden">

        {/* IMAGE */}
        <img
          src={medicine.image}
          alt={medicine.name}
          className="w-full h-full object-cover"
        />

        {/* LIGHT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/40 to-[#162555]/20" />

        {/* HERO CONTENT */}
        <div className="absolute inset-0 max-w-7xl mx-auto px-6 flex flex-col justify-center">

          <button
            onClick={() => router.back()}
            className="
              mb-6 w-fit
              px-5 py-2 rounded-full
              bg-white/80 backdrop-blur-xl
              border border-slate-200
              text-[#162555]
              hover:bg-[#162555]
              hover:text-white
              transition-all duration-300
              shadow-md
            "
          >
            ← Back
          </button>

          <div
            className="
              inline-flex items-center gap-2
              px-4 py-2 rounded-full
              bg-cyan-500/10
              border border-cyan-500/20
              text-cyan-700
              text-sm
              w-fit mb-5
              backdrop-blur-xl
            "
          >
            <ShieldCheck size={16} />
            Forensic Medicine Report
          </div>

          <h1
            className="
              text-4xl md:text-6xl
              font-extrabold
              max-w-3xl
              leading-tight
              text-[#162555]
            "
          >
            {medicine.name}
          </h1>

          <p className="text-slate-700 mt-5 max-w-2xl text-lg leading-relaxed">
            {medicine.description ||
              "Advanced pharmaceutical analysis and verified clinical information."}
          </p>

        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">

        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-8">

            {/* FULL DESCRIPTION */}
            <div
              className="
                bg-white/80
                backdrop-blur-2xl
                border border-slate-200
                rounded-3xl
                p-7
                shadow-lg
              "
            >
              <div className="flex items-center gap-3 mb-4 text-cyan-700">
                <Pill />
                <h2 className="text-2xl font-bold">
                  Full Description
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed">
                {medicine.description ||
                  "This medicine is clinically verified and used for multiple pharmaceutical treatments with advanced therapeutic support."}
              </p>
            </div>

            {/* USES */}
            <div
              className="
                bg-white/80
                backdrop-blur-2xl
                border border-slate-200
                rounded-3xl
                p-7
                shadow-lg
              "
            >
              <div className="flex items-center gap-3 mb-4 text-cyan-700">
                <Activity />
                <h2 className="text-2xl font-bold">
                  Uses & Dosage
                </h2>
              </div>

              <p className="text-slate-700 mb-5 leading-relaxed">
                {medicine.uses ||
                  "Used in general medical treatment and therapeutic healthcare systems."}
              </p>

              <div className="bg-[#162555]/5 rounded-2xl p-5 border border-[#162555]/10">

                <h3 className="font-semibold text-cyan-700 mb-2">
                  Recommended Dosage
                </h3>

                <p className="text-slate-700">
                  {medicine.dosage ||
                    "Use as prescribed by a certified physician."}
                </p>

              </div>
            </div>

            {/* SIDE EFFECTS */}
            <div
              className="
                bg-white/80
                backdrop-blur-2xl
                border border-slate-200
                rounded-3xl
                p-7
                shadow-lg
              "
            >
              <div className="flex items-center gap-3 mb-4 text-red-500">
                <AlertTriangle />
                <h2 className="text-2xl font-bold">
                  Side Effects
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed">
                {medicine.sideEffects ||
                  "Possible side effects may include headache, nausea, dizziness, or mild allergic reactions."}
              </p>
            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-6">

            {/* INFO CARD */}
            <div
              className="
                bg-white/80
                backdrop-blur-2xl
                border border-slate-200
                rounded-3xl
                p-6
                shadow-lg
                sticky top-24
              "
            >

              <h3 className="text-2xl font-bold mb-5 text-[#162555]">
                Medicine Information
              </h3>

              <div className="space-y-5">

                <div>
                  <p className="text-slate-500 text-sm mb-1">
                    Medicine Name
                  </p>

                  <p className="font-bold text-lg text-[#162555]">
                    {medicine.name}
                  </p>
                </div>

                <div>
                  <p className="text-slate-500 text-sm mb-1">
                    Price
                  </p>

                  <p className="text-3xl font-extrabold text-cyan-600">
                    ₹{medicine.price}
                  </p>
                </div>

                <div>
                  <p className="text-slate-500 text-sm mb-1">
                    Verification
                  </p>

                  <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-green-100 text-green-700 font-medium">
                    <ShieldCheck size={16} />
                    Clinically Verified
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}