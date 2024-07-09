import { createAsyncThunk } from "@reduxjs/toolkit";
// import { CategoryItem } from "./types";
import axios from "axios";

export const fetchCategoryProducts = createAsyncThunk(
  "fetchCategoryProductStatus",
  async (slug) => {
    const params = {
      headers: {
        Authorization: "Bearer " + import.meta.env.VITE_STRAPI_KEY,
      },
    };
    const { data } = await axios.get(
      import.meta.env.VITE_LOCAL_API +
        `/api/products?filters[categories][slug]=${slug}&populate=*`,
      params
    );
    return data;
  }
);
