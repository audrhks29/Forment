import create from 'zustand';
import axios from 'axios';
import { devtools } from 'zustand/middleware'

const useAppState = (set) => ({
    deliveryData: [],
    fetchData: async () => {
        try {
            const response = await axios.get('https://gist.githubusercontent.com/audrhks29/ab74919bb77cf4c6497b593cb46e7cf6/raw/acf48ce5759ee372b46f779e2a7a518d1b7cda02/deliveyData.json');
            set({ deliveryData: response.data });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    },
});

const useDeliveryStore = create(devtools(useAppState))
export default useDeliveryStore;

