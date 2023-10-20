import create from 'zustand';
import axios from 'axios';
import { devtools } from 'zustand/middleware'

const useAppState = (set) => ({
    eventData: [],
    fetchData: async () => {
        try {
            const response = await axios.get('https://gist.githubusercontent.com/audrhks29/573624cbe2a9d995141725530b36980b/raw/a30741eb69a0d9c5d9401c1694ea82e89d00c597/eventData.json');
            set({ eventData: response.data });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    },
});

const useEventStore = create(devtools(useAppState))
export default useEventStore;

