import React, { memo } from 'react';

import { DeliveryItemContainer } from '../styled/DeliveryStyles';

import useDeliveryStore from '../store/delivery-store';

import { Link } from 'react-router-dom';
const DeliveryItems = memo(() => {
    const { deliveryData } = useDeliveryStore(state => state);
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
                        </div>
                    )
                })
            }
        </DeliveryItemContainer>
    );
});

export default DeliveryItems;