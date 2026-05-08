"use client";

import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import { MedicineProvider } from "@/context/MedicineContext";
import { ProfileProvider } from "@/context/ProfileContext";

export default function AppProviders({ children }) {
  return (
    <AuthProvider>
      <ProfileProvider>
        <MedicineProvider>
          <CartProvider>{children}</CartProvider>
        </MedicineProvider>
      </ProfileProvider>
    </AuthProvider>
  );
}