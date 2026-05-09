

// "use client";

// import Image from "next/image";
// import { useSearchParams, useRouter } from "next/navigation";
// import { useCart } from "@/context/CartContext";
// import { useState } from "react";

// import {
//   ShieldCheck,
//   CreditCard,
//   Truck,
//   BadgeCheck,
// } from "lucide-react";

// export default function CheckoutPage() {
//   const params = useSearchParams();
//   const router = useRouter();
//   const { cart, totalPrice } = useCart();

//   // BUY NOW DATA
//   const name = params.get("name");
//   const price = params.get("price");
//   const id = params.get("id");
//   const image = params.get("image");

//   const isBuyNow = name && price;

//   const [form, setForm] = useState({
//     fullName: "",
//     mobile: "",
//     email: "",
//     address: "",
//     city: "",
//     state: "",
//     pincode: "",
//     payment: "Stripe",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleOrder = (e) => {
//     e.preventDefault();

//     alert("Order Placed Successfully (Demo Mode)");

//     router.push("/");
//   };

//   // FINAL ITEMS
//   const items = isBuyNow
//     ? [
//         {
//           id,
//           name,
//           price,
//           image,
//           quantity: 1,
//         },
//       ]
//     : cart;

//   const total = isBuyNow ? Number(price) : totalPrice;

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-[#eef4ff] text-[#162555] px-4 md:px-6 py-10 md:py-12">

//       {/* HEADER */}
//       <div className="max-w-6xl mx-auto mb-10 text-center">

//         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-700 text-sm mb-4">
//           <ShieldCheck size={16} />
//           Secure Payment Gateway
//         </div>

//         <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
//           Secure Checkout
//         </h1>

//         <p className="text-slate-600 mt-3 text-base md:text-lg">
//           Complete your pharmaceutical order safely and securely
//         </p>

//       </div>

//       {/* GRID */}
//       <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-10">

//         {/* LEFT FORM */}
//         <form
//           onSubmit={handleOrder}
//           className="
//             bg-white
//             border border-slate-200
//             rounded-[2rem]
//             p-5 md:p-7
//             shadow-xl
//             space-y-4
//           "
//         >

//           <div className="flex items-center gap-3 mb-4">
//             <div className="h-12 w-12 rounded-2xl bg-cyan-100 flex items-center justify-center">
//               <Truck size={22} className="text-cyan-700" />
//             </div>

//             <div>
//               <h2 className="text-2xl font-bold text-[#162555]">
//                 Patient Details
//               </h2>

//               <p className="text-slate-500 text-sm">
//                 Enter shipping information
//               </p>
//             </div>
//           </div>

//           <input
//             name="fullName"
//             placeholder="Full Name"
//             onChange={handleChange}
//             className="
//               w-full p-4 rounded-2xl
//               bg-slate-50
//               border border-slate-200
//               text-[#162555]
//               placeholder:text-slate-500
//               outline-none
//               focus:border-cyan-400
//             "
//             required
//           />

//           <input
//             name="mobile"
//             placeholder="Mobile Number"
//             onChange={handleChange}
//             className="
//               w-full p-4 rounded-2xl
//               bg-slate-50
//               border border-slate-200
//               text-[#162555]
//               placeholder:text-slate-500
//               outline-none
//               focus:border-cyan-400
//             "
//             required
//           />

//           <input
//             name="email"
//             type="email"
//             placeholder="Email Address"
//             onChange={handleChange}
//             className="
//               w-full p-4 rounded-2xl
//               bg-slate-50
//               border border-slate-200
//               text-[#162555]
//               placeholder:text-slate-500
//               outline-none
//               focus:border-cyan-400
//             "
//             required
//           />

//           <textarea
//             name="address"
//             placeholder="Shipping Address"
//             onChange={handleChange}
//             rows={4}
//             className="
//               w-full p-4 rounded-2xl
//               bg-slate-50
//               border border-slate-200
//               text-[#162555]
//               placeholder:text-slate-500
//               outline-none
//               resize-none
//               focus:border-cyan-400
//             "
//             required
//           />

//           <div className="grid grid-cols-2 gap-3">

//             <input
//               name="city"
//               placeholder="City"
//               onChange={handleChange}
//               className="
//                 p-4 rounded-2xl
//                 bg-slate-50
//                 border border-slate-200
//                 text-[#162555]
//                 placeholder:text-slate-500
//                 outline-none
//                 focus:border-cyan-400
//               "
//               required
//             />

//             <input
//               name="state"
//               placeholder="State"
//               onChange={handleChange}
//               className="
//                 p-4 rounded-2xl
//                 bg-slate-50
//                 border border-slate-200
//                 text-[#162555]
//                 placeholder:text-slate-500
//                 outline-none
//                 focus:border-cyan-400
//               "
//               required
//             />

//           </div>

//           <input
//             name="pincode"
//             placeholder="Pincode"
//             onChange={handleChange}
//             className="
//               w-full p-4 rounded-2xl
//               bg-slate-50
//               border border-slate-200
//               text-[#162555]
//               placeholder:text-slate-500
//               outline-none
//               focus:border-cyan-400
//             "
//             required
//           />

//           {/* PAYMENT */}
//           <div className="pt-2">

//             <label className="text-sm font-semibold text-[#162555] mb-3 block">
//               Payment Method
//             </label>

//             <div className="relative">

//               <CreditCard
//                 size={18}
//                 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
//               />

//               <select
//                 name="payment"
//                 onChange={handleChange}
//                 className="
//                   w-full pl-12 pr-4 py-4 rounded-2xl
//                   bg-slate-50
//                   border border-slate-200
//                   text-[#162555]
//                   outline-none
//                   focus:border-cyan-400
//                 "
//               >
//                 <option>Stripe</option>
//                 <option>PayPal</option>
//                 <option>Adyen</option>
//                 <option>Worldpay</option>
//                 <option>2Checkout</option>
//               </select>

//             </div>
//           </div>

//           {/* SUBMIT */}
//           <button
//             type="submit"
//             className="
//               w-full mt-4 p-4 rounded-2xl
//               bg-[#162555]
//               hover:bg-[#20397f]
//               text-white font-bold text-lg
//               transition-all duration-300
//               hover:scale-[1.01]
//               active:scale-[0.98]
//               shadow-lg
//             "
//           >
//             Place Order
//           </button>

//         </form>

//         {/* RIGHT SUMMARY */}
//         <div
//           className="
//             bg-white
//             border border-slate-200
//             rounded-[2rem]
//             p-5 md:p-7
//             shadow-xl
//             h-fit
//           "
//         >

//           <div className="flex items-center gap-3 mb-6">

//             <div className="h-12 w-12 rounded-2xl bg-green-100 flex items-center justify-center">
//               <BadgeCheck size={22} className="text-green-700" />
//             </div>

//             <div>
//               <h2 className="text-2xl font-bold text-[#162555]">
//                 Order Summary
//               </h2>

//               <p className="text-slate-500 text-sm">
//                 Review your products
//               </p>
//             </div>

//           </div>

//           {/* ITEMS */}
//           <div className="space-y-4 max-h-[450px] overflow-y-auto pr-1">

//             {items.map((item, i) => (
//               <div
//                 key={i}
//                 className="
//                   flex gap-4
//                   bg-slate-50
//                   border border-slate-200
//                   p-4 rounded-3xl
//                 "
//               >

//                 {/* IMAGE */}
//                 <div
//                   className="
//                     relative
//                     h-24 w-24
//                     min-w-[96px]
//                     overflow-hidden
//                     rounded-2xl
//                     bg-white
//                     border border-slate-200
//                   "
//                 >

//                   <img
//                     src={
//                       item.image ||
//                       "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500"
//                     }
//                     alt={item.name}
//                     className="h-full w-full object-cover"
//                   />

//                 </div>

//                 {/* CONTENT */}
//                 <div className="flex-1 flex flex-col justify-between">

//                   <div>

//                     <h3 className="font-bold text-[#162555] text-lg line-clamp-1">
//                       {item.name}
//                     </h3>

//                     <p className="text-sm text-slate-500 mt-1">
//                       Pharmaceutical Product
//                     </p>

//                     {item.category && (
//                       <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-xs font-semibold">
//                         {item.category}
//                       </div>
//                     )}

//                   </div>

//                   <div className="flex items-center justify-between mt-4">

//                     <span className="text-sm text-slate-500">
//                       Qty: {item.quantity || 1}
//                     </span>

//                     <span className="text-2xl font-extrabold text-cyan-600">
//                       ₹{item.price}
//                     </span>

//                   </div>

//                 </div>

//               </div>
//             ))}

//           </div>

//           {/* TOTAL */}
//           <div className="mt-6 border-t border-slate-200 pt-5">

//             <div className="flex justify-between items-center">

//               <span className="text-xl font-bold text-[#162555]">
//                 Total Amount
//               </span>

//               <span className="text-3xl font-extrabold text-green-600">
//                 ₹{total}
//               </span>

//             </div>

//             <div className="mt-3 flex items-center justify-between text-sm text-slate-500">
//               <span>Shipping</span>
//               <span>Free Delivery</span>
//             </div>

//           </div>

//           {/* SECURITY */}
//           <div className="mt-6 p-5 rounded-3xl bg-cyan-50 border border-cyan-100">

//             <div className="flex items-center gap-2 mb-3">

//               <ShieldCheck size={18} className="text-cyan-700" />

//               <span className="font-semibold text-cyan-900">
//                 Secure Checkout
//               </span>

//             </div>

//             <div className="space-y-2 text-sm text-cyan-800">

//               <p>✓ Encrypted payment processing</p>

//               <p>✓ Verified payment gateways</p>

//               <p>✓ Safe pharmaceutical transactions</p>

//               <p>✓ Protected customer information</p>

//             </div>

//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }

"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

import {
  ShieldCheck,
  CreditCard,
  Truck,
  BadgeCheck,
  CheckCircle2,
  LockKeyhole,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function CheckoutPage() {
  const params = useSearchParams();
  const router = useRouter();
  const { cart, totalPrice, clearCart } = useCart();

  // BUY NOW DATA
  const name = params.get("name");
  const price = params.get("price");
  const id = params.get("id");
  const image = params.get("image");
  const category = params.get("category");

  const isBuyNow = name && price;

  const [form, setForm] = useState({
    fullName: "",
    mobile: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    payment: "Stripe",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // FINAL ITEMS
  const items = isBuyNow
    ? [
        {
          id,
          name,
          price,
          image,
          category,
          quantity: 1,
        },
      ]
    : cart;

  const total = isBuyNow ? Number(price) : totalPrice;

  const handleOrder = (e) => {
    e.preventDefault();

    setOrderPlaced(true);

    if (!isBuyNow) {
      clearCart?.();
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // THANK YOU PAGE
  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center px-4">

        {/* BG GLOW */}
        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-cyan-500/20 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-500/20 rounded-full blur-3xl" />

        <div
          className="
            relative z-10
            w-full max-w-2xl
            bg-white/10
            border border-white/10
            backdrop-blur-2xl
            rounded-[2.5rem]
            p-8 md:p-12
            text-center
            shadow-[0_20px_80px_rgba(0,0,0,0.45)]
          "
        >

          {/* ICON */}
          <div
            className="
              mx-auto
              h-24 w-24
              rounded-full
              bg-green-500/20
              border border-green-400/20
              flex items-center justify-center
              mb-8
            "
          >
            <CheckCircle2
              size={52}
              className="text-green-400"
            />
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-black text-white">
            Thank You
          </h1>

          {/* MESSAGE */}
          <p className="mt-5 text-lg md:text-xl text-slate-300 leading-relaxed">
            Your Request Has Been Received Successfully
          </p>

          <p className="mt-3 text-slate-400 text-base">
            Our Team Will Contact You Soon
          </p>

          {/* ORDER BOX */}
          <div
            className="
              mt-10
              bg-white/5
              border border-white/10
              rounded-3xl
              p-6
              text-left
            "
          >

            <div className="flex items-center gap-3 mb-5">
              <BadgeCheck className="text-cyan-400" />

              <h3 className="text-xl font-bold text-white">
                Order Summary
              </h3>
            </div>

            <div className="space-y-4">

              {items.map((item, i) => (
                <div
                  key={i}
                  className="
                    flex items-center gap-4
                    bg-white/[0.04]
                    border border-white/10
                    rounded-2xl
                    p-4
                  "
                >

                  <img
                    src={
                      item.image ||
                      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500"
                    }
                    alt={item.name}
                    className="
                      h-20 w-20
                      rounded-2xl
                      object-cover
                      border border-white/10
                    "
                  />

                  <div className="flex-1">
                    <h4 className="font-bold text-white">
                      {item.name}
                    </h4>

                    <p className="text-sm text-slate-400 mt-1">
                      Qty: {item.quantity || 1}
                    </p>
                  </div>

                  <div className="text-xl font-extrabold text-cyan-400">
                    ₹{item.price}
                  </div>

                </div>
              ))}

            </div>

            {/* TOTAL */}
            <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">

              <span className="text-lg font-bold text-white">
                Total Amount
              </span>

              <span className="text-3xl font-black text-green-400">
                ₹{total}
              </span>

            </div>

          </div>

          {/* BUTTON */}
          <button
            onClick={() => router.push("/medicines")}
            className="
              mt-10
              px-8 py-4
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              hover:from-cyan-600
              hover:to-blue-700
              text-white
              font-bold
              text-lg
              transition-all duration-300
              hover:scale-[1.03]
              active:scale-95
              shadow-2xl
            "
          >
            Continue Shopping
          </button>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-[#eef4ff] text-[#162555] px-4 md:px-6 py-10 md:py-12 overflow-hidden relative">

      {/* BG GLOW */}
      <div className="absolute top-[-120px] left-[-100px] w-[320px] h-[320px] bg-cyan-300/20 rounded-full blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-100px] w-[320px] h-[320px] bg-blue-300/20 rounded-full blur-3xl" />

      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-10 text-center relative z-10">

        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-700 text-sm font-semibold mb-5">
          <LockKeyhole size={16} />
          Secure Payment Gateway
        </div>

        <h1 className="text-4xl md:text-5xl font-black tracking-tight">
          Secure Checkout
        </h1>

        <p className="text-slate-600 mt-4 text-base md:text-lg">
          Complete your pharmaceutical order safely and securely
        </p>

      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-10 relative z-10">

        {/* LEFT FORM */}
        <form
          onSubmit={handleOrder}
          className="
            bg-[#C6E9FF]
            backdrop-blur-xl
            border border-slate-200
            rounded-[2.5rem]
            p-5 md:p-7
            shadow-2xl
            space-y-5
          "
        >

          {/* TOP */}
          <div className="flex items-center gap-4 mb-3">

            <div className="h-14 w-14 rounded-3xl bg-cyan-100 flex items-center justify-center">
              <Truck size={24} className="text-cyan-700" />
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#162555]">
                Patient Details
              </h2>

              <p className="text-slate-500 text-sm mt-1">
                Enter your shipping information
              </p>
            </div>

          </div>

          {/* INPUTS */}
          <div className="space-y-4">

            <input
              name="fullName"
              placeholder="Full Name"
              onChange={handleChange}
              className="
                w-full p-4 rounded-2xl
                bg-slate-50
                border border-slate-200
                outline-none
                focus:border-cyan-400
                transition
              "
              required
            />

            <div className="relative">

              <Phone
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                name="mobile"
                placeholder="Mobile Number"
                onChange={handleChange}
                className="
                  w-full pl-12 pr-4 py-4 rounded-2xl
                  bg-slate-50
                  border border-slate-200
                  outline-none
                  focus:border-cyan-400
                  transition
                "
                required
              />

            </div>

            <div className="relative">

              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                onChange={handleChange}
                className="
                  w-full pl-12 pr-4 py-4 rounded-2xl
                  bg-slate-50
                  border border-slate-200
                  outline-none
                  focus:border-cyan-400
                  transition
                "
                required
              />

            </div>

            <textarea
              name="address"
              placeholder="Shipping Address"
              onChange={handleChange}
              rows={4}
              className="
                w-full p-4 rounded-2xl
                bg-slate-50
                border border-slate-200
                outline-none
                resize-none
                focus:border-cyan-400
                transition
              "
              required
            />

            <div className="grid grid-cols-2 gap-3">

              <input
                name="city"
                placeholder="City"
                onChange={handleChange}
                className="
                  p-4 rounded-2xl
                  bg-slate-50
                  border border-slate-200
                  outline-none
                  focus:border-cyan-400
                "
                required
              />

              <input
                name="state"
                placeholder="State"
                onChange={handleChange}
                className="
                  p-4 rounded-2xl
                  bg-slate-50
                  border border-slate-200
                  outline-none
                  focus:border-cyan-400
                "
                required
              />

            </div>

            <div className="relative">

              <MapPin
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                name="pincode"
                placeholder="Pincode"
                onChange={handleChange}
                className="
                  w-full pl-12 pr-4 py-4 rounded-2xl
                  bg-slate-50
                  border border-slate-200
                  outline-none
                  focus:border-cyan-400
                "
                required
              />

            </div>

          </div>

          {/* PAYMENT */}
          <div className="pt-2">

            <label className="text-sm font-bold text-[#162555] mb-3 block">
              Payment Method
            </label>

            <div className="relative">

              <CreditCard
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <select
                name="payment"
                onChange={handleChange}
                className="
                  w-full pl-12 pr-4 py-4 rounded-2xl
                  bg-slate-50
                  border border-slate-200
                  outline-none
                  focus:border-cyan-400
                "
              >
                <option>Stripe</option>
                <option>PayPal</option>
                <option>Adyen</option>
                <option>Worldpay</option>
                <option>2Checkout</option>
              </select>

            </div>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="
              w-full mt-2 p-4 rounded-2xl
              bg-gradient-to-r
              from-[#162555]
              to-[#2846a5]
              hover:from-[#20397f]
              hover:to-[#3156cc]
              text-white
              font-bold text-lg
              transition-all duration-300
              hover:scale-[1.01]
              active:scale-[0.98]
              shadow-xl
            "
          >
            Place Order
          </button>

        </form>

        {/* RIGHT SUMMARY */}
        <div
          className="
            bg-[#C6E9FF]
            backdrop-blur-xl
            border border-slate-200
            rounded-[2.5rem]
            p-5 md:p-7
            shadow-2xl
            h-fit
          "
        >

          {/* HEADER */}
          <div className="flex items-center gap-4 mb-6">

            <div className="h-14 w-14 rounded-3xl bg-green-100 flex items-center justify-center">
              <BadgeCheck size={24} className="text-green-700" />
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#162555]">
                Order Summary
              </h2>

              <p className="text-slate-500 text-sm mt-1">
                Review your products
              </p>
            </div>

          </div>

          {/* ITEMS */}
          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-1">

            {items.map((item, i) => (
              <div
                key={i}
                className="
                  flex gap-4
                  bg-slate-50
                  border border-slate-200
                  p-4 rounded-3xl
                  hover:shadow-lg
                  transition-all duration-300
                "
              >

                {/* IMAGE */}
                <div
                  className="
                    relative
                    h-24 w-24
                    min-w-[96px]
                    overflow-hidden
                    rounded-2xl
                    bg-white
                    border border-slate-200
                  "
                >

                  <img
                    src={
                      item.image ||
                      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500"
                    }
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />

                </div>

                {/* CONTENT */}
                <div className="flex-1 flex flex-col justify-between">

                  <div>

                    <h3 className="font-bold text-[#162555] text-lg line-clamp-1">
                      {item.name}
                    </h3>

                    <p className="text-sm text-slate-500 mt-1">
                      Pharmaceutical Product
                    </p>

                    {item.category && (
                      <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-xs font-bold">
                        {item.category}
                      </div>
                    )}

                  </div>

                  <div className="flex items-center justify-between mt-4">

                    <span className="text-sm text-slate-500 font-medium">
                      Qty: {item.quantity || 1}
                    </span>

                    <span className="text-2xl font-black text-cyan-600">
                      ₹{item.price}
                    </span>

                  </div>

                </div>

              </div>
            ))}

          </div>

          {/* TOTAL */}
          <div className="mt-7 border-t border-slate-200 pt-5">

            <div className="flex justify-between items-center">

              <span className="text-xl font-black text-[#162555]">
                Total Amount
              </span>

              <span className="text-4xl font-black text-green-600">
                ₹{total}
              </span>

            </div>

            <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
              <span>Shipping</span>
              <span className="font-semibold text-green-600">
                Free Delivery
              </span>
            </div>

          </div>

          {/* SECURITY */}
          <div className="mt-7 p-5 rounded-3xl bg-cyan-50 border border-cyan-100">

            <div className="flex items-center gap-2 mb-4">

              <ShieldCheck size={18} className="text-cyan-700" />

              <span className="font-bold text-cyan-900">
                Secure Checkout
              </span>

            </div>

            <div className="space-y-2 text-sm text-cyan-800">

              <p>✓ Encrypted payment processing</p>

              <p>✓ Verified payment gateways</p>

              <p>✓ Safe pharmaceutical transactions</p>

              <p>✓ Protected customer information</p>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}