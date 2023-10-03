import React, { memo, useEffect, useLayoutEffect } from 'react';
import useProductStore from '../store/product-store';
import { ProductContainer } from '../styled/ProductStyles';
import CategoryMenu from '../components/CategoryMenu';
import ProductItems from './productItems';
const AllProductAndFragrance = memo(() => {
    const { productData, selectedCategory, filteredProductData } = useProductStore(state => state);
    const { fetchData, setInitialCategory, setCategoryAndFilteredData } = useProductStore(state => state);
    useLayoutEffect(() => {
        fetchData().then(() => {
            setInitialCategory();
        })
    }, []);
    useLayoutEffect(() => {
        setCategoryAndFilteredData(selectedCategory, productData)
    }, [selectedCategory, productData])
    return (
        <ProductContainer>
            <div className='inner'>
                <CategoryMenu />
                <p className='productLength'>총 {filteredProductData.length}개의 상품이 있습니다.</p>
                <ProductItems />
            </div>
        </ProductContainer>
    )
});

export default AllProductAndFragrance;