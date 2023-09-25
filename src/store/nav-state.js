import create from 'zustand';
import { devtools } from 'zustand/middleware'
const useNavSubMenuState = (set) => ({
    activeSubMenu: false,
    csCenterSubMenu: false,
    toggleActiveSubMenu: () => set((state) => ({ activeSubMenu: !state.activeSubMenu })),
    toggleCsCenterSubMenu: () => set((state) => ({ csCenterSubMenu: !state.csCenterSubMenu })),
});

const useNavStateStore = create(devtools(useNavSubMenuState))
export default useNavStateStore;