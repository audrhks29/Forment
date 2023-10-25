import React, { memo, useLayoutEffect } from 'react';
import useProductStore from '../store/product-store';
import { ProductContainer, SearchContainer } from '../styled/ProductStyles';
import CategoryMenu from '../components/CategoryMenu';
import ProductItems from './productItems';
import { AiOutlineSearch } from 'react-icons/ai';
const AllProductAndFragrance = memo(() => {
    const { filteredProductData, searchKeywords } = useProductStore(state => state);
    const { fetchData, setInitialCategory, settingSearchKeywords, handleFiltered } = useProductStore(state => state);

    useLayoutEffect(() => {
        fetchData().then(() => {
            setInitialCategory();
        })
    }, []);

    const handle = (e) => {
        settingSearchKeywords(e)
        handleFiltered()
    }

    return (
        <ProductContainer>
            <div className='inner'>
                <CategoryMenu />
                <SearchContainer>
                    <div className='lengthBox'>총 <strong>{filteredProductData.length}개</strong>의 상품이 있습니다.</div>
                    <input
                        type="text"
                        value={searchKeywords}
                        onChange={(e) => handle(e)}
                        placeholder='제품명을 입력하세요'
                    />
                </SearchContainer>
                <ProductItems />
            </div>
        </ProductContainer>
    )
});

export default AllProductAndFragrance;