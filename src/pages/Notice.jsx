import React, { memo, useEffect, useLayoutEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import usePaginationStore from './../store/pagination-store';
import useNoticeStore from '../store/notice-store';

import { NoticeItemContainer, NoticeTable } from '../styled/NoticeStyles';

import CategoryMenu from '../components/CategoryMenu';
import Pagination from '../components/pagination';

const Notice = memo(() => {
    const { noticeData } = useNoticeStore(state => state);
    const { fetchData } = useNoticeStore(state => state);
    const { setData, slicedData, setPagination } = usePaginationStore(state => state);

    useEffect(() => {
        fetchData()
    }, []);

    useLayoutEffect(() => {
        setData(noticeData)
        setPagination();
    }, [noticeData])

    return (
        <NoticeItemContainer>
            <div className='inner'>
                <h3>NOTICE</h3>
                <NoticeTable>
                    <colgroup>
                        <col width="80px" />
                        <col width="1120px" />
                        <col width="100px" />
                        <col width="100px" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>목록</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            slicedData.map(item => {
                                const { id, title, author, views, content } = item;
                                return (
                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td><Link to={`/notice/${item.id}`}>{title}</Link></td>
                                        <td>{author}</td>
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

export default Notice;