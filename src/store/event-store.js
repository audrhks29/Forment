import create from 'zustand';
import axios from 'axios';
import { devtools } from 'zustand/middleware'

const useAppState = (set) => ({
    eventData: [],
    fetchData: async () => {
        try {
            const response = await axios.get('https://gist.githubusercontent.com/audrhks29/573624cbe2a9d995141725530b36980b/raw/4075aecaf1aed46078a9e371da21414a888cc64f/eventData.json');
            set({ eventData: response.data });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    },
});

const useEventStore = create(devtools(useAppState))
export default useEventStore;

