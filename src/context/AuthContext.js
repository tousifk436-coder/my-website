// // "use client";

// // import { createContext, useContext, useEffect, useState } from "react";

// // const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);

// //   useEffect(() => {
// //     const data = localStorage.getItem("user");
// //     if (data) setUser(JSON.parse(data));
// //   }, []);

// //   const login = async (email) => {
// //     const fakeUser = { email, role: "patient" };

// //     localStorage.setItem("user", JSON.stringify(fakeUser));
// //     setUser(fakeUser);
// //   };

// //   const logout = () => {
// //     localStorage.removeItem("user");
// //     setUser(null);
// //   };

// //   return (
// //     <AuthContext.Provider value={{ user, login, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = () => useContext(AuthContext);

// "use client";

// import {
//   createContext,
//   useContext,
//   useEffect,
//   useState,
// } from "react";

// import Cookies from "js-cookie";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {

//   const [user, setUser] = useState(null);

//   // LOAD USER FROM COOKIES
//   useEffect(() => {

//     const storedUser = Cookies.get("user");

//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }

//   }, []);

//   // LOGIN FUNCTION
//   const login = (userData) => {

//     setUser(userData);

//     // SAVE USER
//     Cookies.set(
//       "user",
//       JSON.stringify(userData),
//       { expires: 7 }
//     );

//   };

//   // LOGOUT FUNCTION
//   const logout = () => {

//     setUser(null);

//     Cookies.remove("user");
//     Cookies.remove("colgoToken");

//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         login,
//         logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  // LOAD USER
  useEffect(() => {

    const token = Cookies.get("colgoToken");

    const savedUser = localStorage.getItem("user");

    if (token && savedUser) {
      setUser(JSON.parse(savedUser));
    }

  }, []);

  // LOGIN
  const login = (userData, token) => {

    Cookies.set("colgoToken", token, {
      expires: 7,
    });

    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );

    setUser(userData);
  };

  // LOGOUT
  const logout = () => {

    Cookies.remove("colgoToken");

    localStorage.removeItem("user");

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);