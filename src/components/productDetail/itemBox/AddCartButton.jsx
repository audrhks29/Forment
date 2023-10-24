import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../../../store/user-store';
import useProductDetailStore from '../../../store/productDetail-store';
import useBasketStore from '../../../store/basket-store';

const AddCartButton = memo(() => {
  const navigate = useNavigate()
  const { loginState } = useUserStore(state => state);
  const { selectedItems } = useProductDetailStore(state => state)
  const { handleAddBasket } = useBasketStore(state => state)

  return (
    <button
      onClick={() => {
        if (selectedItems.length === 0) {
          alert('상품을 선택해주세요');
          return;
        }
        else if (selectedItems.length > 0) {
          const confirmData = confirm("장바구니에 담으시겠습니까?")
          if (confirmData) {
            selectedItems.forEach(item => handleAddBasket(item, loginState, navigate))
          }
          else {
            alert('취소되었습니다.')
          }
        }
      }
      }
    >
      장바구니에 담기
    </button>
  );
});

export default AddCartButton;