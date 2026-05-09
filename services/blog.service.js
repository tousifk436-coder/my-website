import { getRequest } from "@/helper";

export const blogService = {
  getAllBlogs: () => getRequest("/blogs"),
};