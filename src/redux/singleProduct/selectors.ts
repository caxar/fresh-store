// Селектор что бы не писать постоянно в UI state.popular
export const selectSingleProduct = (state: { singleProduct: unknown }) =>
  state.singleProduct;
