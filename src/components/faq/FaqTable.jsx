import React, { memo } from 'react';

import { Link } from 'react-router-dom';

import { NoticeTableContainer } from '../../styled/NoticeStyles';

import usePaginationStore from '../../store/pagination-store';

const FaqTable = memo(() => {
  const { slicedData } = usePaginationStore(state => state);
  return (
    <NoticeTableContainer>
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
                <td><Link to={`/faq/${item.id}`}>{title}</Link></td>
                <td>{author}</td>
                <td>{date}</td>
                <td>{views}</td>
              </tr>
            )
          })
        }
      </tbody>
    </NoticeTableContainer>
  );
});

export default FaqTable;