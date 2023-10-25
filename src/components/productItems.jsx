import React, { memo } from 'react';

import { ProductItemContainer, ReviewContainer } from '../styled/ProductStyles';

import useProductStore from '../store/product-store';

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import { Link } from 'react-router-dom';

const ProductItems = memo(() => {
    const { filteredProductData, likedItems } = useProductStore(state => state);
    const { handleLikeClick } = useProductStore(state => state);
    return (
        <ProductItemContainer>
            {
                filteredProductData.map((item, index) => {
                    const { id, titleImage, productName, price, salePrice, fragranceInfo, review } = item;
                    const isLiked = likedItems.includes(id);
                    return (
                        <div key={id} className='itemBox'>
                            <div>
                                <Link to={`/product/${id}`}>
                                    <img src={titleImage} alt="" />
                                </Link>
                            </div>
                            <ul>
                                <li>{productName}</li>
                                <li>
                                    <strong>
                                        {salePrice.toLocaleString()}원
                                    </strong>
                                    <span className='color_red'>
                                        {price.toLocaleString()}원
                                    </span>
                                </li>
                                <li>{fragranceInfo}</li>
                            </ul>
                            <ReviewContainer>
                                <span>(리뷰 {review.toLocaleString()}개)</span>
                                <div onClick={() => handleLikeClick(id)}>
                                    <i>
                                        {
                                            isLiked
                                                ? <AiFillHeart style={{ color: "red" }} />
                                                : <AiOutlineHeart />
                                        }
                                    </i>
                                </div>
                            </ReviewContainer>
                        </div>
                    )
                })
            }
        </ProductItemContainer>
    );
});

export default ProductItems;