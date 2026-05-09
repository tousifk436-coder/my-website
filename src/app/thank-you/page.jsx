

"use client";

import { useRouter } from "next/navigation";
import {
  CheckCircle2,
  ShieldCheck,
  ShoppingBag,
} from "lucide-react";

export default function ThankYouPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center px-4 py-10 relative overflow-hidden">

      {/* LIGHT BACKGROUND */}
      <div className="absolute inset-0 bg-[#C6E9FF]" />

      {/* LIGHT GLOW */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-cyan-100 rounded-full blur-3xl opacity-70" />

      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-100 rounded-full blur-3xl opacity-70" />

      {/* MAIN CARD */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-2xl
          bg-[#C6E9FF]
          border border-slate-200
          rounded-[40px]
          shadow-[0_10px_60px_rgba(0,0,0,0.08)]
          p-8 md:p-12
          text-center
        "
      >

        {/* ICON */}
        <div
          className="
            mx-auto
            h-28
            w-28
            rounded-full
            bg-green-50
            border border-green-200
            flex items-center justify-center
            mb-8
          "
        >
          <CheckCircle2
            size={60}
            className="text-green-600"
          />
        </div>

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-black text-[#162555]">
          Thank You
        </h1>

        {/* MESSAGE */}
        <p className="mt-5 text-2xl font-bold text-slate-700 leading-relaxed">
          Your Request Has Been Received Successfully
        </p>

        <p className="mt-4 text-slate-500 text-lg leading-relaxed max-w-xl mx-auto">
          Our Team Will Contact You Soon regarding your
          pharmaceutical request and order confirmation.
        </p>

        {/* INFO CARDS */}
        <div className="grid sm:grid-cols-2 gap-5 mt-10">

          {/* CARD 1 */}
          <div
            className="
              bg-[#C6E9FF]
              border border-slate-200
              rounded-3xl
              p-5
              text-left
            "
          >

            <div className="flex items-center gap-3 mb-4">

              <div className="h-12 w-12 rounded-2xl bg-cyan-100 flex items-center justify-center">
                <ShieldCheck
                  size={22}
                  className="text-cyan-700"
                />
              </div>

              <h3 className="font-bold text-[#162555] text-lg">
                Secure Order
              </h3>

            </div>

            <p className="text-sm text-slate-500 leading-relaxed">
              Your order details and payment information
              are securely processed and protected.
            </p>

          </div>

          {/* CARD 2 */}
          <div
            className="
              bg-[#C6E9FF]
              border border-slate-200
              rounded-3xl
              p-5
              text-left
            "
          >

            <div className="flex items-center gap-3 mb-4">

              <div className="h-12 w-12 rounded-2xl bg-green-100 flex items-center justify-center">
                <ShoppingBag
                  size={22}
                  className="text-green-700"
                />
              </div>

              <h3 className="font-bold text-[#162555] text-lg">
                Fast Processing
              </h3>

            </div>

            <p className="text-sm text-slate-500 leading-relaxed">
              Our medical support team will verify and
              process your request shortly.
            </p>

          </div>

        </div>

        {/* BUTTON */}
        <button
          onClick={() => router.push("/medicines")}
          className="
            mt-10
            px-8
            py-4
            rounded-2xl
            bg-[#162555]
            hover:bg-[#20397f]
            text-white
            font-bold
            text-lg
            transition-all duration-300
            shadow-lg
          "
        >
          Continue Shopping
        </button>

      </div>
    </div>
  );
}