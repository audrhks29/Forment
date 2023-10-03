import create from 'zustand';
import { devtools } from 'zustand/middleware'

const useAppState = (set, getState) => ({
  basketData: [],
  handleAddBasket: (item) => {
    const state = getState();
    const basketData = state.basketData
    const isItemInBasket = basketData.some((basketItem) => basketItem.id === item.id);
    if (!isItemInBasket) {
      const confirmData = confirm("장바구니에 담으시겠습니까?")
      if (confirmData) {
        set((state) => ({
          basketData: [...state.basketData, item], // 이전 아이템들과 함께 새 아이템을 추가합니다.
        }));
      }
    } else {
      alert("장바구니에 있는 상품입니다.")
    }
  },
  handleRemoveBasket: (productId) => {
    const confirmData = confirm("장바구니에서 삭제하시겠습니까?")
    if (confirmData) {
      set((state) => ({
        basketData: state.basketData.filter((item) => item.id !== productId),
      }));
    }
  },
});

const useBasketStore = create(devtools(useAppState))
export default useBasketStore;

