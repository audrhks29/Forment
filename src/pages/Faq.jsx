import React, { memo, useLayoutEffect } from 'react';

import { NoticeItemContainer } from '../styled/NoticeStyles';

import Pagination from '../components/Pagination';
import FaqTable from '../components/faq/FaqTable';
import FaqSkeleton from '../components/skeleton/FaqSkeleton';

import useFaqStore from '../store/faq-store';
import usePaginationStore from '../store/pagination-store';

const Faq = memo(() => {
    const { faqData, isLoading } = useFaqStore(state => state);
    const { fetchData } = useFaqStore(state => state);

    const { setData, setPagination } = usePaginationStore(state => state);
    useLayoutEffect(() => {
        fetchData()
    }, []);

    useLayoutEffect(() => {
        setData(faqData)
        setPagination();
    }, [faqData])

    return (
        <NoticeItemContainer>
            <div className='inner'>
                <h3>FAQ</h3>
                {!isLoading ? <FaqTable /> : <FaqSkeleton />}
                <Pagination />
            </div>
        </NoticeItemContainer>
    );
});

export default Faq;