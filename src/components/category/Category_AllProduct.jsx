import React, { memo } from 'react';
import { CategoryContainer } from '../../styled/ProductStyles';
import useProductStore from '../../store/product';
const Category_AllProduct = memo(() => {
    const { productData, productCategories, selectedCategory, setCategoryAndFilteredData } = useProductStore(state => state);
    return (
        <CategoryContainer>
            <ul>
                {
                    productCategories.map((item) => (
                        <li
                            key={item}
                            className={item === selectedCategory ? 'on' : ''}
                            onClick={() => setCategoryAndFilteredData(item, productData)}
                        >
                            {item}
                        </li>
                    ))
                }
            </ul>
        </CategoryContainer>
    );
});

export default Category_AllProduct;