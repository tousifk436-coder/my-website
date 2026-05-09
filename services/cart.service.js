import { getRequest, postRequest, deleteRequest } from "@/helper";

export const cartService = {
  getCart: () => getRequest("/cart"),

  addToCart: (data) =>
    postRequest({ url: "/cart", cred: data }),

  removeFromCart: (id) =>
    deleteRequest(`/cart/${id}`),
};