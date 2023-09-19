import create from 'zustand';
import axios from 'axios';
import { devtools } from 'zustand/middleware'

const useAppState = (set) => ({
    productData: [],
    fetchData: async () => {
        try {
            const response = await axios.get('https://gist.githubusercontent.com/audrhks29/64aa8b5dfcbeb875d59fcb45add63ea9/raw/65d2155daff1a9d06b9be3583b853cabbacccded/productData.json');
            set({ productData: response.data });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    },
});

const useProductStore = create(devtools(useAppState))
export default useProductStore;

