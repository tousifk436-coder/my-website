

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DNA } from "react-loader-spinner";

import MedicineCard from "./MedicineCard";

export default function MedicineList({ medicines }) {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // SHOW ONLY 16 MEDICINES
  const limitedMedicines = medicines.slice(0, 16);

  return (
    <section className="px-6 py-12">

      {/* HEADING */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-8">

        <h2 className="text-3xl font-bold text-blue-500 ml-130">
          Featured Medicines
        </h2>

      </div>

      {/* DNA LOADER */}
      {loading ? (

        <div className="flex items-center justify-center py-24">

          <DNA
            visible={true}
            height="120"
            width="120"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />

        </div>

      ) : (

        <>
          {/* MEDICINES GRID */}
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            {limitedMedicines.map((med) => (
              <MedicineCard key={med.id} med={med} />
            ))}

          </div>

          {/* BOTTOM BUTTON */}
          <div className="flex justify-center mt-12">

            <button
              onClick={() => router.push("/medicines")}
              className="
                px-8 py-3
                rounded-2xl
                border border-cyan-500/30
                bg-cyan-500/10
                hover:bg-cyan-500
                hover:text-black
                text-cyan-400
                font-semibold
                backdrop-blur-xl
                transition-all duration-300
                hover:scale-105
              "
            >
              View All Products
            </button>

          </div>
        </>

      )}

    </section>
  );
}