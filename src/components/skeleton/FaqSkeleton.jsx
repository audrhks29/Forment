import React, { memo } from 'react';

import { NoticeTableSkeletonContainer } from '../../styled/SkeletonStyles';

const FaqSkeleton = memo(() => {
  const previewArr = Array.from(Array(10), (_, index) => ({ id: index + 1 }));
  return (
    <NoticeTableSkeletonContainer>
      <colgroup>
        <col width="80px" />
        <col width="970px" />
        <col width="100px" />
        <col width="150px" />
        <col width="100px" />
      </colgroup>
      <thead>
        <tr>
          <th><div className="t1"></div></th>
          <th><div className="t2"></div></th>
          <th><div className="t3"></div></th>
          <th><div className="t4"></div></th>
          <th><div className="t5"></div></th>
        </tr>
      </thead>
      <tbody>
        {
          previewArr.map(item => {
            return (
              <tr key={item.id}>
                <td><div className='t1'></div></td>
                <td><div className='t2'></div></td>
                <td><div className='t3'></div></td>
                <td><div className='t4'></div></td>
                <td><div className='t5'></div></td>
              </tr>
            )
          })
        }
      </tbody>
    </NoticeTableSkeletonContainer>
  );
});

export default FaqSkeleton;