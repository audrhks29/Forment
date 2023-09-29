import React, { memo, useEffect } from 'react';
import { FaqItemContainer } from '../styled/FaqStyles';
import useFaqStore from '../store/faq-store';
import { NoticeTable } from '../styled/NoticeStyles';
import CategoryMenu from '../components/CategoryMenu';
import Pagination from '../components/pagination';
import usePaginationStore from '../store/pagination-store';
const Faq = memo(() => {
    const { faqData } = useFaqStore(state => state);
    const { fetchData } = useFaqStore(state => state);
    const { setData, slicedData, setPagination } = usePaginationStore(state => state);
    useEffect(() => {
        fetchData().then(() => {
            setData(faqData)
            setPagination();
        })
    }, []);
    return (
        <FaqItemContainer>
            <div className='inner'>
                <CategoryMenu />
                <NoticeTable>
                    <colgroup>
                        <col width="80px" />
                        <col width="970px" />
                        <col width="100px" />
                        <col width="150px" />
                        <col width="100px" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>목록</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일</th>
                            <th>조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            slicedData.map(item => {
                                const { id, title, author, views, date, content } = item;
                                return (
                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td>{title}</td>
                                        <td>{author}</td>
                                        <td>{date}</td>
                                        <td>{views}</td>
                                    </tr>
                                )

                            })
                        }
                    </tbody>
                </NoticeTable>
                <Pagination />
            </div>
        </FaqItemContainer>
    );
});

export default Faq;