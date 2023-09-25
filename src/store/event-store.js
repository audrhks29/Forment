import create from 'zustand';
import axios from 'axios';
import { devtools } from 'zustand/middleware'

const useAppState = (set) => ({
    eventData: [],
    fetchData: async () => {
        try {
            const response = await axios.get('https://gist.githubusercontent.com/audrhks29/573624cbe2a9d995141725530b36980b/raw/0068f32c187ab60845d48c8f6c22ac66dd2552a8/eventData.json');
            set({ eventData: response.data });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    },
});

const useEventStore = create(devtools(useAppState))
export default useEventStore;

