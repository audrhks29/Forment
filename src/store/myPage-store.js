import create from 'zustand';
import { devtools } from 'zustand/middleware'

const useAppState = (set, getState) => ({
  popupState: false,
  onList: 1,
  selectedData: [],
  handlePopupState: (item) => {
    if (!getState().popupState) {
      set({ selectedData: item })
      if (!getState().popupState && getState().selectedData.state === "배송중") {
        alert("배송중인 상품은 변경할 수 없습니다.")
      }
      else {
        set((state) => ({ popupState: !state.popupState }))
      }
    }
    else {
      set({ selectedData: [] })
      set((state) => ({ popupState: !state.popupState }))
    }

    console.log(getState().selectedData);
  },
  handleChangeList: (num) => {
    set({ onList: num })
  },
  handleExchange: (selectedData, productStateValue) => {
    selectedData.state = productStateValue;
    console.log(selectedData.state);
  },

});

const useMyPageStore = create(devtools(useAppState))
export default useMyPageStore;

