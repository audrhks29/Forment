import React, { memo } from 'react';

import { useLocation } from 'react-router-dom';

import useProductStore from '../store/product-store';

import { CategoryContainer } from '../styled/CategoryStyles';
import { useEffect } from 'react';

const CategoryMenu = memo(() => {
    const { productData, productCategories, fragranceCategories, selectedCategory } = useProductStore(state => state);
    const { settingSelectedCategory, handleFiltered } = useProductStore(state => state);
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
    const handle = (label) => {
        settingSelectedCategory(label)
        handleFiltered()
    }
    const categoryArray = getCategoryArray();
    return (
        <CategoryContainer>
            <ul>
                {
                    categoryArray.map(item => {
                        const { id, label, image } = item;
                        return (
                            <li
                                key={id}
                                className={label === selectedCategory ? 'on' : ''}
                                onClick={() => handle(label)}
                            >
                                <div className='img_box'>
                                    <img src={image} alt="" />
                                </div>
                                <span>{label}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </CategoryContainer >
    );
});

export default CategoryMenu;