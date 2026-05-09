// "use client";

// import { useCallback } from "react";
// import Cookies from "js-cookie";

// // =====================
// // COOKIE HOOK
// // =====================
// export default function useCookie() {

//   // SET COOKIE
//   const setCookie = useCallback((name, value, exdays = 30) => {
//     Cookies.set(name, value, {
//       expires: exdays,
//       path: "/",
//     });
//     return true;
//   }, []);

//   // GET COOKIE
//   const getCookie = useCallback((name) => {
//     return Cookies.get(name);
//   }, []);

//   // DELETE COOKIE
//   const deleteCookie = useCallback((name) => {
//     Cookies.remove(name, { path: "/" });
//     return true;
//   }, []);

//   return { setCookie, getCookie, deleteCookie };
// }

"use client";

import { useCallback } from "react";
import Cookies from "js-cookie";

// =========================
// COOKIE HOOK
// =========================
export default function useCookie() {

  // SET COOKIE
  const setCookie = useCallback((cname, cvalue, exdays = 30) => {

    Cookies.set(cname, cvalue, {
      expires: exdays,
      path: "/",
    });

    return true;

  }, []);

  // GET COOKIE
  const getCookie = useCallback((cname) => {

    return Cookies.get(cname);

  }, []);

  return {
    setCookie,
    getCookie,
  };
}

// =========================
// DELETE COOKIE
// =========================
export const deleteCookie = (cname) => {

  Cookies.remove(cname, {
    path: "/",
  });

  return true;
};