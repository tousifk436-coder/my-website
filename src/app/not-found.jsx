// import Link from "next/link";

// export default function NotFound() {
//   return (
//     <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">

//       {/* BACKGROUND GLOW */}
//       <div className="absolute w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl top-[-100px] left-[-100px]"></div>
//       <div className="absolute w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl bottom-[-100px] right-[-100px]"></div>

//       {/* CONTENT */}
//       <div className="relative z-10 text-center max-w-xl">

//         {/* BIG 404 */}
//         <h1 className="text-[120px] md:text-[160px] font-extrabold leading-none tracking-tight drop-shadow-lg">
//           404
//         </h1>

//         {/* TITLE */}
//         <h2 className="text-3xl md:text-4xl font-bold mt-4">
//           Oops! Page Not Found
//         </h2>

//         {/* DESC */}
//         <p className="mt-4 text-gray-200">
//           The page you’re looking for doesn’t exist or has been moved.
//         </p>

//         {/* BUTTONS */}
//         <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          
//           <Link
//             href="/"
//             className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
//           >
//             Go Home
//           </Link>

//           <Link
//             href="/contact"
//             className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
//           >
//             Contact Support
//           </Link>

//         </div>

//       </div>
//     </div>
//   );
// }
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-white via-slate-100 to-blue-50 text-[#162555]">

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-200/40 rounded-full blur-3xl top-[-100px] left-[-100px]"></div>

      <div className="absolute w-[400px] h-[400px] bg-blue-200/40 rounded-full blur-3xl bottom-[-100px] right-[-100px]"></div>

      {/* CONTENT */}
      <div className="relative z-10 text-center max-w-xl">

        {/* BIG 404 */}
        <h1
          className="
            text-[120px] md:text-[170px]
            font-extrabold leading-none tracking-tight
            text-[#162555]
            drop-shadow-sm
          "
        >
          404
        </h1>

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Oops! Page Not Found
        </h2>

        {/* DESC */}
        <p className="mt-4 text-slate-600 text-lg leading-relaxed">
          The page you’re looking for doesn’t exist,
          may have been removed, or is temporarily unavailable.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

          {/* HOME BUTTON */}
          <Link
            href="/"
            className="
              px-6 py-3 rounded-xl
              bg-[#162555]
              text-white font-semibold
              hover:bg-[#1f3477]
              transition-all duration-300
              shadow-lg hover:shadow-xl
            "
          >
            Go Home
          </Link>

          {/* CONTACT BUTTON */}
          <Link
            href="/contact"
            className="
              px-6 py-3 rounded-xl
              border border-slate-300
              bg-white/80
              backdrop-blur-md
              text-[#162555]
              font-semibold
              hover:bg-[#162555]
              hover:text-white
              transition-all duration-300
              shadow-sm
            "
          >
            Contact Support
          </Link>

        </div>

      </div>
    </div>
  );
}