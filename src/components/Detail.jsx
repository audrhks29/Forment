import React, { memo, useEffect, useLayoutEffect, useState } from 'react';

import { Link, useLocation, useParams } from 'react-router-dom';

import useNoticeStore from '../store/notice-store';
import useFaqStore from '../store/faq-store';

import { DetailContainer } from '../styled/DetailStyles';

const Detail = memo(() => {
  const { noticeID } = useParams();
  const { faqID } = useParams();
  const { noticeData } = useNoticeStore(state => state)
  const { faqData } = useFaqStore(state => state)
  const location = useLocation();
  const pathname = location.pathname;
  const [parseId, setParseID] = useState()
  const [data, setData] = useState([]);
  const [chosenData, setChosenData] = useState([]);
  const [url, setUrl] = useState('');
  const [prevContent, setPrevContent] = useState([])
  const [nextContent, setNextContent] = useState([])
  useLayoutEffect(() => {
    if (pathname.includes('notice')) {
      setParseID(parseInt(noticeID, 10))
      setData(noticeData)
      setUrl("notice")
    } else if (pathname.includes('faq')) {
      setParseID(parseInt(faqID, 10))
      setData(faqData)
      setUrl("faq")
    }

  }, [pathname, noticeID, faqID])
  useEffect(() => {
    if (data.length > 0) {
      setChosenData(data[data.length - parseId]);
      setPrevContent(data[data.length - parseId + 1])
      setNextContent(data[data.length - parseId - 1])
    }
  }, [data, parseId]);

  const { title, author, views, content } = chosenData;
  return (
    <DetailContainer>
      <div className='inner'>
        <h3>공지사항</h3>
        <table className='detail_table'>
          <tbody>
            <tr>
              <th>제목</th>
              <td>{title}</td>
            </tr>
            <tr>
              <th>작성자</th>
              <td>{author}</td>
            </tr>
            <tr className='viewsBox'>
              <td colSpan={2}><strong>조회수</strong> {views}</td>
            </tr>
            <tr className='contentBox'>
              <td dangerouslySetInnerHTML={{ __html: content }} colSpan={2}></td>
            </tr>
          </tbody>
        </table>
        <table className='moveNotice'>
          <tbody>
            {
              prevContent &&
              <tr>
                <th>이전글</th>
                <td><Link to={`/${url}/${parseId - 1}`}>{prevContent.title}</Link></td>
              </tr>
            }
            {
              nextContent &&
              <tr>
                <th>다음글</th>
                <td><Link to={`/${url}/${parseId + 1}`}>{nextContent.title}</Link></td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </DetailContainer>
  );
});

export default Detail;