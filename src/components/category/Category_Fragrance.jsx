import React, { memo } from 'react';
import useProductStore from '../../store/product';
import { CategoryContainer } from '../../styled/ProductStyles';

const Category_Fragrance = memo(() => {
    const { fragranceCategories, selectedCategory, productData, filteredData, setCategoryAndFilteredData } = useProductStore(state => state);
    return (
        <CategoryContainer>
            <ul>
                {
                    fragranceCategories.map((item) => (
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

export default Category_Fragrance;