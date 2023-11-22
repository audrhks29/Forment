import create from 'zustand';
import axios from 'axios';
import { devtools } from 'zustand/middleware'

const useAppState = (set) => ({
    brandData: [],
    isLoading: true,
    fetchData: async () => {
        try {
            const response = await axios.get('https://gist.githubusercontent.com/audrhks29/30351509c570ca1b6abd18b39d59bd52/raw/82f4cc520fea1d1a7cacda31ce1f0c3287a8b0a9/brandData.json');
            const sortedData = response.data.sort((a, b) => {
                return b.id - a.id;
            });
            set({ brandData: sortedData, isLoading: false });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    },
});

const useBrandStore = create(devtools(useAppState))
export default useBrandStore;

