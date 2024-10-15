import { create } from 'zustand';
type dropType = {
  searchDrop: boolean;
  openSearch: () => void;
  closeSearch: () => void;
};
const useSearch = create<dropType>((set) => ({
  searchDrop: false,
  openSearch: () => set({ searchDrop: true }),
  closeSearch: () => set({ searchDrop: false }),
}));
export default useSearch;
