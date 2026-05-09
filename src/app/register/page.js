// "use client";

// import { useState } from "react";
// import { authService } from "../../../services/auth.service";
// import { toast } from "react-hot-toast";

// export default function RegisterPage() {

//   const [loading, setLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     phone: "",
//     userId: "",
//     password: "",
//     name: "",
//     gender: "Male",
//     email: "",
//     role: "User",
//   });

//   // HANDLE INPUT
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // HANDLE REGISTER
//   const handleRegister = async (e) => {
//     e.preventDefault();

//     try {

//       setLoading(true);

//       const response = await authService.registerUser(formData);

//       console.log(response.data);

//       toast.success("User registered successfully");

//     } catch (error) {

//       console.error(error);

//       toast.error(
//         error?.response?.data?.message || "Registration failed"
//       );

//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-slate-100 p-6">

//       <form
//         onSubmit={handleRegister}
//         className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-8"
//       >

//         <h1 className="text-3xl font-bold text-center mb-8 text-[#162555]">
//           Register User
//         </h1>

//         {/* NAME */}
//         <input
//           type="text"
//           name="name"
//           placeholder="Enter Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="w-full mb-4 px-4 py-3 rounded-xl border border-slate-300 outline-none"
//           required
//         />

//         {/* USER ID */}
//         <input
//           type="text"
//           name="userId"
//           placeholder="Enter User ID"
//           value={formData.userId}
//           onChange={handleChange}
//           className="w-full mb-4 px-4 py-3 rounded-xl border border-slate-300 outline-none"
//           required
//         />

//         {/* PHONE */}
//         <input
//           type="text"
//           name="phone"
//           placeholder="Enter Phone Number"
//           value={formData.phone}
//           onChange={handleChange}
//           className="w-full mb-4 px-4 py-3 rounded-xl border border-slate-300 outline-none"
//           required
//         />

//         {/* EMAIL */}
//         <input
//           type="email"
//           name="email"
//           placeholder="Enter Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full mb-4 px-4 py-3 rounded-xl border border-slate-300 outline-none"
//           required
//         />

//         {/* PASSWORD */}
//         <input
//           type="password"
//           name="password"
//           placeholder="Enter Password"
//           value={formData.password}
//           onChange={handleChange}
//           className="w-full mb-4 px-4 py-3 rounded-xl border border-slate-300 outline-none"
//           required
//         />

//         {/* GENDER */}
//         <select
//           name="gender"
//           value={formData.gender}
//           onChange={handleChange}
//           className="w-full mb-4 px-4 py-3 rounded-xl border border-slate-300 outline-none"
//         >
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//           <option value="Other">Other</option>
//         </select>

//         {/* ROLE */}
//         <select
//           name="role"
//           value={formData.role}
//           onChange={handleChange}
//           className="w-full mb-6 px-4 py-3 rounded-xl border border-slate-300 outline-none"
//         >
//           <option value="User">User</option>
//           <option value="Admin">Admin</option>
//         </select>

//         {/* SUBMIT BUTTON */}
//         <button
//           type="submit"
//           disabled={loading}
//           className="
//             w-full py-3 rounded-xl
//             bg-[#162555]
//             text-white font-semibold
//             hover:bg-[#1f3477]
//             transition
//           "
//         >
//           {loading ? "Registering..." : "Register"}
//         </button>

//       </form>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { authService } from "../../../services/auth.service";
import { toast } from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";

export default function RegisterPage() {

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    phone: "",
    userId: "",
    password: "",
    confirmPassword: "",
    name: "",
    gender: "",
    email: "",
    role: "",
  });

  // HANDLE INPUT
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // HANDLE REGISTER
  const handleRegister = async (e) => {

    e.preventDefault();

    // PASSWORD MATCH CHECK
    if (formData.password !== formData.confirmPassword) {

      toast.error("Passwords do not match");

      return;

    }

    try {

      setLoading(true);

      // REMOVE CONFIRM PASSWORD
      const payload = {
        phone: formData.phone,
        userId: formData.userId,
        password: formData.password,
        name: formData.name,
        gender: formData.gender,
        email: formData.email,
        role: formData.role,
      };

      const response =
        await authService.registerUser(payload);

      console.log(response.data);

      toast.success("User registered successfully");

      // RESET FORM
      setFormData({
        phone: "",
        userId: "",
        password: "",
        confirmPassword: "",
        name: "",
        gender: "",
        email: "",
        role: "",
      });

    } catch (error) {

      console.error(error);

      toast.error(
        error?.response?.data?.message ||
        "Registration failed"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4 py-10">

      <form
        onSubmit={handleRegister}
        className="
          w-full max-w-md
          bg-[#C6E9FF]
          rounded-[2rem]
          shadow-xl
          border border-slate-200
          p-5
        "
      >

        {/* TITLE */}
        <div className="text-center mb-7">

          <h1 className="text-3xl font-bold text-[#162555]">
            Register
          </h1>

          <p className="text-sm text-slate-500 mt-2">
            Create your new account
          </p>

        </div>

        {/* NAME */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="
            w-full mb-3 px-4 py-3
            rounded-xl
            border border-slate-300
            outline-none
            focus:border-[#162555]
          "
          required
        />

        {/* USER ID */}
        <input
          type="text"
          name="userId"
          placeholder="User ID"
          value={formData.userId}
          onChange={handleChange}
          className="
            w-full mb-3 px-4 py-3
            rounded-xl
            border border-slate-300
            outline-none
            focus:border-[#162555]
          "
          required
        />

        {/* PHONE */}
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="
            w-full mb-3 px-4 py-3
            rounded-xl
            border border-slate-300
            outline-none
            focus:border-[#162555]
          "
          required
        />

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="
            w-full mb-3 px-4 py-3
            rounded-xl
            border border-slate-300
            outline-none
            focus:border-[#162555]
          "
          required
        />

        {/* PASSWORD */}
        <div className="relative mb-3">

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="
              w-full px-4 py-3
              rounded-xl
              border border-slate-300
              outline-none
              focus:border-[#162555]
            "
            required
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="
              absolute right-4 top-1/2
              -translate-y-1/2
              text-slate-500
            "
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>

        </div>

        {/* CONFIRM PASSWORD */}
        <div className="relative mb-3">

          <input
            type={
              showConfirmPassword
                ? "text"
                : "password"
            }
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="
              w-full px-4 py-3
              rounded-xl
              border border-slate-300
              outline-none
              focus:border-[#162555]
            "
            required
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword(
                !showConfirmPassword
              )
            }
            className="
              absolute right-4 top-1/2
              -translate-y-1/2
              text-slate-500
            "
          >
            {showConfirmPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>

        </div>

        {/* GENDER + ROLE */}
        <div className="grid grid-cols-2 gap-3 mb-5">

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="
              px-4 py-3
              rounded-xl
              border border-slate-300
              outline-none
              focus:border-[#162555]
            "
            required
          >
            <option value="">
              Gender
            </option>

            <option value="Male">
              Male
            </option>

            <option value="Female">
              Female
            </option>

            <option value="Other">
              Other
            </option>

          </select>

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="
              px-4 py-3
              rounded-xl
              border border-slate-300
              outline-none
              focus:border-[#162555]
            "
            required
          >
            <option value="">
              Role
            </option>

            <option value="User">
              User
            </option>

            <option value="Admin">
              Admin
            </option>

          </select>

        </div>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="
            w-full py-3 rounded-xl
            bg-[#162555]
            text-white font-semibold
            hover:bg-[#1f3477]
            transition-all duration-300
          "
        >
          {loading
            ? "Registering..."
            : "Register"}
        </button>

      </form>

    </div>
  );
}