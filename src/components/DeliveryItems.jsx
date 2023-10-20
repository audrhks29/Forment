import React, { memo } from 'react';
import { ReviewContainer } from '../styled/ProductStyles';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BsCart, BsFillCartFill } from 'react-icons/bs';
import { DeliveryItemContainer } from '../styled/DeliveryStyles';
import useDeliveryStore from '../store/delivery-store';
import { Link } from 'react-router-dom';
const DeliveryItems = memo(() => {
    const { deliveryData } = useDeliveryStore(state => state);
    console.log(deliveryData);
    return (
        <DeliveryItemContainer>
            {
                deliveryData.map((item) => {
                    const { titleImage, productName, price, salePrice, tag, link } = item
                    return (
                        <div key={item.id} className='itemBox'>
                            <div>
                                <Link to={link}><img src={titleImage} alt="" /></Link>
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