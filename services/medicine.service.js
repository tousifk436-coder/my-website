import { getRequest } from "@/helper";

export const medicineService = {
  getAll: () => getRequest("/medicines"),
  getById: (id) => getRequest(`/medicines/${id}`),
  search: (query) => getRequest(`/medicines?search=${query}`),
};