import create from 'zustand';
import { devtools } from 'zustand/middleware'

const useAppState = (set, getState) => ({
  basketData: [],
  handleAddBasket: (item, loginState, navigate) => {
    if (loginState) {
      const state = getState();
      const basketData = state.basketData
      const isItemInBasket = basketData.some((basketItem) => basketItem.productOption === item.productOption);
      if (!isItemInBasket) {
        set((state) => ({
          basketData: [...state.basketData, item], // 이전 아이템들과 함께 새 아이템을 추가합니다.
        }));
      } else {
        alert(`${item.productOption}가 이미 장바구니에 있습니다.`)
      }
    }
    else {
      alert("로그인이 필요한 서비스입니다.")
      navigate('/login')
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
  updateBasketData: (updatedBasketData) => {
    set({ basketData: updatedBasketData });
  },
});

const useBasketStore = create(devtools(useAppState))
export default useBasketStore;

