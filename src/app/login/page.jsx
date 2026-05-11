

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";
import { Eye, EyeOff } from "lucide-react";

import { authService } from "../../../services/auth.service";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {

  const router = useRouter();

  const { login } = useAuth();

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    userId: "",
    password: "",
  });

  // HANDLE INPUT
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // HANDLE LOGIN
  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      // API CALL
      const response = await authService.loginUser(formData);

      console.log(response.data);

      // SAVE TOKEN
      if (response?.data?.data?.authToken) {

        Cookies.set(
          "colgoToken",
          response.data.data.authToken,
          {
            expires: 7,
            path: "/",
          }
        );

        // SAVE USER
        localStorage.setItem(
          "user",
          JSON.stringify(response.data.data)
        );

        // UPDATE AUTH CONTEXT
        login(
          response.data.data,
          response.data.data.authToken
        );
      }

      toast.success("Login successful");

      // REDIRECT
      router.push("/");

    } catch (error) {

      console.error(error);

      toast.error(
        error?.response?.data?.message || "Login failed"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-6">

      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-[#C6E9FF] rounded-3xl shadow-xl p-8"
      >

        <h1 className="text-3xl font-bold text-center mb-8 text-[#162555]">
          Login
        </h1>

        {/* USER ID */}
        <input
          type="text"
          name="userId"
          placeholder="Enter User ID"
          value={formData.userId}
          onChange={handleChange}
          className="
            w-full mb-4 px-4 py-3
            rounded-xl border border-slate-300
            outline-none
          "
          required
        />

        {/* PASSWORD */}
        <div className="relative mb-6">

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            className="
              w-full px-4 py-3 pr-12
              rounded-xl border border-slate-300
              outline-none
            "
            required
          />

          {/* SHOW / HIDE */}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
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

        {/* LOGIN BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="
            w-full py-3 rounded-xl
            bg-[#162555]
            text-white font-semibold
            hover:bg-[#1f3477]
            transition
          "
        >
          {loading ? "Logging in..." : "Login"}
        </button>

      </form>

    </div>
  );
}