import { postRequest, getRequest } from "@/helper";

export const orderService = {
  placeOrder: (data) =>
    postRequest({ url: "/order", cred: data }),

  getOrders: () => getRequest("/order"),
};