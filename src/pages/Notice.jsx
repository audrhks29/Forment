import React, { memo, useEffect, useLayoutEffect } from 'react';

import usePaginationStore from './../store/pagination-store';
import useNoticeStore from '../store/notice-store';

import { NoticeItemContainer } from '../styled/NoticeStyles';

import Pagination from '../components/Pagination';
import NoticeTable from '../components/notice/NoticeTable';
import NoticeSkeleton from '../components/skeleton/NoticeSkeleton';

const Notice = memo(() => {
  const { noticeData, isLoading } = useNoticeStore(state => state);
  const { fetchData } = useNoticeStore(state => state);
  const { setData, setPagination } = usePaginationStore(state => state);

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
        {!isLoading ? <NoticeTable /> : <NoticeSkeleton />}
        <Pagination />
      </div>
    </NoticeItemContainer>
  );
});

export default Notice;