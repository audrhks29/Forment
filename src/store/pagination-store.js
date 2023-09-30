import { create } from 'zustand';
import { devtools } from 'zustand/middleware'
const useAppState = (set, getState) => ({
    data: [], // 받아오는 데이터
    slicedData: [], // 잘라진 데이터
    pagePerItem: 10, // 페이지당 보여질 data 갯수
    pageAmount: 0, // 총 페이지 갯수
    currentPage: 1, // 현재 페이지
    totalPage: [], // 총 페이지 번호를 담는 배열
    setData: (data) => {
        set({ data: data }) // 데이터 받아오기
        set({ currentPage: 1 }) // 현재 페이지 초기화
    },
    setPagination: () => {
        const state = getState();
        const pagePerItem = state.pagePerItem;
        const pageAmount = Math.ceil(state.data.length / pagePerItem);
        const currentPage = state.currentPage;
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

