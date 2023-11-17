import create from 'zustand';
import axios from 'axios';
import { devtools } from 'zustand/middleware'

const useAppState = (set) => ({
    noticeData: [],
    fetchData: async () => {
        try {
            const response = await axios.get('https://gist.githubusercontent.com/audrhks29/1be23a49866f8d85b9d57c519256dec4/raw/a83180f474d2d0c80fdbfb251d9575b24c554b47/noticeData.json');
            const sortedData = response.data.sort((a, b) => {
                return b.id - a.id;
            });
            set({ noticeData: sortedData });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    },
});

const useNoticeStore = create(devtools(useAppState))
export default useNoticeStore;

