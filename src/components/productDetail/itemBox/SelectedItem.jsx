import React, { memo } from 'react';
import useProductDetailStore from '../../../store/productDetail-store';
import { AiOutlineClose } from 'react-icons/ai';

const SelectedItem = memo(() => {
  const { selectedItems } = useProductDetailStore(state => state)
  const { handleIncreaseAmount, handleDecreaseAmount, handleDeleteSelectItem } = useProductDetailStore(state => state)

  return (
    <div className='selected_itemBox'>
      {
        selectedItems.map((item, index) => {
          const { productName, productOption, productSelect, amount } = item;
          return (
            <div className='selected_item' key={index}>
              <ul>
                <li><strong>{productName}</strong></li>
                <li><span>{productSelect}/{productOption}</span></li>
              </ul>
              <div className='item_amount_count'>
                <input type="text" value={amount} readOnly />
                <div className='btn_wrap'>
                  <button
                    onClick={() => handleIncreaseAmount(index)}
                    readOnly
                  >
                    <img src="../public/images/btn_count_up.gif" alt="increase" />
                  </button>
                  <button
                    onClick={() => handleDecreaseAmount(index)}
                    readOnly
                  >
                    <img src="../public/images/btn_count_down.gif" alt="decrease" />
                  </button>
                </div>
              </div>
              <div
                className='close_wrap'
                onClick={() => handleDeleteSelectItem(index)}
              >
                <i><AiOutlineClose /></i>
              </div>
            </div>
          )
        })
      }
    </div>
  );
});

export default SelectedItem;