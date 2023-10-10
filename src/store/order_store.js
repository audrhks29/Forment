import create from 'zustand';
import { devtools } from 'zustand/middleware'

const useAppState = (set, getState) => ({
  orderData: [],

});

const useOrderStore = create(devtools(useAppState))
export default useOrderStore;

