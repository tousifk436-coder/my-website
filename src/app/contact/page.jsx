// "use client";

// import { useState } from "react";
// import { Mail, Phone, MapPin, Send } from "lucide-react";

// export default function ContactPage() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Message sent successfully (demo)");
//     setForm({ name: "", email: "", message: "" });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 to-black text-white px-6 py-16">

//       {/* HEADER */}
//       <div className="max-w-4xl mx-auto text-center mb-14">
//         <div className="inline-flex  items-center gap-2 px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm mb-4">
//           <Mail size={16} /> Secure Communication Channel
//         </div>

//         <h1 className="text-4xl md:text-5xl text-[#152352] font-bold tracking-wide">
//           Contact Medico Forensic
//         </h1>

//         <p className=" mt-3 text-[#152352]">
//           Send secure queries to our clinical intelligence support system.
//         </p>
//       </div>

//       {/* GRID */}
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

//         {/* CONTACT INFO */}
//         <div className="space-y-6">

//          <div className="p-6 rounded-2xl border border-slate-800 bg-[rgb(21,35,82)]">
//             <div className="flex items-center gap-3 text-cyan-400 mb-2">
//               <Phone />
//               <h2 className="font-semibold">Hotline</h2>
//             </div>
//             <p className="text-slate-400">+91 98765 43210</p>
//           </div>

//          <div className="p-6 rounded-2xl border border-slate-800 bg-[rgb(21,35,82)]">
//             <div className="flex items-center gap-3 text-cyan-400 mb-2">
//               <Mail />
//               <h2 className="font-semibold">Email</h2>
//             </div>
//             <p className="text-slate-400">support@medicoforensic.com</p>
//           </div>

//          <div className="p-6 rounded-2xl border border-slate-800 bg-[rgb(21,35,82)]">
//             <div className="flex items-center gap-3 text-cyan-400 mb-2">
//               <MapPin />
//               <h2 className="font-semibold">Location</h2>
//             </div>
//             <p className="text-slate-400">Forensic Medical HQ, India</p>
//           </div>

//         </div>

//         {/* FORM
//         <form
//           onSubmit={handleSubmit}
//            className="p-6 rounded-2xl border border-slate-800 bg-[rgb(21,35,82)]"
//         >

//           <h2 className="text-xl font-semibold text-cyan-400 mb-3">
//             Send Message
//           </h2>

//           <input
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             placeholder="Your Name"
//             className="w-full p-3 rounded-xl bg-gray-200 border-slate-700 outline-none text-black-900"
//             required
//           />

//           <input
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             placeholder="Your Email"
//             className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 outline-none text-white"
//             required
//           />

//           <textarea
//             name="message"
//             value={form.message}
//             onChange={handleChange}
//             placeholder="Your Message"
//             rows={5}
//             className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 outline-none text-white"
//             required
//           />

//           <button
//             type="submit"
//             className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition"
//           >
//             <Send size={18} /> Send Secure Message
//           </button>

//         </form> */}
//         {/* FORM */}
// <form
//   onSubmit={handleSubmit}
//   className="p-6 rounded-2xl border border-slate-800 bg-[rgb(21,35,82)]"
// >

//   <h2 className="text-xl font-semibold text-cyan-400 mb-3">
//     Send Message
//   </h2>

//   {/* NAME */}
//   <input
//     name="name"
//     value={form.name}
//     onChange={handleChange}
//     placeholder="Your Name"
//     className="
//       w-full p-3 mb-3 rounded-xl
//       bg-white
//       border border-slate-300
//       text-black
//       placeholder:text-black/70
//       outline-none
//     "
//     required
//   />

//   {/* EMAIL */}
//   <input
//     name="email"
//     value={form.email}
//     onChange={handleChange}
//     placeholder="Your Email"
//     className="
//       w-full p-3 mb-3 rounded-xl
//       bg-white
//       border border-slate-300
//       text-black
//       placeholder:text-black/70
//       outline-none
//     "
//     required
//   />

//   {/* MESSAGE */}
//   <textarea
//     name="message"
//     value={form.message}
//     onChange={handleChange}
//     placeholder="Your Message"
//     rows={5}
//     className="
//       w-full p-3 mb-4 rounded-xl
//       bg-white
//       border border-slate-300
//       text-black
//       placeholder:text-black/70
//       outline-none
//       resize-none
//     "
//     required
//   />

//   {/* BUTTON */}
//   <button
//     type="submit"
//     className="
//       w-full flex items-center justify-center gap-2
//       p-3 rounded-xl
//       bg-cyan-500 hover:bg-cyan-400
//       text-black font-semibold
//       transition
//     "
//   >
//     <Send size={18} /> Send Secure Message
//   </button>

