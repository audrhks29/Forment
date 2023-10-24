import React, { memo, useEffect } from 'react';
import useProductDetailStore from '../../store/productDetail-store';
import { AiOutlineHeart } from 'react-icons/ai';
import TextBox from './itemBox/textBox';
import SelectedOption from './itemBox/SelectedOption';
import SelectedItem from './itemBox/SelectedItem';
import AddCartButton from './itemBox/AddCartButton';
import PurchaseButton from './itemBox/PurchaseButton';
import SelectedSet from './itemBox/SelectedSet';

const ItemBox = memo(() => {
  const { paramsData, selectedItems } = useProductDetailStore(state => state)

  const totalPrice = selectedItems.reduce((accumulator, item) => {
    return accumulator + item.price * item.amount;
  }, 0);

  const totalAmount = selectedItems.reduce((accumulator, item) => {
    return accumulator + item.amount;
  }, 0);

  return (
    <div className='product_itemBox'>
      <div className='product_imgBox'>
        <img src={paramsData.titleImage} alt="" />
      </div>
      <div className='product_descBox'>
        <TextBox />
        <div className='product_optBox'>
          <SelectedOption />
          <SelectedSet />{
            selectedItems.length > 0 && <SelectedItem />}
          {
            selectedItems.length > 0 &&
            <div className='total_priceBox'>
              <strong>{totalPrice.toLocaleString()}원</strong>
              <span>({totalAmount}개)</span>
            </div>
          }
          <div className='btn_Wrap'>
            <button>
              <i><AiOutlineHeart /></i>
            </button>
            <AddCartButton />
            <PurchaseButton />
          </div>
        </div>
      </div>
    </div>
  );
});

export default ItemBox;