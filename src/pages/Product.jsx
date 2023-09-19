import React, { memo, useEffect } from 'react';
import useProductStore from '../store/product';
import { ProductContainer, ProductItemContainer } from '../styled/ProductStyles';
const Product = memo(() => {
    const { productData, fetchData } = useProductStore(state => state);

    useEffect(() => {
        fetchData();
    }, []);
    console.log(productData);

    return (
        <ProductContainer>
            <div className='inner'>
                <ProductItemContainer>
                    {
                        productData.map((item) => {
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
                                </div>
                            )
                        })
                    }
                </ProductItemContainer>
            </div>
        </ProductContainer>
    );
});

export default Product;