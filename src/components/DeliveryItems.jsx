import React, { memo } from 'react';
import { ReviewContainer } from '../styled/ProductStyles';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BsCart, BsFillCartFill } from 'react-icons/bs';
import { DeliveryItemContainer } from '../styled/DeliveryStyles';
import useDeliveryStore from '../store/delivery-store';
const DeliveryItems = memo(() => {
    const { deliveryData } = useDeliveryStore(state => state);
    console.log(deliveryData);
    return (
        <DeliveryItemContainer>
            {
                deliveryData.map((item) => {
                    const { titleImage, productName, price, salePrice, tag } = item
                    return (
                        <div key={item.id} className='itemBox'>
                            <div>
                                <img src={titleImage} alt="" />
                            </div>
                            <ul>
                                <li>{productName}</li>
                                <li>
                                    <strong>{salePrice.toLocaleString()}원</strong>
                                    <span>{price.toLocaleString()}원</span>
                                </li>
                                <li>{tag}</li>
                            </ul>
                            <ReviewContainer>
                                <span>( 리뷰 215개 )</span>
                                <div>
                                    <i><AiOutlineHeart /></i>
                                    {/* <AiFillHeart /> */}
                                    <i><BsCart /></i>
                                    {/* <BsFillCartFill /> */}
                                </div>
                            </ReviewContainer>

                        </div>
                    )
                })
            }
        </DeliveryItemContainer>
    );
});

export default DeliveryItems;