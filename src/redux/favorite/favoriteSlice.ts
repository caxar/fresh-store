import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import getFavoriteDataLs from "../../utils/getFavoriteDataLs";
import { FavItem, CartSliceState } from "./types";

const initialState = {
  items: getFavoriteDataLs(),
  totalPrice: 0,
} as CartSliceState;

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    // При добавлении объекта пицца проверяем если были клик на один и тотже и у них
    // совпадают id тогда в переменную count добавляем 1 + 1 + 1....
    // иначе другой продукт тогда в count +1
    addFavorite: (state, action: PayloadAction<FavItem>) => {
      const findItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      // При добавении объекта через reduce вычисляем общию сумму
      // по price и quantity каждого добавленного объекта
      state.totalPrice = state.items.reduce((sum, current) => {
        return current.price * current.quantity + sum;
      }, 0);
    },
    countItemDown: (state, action: PayloadAction<string | number>) => {
      const findItem = state.items.find((item) => item.id === action.payload);
      if (findItem) {
        findItem.count--;
      }
    },
    removeProduct: (state, action: PayloadAction<string | number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearProductItems: (state) => {
      state.items = [];
    },
  },
});

export const { addFavorite, removeProduct, countItemDown, clearProductItems } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
