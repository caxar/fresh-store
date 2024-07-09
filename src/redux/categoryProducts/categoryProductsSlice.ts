import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryItem, PopularSliceState, Status } from "./types";
import { fetchCategoryProducts } from "./asyncAction";

const initialState = {
  entities: [],
  status: Status.Pending, // pending | succeeded | failed
} as PopularSliceState;

export const categorySlice = createSlice({
  name: "productsCategory",
  initialState,
  reducers: {
    setProductsCategory: (state, action) => {
      state.entities = action.payload;
    },
  },

  //   Для определения что происходит во время запроса вместо try/catch в UI, используем / extraReducers

  extraReducers: (builder) => {
    builder.addCase(fetchCategoryProducts.pending, (state) => {
      state.status = Status.Pending;
    });
    builder.addCase(fetchCategoryProducts.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.status = Status.Succeeded;
    });
    builder.addCase(fetchCategoryProducts.rejected, (state) => {
      state.status = Status.Failed;
      state.entities = [];
    });
  },
});

export const { setProductsCategory } = categorySlice.actions;

export default categorySlice.reducer;
