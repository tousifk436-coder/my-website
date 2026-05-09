"use client";

import { confirmDialog } from "primereact/confirmdialog";
import { useCallback } from "react";

export default function useDialogue() {

  const popDialogue = useCallback(
    (
      message = "",
      header = "Confirmation",
      icon = "pi pi-exclamation-triangle",
      defaultFocus = "reject",
      acceptClassName = "p-button-danger"
    ) => {
      return new Promise((resolve) => {

        const accept = () => resolve(true);
        const reject = () => resolve(false);

        confirmDialog({
          message,
          header,
          icon,
          defaultFocus,
          acceptClassName,
          accept,
          reject,
        });

      });
    },
    []
  );

  return { popDialogue };
}