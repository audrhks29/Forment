import React, { memo, useEffect, useLayoutEffect } from 'react';
import useFaqStore from '../store/faq-store';
import { NoticeItemContainer, NoticeTable } from '../styled/NoticeStyles';
import CategoryMenu from '../components/CategoryMenu';
import Pagination from '../components/pagination';
import usePaginationStore from '../store/pagination-store';
const Faq = memo(() => {
    const { faqData } = useFaqStore(state => state);
    const { fetchData } = useFaqStore(state => state);
    const { setData, slicedData, setPagination } = usePaginationStore(state => state);
    useEffect(() => {
        fetchData()
    }, []);
    useLayoutEffect(() => {
        setData(faqData)
        setPagination();
    }, [faqData])
    return (
        <NoticeItemContainer>
            <div className='inner'>
                <h3 style={{ padding: "20px 0 0 0" }}>FAQ</h3>
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
        </NoticeItemContainer>
    );
});

export default Faq;