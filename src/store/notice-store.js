import create from 'zustand';
import axios from 'axios';
import { devtools } from 'zustand/middleware'

const useAppState = (set) => ({
    noticeData: [],
    noticeCategories: ['공지사항', '자주묻는질문', '멤버십'],
    fetchData: async () => {
        try {
            const response = await axios.get('https://gist.githubusercontent.com/audrhks29/1be23a49866f8d85b9d57c519256dec4/raw/9b9e9f37e7a06a8e327127577069009c706fb243/noticeData.json');
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

