// // // // import { postRequest, getRequest } from "@/helper";

// // // // export const authService = {
// // // //   login: (data) =>
// // // //     postRequest({ url: "/auth/login", cred: data }),

// // // //   getUser: () => getRequest("/auth/me"),
// // // // };
// // // import { noTokenPostRequest } from "@/helper";

// // // export const authService = {

// // //   registerUser: async (data) => {
// // //     return await noTokenPostRequest({
// // //       url: "/auth/registerUser",
// // //       cred: data,
// // //     });
// // //   },

// // // };

// // import { noTokenPostRequest } from "@/helper";

// // export const authService = {

// //   registerUser: async (data) => {
// //     return await noTokenPostRequest({
// //       url: "/auth/registerUser",
// //       cred: data,
// //     });
// //   },

// // };

// import { noTokenPostRequest } from "../helper";

// export const authService = {

//   registerUser: async (data) => {
//     return await noTokenPostRequest({
//       url: "/auth/registerUser",
//       cred: data,
//     });
//   },

// };

import { noTokenPostRequest } from "../helper";

export const authService = {

  // REGISTER
  registerUser: async (data) => {

    return await noTokenPostRequest({
      url: "/auth/registerUser",
      cred: data,
    });

  },

  // LOGIN
  loginUser: async (data) => {

    return await noTokenPostRequest({
      url: "/auth/loginWithPassword",
      cred: data,
    });

  },

};