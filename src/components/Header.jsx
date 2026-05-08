

// "use client";

// import Link from "next/link";
// import { useState, useEffect, useRef } from "react";
// import { useRouter } from "next/navigation";
// import {
//   Search,
//   ShoppingCart,
//   User,
//   Menu,
//   X,
//   LogOut,
//   Package,
//   UserCircle2,
// } from "lucide-react";

// import { useAuth } from "@/context/AuthContext";
// import { useCart } from "@/context/CartContext";
// import CartDrawer from "./CartDrawer";

// export default function Header() {
//   const { user, logout } = useAuth();
//   const { cart } = useCart();
//   const router = useRouter();

//   const [showSearch, setShowSearch] = useState(false);
//   const [search, setSearch] = useState("");
//   const [openProfile, setOpenProfile] = useState(false);
//   const [cartOpen, setCartOpen] = useState(false);
//   const [mobileMenu, setMobileMenu] = useState(false);

//   // REFS
//   const profileRef = useRef(null);
//   const profileBtnRef = useRef(null);

//   const mobileMenuRef = useRef(null);
//   const mobileBtnRef = useRef(null);

//   const searchRef = useRef(null);
//   const searchBtnRef = useRef(null);

//   // SEARCH
//   const handleSearch = (e) => {
//     e.preventDefault();

//     if (!search.trim()) return;

//     router.push(`/medicines?search=${search}`);
//     setShowSearch(false);
//     setMobileMenu(false);
//   };

//   // CLICK OUTSIDE
//   useEffect(() => {
//     const handleClickOutside = (event) => {

//       // PROFILE
//       if (
//         profileRef.current &&
//         !profileRef.current.contains(event.target) &&
//         profileBtnRef.current &&
//         !profileBtnRef.current.contains(event.target)
//       ) {
//         setOpenProfile(false);
//       }

//       // MOBILE MENU
//       if (
//         mobileMenuRef.current &&
//         !mobileMenuRef.current.contains(event.target) &&
//         mobileBtnRef.current &&
//         !mobileBtnRef.current.contains(event.target)
//       ) {
//         setMobileMenu(false);
//       }

//       // SEARCH
//       if (
//         searchRef.current &&
//         !searchRef.current.contains(event.target) &&
//         searchBtnRef.current &&
//         !searchBtnRef.current.contains(event.target)
//       ) {
//         setShowSearch(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <>
//       {/* HEADER */}
//       <header
//         className="
//           fixed top-0 left-0 w-full z-50
//           bg-white/80
//           backdrop-blur-2xl
//           border-b border-white/20
//           shadow-sm
//         "
//       >

//         {/* MAIN HEADER */}
//         <div className="flex items-center justify-between px-4 md:px-10 h-[60px]">

//           {/* LOGO */}
//           <h2
//             onClick={() => router.push("/")}
//             className="
//               text-lg sm:text-xl md:text-2xl
//               font-extrabold
//               tracking-tight
//               bg-gradient-to-r from-blue-600 to-cyan-500
//               bg-clip-text text-transparent
//               cursor-pointer
//               select-none
//               whitespace-nowrap
//             "
//           >
//             Medico Forensic
//           </h2>

//           {/* DESKTOP NAV */}
//           <nav className="hidden md:flex items-center gap-7 text-gray-700 text-sm font-semibold">

//             <Link href="/" className="hover:text-blue-600 transition">
//               Home
//             </Link>

//             <Link href="/about" className="hover:text-blue-600 transition">
//               About
//             </Link>
//             <Link href="/blog" className="hover:text-cyan-400 transition">
//   Blog
// </Link>

//             <Link href="/medicines" className="hover:text-blue-600 transition">
//               Products
//             </Link>

//             <Link href="/contact" className="hover:text-blue-600 transition">
//               Contact
//             </Link>

//           </nav>

//           {/* RIGHT */}
//           <div className="flex items-center gap-3 sm:gap-4">

//             {/* SEARCH */}
//             <button
//               ref={searchBtnRef}
//               onClick={() => setShowSearch(!showSearch)}
//               className="
//                 hover:text-blue-600
//                 transition
//                 hover:scale-110
//               "
//             >
//               <Search size={20} />
//             </button>

//             {/* CART */}
//             <button
//               onClick={() => setCartOpen(true)}
//               className="
//                 relative
//                 hover:text-blue-600
//                 transition
//                 hover:scale-110
//               "
//             >
//               <ShoppingCart size={20} />

