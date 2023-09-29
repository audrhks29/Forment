import create from 'zustand';
import axios from 'axios';
import { devtools } from 'zustand/middleware'

const useAppState = (set) => ({
    faqData: [],
    fetchData: async () => {
        try {
            const response = await axios.get('https://gist.githubusercontent.com/audrhks29/161cb16bd1759a0609ae0d5fe4cd8d6d/raw/395a246e5fbc2a8982c5ab0e3004da3c1a8087bf/faqData.json');
            const sortedData = response.data.sort((a, b) => {
                return b.id - a.id;
            });
            set({ faqData: sortedData });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    },
});

const useFaqStore = create(devtools(useAppState))
export default useFaqStore;

