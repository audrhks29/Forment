import React, { memo, useEffect, useState } from 'react';

import useProductDetailStore from '../../store/productDetail-store';

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import TextBox from './itemBox/TextBox';
import SelectedOption from './itemBox/SelectedOption';
import SelectedItem from './itemBox/SelectedItem';
import AddCartButton from './itemBox/AddCartButton';
import PurchaseButton from './itemBox/PurchaseButton';
import SelectedSet from './itemBox/SelectedSet';
import useProductStore from '../../store/product-store';

const ItemBox = memo(() => {
  const { paramsData, selectedItems } = useProductDetailStore(state => state)
  const { likedItems } = useProductStore(state => state)
  const { handleLikeClick } = useProductStore(state => state)
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    const aa = selectedItems.reduce((accumulator, item) => {
      return accumulator + item.price * item.amount;
    }, 0);
    setTotalPrice(aa)
  }, [selectedItems])

  useEffect(() => {
    const aa = selectedItems.reduce((accumulator, item) => {
      return accumulator + item.amount;
    }, 0);
    setTotalAmount(aa)
  }, [selectedItems])
  const isLiked = likedItems.includes(paramsData.id);
  return (
    <div className='product_itemBox'>
      <div className='product_imgBox'>
        <img src={paramsData.titleImage} alt="" />
      </div>
      <div className='product_descBox'>
        <TextBox />
        <div className='product_optBox'>
          <SelectedOption />
          <SelectedSet />
          {selectedItems.length > 0 && <SelectedItem />}
          {
            selectedItems.length > 0 &&
            <div className='total_priceBox'>
              <strong>{totalPrice.toLocaleString()}원</strong>
              <span>({totalAmount}개)</span>
            </div>
          }
          <div className='btn_Wrap'>
            <button onClick={() => handleLikeClick(paramsData.id)}>
              <i>
                {
                  isLiked
                    ? <AiFillHeart style={{ color: "red" }} />
                    : <AiOutlineHeart />
                }
              </i>

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