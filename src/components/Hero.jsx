
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  ShieldCheck,
  Sparkles,
  Clock3,
  Pill,
} from "lucide-react";

export default function Hero({ search, setSearch }) {
  const router = useRouter();
  const [focused, setFocused] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    router.push(`/medicines?search=${search}`);
  };

  return (
    <section className="relative overflow-hidden bg-[#020617] text-white min-h-[72vh] lg:min-h-[76vh] flex items-center -mt-25">

      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" />

      {/* GRID OVERLAY */}
      <div
        className="
          absolute inset-0 opacity-[0.06]
          bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />

      {/* GLOW EFFECTS */}
      <div className="absolute top-[-120px] left-[-120px] w-[380px] h-[380px] bg-blue-600/20 rounded-full blur-3xl animate-pulse" />

      <div className="absolute bottom-[-120px] right-[-100px] w-[340px] h-[340px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />

      <div className="absolute top-[40%] left-[45%] w-[220px] h-[220px] bg-purple-500/10 rounded-full blur-3xl" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-12 w-full">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>

            {/* TOP BADGE */}
           

            {/* HEADING */}
            <h1
              className="
                text-4xl
                sm:text-5xl
                lg:text-6xl
                font-black
                leading-tight
                tracking-tight
              "
            >
              Find Medicines

              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-cyan-400
                  via-blue-400
                  to-indigo-500
                  bg-clip-text
                  text-transparent
                "
              >
                Faster & Smarter
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-5
                text-gray-300
                text-sm
                sm:text-base
                leading-relaxed
                max-w-2xl
              "
            >
              Search medicines instantly with intelligent results, smooth
              navigation, secure ordering, and a modern pharmacy experience
              built for speed and reliability.
            </p>

            {/* SEARCH SECTION */}
            <div className="mt-8">

              {/* SEARCH BOX */}
              <form
                onSubmit={handleSearch}
                className={`
                  relative
                  flex flex-col sm:flex-row
                  items-stretch sm:items-center
                  gap-3
                  p-2
                  rounded-[26px]
                  border
                  transition-all duration-300
                  overflow-hidden
                  ${
                    focused
                      ? `
                        border-cyan-400/40
                        bg-white/[0.09]
                        shadow-[0_0_40px_rgba(34,211,238,0.15)]
                        backdrop-blur-2xl
                        scale-[1.01]
                      `
                      : `
                        border-white/10
                        bg-white/[0.04]
                        backdrop-blur-xl
                      `
                  }
                `}
              >

                {/* INNER GLOW */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 pointer-events-none" />

                {/* SEARCH ICON */}
                <div
                  className="
                    hidden sm:flex
                    items-center justify-center
                    w-11 h-11
                    rounded-2xl
                    bg-white/5
                    border border-white/10
                  "
                >
                  <Search size={18} className="text-cyan-400" />
                </div>

                {/* INPUT */}
                <input
                  type="text"
                  placeholder="Search medicines ..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  className="
                    relative z-10
                    flex-1
                    bg-transparent
                    outline-none
                    px-4 py-3.5
                    text-white
                    placeholder:text-gray-500
                    text-sm sm:text-base
                  "
                />

                {/* BUTTON */}
                <button
                  type="submit"
                  className="
                    relative z-10
                    group
                    px-7 py-3.5
                    rounded-2xl
                    font-semibold
                    bg-gradient-to-r
                    from-blue-600
                    to-cyan-500
                    hover:from-blue-700
                    hover:to-cyan-600
                    transition-all duration-300
                    shadow-xl
                    hover:shadow-cyan-500/25
                    hover:scale-[1.03]
                    active:scale-95
                  "
                >
                  <span className="flex items-center justify-center gap-2 text-sm">
                    <Search size={17} />
                    Search
                  </span>
                </button>

              </form>

            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4 mt-9 max-w-2xl">

              <div
                className="
                  bg-white/[0.04]
                  border border-white/10
                  backdrop-blur-xl
                  rounded-3xl
                  p-4
                "
              >
                <div className="flex items-center gap-2 mb-2">
                  <Pill size={18} className="text-cyan-400" />
                  <span className="text-xs text-gray-400">
                    Products
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white">
                  10K+
                </h3>
              </div>

              <div
                className="
                  bg-white/[0.04]
                  border border-white/10
                  backdrop-blur-xl
                  rounded-3xl
                  p-4
                "
              >
                <div className="flex items-center gap-2 mb-2">
                  <Clock3 size={18} className="text-cyan-400" />
                  <span className="text-xs text-gray-400">
                    Support
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white">
                  24/7
                </h3>
              </div>

              <div
                className="
                  bg-white/[0.04]
                  border border-white/10
                  backdrop-blur-xl
                  rounded-3xl
                  p-4
                "
              >
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck
                    size={18}
                    className="text-cyan-400"
                  />
                  <span className="text-xs text-gray-400">
                    Accuracy
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white">
                  99%
                </h3>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center lg:justify-end">

            {/* OUTER GLOW */}
            <div className="absolute w-[320px] h-[320px] bg-cyan-500/20 rounded-full blur-3xl" />

            {/* MAIN CARD */}
            <div
              className="
                relative
                bg-white/[0.06]
                border border-white/10
                backdrop-blur-2xl
                rounded-[2.2rem]
                p-4
                shadow-[0_20px_80px_rgba(0,0,0,0.45)]
                hover:scale-[1.02]
                transition-all duration-500
              "
            >

              {/* IMAGE */}
              <img
                src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=900"
                alt="Medicine"
                className="
                  w-full
                  max-w-md
                  h-[420px]
                  object-cover
                  rounded-[1.8rem]
                  shadow-2xl
                "
              />

              {/* FLOATING CARD */}
              <div
                className="
                  absolute
                  -bottom-5
                  -left-5
                  bg-white
                  text-black
                  px-5 py-4
                  rounded-3xl
                  shadow-2xl
                  hidden sm:block
                "
              >
                <p className="text-xs text-gray-500">
                  Trusted by
                </p>

                <h3 className="font-black text-xl mt-1">
                  50K+ Users
                </h3>
              </div>

              
              

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}