//               {cart?.length > 0 && (
//                 <span
//                   className="
//                     absolute -top-2 -right-2
//                     bg-red-500 text-white
//                     text-[10px]
//                     min-w-[18px]
//                     h-[18px]
//                     flex items-center justify-center
//                     rounded-full
//                     font-bold
//                   "
//                 >
//                   {cart.length}
//                 </span>
//               )}
//             </button>

//             {/* PROFILE */}
//             <div className="relative hidden md:block">

//               <button
//                 ref={profileBtnRef}
//                 onClick={() => setOpenProfile(!openProfile)}
//                 className="
//                   hover:text-blue-600
//                   transition
//                   hover:scale-110
//                 "
//               >
//                 <User size={20} />
//               </button>

//               {openProfile && (
//                 <div
//                   ref={profileRef}
//                   className="
//                     absolute right-0 mt-4 w-64
//                     bg-white/80
//                     backdrop-blur-2xl
//                     border border-white/30
//                     rounded-3xl
//                     shadow-2xl
//                     overflow-hidden
//                     animate-in fade-in zoom-in-95 duration-200
//                   "
//                 >

//                   {/* TOP */}
//                   <div className="p-4 border-b border-gray-200/50 bg-gradient-to-r from-cyan-100 to-blue-300">

//                     {user ? (
//                       <>
//                         <p className="text-xs text-gray-500 mb-1">
//                           Logged in as
//                         </p>

//                         <p className="font-semibold text-gray-800 truncate">
//                           {user.email}
//                         </p>
//                       </>
//                     ) : (
//                       <p className="font-semibold text-gray-700">
//                         Welcome Guest
//                       </p>
//                     )}

//                   </div>

//                   {/* MENU */}
//                   <div className="p-2">

//                     {user ? (
//                       <>
//                         <button
//                           onClick={() => {
//                             router.push("/profile");
//                             setOpenProfile(false);
//                           }}
//                           className="
//                             w-full flex items-center gap-3
//                             px-4 py-3 rounded-2xl
//                             hover:bg-blue-50
//                             transition
//                             text-sm font-medium
//                           "
//                         >
//                           <UserCircle2 size={18} />
//                           My Profile
//                         </button>

//                         <button
//                           onClick={() => {
//                             setCartOpen(true);
//                             setOpenProfile(false);
//                           }}
//                           className="
//                             w-full flex items-center gap-3
//                             px-4 py-3 rounded-2xl
//                             hover:bg-blue-50
//                             transition
//                             text-sm font-medium
//                           "
//                         >
//                           <Package size={18} />
//                           My Cart
//                         </button>

//                         <button
//                           onClick={() => {
//                             logout();
//                             router.push("/");
//                           }}
//                           className="
//                             w-full flex items-center gap-3
//                             px-4 py-3 rounded-2xl
//                             hover:bg-red-50
//                             transition
//                             text-sm font-medium
//                             text-red-500
//                           "
//                         >
//                           <LogOut size={18} />
//                           Logout
//                         </button>
//                       </>
//                     ) : (
//                       <>
//                         <button
//                           onClick={() => router.push("/login")}
//                           className="
//                             w-full px-4 py-3 rounded-2xl
//                             hover:bg-blue-50
//                             transition
//                             text-left text-sm font-medium
//                           "
//                         >
//                           Login
//                         </button>

//                         <button
//                           onClick={() => router.push("/signup")}
//                           className="
//                             w-full px-4 py-3 rounded-2xl
//                             hover:bg-blue-50
//                             transition
//                             text-left text-sm font-medium
//                           "
//                         >
//                           Signup
//                         </button>
//                       </>
//                     )}

//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* MOBILE BUTTON */}
//             <button
//               ref={mobileBtnRef}
//               className="md:hidden"
//               onClick={() => setMobileMenu(!mobileMenu)}
//             >
//               {mobileMenu ? <X size={24} /> : <Menu size={24} />}
//             </button>

//           </div>
//         </div>

//         {/* SEARCH BAR */}
//         {showSearch && (
//           <div
//             ref={searchRef}
//             className="px-4 pb-4 animate-in fade-in slide-in-from-top-2 duration-200"
//           >
//             <form
//               onSubmit={handleSearch}
//               className="
//                 max-w-2xl mx-auto
//                 flex items-center gap-2
//                 bg-white/90
//                 backdrop-blur-xl
//                 border border-white/30
//                 rounded-2xl
//                 p-2
//                 shadow-2xl
//               "
//             >

