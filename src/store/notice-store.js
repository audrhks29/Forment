import create from 'zustand';
import axios from 'axios';
import { devtools } from 'zustand/middleware'

const useAppState = (set) => ({
    noticeData: [],
    noticeCategories: ['공지사항', '자주묻는질문', '멤버십'],
    fetchData: async () => {
        try {
            const response = await axios.get('https://gist.githubusercontent.com/audrhks29/1be23a49866f8d85b9d57c519256dec4/raw/727d450fe04ddf1b9d12770e677ad5db1a6a6954/noticeData.json');
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