// </form>

//       </div>

//       {/* FOOT NOTE */}
//       <div className="text-center mt-16 text-slate-500 text-sm">
//         Encrypted communication enabled • Medico Forensic System
//       </div>

//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message sent successfully (demo)");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-100 to-[#eef3ff] px-6 py-16 overflow-hidden relative">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-[-100px] w-[320px] h-[320px] bg-cyan-400/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="absolute bottom-0 right-[-100px] w-[320px] h-[320px] bg-[#162555]/10 blur-3xl rounded-full pointer-events-none"></div>

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-14 relative z-10">

        <div
          className="
            inline-flex items-center gap-2
            px-4 py-2 rounded-full
            bg-cyan-500/10
            border border-cyan-500/20
            text-cyan-700 text-sm
            mb-5
            backdrop-blur-xl
          "
        >
          <Mail size={16} />
          Secure Communication Channel
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#162555]">
          Contact Medico Forensic
        </h1>

        <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Send secure queries to our clinical intelligence support system.
        </p>

      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 relative z-10">

        {/* LEFT INFO */}
        <div className="space-y-6">

          {/* HOTLINE */}
          <div
            className="
              bg-[#C6E9FF]
              backdrop-blur-2xl
              border border-slate-200
              rounded-3xl
              p-6
              shadow-lg
              hover:shadow-xl
              transition-all duration-300
            "
          >

            <div className="flex items-center gap-3 text-cyan-700 mb-3">
              <Phone />
              <h2 className="font-bold text-lg">
                Hotline
              </h2>
            </div>

            <p className="text-slate-600">
              +91 98765 43210
            </p>

          </div>

          {/* EMAIL */}
          <div
            className="
              bg-[#C6E9FF]
              backdrop-blur-2xl
              border border-slate-200
              rounded-3xl
              p-6
              shadow-lg
              hover:shadow-xl
              transition-all duration-300
            "
          >

            <div className="flex items-center gap-3 text-cyan-700 mb-3">
              <Mail />
              <h2 className="font-bold text-lg">
                Email
              </h2>
            </div>

            <p className="text-slate-600">
              support@medicoforensic.com
            </p>

          </div>

          {/* LOCATION */}
          <div
            className="
              bg-[#C6E9FF]
              backdrop-blur-2xl
              border border-slate-200
              rounded-3xl
              p-6
              shadow-lg
              hover:shadow-xl
              transition-all duration-300
            "
          >

            <div className="flex items-center gap-3 text-cyan-700 mb-3">
              <MapPin />
              <h2 className="font-bold text-lg">
                Location
              </h2>
            </div>

            <p className="text-slate-600">
              Forensic Medical HQ, India
            </p>

          </div>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="
            bg-[#C6E9FF]
            backdrop-blur-2xl
            border border-slate-200
            rounded-3xl
            p-7
            shadow-xl
          "
        >

          <h2 className="text-2xl font-bold text-[#162555] mb-6">
            Send Message
          </h2>

          {/* NAME */}
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="
              w-full p-4 mb-4 rounded-2xl
              bg-white
              border border-slate-200
              text-[#162555]
              placeholder:text-slate-400
              outline-none
              focus:border-cyan-400
              focus:ring-4 focus:ring-cyan-100
              transition-all
            "
            required
          />

          {/* EMAIL */}
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="
              w-full p-4 mb-4 rounded-2xl
              bg-white
              border border-slate-200
              text-[#162555]
              placeholder:text-slate-400
              outline-none
              focus:border-cyan-400
              focus:ring-4 focus:ring-cyan-100
              transition-all
            "
            required
          />

          {/* MESSAGE */}
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={6}
            className="
              w-full p-4 mb-5 rounded-2xl
              bg-white
              border border-slate-200
              text-[#162555]
              placeholder:text-slate-400
              outline-none
              resize-none
              focus:border-cyan-400
              focus:ring-4 focus:ring-cyan-100
              transition-all
            "
            required
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="
              w-full flex items-center justify-center gap-2
              p-4 rounded-2xl
              bg-[#162555]
              hover:bg-[#1e3477]
              text-white font-semibold
              shadow-lg
              hover:shadow-xl
              transition-all duration-300
            "
          >
            <Send size={18} />
            Send Secure Message
          </button>

        </form>

      </div>

      {/* FOOT NOTE */}
      <div className="text-center mt-16 text-slate-500 text-sm relative z-10">
        Encrypted communication enabled • Medico Forensic System
      </div>

    </div>
  );
}