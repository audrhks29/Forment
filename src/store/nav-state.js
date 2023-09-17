import create from 'zustand';
import { devtools } from 'zustand/middleware'
const useNavSubMenuState = (set) => ({
    subMenu1: false,
    subMenu2: false,
    toggleSubMenu1: () => set((state) => ({ subMenu1: !state.subMenu1 })),
    toggleSubMenu2: () => set((state) => ({ subMenu2: !state.subMenu2 })),
});

const useStore = create(devtools(useNavSubMenuState))
export default useStore;