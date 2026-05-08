"use client";

import { useEffect, useState } from "react";
import { useMedicines } from "@/context/MedicineContext";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MedicineList from "@/components/MedicineList";
import Footer from "@/components/Footer";

export default function HomePage() {
  const medicineContext = useMedicines();

  // 🛑 prevent crash if provider missing
  if (!medicineContext) return null;

  const { medicines = [] } = medicineContext;

  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  // ✅ initial load
  useEffect(() => {
    setFiltered(medicines);
  }, [medicines]);

  // ✅ search filter (FIXED dependency)
  useEffect(() => {
    const result = medicines.filter((med) =>
      med.name.toLowerCase().includes(search.toLowerCase())
    );

    setFiltered(result);
  }, [search, medicines]);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">

      {/* HEADER */}
      <Header />

      {/* HERO */}
      <Hero
        search={search}
        setSearch={setSearch}
        featured={medicines.slice(0, 4)}
      />

      {/* LIST SECTION */}
      <div className="px-0 py-0 flex-1">

      

        {/* 🧪 LOADING */}
        {medicines.length === 0 ? (
          <p className="text-center text-gray-500">
            Loading medicines...
          </p>
        ) : filtered.length === 0 ? (
          // 🔍 NO RESULT
          <p className="text-center text-gray-500">
            No medicines found
          </p>
        ) : (
          <MedicineList medicines={filtered} />
        )}

      </div>

      {/* FOOTER
      <Footer /> */}

    </div>
  );
}