//               <input
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search medicines..."
//                 className="
//                   flex-1 bg-transparent
//                   outline-none
//                   px-4 py-2
//                   text-sm
//                 "
//               />

//               <button
//                 className="
//                   px-5 py-2
//                   bg-gradient-to-r from-blue-600 to-cyan-500
//                   hover:from-blue-700 hover:to-cyan-600
//                   text-white
//                   rounded-xl
//                   text-sm font-semibold
//                   transition
//                 "
//               >
//                 Search
//               </button>

//             </form>
//           </div>
//         )}

//         {/* MOBILE MENU */}
//         {mobileMenu && (
//           <div
//             ref={mobileMenuRef}
//             className="
//               md:hidden
//               bg-white/95
//               backdrop-blur-2xl
//               border-t border-gray-200
//               px-5 py-5
//               space-y-2
//               animate-in slide-in-from-top-2 duration-200
//             "
//           >

//             <Link
//               href="/"
//               onClick={() => setMobileMenu(false)}
//               className="block py-3 px-4 rounded-xl hover:bg-blue-50"
//             >
//               Home
//             </Link>

//             <Link
//               href="/about"
//               onClick={() => setMobileMenu(false)}
//               className="block py-3 px-4 rounded-xl hover:bg-blue-50"
//             >
//               About
//             </Link>
//             <Link href="/blog" onClick={() => setMobileMenu(false)}>
//   Blog
// </Link>

//             <Link
//               href="/medicines"
//               onClick={() => setMobileMenu(false)}
//               className="block py-3 px-4 rounded-xl hover:bg-blue-50"
//             >
//               Products
//             </Link>

//             <Link
//               href="/contact"
//               onClick={() => setMobileMenu(false)}
//               className="block py-3 px-4 rounded-xl hover:bg-blue-50"
//             >
//               Contact
//             </Link>

//             <div className="border-t pt-3 mt-3">

//               {user ? (
//                 <>
//                   <button
//                     onClick={() => {
//                       router.push("/profile");
//                       setMobileMenu(false);
//                     }}
//                     className="block w-full text-left py-3 px-4 rounded-xl hover:bg-blue-50"
//                   >
//                     My Profile
//                   </button>

//                   <button
//                     onClick={() => {
//                       setCartOpen(true);
//                       setMobileMenu(false);
//                     }}
//                     className="block w-full text-left py-3 px-4 rounded-xl hover:bg-blue-50"
//                   >
//                     My Cart
//                   </button>

//                   <button
//                     onClick={() => {
//                       logout();
//                       router.push("/");
//                     }}
//                     className="block w-full text-left py-3 px-4 rounded-xl hover:bg-red-50 text-red-500"
//                   >
//                     Logout
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <button
//                     onClick={() => router.push("/login")}
//                     className="block w-full text-left py-3 px-4 rounded-xl hover:bg-blue-50"
//                   >
//                     Login
//                   </button>

//                   <button
//                     onClick={() => router.push("/signup")}
//                     className="block w-full text-left py-3 px-4 rounded-xl hover:bg-blue-50"
//                   >
//                     Signup
//                   </button>
//                 </>
//               )}

//             </div>

//           </div>
//         )}

//       </header>

//       {/* OFFSET */}
//       <div className="h-[60px]" />

//       {/* CART DRAWER */}
//       <CartDrawer open={cartOpen} setOpen={setCartOpen} />
//     </>
//   );
// }

"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  LogOut,
  Package,
  UserCircle2,
} from "lucide-react";

import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import CartDrawer from "./CartDrawer";

