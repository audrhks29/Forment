import create from 'zustand';
import axios from 'axios';
import { devtools } from 'zustand/middleware'

const useAppState = (set) => ({
    brandData: [],
    fetchData: async () => {
        try {
            const response = await axios.get('https://gist.githubusercontent.com/audrhks29/30351509c570ca1b6abd18b39d59bd52/raw/33c3115b1d8a44bc70251d121e4c9b04134a590c/brandData.json');
            set({ brandData: response.data });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    },
});

const useBrandStore = create(devtools(useAppState))
export default useBrandStore;

