import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryItem, PopularSliceState, Status } from "./types";
import { fetchCategory } from "./asyncActions";

const initialState = {
  entities: [],
  status: Status.Pending, // pending | succeeded | failed
} as PopularSliceState;

export const categorySlice = createSlice({
  name: "category-data",
  initialState,
  reducers: {
    setPopularItems: (state, action: PayloadAction<CategoryItem[]>) => {
      state.entities = action.payload;
    },
  },

  //   Для определения что происходит во время запроса вместо try/catch в UI, используем / extraReducers

  extraReducers: (builder) => {
    builder.addCase(fetchCategory.pending, (state) => {
      state.status = Status.Pending;
    });
    builder.addCase(
      fetchCategory.fulfilled,
      (state, action: PayloadAction<CategoryItem[]>) => {
        state.entities = action.payload;
        state.status = Status.Succeeded;
      }
    );
    builder.addCase(fetchCategory.rejected, (state) => {
      state.status = Status.Failed;
      state.entities = [];
    });
  },
});

export const { setPopularItems } = categorySlice.actions;

export default categorySlice.reducer;
