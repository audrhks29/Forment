import React, { memo, useEffect } from 'react';
import useProductStore from '../store/product-store';
import { CategoryContainer, ProductContainer } from '../styled/ProductStyles';
import CategoryMenu from '../components/CategoryMenu';
import ProductItems from './ProductItems';
const AllProductAndFragrance = memo(() => {
    const { productData, selectedCategory, filteredProductData } = useProductStore(state => state);
    const { fetchData, setInitialCategory, setCategoryAndFilteredData } = useProductStore(state => state);
    useEffect(() => {
        fetchData().then(() => {
            setInitialCategory();
        })
    }, []);
    useEffect(() => {
        setCategoryAndFilteredData(selectedCategory, productData)
    }, [selectedCategory, productData])
    return (
        <ProductContainer>
            <div className='inner'>
                <CategoryContainer>
                    <ul>
                        <CategoryMenu />
                    </ul>
                </CategoryContainer>
                <p className='productLength'>총 {filteredProductData.length}개의 상품이 있습니다.</p>
                <ProductItems />
            </div>
        </ProductContainer>
    )
});

export default AllProductAndFragrance;