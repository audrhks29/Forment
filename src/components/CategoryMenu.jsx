import React, { memo } from 'react';
import { useLocation } from 'react-router-dom';
import useProductStore from '../store/product';

const CategoryMenu = memo(() => {
    const { productData, productCategories, fragranceCategories, selectedCategory, setCategoryAndFilteredData } = useProductStore(state => state);
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
        <>
            {
                categoryArray.map((item) => (
                    <li
                        key={item}
                        className={item === selectedCategory ? 'on' : ''}
                        onClick={() => setCategoryAndFilteredData(item, productData)}
                    >
                        {item}
                    </li>
                ))
            }
        </>
    );
});

export default CategoryMenu;