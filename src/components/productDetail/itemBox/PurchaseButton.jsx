import React, { memo } from 'react';
import useUserStore from '../../../store/user-store';
import useProductDetailStore from '../../../store/productDetail-store';
import useOrderStore from './../../../store/order_store';

const PurchaseButton = memo(() => {
  const { loginUserData } = useUserStore(state => state);
  const { selectedItems } = useProductDetailStore(state => state)
  const { handleOrder } = useOrderStore(state => state)

  return (
    <button
      onClick={() => handleOrder(selectedItems, loginUserData)}
    >
      구매하기
    </button>
  );
});

export default PurchaseButton;