export default function Header() {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const router = useRouter();

  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [openProfile, setOpenProfile] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  // REFS
  const profileRef = useRef(null);
  const profileBtnRef = useRef(null);

  const mobileMenuRef = useRef(null);
  const mobileBtnRef = useRef(null);

  const searchRef = useRef(null);
  const searchBtnRef = useRef(null);

  // SEARCH
  const handleSearch = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    router.push(`/medicines?search=${search}`);
    setShowSearch(false);
    setMobileMenu(false);
  };

  // CLICK OUTSIDE
  useEffect(() => {
    const handleClickOutside = (event) => {

      // PROFILE
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target) &&
        profileBtnRef.current &&
        !profileBtnRef.current.contains(event.target)
      ) {
        setOpenProfile(false);
      }

      // MOBILE MENU
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        mobileBtnRef.current &&
        !mobileBtnRef.current.contains(event.target)
      ) {
        setMobileMenu(false);
      }

      // SEARCH
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        searchBtnRef.current &&
        !searchBtnRef.current.contains(event.target)
      ) {
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className="
          fixed top-0 left-0 w-full z-50
          bg-white/80
          backdrop-blur-2xl
          border-b border-white/20
          shadow-sm
        "
      >

        {/* MAIN HEADER */}
        <div className="flex items-center justify-between px-4 md:px-10 h-[60px]">

          {/* LOGO */}
          <h2
            onClick={() => router.push("/")}
            className="
              text-lg sm:text-xl md:text-2xl
              font-extrabold
              tracking-tight
              bg-gradient-to-r from-blue-600 to-cyan-500
              bg-clip-text text-transparent
              cursor-pointer
              select-none
              whitespace-nowrap
            "
          >
            Medico Forensic
          </h2>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-7 text-gray-700 text-sm font-semibold">

            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>

            <Link href="/about" className="hover:text-blue-600 transition">
              About
            </Link>

            <Link href="/blog" className="hover:text-cyan-500 transition">
              Blog
            </Link>

            <Link href="/medicines" className="hover:text-blue-600 transition">
              Products
            </Link>

            <Link href="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>

          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-3 sm:gap-4">

            {/* SEARCH */}
            <button
              ref={searchBtnRef}
              onClick={() => setShowSearch(!showSearch)}
              className="
                hover:text-blue-600
                transition
                hover:scale-110
              "
            >
              <Search size={20} />
            </button>

            {/* CART */}
            <button
              onClick={() => setCartOpen(true)}
              className="
                relative
                hover:text-blue-600
                transition
                hover:scale-110
              "
            >
              <ShoppingCart size={20} />

              {cart?.length > 0 && (
                <span
                  className="
                    absolute -top-2 -right-2
                    bg-red-500 text-white
                    text-[10px]
                    min-w-[18px]
                    h-[18px]
                    flex items-center justify-center
                    rounded-full
                    font-bold
                  "
                >
                  {cart.length}
                </span>
              )}
            </button>

            {/* PROFILE */}
            <div className="relative hidden md:block">

              <button
                ref={profileBtnRef}
                onClick={() => setOpenProfile(!openProfile)}
                className="
                  hover:text-blue-600
                  transition
                  hover:scale-110
                "
              >
                <User size={20} />
              </button>

              {openProfile && (
                <div
                  ref={profileRef}
                  className="
                    absolute right-0 mt-4 w-64
                    bg-white/90
                    backdrop-blur-2xl
                    border border-white/30
                    rounded-3xl
                    shadow-2xl
                    overflow-hidden
                    animate-in fade-in zoom-in-95 duration-200
                  "
                >

                  {/* TOP */}
                  <div className="p-4 border-b border-gray-200/50 bg-gradient-to-r from-cyan-100 to-blue-200">

                    {user ? (
                      <>
                        <p className="text-xs text-gray-500 mb-1">
                          Logged in as
                        </p>

                        <p className="font-semibold text-gray-800 truncate">
                          {user.email}
                        </p>
                      </>
                    ) : (
                      <p className="font-semibold text-gray-700">
                        Welcome Guest
                      </p>
                    )}

                  </div>

                  {/* MENU */}
                  <div className="p-2">

                    {user ? (
                      <>
                        {/* PROFILE */}
                        <button
                          onClick={() => {
                            router.push("/profile");
                            setOpenProfile(false);
                          }}
                          className="
                            w-full flex items-center gap-3
                            px-4 py-3 rounded-2xl
                            hover:bg-blue-50
                            transition
                            text-sm font-medium
                          "
                        >
                          <UserCircle2 size={18} />
                          My Profile
                        </button>

                        {/* ORDERS */}
                        <button
                          onClick={() => {
                            router.push("/orders");
                            setOpenProfile(false);
                          }}
                          className="
                            w-full flex items-center gap-3
                            px-4 py-3 rounded-2xl
                            hover:bg-blue-50
                            transition
                            text-sm font-medium
                          "
                        >
                          <Package size={18} />
                          My Orders
                        </button>

                        {/* LOGOUT */}
                        <button
                          onClick={() => {
                            logout();
                            router.push("/");
                          }}
                          className="
                            w-full flex items-center gap-3
                            px-4 py-3 rounded-2xl
                            hover:bg-red-50
                            transition
                            text-sm font-medium
                            text-red-500
                          "
                        >
                          <LogOut size={18} />
                          Logout
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => router.push("/login")}
                          className="
                            w-full px-4 py-3 rounded-2xl
                            hover:bg-blue-50
                            transition
                            text-left text-sm font-medium
                          "
                        >
                          Login
                        </button>

                        <button
                          onClick={() => router.push("/signup")}
                          className="
                            w-full px-4 py-3 rounded-2xl
                            hover:bg-blue-50
                            transition
                            text-left text-sm font-medium
                          "
                        >
                          Signup
                        </button>
                      </>
                    )}

                  </div>
                </div>
              )}
            </div>

            {/* MOBILE BUTTON */}
            <button
              ref={mobileBtnRef}
              className="md:hidden"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>
        </div>

        {/* SEARCH BAR */}
        {showSearch && (
          <div
            ref={searchRef}
            className="px-4 pb-4 animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <form
              onSubmit={handleSearch}
              className="
                max-w-2xl mx-auto
                flex items-center gap-2
                bg-white/90
                backdrop-blur-xl
                border border-white/30
                rounded-2xl
                p-2
                shadow-2xl
              "
            >

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search medicines..."
                className="
                  flex-1 bg-transparent
                  outline-none
                  px-4 py-2
                  text-sm
                "
              />

              <button
                className="
                  px-5 py-2
                  bg-gradient-to-r from-blue-600 to-cyan-500
                  hover:from-blue-700 hover:to-cyan-600
                  text-white
                  rounded-xl
                  text-sm font-semibold
                  transition
                "
              >
                Search
              </button>

            </form>
          </div>
        )}

        {/* MOBILE MENU */}
        {mobileMenu && (
          <div
            ref={mobileMenuRef}
            className="
              md:hidden
              bg-white/95
              backdrop-blur-2xl
              border-t border-gray-200
              px-5 py-5
              space-y-2
              animate-in slide-in-from-top-2 duration-200
            "
          >

            <Link
              href="/"
              onClick={() => setMobileMenu(false)}
              className="block py-3 px-4 rounded-xl hover:bg-blue-50"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenu(false)}
              className="block py-3 px-4 rounded-xl hover:bg-blue-50"
            >
              About
            </Link>

            <Link
              href="/blog"
              onClick={() => setMobileMenu(false)}
              className="block py-3 px-4 rounded-xl hover:bg-blue-50"
            >
              Blog
            </Link>

            <Link
              href="/medicines"
              onClick={() => setMobileMenu(false)}
              className="block py-3 px-4 rounded-xl hover:bg-blue-50"
            >
              Products
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenu(false)}
              className="block py-3 px-4 rounded-xl hover:bg-blue-50"
            >
              Contact
            </Link>

            <div className="border-t pt-3 mt-3">

              {user ? (
                <>
                  {/* PROFILE */}
                  <button
                    onClick={() => {
                      router.push("/profile");
                      setMobileMenu(false);
                    }}
                    className="block w-full text-left py-3 px-4 rounded-xl hover:bg-blue-50"
                  >
                    My Profile
                  </button>

                  {/* ORDERS */}
                  <button
                    onClick={() => {
                      router.push("/orders");
                      setMobileMenu(false);
                    }}
                    className="block w-full text-left py-3 px-4 rounded-xl hover:bg-blue-50"
                  >
                    My Orders
                  </button>

                  {/* LOGOUT */}
                  <button
                    onClick={() => {
                      logout();
                      router.push("/");
                    }}
                    className="block w-full text-left py-3 px-4 rounded-xl hover:bg-red-50 text-red-500"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => router.push("/login")}
                    className="block w-full text-left py-3 px-4 rounded-xl hover:bg-blue-50"
                  >
                    Login
                  </button>

                  <button
                    onClick={() => router.push("/signup")}
                    className="block w-full text-left py-3 px-4 rounded-xl hover:bg-blue-50"
                  >
                    Signup
                  </button>
                </>
              )}

            </div>

          </div>
        )}

      </header>

      {/* OFFSET */}
      <div className="h-[60px]" />

      {/* CART DRAWER */}
      <CartDrawer open={cartOpen} setOpen={setCartOpen} />
    </>
  );
}