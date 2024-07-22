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
        (item) => item.attributes.id === action.payload.attributes.id
      );

      if (findItem) {
        findItem.attributes.count++;
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

    removeFavorite: (state, action: PayloadAction<string | number>) => {
      state.items = state.items.filter(
        (item) => item.attributes.slug !== action.payload
      );
    },
    clearFavorite: (state) => {
      state.items = [];
    },
  },
});

export const { addFavorite, removeFavorite, clearFavorite } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
