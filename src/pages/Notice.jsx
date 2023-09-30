import React, { memo, useEffect, useState } from 'react';
import { NoticeItemContainer, NoticeTable } from '../styled/NoticeStyles';
import useNoticeStore from '../store/notice-store';
import CategoryMenu from '../components/CategoryMenu';
import { TfiAngleDoubleLeft, TfiAngleDoubleRight, TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { PaginationContainer } from '../styled/paginationStyles';
import Pagination from '../components/pagination';
import usePaginationStore from '../store/pagination-store';
const Notice = memo(() => {
    // const [currentPage, setCurrentPage] = useState(1);
    const { noticeData } = useNoticeStore(state => state);
    const { fetchData } = useNoticeStore(state => state);
    const { setData, slicedData, setPagination } = usePaginationStore(state => state);
    useEffect(() => {
        fetchData()
    }, []);
    useEffect(() => {
        setData(noticeData)
        setPagination();
    }, [noticeData])

    // const pagePerItem = 10; // 한 페이지당 표시할 데이터 수
    // const pageAmount = Math.ceil(noticeData.length / pagePerItem) // 페이지 수
    // const slicedData = noticeData.slice((currentPage - 1) * pagePerItem, currentPage * pagePerItem) // 페이지에 출력되는 데이터
    // const totalPage = Array.from({ length: pageAmount }, (_, index) => index + 1);
    // const handleMovePage = (pageNum) => {
    //     if (pageNum >= 1 && pageNum <= pageAmount) {
    //         setCurrentPage(pageNum)
    //     }
    // }
    return (
        <NoticeItemContainer>
            <div className='inner'>
                <CategoryMenu />
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
                                        <td>{title}</td>
                                        <td>{author}</td>
                                        <td>{views}</td>
                                    </tr>
                                )

                            })
                        }
                    </tbody>
                </NoticeTable>
                <Pagination />

                {/* {
                    noticeData.map(item => {
                        const { content } = item;
                        return (
                            <div dangerouslySetInnerHTML={{ __html: content }}></div>
                        )
                    })
                } */}
            </div>
        </NoticeItemContainer>
    );
});

export default Notice;