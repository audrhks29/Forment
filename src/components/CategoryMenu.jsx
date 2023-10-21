import React, { memo } from 'react';

import { useLocation } from 'react-router-dom';

import useProductStore from '../store/product-store';

import { CategoryContainer } from '../styled/CategoryStyles';

const CategoryMenu = memo(() => {
    const { productData, productCategories, fragranceCategories, selectedCategory } = useProductStore(state => state);
    const { setCategoryAndFilteredData } = useProductStore(state => state);
    const location = useLocation();
    const pathname = location.pathname;

    const getCategoryArray = () => {
        if (pathname.includes('product')) {
            return productCategories;
        } else if (pathname.includes('fragrance')) {
            return fragranceCategories;
        }
        return [];
    }

    const categoryArray = getCategoryArray();
    return (
        <CategoryContainer>
            <ul>
                {
                    categoryArray.map(item => (
                        <li
                            key={item.id}
                            className={item.label === selectedCategory ? 'on' : ''}
                            onClick={() => setCategoryAndFilteredData(item.label, productData)}
                        >
                            <div className='img_box'>
                                <img src={item.image} alt="" />
                            </div>
                            <span>{item.label}</span>
                        </li>
                    ))
                }
            </ul>
        </CategoryContainer>
    );
});

export default CategoryMenu;