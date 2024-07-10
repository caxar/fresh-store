import { createAsyncThunk } from "@reduxjs/toolkit";
import { CategoryItem } from "./types";
import axios from "axios";

export const fetchSingleProduct = createAsyncThunk(
  "fetchSingleProduct",
  async (slug) => {
    const params = {
      headers: {
        Authorization: "Bearer " + import.meta.env.VITE_STRAPI_KEY,
      },
    };
    const { data } = await axios.get(
      import.meta.env.VITE_LOCAL_API +
        `/api/products?filters[slug]=${slug}&populate=*`,
      params
    );
    return data;
  }
);
