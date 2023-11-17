import React, { memo, useEffect } from 'react';

import { NoticeTable } from '../styled/NoticeStyles';

import useFaqStore from '../store/faq-store';
import useNoticeStore from '../store/notice-store';

import { useLocation } from 'react-router-dom';

const CsCenterTable = memo(() => {
    const { noticeData } = useNoticeStore(state => state);
    const { faqData } = useFaqStore(state => state);
    const location = useLocation();
    const pathname = location.pathname;
    const getData = () => {
        if (pathname.includes('notice')) {
            return noticeData;
        } else if (pathname.includes('faq')) {
            return faqData;
        }
    }
    const Data = getData()
    console.log(Data);
    return (
        <NoticeTable>
            <colgroup>
                <col width="80px" />
                {noticeData && <col width="1120px" />}
                {faqData && <col width="970px" />}
                <col width="100px" />
                {faqData && <col width="150px" />}
                <col width="100px" />
            </colgroup>
            <thead>
                <tr>
                    <th>목록</th>
                    <th>제목</th>
                    <th>작성자</th>
                    {faqData && <th>작성일</th>}
                    <th>조회수</th>
                </tr>
            </thead>
            <tbody>
                {
                    faqData.map(item => {
                        const { id, title, author, date, views } = item;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{title}</td>
                                <td>{author}</td>
                                {faqData && <td>{date}</td>}
                                <td>{views}</td>
                            </tr>
                        )

                    })
                }
            </tbody>
        </NoticeTable>
    );
});

export default CsCenterTable;