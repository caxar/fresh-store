import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import CategoryReducer from "./category/categorySlice";
import ProductsCategory from "./categoryProducts/categoryProductsSlice";

export const store = configureStore({
  reducer: {
    category: CategoryReducer,
    productCategory: ProductsCategory,
  },
});

// Глобальный тип всех Reducer
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
