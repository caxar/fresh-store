import { createAsyncThunk } from "@reduxjs/toolkit";
import { CategoryItem } from "./types";
import axios from "axios";

export const fetchCategory = createAsyncThunk(
  "fetchCategoryStatus",
  async () => {
    const params = {
      headers: {
        Authorization: "Bearer " + import.meta.env.VITE_STRAPI_KEY,
      },
    };
    const { data } = await axios.get<CategoryItem[]>(
      import.meta.env.VITE_LOCAL_API + `/api/categories?populate=*`,
      params
    );
    return data;
  }
);
