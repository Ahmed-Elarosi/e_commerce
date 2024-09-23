import { create } from "zustand";

export const useProductStore = create((set) => ({
  product: [],
  setProduct: (product) => set({ product }),
}));
