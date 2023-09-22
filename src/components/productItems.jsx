import React, { memo } from 'react';
import { ProductItemContainer } from '../styled/ProductStyles';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BsCart, BsFillCartFill } from 'react-icons/bs';
import useProductStore from '../store/product';
const ProductItems = memo(() => {
    const { filteredProductData } = useProductStore(state => state);
    return (
        <ProductItemContainer>
            {
                filteredProductData.map((item) => {
                    const { titleImage, productName, price, salePrice, fragranceInfo } = item
                    return (
                        <div key={item.id}>
                            <div>
                                <img src={titleImage} alt="" />
                            </div>
                            <ul>
                                <li>{fragranceInfo}</li>
                                <li>{productName}</li>
                                <li>
                                    <strong>{salePrice.toLocaleString()}원</strong>
                                    <span>{price.toLocaleString()}원</span>
                                </li>
                            </ul>
                            <AiOutlineHeart />
                            {/* <AiFillHeart /> */}
                            <BsCart />
                            {/* <BsFillCartFill /> */}
                        </div>
                    )
                })
            }
        </ProductItemContainer>
    );
});

export default ProductItems;