import React, { memo, useEffect } from 'react';
import Category_Fragrance from './../components/category/Category_Fragrance';
import { ProductContainer } from '../styled/ProductStyles';
import useProductStore from '../store/product';
import ProductAndFragrance from '../components/ProductAndFragrance';

const Fragrance = memo(() => {
    const { productData, fetchData, selectedCategory, setInitialCategory, setCategoryAndFilteredData, filteredProductData } = useProductStore(state => state);
    useEffect(() => {
        fetchData().then(() => {
            setInitialCategory();
        })
    }, []);
    useEffect(() => {
        setInitialCategory()
    }, []);
    useEffect(() => {
        setCategoryAndFilteredData(selectedCategory, productData)
    }, [selectedCategory, productData])
    return (
        <ProductContainer>
            <div className='inner'>
                <Category_Fragrance />
                <p className='productLength'>총 {filteredProductData.length}개의 상품이 있습니다.</p>
                <ProductAndFragrance />
            </div>
        </ProductContainer>
    );
});

export default Fragrance;