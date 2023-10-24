import React, { memo, useEffect } from 'react';
import { PaginationContainer } from '../styled/paginationStyles';
import { TfiAngleDoubleLeft, TfiAngleDoubleRight, TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi';
import useFaqStore from '../store/faq-store';
import usePaginationStore from '../store/Pagination-store';

const Pagination = memo(() => {
    const { faqData } = useFaqStore(state => state);
    const { slicedData, pageAmount, currentPage, totalPage } = usePaginationStore(state => state)
    const { setData, setPagination, handleMovePage } = usePaginationStore(state => state)

    useEffect(() => {
        setData(faqData)
        setPagination();
    }, []);

    return (
        <PaginationContainer>
            <li onClick={() => handleMovePage(1)}><TfiAngleDoubleLeft /></li>
            <li onClick={() => handleMovePage(currentPage - 1)}><TfiAngleLeft /></li>
            {
                slicedData && totalPage.map((item, index) => {
                    return (
                        <li
                            className={currentPage - 1 === index ? "pagingOn" : ""}
                            key={index}
                            onClick={() => handleMovePage(index + 1)}
                        >
                            {item}
                        </li>
                    )
                })
            }
            <li onClick={() => handleMovePage(currentPage + 1)}><TfiAngleRight /></li>
            <li onClick={() => handleMovePage(pageAmount)}><TfiAngleDoubleRight /></li>
        </PaginationContainer>
    );
});

export default Pagination;