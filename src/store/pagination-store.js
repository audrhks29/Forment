import create from 'zustand';
import { devtools } from 'zustand/middleware'
const useAppState = (set, getState) => ({
    data: [],
    slicedData: [],
    pagePerItem: 10,
    pageAmount: 0,
    currentPage: 1,
    totalPage: [],
    setData: (data) => {
        set({ data: data })
    },
    setPagination: () => {
        const state = getState();
        const pagePerItem = state.pagePerItem; // 원하는 값으로 설정
        const pageAmount = Math.ceil(state.data.length / pagePerItem);
        const currentPage = state.currentPage; // 원하는 값으로 설정
        const slicedData = state.data.slice((currentPage - 1) * pagePerItem, currentPage * pagePerItem)
        const totalPage = Array.from({ length: pageAmount }, (_, index) => index + 1);
        set({
            slicedData: slicedData,
            pagePerItem: pagePerItem,
            pageAmount: pageAmount,
            currentPage: currentPage,
            totalPage: totalPage,
        });
    },
    handleMovePage: (pageNum) => {
        const state = getState();
        const pageAmount = state.pageAmount;
        const pagePerItem = state.pagePerItem;
        if (pageNum >= 1 && pageNum <= pageAmount) {
            set({
                currentPage: pageNum,
                slicedData: state.data.slice((pageNum - 1) * pagePerItem, pageNum * pagePerItem)
            })
        }
    }
});
const usePaginationStore = create(devtools(useAppState))

export default usePaginationStore;

