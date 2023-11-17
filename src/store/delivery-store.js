import create from 'zustand';
import axios from 'axios';
import { devtools } from 'zustand/middleware'

const useAppState = (set) => ({
    deliveryData: [],
    fetchData: async () => {
        try {
            const response = await axios.get('https://gist.githubusercontent.com/audrhks29/64aa8b5dfcbeb875d59fcb45add63ea9/raw/e0b00ba1865c98b8fde594f9c763cc9742db4446/productData.json');
            set({ deliveryData: response.data });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    },
});

const useDeliveryStore = create(devtools(useAppState))
export default useDeliveryStore;

