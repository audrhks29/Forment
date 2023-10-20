import create from 'zustand';
import { devtools } from 'zustand/middleware'

const useAppState = (set, getState) => ({
  orderData: [],
  handleOrder: (selectedItems, loginUserData) => {
    const getOrderProductName = selectedItems.map(item => `${item.productName}/${item.productOption}`).join('\n')
    const orderConfirmMessage = `${getOrderProductName}\n\n위 ${selectedItems.length}개의 상품을 구매하시겠습니까?`
    const orderConfirm = confirm(orderConfirmMessage)
    if (orderConfirm) {
      const currentTime = new Date();
      const year = currentTime.getFullYear();
      const month = (currentTime.getMonth() + 1).toString().padStart(2, '0'); // 두 자리로 포맷
      const day = currentTime.getDate();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const seconds = currentTime.getSeconds();
      const orderTime = new Date(year, month - 1, day, hours, minutes, seconds);
      const userId = loginUserData.id.toString().padStart(5, '0')
      const orderNumber = year.toString() + month + day.toString() + hours.toString() + minutes.toString() + seconds.toString() + userId.toString()
      const orderWithTime = selectedItems.map(item => ({
        ...item,
        orderTime: orderTime,
        state: "배송준비",
        orderNumber: orderNumber
      }));
      const updatedOrderData = [...getState().orderData, ...orderWithTime];
      updatedOrderData.sort((a, b) => b.orderTime - a.orderTime);
      set({ orderData: updatedOrderData })
      alert("구매가 완료되었습니다");
    }
  },

});

const useOrderStore = create(devtools(useAppState))
export default useOrderStore;

