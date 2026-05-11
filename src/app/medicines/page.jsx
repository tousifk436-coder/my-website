
"use client";

import { Suspense } from "react";
import MedicinesContent from "./MedicinesContent";

export default function MedicinesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <MedicinesContent />
    </Suspense>
  );
}