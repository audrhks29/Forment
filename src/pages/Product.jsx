import React, { memo, useEffect } from 'react';
import useProductStore from '../store/product';
import { ProductContainer, ProductItemContainer } from '../styled/ProductStyles';

import Category_AllProduct from '../components/category/Category_AllProduct';
import ProductAndFragrance from '../components/ProductAndFragrance';

const Product = memo(() => {
    const { productData, setInitialCategory, fetchData, selectedCategory, setCategoryAndFilteredData, filteredProductData } = useProductStore(state => state);
    useEffect(() => {
        fetchData().then(() => {
            setInitialCategory();
        })
    }, []);
    useEffect(() => {
        setCategoryAndFilteredData(selectedCategory, productData)
    }, [selectedCategory, productData])
    return (
        <>
            <ProductContainer>
                <div className='inner'>
                    <Category_AllProduct />
                    <p className='productLength'>총 {filteredProductData.length}개의 상품이 있습니다.</p>
                    <ProductAndFragrance />
                </div>
            </ProductContainer >
        </>
    );
});

export default Product;