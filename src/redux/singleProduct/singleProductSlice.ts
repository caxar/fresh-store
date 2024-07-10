import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryItem, SingleSliceState, Status } from "./types";
import { fetchSingleProduct } from "./asyncActions";

const initialState = {
  entities: [],
  status: Status.Pending, // pending | succeeded | failed
} as SingleSliceState;

export const singleProductSlice = createSlice({
  name: "singleProduct-data",
  initialState,
  reducers: {
    setPopularItems: (state, action: PayloadAction<CategoryItem[]>) => {
      state.entities = action.payload;
    },
  },

  //   Для определения что происходит во время запроса вместо try/catch в UI, используем / extraReducers

  extraReducers: (builder) => {
    builder.addCase(fetchSingleProduct.pending, (state) => {
      state.status = Status.Pending;
    });
    builder.addCase(
      fetchSingleProduct.fulfilled,
      (state, action: PayloadAction<CategoryItem[]>) => {
        state.entities = action.payload;
        state.status = Status.Succeeded;
      }
    );
    builder.addCase(fetchSingleProduct.rejected, (state) => {
      state.status = Status.Failed;
      state.entities = [];
    });
  },
});

export const { setPopularItems } = singleProductSlice.actions;

export default singleProductSlice.reducer;
