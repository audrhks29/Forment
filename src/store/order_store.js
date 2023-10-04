import create from 'zustand';
import { devtools } from 'zustand/middleware'

const useAppState = (set, getState) => ({
  orderData: [],
  handleCheckbox: (item) => {
    const state = getState()
    const selected = state.orderData.includes(item);
    if (selected) set({ orderData: state.orderData.filter(item => item !== item) })
    else set({ orderData: [...state.orderData, item] })
  }
});

const useOrderStore = create(devtools(useAppState))
export default useOrderStore;

