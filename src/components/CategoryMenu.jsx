import React, { memo } from 'react';
import { useLocation } from 'react-router-dom';
import useProductStore from '../store/product-store';
import useNoticeStore from '../store/notice-store';
import { CategoryContainer } from '../styled/CategoryStyles';

const CategoryMenu = memo(() => {
    const { productData, productCategories, fragranceCategories, selectedCategory } = useProductStore(state => state);
    const { setCategoryAndFilteredData } = useProductStore(state => state);
    const { noticeCategories } = useNoticeStore(state => state);
    const location = useLocation();
    const pathname = location.pathname;
    const getCategoryArray = () => {
        if (pathname.includes('product')) {
            return productCategories;
        } else if (pathname.includes('fragrance')) {
            return fragranceCategories;
        } else if (pathname.includes('notice')) {
            return noticeCategories;
        }
        return [];
    }
    const categoryArray = getCategoryArray();
    return (
        <CategoryContainer>
            <ul>
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
            </ul>
        </CategoryContainer>
    );
});

export default CategoryMenu;