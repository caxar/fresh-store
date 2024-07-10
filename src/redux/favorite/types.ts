export type FavItem = {
  attributes: {
    id: string | number;
    title: string;
    imageUrl: string;
    price: number;
    weight: string;
    slug: string;
  };
};

export interface CartSliceState {
  items: FavItem[];
  totalPrice: number;
}
